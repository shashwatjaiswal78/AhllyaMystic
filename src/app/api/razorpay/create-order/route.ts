import { NextRequest, NextResponse } from "next/server";
import { getRazorpay } from "@/lib/razorpay";
import { priceOrder } from "@/lib/pricing";

interface CreateOrderBody {
  productId?: unknown;
  extraQuestions?: unknown;
  call?: unknown;
  customer?: { name?: unknown; phone?: unknown; email?: unknown };
  details?: unknown;
}

// Razorpay allows at most 15 note keys of 256 characters each.
const MAX_NOTE = 250;
const MAX_DETAIL_NOTES = 8;

const text = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, MAX_NOTE) : "");

export async function POST(request: NextRequest) {
  try {
    const body = ((await request.json().catch(() => null)) ?? {}) as CreateOrderBody;

    const priced = priceOrder(body);
    if (!priced.ok) {
      return NextResponse.json({ error: priced.error }, { status: 400 });
    }

    const notes: Record<string, string> = { productId: priced.productId };
    if (priced.extraQuestions) notes.extraQuestions = String(priced.extraQuestions);
    if (priced.call) notes.call = priced.call;

    const name = text(body.customer?.name);
    const phone = text(body.customer?.phone);
    const email = text(body.customer?.email);
    if (name) notes.customerName = name;
    if (phone) notes.customerPhone = phone;
    if (email) notes.customerEmail = email;

    if (body.details && typeof body.details === "object") {
      for (const [k, v] of Object.entries(body.details as Record<string, unknown>).slice(0, MAX_DETAIL_NOTES)) {
        const key = text(k).slice(0, 40);
        const value = text(v);
        if (key && value && !(key in notes)) notes[key] = value;
      }
    }

    const order = await getRazorpay().orders.create({
      amount: priced.amountPaise,
      currency: "INR",
      receipt: `rcpt_${priced.productId}_${Date.now()}`.slice(0, 40),
      notes,
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
      productName: priced.name,
    });
  } catch (err) {
    console.error("razorpay create-order failed", err);
    return NextResponse.json({ error: "Unable to create order. Please try again." }, { status: 500 });
  }
}
