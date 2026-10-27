"use client";

import { useState } from "react";

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => {
      open: () => void;
      on: (event: string, handler: (response: unknown) => void) => void;
    };
  }
}

export interface CheckoutCustomer {
  name: string;
  phone: string;
  email?: string;
}

interface RazorpayCheckoutButtonProps {
  productId: string;
  customer: CheckoutCustomer;
  label?: string;
  className?: string;
  disabled?: boolean;
}

type PaymentState = "idle" | "loading" | "verifying" | "success" | "failed";

const RAZORPAY_SCRIPT_SRC = "https://checkout.razorpay.com/v1/checkout.js";

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const existing = document.querySelector(`script[src="${RAZORPAY_SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve(true));
      existing.addEventListener("error", () => resolve(false));
      return;
    }
    const script = document.createElement("script");
    script.src = RAZORPAY_SCRIPT_SRC;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function RazorpayCheckoutButton({
  productId,
  customer,
  label = "Pay now",
  className,
  disabled,
}: RazorpayCheckoutButtonProps) {
  const [state, setState] = useState<PaymentState>("idle");
  const [error, setError] = useState<string | null>(null);

  const handlePay = async () => {
    setError(null);

    if (!customer?.name || !customer?.phone) {
      setError("Please fill in your name and phone number first.");
      return;
    }

    setState("loading");

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      setState("failed");
      setError("Could not load payment gateway. Please check your connection and try again.");
      return;
    }

    try {
      const orderRes = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, customer }),
      });

      if (!orderRes.ok) {
        const data = await orderRes.json().catch(() => ({}));
        throw new Error(data?.error || "Unable to start payment.");
      }

      const order = await orderRes.json();

      const rzp = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: "Ahllya Mystic",
        description: order.productName,
        order_id: order.orderId,
        prefill: {
          name: customer.name,
          contact: customer.phone,
          email: customer.email || undefined,
        },
        theme: { color: "#921A11" },
        handler: async (response: unknown) => {
          setState("verifying");
          try {
            const r = response as {
              razorpay_order_id: string;
              razorpay_payment_id: string;
              razorpay_signature: string;
            };
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: r.razorpay_order_id,
                razorpay_payment_id: r.razorpay_payment_id,
                razorpay_signature: r.razorpay_signature,
              }),
            });
            const verifyData = await verifyRes.json().catch(() => ({}));
            if (verifyRes.ok && verifyData.verified) {
              setState("success");
            } else {
              setState("failed");
              setError("We couldn't verify your payment. Please WhatsApp us with your payment ID.");
            }
          } catch {
            setState("failed");
            setError("We couldn't verify your payment. Please WhatsApp us with your payment ID.");
          }
        },
        modal: {
          ondismiss: () => {
            setState((prev) => (prev === "verifying" ? prev : "idle"));
          },
        },
      });

      rzp.on("payment.failed", () => {
        setState("failed");
        setError("Payment failed, please try again or WhatsApp us.");
      });

      setState("idle");
      rzp.open();
    } catch (err) {
      setState("failed");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-am-cream-border bg-white px-5 py-4 text-am-ink text-center font-medium">
        Payment received — we&apos;ll contact you within 24 hours.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handlePay}
        disabled={disabled || state === "loading" || state === "verifying"}
        className={
          className ||
          "inline-flex items-center justify-center min-h-13 px-8 rounded-full bg-am-gold text-am-maroon font-bold text-base disabled:opacity-60 disabled:cursor-not-allowed"
        }
      >
        {state === "verifying"
          ? "Verifying payment…"
          : state === "loading"
          ? "Please wait…"
          : label}
      </button>
      {state === "failed" && (
        <p className="text-am-maroon text-sm text-center">
          {error || "Payment failed, please try again or WhatsApp us."}
        </p>
      )}
    </div>
  );
}
