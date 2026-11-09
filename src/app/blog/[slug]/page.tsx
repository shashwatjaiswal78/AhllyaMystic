import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BlogPage from "@/app/_design/BlogPage";
import BlogArticleView from "@/app/_design/BlogArticleView";
import { ARTICLES_HI } from "@/lib/blog-hi";
import { ARTICLES, bySlug } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = bySlug((await params).slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.description, publishedTime: a.published },
  };
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense>
      <Article params={params} />
    </Suspense>
  );
}

async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const a = bySlug((await params).slug);
  if (!a) notFound();
  const url = `${SITE_URL}/blog/${a.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", headline: a.title, description: a.description, datePublished: a.published, dateModified: a.published, mainEntityOfPage: url, author: { "@type": "Organization", name: a.author }, publisher: { "@id": `${SITE_URL}/#org` } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: a.title, item: url }] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <BlogPage><BlogArticleView article={a} hi={ARTICLES_HI[a.slug]} more={ARTICLES.filter((x) => x.slug !== a.slug).map((x) => ({ slug: x.slug, title: x.title, titleHi: ARTICLES_HI[x.slug].title }))} /></BlogPage>
    </>
  );
}
