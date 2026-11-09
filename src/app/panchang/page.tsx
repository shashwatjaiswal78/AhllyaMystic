import type { Metadata } from "next";
import PanchangPage from "@/app/_design/PanchangPage";
import { getDefaultPanchang } from "@/lib/panchang/data";

export const metadata: Metadata = {
  alternates: { canonical: "/panchang" },
  title: "Daily Panchang and Choghadiya for Your City",
  description:
    "Free daily Panchang for any city or village: tithi, nakshatra, yoga, karana with change times, sunrise, Choghadiya, Rahu Kaal and the lunar month.",
};

const faq = [
  { q: "What is Choghadiya?", a: "Choghadiya is a method of checking whether a time of day is favourable for starting something. The day from sunrise to sunset, and the night from sunset to the next sunrise, are each divided into 8 slots. Amrit, Shubh, Labh and Char are favourable. Rog, Kaal and Udveg are best avoided." },
  { q: "What is a Panchang?", a: "A Panchang has five parts: Tithi (lunar day), Vaar (weekday), Nakshatra (the star the Moon is in), Yoga and Karana. A Panchang day starts at sunrise, not at midnight." },
  { q: "What is Rahu Kaal?", a: "Rahu Kaal is one eighth of the daylight, counted from sunrise, which is considered unsuitable for starting new work. Which eighth it is depends on the weekday." },
];

export default async function Page() {
  const initial = await getDefaultPanchang();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.ahllyamystic.com" }, { "@type": "ListItem", position: 2, name: "Panchang", item: "https://www.ahllyamystic.com/panchang" }] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PanchangPage initial={initial} />
    </>
  );
}
