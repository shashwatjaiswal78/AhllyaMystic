import type { Metadata } from "next";
import ConsultationPage from "@/app/_design/ConsultationPage";
import { FAQS, consultationPrices } from "@/lib/consultation";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/consultation" },
  title: "Astrology Consultation: Book a One-on-One Call",
  description:
    "Speak one-on-one with Ahalya Sangeeta or Maneswita. Your chart is studied before the call, then you get clear answers and simple remedies. Audio or video.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "FAQPage", mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Consultation", item: `${SITE_URL}/consultation` }] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <ConsultationPage prices={consultationPrices()} />
    </>
  );
}
