import type { Metadata } from "next";
import ConsultPage from "@/app/_design/ConsultPage";

export const metadata: Metadata = { alternates: { canonical: "/consult" }, title: "Book a consultation", robots: { index: false, follow: true }, description: "One-on-one astrology, numerology and Vastu consultations on audio or video call." };

export default function Page() {
  return <ConsultPage />;
}
