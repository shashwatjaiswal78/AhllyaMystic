import type { Metadata } from "next";
import { Marcellus, Manrope, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import { SITE_URL, SOCIAL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  applicationName: "Ahllya Mystic",
  keywords: ["Vedic astrology", "KP astrology", "numerology", "vastu", "free kundli", "name number", "mobile number numerology", "daily horoscope"],
  openGraph: {
    type: "website",
    siteName: "Ahllya Mystic",
    locale: "en_IN",
    title: "Ahllya Mystic — Vedic Astrology, Numerology & Vastu",
    description:
      "One-on-one astrology, numerology and vastu consultations and hand-prepared reports. Clarity on love, career and money.",
    images: [{ url: "/images/26c9dadb7f4b6a08ec59999c3d9e9332.jpg", alt: "Maneswita and Ahalya Sangeeta, founders of Ahllya Mystic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahllya Mystic — Vedic Astrology, Numerology & Vastu",
    description: "Consultations and hand-prepared reports in Vedic and KP astrology, numerology and vastu.",
    images: ["/images/26c9dadb7f4b6a08ec59999c3d9e9332.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Ahllya Mystic",
      url: SITE_URL,
      logo: `${SITE_URL}/images/f0424906cf2ed307d839fd952ac77981.png`,
      sameAs: SOCIAL,
      founder: [{ "@type": "Person", name: "Ahalya Sangeeta" }, { "@type": "Person", name: "Maneswita" }],
      contactPoint: { "@type": "ContactPoint", telephone: "+91-9129237566", contactType: "customer service", availableLanguage: ["English", "Hindi"] },
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "Ahllya Mystic", inLanguage: "en-IN", publisher: { "@id": `${SITE_URL}/#org` } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${manrope.variable} ${tiroDevanagari.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
