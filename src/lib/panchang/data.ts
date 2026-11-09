import { cacheLife } from "next/cache";
import { panchangFor, todayIn, type PanchangPlace } from "./engine";

export const DEFAULT_PLACE: PanchangPlace = { n: "New Delhi", la: 28.6139, lo: 77.209, tz: "Asia/Kolkata" };

/** Today's Panchang for New Delhi, used for the first paint (the page then loads the visitor's own place). */
export async function getDefaultPanchang() {
  "use cache";
  cacheLife({ stale: 60, revalidate: 300, expire: 3600 });
  return panchangFor(todayIn(DEFAULT_PLACE.tz), DEFAULT_PLACE);
}

import { cityBySlug } from "./cities";

/** Today's Panchang for a city page's first paint. The tool refreshes it from the visitor's own clock. */
export async function getCityPanchang(slug: string) {
  "use cache";
  cacheLife({ stale: 60, revalidate: 300, expire: 3600 });
  const c = cityBySlug(slug);
  if (!c) return null;
  return panchangFor(todayIn(c.tz), { n: c.name, la: c.la, lo: c.lo, tz: c.tz });
}
