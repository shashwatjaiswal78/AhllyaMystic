// Panchang and Choghadiya engine, ported from the "Daily Choghadiya" tool.
// For a place and a date it works out sunrise and sunset, the day and night Choghadiya, Rahu Kaal,
// the changes of Tithi, Nakshatra, Yoga and Karana through the Panchang day, and the lunar month.
import * as Astronomy from "astronomy-engine";
import { ayanamsa, tzOffset, zonedToUtc } from "@/lib/kundli/engine";

const DAYMS = 864e5;

export interface PanchangPlace { n: string; la: number; lo: number; tz: string }
export interface Slot { name: string; start: number; end: number; rahu?: boolean; vaar?: boolean; kaal?: boolean; ratri?: boolean }
export interface Seg { s: number; a: number; b: number; name: string; last?: boolean }
export interface TithiNow { ph: number; name: string; paksha: "Shukla" | "Krishna"; end: number | null; next: string; num: number }

const MONTHN = ["Chaitra", "Vaishakha", "Jyeshtha", "Ashadha", "Shravana", "Bhadrapada", "Ashwina", "Kartika", "Margashirsha", "Pausha", "Magha", "Phalguna"];
const SAMV = ["Prabhava", "Vibhava", "Shukla", "Pramoda", "Prajapati", "Angira", "Shrimukha", "Bhava", "Yuva", "Dhatri", "Ishvara", "Bahudhanya", "Pramathi", "Vikrama", "Vrisha", "Chitrabhanu", "Subhanu", "Tarana", "Parthiva", "Vyaya", "Sarvajit", "Sarvadhari", "Virodhi", "Vikriti", "Khara", "Nandana", "Vijaya", "Jaya", "Manmatha", "Durmukhi", "Hemalambi", "Vilambi", "Vikari", "Sharvari", "Plava", "Shubhakrit", "Shobhakrit", "Krodhi", "Vishvavasu", "Parabhava", "Plavanga", "Kilaka", "Saumya", "Sadharana", "Virodhakrit", "Paridhavi", "Pramadicha", "Ananda", "Rakshasa", "Nala", "Pingala", "Kalayukti", "Siddharthi", "Raudra", "Durmati", "Dundubhi", "Rudhirodgari", "Raktakshi", "Krodhana", "Akshaya"];
const TITHI = ["Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi"];
const NAKS = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"];
const YOGAS = ["Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda", "Sukarma", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyana", "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma", "Indra", "Vaidhriti"];
const KARANA7 = ["Bava", "Balava", "Kaulava", "Taitila", "Gara", "Vanija", "Vishti"];
export const TL_ROWS = ["Tithi", "Nakshatra", "Yoga", "Karana"] as const;
export type TlRow = (typeof TL_ROWS)[number];

const DAY_CYCLE = ["Udveg", "Char", "Labh", "Amrit", "Kaal", "Shubh", "Rog"];
const NIGHT_CYCLE = ["Shubh", "Amrit", "Char", "Rog", "Kaal", "Labh", "Udveg"];
const DAY_START = ["Udveg", "Amrit", "Rog", "Labh", "Shubh", "Char", "Kaal"]; // Sun..Sat, first slot after sunrise
const NIGHT_START = ["Shubh", "Char", "Kaal", "Udveg", "Amrit", "Rog", "Labh"]; // Sun..Sat, first slot after sunset
const RAHU_SLOT = [7, 1, 6, 4, 5, 3, 2]; // Sun..Sat: day slot (0 based) that is Rahu Kaal
// Vaar Vela: the one day slot (0 based) each weekday that is held unsuitable for auspicious work. Kaal Vela is every day slot
// that is Kaal, and Kaal Ratri is every night slot that is Labh. Checked against a printed panchang for all seven weekdays.
const VAAR_VELA_SLOT = [3, 6, 1, 4, 7, 2, 5]; // Sun..Sat

/* ---------------------------------------------------------------- date helpers */
export const parseYMD = (s: string) => { const v = s.split("-"); return { y: +v[0], m: +v[1], d: +v[2] }; };
export const addDays = (s: string, n: number) => { const p = parseYMD(s); return new Date(Date.UTC(p.y, p.m - 1, p.d + n)).toISOString().slice(0, 10); };
export const dowOf = (s: string) => { const p = parseYMD(s); return new Date(Date.UTC(p.y, p.m - 1, p.d)).getUTCDay(); };
export function todayIn(tz: string, now = Date.now()): string {
  const f = Object.fromEntries(new Intl.DateTimeFormat("en-GB", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date(now)).map((x) => [x.type, x.value]));
  return `${f.year}-${f.month}-${f.day}`;
}
export function isValidTz(tz: string): boolean {
  try { new Intl.DateTimeFormat("en-US", { timeZone: tz }); return true; } catch { return false; }
}

const ay = (ms: number) => ayanamsa(new Date(ms));
const moonSid = (ms: number) => (((Astronomy.EclipticGeoMoon(new Date(ms)).lon - ay(ms)) % 360) + 360) % 360;
const sunSid = (ms: number) => (((Astronomy.SunPosition(new Date(ms)).elon - ay(ms)) % 360) + 360) % 360;
const elongAt = (ms: number) => Astronomy.MoonPhase(new Date(ms));

/* ---------------------------------------------------------------- lunar calendar */
const sunSign = (ms: number) => Math.floor(sunSid(ms) / 30);
function newMoonAtOrBefore(ms: number): number {
  let t = Astronomy.SearchMoonPhase(0, new Date(ms - 29.8 * DAYMS), 31)!.date.getTime();
  for (let i = 0; i < 2; i++) { const n = Astronomy.SearchMoonPhase(0, new Date(t + DAYMS), 31)!.date.getTime(); if (n <= ms) t = n; else break; }
  return t;
}
const nextNewMoon = (ms: number) => Astronomy.SearchMoonPhase(0, new Date(ms + DAYMS), 31)!.date.getTime();
function lunarMonthAt(ms: number) {
  const t0 = newMoonAtOrBefore(ms), t1 = nextNewMoon(t0), s0 = sunSign(t0), s1 = sunSign(t1 - 6e4);
  return { t0, t1, idx: (s0 + 1) % 12, adhika: s0 === s1 };
}

/** Tithi at a moment: the Moon-Sun elongation in steps of 12 degrees. */
export function tithiAt(ms: number): TithiNow {
  const ph = Astronomy.MoonPhase(new Date(ms)), idx = Math.floor(ph / 12) % 30;
  const shukla = idx < 15, n = idx % 15;
  const name = n === 14 ? (shukla ? "Purnima" : "Amavasya") : TITHI[n];
  const nextIdx = (idx + 1) % 30, nextName = nextIdx % 15 === 14 ? (nextIdx < 15 ? "Purnima" : "Amavasya") : TITHI[nextIdx % 15];
  const t = Astronomy.SearchMoonPhase(((idx + 1) * 12) % 360, new Date(ms), 2);
  return { ph, name, paksha: shukla ? "Shukla" : "Krishna", end: t ? t.date.getTime() : null, next: nextName, num: (idx % 15) + 1 };
}

export function lunarInfo(ms: number, tz: string) {
  const ti = tithiAt(ms), m = lunarMonthAt(ms), nm = lunarMonthAt(m.t1 + DAYMS * 2);
  const shukla = ti.paksha === "Shukla", n = ti.num;
  const amanta = (m.adhika ? "Adhika " : "") + MONTHN[m.idx];
  const purni = shukla ? amanta : (nm.adhika ? "Adhika " : "") + MONTHN[nm.idx];
  const dAm = shukla ? n : 15 + n, dPu = shukla ? 15 + n : n;
  const gy = +new Intl.DateTimeFormat("en-GB", { timeZone: tz, year: "numeric" }).format(new Date(ms));
  const gm = +new Intl.DateTimeFormat("en-GB", { timeZone: tz, month: "numeric" }).format(new Date(ms));
  const vy = gy + (gm <= 4 && m.idx >= 9 ? 56 : 57);
  return { tithi: ti, amanta, purni, dAm, dPu, vy, sam: SAMV[(52 + (vy - 2083) + 60 * 10) % 60] };
}

/* ---------------------------------------------------------------- Panchang day timeline */
const STATE: Record<TlRow, (ms: number) => number> = {
  Tithi: (ms) => Math.floor(elongAt(ms) / 12) % 30,
  Nakshatra: (ms) => Math.floor(moonSid(ms) / (360 / 27)) % 27,
  Yoga: (ms) => Math.floor(((moonSid(ms) + sunSid(ms)) % 360) / (360 / 27)) % 27,
  Karana: (ms) => Math.floor(elongAt(ms) / 6) % 60,
};
function stateName(row: TlRow, s: number): string {
  if (row === "Tithi") { const n = s % 15; return n === 14 ? (s < 15 ? "Purnima" : "Amavasya") : TITHI[n] + ", " + (s < 15 ? "Shukla" : "Krishna"); }
  if (row === "Nakshatra") return NAKS[s];
  if (row === "Yoga") return YOGAS[s];
  if (s === 0) return "Kimstughna";
  if (s >= 57) return ["Shakuni", "Chatushpada", "Naga"][s - 57];
  return KARANA7[(s - 1) % 7];
}
/** Split [t0, t1] into stretches where the state is constant; changes are found to the second. */
export function segmentsOf(row: TlRow, t0: number, t1: number): Seg[] {
  const f = STATE[row], step = 15 * 60000, segs: Seg[] = [];
  let cs = t0, st = f(t0), prev = t0;
  for (let t = t0 + step; ; t += step) {
    const tt = Math.min(t, t1), s = f(tt);
    if (s !== st) {
      let a = prev, b = tt;
      while (b - a > 1000) { const m = (a + b) / 2; if (f(m) === st) a = m; else b = m; }
      segs.push({ s: st, a: cs, b, name: stateName(row, st) });
      cs = b; st = s;
    }
    prev = tt;
    if (tt >= t1) break;
  }
  segs.push({ s: st, a: cs, b: t1, name: stateName(row, st), last: true });
  return segs;
}

/* ---------------------------------------------------------------- sun and Choghadiya */
/** Sunrise, sunset and the next sunrise for one civil date at a place. */
export function sunFor(dateStr: string, p: PanchangPlace) {
  const q = parseYMD(dateStr), start = zonedToUtc(q.y, q.m, q.d, 0, 0, p.tz);
  const obs = new Astronomy.Observer(p.la, p.lo, 0);
  const rise = Astronomy.SearchRiseSet(Astronomy.Body.Sun, obs, +1, start, 1.5);
  if (!rise) return null;
  const set = Astronomy.SearchRiseSet(Astronomy.Body.Sun, obs, -1, rise.date, 1.5);
  if (!set) return null;
  const next = Astronomy.SearchRiseSet(Astronomy.Body.Sun, obs, +1, new Date(set.date.getTime() + 6e4), 1.5);
  if (!next) return null;
  return { rise: rise.date.getTime(), set: set.date.getTime(), next: next.date.getTime() };
}

/** 8 day slots and 8 night slots for the Vedic day that starts at that date's sunrise. */
export function periodsFor(dateStr: string, p: PanchangPlace) {
  const s = sunFor(dateStr, p); if (!s) return null;
  const dow = dowOf(dateStr), dl = (s.set - s.rise) / 8, nl = (s.next - s.set) / 8;
  const dstart = DAY_CYCLE.indexOf(DAY_START[dow]), nstart = NIGHT_CYCLE.indexOf(NIGHT_START[dow]);
  const day: Slot[] = [], night: Slot[] = [];
  for (let i = 0; i < 8; i++) {
    const dn = DAY_CYCLE[(dstart + i) % 7];
    day.push({ name: dn, start: s.rise + i * dl, end: s.rise + (i + 1) * dl, rahu: RAHU_SLOT[dow] === i, vaar: VAAR_VELA_SLOT[dow] === i, kaal: dn === "Kaal" });
    const nn = NIGHT_CYCLE[(nstart + i) % 7];
    night.push({ name: nn, start: s.set + i * nl, end: s.set + (i + 1) * nl, ratri: nn === "Labh" });
  }
  return { sun: s, day, night, dow };
}

/** The slot running at `now`, looking at yesterday, today and tomorrow so the hours before sunrise are covered. */
export function currentSlot(p: PanchangPlace, now = Date.now()) {
  const t = todayIn(p.tz, now);
  for (const d of [addDays(t, -1), t, addDays(t, 1)]) {
    const pr = periodsFor(d, p); if (!pr) continue;
    for (const part of ["day", "night"] as const) {
      const all = pr[part];
      for (let i = 0; i < all.length; i++) {
        const x = all[i];
        if (now >= x.start && now < x.end) {
          const next = all[i + 1] ?? (part === "day" ? pr.night[0] : periodsFor(addDays(d, 1), p)?.day[0] ?? null);
          return { slot: x, next };
        }
      }
    }
  }
  return null;
}

/* ---------------------------------------------------------------- one day, everything the page shows */
export interface PanchangDay {
  place: PanchangPlace;
  date: string;
  dow: number;
  offMs: number;
  serverNow: number;
  sun: { rise: number; set: number; next: number } | null;
  day: Slot[];
  night: Slot[];
  timeline: Record<TlRow, Seg[]> | null;
  lunar: ReturnType<typeof lunarInfo>;
  now: { slot: Slot; next: Slot | null } | null;
  extra: Extra | null;
}

/* ---------------------------------------------------------------- the rest of the day's Panchang */
type Span = [number, number];
export interface Extra {
  moon: { rise: number | null; set: number | null };
  rashi: { moon: number; moonChange: number | null; moonNext: number; sun: number; pada: number };
  durations: { day: number; night: number; midday: number };
  auspicious: { brahma: Span; abhijit: Span | null };
  inauspicious: { rahu: Span; yamaganda: Span; gulika: Span };
  ritu: string;
  ayana: string;
  disha: string;
}
const YAMA_SLOT = [4, 3, 2, 1, 0, 6, 5]; // Sun..Sat: day eighth that is Yamaganda
const GULIKA_SLOT = [6, 5, 4, 3, 2, 1, 0]; // Sun..Sat: day eighth that is Gulika
const DISHA = ["West", "East", "North", "North", "South", "West", "East"]; // Sun..Sat: direction to avoid for travel
const RITU: Record<string, string> = { Chaitra: "Vasanta", Vaishakha: "Vasanta", Jyeshtha: "Grishma", Ashadha: "Grishma", Shravana: "Varsha", Bhadrapada: "Varsha", Ashwina: "Sharad", Kartika: "Sharad", Margashirsha: "Hemanta", Pausha: "Hemanta", Magha: "Shishira", Phalguna: "Shishira" };

function extraFor(dateStr: string, p: PanchangPlace, sun: { rise: number; set: number; next: number }, dow: number, monthName: string): Extra {
  const q = parseYMD(dateStr), start = zonedToUtc(q.y, q.m, q.d, 0, 0, p.tz).getTime(), obs = new Astronomy.Observer(p.la, p.lo, 0);
  const inDay = (r: { date: Date } | null) => (r && r.date.getTime() >= start && r.date.getTime() < start + DAYMS ? r.date.getTime() : null);
  const moon = { rise: inDay(Astronomy.SearchRiseSet(Astronomy.Body.Moon, obs, +1, new Date(start), 1)), set: inDay(Astronomy.SearchRiseSet(Astronomy.Body.Moon, obs, -1, new Date(start), 1)) };

  const sign = (ms: number) => Math.floor(moonSid(ms) / 30);
  const m0 = sign(sun.rise);
  let moonChange: number | null = null;
  for (let t = sun.rise + 15 * 60000; t <= sun.next; t += 15 * 60000) {
    if (sign(t) !== m0) { let a = t - 15 * 60000, b = t; while (b - a > 1000) { const m = (a + b) / 2; if (sign(m) === m0) a = m; else b = m; } moonChange = b; break; }
  }
  const pada = Math.floor((moonSid(sun.rise) % (360 / 27)) / (360 / 108)) + 1;

  const dayMs = sun.set - sun.rise, dl = dayMs / 8, mu = dayMs / 15;
  const slot = (i: number): Span => [sun.rise + i * dl, sun.rise + (i + 1) * dl];
  const tropical = Astronomy.SunPosition(new Date(sun.rise)).elon;
  return {
    moon,
    rashi: { moon: m0, moonChange, moonNext: (m0 + 1) % 12, sun: sunSign(sun.rise), pada },
    durations: { day: dayMs, night: sun.next - sun.set, midday: sun.rise + dayMs / 2 },
    auspicious: { brahma: [sun.rise - 96 * 60000, sun.rise - 48 * 60000], abhijit: dow === 3 ? null : [sun.rise + 7 * mu, sun.rise + 8 * mu] },
    inauspicious: { rahu: slot(RAHU_SLOT[dow]), yamaganda: slot(YAMA_SLOT[dow]), gulika: slot(GULIKA_SLOT[dow]) },
    ritu: RITU[monthName.replace("Adhika ", "")] ?? "",
    ayana: tropical >= 270 || tropical < 90 ? "Uttarayana" : "Dakshinayana",
    disha: DISHA[dow],
  };
}

export function panchangFor(dateStr: string, p: PanchangPlace, now = Date.now()): PanchangDay {
  const q = parseYMD(dateStr);
  const pr = periodsFor(dateStr, p);
  const noon = zonedToUtc(q.y, q.m, q.d, 12, 0, p.tz).getTime();
  const ref = pr ? pr.sun.rise : noon;
  const lunar = lunarInfo(ref, p.tz);
  return {
    place: p, date: dateStr, dow: dowOf(dateStr), offMs: tzOffset(noon, p.tz), serverNow: now,
    sun: pr ? pr.sun : null, day: pr ? pr.day : [], night: pr ? pr.night : [],
    timeline: pr ? Object.fromEntries(TL_ROWS.map((r) => [r, segmentsOf(r, pr.sun.rise, pr.sun.next)])) as Record<TlRow, Seg[]> : null,
    lunar,
    now: currentSlot(p, now),
    extra: pr ? extraFor(dateStr, p, pr.sun, dowOf(dateStr), lunar.amanta) : null,
  };
}
