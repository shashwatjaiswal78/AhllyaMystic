"use client";
// Behaviour the design leaves as placeholders: real links, payments and form submits.
import React, { useState } from "react";

const REPORT_ROUTES = [
  ["Personalised Kundli", "/report/kundli"],
  ["Varshphal", "/report/varshphal"],
  ["Lal Kitab", "/report/lal-kitab"],
  ["Kundli Milan", "/report/milan"],
  ["Name Numerology", "/report/name-numerology"],
  ["Mobile Number", "/report/mobile-number"],
];

export function reportHref(name) {
  const hit = REPORT_ROUTES.find(([k]) => String(name || "").includes(k));
  return hit ? hit[1] : "/#reports";
}

const NUM_PACKAGES = {
  "Name Numerology Report": "n1", "Name Consultancy and Report": "n2", "Name Analysis and Correction": "n3",
  "Premium Name Correction": "n4", "Mobile Number Check": "m1", "Mobile Number Report": "m2",
  "Advance Report and Consultancy": "m3",
};

export function numCheckoutHref(name) {
  const pkg = NUM_PACKAGES[name];
  if (!pkg) return "/checkout/numerology";
  return `/checkout/numerology?kind=${pkg[0] === "m" ? "mob" : "self"}&pkg=${pkg}`;
}

export function consultProduct(state) {
  const sess = { one: "one-area", two: "two-areas", three: "three-areas", all: "complete" }[state.sess] || "one-area";
  return `consult-${state.expert === "san" ? "senior-" : ""}${sess}${state.report ? "+report" : ""}`;
}

export function readUrlState(keys) {
  if (typeof window === "undefined") return {};
  const q = new URLSearchParams(window.location.search);
  const out = {};
  for (const k of keys) if (q.get(k)) out[k] = q.get(k);
  return out;
}

function labelOf(input) {
  return input.getAttribute("placeholder") || input.getAttribute("aria-label") || input.name || input.type;
}

function collect(el) {
  const scope = el.closest("[data-design-page]") || document.body;
  const inputs = [...scope.querySelectorAll("input, textarea")].filter((i) => i.offsetParent !== null);
  const val = (pred) => inputs.filter(pred).map((i) => i.value.trim()).filter(Boolean);
  const first = val((i) => /^first name$/i.test(labelOf(i)))[0];
  const last = val((i) => /^last name$/i.test(labelOf(i)))[0];
  const named = val((i) => i.type === "text" && /name|aadhaar/i.test(labelOf(i)))[0];
  const name = [first, last].filter(Boolean).join(" ") || named || "";
  const phone = val((i) => i.type === "tel")[0] || "";
  const email = val((i) => i.type === "email")[0] || "";
  const details = {};
  for (const i of inputs) {
    if (!i.value.trim() || i.type === "tel" || i.type === "email") continue;
    const k = labelOf(i).slice(0, 40);
    details[k] = details[k] ? `${details[k]} / ${i.value.trim()}` : i.value.trim();
  }
  return { name, phone, email, details, message: val((i) => i.tagName === "TEXTAREA")[0] || "" };
}

const RAZORPAY_SRC = "https://checkout.razorpay.com/v1/checkout.js";
function loadRazorpay() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = RAZORPAY_SRC;
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

const notice = { display: "block", marginTop: 10, fontSize: 14, fontWeight: 600, textAlign: "center" };

export function PayButton({ as = "a", order, requireCustomer = true, children, onClick, href, ...rest }) {
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");
  const Tag = as;

  const pay = async (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    if (state === "loading" || state === "verifying") return;
    setError("");
    const { name, phone, email, details } = collect(e.currentTarget);
    if (requireCustomer && (!name || !phone)) {
      setError("Please fill in your name and phone number first.");
      return;
    }
    setState("loading");
    if (!(await loadRazorpay())) {
      setState("idle");
      setError("Could not load the payment gateway. Please check your connection and try again.");
      return;
    }
    try {
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...order, customer: { name, phone, email }, details }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Unable to start payment.");
      const rzp = new window.Razorpay({
        key: data.keyId, amount: data.amount, currency: data.currency, name: "Ahllya Mystic",
        description: data.productName, order_id: data.orderId,
        prefill: { name: name || undefined, contact: phone || undefined, email: email || undefined },
        theme: { color: "#921A11" },
        handler: async (r) => {
          setState("verifying");
          const v = await fetch("/api/razorpay/verify", {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ razorpay_order_id: r.razorpay_order_id, razorpay_payment_id: r.razorpay_payment_id, razorpay_signature: r.razorpay_signature }),
          }).then((x) => x.json()).catch(() => ({}));
          if (v.verified) setState("success");
          else { setState("idle"); setError("We couldn't verify your payment. Please WhatsApp us with your payment ID."); }
        },
        modal: { ondismiss: () => setState((s) => (s === "verifying" ? s : "idle")) },
      });
      rzp.on("payment.failed", () => { setState("idle"); setError("Payment failed, please try again or WhatsApp us."); });
      setState("idle");
      rzp.open();
    } catch (err) {
      setState("idle");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (state === "success") {
    return <span role="status" style={{ ...notice, color: "#1E7A3C" }}>Payment received. We will contact you within 24 hours.</span>;
  }
  const busy = state === "loading" || state === "verifying";
  return (
    <>
      <Tag {...rest} {...(as === "a" ? { href: href || "#" } : { type: "button" })} onClick={pay} aria-busy={busy || undefined}>
        {state === "verifying" ? "Verifying payment…" : state === "loading" ? "Please wait…" : children}
      </Tag>
      {error ? <span role="alert" style={{ ...notice, color: "#921A11" }}>{error}</span> : null}
    </>
  );
}

export function FormButton({ as = "button", endpoint, extra, done = "Thank you. We will be in touch soon.", children, onClick, href, ...rest }) {
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");
  const Tag = as;
  const submit = async (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    const f = collect(e.currentTarget);
    if (!f.name || !f.phone) { setError("Please fill in your name and phone number first."); return; }
    setState("loading");
    setError("");
    try {
      const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: f.name, phone: f.phone, email: f.email, message: f.message, ...(extra || {}) }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Could not send. Please try again.");
      setState("done");
    } catch (err) {
      setState("idle");
      setError(err instanceof Error ? err.message : "Could not send. Please try again.");
    }
  };
  if (state === "done") return <span role="status" style={{ ...notice, color: "#1E7A3C" }}>{done}</span>;
  return (
    <>
      <Tag {...rest} {...(as === "a" ? { href: href || "#" } : { type: "button" })} onClick={submit} aria-busy={state === "loading" || undefined}>
        {state === "loading" ? "Sending…" : children}
      </Tag>
      {error ? <span role="alert" style={{ ...notice, color: "#921A11" }}>{error}</span> : null}
    </>
  );
}
