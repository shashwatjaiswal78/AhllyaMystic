import type { Metadata } from "next";
import PoliciesPage from "@/app/_design/PoliciesPage";

export const metadata: Metadata = { alternates: { canonical: "/policies/terms" }, title: "Terms and conditions" };

export default function Page() {
  return <PoliciesPage initialState={{ pol: "terms" }} />;
}
