import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import PanchangPage from "@/app/_design/PanchangPage";
import { CityIntro, CityLinks } from "@/app/_design/PanchangCities";
import { CITIES, cityBySlug } from "@/lib/panchang/cities";
import { getCityPanchang } from "@/lib/panchang/data";
import { faqFor, metaFor } from "@/lib/panchang/seo";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const c = cityBySlug((await params).city);
  if (!c) return {};
  const m = metaFor("panchang", c);
  return { title: m.title, description: m.description, alternates: { canonical: m.path } };
}

export default function Page({ params }: { params: Promise<{ city: string }> }) {
  return (
    <Suspense>
      <CityView params={params} />
    </Suspense>
  );
}

async function CityView({ params }: { params: Promise<{ city: string }> }) {
  const slug = (await params).city;
  const c = cityBySlug(slug);
  if (!c) notFound();
  const initial = await getCityPanchang(slug);
  const m = metaFor("panchang", c);
  const faq = faqFor("panchang", c);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Daily Panchang", item: SITE_URL + "/panchang" }, { "@type": "ListItem", position: 3, name: c.name, item: SITE_URL + m.path }] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PanchangPage initial={initial} mode="panchang" city={{ slug: c.slug, name: c.name, hi: c.hi }}>
        <CityIntro city={c} mode="panchang" />
        <CityLinks current={c.slug} mode="panchang" />
      </PanchangPage>
    </>
  );
}
