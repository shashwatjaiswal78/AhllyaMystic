import type { Metadata } from "next";
import ReportLalKitabPage from "@/app/_design/ReportLalKitabPage";

export const metadata: Metadata = { alternates: { canonical: "/report/lal-kitab" }, title: "Lal Kitab Report", description: "Lal Kitab predictions with simple remedies you can follow at home." };

export default function Page() {
  return <ReportLalKitabPage />;
}
