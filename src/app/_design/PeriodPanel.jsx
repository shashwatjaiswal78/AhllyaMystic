"use client";
// Weekly, monthly and yearly views for the one sign that is selected, shown inside the horoscope page.
// Layout: a summary card on the left (score, lucky items, summary) and the forecast on the right.
// English only for now.
import React from "react";

const serif = "'Marcellus', 'Tiro Devanagari Hindi', serif";
const band = (n) => (n >= 70 ? { bg: "#E6F3E1", fg: "#2C6B1F", name: "Favourable" } : n >= 50 ? { bg: "#FFF3D1", fg: "#7A5A00", name: "Mixed" } : { bg: "#FBE3DF", fg: "#921A11", name: "Careful" });
const card = { background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "26px 28px" };
const h2 = { margin: "0 0 18px", fontFamily: serif, fontWeight: 400, fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.2 };
const ord = (n) => n + (n % 10 === 1 && n !== 11 ? "st" : n % 10 === 2 && n !== 12 ? "nd" : n % 10 === 3 && n !== 13 ? "rd" : "th");

function Pill({ n, pct }) {
  const b = band(n);
  return <span aria-label={n + (pct ? " percent, " : ", ") + b.name} style={{ display: "inline-block", minWidth: 52, textAlign: "center", padding: "4px 12px", borderRadius: 999, background: b.bg, color: b.fg, fontWeight: 700, fontSize: 14 }}>{n}{pct ? "%" : ""}</span>;
}

function Tile({ label, value, wide }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 16, padding: "14px 14px 16px", gridColumn: wide ? "1 / -1" : undefined }}>
      <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#D9C5E6", fontWeight: 700, marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.3, color: "#FFFFFF" }}>{value}</div>
    </div>
  );
}

function Hero({ sign, scoreLabel, score, luckyLabel, luckyValue, colour, numbers, summaryTitle, summary, range }) {
  return (
    <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #2E003E 0%, #4A0A66 55%, #6C1594 100%)", color: "#FFFFFF", borderRadius: 28, padding: "28px 26px 30px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 4 }}>
        <div>
          <h2 style={{ margin: 0, fontFamily: serif, fontWeight: 400, fontSize: "clamp(30px, 3.4vw, 40px)", lineHeight: 1.1 }}>{sign.en}</h2>
          <p style={{ margin: "2px 0 0", color: "#EADFF2", fontSize: 14 }}>{sign.hi} · {range}</p>
        </div>
        {sign.img ? <img src={sign.img} alt="" style={{ width: 64, height: 64, borderRadius: 999, background: "#FFFFFF", flex: "none" }} /> : null}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10, margin: "20px 0 22px" }}>
        <Tile label={scoreLabel} value={<span style={{ color: "#FCCE07", fontSize: 26 }}>{score}%</span>} />
        <Tile label={luckyLabel} value={luckyValue} />
        <Tile label="Lucky colour" value={colour} />
        <Tile label="Lucky numbers" value={numbers} />
      </div>
      <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700 }}>{summaryTitle}</h3>
      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "#F3E8F7" }}>{summary}</p>
    </div>
  );
}

function Rows({ title, rows }) {
  return (
    <div style={card}>
      <h2 style={h2}>{title}</h2>
      <div style={{ display: "grid", gap: 6 }}>
        {rows.map((r, i) => (
          <div key={r.label + i} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 18px", padding: "16px 18px", borderRadius: 16, background: i % 2 ? "#F7F0FA" : "transparent" }}>
            <div style={{ flex: "none", width: 118 }}>
              <div style={{ fontWeight: 700, color: "#6C1594" }}>{r.label}</div>
              {r.sub ? <div style={{ fontSize: 12, color: "#736B8A" }}>{r.sub}</div> : null}
            </div>
            <p style={{ margin: 0, flex: "1 1 240px", fontSize: 15, lineHeight: 1.6 }}>{r.text}</p>
            <Pill n={r.score} pct />
          </div>
        ))}
      </div>
    </div>
  );
}

function Highlights({ p, noun }) {
  return (
    <div style={card}>
      <h2 style={h2}>{noun} highlights</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: 14 }}>
        {p.highlights.map((h) => (
          <div key={h.area} style={{ background: "#FBF7F0", borderRadius: 16, padding: "16px 18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <b>{h.label}</b><Pill n={h.score} pct />
            </div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "#5C5470" }}>{h.text}</p>
          </div>
        ))}
      </div>
      {p.ingresses.length ? (
        <div style={{ marginTop: 20 }}>
          <h3 style={{ margin: "0 0 10px", fontSize: 17 }}>Planet changes</h3>
          <div style={{ display: "grid", gap: 8 }}>
            {p.ingresses.map((g) => (
              <p key={g.planet + g.dateLabel} style={{ margin: 0, display: "flex", gap: 12, fontSize: 15 }}>
                <span style={{ flex: "none", width: 8, height: 8, marginTop: 9, borderRadius: 999, background: g.good ? "#2C6B1F" : "#921A11" }} />
                <span><b>{g.dateLabel}:</b> {g.note}</span>
              </p>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function PeriodView({ data, sign }) {
  const p = data.period;
  const weekly = data.view === "weekly";
  const rows = weekly
    ? p.days.map((d) => ({ label: d.weekday + " " + d.label, text: d.moon, score: d.scores.overall }))
    : p.weeks.map((w) => ({ label: w.label, sub: w.range, text: w.text, score: w.score }));
  return (
    <div className="am-horo" style={{ display: "grid", gridTemplateColumns: "minmax(0, 380px) minmax(0, 1fr)", gap: 20, alignItems: "start" }}>
      <Hero
        sign={sign} range={data.range} score={p.avg.overall}
        scoreLabel={weekly ? "Weekly score" : "Monthly score"} luckyLabel="Lucky day" luckyValue={p.luckyDay}
        colour={p.luckyColour} numbers={p.luckyNumbers} summaryTitle={weekly ? "Weekly summary" : "Monthly summary"} summary={p.summary}
      />
      <div style={{ display: "grid", gap: 20 }}>
        <Rows title={weekly ? "Day-by-Day Forecast" : "Week-to-Week Forecast"} rows={rows} />
        <Highlights p={p} noun={weekly ? "Weekly" : "Monthly"} />
      </div>
    </div>
  );
}

function YearView({ data, sign }) {
  const y = data.year;
  const named = data.view === "yearly" ? "Next 12 months" : data.view;
  return (
    <div className="am-horo" style={{ display: "grid", gridTemplateColumns: "minmax(0, 380px) minmax(0, 1fr)", gap: 20, alignItems: "start" }}>
      <Hero
        sign={sign} range={named} score={y.score}
        scoreLabel="Year score" luckyLabel="Best month" luckyValue={y.luckyMonth}
        colour={y.luckyColour} numbers={y.luckyNumbers} summaryTitle="Year summary" summary={y.summary}
      />
      <div style={{ display: "grid", gap: 20 }}>
        <Rows title="Month-by-Month Forecast" rows={y.months.map((m) => ({ label: m.label, text: m.text, score: m.score }))} />
        <div style={card}>
          <h2 style={h2}>Year highlights</h2>
          {y.highlights.length ? (
            <div style={{ display: "grid", gap: 8, marginBottom: 20 }}>
              {y.highlights.map((h) => (
                <p key={h} style={{ margin: 0, display: "flex", gap: 12, fontSize: 15 }}>
                  <span style={{ flex: "none", width: 8, height: 8, marginTop: 9, borderRadius: 999, background: "#6C1594" }} />{h}
                </p>
              ))}
            </div>
          ) : null}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 14 }}>
            {y.planets.map((pl) => (
              <div key={pl.planet} style={{ background: "#FBF7F0", borderRadius: 16, padding: "16px 18px" }}>
                <b>{pl.planet}</b>
                <p style={{ margin: "6px 0 12px", fontSize: 14, lineHeight: 1.6, color: "#5C5470" }}>{pl.summary}</p>
                <div style={{ display: "flex", height: 10, borderRadius: 999, overflow: "hidden", gap: 2, marginBottom: 10 }} role="img" aria-label={pl.planet + " timeline, green supportive and red challenging"}>
                  {pl.stretches.map((s) => <div key={s.from} style={{ width: s.pct + "%", background: s.good ? "#5AA14A" : "#C9594F" }} />)}
                </div>
                <div style={{ display: "grid", gap: 4 }}>
                  {pl.stretches.map((s) => (
                    <div key={s.from} style={{ fontSize: 13, display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                      <span>{s.from} to {s.to}</span>
                      <span style={{ color: s.good ? "#2C6B1F" : "#921A11", fontWeight: 600 }}>{ord(s.house)} house, {s.good ? "supportive" : "challenging"}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {data.events.length ? (
            <p style={{ margin: "18px 0 0", fontSize: 13, color: "#736B8A" }}>
              Big planet changes: {data.events.map((e) => e.dateLabel + " " + e.planet + " into " + e.toSign).join("; ")}. Sidereal (Lahiri) signs; a retrograde planet can step back into the previous sign.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function PeriodPanel({ data, loading, failed, sign }) {
  if (!data && failed) return <div style={card}><p style={{ margin: 0 }}>We could not load this view. Please check your connection and try again.</p></div>;
  if (!data || loading) return <div style={card} aria-busy="true"><p style={{ margin: 0, color: "#5C5470" }}>Loading {sign.en} horoscope…</p></div>;
  return data.year ? <YearView data={data} sign={sign} /> : <PeriodView data={data} sign={sign} />;
}
