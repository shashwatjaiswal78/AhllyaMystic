import type { Metadata } from "next";
import PoliciesPage from "@/app/_design/PoliciesPage";

export const metadata: Metadata = { alternates: { canonical: "/policies/delivery" }, title: "Delivery policy" };

export default function Page() {
  return <PoliciesPage initialState={{ pol: "delivery" }} />;
}
