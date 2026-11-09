import type { Metadata } from "next";
import PoliciesPage from "@/app/_design/PoliciesPage";

export const metadata: Metadata = { alternates: { canonical: "/policies/terms" }, title: "Terms and conditions", description: "The terms for using the Ahllya Mystic website, free tools, reports, consultations and courses." };

export default function Page() {
  return <PoliciesPage initialState={{ pol: "terms" }} />;
}
