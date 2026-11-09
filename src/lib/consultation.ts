import { PRODUCTS } from "@/lib/products";

/** FAQ shown on the consultation page, and in its structured data. */
export const FAQS: [string, string][] = [
  ["Who will I speak with?", "With Ahalya Sangeeta (Senior Expert) or Maneswita (Expert), whichever you choose when you book. Every consultation is by us personally, never by software."],
  ["How soon will my consultation happen?", "We call you within 24 hours to confirm your birth details and booking, and schedule the call within 7 to 10 days, at a time that suits you."],
  ["Can I ask about more than one topic?", "Yes. One area covers one topic, two areas cover two, three areas cover three, and the Complete call covers every area of your life and any number of questions."],
  ["Audio or video, and in which language?", "Your choice. Audio and video calls cost the same, and you can have the call in Hindi or English."],
  ["What do I need to share before the call?", "Your date, time and place of birth, exactly as on your birth record, and the questions you most want answered. We study your chart before the call."],
  ["What if I cannot follow a remedy exactly?", "That is fine. Tell us, and we will suggest an alternative that still suits your chart. Consistency matters more than perfection."],
  ["Will my birth details stay private?", "Yes. Your details are used only to prepare your reading and are never shared."],
  ["Can I get a refund?", "Payments are non-refundable, except for delays from our side. You can read the full refund policy on our website."],
];

type Plan = "one" | "two" | "three" | "all";
const ID: Record<"man" | "san", Record<Plan, keyof typeof PRODUCTS>> = {
  man: { one: "consult-one-area", two: "consult-two-areas", three: "consult-three-areas", all: "consult-complete" },
  san: { one: "consult-senior-one-area", two: "consult-senior-two-areas", three: "consult-senior-three-areas", all: "consult-senior-complete" },
};

/** Consultation prices in rupees, read from the server-side price list so the page can never drift from checkout. */
export function consultationPrices(): Record<"man" | "san", Record<Plan, number>> {
  const out = { man: {}, san: {} } as Record<"man" | "san", Record<Plan, number>>;
  for (const e of ["man", "san"] as const) for (const p of ["one", "two", "three", "all"] as const) out[e][p] = PRODUCTS[ID[e][p]].amountPaise / 100;
  return out;
}
