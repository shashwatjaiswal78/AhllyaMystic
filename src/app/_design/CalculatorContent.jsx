"use client";
// A dedicated page for one free calculator: hero with the form, then what you get, how it works, the other
// calculators, a FAQ and a link to the matching report. The result opens on the same address once calculated.
import React, { useState } from "react";
import KundliForm from "./KundliForm";
import NameForm from "./NameForm";
import MobileForm from "./MobileForm";
import { CALCULATORS, CALC_KINDS } from "@/lib/calculators";

const serif = "'Marcellus', 'Tiro Devanagari Hindi', serif";
const container = { maxWidth: "1200px", margin: "0 auto", padding: "0 24px" };
const h2 = { margin: "0 0 10px", fontFamily: serif, fontWeight: 400, fontSize: "clamp(24px, 2.7vw, 34px)", lineHeight: 1.2 };
const eyebrow = { margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 };
const card = { background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "24px 26px" };
const gold = { display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#2E003E", fontWeight: 700, fontSize: "14.5px", textDecoration: "none" };

const Tick = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#921A11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l4 4 10-10" /></svg>
);

function Form({ kind, onDone }) {
  if (kind === "name") return <NameForm onDone={onDone} />;
  if (kind === "mobile") return <MobileForm onDone={onDone} />;
  return <KundliForm kind={kind} onDone={onDone} />;
}

export default function CalculatorContent({ kind, onDone }) {
  const c = CALCULATORS[kind];
  const [open, setOpen] = useState(0);
  return (
    <>
      <section aria-label={c.h1} style={{ position: "relative", overflow: "hidden", color: "#FFFFFF", background: "linear-gradient(180deg, #1B0026 0%, #2E003E 45%, #5A0F7C 100%)" }}>
        <div className="am-stars" aria-hidden="true" />
        <div className="am-stars2" aria-hidden="true" style={{ opacity: 0.6 }} />
        <img className="am-spin-zodiac" src="/images/610ce06ea07e7a2d1d36f4d88029f8db.png" alt="" aria-hidden="true" style={{ position: "absolute", right: "-140px", top: "-90px", width: "560px", height: "560px", opacity: 0.18, pointerEvents: "none" }} />
        <div style={{ ...container, position: "relative", padding: "22px 24px 60px" }}>
          <p style={{ fontSize: "13px", color: "#CDB8DA", margin: "0 0 30px" }}>
            <a href="/" style={{ color: "#CDB8DA", textDecoration: "none" }}>Home</a> / <a href="/#free" style={{ color: "#CDB8DA", textDecoration: "none" }}>Free calculators</a> / <b style={{ color: "#FFFFFF", fontWeight: 600 }}>{c.eyebrow.replace("Free ", "")}</b>
          </p>
          <div>
            <p style={{ ...eyebrow, color: "#FCCE07" }}>{c.eyebrow}</p>
            <h1 style={{ margin: "0 0 14px", fontFamily: serif, fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 50px)", lineHeight: 1.12 }}>{c.h1}</h1>
            <p style={{ margin: "0 0 28px", fontSize: "16px", color: "#EADFF2" }}>{c.sub}</p>
          </div>
          <div style={{ background: "#FFFFFF", color: "#1E1830", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "26px 28px", boxShadow: "0 30px 60px -30px rgba(0,0,0,0.6)" }}>
            <div className={"cc-form" + (kind === "kundli" || kind === "kp" ? " cc-three" : "")}><Form kind={kind} onDone={onDone} /></div>
            <p style={{ margin: "16px 0 0", fontSize: "12.5px", color: "#736B8A", textAlign: "center" }}>Please use your actual date of birth, even if your documents show a different one. Your details are used only for the calculation and are not stored.</p>
          </div>
        </div>
      </section>

      <section style={{ ...container, padding: "64px 24px 0" }}>
        <p style={eyebrow}>What you get</p>
        <h2 style={h2}>{c.h1.endsWith("?") ? "What the check tells you" : "What your result shows"}</h2>
        <p style={{ margin: "0 0 26px", color: "#5C5470", fontSize: "14.5px", maxWidth: "700px" }}>{c.method} Free, with no sign-up.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "16px" }}>
          {c.features.map((f) => (
            <div key={f.t} style={card}>
              <h3 style={{ margin: "0 0 6px", fontFamily: serif, fontWeight: 400, fontSize: "19px", color: "#2E003E" }}>{f.t}</h3>
              <p style={{ margin: 0, fontSize: "13.5px", color: "#5C5470", lineHeight: 1.65 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...container, padding: "64px 24px 0" }}>
        <p style={eyebrow}>How it works</p>
        <h2 style={h2}>Three steps, under a minute</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gap: "16px", marginTop: "20px" }}>
          {c.steps.map(([t, d], i) => (
            <div key={t} style={card}>
              <div style={{ fontFamily: serif, fontSize: "30px", color: "#FCCE07", lineHeight: 1, WebkitTextStroke: "0.5px #B8860B" }}>{"0" + (i + 1)}</div>
              <h3 style={{ margin: "10px 0 6px", fontFamily: serif, fontWeight: 400, fontSize: "19px", color: "#2E003E" }}>{t}</h3>
              <p style={{ margin: 0, fontSize: "13.5px", color: "#5C5470" }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...container, padding: "64px 24px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "16px", alignItems: "stretch" }}>
          <div style={{ background: "linear-gradient(135deg, #2E003E, #6C1594)", color: "#FFFFFF", borderRadius: "24px", padding: "28px 30px", display: "flex", flexDirection: "column", gap: "12px", justifyContent: "center" }}>
            <h2 style={{ ...h2, color: "#FFFFFF", fontSize: "clamp(22px, 2.4vw, 28px)" }}>{c.report.label}</h2>
            <p style={{ margin: 0, color: "#EADFF2", fontSize: "14px" }}>{c.report.blurb}</p>
            <a href={c.report.href} style={{ ...gold, alignSelf: "flex-start" }}>{kind === "kp" ? "Book a consultation" : "See the report"}</a>
          </div>
          <div style={card}>
            <h2 style={{ ...h2, fontSize: "clamp(20px, 2.2vw, 26px)" }}>More free calculators</h2>
            <ul style={{ listStyle: "none", margin: "10px 0 0", padding: 0, display: "grid", gap: "10px" }}>
              {CALC_KINDS.filter((k) => k !== kind).map((k) => (
                <li key={k}><a href={CALCULATORS[k].path} style={{ color: "#6C1594", fontWeight: 700, textDecoration: "none", fontSize: "14.5px" }}>{CALCULATORS[k].eyebrow.replace("Free ", "")} →</a></li>
              ))}
              <li><a href="/panchang" style={{ color: "#6C1594", fontWeight: 700, textDecoration: "none", fontSize: "14.5px" }}>Daily Panchang and Choghadiya →</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "72px 24px 96px" }}>
        <p style={eyebrow}>Good to know</p>
        <h2 style={{ ...h2, marginBottom: "18px" }}>Questions people ask</h2>
        <div style={{ display: "grid", gap: "10px" }}>
          {c.faqs.map(([q, a], i) => (
            <div key={q} style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px" }}>
              <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)} style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px 20px", background: "transparent", border: 0, cursor: "pointer", font: "inherit", fontSize: "14.5px", fontWeight: 600, textAlign: "left", color: "#1E1830" }}>
                {q}<span aria-hidden="true" style={{ flex: "none", fontSize: "20px", color: "#921A11", transform: open === i ? "rotate(45deg)" : "none", transition: "transform .2s" }}>+</span>
              </button>
              {open === i ? <p style={{ margin: 0, padding: "0 20px 18px", fontSize: "13.5px", color: "#5C5470", lineHeight: 1.7 }}>{a}</p> : null}
            </div>
          ))}
        </div>
        <p style={{ margin: "18px 0 0", fontSize: "12.5px", color: "#736B8A" }}><Tick /> {" "}For learning and guidance. A calculator is not a substitute for a reading by an astrologer.</p>
      </section>
    </>
  );
}
