import type { Metadata } from "next";
import ReportLalKitabPage from "@/app/_design/ReportLalKitabPage";

export const metadata: Metadata = { alternates: { canonical: "/report/lal-kitab" }, title: "Lal Kitab Report with Simple Remedies", description: "A Lal Kitab report with predictions for your life areas and simple, practical remedies you can follow at home, prepared by our experts." };

export default function Page() {
  return <ReportLalKitabPage />;
}
