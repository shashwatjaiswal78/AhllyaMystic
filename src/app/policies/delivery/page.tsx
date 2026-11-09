import type { Metadata } from "next";
import PoliciesPage from "@/app/_design/PoliciesPage";

export const metadata: Metadata = { alternates: { canonical: "/policies/delivery" }, title: "Delivery policy", description: "When and how you receive your report, consultation or course, including delivery times and formats." };

export default function Page() {
  return <PoliciesPage initialState={{ pol: "delivery" }} />;
}
