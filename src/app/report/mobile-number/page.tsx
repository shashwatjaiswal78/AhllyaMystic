import type { Metadata } from "next";
import ReportMobilePage from "@/app/_design/ReportMobilePage";

export const metadata: Metadata = { alternates: { canonical: "/report/mobile-number" }, title: "Mobile Number Numerology Report: Is It Lucky for You?", description: "Check whether your mobile number supports you, with lucky combinations to choose from." };

export default function Page() {
  return <ReportMobilePage />;
}
