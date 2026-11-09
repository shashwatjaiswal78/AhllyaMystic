"use client";
/* eslint-disable */
// The journal list: every article as a card, with an English / Hindi switch like the article pages.
import React, { useEffect, useState } from "react";
import { ArticleBanner } from "./BlogArt";

const serif = "'Marcellus', 'Tiro Devanagari Hindi', serif";
const wrap = { maxWidth: "1200px", margin: "0 auto", padding: "0 24px" };
const eyebrow = { margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 };
const KEY = "ahllya:bloglang";

export function BlogIndex({ items }) {
  const [lang, setLang] = useState("en");
  useEffect(() => { try { if (localStorage.getItem(KEY) === "hi") setLang("hi"); } catch { /* storage unavailable */ } }, []);
  const pick = (l) => { setLang(l); try { localStorage.setItem(KEY, l); } catch { /* storage unavailable */ } };
  const hi = lang === "hi";
  return (
    <>
      <section style={{ background: "linear-gradient(180deg, #2E003E 0%, #4A0A66 100%)", color: "#FFFFFF" }}>
        <div style={{ ...wrap, padding: "22px 24px 52px" }}>
          <p style={{ fontSize: "13px", color: "#CDB8DA", margin: "0 0 30px" }}>
            <a href="/" style={{ color: "#CDB8DA", textDecoration: "none" }}>{hi ? "होम" : "Home"}</a> / <b style={{ color: "#FFFFFF", fontWeight: 600 }}>{hi ? "जर्नल" : "Journal"}</b>
          </p>
          <p style={{ ...eyebrow, color: "#FCCE07" }}>{hi ? "हमारे जर्नल से" : "From our journal"}</p>
          <h1 lang={hi ? "hi" : "en"} style={{ margin: "0 0 14px", fontFamily: serif, fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 50px)", lineHeight: 1.12 }}>{hi ? "ज्योतिष, अंक ज्योतिष और वास्तु, सरल भाषा में" : "Astrology, numerology and Vastu, explained simply"}</h1>
          <p lang={hi ? "hi" : "en"} style={{ margin: "0 0 20px", fontSize: "16px", color: "#EADFF2" }}>{hi ? "कुंडली और अंकों में असल में क्या दिखता है, और आप उसके लिए क्या कर सकते हैं, इस पर सरल लेख।" : "Plain-language articles on what the charts and numbers actually say, and what you can do about it."}</p>
          <div role="group" aria-label="Language" style={{ display: "inline-flex", padding: "4px", borderRadius: "999px", background: "rgba(255,255,255,0.12)", gap: "4px" }}>
            {[["en", "English"], ["hi", "हिंदी"]].map(([k, l]) => (
              <button key={k} type="button" onClick={() => pick(k)} aria-pressed={lang === k} style={{ font: "inherit", fontSize: "13.5px", fontWeight: 700, minHeight: "36px", padding: "0 18px", borderRadius: "999px", border: 0, cursor: "pointer", background: lang === k ? "#FCCE07" : "transparent", color: lang === k ? "#2E003E" : "#FFFFFF" }}>{l}</button>
            ))}
          </div>
        </div>
      </section>
      <section lang={hi ? "hi" : "en"} style={{ ...wrap, padding: "56px 24px 88px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "20px" }}>
          {items.map((a) => (
            <a key={a.slug} href={`/blog/${a.slug}`} className="am-lift" style={{ background: "#FFFFFF", border: "1px solid #E2D7C4", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column", textDecoration: "none", color: "#1E1830" }}>
              <div style={{ aspectRatio: "16 / 9" }}><ArticleBanner slug={a.slug} /></div>
              <div style={{ padding: "22px 24px 26px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                <p style={{ ...eyebrow, margin: 0 }}>{hi ? a.categoryHi : a.category} · {a.minutes} {hi ? "मिनट में पढ़ें" : "min read"}</p>
                <h2 style={{ margin: 0, fontFamily: serif, fontWeight: 400, fontSize: "22px", lineHeight: 1.25 }}>{hi ? a.titleHi : a.title}</h2>
                <p style={{ margin: 0, fontSize: "14.5px", color: "#5C5470" }}>{hi ? a.excerptHi : a.excerpt}</p>
                <span style={{ marginTop: "auto", paddingTop: "8px", fontWeight: 700, color: "#921A11" }}>{hi ? "लेख पढ़ें →" : "Read article →"}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
