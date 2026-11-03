import type { Metadata } from "next";
import PoliciesPage from "@/app/_design/PoliciesPage";

export const metadata: Metadata = { title: "Refund policy" };

export default function Page() {
  return <PoliciesPage initialState={{ pol: "refund" }} />;
}
