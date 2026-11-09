import type { Metadata } from "next";
import ReportMilanPage from "@/app/_design/ReportMilanPage";

export const metadata: Metadata = { alternates: { canonical: "/report/milan" }, title: "Couple Kundli Milan", description: "Gun Milan, Mangal Dosha check and an honest view of long-term compatibility before marriage." };

export default function Page() {
  return <ReportMilanPage />;
}
