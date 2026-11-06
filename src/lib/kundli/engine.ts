// Janam Kundali engine: sidereal (Lahiri), whole-sign houses, Vimshottari dasha.
// Ported from the "Janam Kundali Calculator" Artifact. The formulas, constants and
// conventions are kept as they are there so both produce the same chart.
import * as Astronomy from "astronomy-engine";

export const SIGNS = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"] as const;
export const RASHI = ["Mesha", "Vrishabha", "Mithuna", "Karka", "Simha", "Kanya", "Tula", "Vrischika", "Dhanu", "Makara", "Kumbha", "Meena"] as const;
export const NAK = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"] as const;
export const NAK_LORD = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"] as const;
export const DY: Record<string, number> = { Ketu: 7, Venus: 20, Sun: 6, Moon: 10, Mars: 7, Rahu: 18, Jupiter: 16, Saturn: 19, Mercury: 17 };
export const ABBR: Record<string, string> = { Sun: "Su", Moon: "Mo", Mars: "Ma", Mercury: "Me", Jupiter: "Ju", Venus: "Ve", Saturn: "Sa", Rahu: "Ra", Ketu: "Ke" };

/* ---- Planet states -------------------------------------------------------
   Exaltation sign per graha (0 = Aries). Debilitation is the opposite sign.
   Rahu/Ketu follow the common Parashari reading, Taurus / Scorpio.            */
const EXALT: Record<string, number> = { Sun: 0, Moon: 1, Mars: 9, Mercury: 5, Jupiter: 3, Venus: 11, Saturn: 6, Rahu: 1, Ketu: 7 };
/* Classical combustion orbs in degrees from the Sun. Mercury and Venus take a tighter orb when retrograde. */
const COMBUST_ORB: Record<string, number> = { Moon: 12, Mars: 17, Mercury: 14, Jupiter: 11, Venus: 10, Saturn: 15 };
const COMBUST_ORB_RETRO: Record<string, number> = { Mercury: 12, Venus: 8 };
export const STATE_ORDER = ["retro", "combust", "varg", "exalt", "debil"] as const;
export type PlanetState = (typeof STATE_ORDER)[number];
export const STATE_SYM: Record<PlanetState, string> = { retro: "*", combust: "^", varg: "□", exalt: "↑", debil: "↓" };
export const STATE_NAME: Record<PlanetState, string> = { retro: "Retrograde", combust: "Combust", varg: "Vargottama", exalt: "Exalted", debil: "Debilitated" };

/* Vimshottari year. 365.25 days is the convention in most Indian software. */
const DASHA_YEAR_DAYS = 365.25;
const YEAR = DASHA_YEAR_DAYS * 864e5;

const D2R = Math.PI / 180;
const R2D = 180 / Math.PI;
const norm = (d: number) => ((d % 360) + 360) % 360;

/* ============================================================
   Astronomy (sidereal, Lahiri)
   ============================================================ */
const jc = (d: Date) => Astronomy.MakeTime(d).tt / 36525;
const nutation = (d: Date) => Astronomy.e_tilt(Astronomy.MakeTime(d)); // dpsi arcsec, tobl deg

/* True Lahiri ayanamsa: mean value (23°51'25.66" at J2000, carried by IAU 2006 precession in longitude)
   plus nutation in longitude, so it matches the apparent, true-equinox planet longitudes. */
export function ayanamsa(d: Date): number {
  const T = jc(d);
  const pA = 5028.796195 * T + 1.1054348 * T * T + 0.00007964 * T ** 3 - 0.000023857 * T ** 4 - 0.0000000383 * T ** 5;
  return 23.857128 + (pA + nutation(d).dpsi) / 3600;
}
const obliquity = (d: Date) => nutation(d).tobl;

function tropLon(body: Astronomy.Body, d: Date): number {
  if (body === Astronomy.Body.Moon) return Astronomy.EclipticGeoMoon(d).lon;
  const v = Astronomy.GeoVector(body, d, true);
  const e = Astronomy.RotateVector(Astronomy.Rotation_EQJ_ECT(d), v);
  return norm(Math.atan2(e.y, e.x) * R2D);
}
function meanNode(d: Date): number {
  const T = jc(d);
  return norm(125.0445479 - 1934.1362891 * T + 0.0020754 * T * T + T ** 3 / 467441 - T ** 4 / 60616000);
}

const BODIES: [string, Astronomy.Body][] = [
  ["Sun", Astronomy.Body.Sun], ["Moon", Astronomy.Body.Moon], ["Mars", Astronomy.Body.Mars], ["Mercury", Astronomy.Body.Mercury],
  ["Jupiter", Astronomy.Body.Jupiter], ["Venus", Astronomy.Body.Venus], ["Saturn", Astronomy.Body.Saturn],
];
/* Shown for reference in the artifact only. Kept out of dasha, dosha and state logic on purpose. */
const OUTER: [string, Astronomy.Body][] = [["Uranus", Astronomy.Body.Uranus], ["Neptune", Astronomy.Body.Neptune], ["Pluto", Astronomy.Body.Pluto]];

export function dms(deg: number): string {
  const d = Math.floor(deg);
  const mf = (deg - d) * 60;
  const m = Math.floor(mf);
  const s = Math.round((mf - m) * 60);
  return d + "°" + String(m).padStart(2, "0") + "'" + String(s % 60).padStart(2, "0") + '"';
}

export interface Placement {
  lon: number; sign: number; signName: string; rashi: string; deg: number; dms: string;
  nak: string; nakIdx: number; pada: number; nakLord: string; frac: number; navamsa: number;
}
export interface Planet extends Placement { name: string; retro: boolean; house: number; states: PlanetState[]; outer?: boolean }

export function place(lon: number): Placement {
  const sign = Math.floor(lon / 30);
  const ni = Math.floor(lon / (40 / 3));
  const np = lon - ni * (40 / 3);
  return {
    lon, sign, signName: SIGNS[sign], rashi: RASHI[sign], deg: lon - sign * 30, dms: dms(lon - sign * 30),
    nak: NAK[ni], nakIdx: ni, pada: Math.floor(np / (10 / 3)) + 1, nakLord: NAK_LORD[ni % 9], frac: np / (40 / 3),
    navamsa: Math.floor(lon / (10 / 3)) % 12,
  };
}

function planetStates(p: { name: string; lon: number; sign: number; navamsa: number; retro: boolean }, sun: { lon: number }): PlanetState[] {
  const st: PlanetState[] = [];
  if (p.retro) st.push("retro");
  if (COMBUST_ORB[p.name] != null) {
    const orb = (p.retro && COMBUST_ORB_RETRO[p.name]) || COMBUST_ORB[p.name];
    let d = Math.abs(p.lon - sun.lon);
    if (d > 180) d = 360 - d;
    if (d < orb) st.push("combust");
  }
  if (p.sign === p.navamsa) st.push("varg"); // same rashi in D1 and D9
  if (EXALT[p.name] != null) {
    if (p.sign === EXALT[p.name]) st.push("exalt");
    else if (p.sign === (EXALT[p.name] + 6) % 12) st.push("debil");
  }
  return st;
}

export interface Doshas {
  manglik: { flag: boolean; fl: number; fm: number };
  sadesati: { flag: boolean; house: number; natal: number };
  kaalsarp: { flag: boolean };
}

export interface Chart {
  ay: number;
  asc: Placement & { states: PlanetState[] };
  mc: Placement;
  lag: number;
  planets: Planet[];
  outer: Planet[];
  moon: Planet;
  sun: Planet;
  dasha: DashaNode[];
  doshas: Doshas;
}

export function computeChart(utc: Date, lat: number, lon: number, now: Date = new Date()): Chart {
  const ay = ayanamsa(utc);
  const eps = obliquity(utc) * D2R;
  const ramc = norm((Astronomy.SiderealTime(utc) + lon / 15) * 15);
  const r = ramc * D2R;
  const phi = lat * D2R;
  const ascT = norm(Math.atan2(Math.cos(r), -(Math.sin(r) * Math.cos(eps) + Math.tan(phi) * Math.sin(eps))) * R2D);
  const mcT = norm(Math.atan2(Math.sin(r), Math.cos(r) * Math.cos(eps)) * R2D);
  const ascP = place(norm(ascT - ay));
  const mc = place(norm(mcT - ay));
  const lag = ascP.sign;
  const later = new Date(utc.getTime() + 36e5);
  const planets: Planet[] = [];

  for (const [name, body] of BODIES) {
    const t = tropLon(body, utc);
    const p = place(norm(t - ay));
    const retro = name !== "Sun" && name !== "Moon" && norm(tropLon(body, later) - t) > 180;
    planets.push({ name, ...p, retro, house: ((p.sign - lag + 12) % 12) + 1, states: [] });
  }
  const ra = norm(meanNode(utc) + nutation(utc).dpsi / 3600); // mean node, moved to the true equinox
  for (const [name, t] of [["Rahu", ra], ["Ketu", norm(ra + 180)]] as [string, number][]) {
    const p = place(norm(t - ay));
    planets.push({ name, ...p, retro: true, house: ((p.sign - lag + 12) % 12) + 1, states: [] });
  }

  const moon = planets[1];
  const sun = planets[0];
  planets.forEach((p) => { p.states = planetStates(p, sun); });
  const asc = { ...ascP, states: (ascP.sign === ascP.navamsa ? ["varg"] : []) as PlanetState[] };

  // Outer planets move slowly, so test direction across a full day.
  const dayBefore = new Date(utc.getTime() - 432e5);
  const dayAfter = new Date(utc.getTime() + 432e5);
  const outer: Planet[] = OUTER.map(([name, body]) => {
    const p = place(norm(tropLon(body, utc) - ay));
    const retro = norm(tropLon(body, dayAfter) - tropLon(body, dayBefore)) > 180;
    return { name, ...p, retro, house: ((p.sign - lag + 12) % 12) + 1, states: retro ? ["retro"] : [], outer: true };
  });

  return { ay, asc, mc, lag, planets, outer, moon, sun, dasha: vimshottari(utc, moon), doshas: doshas(planets, lag, moon, now) };
}

/* ---- Vimshottari, every level --------------------------------------------
   Every period, at every depth, splits its FULL theoretical span among the nine lords in sequence,
   each taking (lord's years / 120) of it. The mahadasha running at birth is only a remainder, so its
   sub-periods are laid out on the full grid and then clipped to birth. fullStart/fullEnd carry that grid down. */
export interface DashaNode {
  lord: string; lords: string[]; level: number;
  start: number; end: number; fullStart: number; fullEnd: number; partial?: boolean;
}

export function vimshottari(birth: Date, moon: { nakLord: string; frac: number }): DashaNode[] {
  const i0 = (NAK_LORD as readonly string[]).indexOf(moon.nakLord);
  const bal = (1 - moon.frac) * DY[moon.nakLord];
  const b = birth.getTime();
  let t = b + bal * YEAR;
  const out: DashaNode[] = [{ lord: moon.nakLord, lords: [moon.nakLord], level: 0, start: b, end: t, fullStart: t - DY[moon.nakLord] * YEAR, fullEnd: t, partial: true }];
  for (let i = 1; i <= 8; i++) {
    const lord = NAK_LORD[(i0 + i) % 9];
    const e = t + DY[lord] * YEAR;
    out.push({ lord, lords: [lord], level: 0, start: t, end: e, fullStart: t, fullEnd: e });
    t = e;
  }
  return out;
}

export function dashaChildren(node: DashaNode): DashaNode[] {
  const i0 = (NAK_LORD as readonly string[]).indexOf(node.lord);
  const span = node.fullEnd - node.fullStart;
  const out: DashaNode[] = [];
  let c = node.fullStart;
  for (let i = 0; i < 9; i++) {
    const lord = NAK_LORD[(i0 + i) % 9];
    const s0 = c;
    const e0 = i === 8 ? node.fullEnd : c + (span * DY[lord]) / 120;
    c = e0;
    if (e0 <= node.start || s0 >= node.end) continue; // wholly before birth
    out.push({
      lord, lords: node.lords.concat(lord), level: node.level + 1,
      start: Math.max(s0, node.start), end: Math.min(e0, node.end), fullStart: s0, fullEnd: e0, partial: s0 < node.start,
    });
  }
  return out;
}

export function doshas(planets: Planet[], lag: number, moon: Planet, now: Date): Doshas {
  const mars = planets.find((p) => p.name === "Mars")!;
  const sat = planets.find((p) => p.name === "Saturn")!;
  const bad = [1, 2, 4, 7, 8, 12];
  const fl = ((mars.sign - lag + 12) % 12) + 1;
  const fm = ((mars.sign - moon.sign + 12) % 12) + 1;
  const satNow = Math.floor(norm(tropLon(Astronomy.Body.Saturn, now) - ayanamsa(now)) / 30);
  const satFromMoon = ((satNow - moon.sign + 12) % 12) + 1;
  const sade = [12, 1, 2].includes(satFromMoon);
  const satNatal = ((sat.sign - moon.sign + 12) % 12) + 1;
  const rahu = planets.find((p) => p.name === "Rahu")!.lon;
  const between = (l: number) => norm(l - rahu) < 180;
  const others = planets.filter((p) => !["Rahu", "Ketu"].includes(p.name));
  const ks = others.every((p) => between(p.lon)) || others.every((p) => !between(p.lon));
  return {
    manglik: { flag: bad.includes(fl) || bad.includes(fm), fl, fm },
    sadesati: { flag: sade, house: satFromMoon, natal: satNatal },
    kaalsarp: { flag: ks },
  };
}

/* ============================================================
   Time zones (historical DST via Intl)
   ============================================================ */
export function tzOffset(ts: number, zone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: zone, hour12: false, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit",
  }).formatToParts(new Date(ts));
  const p = Object.fromEntries(parts.map((x) => [x.type, x.value]));
  return Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour % 24, +p.minute, +p.second) - ts;
}

export function zonedToUtc(y: number, mo: number, d: number, h: number, mi: number, zone: string): Date {
  let ts = Date.UTC(y, mo - 1, d, h, mi);
  for (let i = 0; i < 3; i++) {
    const n = Date.UTC(y, mo - 1, d, h, mi) - tzOffset(ts, zone);
    if (n === ts) break;
    ts = n;
  }
  return new Date(ts);
}

export function offLabel(ts: number, zone: string): string {
  const m = tzOffset(ts, zone) / 6e4;
  const s = m < 0 ? "-" : "+";
  const a = Math.abs(m);
  return "UTC" + s + String(Math.floor(a / 60)).padStart(2, "0") + ":" + String(a % 60).padStart(2, "0");
}

/* Longitudes for panchang work (sidereal Sun and Moon at a moment). */
export function siderealSunMoon(utc: Date): { sun: number; moon: number; ay: number } {
  const ay = ayanamsa(utc);
  return {
    ay,
    sun: norm(tropLon(Astronomy.Body.Sun, utc) - ay),
    moon: norm(tropLon(Astronomy.Body.Moon, utc) - ay),
  };
}

/* Sunrise and sunset (UTC ms) for the civil day that starts at `dayStartUtc`. */
export function sunRiseSet(dayStartUtc: Date, lat: number, lon: number): { rise: number | null; set: number | null } {
  const obs = new Astronomy.Observer(lat, lon, 0);
  const rise = Astronomy.SearchRiseSet(Astronomy.Body.Sun, obs, +1, dayStartUtc, 1);
  const set = Astronomy.SearchRiseSet(Astronomy.Body.Sun, obs, -1, dayStartUtc, 1);
  return { rise: rise ? rise.date.getTime() : null, set: set ? set.date.getTime() : null };
}
