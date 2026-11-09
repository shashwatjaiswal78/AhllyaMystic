import type { Metadata } from "next";
import PoliciesPage from "@/app/_design/PoliciesPage";

export const metadata: Metadata = { alternates: { canonical: "/policies/privacy" }, title: "Privacy policy", description: "How Ahllya Mystic collects, uses and protects your birth details, contact information and payment data." };

export default function Page() {
  return <PoliciesPage initialState={{ pol: "privacy" }} />;
}
