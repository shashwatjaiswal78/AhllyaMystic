import { NextRequest, NextResponse } from "next/server";
import { InputError } from "@/lib/kundli/kundli";
import { buildRuling } from "@/lib/kp/build";

// Ruling planets for this moment at the birth place. The result page asks again every few seconds.
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }
  try {
    return NextResponse.json(buildRuling(body), { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    if (err instanceof InputError) return NextResponse.json({ error: err.message }, { status: 400 });
    console.error("kp ruling error", err);
    return NextResponse.json({ error: "Could not compute the ruling planets." }, { status: 500 });
  }
}
