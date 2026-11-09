import type { Metadata } from "next";
import PoliciesPage from "@/app/_design/PoliciesPage";

export const metadata: Metadata = { alternates: { canonical: "/policies/privacy" }, title: "Privacy policy" };

export default function Page() {
  return <PoliciesPage initialState={{ pol: "privacy" }} />;
}
