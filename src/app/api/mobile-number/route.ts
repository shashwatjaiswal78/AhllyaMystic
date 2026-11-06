import { NextRequest, NextResponse } from "next/server";
import { MobileInputError, buildMobile } from "@/lib/numerology/mobile";

// Free mobile number numerology check. Takes name, date of birth and mobile number, returns the reading and verdict.
// Nothing is stored: the details are used for the calculation and then dropped.
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "We could not read those details. Please try again." }, { status: 400 });
  }
  try {
    return NextResponse.json(buildMobile(body), { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    if (err instanceof MobileInputError) return NextResponse.json({ error: err.message }, { status: 400 });
    console.error("mobile number engine error", err);
    return NextResponse.json({ error: "Something went wrong while checking your number. Please try again." }, { status: 500 });
  }
}
