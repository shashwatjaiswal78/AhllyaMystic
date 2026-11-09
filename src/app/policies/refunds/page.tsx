import type { Metadata } from "next";
import PoliciesPage from "@/app/_design/PoliciesPage";

export const metadata: Metadata = { alternates: { canonical: "/policies/refunds" }, title: "Refund policy", description: "Our refund policy for reports, consultations and courses, and what happens if we cause a delay." };

export default function Page() {
  return <PoliciesPage initialState={{ pol: "refund" }} />;
}
