import type { Metadata } from "next";
import { Marcellus, Manrope, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  variable: "--font-serif-display",
  weight: "400",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-sans-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const tiroDevanagari = Tiro_Devanagari_Hindi({
  variable: "--font-devanagari",
  weight: "400",
  subsets: ["devanagari", "latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ahllya Mystic — Vedic Astrology, Numerology & Vastu",
    template: "%s | Ahllya Mystic",
  },
  description:
    "One-on-one astrology, numerology and vastu consultations and hand-prepared reports by Ahalya Sangeeta and Maneswita. Clarity on love, career and money.",
  metadataBase: new URL("https://ahllyamystic.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${manrope.variable} ${tiroDevanagari.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
