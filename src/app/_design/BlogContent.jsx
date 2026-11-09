// Journal pages: the article list and a single article. Plain server-rendered markup (no state), inside the site shell.
import React from "react";
import { ARTICLES } from "@/lib/blog";

const serif = "'Marcellus', 'Tiro Devanagari Hindi', serif";
const wrap = { maxWidth: "1200px", margin: "0 auto", padding: "0 24px" };
const eyebrow = { margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 };
const dateLabel = (iso) => new Date(iso + "T00:00:00Z").toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const gold = { display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#2E003E", fontWeight: 700, textDecoration: "none" };

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
            <a key={a.slug} href={`/blog/${a.slug}`} className="am-lift" style={{ background: "#FFFFFF", border: "1px solid #E2D7C4", borderRadius: "20px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px", textDecoration: "none", color: "#1E1830" }}>
              <p style={{ ...eyebrow, margin: 0 }}>{a.category} · {a.minutes} min read</p>
              <h2 style={{ margin: 0, fontFamily: serif, fontWeight: 400, fontSize: "22px", lineHeight: 1.25 }}>{a.title}</h2>
              <p style={{ margin: 0, fontSize: "14.5px", color: "#5C5470" }}>{a.excerpt}</p>
              <span style={{ marginTop: "auto", paddingTop: "8px", fontWeight: 700, color: "#921A11" }}>Read article →</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export function BlogArticle({ article: a }) {
  const more = ARTICLES.filter((x) => x.slug !== a.slug);
  return (
    <>
      <Hero>
        <Crumbs items={[["Home", "/"], ["Journal", "/blog"], [a.category]]} />
        <div style={{ maxWidth: "820px" }}>
          <p style={{ ...eyebrow, color: "#FCCE07" }}>{a.category}</p>
          <h1 style={{ margin: "0 0 14px", fontFamily: serif, fontWeight: 400, fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15 }}>{a.title}</h1>
          <p style={{ margin: 0, fontSize: "13.5px", color: "#CDB8DA" }}>By {a.author} · {dateLabel(a.published)} · {a.minutes} min read</p>
        </div>
      </Hero>
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "52px 24px 40px", fontSize: "16.5px", lineHeight: 1.75, color: "#2A2340" }}>
        {a.body.map((b, i) => {
          if (b.t === "h2") return <h2 key={i} style={{ margin: "38px 0 12px", fontFamily: serif, fontWeight: 400, fontSize: "clamp(22px, 2.5vw, 28px)", lineHeight: 1.25, color: "#1E1830" }}>{b.text}</h2>;
          if (b.t === "ul") return <ul key={i} style={{ margin: "0 0 18px", paddingLeft: "22px", display: "grid", gap: "8px" }}>{b.items.map((it) => <li key={it}>{it}</li>)}</ul>;
          if (b.t === "cta") return (
            <div key={i} style={{ margin: "40px 0 0", padding: "26px 28px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px" }}>
              <p style={{ margin: "0 0 18px" }}>{b.text}</p>
              <a href={b.href} style={gold}>{b.label}</a>
            </div>
          );
          return <p key={i} style={{ margin: "0 0 18px" }}>{b.text}</p>;
        })}
        <p style={{ margin: "36px 0 0", fontSize: "13px", color: "#736B8A" }}>This article is general information in the Vedic tradition and is not a substitute for personal advice from a qualified professional.</p>
      </article>
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px 88px" }}>
        <h2 style={{ margin: "0 0 14px", fontFamily: serif, fontWeight: 400, fontSize: "22px" }}>Related</h2>
        <ul style={{ margin: "0 0 32px", paddingLeft: "20px", display: "grid", gap: "6px" }}>
          {a.related.map((r) => <li key={r.href}><a href={r.href} style={{ color: "#921A11", fontWeight: 600 }}>{r.label}</a></li>)}
        </ul>
        <h2 style={{ margin: "0 0 14px", fontFamily: serif, fontWeight: 400, fontSize: "22px" }}>More from the journal</h2>
        <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "6px" }}>
          {more.map((m) => <li key={m.slug}><a href={`/blog/${m.slug}`} style={{ color: "#921A11", fontWeight: 600 }}>{m.title}</a></li>)}
        </ul>
      </section>
    </>
  );
}
