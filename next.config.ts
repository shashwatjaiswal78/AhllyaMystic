import type { NextConfig } from "next";

/* Only these /horoscope/<slug> pages exist. Anything else must answer 404, not a soft 200 (streamed
   not-found pages return 200 under Cache Components), so unknown slugs are rewritten to a missing path. */
const KNOWN_HOROSCOPE = "aries|taurus|gemini|cancer|leo|virgo|libra|scorpio|sagittarius|capricorn|aquarius|pisces|weekly|monthly|yearly|2027|2028";
const SIGNS = "aries|taurus|gemini|cancer|leo|virgo|libra|scorpio|sagittarius|capricorn|aquarius|pisces";
const PERIODS = "weekly|monthly|yearly|2027|2028";

const nextConfig: NextConfig = {
  // The old all-signs pages now live inside the tabbed horoscope page, one sign at a time.
  async redirects() {
    return ["weekly", "monthly", "yearly", "2027", "2028"].map((p) => ({ source: `/horoscope/${p}`, destination: `/horoscope/aries/${p}`, permanent: false }));
  },
  async rewrites() {
    return [
      { source: `/horoscope/:slug((?!(?:${KNOWN_HOROSCOPE})(?![^/]))[^/]+)`, destination: "/not-found-404" },
      { source: `/horoscope/:sign((?!(?:${SIGNS})(?![^/]))[^/]+)/:period`, destination: "/not-found-404" },
      { source: `/horoscope/:sign(${SIGNS})/:period((?!(?:${PERIODS})(?![^/]))[^/]+)`, destination: "/not-found-404" },
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
