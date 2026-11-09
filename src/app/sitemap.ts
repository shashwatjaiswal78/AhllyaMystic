import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/site";
import { SIGN_SLUGS } from "@/lib/horoscope/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const signs = SIGN_SLUGS.flatMap((slug) => [
    { path: `/horoscope/${slug}`, priority: 0.8, changeFrequency: "daily" as const },
    { path: `/horoscope/${slug}/weekly`, priority: 0.6, changeFrequency: "daily" as const },
    { path: `/horoscope/${slug}/monthly`, priority: 0.6, changeFrequency: "daily" as const },
    { path: `/horoscope/${slug}/2027`, priority: 0.6, changeFrequency: "monthly" as const },
    { path: `/horoscope/${slug}/2028`, priority: 0.5, changeFrequency: "monthly" as const },
  ]);
  return [...ROUTES, ...signs].map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));
}
