import type { Metadata } from "next";
import MobileRoute from "@/app/_design/MobileRoute";
import { CALCULATORS } from "@/lib/calculators";
import { SITE_URL } from "@/lib/site";

const c = CALCULATORS.mobile;

export const metadata: Metadata = { alternates: { canonical: c.path }, title: c.title, description: c.description };

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "FAQPage", mainEntity: c.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: c.eyebrow.replace("Free ", ""), item: `${SITE_URL}${c.path}` }] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <MobileRoute />
    </>
  );
}
