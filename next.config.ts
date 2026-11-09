import type { NextConfig } from "next";
import { ARTICLES } from "./src/lib/blog";
import { CITY_SLUGS } from "./src/lib/panchang/cities";

/* Only these /horoscope/<slug> pages exist. Anything else must answer 404, not a soft 200 (streamed
   not-found pages return 200 under Cache Components), so unknown slugs are rewritten to a missing path. */
const KNOWN_HOROSCOPE = "aries|taurus|gemini|cancer|leo|virgo|libra|scorpio|sagittarius|capricorn|aquarius|pisces|weekly|monthly|yearly|2027";
const SIGNS = "aries|taurus|gemini|cancer|leo|virgo|libra|scorpio|sagittarius|capricorn|aquarius|pisces";
const BLOG_SLUGS = ARTICLES.map((a) => a.slug).join("|");
const CITY_SLUGS_RE = CITY_SLUGS.join("|");
const PERIODS = "weekly|monthly|yearly|2027";

const nextConfig: NextConfig = {
  // The old all-signs pages now live inside the tabbed horoscope page, one sign at a time.
  async redirects() {
    return [
      // The old prototype page was replaced by /kp-kundli.
      { source: "/kp-kundli.html", destination: "/kp-kundli", permanent: true },
      ...["weekly", "monthly", "yearly", "2027"].map((p) => ({ source: `/horoscope/${p}`, destination: `/horoscope/aries/${p}`, permanent: false })),
      // 2028 is no longer shown; send old links to 2027.
      { source: "/horoscope/2028", destination: "/horoscope/aries/2027", permanent: false },
      { source: `/horoscope/:sign(${SIGNS})/2028`, destination: "/horoscope/:sign/2027", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      { source: `/horoscope/:slug((?!(?:${KNOWN_HOROSCOPE})(?![^/]))[^/]+)`, destination: "/not-found-404" },
      { source: `/horoscope/:sign((?!(?:${SIGNS})(?![^/]))[^/]+)/:period`, destination: "/not-found-404" },
      { source: `/horoscope/:sign(${SIGNS})/:period((?!(?:${PERIODS})(?![^/]))[^/]+)`, destination: "/not-found-404" },
      { source: `/panchang/:city((?!(?:${CITY_SLUGS_RE})(?![^/]))[^/]+)`, destination: "/not-found-404" },
      { source: `/choghadiya/:city((?!(?:${CITY_SLUGS_RE})(?![^/]))[^/]+)`, destination: "/not-found-404" },
      { source: `/blog/:slug((?!(?:${BLOG_SLUGS})(?![^/]))[^/]+)`, destination: "/not-found-404" },
    ];
  },
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
