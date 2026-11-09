import { NextRequest, NextResponse } from "next/server";
import { isValidTz, panchangFor } from "@/lib/panchang/engine";

// Panchang and Choghadiya for a place and a date. Nothing is stored.
export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams;
  const date = q.get("date") ?? "";
  const la = Number(q.get("la")), lo = Number(q.get("lo"));
  const tz = q.get("tz") ?? "";
  const n = (q.get("n") ?? "").trim().slice(0, 120) || "Your place";
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  if (!m || +m[1] < 1900 || +m[1] > 2100 || Number.isNaN(Date.parse(date))) return NextResponse.json({ error: "Enter a valid date." }, { status: 400 });
  if (!Number.isFinite(la) || !Number.isFinite(lo) || Math.abs(la) > 90 || Math.abs(lo) > 180) return NextResponse.json({ error: "Choose your place from the list, or enter valid coordinates." }, { status: 400 });
  if (!isValidTz(tz)) return NextResponse.json({ error: "We could not find the time zone for that place." }, { status: 400 });
  try {
    return NextResponse.json(panchangFor(date, { n, la, lo, tz }), { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("panchang error", err);
    return NextResponse.json({ error: "Something went wrong while calculating the Panchang. Please try again." }, { status: 500 });
  }
}
