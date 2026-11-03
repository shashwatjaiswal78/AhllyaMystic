import type { Metadata } from "next";
import CheckoutKundliPage from "@/app/_design/CheckoutKundliPage";

export const metadata: Metadata = { title: "Checkout: Personalised Kundli Report" };

export default function Page() {
  return <CheckoutKundliPage />;
}
