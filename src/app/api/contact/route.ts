import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  name?: string;
  phone?: string;
  email?: string;
  topic?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactBody;
    const { name, phone, email, topic, message } = body ?? {};

    if (!name || !phone || !message) {
      return NextResponse.json({ error: "Name, phone and message are required." }, { status: 400 });
    }

    // Log contact submission (Resend email integration can be wired in later)
    console.log("Contact form submission:", { name, phone, email, topic, message: message.slice(0, 100) });

    // TODO: send email via Resend once RESEND_API_KEY is configured
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ from: 'contact@ahllyamystic.com', to: 'ahllyamystic@gmail.com', subject: `Contact: ${topic}`, text: `From: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}` });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact form error", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
