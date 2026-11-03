import type { Metadata } from "next";
import CheckoutLalKitabPage from "@/app/_design/CheckoutLalKitabPage";

export const metadata: Metadata = { title: "Checkout: Lal Kitab Report" };

export default function Page() {
  return <CheckoutLalKitabPage />;
}
