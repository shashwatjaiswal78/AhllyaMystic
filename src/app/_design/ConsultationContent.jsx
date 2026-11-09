"use client";
// The consultation information page: what a consultation is, what the client gets, how it works, who they speak
// with, the plans and prices, and a FAQ. Booking itself happens on /consult, which the plan buttons open.
import React, { useEffect, useState } from "react";
import { FAQS } from "@/lib/consultation";

const serif = "'Marcellus', 'Tiro Devanagari Hindi', serif";
const WA = "https://wa.me/919129237566?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20a%20consultation.";
const container = { maxWidth: "1200px", margin: "0 auto", padding: "0 24px" };
const h2 = { margin: "0 0 10px", fontFamily: serif, fontWeight: 400, fontSize: "clamp(24px, 2.7vw, 34px)", lineHeight: 1.2 };
const eyebrow = { margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 };
const lead = { margin: "0 0 28px", color: "#5C5470", fontSize: "14.5px", maxWidth: "700px" };
const card = { background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "24px 26px" };
const gold = { display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#2E003E", fontWeight: 700, fontSize: "14.5px", textDecoration: "none" };
const ghost = { display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", borderRadius: "999px", border: "1.5px solid rgba(255,255,255,0.7)", color: "#FFFFFF", fontWeight: 700, fontSize: "14.5px", textDecoration: "none" };

const Icon = ({ d, size = 22, color = "currentColor" }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
);
const Tick = ({ color = "#921A11" }) => <Icon d="M5 12l4 4 10-10" size={18} color={color} />;

const FACTS = [
  ["6 years", "of practice in Vedic and KP astrology, numerology and Vastu"],
  ["Your own chart", "studied before the call, so every minute is about you"],
  ["Audio or video", "your choice, at the same price"],
  ["Hindi or English", "speak in the language you are most at ease in"],
];

const BENEFITS = [
  { t: "Your chart, not a template", d: "We study your birth chart before the call, so the time goes on your questions and not on explaining the basics.", i: "M12 3l9 9-9 9-9-9zM12 8l4 4-4 4-4-4z" },
  { t: "Direct, practical answers", d: "No vague predictions. You hear what your chart shows, why it shows it, and what you can do about it.", i: "M5 12l5 5 9-10" },
  { t: "Timing you can use", d: "With three areas or the complete call, we use your dasha periods to point to the phases ahead for you.", i: "M12 7v5l3 2M12 3a9 9 0 100 18 9 9 0 000-18z" },
  { t: "Remedies you can follow", d: "Simple, practical remedies for your chart. If one is hard to follow, we suggest an alternative that still suits you.", i: "M12 4v2M12 18v2M4 12H2M22 12h-2M6.3 6.3L4.9 4.9M19.1 19.1l-1.4-1.4M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4M12 8a4 4 0 100 8 4 4 0 000-8z" },
  { t: "In your language, your way", d: "Audio or video, in Hindi or English. You pick a time that suits you, and the price is the same either way.", i: "M8 2h8a1 1 0 011 1v18a1 1 0 01-1 1H8a1 1 0 01-1-1V3a1 1 0 011-1zM11 18h2" },
  { t: "Personal and private", d: "Every consultation is by us personally, never by software. Your birth details are used only for your reading and are never shared.", i: "M8 11V8a4 4 0 018 0v3M6 11h12v9H6z" },
];

const AREAS = [
  { t: "Love and marriage", n: "Compatibility, marriage timing", q: ["Is this relationship right for me?", "When is a good time to marry?"], i: "M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" },
  { t: "Career and business", n: "Job, business, the right time to switch", q: ["Should I change my job now?", "Is this the right time to start a business?"], i: "M4 7h16v12H4zM9 7V5h6v2" },
  { t: "Money and growth", n: "Income, savings, financial blocks", q: ["Why does money not stay with me?", "Which periods are strong for income?"], i: "M12 3v18M17 7H9.5a3 3 0 000 6h5a3 3 0 010 6H6" },
  { t: "Health and wellbeing", n: "Phases that need extra care", q: ["Which phases need extra care?", "What can I do to support my health?"], i: "M3 12h4l2-5 4 10 2-5h6" },
  { t: "Education", n: "Stream, exams, studying abroad", q: ["Which stream suits me?", "What does my chart say about studying abroad?"], i: "M3 9l9-5 9 5-9 5zM7 11.5V16c0 1.5 2.2 3 5 3s5-1.5 5-3v-4.5" },
  { t: "Child and family", n: "Family planning, your child’s nature", q: ["When is a good time to plan a child?", "What is my child’s nature?"], i: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0" },
];

const STEPS = [
  ["01", "Choose your call", "Pick your expert, and one, two, three or all areas of your life."],
  ["02", "Pay securely", "Pay by UPI, card or netbanking."],
  ["03", "Share your birth details", "Your date, time and place of birth, and the questions you want answered."],
  ["04", "Pick your slot", "We call you within 24 hours to confirm. Your consultation happens within 7 to 10 days, at a time that suits you."],
];

const EXPERTS = [
  { id: "san", level: "Senior Expert", name: "Ahalya Sangeeta", photo: "/images/4799fee4da0ba25da44abe8ca0aebfec.jpg", pos: "center 25%", d: "Reads Kundlis, names, numbers and homes across Vedic and KP astrology, numerology and Vastu. Six years of practice, and every report and consultation is prepared by her or together with Maneswita." },
  { id: "man", level: "Expert", name: "Maneswita", photo: "/images/cd60cc55788c423c9c66a30e5201d374.jpg", pos: "center 25%", d: "Works alongside her mother across Vedic and KP astrology and numerology, with five years of practice. Many readings are prepared by the two of them together." },
];

const PLANS = [
  { id: "one", name: "One area", mins: "20 min", blurb: "A focused session on the area that matters most right now.", items: ["Pick any one: career, love, money, health, education or child", "Your chart studied before the call", "Simple, practical remedies"], cta: "Book one area" },
  { id: "two", name: "Two areas", mins: "30 min", blurb: "For two questions that sit side by side, like career and money.", items: ["Pick any two areas of your life", "How the two connect in your chart", "Remedies for both areas"], cta: "Book two areas" },
  { id: "three", name: "Three areas", mins: "45 min", blurb: "A broader reading that connects the different parts of your life.", items: ["Pick any three areas of your life", "Timing guidance from your dasha periods", "Personalised remedies for each area"], cta: "Book three areas" },
  { id: "all", name: "Complete", mins: "60 min", blurb: "Your whole chart, every area, and as many questions as you have.", items: ["All areas of life, any number of questions", "Timing for the years ahead from your dasha periods", "Personalised remedies for every area"], cta: "Book complete call", featured: true },
];



const rs = (n) => "₹" + n.toLocaleString("en-IN");

export default function ConsultationContent({ prices }) {
  const [expert, setExpert] = useState("san");
  const [open, setOpen] = useState(0);
  useEffect(() => {
    try {
      const e = new URLSearchParams(window.location.search).get("expert");
      if (e === "man" || e === "san") setExpert(e);
    } catch (err) { /* keep the default */ }
  }, []);
  const exName = expert === "san" ? "Ahalya Sangeeta" : "Maneswita";

  return (
    <>
      {/* hero */}
      <section aria-label="Consultation" style={{ position: "relative", overflow: "hidden", color: "#FFFFFF", background: "linear-gradient(180deg, #1B0026 0%, #2E003E 45%, #5A0F7C 100%)" }}>
        <div className="am-stars" aria-hidden="true" />
        <div className="am-stars2" aria-hidden="true" style={{ opacity: 0.6 }} />
        <img className="am-spin-zodiac" src="/images/610ce06ea07e7a2d1d36f4d88029f8db.png" alt="" aria-hidden="true" style={{ position: "absolute", right: "-140px", top: "-90px", width: "600px", height: "600px", opacity: 0.2, pointerEvents: "none" }} />
        <span className="am-shoot" aria-hidden="true" style={{ top: "18%", left: "62%", animationDelay: "2s" }} />
        <div style={{ ...container, position: "relative", padding: "22px 24px 64px" }}>
          <p style={{ fontSize: "13px", color: "#CDB8DA", margin: "0 0 34px" }}><a href="/" style={{ color: "#CDB8DA", textDecoration: "none" }}>Home</a> / <b style={{ color: "#FFFFFF", fontWeight: 600 }}>Consultation</b></p>
          <div style={{ maxWidth: "800px" }}>
            <p style={{ ...eyebrow, color: "#FCCE07" }}>One-on-one consultation</p>
            <h1 style={{ margin: "0 0 16px", fontFamily: serif, fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 50px)", lineHeight: 1.12 }}>One honest conversation can help you see clearly</h1>
            <p style={{ margin: "0 0 28px", fontSize: "16px", color: "#EADFF2", maxWidth: "640px" }}>Speak with Ahalya Sangeeta or Maneswita. We study your chart before the call, then answer your questions on love, career, money, health and more, with remedies you can actually follow.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#plans" style={gold}>Book your consultation</a>
              <a href={WA} style={ghost}>Ask us on WhatsApp</a>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: "14px", marginTop: "44px" }}>
            {FACTS.map(([k, v]) => (
              <div key={k} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "18px", padding: "16px 18px" }}>
                <div style={{ fontFamily: serif, fontSize: "22px", color: "#FCCE07", lineHeight: 1.2 }}>{k}</div>
                <div style={{ fontSize: "13px", color: "#EADFF2", marginTop: "4px" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* who it is for */}
      <section style={{ ...container, padding: "64px 24px 0" }}>
        <div style={{ ...card, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "28px", alignItems: "center", background: "#F3E8F7", border: "1px solid #E6D3F0" }}>
          <div>
            <p style={eyebrow}>Is this for you?</p>
            <h2 style={h2}>Feeling stuck on a decision, or the same problem keeps coming back?</h2>
          </div>
          <p style={{ margin: 0, fontSize: "14.5px", color: "#3B3350" }}>
            A general horoscope cannot answer a question about your own life. A consultation looks at your birth chart, your dasha periods and the questions you bring, so the answer is about you. People come to us for clarity on love and marriage, a career move, money that does not stay, health, studies and family.
          </p>
        </div>
      </section>

      {/* benefits */}
      <section style={{ ...container, padding: "64px 24px 0" }}>
        <p style={eyebrow}>What you get</p>
        <h2 style={h2}>What you take away from the call</h2>
        <p style={lead}>A consultation is not a prediction read out to you. It is a conversation about your chart, in plain words, that ends with a clear idea of what to do next.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "16px" }}>
          {BENEFITS.map((b) => (
            <div key={b.t} style={{ ...card, display: "flex", gap: "16px" }}>
              <span style={{ flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "46px", height: "46px", borderRadius: "999px", background: "#F3E8F7", color: "#6C1594" }}><Icon d={b.i} /></span>
              <div>
                <h3 style={{ margin: "0 0 6px", fontFamily: serif, fontWeight: 400, fontSize: "19px", color: "#2E003E" }}>{b.t}</h3>
                <p style={{ margin: 0, fontSize: "13.5px", color: "#5C5470", lineHeight: 1.65 }}>{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* areas */}
      <section style={{ ...container, padding: "64px 24px 0" }}>
        <p style={eyebrow}>What you can ask</p>
        <h2 style={h2}>Let’s get to the root of it</h2>
        <p style={lead}>Pick the areas of your life you want to understand. Here are the kinds of questions people bring.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "16px" }}>
          {AREAS.map((a) => (
            <div key={a.t} style={card}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "999px", background: "#FBE9E6", color: "#921A11" }}><Icon d={a.i} /></span>
                <div>
                  <h3 style={{ margin: 0, fontFamily: serif, fontWeight: 400, fontSize: "19px", color: "#2E003E" }}>{a.t}</h3>
                  <div style={{ fontSize: "12px", color: "#736B8A" }}>{a.n}</div>
                </div>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: "8px" }}>
                {a.q.map((q) => <li key={q} style={{ display: "flex", gap: "8px", fontSize: "13.5px", color: "#3B3350" }}><span style={{ flex: "none", marginTop: "2px" }}><Tick /></span>{q}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* how it works */}
      <section style={{ ...container, padding: "64px 24px 0" }}>
        <p style={eyebrow}>How it works</p>
        <h2 style={h2}>From booking to your call in four steps</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gap: "16px", marginTop: "22px" }}>
          {STEPS.map(([n, t, d]) => (
            <div key={n} style={{ ...card, padding: "22px 22px" }}>
              <div style={{ fontFamily: serif, fontSize: "30px", color: "#FCCE07", lineHeight: 1, WebkitTextStroke: "0.5px #B8860B" }}>{n}</div>
              <h3 style={{ margin: "10px 0 6px", fontFamily: serif, fontWeight: 400, fontSize: "19px", color: "#2E003E" }}>{t}</h3>
              <p style={{ margin: 0, fontSize: "13.5px", color: "#5C5470" }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* experts */}
      <section style={{ ...container, padding: "64px 24px 0" }}>
        <p style={eyebrow}>Who you will speak with</p>
        <h2 style={h2}>Two experts, one mother and daughter</h2>
        <p style={lead}>Both read your chart before the call. You choose who you would like to speak with when you book.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", gap: "16px" }}>
          {EXPERTS.map((e) => (
            <div key={e.id} style={{ ...card, display: "flex", gap: "20px", alignItems: "flex-start", flexWrap: "wrap" }}>
              <img src={e.photo} alt={e.name} style={{ flex: "none", width: "112px", height: "112px", borderRadius: "999px", objectFit: "cover", objectPosition: e.pos, boxShadow: "0 0 0 4px #FCCE07" }} />
              <div style={{ flex: "1 1 220px", minWidth: 0 }}>
                <div style={{ fontSize: "11.5px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 }}>{e.level}</div>
                <h3 style={{ margin: "2px 0 6px", fontFamily: serif, fontWeight: 400, fontSize: "24px", color: "#2E003E" }}>{e.name}</h3>
                <p style={{ margin: 0, fontSize: "13.5px", color: "#5C5470", lineHeight: 1.65 }}>{e.d}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ margin: "14px 0 0", fontSize: "13.5px" }}><a href="/about" style={{ color: "#6C1594", fontWeight: 700 }}>Read more about us →</a></p>
      </section>

      {/* plans */}
      <section id="plans" style={{ ...container, padding: "72px 24px 0", scrollMarginTop: "90px" }}>
        <p style={eyebrow}>Plans and prices</p>
        <h2 style={h2}>Choose the call that fits you best</h2>
        <p style={lead}>Pick your expert and how much you would like to cover. Audio and video calls cost the same.</p>
        <div role="group" aria-label="Choose your expert" style={{ display: "inline-flex", flexWrap: "wrap", padding: "5px", background: "#F3EDE3", borderRadius: "999px", gap: "4px", marginBottom: "22px" }}>
          {[["man", "Expert", "Maneswita"], ["san", "Senior Expert", "Ahalya Sangeeta"]].map(([id, lvl, nm]) => (
            <button key={id} type="button" aria-pressed={expert === id} onClick={() => setExpert(id)} style={{ font: "inherit", fontSize: "13.5px", fontWeight: 700, minHeight: "44px", padding: "0 20px", border: 0, borderRadius: "999px", cursor: "pointer", background: expert === id ? "#2E003E" : "transparent", color: expert === id ? "#FFFFFF" : "#5C5470" }}>{lvl} · {nm}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gap: "16px", alignItems: "stretch" }}>
          {PLANS.map((p) => (
            <div key={p.id} style={p.featured
              ? { position: "relative", background: "linear-gradient(160deg, #6C1594 0%, #2E003E 100%)", color: "#FFFFFF", borderRadius: "24px", padding: "26px 24px", display: "flex", flexDirection: "column", gap: "14px" }
              : { ...card, borderRadius: "24px", padding: "26px 24px", display: "flex", flexDirection: "column", gap: "14px" }}>
              {p.featured ? <span style={{ alignSelf: "flex-start", fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#FCCE07", color: "#2E003E", borderRadius: "999px", padding: "3px 12px" }}>Most complete</span> : null}
              <div>
                <h3 style={{ margin: 0, fontFamily: serif, fontWeight: 400, fontSize: "24px", color: p.featured ? "#FFFFFF" : "#2E003E" }}>{p.name}</h3>
                <p style={{ margin: "4px 0 0", fontSize: "13px", color: p.featured ? "#EADFF2" : "#5C5470" }}>{p.blurb}</p>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontFamily: serif, fontSize: "32px", color: p.featured ? "#FCCE07" : "#921A11" }}>{rs(prices[expert][p.id])}</span>
                <span style={{ fontSize: "13px", color: p.featured ? "#EADFF2" : "#736B8A" }}>{p.mins} call</span>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: "10px", fontSize: "13.5px" }}>
                {p.items.map((it) => <li key={it} style={{ display: "flex", gap: "8px" }}><span style={{ flex: "none", marginTop: "2px" }}><Tick color={p.featured ? "#FCCE07" : "#921A11"} /></span>{it}</li>)}
              </ul>
              <a href={`/consult?expert=${expert}&sess=${p.id}`} style={{ marginTop: "auto", ...(p.featured ? gold : { ...gold, background: "#2E003E", color: "#FFFFFF" }), minHeight: "50px" }}>{p.cta}</a>
            </div>
          ))}
        </div>
        <p style={{ margin: "16px 0 0", fontSize: "13px", color: "#5C5470", maxWidth: "820px" }}>
          You are booking with {exName}. You choose audio or video, Hindi or English, and your preferred days when you book. Add a Personalised Kundli Report at checkout and get 10% off the report.
        </p>
      </section>

      {/* faq */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "72px 24px 0" }}>
        <p style={eyebrow}>Before you book</p>
        <h2 style={{ ...h2, marginBottom: "18px" }}>Questions people ask</h2>
        <div style={{ display: "grid", gap: "10px" }}>
          {FAQS.map(([q, a], i) => (
            <div key={q} style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px" }}>
              <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)} style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px 20px", background: "transparent", border: 0, cursor: "pointer", font: "inherit", fontSize: "14.5px", fontWeight: 600, textAlign: "left", color: "#1E1830" }}>
                {q}<span aria-hidden="true" style={{ flex: "none", fontSize: "20px", color: "#921A11", transform: open === i ? "rotate(45deg)" : "none", transition: "transform .2s" }}>+</span>
              </button>
              {open === i ? <p style={{ margin: 0, padding: "0 20px 18px", fontSize: "13.5px", color: "#5C5470", lineHeight: 1.7 }}>{a}{q === "Can I get a refund?" ? <> <a href="/policies/refunds" style={{ color: "#6C1594" }}>Refund policy</a></> : null}</p> : null}
            </div>
          ))}
        </div>
      </section>

      {/* closing call to action */}
      <section style={{ ...container, padding: "72px 24px 96px" }}>
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(120deg, #2E003E 0%, #6C1594 100%)", color: "#FFFFFF", borderRadius: "28px", padding: "clamp(30px, 5vw, 56px)", textAlign: "center" }}>
          <div className="am-stars" aria-hidden="true" />
          <div style={{ position: "relative" }}>
            <h2 style={{ margin: "0 0 10px", fontFamily: serif, fontWeight: 400, fontSize: "clamp(24px, 3vw, 36px)", color: "#FFFFFF" }}>Ready to speak with us?</h2>
            <p style={{ margin: "0 auto 24px", maxWidth: "560px", color: "#EADFF2", fontSize: "14.5px" }}>Choose your plan, share your birth details, and we will study your chart before the call. Not sure which plan fits? Message us and we will help you choose.</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              <a href="#plans" style={gold}>Book your consultation</a>
              <a href={WA} style={ghost}>Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
