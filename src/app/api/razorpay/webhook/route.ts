import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-razorpay-signature");
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

  if (!signature || !secret) {
    return NextResponse.json({ error: "Signature verification failed." }, { status: 400 });
  }

  const expectedSignature = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");

  const expectedBuf = Buffer.from(expectedSignature, "utf8");
  const actualBuf = Buffer.from(signature, "utf8");

  const verified =
    expectedBuf.length === actualBuf.length && crypto.timingSafeEqual(expectedBuf, actualBuf);

  if (!verified) {
    return NextResponse.json({ error: "Signature verification failed." }, { status: 400 });
  }

  try {
    const payload = JSON.parse(rawBody) as { event?: string; [key: string]: unknown };

    switch (payload.event) {
      case "payment.captured":
        console.log("Razorpay webhook: payment.captured", payload.payload);
        // TODO: persist order + trigger Resend confirmation email once
        // RESEND_API_KEY / Supabase are configured.
        break;
      case "payment.failed":
        console.log("Razorpay webhook: payment.failed", payload.payload);
        // TODO: persist order + trigger Resend confirmation email once
        // RESEND_API_KEY / Supabase are configured.
        break;
      default:
        console.log("Razorpay webhook: unhandled event", payload.event);
    }
  } catch (err) {
    console.error("razorpay webhook: failed to parse body", err);
    // Signature was valid but body wasn't parseable JSON — acknowledge anyway
    // so Razorpay doesn't keep retrying a malformed-but-authentic payload.
  }

  // Always 200 quickly on verified requests (even business-logic no-ops) so
  // Razorpay doesn't treat this as a failed delivery and keep retrying.
  return NextResponse.json({ received: true });
}
