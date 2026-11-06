import { NextRequest, NextResponse } from "next/server";
import { NameInputError, buildName } from "@/lib/numerology/name";

// Free name numerology check. Takes name, gender and date of birth, returns the score, numbers, Lo Shu grid and the
// corrected-spelling search (masked). Nothing is stored: the details are used for the calculation and then dropped.
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "We could not read those details. Please try again." }, { status: 400 });
  }
  try {
    return NextResponse.json(buildName(body), { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    if (err instanceof NameInputError) return NextResponse.json({ error: err.message }, { status: 400 });
    console.error("name number engine error", err);
    return NextResponse.json({ error: "Something went wrong while checking your name. Please try again." }, { status: 500 });
  }
}
