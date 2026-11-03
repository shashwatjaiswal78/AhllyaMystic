import type { Metadata } from "next";
import ReportVarshphalPage from "@/app/_design/ReportVarshphalPage";

export const metadata: Metadata = { title: "Varshphal 2027 Report", description: "Your next 12 months, month by month: the year's main focus, key phases and simple remedies." };

export default function Page() {
  return <ReportVarshphalPage />;
}
