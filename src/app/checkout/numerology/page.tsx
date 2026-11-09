import type { Metadata } from "next";
import CheckoutNumerologyPage from "@/app/_design/CheckoutNumerologyPage";

export const metadata: Metadata = { robots: { index: false, follow: false }, title: "Checkout: Numerology" };

export default function Page() {
  return <CheckoutNumerologyPage />;
}
