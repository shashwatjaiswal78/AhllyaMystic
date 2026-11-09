"use client";
// Weekly, monthly and yearly views for one sign, shown inside the horoscope page when the visitor picks a tab.
// Same cards, colours and type as the daily view. English only for now.
import React from "react";

const serif = "'Marcellus', 'Tiro Devanagari Hindi', serif";
const AREAS = [["overall", "Overall"], ["love", "Love"], ["career", "Career"], ["money", "Money"], ["health", "Health"]];
const band = (n) => (n >= 70 ? { bg: "#E6F3E1", fg: "#2C6B1F", name: "Favourable" } : n >= 50 ? { bg: "#FFF3D1", fg: "#7A5A00", name: "Mixed" } : { bg: "#FBE3DF", fg: "#921A11", name: "Careful" });
const card = { background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "24px 26px" };
const h2 = { margin: "0 0 12px", fontFamily: serif, fontWeight: 400, fontSize: "clamp(22px, 2.4vw, 28px)", lineHeight: 1.2 };
const ord = (n) => n + (n % 10 === 1 && n !== 11 ? "st" : n % 10 === 2 && n !== 12 ? "nd" : n % 10 === 3 && n !== 13 ? "rd" : "th");

function Pill({ n }) {
  const b = band(n);
  return <span aria-label={n + ", " + b.name} style={{ display: "inline-block", minWidth: 34, textAlign: "center", padding: "2px 8px", borderRadius: 999, background: b.bg, color: b.fg, fontWeight: 700, fontSize: 13 }}>{n}</span>;
}

function Bar({ label, value }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 6 }}><span>{label}</span><b>{value}%</b></div>
      <div style={{ height: 8, borderRadius: 999, background: "rgba(255,255,255,0.18)" }}>
        <div style={{ width: value + "%", height: "100%", borderRadius: 999, background: "linear-gradient(90deg, #FCCE07, #F28C28)" }} />
      </div>
    </div>
  );
}

function Summary({ data, sign, kicker, children }) {
  return (
    <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #2E003E 0%, #4A0A66 55%, #6C1594 100%)", color: "#FFFFFF", borderRadius: "28px", padding: "28px 28px 30px" }}>
      <p style={{ margin: "0 0 6px", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: 700 }}>{kicker}</p>
      <h2 style={{ margin: "0 0 4px", fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px, 3vw, 36px)" }}>{sign.en} <span style={{ fontSize: "0.7em", opacity: 0.85 }}>{sign.hi}</span></h2>
      <p style={{ margin: "0 0 18px", color: "#EADFF2", fontSize: 15 }}>{data.range}</p>
      {children}
    </div>
  );
}

function Events({ data }) {
  const list = data.period ? data.period.ingresses : [];
  if (!list.length) return null;
  return (
    <div style={card}>
      <h2 style={h2}>Planet changes this {data.view === "weekly" ? "week" : "month"}</h2>
      <div style={{ display: "grid", gap: 10 }}>
        {list.map((g) => (
          <p key={g.planet + g.dateLabel} style={{ margin: 0, display: "flex", gap: 12, fontSize: 15 }}>
            <span style={{ flex: "none", width: 8, height: 8, marginTop: 9, borderRadius: 999, background: g.good ? "#2C6B1F" : "#921A11" }} />
            <span><b>{g.dateLabel}:</b> {g.note}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

function PeriodView({ data, sign }) {
  const p = data.period;
  const weekly = data.view === "weekly";
  const sorted = [...p.days].sort((a, b) => b.scores.overall - a.scores.overall);
  const top = weekly ? [] : sorted.slice(0, 3);
  const low = weekly ? [] : sorted.slice(-3).reverse();
  return (
    <div style={{ display: "grid", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: 20, alignItems: "start" }}>
        <Summary data={data} sign={sign} kicker={weekly ? "Weekly horoscope" : "Monthly horoscope"}>
          <div style={{ display: "grid", gap: 14 }}>{AREAS.map(([k, l]) => <Bar key={k} label={l} value={p.avg[k]} />)}</div>
        </Summary>
        <div style={card}>
          <h2 style={h2}>{weekly ? "This week at a glance" : "The next 30 days at a glance"}</h2>
          <p style={{ margin: "0 0 12px", fontSize: 16 }}>
            Best day: <b>{p.best.weekday} {p.best.label}</b> <Pill n={p.best.scores.overall} />. Take extra care on <b>{p.careful.weekday} {p.careful.label}</b> <Pill n={p.careful.scores.overall} />.
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 16 }}>
            Your strongest area is <b>{p.strongest}</b>. The area that needs the most care is <b>{p.weakest}</b>.
          </p>
          <div role="list" aria-label="Overall score by day" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(" + (weekly ? "64px" : "52px") + ", 1fr))", gap: 6 }}>
            {p.days.map((d) => {
              const b = band(d.scores.overall);
              return (
                <div key={d.label} role="listitem" title={d.weekday + " " + d.label + ": " + b.name} style={{ background: b.bg, color: b.fg, borderRadius: 10, padding: "6px 2px", textAlign: "center", fontSize: 12, lineHeight: 1.3 }}>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{d.scores.overall}</div>
                  <div>{d.weekday}</div>
                  <div style={{ opacity: 0.85 }}>{d.label}</div>
                </div>
              );
            })}
          </div>
          <p style={{ margin: "12px 0 0", fontSize: 13, color: "#5C5470" }}>Green is favourable, amber is mixed, red needs care. The number is the overall score for that day.</p>
        </div>
      </div>
      <Events data={data} />
      {weekly ? (
        <div style={card}>
          <h2 style={h2}>Day by day</h2>
          <div style={{ display: "grid", gap: 14 }}>
            {p.days.map((d) => (
              <div key={d.label} style={{ display: "grid", gridTemplateColumns: "minmax(88px, 110px) minmax(0, 1fr)", gap: 14, paddingBottom: 14, borderBottom: "1px solid #EFE6D8" }}>
                <div><b>{d.weekday}</b><div style={{ fontSize: 13, color: "#5C5470" }}>{d.label}</div><Pill n={d.scores.overall} /></div>
                <div>
                  <p style={{ margin: "0 0 6px", fontSize: 15 }}>{d.moon}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 14px", fontSize: 13, color: "#5C5470" }}>
                    {AREAS.slice(1).map(([k, l]) => <span key={k}>{l} <Pill n={d.scores[k]} /></span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: 20 }}>
          {[["Your best days", top], ["Days to take care", low]].map(([title, list]) => (
            <div key={title} style={card}>
              <h2 style={h2}>{title}</h2>
              <div style={{ display: "grid", gap: 12 }}>
                {list.map((d) => (
                  <div key={d.label}><b>{d.weekday} {d.label}</b> <Pill n={d.scores.overall} /><p style={{ margin: "4px 0 0", fontSize: 14, color: "#5C5470" }}>{d.moon}</p></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function YearView({ data, sign }) {
  const y = data.year;
  return (
    <div style={{ display: "grid", gap: 20 }}>
      <Summary data={data} sign={sign} kicker={data.view === "yearly" ? "Next 12 months" : "Yearly horoscope " + data.view}>
        <p style={{ margin: 0, fontSize: 16, color: "#FFFFFF" }}>{y.saturnNote}</p>
      </Summary>
      {y.highlights.length ? (
        <div style={card}>
          <h2 style={h2}>Dates to remember</h2>
          <div style={{ display: "grid", gap: 10 }}>
            {y.highlights.map((h) => (
              <p key={h} style={{ margin: 0, display: "flex", gap: 12, fontSize: 15 }}>
                <span style={{ flex: "none", width: 8, height: 8, marginTop: 9, borderRadius: 999, background: "#6C1594" }} />{h}
              </p>
            ))}
          </div>
        </div>
      ) : null}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: 20, alignItems: "start" }}>
        {y.planets.map((pl) => (
          <div key={pl.planet} style={card}>
            <h2 style={h2}>{pl.planet}</h2>
            <p style={{ margin: "0 0 14px", fontSize: 15 }}>{pl.summary}</p>
            <div style={{ display: "flex", height: 12, borderRadius: 999, overflow: "hidden", gap: 2, marginBottom: 14 }} role="img" aria-label={pl.planet + " timeline, green supportive and red challenging"}>
              {pl.stretches.map((s) => <div key={s.from} style={{ width: s.pct + "%", background: s.good ? "#5AA14A" : "#C9594F" }} />)}
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {pl.stretches.map((s) => (
                <div key={s.from} style={{ fontSize: 14, display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                  <span>{s.from} to {s.to}</span>
                  <span style={{ color: s.good ? "#2C6B1F" : "#921A11", fontWeight: 600 }}>{ord(s.house)} house, {s.good ? "supportive" : "challenging"}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {data.events.length ? (
        <div style={card}>
          <h2 style={h2}>Big planet changes</h2>
          <div style={{ display: "grid", gap: 8, fontSize: 15 }}>
            {data.events.map((e) => <span key={e.planet + e.dateLabel}><b>{e.dateLabel}:</b> {e.planet} moves into {e.toSign}</span>)}
          </div>
          <p style={{ margin: "10px 0 0", fontSize: 13, color: "#5C5470" }}>Sidereal (Lahiri) signs. A planet can step back into the previous sign while retrograde, so some appear twice.</p>
        </div>
      ) : null}
    </div>
  );
}

export default function PeriodPanel({ data, loading, failed, sign }) {
  if (!data && failed) return <div style={card}><p style={{ margin: 0 }}>We could not load this view. Please check your connection and try again.</p></div>;
  if (!data || loading) return <div style={card} aria-busy="true"><p style={{ margin: 0, color: "#5C5470" }}>Loading {sign.en} horoscope…</p></div>;
  return data.year ? <YearView data={data} sign={sign} /> : <PeriodView data={data} sign={sign} />;
}
