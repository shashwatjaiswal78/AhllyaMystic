import type { Metadata } from "next";
import ConsultLandingPage from "@/app/_design/ConsultLandingPage";

export const metadata: Metadata = { robots: { index: false, follow: false }, title: "Expert se baat kijiye", description: "45 minutes ki 1:1 call, koi bhi sawaal. Vedic, KP astrology, numerology aur Vastu." };

export default function Page() {
  return <ConsultLandingPage />;
}
