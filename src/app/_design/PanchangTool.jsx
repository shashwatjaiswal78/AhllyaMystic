"use client";
// The Panchang and Choghadiya tool: place and date in, the day's Choghadiya, Rahu Kaal, Tithi, Nakshatra, Yoga
// and Karana out. The calculation runs on the server (/api/panchang); this file draws it and handles the controls.
import React, { useEffect, useRef, useState } from "react";
import "./panchang.css";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const VAARA = ["Raviwara", "Somawara", "Mangalawara", "Budhawara", "Guruwara", "Shukrawara", "Shaniwara"];
const ROWS = ["Tithi", "Nakshatra", "Yoga", "Karana"];
const NATURE = {
  Amrit: { k: "best", t: "Best" }, Shubh: { k: "good", t: "Good" }, Labh: { k: "gain", t: "Gain" }, Char: { k: "mid", t: "Neutral" },
  Udveg: { k: "bad", t: "Bad" }, Rog: { k: "evil", t: "Evil" }, Kaal: { k: "loss", t: "Loss" },
};
const EDU = [
  ["Udveg", "Sun", "Bad", "The Sun is a harsh planet, so this slot is generally avoided for new work. It is still fine for dealings with government and authority."],
  ["Char", "Venus", "Neutral", "Venus is gentle and always on the move, so Char is called Chanchal too. It suits travel and activities that involve movement."],
  ["Labh", "Mercury", "Gain", "Mercury is a benefic. Labh is considered best for starting education, learning a new skill, and trade."],
  ["Amrit", "Moon", "Best", "The Moon is a benefic, and Amrit is the most favoured slot. It is considered good for all kinds of work."],
  ["Kaal", "Saturn", "Loss", "Saturn is a malefic. Auspicious work is avoided in Kaal, though it is recommended for activities that build up wealth slowly."],
  ["Shubh", "Jupiter", "Good", "Jupiter is a benefic. Shubh is considered good for ceremonies, especially marriage."],
  ["Rog", "Mars", "Evil", "Mars is a malefic. Auspicious work is avoided in Rog, though it is used for conflict and for defeating an opponent."],
];
const PLACE_KEY = "ahllya:place";

/* ---------------------------------------------------------------- date and time helpers */
const pad2 = (n) => String(n).padStart(2, "0");
const parseYMD = (s) => { const v = s.split("-"); return { y: +v[0], m: +v[1], d: +v[2] }; };
const addDays = (s, n) => { const p = parseYMD(s); return new Date(Date.UTC(p.y, p.m - 1, p.d + n)).toISOString().slice(0, 10); };
const dowOf = (s) => { const p = parseYMD(s); return new Date(Date.UTC(p.y, p.m - 1, p.d)).getUTCDay(); };
const ymd = (y, m, d) => `${y}-${pad2(m)}-${pad2(d)}`;
const dim = (y, m) => new Date(Date.UTC(y, m, 0)).getUTCDate();
const fold = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
const placeLabel = (p) => (p.online ? p.n : p.n + (p.r ? ", " + p.r.replace(/, India$/, "") : ""));

function todayIn(tz, ms = Date.now()) {
  const f = Object.fromEntries(new Intl.DateTimeFormat("en-GB", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date(ms)).map((x) => [x.type, x.value]));
  return `${f.year}-${f.month}-${f.day}`;
}
function localParts(ms, tz) {
  const f = Object.fromEntries(new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour12: false, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).formatToParts(new Date(ms)).map((x) => [x.type, x.value]));
  return { date: `${f.year}-${f.month}-${f.day}`, h: +f.hour % 24, m: +f.minute };
}
/* 12 hour, 24 hour, or 24 plus (hours after midnight continue as 24, 25, 26). */
function fmtT(ms, tz, base, fmt) {
  const p = localParts(ms + 30000, tz), later = base && p.date > base;
  let t;
  if (fmt === "12") { const h = p.h % 12 || 12; t = `${pad2(h)}:${pad2(p.m)} ${p.h < 12 ? "AM" : "PM"}`; }
  else if (fmt === "24plus" && later) t = `${pad2(p.h + 24)}:${pad2(p.m)}`;
  else t = `${pad2(p.h)}:${pad2(p.m)}`;
  if (later && fmt !== "24plus") { const q = parseYMD(p.date); t += `, ${MONTHS[q.m - 1]} ${q.d}`; }
  return t;
}
const fmtLong = (s) => { const p = parseYMD(s); return `${WEEKDAYS[dowOf(s)]}, ${p.d} ${MONTHS_LONG[p.m - 1]} ${p.y}`; };
const hms = (ms) => { ms = Math.max(0, Math.floor(ms / 1000)); return `${pad2(Math.floor(ms / 3600))}:${pad2(Math.floor((ms % 3600) / 60))}:${pad2(ms % 60)}`; };
const offLabel = (offMs) => { const m = offMs / 6e4, a = Math.abs(m); return "UTC" + (m < 0 ? "-" : "+") + pad2(Math.floor(a / 60)) + ":" + pad2(a % 60); };

/* ---------------------------------------------------------------- small drawings */
function Moon({ ph }) {
  const r = 28, c = 30, a = (ph * Math.PI) / 180, cs = Math.cos(a), rx = Math.min(r * Math.abs(cs), r - 3.5).toFixed(2), wax = ph < 180;
  const sweep = wax ? (cs > 0 ? 0 : 1) : cs > 0 ? 1 : 0;
  const lit = wax
    ? `M${c} ${c - r} A${r} ${r} 0 0 1 ${c} ${c + r} A${rx} ${r} 0 0 ${sweep} ${c} ${c - r}Z`
    : `M${c} ${c - r} A${r} ${r} 0 0 0 ${c} ${c + r} A${rx} ${r} 0 0 ${sweep} ${c} ${c - r}Z`;
  return (
    <svg viewBox="0 0 60 60" width="70" height="70" role="img" aria-label="Moon phase" style={{ flex: "none", filter: "drop-shadow(0 0 10px rgba(243,233,198,.25))" }}>
      <defs>
        <radialGradient id="pnmg" cx="40%" cy="38%" r="70%"><stop offset="0" stopColor="#FBF4DA" /><stop offset="1" stopColor="#DCCFA6" /></radialGradient>
        <clipPath id="pnmc"><path d={lit} /></clipPath>
      </defs>
      <circle cx="30" cy="30" r="28" fill="#2A1844" stroke="#9A79BC" strokeWidth=".8" />
      <g clipPath="url(#pnmc)">
        <circle cx="30" cy="30" r="28" fill="url(#pnmg)" />
        <circle cx="22" cy="20" r="6" fill="#B9AE92" opacity=".55" /><circle cx="38" cy="27" r="8" fill="#B3A78B" opacity=".5" /><circle cx="26" cy="38" r="5" fill="#BDB296" opacity=".5" />
        <circle cx="40" cy="42" r="4" fill="#B9AE92" opacity=".5" /><circle cx="17" cy="31" r="3" fill="#C2B79B" opacity=".5" /><circle cx="33" cy="14" r="3.5" fill="#BDB296" opacity=".5" />
      </g>
    </svg>
  );
}

function Timeline({ d, fmt, now }) {
  const tz = d.place.tz, S = d.sun, t0 = S.rise, t1 = S.next, W = 1120, L = 112, R = 64, X0 = L, X1 = W - R, span = t1 - t0;
  const X = (ms) => X0 + ((ms - t0) / span) * (X1 - X0);
  const rowsY = { Tithi: 150, Nakshatra: 208, Yoga: 266, Karana: 324 }, chY = 382, axY = 74, H = 440;
  const els = [];
  const loc = (ms) => ms + d.offMs;
  els.push(<rect key="n" x={X(S.set)} y={26} width={X(t1) - X(S.set)} height={H - 26 - 18} fill="#EADFF2" opacity=".55" />);
  els.push(<rect key="d" x={X0} y={26} width={X(S.set) - X0} height={H - 26 - 18} fill="#FFF6D6" opacity=".55" />);
  els.push(<line key="ax" x1={X0} y1={axY} x2={X1} y2={axY} stroke="#4A0A66" strokeWidth="1.6" />);
  let guard = 0, tick = Math.ceil(loc(t0) / 3600000) * 3600000 - d.offMs;
  for (; tick <= t1 && guard < 40; tick += 3600000, guard++) {
    const lh = Math.floor((((loc(tick) % 86400000) + 86400000) % 86400000) / 3600000), x = X(tick);
    els.push(<g key={"tk" + guard}><line x1={x} y1={axY - 5} x2={x} y2={axY + 5} stroke="#4A0A66" strokeWidth="1.2" /><text x={x} y={axY + 22} textAnchor="middle" className="tl-h">{fmt === "12" ? lh % 12 || 12 : lh}</text></g>);
  }
  [[S.rise, fmtT(S.rise, tz, d.date, fmt), "Sunrise"], [S.set, fmtT(S.set, tz, d.date, fmt), "Sunset"], [S.next, fmtT(S.next, tz, undefined, fmt), "Next sunrise"]].forEach(([ms, lab, cap], i) => {
    const x = X(ms);
    els.push(<g key={"sun" + i}><circle cx={x} cy={axY} r="9" fill="#FCCE07" stroke="#B8860B" strokeWidth="1.4" /><text x={x} y={axY - 24} textAnchor="middle" className="tl-sun">{lab}</text><text x={x} y={axY - 40} textAnchor="middle" className="tl-cap">{cap}</text></g>);
  });
  const dashes = [];
  ROWS.forEach((row) => {
    const y = rowsY[row], segs = d.timeline[row];
    els.push(<text key={row + "l"} x={L - 12} y={y + 5} textAnchor="end" className="tl-r">{row}</text>);
    els.push(<line key={row + "ln"} x1={X0} y1={y} x2={X1} y2={y} stroke="#A58BBA" strokeWidth="1.4" />);
    segs.forEach((sg, i) => {
      const xa = X(sg.a), xb = X(sg.b), mid = (xa + xb) / 2, narrow = xb - xa < 70;
      els.push(<text key={row + "n" + i} x={mid} y={y + (i % 2 && narrow ? 34 : 24)} textAnchor="middle" className="tl-n">{sg.name}</text>);
      if (!sg.last) {
        els.push(<path key={row + "p" + i} d={`M${xb - 5} ${y - 5}L${xb} ${y}L${xb - 5} ${y + 5}M${xb + 5} ${y - 5}L${xb} ${y}L${xb + 5} ${y + 5}`} fill="none" stroke="#8C3A1F" strokeWidth="1.4" />);
        els.push(<text key={row + "t" + i} x={xb} y={y - 12} textAnchor="middle" className="tl-t">{fmtT(sg.b, tz, d.date, fmt)}</text>);
        dashes.push([xb, y, row + i]);
      }
    });
  });
  els.push(<text key="chl" x={L - 12} y={chY + 5} textAnchor="end" className="tl-r">Choghadiya</text>);
  els.push(<line key="chln" x1={X0} y1={chY} x2={X1} y2={chY} stroke="#A58BBA" strokeWidth="1.4" />);
  d.day.concat(d.night).forEach((x, i) => {
    const k = NATURE[x.name].k;
    if (k !== "bad" && k !== "evil" && k !== "loss") return;
    const a = X(Math.max(x.start, t0)), b = X(Math.min(x.end, t1));
    els.push(<g key={"bd" + i}><path d={`M${a} ${chY - 8}V${chY + 8}M${a} ${chY}H${b}M${b} ${chY - 8}V${chY + 8}`} fill="none" stroke="#921A11" strokeWidth="2" /><text x={(a + b) / 2} y={chY - 12} textAnchor="middle" className="tl-bad">{x.name}</text></g>);
  });
  els.push(<text key="vaara" x={(X0 + X1) / 2} y={chY + 34} textAnchor="middle" className="tl-v">{VAARA[d.dow]}</text>);
  dashes.forEach(([x, y, key]) => els.push(<line key={"ds" + key} x1={x} y1={y + 5} x2={x} y2={y + 50} stroke="#8C3A1F" strokeWidth="1" strokeDasharray="3 4" opacity=".35" />));
  const nw = now;
  if (nw >= t0 && nw <= t1) {
    const x = X(nw);
    els.push(<g key="now"><line x1={x} y1={axY + 30} x2={x} y2={chY + 22} stroke="#6C1594" strokeWidth="2" strokeDasharray="5 4" /><rect x={x - 24} y={axY + 14} width="48" height="16" rx="8" fill="#6C1594" /><text x={x} y={axY + 26} textAnchor="middle" className="tl-now">Now</text></g>);
  }
  return (
    <section className="pn-tl">
      <div className="pn-tl-h"><h2>Panchang timeline</h2><span>One Panchang day, sunrise to next sunrise, at {d.place.n}</span></div>
      <div className="pn-tl-s">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Timeline of tithi, nakshatra, yoga, karana and inauspicious choghadiya from sunrise to the next sunrise" preserveAspectRatio="xMidYMid meet">{els}</svg>
      </div>
      <p className="pn-tl-n">Tithi, Nakshatra, Yoga and Karana change at the marked times. The red brackets are the inauspicious Choghadiya (Udveg, Kaal and Rog). The shaded bands show day and night.</p>
    </section>
  );
}

function Col({ list, title, time, tz, date, fmt }) {
  return (
    <div className="pn-col">
      <div className="pn-head"><b>{title}</b><span>{time}</span></div>
      {list.map((x, i) => {
        const n = NATURE[x.name];
        return (
          <div className="pn-row" key={i}>
            <div className={"pn-cell " + n.k}><span className="pn-dia" aria-hidden="true" />{x.name} <i>{n.t}</i></div>
            <div className="pn-time"><span>{fmtT(x.start, tz, date, fmt)} <i>to</i> {fmtT(x.end, tz, date, fmt)}</span>{x.rahu ? <em className="pn-rahu">Rahu Kaal</em> : null}</div>
          </div>
        );
      })}
    </div>
  );
}

function Edu() {
  return (
    <div className="pn-art">
      <section><h2>What is Choghadiya?</h2>
        <p>Choghadiya, also written Chogadia or Chaughadia, is a method of checking whether a time of day is favourable for starting something. It was traditionally used to choose travel muhurats, but its simplicity means it is now used for almost any work.</p>
        <p>Four slots are favourable: <b>Amrit</b>, <b>Shubh</b>, <b>Labh</b> and <b>Char</b>. Three are best avoided: <b>Rog</b>, <b>Kaal</b> and <b>Udveg</b>.</p>
        <p>The time from sunrise to sunset is the day Choghadiya, and the time from sunset to the next sunrise is the night Choghadiya. A Panchang day begins at sunrise, not at midnight.</p></section>
      <section><h2>Why is it called Choghadiya?</h2>
        <p>Traditionally the span from sunrise to sunset is divided into 30 ghatis. For Choghadiya, that daytime span is divided into 8 equal parts, and so is the night. Each part is about 4 ghatis, which is where the name comes from: <i>chau</i> (four) and <i>ghadiya</i> (ghati). It is also called Chaturshtika Muhurta.</p></section>
      <section><h2>How is a slot marked good or bad?</h2>
        <p>The first slot of each day is ruled by the planet that rules the weekday. On a Sunday it is the Sun, followed by Venus, Mercury, the Moon, Saturn, Jupiter and Mars, and the day closes with the Sun again. The night sequence starts from the fifth planet counted from the day lord.</p>
        <p>Each slot takes its nature from its ruling planet. Venus, Mercury, the Moon and Jupiter give favourable slots, while the Sun, Mars and Saturn give unfavourable ones. Even an unfavourable slot can suit certain work, as the notes below show.</p></section>
      <section><h2>What if a good slot overlaps Rahu Kaal?</h2>
        <p>It can happen that an auspicious Choghadiya falls inside Rahu Kaal, which is considered strongly malefic. In South India Rahu Kaal is given great weight when choosing a muhurat. Many classical texts do not mention it for Choghadiya, but it is generally wiser to skip an auspicious slot that overlaps Rahu Kaal. That is why Rahu Kaal is marked in the tables above.</p></section>
      <h2 className="pn-art-h">The seven Choghadiya</h2>
      {[["Good", "good", ["Amrit", "Shubh", "Labh"]], ["Neutral", "mid", ["Char"]], ["Bad", "bad", ["Udveg", "Kaal", "Rog"]]].map((g) => (
        <div className={"pn-g " + g[1]} key={g[0]}>
          <h3>{g[0]} Choghadiya</h3>
          <div className="pn-tw">
            <table className="pn-t">
              <thead><tr><th>Choghadiya</th><th>Nature</th><th>Ruling planet</th><th>What it means</th></tr></thead>
              <tbody>
                {g[2].map((n) => { const e = EDU.find((x) => x[0] === n); return <tr key={n} className={NATURE[n].k}><td><b>{e[0]}</b></td><td>{e[2]}</td><td>{e[1]}</td><td>{e[3]}</td></tr>; })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- the tool */
export default function PanchangTool({ initial }) {
  const [data, setData] = useState(initial);
  const [fmt, setFmt] = useState("12");
  const [pm, setPm] = useState("purni");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [dateIn, setDateIn] = useState(initial.date);
  const [manual, setManual] = useState(false);
  const [hits, setHits] = useState([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [now, setNow] = useState(initial.serverNow); // the clock lives in state so the first (server) render never reads the time
  const placeRef = useRef(null), latRef = useRef(null), lonRef = useRef(null), tzRef = useRef(null);
  const chosen = useRef(initial.place), timer = useRef(null), seq = useRef(0), box = useRef(null), refetched = useRef(0);

  const load = async (date, place) => {
    setBusy(true); setError("");
    try {
      const qs = new URLSearchParams({ date, la: String(place.la), lo: String(place.lo), tz: place.tz, n: place.n });
      const r = await fetch("/api/panchang?" + qs.toString());
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || "Could not calculate the Panchang. Please try again.");
      setData(j); setDateIn(j.date); chosen.current = place;
      try { localStorage.setItem(PLACE_KEY, JSON.stringify(place)); } catch (e) { /* storage unavailable */ }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
    setBusy(false);
  };

  // First visit: restore the saved place, format and Purnimanta/Amanta choice, then refresh for the visitor's own clock.
  useEffect(() => {
    try { setFmt(localStorage.getItem("pn.fmt") || "12"); setPm(localStorage.getItem("pn.pm") || "purni"); } catch (e) { /* ignore */ }
    let p = initial.place;
    try { const s = JSON.parse(localStorage.getItem(PLACE_KEY) || "null"); if (s && Number.isFinite(s.la) && Number.isFinite(s.lo) && s.tz) p = s; } catch (e) { /* ignore */ }
    if (placeRef.current) placeRef.current.value = p.n;
    load(todayIn(p.tz), p);
    const away = (e) => { if (box.current && !box.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", away);
    return () => document.removeEventListener("mousedown", away);
    // eslint-disable-next-line
  }, []);

  // The countdown ticks every second; when the slot ends, ask the server for the next one.
  useEffect(() => {
    const id = setInterval(() => {
      setNow(Date.now());
      if (data.now && Date.now() >= data.now.slot.end && refetched.current !== data.now.slot.end && !busy) {
        refetched.current = data.now.slot.end;
        load(dateIn, data.place);
      }
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line
  }, [data, busy, dateIn]);

  const search = async (q) => {
    const mine = ++seq.current;
    try {
      const r = await fetch("/api/kundli/places?q=" + encodeURIComponent(q));
      const j = await r.json();
      if (mine !== seq.current) return [];
      const list = Array.isArray(j.places) ? j.places : [];
      setHits(list); setActive(list.length ? 0 : -1); setOpen(list.length > 0);
      return list;
    } catch { return []; }
  };
  const onPlaceInput = (e) => {
    const v = e.currentTarget.value;
    chosen.current = null; setError("");
    clearTimeout(timer.current);
    if (manual || v.trim().length < 2) { seq.current++; setHits([]); setOpen(false); return; }
    timer.current = setTimeout(() => search(v), 250);
  };
  const pick = (p) => {
    seq.current++;
    if (placeRef.current) placeRef.current.value = placeLabel(p);
    const place = { n: p.n, la: p.la, lo: p.lo, tz: p.tz };
    chosen.current = place; setHits([]); setOpen(false); setActive(-1); setError("");
    load(dateIn || todayIn(place.tz), place);
  };
  const onPlaceKey = (e) => {
    if (!open || !hits.length) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((active + 1) % hits.length); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((active - 1 + hits.length) % hits.length); }
    else if (e.key === "Enter" && active >= 0) { e.preventDefault(); pick(hits[active]); }
    else if (e.key === "Escape") setOpen(false);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (busy) return;
    setError("");
    const date = dateIn;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return setError("Choose a date.");
    let place = chosen.current;
    if (manual) {
      const la = parseFloat(latRef.current.value), lo = parseFloat(lonRef.current.value);
      if (!Number.isFinite(la) || !Number.isFinite(lo) || Math.abs(la) > 90 || Math.abs(lo) > 180) return setError("Enter the latitude and longitude as numbers. North and East are positive.");
      place = { n: placeRef.current.value.trim() || "Your place", la, lo, tz: tzRef.current.value };
    } else if (!place) {
      const typed = placeRef.current.value.trim();
      if (!typed) return setError("Enter your place.");
      const list = await search(typed);
      const city = fold(typed.split(",")[0]);
      const exact = list.filter((p) => fold(p.n) === city);
      const one = list.length === 1 ? list[0] : exact.length === 1 ? exact[0] : null;
      if (!one) return setError(list.length ? "Pick your place from the list so we use the right coordinates." : "We could not find that place. Try the nearest town, or enter coordinates.");
      place = { n: one.n, la: one.la, lo: one.lo, tz: one.tz };
      if (placeRef.current) placeRef.current.value = placeLabel(one);
      setOpen(false);
    }
    load(date, place);
  };

  const go = (date) => load(date, data.place);
  const setF = (f) => { setFmt(f); try { localStorage.setItem("pn.fmt", f); } catch (e) { /* ignore */ } };
  const togglePm = () => { const n = pm === "amanta" ? "purni" : "amanta"; setPm(n); try { localStorage.setItem("pn.pm", n); } catch (e) { /* ignore */ } };
  const zones = typeof Intl.supportedValuesOf === "function" ? Intl.supportedValuesOf("timeZone") : ["Asia/Kolkata"];

  const d = data, tz = d.place.tz, q = parseYMD(d.date), li = d.lunar, ti = li.tithi;
  const am = pm === "amanta", mon = am ? li.amanta : li.purni, dayNo = am ? li.dAm : li.dPu;
  const cur = d.now;

  return (
    <>
      <section className="pn-hero" aria-label="Panchang">
        <div className="am-stars" aria-hidden="true" />
        <div className="am-stars2" aria-hidden="true" style={{ opacity: 0.6 }} />
        <img loading={"lazy"} decoding={"async"} className="am-spin-zodiac" src="/images/610ce06ea07e7a2d1d36f4d88029f8db.png" alt="" aria-hidden="true" style={{ position: "absolute", right: "-120px", top: "-60px", width: "560px", height: "560px", opacity: 0.18, pointerEvents: "none" }} />
        <div className="pn-hero-in">
          <p className="pn-crumb"><a href="/">Home</a> / <a href="/horoscope">Horoscope</a> / <b>Panchang</b></p>
          <p className="pn-eyebrow">Free Panchang tool</p>
          <h1>Daily Panchang and Choghadiya</h1>
          <p className="pn-sub">Today’s tithi, nakshatra, yoga and karana, sunrise and sunset, Rahu Kaal and the best hours of the day, calculated for your own city, town or village.</p>
          <form className="pn-card pn-form pn" onSubmit={submit} noValidate autoComplete="off">
            <div className="pn-fgrid">
              <div className="pn-field">
                <label className="pn-lbl" htmlFor="pn-date">Date</label>
                <input id="pn-date" type="date" value={dateIn} onChange={(e) => setDateIn(e.target.value)} required />
              </div>
              <div className="pn-field" ref={box}>
                <label className="pn-lbl" htmlFor="pn-place">Place</label>
                <input
                  id="pn-place" ref={placeRef} type="text" defaultValue={initial.place.n} placeholder={manual ? "Name for the page (optional)" : "Start typing a city, town or village"} spellCheck={false} autoComplete="off"
                  role="combobox" aria-expanded={open} aria-autocomplete="list" aria-controls="pn-places" onInput={onPlaceInput} onKeyDown={onPlaceKey} onFocus={() => { if (hits.length) setOpen(true); }}
                />
                {open && hits.length ? (
                  <ul id="pn-places" role="listbox" className="pn-ac">
                    {hits.map((p, i) => (
                      <li key={i} role="option" aria-selected={i === active}>
                        <button type="button" className={i === active ? "sel" : ""} onMouseDown={(e) => { e.preventDefault(); pick(p); }} onMouseEnter={() => setActive(i)}>
                          {p.n}<small>{p.r}</small>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
            {manual ? (
              <div>
                <div className="pn-fgrid3">
                  <div className="pn-field"><label className="pn-lbl" htmlFor="pn-lat">Latitude</label><input id="pn-lat" ref={latRef} inputMode="decimal" placeholder="30.7046" defaultValue={d.place.la} /></div>
                  <div className="pn-field"><label className="pn-lbl" htmlFor="pn-lon">Longitude</label><input id="pn-lon" ref={lonRef} inputMode="decimal" placeholder="76.7179" defaultValue={d.place.lo} /></div>
                  <div className="pn-field"><label className="pn-lbl" htmlFor="pn-tz">Time zone</label><select id="pn-tz" ref={tzRef} defaultValue={d.place.tz}>{zones.map((z) => <option key={z}>{z}</option>)}</select></div>
                </div>
                <p style={{ margin: "0 0 12px", fontSize: 12, color: "#5C5470" }}>North and East are positive.</p>
              </div>
            ) : null}
            <div className="pn-frow">
              <button className="pn-go" type="submit" disabled={busy} aria-busy={busy || undefined}>{busy ? "Calculating…" : "Show Panchang"}</button>
              <button type="button" className="pn-link" aria-expanded={manual} onClick={() => { setManual(!manual); setOpen(false); }}>{manual ? "Use the place list instead" : "Village or town not listed? Enter coordinates"}</button>
            </div>
            {error ? <p role="alert" className="pn-err">{error}</p> : null}
          </form>
          <p className="pn-note">Your place stays in your browser. It is used only to calculate the Panchang and is not stored on our server.</p>
        </div>
      </section>

      <div className="pn pn-wrap" id="pn-out" style={{ paddingTop: 40 }}>
        {cur ? (
          <div className="pn-now">
            <div>
              <p className="pn-now-k">Aaj ka Choghadiya</p>
              <h2 className="pn-now-n">{cur.slot.name} <i>{NATURE[cur.slot.name].t}</i></h2>
              <p className="pn-now-t">{fmtT(cur.slot.start, tz, todayIn(tz, now), fmt)} to {fmtT(cur.slot.end, tz, todayIn(tz, now), fmt)}</p>
              <p className="pn-now-c"><span className="pn-left">{hms(cur.slot.end - now)}</span> left{cur.next ? <> &middot; next <b>{cur.next.name}</b> ({NATURE[cur.next.name].t.toLowerCase()})</> : null}</p>
            </div>
            <div className="pn-moon">
              <Moon ph={ti.ph} />
              <div>
                <h3>{dayNo}, {mon}</h3>
                <p className="pn-tt">{ti.paksha} Paksha, {ti.name}{ti.end ? <span>till {fmtT(ti.end, tz, d.date, fmt)}</span> : null}</p>
                <p>{li.vy} {li.sam}, Vikrama Samvata</p>
                <p>{d.place.n}</p>
                <button type="button" className="pn-pm" onClick={togglePm}>Switch to {am ? "Purnimanta" : "Amanta"}</button>
              </div>
            </div>
            <div className="pn-bigdate"><b>{q.d}</b><span>{MONTHS_LONG[q.m - 1]} {q.y}</span><small>{WEEKDAYS[dowOf(d.date)]}</small></div>
          </div>
        ) : null}

        <div className="pn-bar">
          <span className="pn-seg" role="group" aria-label="Time format">
            {[["12", "12 Hour"], ["24", "24 Hour"], ["24plus", "24 Plus"]].map(([k, l]) => <button key={k} type="button" className={fmt === k ? "on" : ""} onClick={() => setF(k)}>{l}</button>)}
          </span>
          <span className="pn-nav">
            <button type="button" className="pn-b" onClick={() => go(addDays(d.date, -1))}>&lsaquo; Prev day</button>
            <button type="button" className="pn-b" onClick={() => go(todayIn(tz, Date.now()))}>Today</button>
            <button type="button" className="pn-b" onClick={() => go(addDays(d.date, 1))}>Next day &rsaquo;</button>
          </span>
        </div>
        <div className="pn-pick">
          <div className="pn-mrow">
            <button type="button" className="pn-y" aria-label="Previous year" onClick={() => go(ymd(q.y - 1, q.m, Math.min(q.d, dim(q.y - 1, q.m))))}>&lsaquo;</button>
            {MONTHS.map((m, i) => <button key={m} type="button" className={"pn-m" + (q.m === i + 1 ? " on" : "")} onClick={() => go(ymd(q.y, i + 1, Math.min(q.d, dim(q.y, i + 1))))}>{m}</button>)}
            <button type="button" className="pn-y" aria-label="Next year" onClick={() => go(ymd(q.y + 1, q.m, Math.min(q.d, dim(q.y + 1, q.m))))}>&rsaquo;</button>
            <span className="pn-year">{q.y}</span>
          </div>
          <div className="pn-drow">
            {Array.from({ length: dim(q.y, q.m) }, (_, i) => <button key={i} type="button" className={"pn-d" + (q.d === i + 1 ? " on" : "")} onClick={() => go(ymd(q.y, q.m, i + 1))}>{i + 1}</button>)}
          </div>
        </div>

        {!d.sun ? (
          <div className="pn-err">The sun does not rise or set on this date at this place, so the Panchang and Choghadiya cannot be calculated. Try another date or place.</div>
        ) : (
          <>
            <div className="pn-title">{fmtLong(d.date)} <span>{d.place.n} &middot; {offLabel(d.offMs)}</span></div>
            <div className="pn-det">
              {ROWS.map((row) => (
                <div className="pn-dc" key={row}>
                  <h3>{row}</h3>
                  <ul>
                    {d.timeline[row].map((sg, i) => (
                      <li key={i}><b>{sg.name}</b><span>{sg.last ? "until the next sunrise" : "till " + fmtT(sg.b, tz, d.date, fmt)}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="pn-cols">
              <Col list={d.day} title="Day Choghadiya" time={fmtT(d.sun.rise, tz, d.date, fmt) + " sunrise"} tz={tz} date={d.date} fmt={fmt} />
              <Col list={d.night} title="Night Choghadiya" time={fmtT(d.sun.set, tz, d.date, fmt) + " sunset"} tz={tz} date={d.date} fmt={fmt} />
            </div>
            <p className="pn-notes"><b>Notes:</b> All timings are in the local time of {d.place.n}{fmt === "12" ? " in 12 hour notation" : fmt === "24" ? " in 24 hour notation" : ", with hours after midnight continuing past 24"}. Hours after midnight are shown with the next day’s date, because a Panchang day starts and ends at sunrise.</p>
            <div className="pn-legend">
              <span><i className="best" /><i className="good" /><i className="gain" /> Auspicious</span>
              <span><i className="bad" /><i className="evil" /><i className="loss" /> Inauspicious</span>
              <span><i className="mid" /> Neutral</span>
              <span><em className="pn-rahu">Rahu Kaal</em> Avoid for auspicious work</span>
            </div>
            <Timeline d={d} fmt={fmt} now={now} />
          </>
        )}
        <Edu />
        <p style={{ fontSize: 12.5, color: "#5C5470", maxWidth: "70ch" }}>For learning and guidance. Timings are calculated for the place you choose and can differ by a minute or two from a printed panchang. It is not a substitute for a reading by an astrologer.</p>
      </div>
    </>
  );
}
