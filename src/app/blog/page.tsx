import type { Metadata } from "next";
import BlogPage from "@/app/_design/BlogPage";
import { BlogIndex } from "@/app/_design/BlogContent";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Journal: Astrology, Numerology and Vastu Articles",
  description: "Plain-language articles on Sade Sati, name numerology, Vastu and more, from the Ahllya Mystic team.",
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE_URL}/blog` }] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <BlogPage><BlogIndex /></BlogPage>
    </>
  );
}
