import type { Metadata } from "next";
import ConsultPage from "@/app/_design/ConsultPage";

export const metadata: Metadata = { title: "Book a consultation", description: "One-on-one astrology, numerology and Vastu consultations on audio or video call." };

export default function Page() {
  return <ConsultPage />;
}
