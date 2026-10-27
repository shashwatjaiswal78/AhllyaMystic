import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

interface VerifyBody {
  razorpay_order_id?: string;
  razorpay_payment_id?: string;
  razorpay_signature?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as VerifyBody;
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body ?? {};

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ verified: false, error: "Missing fields." }, { status: 400 });
    }

    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      console.error("RAZORPAY_KEY_SECRET is not configured");
      return NextResponse.json(
        { verified: false, error: "Payment verification is not configured." },
        { status: 500 }
      );
    }

    const payload = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto.createHmac("sha256", secret).update(payload).digest("hex");

    const expectedBuf = Buffer.from(expectedSignature, "utf8");
    const actualBuf = Buffer.from(razorpay_signature, "utf8");

    const verified =
      expectedBuf.length === actualBuf.length &&
      crypto.timingSafeEqual(expectedBuf, actualBuf);

    if (!verified) {
      return NextResponse.json({ verified: false }, { status: 400 });
    }

    // Signature confirmed — this is the only path that may mark a payment as
    // successful. Never trust a client claim of "payment succeeded" on its own.
    console.log("Razorpay payment verified", {
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    });
    // TODO: persist order + trigger Resend confirmation email once
    // RESEND_API_KEY / Supabase are configured.

    return NextResponse.json({ verified: true });
  } catch (err) {
    console.error("razorpay verify failed", err);
    return NextResponse.json(
      { verified: false, error: "Unable to verify payment." },
      { status: 500 }
    );
  }
}
