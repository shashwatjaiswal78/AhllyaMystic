import type { Metadata } from "next";
import PoliciesPage from "@/app/_design/PoliciesPage";

export const metadata: Metadata = { title: "Terms and conditions" };

export default function Page() {
  return <PoliciesPage initialState={{ pol: "terms" }} />;
}
