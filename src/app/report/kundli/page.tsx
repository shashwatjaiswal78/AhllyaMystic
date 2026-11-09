import type { Metadata } from "next";
import ReportKundliPage from "@/app/_design/ReportKundliPage";

export const metadata: Metadata = { alternates: { canonical: "/report/kundli" }, title: "Personalised Kundli Report: Love, Career, Money", description: "Clear, personal guidance on love, career, money, health and education from experts who study your chart." };

export default function Page() {
  return <ReportKundliPage />;
}
