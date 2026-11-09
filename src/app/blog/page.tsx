import type { Metadata } from "next";
import BlogPage from "@/app/_design/BlogPage";
import { BlogIndex } from "@/app/_design/BlogContent";
import { ARTICLES } from "@/lib/blog";
import { ARTICLES_HI, CATEGORY_HI } from "@/lib/blog-hi";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Journal: Astrology, Numerology and Vastu Articles",
  description: "Plain-language articles on Sade Sati, Kundli, KP astrology, numerology, Panchang, Choghadiya and Vastu, in English and Hindi, from the Ahllya Mystic team.",
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE_URL}/blog` }] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <BlogPage><BlogIndex items={ARTICLES.map((a) => ({ slug: a.slug, title: a.title, titleHi: ARTICLES_HI[a.slug].title, excerpt: a.excerpt, excerptHi: ARTICLES_HI[a.slug].excerpt, category: a.category, categoryHi: CATEGORY_HI[a.category], minutes: a.minutes }))} /></BlogPage>
    </>
  );
}
