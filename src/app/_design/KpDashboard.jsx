"use client";
// KP Kundli result dashboard: planets, cusps, charts, ruling planets, dasha explorer, significators and Nakshatra Nadi.
// A React port of the KP Kundli Calculator Artifact's result view. The chart itself is calculated on the server
// (/api/kp); this file only draws it and handles the interactive parts (dasha drill-down, popups, live ruling planets).
import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import "./kp-dashboard.css";
import { ABBR, DASHA_LEVELS, DASHA_YEAR_DAYS, NAK, SIGNS, SUB_ROWS, dashaChildren, dms2, dmsF, ord, runningChain } from "@/lib/kp/core";

const MAXD = 4; // deepest drillable depth: prana
const DX_COLS = ["M", "A", "P", "S", "PN"];
const S3 = (n) => String(n).slice(0, 3);
const isNode = (n) => n === "Rahu" || n === "Ketu";

const HOUSE_MEAN = { 1: "health, personality and general wellbeing", 2: "wealth, family and speech", 3: "courage, siblings, short travel and communication", 4: "mother, home, land, vehicles and education", 5: "children, creativity, intellect and speculation", 6: "service, debts, illness and competition", 7: "marriage, partnership and public dealings", 8: "longevity, sudden events, inheritance and obstacles", 9: "fortune, higher learning, father and long journeys", 10: "profession, status, honour and authority", 11: "gains, income and fulfilment of desires", 12: "expenses, losses, foreign lands and isolation" };
const PLANET_MEAN = { Sun: "authority, government and vitality", Moon: "the mind, the public and care", Mars: "drive, action, property and conflict", Mercury: "papers, negotiation, correspondence or intermediaries", Jupiter: "guidance, advice, teachers and expansion", Venus: "relationships, comforts, the arts and vehicles", Saturn: "delay, discipline, labour and long processes", Rahu: "the unconventional, the foreign, technology and sudden turns", Ketu: "detachment, research, separation and the hidden" };

/* ---------- time formatting in the birth place's zone ---------- */
function makeFmt(tz) {
  const dmy = new Intl.DateTimeFormat("en-GB", { timeZone: tz, day: "2-digit", month: "2-digit", year: "numeric" });
  const stamp = new Intl.DateTimeFormat("en-GB", { timeZone: tz, day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: false });
  const span = (ms) => {
    const days = ms / 864e5;
    if (days < 1) { const h = Math.floor(ms / 36e5), m = Math.round((ms % 36e5) / 6e4); return (h ? h + "h " : "") + m + "m"; }
    let y = Math.floor(days / DASHA_YEAR_DAYS);
    const rem = days - y * DASHA_YEAR_DAYS;
    let m = Math.floor(rem / (DASHA_YEAR_DAYS / 12)), d = Math.round(rem - m * (DASHA_YEAR_DAYS / 12));
    if (d >= 30) { m++; d = 0; }
    if (m >= 12) { y++; m = 0; }
    const parts = [];
    if (y) parts.push(y + "y");
    if (m) parts.push(m + "m");
    if (d || !parts.length) parts.push(d + "d");
    return parts.join(" ");
  };
  return { dmy: (ms) => dmy.format(new Date(ms)), stamp: (ms) => stamp.format(new Date(ms)), span };
}

/* ---------- North Indian diagram ----------
   The houses are fixed in place and the signs move: house 1 is always the top diamond and the houses run anticlockwise. */
const NI_CELL = [
  { c: [200, 92], n: [200, 182], d: 1 }, { c: [100, 36], n: [100, 88] }, { c: [36, 100], n: [88, 104] }, { c: [96, 200], n: [182, 205], d: 1 },
  { c: [36, 300], n: [88, 304] }, { c: [100, 364], n: [100, 314] }, { c: [200, 308], n: [200, 222], d: 1 }, { c: [300, 364], n: [300, 314] },
  { c: [364, 300], n: [312, 304] }, { c: [304, 200], n: [216, 205], d: 1 }, { c: [364, 100], n: [312, 104] }, { c: [300, 36], n: [300, 88] },
];

function NorthChart({ chart, mode, title }) {
  const uid = useId().replace(/:/g, "");
  const asc = chart.cuspRows[0];
  const ascSign = Math.floor(asc.lon / 30);
  const cells = Array.from({ length: 12 }, () => []);
  for (const p of chart.planets) {
    const h = mode === "bhav" ? p.house : ((Math.floor(p.lon / 30) - ascSign + 12) % 12) + 1;
    cells[h - 1].push(p);
  }
  const signNo = (h) => (mode === "bhav" ? Math.floor(chart.cuspRows[h - 1].lon / 30) + 1 : ((ascSign + h - 1) % 12) + 1);
  return (
    <svg className="ni" viewBox="-6 -6 412 412" role="img" aria-label={`${title}, North Indian style`}>
      <defs><clipPath id={`nic${uid}`}><rect x="0" y="0" width="400" height="400" rx="26" /></clipPath></defs>
      <rect className="ni-l" x="0" y="0" width="400" height="400" rx="26" />
      <path className="ni-l" clipPath={`url(#nic${uid})`} d="M0 0L400 400M400 0L0 400M200 0L400 200L200 400L0 200Z" />
      <rect className="ni-l ni-o" x="0" y="0" width="400" height="400" rx="26" />
      {Array.from({ length: 12 }, (_, i) => {
        const h = i + 1, cell = NI_CELL[i], pl = cells[i];
        const items = [];
        if (h === 1) items.push(<tspan key="asc" className="ni-a">Asc</tspan>);
        pl.forEach((p) => items.push(
          <React.Fragment key={p.name}>
            <tspan className={"ni-p" + (isNode(p.name) ? " nd" : "")}>{ABBR[p.name]}{p.retro && !isNode(p.name) ? <tspan className="ni-r">R</tspan> : null}</tspan>
            <tspan className="ni-d" dx="2">{Math.floor(p.deg)}&deg;</tspan>
          </React.Fragment>
        ));
        let body = null;
        if (items.length) {
          const per = cell.d ? (items.length > 2 ? 2 : 1) : items.length > 3 ? 2 : 1;
          const lines = [];
          for (let k = 0; k < items.length; k += per) lines.push(items.slice(k, k + per));
          const lh = 14, y0 = cell.c[1] - ((lines.length - 1) * lh) / 2;
          body = (
            <text textAnchor="middle" dominantBaseline="middle">
              {lines.map((ln, li) => (
                <tspan key={li} x={cell.c[0]} y={y0 + li * lh}>
                  {ln.map((it, j) => <React.Fragment key={j}>{j ? <tspan dx="7">{" "}</tspan> : null}{it}</React.Fragment>)}
                </tspan>
              ))}
            </text>
          );
        }
        return (
          <React.Fragment key={h}>
            <text className="ni-n" x={cell.n[0]} y={cell.n[1]} textAnchor="middle" dominantBaseline="middle">{signNo(h)}</text>
            {body}
          </React.Fragment>
        );
      })}
    </svg>
  );
}

/* ---------- ruling planets, live ---------- */
function RulingPlanets({ R }) {
  const [rp, setRp] = useState(null);
  const [err, setErr] = useState("");
  const [clock, setClock] = useState("");
  const { la, lo, tz, place } = { la: R.meta.la, lo: R.meta.lo, tz: R.meta.tz, place: R.meta.place };

  useEffect(() => {
    let alive = true, n = 0;
    const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour12: false, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const tick = () => {
      const f = Object.fromEntries(fmt.formatToParts(new Date()).map((x) => [x.type, x.value]));
      setClock(`At ${String(+f.hour % 24).padStart(2, "0")}:${f.minute}:${f.second} Hrs. On ${f.day}/${f.month}/${f.year} · ${place}`);
    };
    const load = async () => {
      try {
        const r = await fetch("/api/kp/ruling", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ place: { la, lo, tz }, node: R.opts.node, ay: R.opts.ay }) });
        const j = await r.json();
        if (!alive) return;
        if (!r.ok) { setErr(j.error || "Could not compute."); return; }
        setErr(""); setRp(j);
      } catch { if (alive) setErr("Could not reach the server. Retrying."); }
    };
    tick(); load();
    const t = setInterval(() => { tick(); if (++n % 5 === 0 && !document.hidden) load(); }, 1000);
    return () => { alive = false; clearInterval(t); };
  }, [la, lo, tz, place, R.opts.node, R.opts.ay]);

  const kv = (k, v) => <div className="rpk"><span>{k} :</span><b>{v}</b></div>;
  return (
    <div className="rpc">
      <p className="rpc-at">{clock}</p>
      <div>
        {err ? <div className="err">Could not compute: {err}</div> : null}
        {rp ? (
          <>
            <div className="rpg">
              <div>{kv("Lagna Rashi Lord", ABBR[rp.lagna.sign])}{kv("Lagna Star Lord", ABBR[rp.lagna.star])}{kv("Lagna Sub Lord", ABBR[rp.lagna.sub])}</div>
              <div>{kv("Moon Rashi Lord", ABBR[rp.moon.sign])}{kv("Moon Star Lord", ABBR[rp.moon.star])}</div>
              <div>{kv("M.Rahu", ABBR[rp.rahu.sign] + " / " + ABBR[rp.rahu.star])}{kv("M.Ketu", ABBR[rp.ketu.sign] + " / " + ABBR[rp.ketu.star])}{kv("Day Lord", ABBR[rp.day])}</div>
            </div>
            <div className="rp-fin"><span className="k">Ruling</span>{rp.ruling.map((n) => <span className="rp-chip" key={n} title={n}>{ABBR[n]}</span>)}</div>
          </>
        ) : !err ? <p className="rpc-at">Calculating...</p> : null}
      </div>
    </div>
  );
}

/* ---------- dasha explorer ---------- */
function DashaExplorer({ mds, chain, path, setPath, fmt, openFull }) {
  const L = path.length, list = L === 0 ? mds : dashaChildren(path[L - 1]), canDrill = L < MAXD;
  const scroller = useRef(null);
  const label = (n) => n.lords.join("-");
  const runningDepth = () => chain.slice(0, Math.max(0, Math.min(MAXD, chain.length - 1)));
  useEffect(() => {
    const sc = scroller.current; if (!sc) return;
    const hit = sc.querySelector("tr.now");
    if (hit) sc.scrollTop = Math.max(0, hit.offsetTop - sc.clientHeight / 2);
  }, [path]);
  return (
    <div className="dxbox">
      <div className="dxscroll" ref={scroller}>
        <table className="dxt">
          <thead>
            <tr>
              {DX_COLS.map((k, i) => (
                <th key={k}>
                  <button type="button" className={"dxh" + (i === L ? " here" : "")} title={DASHA_LEVELS[i]}
                    onClick={() => setPath(path.length > i ? path.slice(0, i) : chain.slice(0, Math.min(i, chain.length)))}>{k}</button>
                </th>
              ))}
              <th className="dxs">Start</th><th className="dxs">End</th><th className="dxs">End time</th>
            </tr>
          </thead>
          <tbody>
            {list.map((n, i) => (
              <tr key={n.lords.join(">")} className={"dxr" + (chain.includes(n) ? " now" : "") + (canDrill ? " dxgo" : "")}
                title={(canDrill ? `Open the ${DASHA_LEVELS[L + 1].toLowerCase()}s of ${label(n)}. ` : "") + `${fmt.stamp(n.start)} to ${fmt.stamp(n.end)}`}
                onClick={() => { if (canDrill) setPath(path.concat(list[i])); }}>
                {DX_COLS.map((k, j) => (j > L ? <td className="dxc" key={k} /> : <td className={"dxc" + (j === L ? " self" : "")} key={k}>{ABBR[n.lords[j]]}</td>))}
                <td className="dxd">{fmt.dmy(n.start)}</td><td className="dxd">{fmt.dmy(n.end)}</td><td className="dxd dxt2">{fmt.stamp(n.end).slice(-5)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dxtools">
        <span>{canDrill ? `${DASHA_LEVELS[L]} level. Click a row to open ${DASHA_LEVELS[L + 1]}` : `Deepest level (${DASHA_LEVELS[L]})`}</span>
        <span>
          <button type="button" className="dxb" onClick={() => setPath([])}>Collapse all</button>
          <button type="button" className="dxb" onClick={() => setPath(runningDepth())}>Running now</button>
          <button type="button" className="dxb" onClick={openFull}>Full</button>
        </span>
      </div>
    </div>
  );
}

/* ---------- popups ---------- */
function Modal({ title, wide, onClose, children }) {
  const closeRef = useRef(null);
  useEffect(() => {
    closeRef.current?.focus();
    const key = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [onClose]);
  return (
    <div className="cd-ov" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={"cd-card" + (wide ? " wide" : "")} role="dialog" aria-modal="true" aria-labelledby="cd-h">
        <div className="cd-head"><span id="cd-h">{title}</span><button type="button" className="cd-x" ref={closeRef} aria-label="Close" onClick={onClose}>&times;</button></div>
        <div className="cd-body">{children}</div>
      </div>
    </div>
  );
}

function CuspDetail({ h, R, utOn, setUtOn }) {
  const { chart, sig } = R;
  const row = chart.cuspRows[h - 1], pl = (n) => chart.planets.find((p) => p.name === n);
  const csl = pl(row.sub), nl = pl(csl.star), sl = pl(csl.sub);
  const ten = chart.planets.some((p) => p.star === csl.name);
  const hs = (n) => sig.planets[n].houses.map(ord).join(", ");
  const line = (lab, p, strike) => <tr><td>{lab}</td><td>{p.name}</td><td>{p.signName}</td><td className={strike ? "ut-strike" : ""}>{hs(p.name)}</td></tr>;
  return (
    <>
      <div className="cd-top">
        <span><b>{ord(h)} Cusp</b> &middot; Sign {row.signName} &middot; CSL {csl.name} in {csl.signName}</span>
        <button type="button" className={"cd-ut " + (utOn ? "on" : "")} aria-pressed={utOn} onClick={() => setUtOn(!utOn)}>UT/T {utOn ? "ON" : "OFF"}</button>
      </div>
      <table className="cd-tbl">
        <thead><tr><th>Level</th><th>Planet</th><th>Rashi</th><th>House Significators</th></tr></thead>
        <tbody>{line("CSL (Cuspal Sub Lord)", csl, utOn && ten)}{line("NL of CSL (Star Lord)", nl, false)}{line("SL of CSL (Sub Lord)", sl, false)}</tbody>
      </table>
      <p className="cd-note">
        {utOn
          ? ten ? `${csl.name} is tenanted, so a planet occupies its star and its own significations are weak (its agents speak first).` : `${csl.name} is untenanted, so no planet occupies its star and it is a strong significator.`
          : "Tenanted and untenanted marking is off."}
      </p>
    </>
  );
}

function NadiDetail({ name, R }) {
  const { chart, nadi } = R;
  const g = nadi.find((x) => x.name === name);
  if (!g) return null;
  const P = (n) => chart.planets.find((p) => p.name === n);
  const owns = (n) => chart.cuspRows.map((r, i) => (r.signLord === n ? i + 1 : 0)).filter(Boolean);
  const p = P(name);
  const anyNode = g.rows.some((r) => isNode(r.lord));
  return (
    <>
      <div className="cd-top"><span><b>{name}</b> &middot; {g.sign} {dmsF(g.deg)} &middot; House {g.house}{g.retro ? " · Retrograde" : ""}</span></div>
      <p className="cd-sub">{p.nak}, pada {p.pada} &middot; Star lord {p.star} &middot; Sub lord {p.sub}</p>
      <table className="cd-tbl">
        <thead><tr><th>Level</th><th>Lord</th><th>Rashi</th><th>Occupies</th><th>Owns</th><th>Houses signified</th></tr></thead>
        <tbody>
          {g.rows.map((r) => {
            const q = P(r.lord), o = owns(r.lord);
            return <tr key={r.role}><td>{r.role}</td><td><b>{r.lord}</b></td><td>{q.signName}</td><td>{q.house}</td><td>{o.length ? o.join(", ") : "none"}</td><td><b>{r.houses.join(", ")}</b></td></tr>;
          })}
        </tbody>
      </table>
      <p className="cd-note">Houses signified are the house a planet occupies plus the houses it owns.{anyNode ? " Rahu and Ketu also carry the houses of their sign lord and of planets that conjoin or aspect them." : ""}</p>
    </>
  );
}

const fdKey = (n) => n.lords.join(">");

function FullDasha({ R, mds, chain, fmt, now }) {
  const { chart, nadi } = R;
  const moon = chart.planets[1], first = mds[0];
  const [open, setOpen] = useState(() => new Set(chain.slice(0, 4).map(fdKey)));
  const [info, setInfo] = useState(() => new Set());
  const [copied, setCopied] = useState(false);
  const toggle = (set, setSet, k) => { const s = new Set(set); if (s.has(k)) s.delete(k); else s.add(k); setSet(s); };
  const owns = (n) => chart.cuspRows.map((r, i) => (r.signLord === n ? i + 1 : 0)).filter(Boolean);
  const P = (n) => chart.planets.find((p) => p.name === n);
  const H = {};
  nadi.forEach((g) => { H[g.name] = g.rows[0].houses; });
  const dmyD = (ms) => fmt.dmy(ms).replace(/\//g, "-");
  const left = (n) => { const ms = n.end - now; return ms > 0 ? fmt.span(ms) + " left" : "ended"; };

  let rd = null;
  if (chain.length >= 2) {
    const list = (a) => (a.length ? a.join(", ") : "none");
    const mean = (a) => a.slice(0, 3).map((h) => HOUSE_MEAN[h]).join(", ");
    const md = chain[0].lord, X = chain[1].lord, p = P(X), S = p.star, B = p.sub;
    const good = H[B].filter((h) => [2, 6, 10, 11].includes(h)), bad = H[B].filter((h) => [5, 8, 12].includes(h));
    let verdict, cls;
    if (good.length && bad.length) { verdict = "The sub is mixed: the matter advances but is not completed cleanly, so expect a partial result with some obstruction."; cls = "mix"; }
    else if (good.length) { verdict = "The sub is supportive: it points to houses of fulfilment, so results are likely to come through."; cls = "good"; }
    else if (bad.length) { verdict = "The sub is adverse: it points to houses of loss or denial, so delays and obstruction are likely."; cls = "bad"; }
    else { verdict = "The sub is neutral: it neither strongly helps nor blocks the matter."; cls = "neu"; }
    const text = `Predominantly matters of houses ${list(H[S])}: ${mean(H[S])}; brought about through houses ${list(H[X])}: ${mean(H[X])}, and through ${PLANET_MEAN[X]}.`;
    const facts = `Star lord: ${S} (owns ${list(owns(S))}) · Sub lord: ${B} (owns ${list(owns(B))}) · Period lord ${X} owns ${list(owns(X))}`;
    rd = { head: `Running · ${md} › ${X}`, text, verdict, cls, facts };
  }
  const copy = () => {
    if (!rd) return;
    try { navigator.clipboard.writeText(`${rd.head}\n${rd.text}\n${rd.verdict}\n${rd.facts}`).catch(() => {}); } catch { /* clipboard unavailable */ }
    setCopied(true); setTimeout(() => setCopied(false), 1500);
  };
  const infoText = (n) => {
    const p = P(n.lord); if (!p) return "";
    const o = owns(n.lord);
    return `${n.lord}: ${p.signName}, house ${p.house}, owns ${o.join(", ") || "none"}. Star lord ${p.star}, sub lord ${p.sub}. Signifies houses ${H[n.lord].join(", ")}.`;
  };
  const rows = (list, depth) => list.map((n) => {
    const k = fdKey(n), isOpen = open.has(k), canOpen = depth < 4, run = chain.includes(n);
    return (
      <React.Fragment key={k}>
        <div className={"fd-row" + (run ? " now" : "")} style={{ paddingLeft: 14 + depth * 22 }} onClick={() => { if (canOpen) toggle(open, setOpen, k); }}>
          {canOpen
            ? <button type="button" className={"fd-chev" + (isOpen ? " open" : "")} aria-label={`${isOpen ? "Collapse" : "Expand"} ${n.lord}`} onClick={(e) => { e.stopPropagation(); toggle(open, setOpen, k); }}>&rsaquo;</button>
            : <span className="fd-chev ph" />}
          <span className="fd-name">{n.lord}</span>
          <span className="fd-dates">{dmyD(n.start)} &rarr; {dmyD(n.end)}</span><span className="fd-dur">{fmt.span(n.end - n.start)}</span>
          <button type="button" className="fd-i" aria-label={`Details of ${n.lord}`} title="Details" onClick={(e) => { e.stopPropagation(); toggle(info, setInfo, k); }}>i</button>
        </div>
        {info.has(k) ? <div className="fd-info" style={{ paddingLeft: 50 + depth * 22 }}>{infoText(n)}</div> : null}
        {isOpen && canOpen ? rows(dashaChildren(n), depth + 1) : null}
      </React.Fragment>
    );
  });
  return (
    <div className="fd-card">
      <div className="fd-top"><span>Vimshottari dasha</span><span className="fd-bal">{moon.nak} &middot; {moon.star} balance {fmt.span(first.end - first.start)}</span></div>
      <div className="fd-crumbs">{chain.map((n, i) => <React.Fragment key={i}>{i ? <i>&rsaquo;</i> : null}<span>{n.lord}</span></React.Fragment>)}</div>
      <div className="fd-cols">{chain.map((n, i) => <div key={i}><small>{DASHA_LEVELS[i]}</small><b>{n.lord}</b> &middot; {left(n)}</div>)}</div>
      {rd ? (
        <div className="fd-read">
          <div className="fd-rh"><span>{rd.head}</span><button type="button" className="fd-copy" onClick={copy}>{copied ? "Copied" : "Copy"}</button></div>
          <p>{rd.text}</p><p className={"fd-v " + rd.cls}>{rd.verdict}</p><p className="fd-f">{rd.facts}</p>
        </div>
      ) : null}
      <div className="fd-tree">{rows(mds, 0)}</div>
    </div>
  );
}

/* ---------- the page body ---------- */
export default function KpDashboard({ R, now }) {
  const { chart, sig, nadi, meta } = R;
  const { planets, cuspRows } = chart;
  const asc = cuspRows[0], moon = planets[1], rahu = planets.find((p) => p.name === "Rahu");
  const fmt = useMemo(() => makeFmt(meta.tz), [meta.tz]);
  // Fresh nodes for this chart: the children of each period are worked out on demand and kept on the node.
  const mds = useMemo(() => R.dasha.map((n) => ({ ...n })), [R]);
  const chain = useMemo(() => runningChain(mds, now), [mds, now]);
  const [path, setPath] = useState(() => chain.slice(0, Math.max(0, Math.min(MAXD, chain.length - 1))));
  const [modal, setModal] = useState(null); // { kind: "cusp", h } | { kind: "nadi", name } | { kind: "full" }
  const [utOn, setUtOn] = useState(true);
  const close = () => setModal(null);

  const starOf = (n) => { const q = planets.find((x) => x.name === n); return q ? ABBR[q.star] : ""; };
  const sigByHouse = {};
  sig.houses.forEach((h) => { sigByHouse[h.house] = h; });
  const keyOpen = (fn) => (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(); } };
  const tile = (k, v, s) => <div className="tile"><div className="k">{k}</div><div className="v">{v}</div><div className="s">{s}</div></div>;

  return (
    <div className="kpx">
      <nav className="subnav" aria-label="Sections">
        <div className="subnav-in gut">
          <a href="#s-chart">Chart</a><a href="#s-planets">Planetary position</a><a href="#s-cusps">Cuspal position</a><a href="#s-dasha">Dasha</a><a href="#s-ns">Nakshatra Nadi</a><a href="#s-rp">Ruling planets</a>
        </div>
      </nav>
      <main className="wrap gut">
        <div id="out">
          <div className="strip" style={{ marginTop: 36 }}>
            <div className="tile"><div className="k">Lagna (cusp 1)</div><div className="v">{asc.signName} {dmsF(asc.deg)}</div><div className="s">Star {asc.star} &middot; Sub {asc.sub} &middot; SS {asc.ss}</div></div>
            {tile("Moon", `${moon.signName} ${dmsF(moon.deg)}`, <>{moon.nak} p{moon.pada} &middot; Sub {moon.sub} &middot; SS {moon.ss}</>)}
            {tile("Ayanamsa", dmsF(chart.ay), "Krishnamurti, " + (chart.ayMode === "true" ? "true (with nutation)" : "mean"))}
            {tile(chart.mode === "true" ? "True node" : "Mean node", `${rahu.signName} ${dmsF(rahu.deg)}`, <>Rahu &middot; Star {rahu.star} &middot; Sub {rahu.sub}</>)}
          </div>
          <div className="dash" id="dash">
            <div className="dcol dc1">
              <section id="s-planets" className="kpt">
                <div className="sec-h"><h2>Planetary position</h2><span>Sidereal, Krishnamurti ayanamsa, {chart.ayMode}</span></div>
                <div className="tblwrap"><table>
                  <thead><tr><th>Planet</th><th>Sign</th><th>D-M-S</th><th>RL</th><th>STL</th><th>SL</th><th>SSL</th><th>Hse</th><th>House significators</th></tr></thead>
                  <tbody>
                    {planets.map((p) => (
                      <tr key={p.name} className={isNode(p.name) ? "node" : ""}>
                        <td className="pname">{p.name}</td><td>{S3(p.signName)}</td>
                        <td className="num">{dms2(p.deg)}{p.retro && !isNode(p.name) ? <> <span className="rx">R</span></> : null}</td>
                        <td>{ABBR[p.signLord]}</td><td>{ABBR[p.star]}</td><td className="sub">{ABBR[p.sub]}</td><td>{ABBR[p.ss]}</td>
                        <td className="num">{p.house}</td><td className="hs"><b>{sig.planets[p.name].houses.map(ord).join(", ")}</b></td>
                      </tr>
                    ))}
                  </tbody>
                </table></div>
                <p className="legend">House is the Placidus house the planet occupies.</p>
              </section>
              <section id="s-cusps" className="kpt">
                <div className="sec-h"><h2>Cuspal position</h2><span>Placidus</span></div>
                <div className="tblwrap"><table>
                  <thead><tr><th>Cusp</th><th>Sign</th><th>D-M-S</th><th>RL</th><th>STL</th><th>SL</th><th>SSL</th><th>SL in star</th><th>Planet significators</th></tr></thead>
                  <tbody>
                    {cuspRows.map((r) => {
                      const open = () => setModal({ kind: "cusp", h: r.house });
                      return (
                        <tr key={r.house} className="cuspr" tabIndex={0} title={`Click for details of the ${ord(r.house)} cusp`} onClick={open} onKeyDown={keyOpen(open)}>
                          <td className="pname">{ord(r.house)}</td><td>{S3(r.signName)}</td><td className="num">{dms2(r.deg)}</td>
                          <td>{ABBR[r.signLord]}</td><td>{ABBR[r.star]}</td><td className="sub">{ABBR[r.sub]}</td><td>{ABBR[r.ss]}</td><td>{starOf(r.sub)}</td>
                          <td className="hs"><b>{sigByHouse[r.house].all.map((n) => ABBR[n]).join(", ") || "none"}</b></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table></div>
              </section>
              <section id="s-rp">
                <div className="sec-h"><h2>Ruling planets</h2><span>Right now, updating live</span></div>
                <div id="rp"><RulingPlanets R={R} /></div>
              </section>
            </div>
            <div className="dcol dc2">
              <section id="s-chart">
                <div className="nis">
                  <figure className="panel nifig"><figcaption><span>Lagna chart</span></figcaption><NorthChart chart={chart} mode="rashi" title="Lagna chart" /></figure>
                  <figure className="panel nifig"><figcaption><span>Cuspal Bhav Chart</span></figcaption><NorthChart chart={chart} mode="bhav" title="Cuspal Bhav Chart" /></figure>
                </div>
              </section>
            </div>
            <div className="dcol dc3">
              <section id="s-grah" className="kpt">
                <div className="sec-h"><h2>Grah nakshatra</h2><span>Star and pada</span></div>
                <div className="tblwrap"><table>
                  <thead><tr><th>Planet</th><th>Nakshatra</th><th>Pada</th><th>Star lord</th></tr></thead>
                  <tbody>
                    {planets.map((p) => <tr key={p.name} className={isNode(p.name) ? "node" : ""}><td className="pname">{p.name}</td><td>{p.nak}</td><td className="num">{p.pada}</td><td>{p.star}</td></tr>)}
                    <tr><td className="pname">Ascendant</td><td>{asc.nak}</td><td className="num">{asc.pada}</td><td>{asc.star}</td></tr>
                  </tbody>
                </table></div>
              </section>
              <section id="s-dasha">
                <div className="sec-h"><h2>Vimshottari dasha</h2><span>Five levels, 365.25 day year</span></div>
                <div id="dx"><DashaExplorer mds={mds} chain={chain} path={path} setPath={setPath} fmt={fmt} openFull={() => setModal({ kind: "full" })} /></div>
              </section>
            </div>
            <section id="s-ns" className="kpt">
              <div className="sec-h"><h2>Planet signification (Nakshatra Nadi)</h2><span>Houses signified by each planet, its star lord and its sub lord</span></div>
              <div className="tblwrap"><table>
                <thead><tr><th>Planet</th><th>Star lord</th><th>Sub lord</th></tr></thead>
                <tbody>
                  {nadi.map((g) => {
                    const open = () => setModal({ kind: "nadi", name: g.name });
                    return (
                      <tr key={g.name} className={"nsr " + (isNode(g.name) ? "node" : "")} tabIndex={0} title={`Click for details of ${g.name}`} onClick={open} onKeyDown={keyOpen(open)}>
                        {g.rows.map((r) => <td className="nsc" key={r.role}><b>{r.lord.toUpperCase()}</b>-{r.houses.join(",")}</td>)}
                      </tr>
                    );
                  })}
                </tbody>
              </table></div>
            </section>
          </div>
          <div className="panel book"><div><b>Want this chart read?</b><span>Book a reading with an astrologer.</span></div><a className="go" href="/consult">Book a reading</a></div>
        </div>
        <details className="ref" id="ref">
          <summary>Sub lord reference table <span>249 rows, listed by sign</span></summary>
          <div className="tblwrap">
            <table id="reft">
              <thead><tr><th>From</th><th>To</th><th>Nakshatra</th><th>Star</th><th>Sub</th></tr></thead>
              <tbody>
                {SUB_ROWS.map((r, i) => {
                  const a = r.start - r.sign * 30, b = r.end - r.sign * 30;
                  return (
                    <React.Fragment key={i}>
                      {i === 0 || SUB_ROWS[i - 1].sign !== r.sign ? <tr className="grp"><td colSpan={5}>{SIGNS[r.sign]}</td></tr> : null}
                      <tr><td className="num">{dmsF(a)}</td><td className="num">{b >= 30 - 1e-9 ? "30°00'00\"" : dmsF(b)}</td><td>{NAK[r.nak]}</td><td className="lord">{r.star}</td><td className="sub">{r.sub}</td></tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </details>
      </main>
      {modal?.kind === "cusp" ? <Modal title={"Cusp details: " + ord(modal.h) + " cusp"} onClose={close}><CuspDetail h={modal.h} R={R} utOn={utOn} setUtOn={setUtOn} /></Modal> : null}
      {modal?.kind === "nadi" ? <Modal title={"Nakshatra Nadi: " + modal.name} onClose={close}><NadiDetail name={modal.name} R={R} /></Modal> : null}
      {modal?.kind === "full" ? <Modal title="Vimshottari dasha" wide onClose={close}><FullDasha R={R} mds={mds} chain={chain} fmt={fmt} now={now} /></Modal> : null}
    </div>
  );
}
