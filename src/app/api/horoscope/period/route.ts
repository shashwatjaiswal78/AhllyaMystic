import { NextRequest, NextResponse } from "next/server";
import { getPeriodView, isView } from "@/lib/horoscope/view";

// One sign's weekly, monthly or yearly horoscope, loaded when a visitor switches tab on the horoscope page.
export async function GET(request: NextRequest) {
  const view = request.nextUrl.searchParams.get("view") ?? "";
  const sign = request.nextUrl.searchParams.get("sign") ?? "";
  if (!isView(view)) return NextResponse.json({ error: "Unknown view" }, { status: 400 });
  const data = await getPeriodView(view, sign);
  if (!data) return NextResponse.json({ error: "Unknown sign" }, { status: 400 });
  return NextResponse.json(data, { headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600" } });
}
