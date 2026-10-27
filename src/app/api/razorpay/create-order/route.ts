import { NextRequest, NextResponse } from "next/server";
import { getRazorpay } from "@/lib/razorpay";
import { PRODUCTS, isValidProductId } from "@/lib/products";

interface CreateOrderBody {
  productId?: string;
  customer?: {
    name?: string;
    phone?: string;
    email?: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreateOrderBody;
    const { productId, customer } = body ?? {};

    if (!productId || typeof productId !== "string" || !isValidProductId(productId)) {
      return NextResponse.json({ error: "Invalid product." }, { status: 400 });
    }

    if (!customer?.name || !customer?.phone) {
      return NextResponse.json(
        { error: "Customer name and phone are required." },
        { status: 400 }
      );
    }

    const product = PRODUCTS[productId];

    const order = await getRazorpay().orders.create({
      amount: product.amountPaise,
      currency: "INR",
      receipt: `rcpt_${productId}_${Date.now()}`,
      notes: {
        productId,
        customerName: customer.name,
        customerPhone: customer.phone,
        ...(customer.email ? { customerEmail: customer.email } : {}),
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
      productName: product.name,
    });
  } catch (err) {
    console.error("razorpay create-order failed", err);
    return NextResponse.json(
      { error: "Unable to create order. Please try again." },
      { status: 500 }
    );
  }
}
