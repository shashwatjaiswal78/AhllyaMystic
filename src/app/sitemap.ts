import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/site";
import { SIGN_SLUGS } from "@/lib/horoscope/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const signs = SIGN_SLUGS.map((slug) => ({ path: `/horoscope/${slug}`, priority: 0.8, changeFrequency: "daily" as const }));
  return [...ROUTES, ...signs].map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));
}
