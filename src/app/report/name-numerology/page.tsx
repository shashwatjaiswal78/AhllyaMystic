import type { Metadata } from "next";
import ReportNamePage from "@/app/_design/ReportNamePage";

export const metadata: Metadata = { alternates: { canonical: "/report/name-numerology" }, title: "Name Numerology Report for You, a Newborn or Business", description: "For yourself, a newborn or a business. Align the name you carry with your numbers." };

export default function Page() {
  return <ReportNamePage />;
}
