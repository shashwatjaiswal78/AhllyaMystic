import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));
}
