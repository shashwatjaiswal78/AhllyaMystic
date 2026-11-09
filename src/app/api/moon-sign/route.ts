import { NextRequest, NextResponse } from "next/server";
import { InputError, parseInput } from "@/lib/kundli/kundli";
import { place as placeLon, siderealSunMoon, zonedToUtc } from "@/lib/kundli/engine";
import { NAK_HI } from "@/lib/kundli/panchang";
import { SIGN_INFO } from "@/lib/horoscope/signs";

// Moon sign finder for the home page. Takes date, time and a place picked from the birth place list,
// returns the sidereal (Lahiri) Moon sign and nakshatra. Nothing is stored.
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "We could not read those details. Please try again." }, { status: 400 });
  }
  try {
    const { input, y, mo, d, h, mi, s } = parseInput({ ...(body as object), name: "Moon" });
    const utc = new Date(zonedToUtc(y, mo, d, h, mi, input.place.tz).getTime() + s * 1000);
    const p = placeLon(siderealSunMoon(utc).moon);
    const info = SIGN_INFO[p.sign];
    return NextResponse.json(
      { sign: p.sign, en: info.en, hi: info.hi, nak: p.nak, nakHi: NAK_HI[p.nakIdx], pada: p.pada },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (err) {
    if (err instanceof InputError) return NextResponse.json({ error: err.message }, { status: 400 });
    console.error("moon sign error", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
