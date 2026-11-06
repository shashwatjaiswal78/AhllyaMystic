// KP engine, server side: Krishnamurti ayanamsa, Placidus cusps and planet positions.
// Ported from the "KP Kundli Calculator" Artifact. Formulas and conventions are unchanged.
import * as Astronomy from "astronomy-engine";
import {
  BODIES, SUB_ROWS, edgeFlag, locate, norm, rulingPlanets,
  type ChartData, type CuspRow, type KpPlanet, type Ruling,
} from "./core";

const D2R = Math.PI / 180;
const R2D = 180 / Math.PI;

/* ---------- ayanamsa ----------
   Krishnamurti ayanamsa. Mean value at J2000 taken from Swiss Ephemeris (SE_SIDM_KRISHNAMURTI, 23.760240 deg),
   carried forward with IAU 2006 general precession in longitude, plus nutation so that it pairs with apparent
   (true equinox) tropical longitudes, as Swiss Ephemeris does. */
const KP_AYAN_J2000 = 23.76024004;
const jc = (d: Date) => Astronomy.MakeTime(d).tt / 36525;
const nutation = (d: Date) => Astronomy.e_tilt(Astronomy.MakeTime(d)); // dpsi arcsec, tobl deg

export function ayanamsaMean(d: Date): number {
  const T = jc(d);
  const pA = 5028.796195 * T + 1.1054348 * T * T + 0.00007964 * T ** 3 - 0.000023857 * T ** 4 - 0.0000000383 * T ** 5;
  return KP_AYAN_J2000 + pA / 3600;
}
export const ayanamsa = (d: Date) => ayanamsaMean(d) + nutation(d).dpsi / 3600;

/* ---------- planets ---------- */
function tropLon(name: string, d: Date): number {
  if (name === "Moon") return Astronomy.EclipticGeoMoon(d).lon;
  const v = Astronomy.GeoVector(Astronomy.Body[name as keyof typeof Astronomy.Body] as Astronomy.Body, d, true);
  const e = Astronomy.RotateVector(Astronomy.Rotation_EQJ_ECT(d), v);
  return norm(Math.atan2(e.y, e.x) * R2D);
}
/* Mean node of date (mean equinox). */
function meanNodeMean(d: Date): number {
  const T = jc(d);
  return norm(125.0445479 - 1934.1362891 * T + 0.0020754 * T * T + T ** 3 / 467441 - T ** 4 / 60616000);
}
/* True (osculating) ascending node: the line where the Moon's instantaneous orbital plane cuts the ecliptic of date. */
function trueNodeTrop(d: Date): number {
  const t0 = d.getTime(), dt = 10 * 60 * 1000;
  const rot = Astronomy.Rotation_EQJ_ECT(d);
  const pos = (t: number) => Astronomy.RotateVector(rot, Astronomy.GeoMoon(new Date(t)));
  const a = pos(t0 - dt), b = pos(t0 + dt), m = pos(t0);
  const vx = b.x - a.x, vy = b.y - a.y, vz = b.z - a.z;
  const hx = m.y * vz - m.z * vy, hy = m.z * vx - m.x * vz;
  return norm(Math.atan2(hx, -hy) * R2D);
}

/* ---------- Placidus ---------- */
export class KpError extends Error {}

export function placidus(ramc: number, eps: number, latDeg: number): number[] {
  if (Math.abs(latDeg) > 66) throw new KpError("Placidus houses are undefined beyond about 66 degrees latitude.");
  const th = ramc * D2R, phi = latDeg * D2R, ce = Math.cos(eps), se = Math.sin(eps);
  const mc = norm(Math.atan2(Math.sin(th), Math.cos(th) * ce) * R2D);
  const asc = norm(Math.atan2(Math.cos(th), -(Math.sin(th) * ce + Math.tan(phi) * se)) * R2D);
  /* base: first guess for the cusp's right ascension; frac: share of the semi-arc;
     above: cusps 11, 12 sit on the diurnal side, 2, 3 on the nocturnal side. */
  function solve(base: number, frac: number, above: boolean): number {
    let ra = base, lam = 0;
    for (let i = 0; i < 80; i++) {
      lam = Math.atan2(Math.sin(ra), Math.cos(ra) * ce);
      const dec = Math.asin(se * Math.sin(lam));
      const x = Math.max(-1, Math.min(1, -Math.tan(phi) * Math.tan(dec)));
      const dsa = Math.acos(x);
      const next = above ? th + frac * dsa : th + Math.PI - frac * (Math.PI - dsa);
      if (Math.abs(next - ra) < 1e-13) { ra = next; break; }
      ra = next;
    }
    lam = Math.atan2(Math.sin(ra), Math.cos(ra) * ce);
    return norm(lam * R2D);
  }
  const c11 = solve(th + 30 * D2R, 1 / 3, true), c12 = solve(th + 60 * D2R, 2 / 3, true);
  const c2 = solve(th + 120 * D2R, 2 / 3, false), c3 = solve(th + 150 * D2R, 1 / 3, false);
  const o = (x: number) => norm(x + 180);
  return [asc, c2, c3, o(mc), o(c11), o(c12), o(asc), o(c2), o(c3), mc, c11, c12]; // cusps 1..12
}

/* Right ascension of the meridian that puts a given tropical longitude on the eastern horizon. */
export function ramcForAsc(target: number, eps: number, latDeg: number): number {
  const phi = latDeg * D2R, ce = Math.cos(eps), se = Math.sin(eps);
  const asc = (th: number) => norm(Math.atan2(Math.cos(th), -(Math.sin(th) * ce + Math.tan(phi) * se)) * R2D);
  const g = (t: number) => { let d = asc(t * D2R) - target; d = ((d + 540) % 360) - 180; return d; };
  let prev = g(0);
  for (let t = 1; t <= 360; t++) {
    const cur = g(t);
    if (prev < 0 && cur >= 0 && cur - prev < 90) {
      let lo = t - 1, hi = t;
      for (let i = 0; i < 60; i++) { const mid = (lo + hi) / 2; if (g(mid) < 0) lo = mid; else hi = mid; }
      return norm((lo + hi) / 2);
    }
    prev = cur;
  }
  throw new KpError("Could not place that ascendant at this latitude.");
}

export function houseOf(lon: number, cusps: number[]): number {
  for (let i = 0; i < 12; i++) {
    const span = norm(cusps[(i + 1) % 12] - cusps[i]);
    if (norm(lon - cusps[i]) < span) return i + 1;
  }
  return 12;
}

/* ---------- the chart ----------
   opts.node: 'mean' (default) or 'true' lunar node.
   opts.ay:   'mean' (default) subtracts the mean KP ayanamsa from apparent tropical longitudes, which is what the KP
              software used for cross-checking appears to do. 'true' adds nutation to the ayanamsa, as Swiss Ephemeris does.
   opts.horary: fixes the ascendant at the start of that sub (1 to 249); built in the artifact but switched off there. */
export interface KpOpts { node?: "mean" | "true"; ay?: "mean" | "true"; horary?: number }
export interface KpChart extends ChartData { eps: number; ramc: number; cusps: number[]; asc: CuspRow; mc: CuspRow; moon: KpPlanet; sun: KpPlanet }

export function computeChart(utc: Date, lat: number, lon: number, opts?: KpOpts): KpChart {
  const mode = opts?.node || "mean", ayMode = opts?.ay || "mean";
  const ayM = ayanamsaMean(utc), ay = ayMode === "true" ? ayanamsa(utc) : ayM;
  const eps = nutation(utc).tobl * D2R;
  let ramc = norm((Astronomy.SiderealTime(utc) + lon / 15) * 15);
  let horary: { n: number } | null = null;
  if (opts?.horary) {
    const n = Math.round(opts.horary);
    if (!(n >= 1 && n <= 249)) throw new KpError("The horary number must be between 1 and 249.");
    ramc = ramcForAsc(norm(SUB_ROWS[n - 1].start + 1e-7 + ay), eps, lat);
    horary = { n };
  }
  const cuspsTrop = placidus(ramc, eps, lat);
  const cusps = cuspsTrop.map((c) => norm(c - ay));
  const cuspRows: CuspRow[] = cusps.map((l, i) => ({ house: i + 1, ...locate(l) }));

  const planets: KpPlanet[] = [];
  const later = new Date(utc.getTime() + 36e5);
  for (const name of BODIES) {
    const t = tropLon(name, utc);
    const retro = name !== "Sun" && name !== "Moon" && norm(tropLon(name, later) - t) > 180;
    const l = norm(t - ay);
    planets.push({ name, ...locate(l), retro, house: houseOf(l, cusps), edge: edgeFlag(l) });
  }
  /* Mean node: mean value minus mean ayanamsa, identical in both ayanamsa modes. */
  const rt = mode === "mean" ? norm(meanNodeMean(utc) - ayM) : norm(trueNodeTrop(utc) - ay);
  let rRetro = true;
  if (mode === "true") {
    const a = trueNodeTrop(new Date(utc.getTime() - 216e5)), b = trueNodeTrop(new Date(utc.getTime() + 216e5));
    rRetro = norm(b - a) > 180;
  }
  for (const [name, l] of [["Rahu", rt], ["Ketu", norm(rt + 180)]] as [string, number][]) {
    planets.push({ name, ...locate(l), retro: rRetro, house: houseOf(l, cusps), edge: edgeFlag(l) });
  }
  return { ay, ayMode, eps, ramc, mode, horary, cusps, cuspRows, planets, asc: cuspRows[0], mc: cuspRows[9], moon: planets[1], sun: planets[0] };
}

/* ---------- ruling planets ---------- */
const DAY_LORD = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"];
/* The day belongs to the weekday lord from sunrise to the next sunrise. offMs is the place's UTC offset in
   milliseconds at that moment. */
export function dayLord(utcMs: number, lat: number, lon: number, offMs: number) {
  const localDay = Math.floor((utcMs + offMs) / 864e5);
  const midnight = localDay * 864e5 - offMs;
  let rise: number | null = null;
  try {
    const r = Astronomy.SearchRiseSet(Astronomy.Body.Sun, new Astronomy.Observer(lat, lon, 0), +1, new Date(midnight), 1);
    if (r) rise = r.date.getTime();
  } catch { /* no sunrise at this latitude and date */ }
  const before = rise !== null && utcMs < rise;
  const day = before ? localDay - 1 : localDay;
  return { lord: DAY_LORD[(((day + 4) % 7) + 7) % 7], sunrise: rise, beforeSunrise: before };
}

export function rulingNow(utc: Date, lat: number, lon: number, offMs: number, opts?: KpOpts): Ruling {
  const c = computeChart(utc, lat, lon, opts);
  const dl = dayLord(utc.getTime(), lat, lon, offMs);
  return rulingPlanets(c, dl.lord);
}

