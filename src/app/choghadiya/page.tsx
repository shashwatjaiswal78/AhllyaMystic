import type { Metadata } from "next";
import PanchangPage from "@/app/_design/PanchangPage";
import { CityLinks } from "@/app/_design/PanchangCities";
import { getDefaultPanchang } from "@/lib/panchang/data";
import { faqFor, metaFor } from "@/lib/panchang/seo";
import { SITE_URL } from "@/lib/site";

const m = metaFor("choghadiya");
export const metadata: Metadata = { alternates: { canonical: m.path }, title: m.title, description: m.description };

export default async function Page() {
  const initial = await getDefaultPanchang();
  const faq = faqFor("choghadiya");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Daily Choghadiya", item: SITE_URL + m.path }] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PanchangPage initial={initial} mode="choghadiya">
        <CityLinks mode="choghadiya" />
      </PanchangPage>
    </>
  );
}
