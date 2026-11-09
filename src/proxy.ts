import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Rate limiting for the API routes. Each visitor (by IP) gets a number of requests per minute, set by how costly the
// route is. This is a best-effort in-memory counter: each server instance counts on its own, which is plenty to stop
// a bot hammering the calculators or the order endpoint. The Razorpay webhook is never limited.
const WINDOW_MS = 60_000;

function limitFor(path: string): number | null {
  if (path.startsWith("/api/razorpay/webhook")) return null; // Razorpay's own servers call this
  if (path.startsWith("/api/razorpay") || path.startsWith("/api/contact") || path.startsWith("/api/courses")) return 10;
  if (path.startsWith("/api/kundli/places") || path.startsWith("/api/moon-sign")) return 60; // typing in a place box fires often
  if (path.startsWith("/api/horoscope") || path.startsWith("/api/panchang")) return 60;
  return 20; // the calculators
}

const hits = new Map<string, { n: number; reset: number }>();

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const limit = limitFor(path);
  if (limit === null) return NextResponse.next();

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown";
  const bucket = path.startsWith("/api/razorpay") ? "pay" : path.startsWith("/api/kundli/places") ? "places" : path;
  const key = `${ip}|${bucket}`;
  const now = Date.now();

  if (hits.size > 5000) for (const [k, v] of hits) if (v.reset < now) hits.delete(k);

  const h = hits.get(key);
  if (!h || h.reset < now) {
    hits.set(key, { n: 1, reset: now + WINDOW_MS });
    return NextResponse.next();
  }
  h.n += 1;
  if (h.n > limit) {
    const wait = Math.max(1, Math.ceil((h.reset - now) / 1000));
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429, headers: { "Retry-After": String(wait) } },
    );
  }
  return NextResponse.next();
}

export const config = { matcher: "/api/:path*" };
