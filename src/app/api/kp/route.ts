import { NextRequest, NextResponse } from "next/server";
import { InputError } from "@/lib/kundli/kundli";
import { buildKp } from "@/lib/kp/build";

// Free KP Kundli engine. Takes the birth details, returns planets, Placidus cusps with star, sub and sub-sub lords,
// significators, Nakshatra Nadi and the Vimshottari dasha. Nothing is stored.
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "We could not read those details. Please try again." }, { status: 400 });
  }
  try {
    return NextResponse.json(buildKp(body), { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    if (err instanceof InputError) return NextResponse.json({ error: err.message }, { status: 400 });
    console.error("kp engine error", err);
    return NextResponse.json({ error: "Something went wrong while casting your KP chart. Please try again." }, { status: 500 });
  }
}
