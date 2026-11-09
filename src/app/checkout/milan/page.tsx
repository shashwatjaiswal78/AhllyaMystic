import type { Metadata } from "next";
import CheckoutMilanPage from "@/app/_design/CheckoutMilanPage";

export const metadata: Metadata = { robots: { index: false, follow: false }, title: "Checkout: Couple Kundli Milan" };

export default function Page() {
  return <CheckoutMilanPage />;
}
