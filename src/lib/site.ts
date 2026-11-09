// Single source of truth for the public site URL and indexable routes.
// The apex domain (ahllyamystic.com) 308-redirects to www, so www is canonical.
export const SITE_URL = "https://www.ahllyamystic.com";

export const SOCIAL = [
  "https://www.instagram.com/ahllyamystic",
  "https://www.youtube.com/@AhllyaMystic",
  "https://www.facebook.com/ahllyamystic",
];

/** Indexable routes. Checkout pages are intentionally left out. */
export const ROUTES: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/horoscope", priority: 0.9, changeFrequency: "daily" },
  { path: "/panchang", priority: 0.8, changeFrequency: "daily" },
  { path: "/kundli", priority: 0.9, changeFrequency: "monthly" },
  { path: "/kp-kundli", priority: 0.8, changeFrequency: "monthly" },
  { path: "/name-number", priority: 0.8, changeFrequency: "monthly" },
  { path: "/mobile-number", priority: 0.8, changeFrequency: "monthly" },
  { path: "/consult", priority: 0.8, changeFrequency: "monthly" },
  { path: "/report/kundli", priority: 0.7, changeFrequency: "monthly" },
  { path: "/report/varshphal", priority: 0.7, changeFrequency: "monthly" },
  { path: "/report/milan", priority: 0.7, changeFrequency: "monthly" },
  { path: "/report/lal-kitab", priority: 0.7, changeFrequency: "monthly" },
  { path: "/report/name-numerology", priority: 0.7, changeFrequency: "monthly" },
  { path: "/report/mobile-number", priority: 0.7, changeFrequency: "monthly" },
  { path: "/courses", priority: 0.6, changeFrequency: "monthly" },
  { path: "/masterclass", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/policies/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/policies/terms", priority: 0.2, changeFrequency: "yearly" },
  { path: "/policies/delivery", priority: 0.2, changeFrequency: "yearly" },
  { path: "/policies/refunds", priority: 0.2, changeFrequency: "yearly" },
];
