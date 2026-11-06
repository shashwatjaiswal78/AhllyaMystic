// KP (Krishnamurti Paddhati) core: the sub-lord table, Vimshottari dasha, significators, Nakshatra Nadi and
// ruling planets. Pure arithmetic with no astronomy, so the browser can reuse the dasha part for drill-down.
// Ported from the "KP Kundli Calculator" Artifact; formulas and conventions are unchanged.

export const SIGNS = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"] as const;
export const SIGN_LORD = ["Mars", "Venus", "Mercury", "Moon", "Sun", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Saturn", "Jupiter"] as const;
export const NAK = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"] as const;
export const NAK_LORD = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"] as const;
export const DY: Record<string, number> = { Ketu: 7, Venus: 20, Sun: 6, Moon: 10, Mars: 7, Rahu: 18, Jupiter: 16, Saturn: 19, Mercury: 17 };
export const ABBR: Record<string, string> = { Sun: "Su", Moon: "Mo", Mars: "Ma", Mercury: "Me", Jupiter: "Ju", Venus: "Ve", Saturn: "Sa", Rahu: "Ra", Ketu: "Ke" };
export const SPAN = 40 / 3; // one nakshatra, 13 deg 20 min
export const PORDER = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"] as const;
export const BODIES = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"] as const;

export const norm = (d: number) => ((d % 360) + 360) % 360;

/* ---------- sub lords ----------
   27 nakshatras x 9 subs = 243 subs. The familiar KP table has 249 rows because six subs straddle a
   sign boundary and are listed once per sign (see SUB_ROWS). */
export interface Sub { start: number; end: number; nak: number; star: string; sub: string }
export const SUBS: Sub[] = (() => {
  const out: Sub[] = [];
  for (let n = 0; n < 27; n++) {
    const i0 = n % 9;
    let c = n * SPAN;
    for (let k = 0; k < 9; k++) {
      const lord = NAK_LORD[(i0 + k) % 9];
      const w = (SPAN * DY[lord]) / 120;
      out.push({ start: c, end: k === 8 ? (n + 1) * SPAN : c + w, nak: n, star: NAK_LORD[i0], sub: lord });
      c += w;
    }
  }
  return out;
})();

export interface SubRow extends Sub { sign: number }
export const SUB_ROWS: SubRow[] = (() => {
  const rows: SubRow[] = [];
  for (const s of SUBS) {
    const pts = [s.start];
    for (let g = 30; g < 360; g += 30) if (g > s.start + 1e-9 && g < s.end - 1e-9) pts.push(g);
    pts.push(s.end);
    for (let i = 0; i < pts.length - 1; i++) rows.push({ start: pts[i], end: pts[i + 1], nak: s.nak, star: s.star, sub: s.sub, sign: Math.floor((pts[i] + 1e-9) / 30) });
  }
  return rows;
})();

/* Sub-sub divisions of one sub: nine parts, starting from the sub lord. */
export function subSubs(s: { start: number; end: number; sub: string }) {
  const i0 = (NAK_LORD as readonly string[]).indexOf(s.sub);
  const w = s.end - s.start;
  const out: { start: number; end: number; lord: string }[] = [];
  let c = s.start;
  for (let k = 0; k < 9; k++) {
    const lord = NAK_LORD[(i0 + k) % 9];
    const ww = (w * DY[lord]) / 120;
    out.push({ start: c, end: k === 8 ? s.end : c + ww, lord });
    c += ww;
  }
  return out;
}

export interface Located {
  lon: number; sign: number; signName: string; signLord: string; deg: number;
  nak: string; nakIdx: number; pada: number; star: string; sub: string; ss: string; subIdx: number;
}

/* Everything KP needs to know about one longitude (sidereal, degrees). */
export function locate(lonIn: number): Located {
  const lon = norm(lonIn);
  const sign = Math.floor(lon / 30);
  let idx = SUBS.findIndex((s) => lon >= s.start && lon < s.end);
  if (idx < 0) idx = SUBS.length - 1;
  const s = SUBS[idx];
  const parts = subSubs(s);
  const hit = parts.find((x) => lon >= x.start && lon < x.end);
  const ss = hit ? hit.lord : parts[8].lord;
  const pada = Math.min(4, Math.floor((lon - s.nak * SPAN) / (SPAN / 4)) + 1);
  return { lon, sign, signName: SIGNS[sign], signLord: SIGN_LORD[sign], deg: lon - sign * 30, nak: NAK[s.nak], nakIdx: s.nak, pada, star: s.star, sub: s.sub, ss, subIdx: idx };
}

/* How close a longitude sits to a lord change, in arcseconds. */
export function edge(lonIn: number) {
  const lon = norm(lonIn);
  const s = SUBS[SUBS.findIndex((x) => lon >= x.start && lon < x.end)] || SUBS[SUBS.length - 1];
  const subD = Math.min(lon - s.start, s.end - lon) * 3600;
  let ssD = subD;
  for (const x of subSubs(s)) ssD = Math.min(ssD, Math.abs(lon - x.start) * 3600, Math.abs(x.end - lon) * 3600);
  return { sub: subD, ss: ssD };
}
export const EDGE_TOL = 25; // arcseconds; the astronomy engine is good to about 20" on the slow planets
export function edgeFlag(lon: number): "" | "sub" | "ss" {
  const e = edge(lon);
  return e.sub < EDGE_TOL ? "sub" : e.ss < EDGE_TOL ? "ss" : "";
}

/* Whole arcseconds, with carry: 29 59 59.6 becomes 30 00 00. */
export function dms(deg: number): string {
  const t = Math.round(deg * 3600), d = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), s = t % 60;
  return d + "°" + String(m).padStart(2, "0") + "'" + String(s).padStart(2, "0") + '"';
}
/* Degrees, minutes, seconds, truncated so a position never reads as 30 00 00 inside its own sign. */
export function dmsF(deg: number): string {
  const t = Math.floor(deg * 3600 + 1e-6), d = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), s = t % 60;
  return d + "°" + String(m).padStart(2, "0") + "'" + String(s).padStart(2, "0") + '"';
}
/* Same, with a two-digit degree, as the planet and cusp tables show it. */
export function dms2(deg: number): string {
  const t = Math.floor(deg * 3600 + 1e-6);
  return String(Math.floor(t / 3600)).padStart(2, "0") + "°" + String(Math.floor((t % 3600) / 60)).padStart(2, "0") + "'" + String(t % 60).padStart(2, "0") + '"';
}
export const ord = (n: number) => n + (n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th");

/* ---------- chart shape shared by the engine and the page ---------- */
export interface KpPlanet extends Located { name: string; retro: boolean; house: number; edge: "" | "sub" | "ss" }
export interface CuspRow extends Located { house: number }
export interface ChartData {
  ay: number; ayMode: "mean" | "true"; mode: "mean" | "true";
  horary: { n: number } | null;
  cuspRows: CuspRow[]; planets: KpPlanet[];
}

/* ---------- Vimshottari dasha, five levels ----------
   Every period, at every depth, splits its FULL theoretical span among the nine lords in sequence, each taking
   (lord's years / 120) of it. The mahadasha running at birth is only a remainder, so its sub-periods are laid out on
   the full grid and then clipped to birth. A year is 365.25 days, which reproduces the reference software's dates. */
export const DASHA_YEAR_DAYS = 365.25;
export const YEAR = DASHA_YEAR_DAYS * 864e5;
export const DASHA_LEVELS = ["Mahadasha", "Antardasha", "Pratyantardasha", "Sukshma dasha", "Prana dasha"] as const;

export interface DashaNode {
  lord: string; lords: string[]; level: number;
  start: number; end: number; fullStart: number; fullEnd: number; partial?: boolean;
  parent?: DashaNode; kids?: DashaNode[];
}

export function vimshottari(birthMs: number, moonLon: number): DashaNode[] {
  const m = norm(moonLon), n = Math.floor(m / SPAN), i0 = n % 9, first = NAK_LORD[i0], frac = (m - n * SPAN) / SPAN;
  let t = birthMs + (1 - frac) * DY[first] * YEAR;
  const out: DashaNode[] = [{ lord: first, lords: [first], level: 0, start: birthMs, end: t, fullStart: t - DY[first] * YEAR, fullEnd: t, partial: true }];
  for (let i = 1; i <= 8; i++) {
    const lord = NAK_LORD[(i0 + i) % 9], e = t + DY[lord] * YEAR;
    out.push({ lord, lords: [lord], level: 0, start: t, end: e, fullStart: t, fullEnd: e });
    t = e;
  }
  return out;
}

export function dashaChildren(node: DashaNode): DashaNode[] {
  if (node.kids) return node.kids;
  const i0 = (NAK_LORD as readonly string[]).indexOf(node.lord);
  const span = node.fullEnd - node.fullStart;
  const out: DashaNode[] = [];
  let c = node.fullStart;
  for (let i = 0; i < 9; i++) {
    const lord = NAK_LORD[(i0 + i) % 9], s0 = c, e0 = i === 8 ? node.fullEnd : c + (span * DY[lord]) / 120;
    c = e0;
    if (e0 <= node.start || s0 >= node.end) continue; // wholly before birth
    out.push({ lord, lords: node.lords.concat(lord), level: node.level + 1, parent: node, start: Math.max(s0, node.start), end: Math.min(e0, node.end), fullStart: s0, fullEnd: e0, partial: s0 < node.start });
  }
  return (node.kids = out);
}

/* Chain of running periods at time t, mahadasha down to prana. */
export function runningChain(mds: DashaNode[], t: number): DashaNode[] {
  const chain: DashaNode[] = [];
  let list: DashaNode[] | null = mds;
  for (let lvl = 0; lvl < 5 && list; lvl++) {
    const hit: DashaNode | undefined = list.find((n) => t >= n.start && t < n.end);
    if (!hit) break;
    chain.push(hit);
    list = lvl < 4 ? dashaChildren(hit) : null;
  }
  return chain;
}

/* ---------- KP significators ----------
   A house is "owned" by the lord of its cusp sign. A planet signifies a house when it occupies it, owns it, or its
   star lord occupies or owns it. By strength the four steps are: A planets in the star of an occupant, B occupants,
   C planets in the star of the house lord, D the house lord. Rahu and Ketu own nothing, but they also act for the
   lord of their sign (E). */
export interface PlanetSig { occ: number[]; own: number[]; star: string; starOcc: number[]; starOwn: number[]; via: number[]; signLord: string | null; houses: number[] }
export interface HouseSig { house: number; lord: string; A: string[]; B: string[]; C: string[]; D: string[]; E: string[]; all: string[] }
export interface Significators { planets: Record<string, PlanetSig>; houses: HouseSig[] }

export function significators(chart: ChartData): Significators {
  const lordOf = chart.cuspRows.map((r) => r.signLord);
  const P: Record<string, KpPlanet> = {};
  chart.planets.forEach((p) => { P[p.name] = p; });
  const owns = (name: string) => lordOf.map((l, i) => (l === name ? i + 1 : 0)).filter(Boolean);
  const planets: Record<string, PlanetSig> = {};
  for (const name of PORDER) {
    const p = P[name], star = p.star, sp = P[star];
    const occ = [p.house], own = owns(name), starOcc = [sp.house], starOwn = owns(star);
    // Rahu and Ketu also act for the lord of the sign they sit in: that lord's own house and the houses it owns.
    const node = name === "Rahu" || name === "Ketu", sl = p.signLord;
    const via = node ? [...new Set([P[sl].house, ...owns(sl)])].sort((a, b) => a - b) : [];
    const houses = [...new Set([...occ, ...own, ...starOcc, ...starOwn, ...via])].sort((a, b) => a - b);
    planets[name] = { occ, own, star, starOcc, starOwn, via, signLord: node ? sl : null, houses };
  }
  const houses: HouseSig[] = [];
  for (let h = 1; h <= 12; h++) {
    const lord = lordOf[h - 1], B = PORDER.filter((n) => P[n].house === h);
    const A = PORDER.filter((n) => B.includes(P[n].star as (typeof PORDER)[number]));
    const C = PORDER.filter((n) => P[n].star === lord);
    const E = (["Rahu", "Ketu"] as const).filter((n) => planets[n].via.includes(h));
    const all = PORDER.filter((n) => planets[n].houses.includes(h));
    houses.push({ house: h, lord, A: [...A], B: [...B], C: [...C], D: [lord], E: [...E], all: [...all] });
  }
  return { planets, houses };
}

/* ---------- Nakshatra Nadi: occupancy and ownership ----------
   For each planet three lines: the planet, its star lord and its sub lord, each with the houses it occupies and
   owns. Rahu and Ketu also take the lord of their sign, any planet in the same sign and any planet aspecting them
   (7th for all, Mars 4th and 8th, Jupiter 5th and 9th, Saturn 3rd and 10th). Rahu and Ketu are not counted as
   aspecting each other, and other planets get no aspects. */
export const NADI_ORDER = ["Ketu", "Moon", "Jupiter", "Venus", "Mars", "Saturn", "Sun", "Rahu", "Mercury"] as const;
export interface NadiRow { role: string; lord: string; houses: number[] }
export interface NadiPlanet { name: string; sign: string; house: number; deg: number; retro: boolean; rows: NadiRow[] }

export function nakshatraNadi(chart: ChartData): NadiPlanet[] {
  const P: Record<string, KpPlanet> = {};
  chart.planets.forEach((p) => { P[p.name] = p; });
  const lordOf = chart.cuspRows.map((r) => r.signLord);
  const owns = (n: string) => lordOf.map((l, i) => (l === n ? i + 1 : 0)).filter(Boolean);
  const sgn = (p: KpPlanet) => Math.floor(p.lon / 30);
  const base = (n: string) => [...new Set([P[n].house, ...owns(n)])];
  const EXTRA: Record<string, number[]> = { Mars: [3, 7], Jupiter: [4, 8], Saturn: [2, 9] };
  const isNode = (n: string) => n === "Rahu" || n === "Ketu";
  function houses(n: string): number[] {
    let h = base(n);
    if (isNode(n)) {
      h = h.concat(base(P[n].signLord));
      for (const q of chart.planets) {
        if (q.name === n || isNode(q.name)) continue;
        const d = (sgn(P[n]) - sgn(q) + 12) % 12;
        if (d === 0 || d === 6 || (EXTRA[q.name] || []).includes(d)) h = h.concat(base(q.name));
      }
    }
    return [...new Set(h)].sort((a, b) => a - b);
  }
  return NADI_ORDER.map((n) => {
    const p = P[n];
    return {
      name: n, sign: p.signName, house: p.house, deg: p.deg, retro: p.retro && !isNode(n),
      rows: [{ role: "Planet", lord: n, houses: houses(n) }, { role: "Star lord", lord: p.star, houses: houses(p.star) }, { role: "Sub lord", lord: p.sub, houses: houses(p.sub) }],
    };
  });
}

/* ---------- ruling planets ----------
   chart is the chart for the moment in question. Ruling planets are the day lord plus the sign and star lords of the
   lagna and of the Moon. */
export interface Ruling {
  day: string;
  lagna: { sign: string; star: string; sub: string };
  moon: { sign: string; star: string; sub: string };
  rahu: { sign: string; star: string };
  ketu: { sign: string; star: string };
  ruling: string[];
}
export function rulingPlanets(chart: ChartData, day: string): Ruling {
  const asc = chart.cuspRows[0];
  const moon = chart.planets.find((p) => p.name === "Moon")!;
  const ra = chart.planets.find((p) => p.name === "Rahu")!, ke = chart.planets.find((p) => p.name === "Ketu")!;
  const list = [day, asc.signLord, asc.star, moon.signLord, moon.star];
  return {
    day, lagna: { sign: asc.signLord, star: asc.star, sub: asc.sub }, moon: { sign: moon.signLord, star: moon.star, sub: moon.sub },
    rahu: { sign: ra.signLord, star: ra.star }, ketu: { sign: ke.signLord, star: ke.star },
    ruling: PORDER.filter((n) => list.includes(n)),
  };
}
