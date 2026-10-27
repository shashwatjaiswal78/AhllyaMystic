import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body || !body.name || !body.phone) {
    return NextResponse.json({ ok: false, error: "name and phone required" }, { status: 400 });
  }

  const { name, phone, topics } = body as { name: string; phone: string; topics: string[] };
  console.log("[courses/interest]", { name, phone, topics });
  // TODO: forward to CRM / Resend / WhatsApp Business when RESEND_API_KEY is set

  return NextResponse.json({ ok: true });
}
