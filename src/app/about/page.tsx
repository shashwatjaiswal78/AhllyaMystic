import type { Metadata } from "next";
import AboutPage from "@/app/_design/AboutPage";

export const metadata: Metadata = { alternates: { canonical: "/about" }, title: "Meet Ahalya Sangeeta and Maneswita, Astrologers", description: "Ahllya Mystic is a mother and daughter practice in Vedic and KP astrology, numerology and vastu. Meet Ahalya Sangeeta and Maneswita, who read every chart together." };

export default function Page() {
  return <AboutPage />;
}
