import type { Metadata } from "next";
import CheckoutVarshphalPage from "@/app/_design/CheckoutVarshphalPage";

export const metadata: Metadata = { robots: { index: false, follow: false }, title: "Checkout: Varshphal 2027 Report" };

export default function Page() {
  return <CheckoutVarshphalPage />;
}
