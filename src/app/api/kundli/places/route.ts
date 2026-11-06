import { NextRequest, NextResponse } from "next/server";
import { findPlaces } from "@/lib/kundli/places";

// Birth place suggestions: offline city and village list first, topped up with an online lookup.
export async function GET(request: NextRequest) {
  const q = (request.nextUrl.searchParams.get("q") ?? "").trim().slice(0, 80);
  if (q.length < 2) return NextResponse.json({ places: [] });
  try {
    const places = await findPlaces(q);
    return NextResponse.json({ places }, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("place search error", err);
    return NextResponse.json({ places: [] }, { status: 500 });
  }
}
