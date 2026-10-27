"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const TOPICS = ["A report", "A consultation", "Numerology", "Courses", "Something else"];

export default function ContactPage() {
  const [topic, setTopic] = useState("A report");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, topic, message }),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Nav />
      <div style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(108,21,148,0.08), rgba(108,21,148,0) 50%), #FBF7F0", borderBottom: "1px solid #E8DFD0" }}>
        <div className="max-w-[900px] mx-auto px-6 pt-6 pb-10">
          <nav aria-label="Breadcrumb" className="text-sm text-am-ink-soft mb-7">
            <a href="/" className="text-am-ink-soft no-underline">Home</a>
            <span aria-hidden="true" className="mx-2">/</span>
            <span className="text-am-ink font-semibold">Contact us</span>
          </nav>
          <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">Get in touch</p>
          <h1 className="m-0 mb-2.5 font-serif-display font-normal text-[clamp(34px,4vw,50px)] leading-[1.1]">Contact us</h1>
          <p className="m-0 text-[15px] text-am-ink-soft">We usually reply within a few hours, 11 am to 7 pm.</p>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 pt-10 pb-22">
        <article className="bg-white border border-am-cream-border rounded-[22px] p-[clamp(24px,4vw,48px)] outline outline-[#EFE6D8] outline-offset-[-9px]">
          <div className="grid gap-3.5 mb-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(240px,100%), 1fr))" }}>
            <a href="https://wa.me/919129237566" className="am-lift flex items-center gap-3.5 p-[18px_20px] border border-am-cream-border rounded-[18px] bg-am-cream no-underline text-am-ink">
              <span className="flex-none flex items-center justify-center w-[46px] h-[46px] rounded-full bg-am-gold text-am-maroon">
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2z" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] text-am-ink-soft">WhatsApp</span>
                <span className="block font-bold text-[17px] break-all">+91 91292 37566</span>
              </span>
            </a>
            <a href="mailto:ahllyamystic@gmail.com" className="am-lift flex items-center gap-3.5 p-[18px_20px] border border-am-cream-border rounded-[18px] bg-am-cream no-underline text-am-ink">
              <span className="flex-none flex items-center justify-center w-[46px] h-[46px] rounded-full bg-am-gold text-am-maroon">
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] text-am-ink-soft">Email</span>
                <span className="block font-bold text-[17px] break-all">ahllyamystic@gmail.com</span>
              </span>
            </a>
          </div>

          {status === "sent" ? (
            <div className="rounded-2xl border border-am-cream-border bg-am-cream p-6 text-center">
              <p className="m-0 font-bold text-am-ink text-lg">Message sent!</p>
              <p className="m-0 mt-2 text-am-ink-soft text-[15px]">We&apos;ll get back to you on WhatsApp or email within a few hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 pt-7 border-t border-[#EFE6D8]">
              <p className="m-0 font-serif-display text-[26px]">Send us a message</p>
              <div className="grid gap-3.5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(200px,100%), 1fr))" }}>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Name
                  <input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} required
                    className="min-h-12 px-3.5 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9]" />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  WhatsApp number
                  <input type="tel" placeholder="+91" value={phone} onChange={e => setPhone(e.target.value)} required
                    className="min-h-12 px-3.5 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9]" />
                </label>
              </div>
              <label className="grid gap-1.5 text-sm font-semibold">
                Email
                <input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)}
                  className="min-h-12 px-3.5 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9]" />
              </label>
              <div className="grid gap-2">
                <span className="text-sm font-semibold">What is it about?</span>
                <div className="flex flex-wrap gap-2">
                  {TOPICS.map(t => (
                    <button key={t} type="button" role="radio" aria-checked={topic === t}
                      onClick={() => setTopic(t)}
                      className={`min-h-[42px] px-4 rounded-full text-sm font-semibold cursor-pointer ${topic === t ? "border-[1.5px] border-am-purple bg-[#F3E8F7] text-am-purple font-bold" : "border border-[#D9CEBD] bg-white text-am-ink"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <label className="grid gap-1.5 text-sm font-semibold">
                Your message
                <textarea rows={5} placeholder="Tell us how we can help" value={message} onChange={e => setMessage(e.target.value)}
                  className="p-3 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9] resize-y" />
              </label>
              <button type="submit" disabled={status === "sending"}
                className="justify-self-start min-h-[52px] px-8 border-0 rounded-full bg-am-gold text-am-maroon font-bold cursor-pointer disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {status === "error" && <p className="m-0 text-am-maroon text-sm">Something went wrong — please try WhatsApp or email directly.</p>}
              <p className="m-0 text-[13px] text-am-ink-soft">We reply on WhatsApp or email. Your details are used only to answer you.</p>
            </form>
          )}
        </article>
      </div>
      <Footer />
    </>
  );
}
