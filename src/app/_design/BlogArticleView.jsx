"use client";
/* eslint-disable */
// One journal article with an English / Hindi switch, like the horoscope pages. The choice is remembered on this device.
import React, { useEffect, useState } from "react";
import { ArticleBanner, Figure } from "./BlogArt";
import { HI_NOTE, HI_LABELS } from "@/lib/blog-hi";

const serif = "'Marcellus', 'Tiro Devanagari Hindi', serif";
const wrap = { maxWidth: "1200px", margin: "0 auto", padding: "0 24px" };
const eyebrow = { margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 };
const dateLabel = (iso, hi) => new Date(iso + "T00:00:00Z").toLocaleDateString(hi ? "hi-IN" : "en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const gold = { display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#2E003E", fontWeight: 700, textDecoration: "none" };
const KEY = "ahllya:bloglang";

export default function BlogArticleView({ article: a, hi: h, more }) {
  const [lang, setLang] = useState("en");
  useEffect(() => { try { if (localStorage.getItem(KEY) === "hi") setLang("hi"); } catch { /* storage unavailable */ } }, []);
  const pick = (l) => { setLang(l); try { localStorage.setItem(KEY, l); } catch { /* storage unavailable */ } };
  const isHi = lang === "hi";
  const title = isHi ? h.title : a.title;
  const body = isHi ? h.body : a.body;
  const related = a.related.map((r, i) => ({ ...r, label: isHi ? h.related[i] : r.label }));
  return (
    <>
      <section style={{ background: "linear-gradient(180deg, #2E003E 0%, #4A0A66 100%)", color: "#FFFFFF" }}><div style={{ ...wrap, padding: "22px 24px 52px" }}>
        <p style={{ fontSize: "13px", color: "#CDB8DA", margin: "0 0 30px" }}>
          <a href="/" style={{ color: "#CDB8DA", textDecoration: "none" }}>Home</a> / <a href="/blog" style={{ color: "#CDB8DA", textDecoration: "none" }}>Journal</a> / <b style={{ color: "#FFFFFF", fontWeight: 600 }}>{a.category}</b>
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "28px 48px" }}>
        <div style={{ flex: "1 1 460px", minWidth: 0 }}>
          <p style={{ ...eyebrow, color: "#FCCE07" }}>{a.category}</p>
          <h1 style={{ margin: "0 0 14px", fontFamily: serif, fontWeight: 400, fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15 }}>{title}</h1>
          <p style={{ margin: "0 0 18px", fontSize: "13.5px", color: "#CDB8DA" }}>{isHi ? `${HI_LABELS.by}: ${a.author} · ${dateLabel(a.published, true)} · ${a.minutes} ${HI_LABELS.minRead}` : `By ${a.author} · ${dateLabel(a.published)} · ${a.minutes} min read`}</p>
          <div role="group" aria-label="Language" style={{ display: "inline-flex", padding: "4px", borderRadius: "999px", background: "rgba(255,255,255,0.12)", gap: "4px" }}>
            {[["en", "English"], ["hi", "हिंदी"]].map(([k, l]) => (
              <button key={k} type="button" onClick={() => pick(k)} aria-pressed={lang === k} style={{ font: "inherit", fontSize: "13.5px", fontWeight: 700, minHeight: "36px", padding: "0 18px", borderRadius: "999px", border: 0, cursor: "pointer", background: lang === k ? "#FCCE07" : "transparent", color: lang === k ? "#2E003E" : "#FFFFFF" }}>{l}</button>
            ))}
          </div>
        </div>
        <div style={{ flex: "0 1 340px", width: "100%", maxWidth: "380px", aspectRatio: "16 / 9", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.18)", boxShadow: "0 24px 50px -24px rgba(0,0,0,0.7)" }}><ArticleBanner slug={a.slug} /></div>
        </div>
      </div></section>
      <article lang={isHi ? "hi" : "en"} style={{ maxWidth: "760px", margin: "0 auto", padding: "52px 24px 40px", fontSize: "16.5px", lineHeight: 1.75, color: "#2A2340" }}>
        {body.map((b, i) => {
          if (b.t === "h2") return <h2 key={i} style={{ margin: "38px 0 12px", fontFamily: serif, fontWeight: 400, fontSize: "clamp(22px, 2.5vw, 28px)", lineHeight: 1.25, color: "#1E1830" }}>{b.text}</h2>;
          if (b.t === "fig") return <Figure key={i} kind={b.kind} lang={lang} />;
          if (b.t === "ul") return <ul key={i} style={{ margin: "0 0 18px", paddingLeft: "22px", display: "grid", gap: "8px" }}>{b.items.map((it) => <li key={it}>{it}</li>)}</ul>;
          if (b.t === "cta") return (
            <div key={i} style={{ margin: "40px 0 0", padding: "26px 28px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px" }}>
              <p style={{ margin: "0 0 18px" }}>{b.text}</p>
              <a href={b.href} style={gold}>{b.label}</a>
            </div>
          );
          return <p key={i} style={{ margin: "0 0 18px" }}>{b.text}</p>;
        })}
        <p style={{ margin: "36px 0 0", fontSize: "13px", color: "#736B8A" }}>{isHi ? HI_NOTE : "This article is general information in the Vedic tradition and is not a substitute for personal advice from a qualified professional."}</p>
      </article>
      <section lang={isHi ? "hi" : "en"} style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px 88px" }}>
        <h2 style={{ margin: "0 0 14px", fontFamily: serif, fontWeight: 400, fontSize: "22px" }}>{isHi ? HI_LABELS.related : "Related"}</h2>
        <ul style={{ margin: "0 0 32px", paddingLeft: "20px", display: "grid", gap: "6px" }}>
          {related.map((r) => <li key={r.href}><a href={r.href} style={{ color: "#921A11", fontWeight: 600 }}>{r.label}</a></li>)}
        </ul>
        <h2 style={{ margin: "0 0 14px", fontFamily: serif, fontWeight: 400, fontSize: "22px" }}>{isHi ? HI_LABELS.more : "More from the journal"}</h2>
        <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "6px" }}>
          {more.map((m) => <li key={m.slug}><a href={`/blog/${m.slug}`} style={{ color: "#921A11", fontWeight: 600 }}>{isHi ? m.titleHi : m.title}</a></li>)}
        </ul>
      </section>
    </>
  );
}
