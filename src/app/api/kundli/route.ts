import { NextRequest, NextResponse } from "next/server";
import { InputError, buildKundli } from "@/lib/kundli/kundli";

// Free Kundli engine. Takes the birth details, returns the chart, panchang, doshas and dasha periods.
// Nothing is stored: the details are used for the calculation and then dropped.
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "We could not read those details. Please try again." }, { status: 400 });
  }
  try {
    const result = buildKundli(body);
    return NextResponse.json(result, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    if (err instanceof InputError) return NextResponse.json({ error: err.message }, { status: 400 });
    console.error("kundli engine error", err);
    return NextResponse.json({ error: "Something went wrong while casting your Kundli. Please try again." }, { status: 500 });
  }
}
