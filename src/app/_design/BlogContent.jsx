// Journal pages: the article list and a single article. Plain server-rendered markup (no state), inside the site shell.
import React from "react";
import { ARTICLES } from "@/lib/blog";
import { ArticleBanner } from "./BlogArt";

const serif = "'Marcellus', 'Tiro Devanagari Hindi', serif";
const wrap = { maxWidth: "1200px", margin: "0 auto", padding: "0 24px" };
const eyebrow = { margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 };

const Hero = ({ children }) => (
  <section style={{ background: "linear-gradient(180deg, #2E003E 0%, #4A0A66 100%)", color: "#FFFFFF" }}>
    <div style={{ ...wrap, padding: "22px 24px 52px" }}>{children}</div>
  </section>
);

const Crumbs = ({ items }) => (
  <p style={{ fontSize: "13px", color: "#CDB8DA", margin: "0 0 30px" }}>
    {items.map(([label, href], i) => (
      <span key={label}>
        {i > 0 ? " / " : ""}
        {href ? <a href={href} style={{ color: "#CDB8DA", textDecoration: "none" }}>{label}</a> : <b style={{ color: "#FFFFFF", fontWeight: 600 }}>{label}</b>}
      </span>
    ))}
  </p>
);

export function BlogIndex() {
  return (
    <>
      <Hero>
        <Crumbs items={[["Home", "/"], ["Journal"]]} />
        <p style={{ ...eyebrow, color: "#FCCE07" }}>From our journal</p>
        <h1 style={{ margin: "0 0 14px", fontFamily: serif, fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 50px)", lineHeight: 1.12 }}>Astrology, numerology and Vastu, explained simply</h1>
        <p style={{ margin: 0, fontSize: "16px", color: "#EADFF2" }}>Plain-language articles on what the charts and numbers actually say, and what you can do about it.</p>
      </Hero>
      <section style={{ ...wrap, padding: "56px 24px 88px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "20px" }}>
          {ARTICLES.map((a) => (
            <a key={a.slug} href={`/blog/${a.slug}`} className="am-lift" style={{ background: "#FFFFFF", border: "1px solid #E2D7C4", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column", textDecoration: "none", color: "#1E1830" }}>
              <div style={{ aspectRatio: "16 / 9" }}><ArticleBanner slug={a.slug} /></div>
              <div style={{ padding: "22px 24px 26px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
              <p style={{ ...eyebrow, margin: 0 }}>{a.category} · {a.minutes} min read</p>
              <h2 style={{ margin: 0, fontFamily: serif, fontWeight: 400, fontSize: "22px", lineHeight: 1.25 }}>{a.title}</h2>
              <p style={{ margin: 0, fontSize: "14.5px", color: "#5C5470" }}>{a.excerpt}</p>
              <span style={{ marginTop: "auto", paddingTop: "8px", fontWeight: 700, color: "#921A11" }}>Read article →</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
