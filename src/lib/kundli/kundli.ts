// Builds the Free Kundli result: validates the birth details, runs the engine and returns everything the
// /kundli page displays, already formatted. Runs on the server only.
import {
  ABBR, RASHI, SIGNS, STATE_NAME, STATE_ORDER, computeChart, dashaChildren, dms, offLabel, siderealSunMoon, sunRiseSet, zonedToUtc,
  type Chart, type DashaNode, type Planet, type PlanetState,
} from "./engine";
import { INTERP } from "./data/interpretations";
import { KARANA_TRAIT, TITHI_TRAIT, WEEKDAY_TRAIT, YOGA_TRAIT } from "./traits";
import { NAK_HI, SIGN_HI, VARA, WEEKDAYS, ganaOf, karanaAt, nadiOf, tithiAt, varnaOf, vashyaOf, yogaAt, yoniOf } from "./panchang";
import type { Place } from "./places";

export interface KundliInput {
  name: string;
  gender: string;
  dob: string; // YYYY-MM-DD, as written on the birth certificate (local time at the birth place)
  tob: string; // HH:MM or HH:MM:SS
  place: Place;
}

export class InputError extends Error {}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const GENDERS = ["Male", "Female", "Other"];

/* ---------- input ---------- */
export function parsePlace(raw: unknown): Place {
  const p = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const la = Number(p.la), lo = Number(p.lo);
  if (!Number.isFinite(la) || !Number.isFinite(lo) || Math.abs(la) > 90 || Math.abs(lo) > 180) throw new InputError("Choose your birth place from the list so we use the right coordinates.");
  const tz = String(p.tz ?? "");
  try { new Intl.DateTimeFormat("en-US", { timeZone: tz }); } catch { throw new InputError("We could not find the time zone for that place. Please pick another nearby town."); }
  return { n: String(p.n ?? "").slice(0, 160) || "Birth place", r: String(p.r ?? "").slice(0, 120), la, lo, tz, online: !!p.online };
}

export function parseInput(raw: unknown): { input: KundliInput; y: number; mo: number; d: number; h: number; mi: number; s: number } {
  const b = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const name = String(b.name ?? "").trim().replace(/\s+/g, " ");
  if (!/\p{L}/u.test(name)) throw new InputError("Enter your name with at least one letter.");
  if (name.length > 80) throw new InputError("Please use a shorter name.");

  const dm = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(b.dob ?? ""));
  if (!dm) throw new InputError("Enter your date of birth as DD/MM/YYYY.");
  const [y, mo, d] = [+dm[1], +dm[2], +dm[3]];
  const check = new Date(Date.UTC(y, mo - 1, d));
  if (check.getUTCFullYear() !== y || check.getUTCMonth() !== mo - 1 || check.getUTCDate() !== d) throw new InputError("That date of birth does not exist. Please check it.");
  if (y < 1800 || y > 2100) throw new InputError("Please enter a birth year between 1800 and 2100.");

  const tm = /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(String(b.tob ?? "").trim());
  if (!tm) throw new InputError("Enter your time of birth as HH:MM:SS (24-hour clock).");
  const [h, mi, s] = [+tm[1], +tm[2], tm[3] ? +tm[3] : 0];
  if (h > 23 || mi > 59 || s > 59) throw new InputError("That time of birth is not valid. Use the 24-hour clock, for example 14:30.");

  const place = parsePlace(b.place);

  const gender = GENDERS.includes(String(b.gender)) ? String(b.gender) : "";
  return { input: { name, gender, dob: `${dm[1]}-${dm[2]}-${dm[3]}`, tob: `${String(h).padStart(2, "0")}:${String(mi).padStart(2, "0")}:${String(s).padStart(2, "0")}`, place }, y, mo, d, h, mi, s };
}

/* ---------- formatting helpers ---------- */
function parts(ms: number, tz: string) {
  const f = Object.fromEntries(new Intl.DateTimeFormat("en-US", { timeZone: tz, hour12: false, year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })
    .formatToParts(new Date(ms)).map((x) => [x.type, x.value]));
  return { y: +f.year, m: +f.month, d: +f.day, h: +f.hour % 24, mi: +f.minute, s: +f.second };
}
const dmy = (ms: number, tz: string) => { const p = parts(ms, tz); return `${p.d} ${MONTHS[p.m - 1]} ${p.y}`; };
const my = (ms: number, tz: string) => { const p = parts(ms, tz); return `${MONTHS[p.m - 1]} ${p.y}`; };
const hhmm = (ms: number, tz: string) => { const p = parts(ms, tz); return `${String(p.h).padStart(2, "0")}:${String(p.mi).padStart(2, "0")}`; };
const clock12 = (h: number, mi: number, s: number, withSeconds: boolean) =>
  `${h % 12 || 12}:${String(mi).padStart(2, "0")}${withSeconds ? ":" + String(s).padStart(2, "0") : ""} ${h < 12 ? "am" : "pm"}`;

const ord = (n: number) => { const t = n % 100; if (t >= 11 && t <= 13) return n + "th"; return n + (["th", "st", "nd", "rd"][n % 10] ?? "th"); };
const NUM_WORD = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
const the = (p: string) => (p === "Sun" || p === "Moon" ? `The ${p}` : p);
const list = (a: string[]) => (a.length <= 1 ? a.join("") : a.slice(0, -1).join(", ") + " and " + a[a.length - 1]);
const prime = (s: string) => s.replace(/'/g, "′").replace(/"/g, "″");

function coord(v: number, pos: string, neg: string) {
  const a = Math.abs(v);
  let d = Math.floor(a), m = Math.round((a - d) * 60);
  if (m === 60) { d += 1; m = 0; }
  return `${d}°${String(m).padStart(2, "0")}′ ${v < 0 ? neg : pos}`;
}
function zoneLabel(tz: string, ts: number) {
  const off = offLabel(ts, tz);
  if (tz === "Asia/Kolkata" || tz === "Asia/Calcutta") return `IST, ${off}`;
  const name = new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "short" }).formatToParts(new Date(ts)).find((x) => x.type === "timeZoneName")?.value;
  return name && !name.startsWith("GMT") ? `${name}, ${off}` : off;
}

/* ---------- result types ---------- */
export interface ChartHouse { sign: number; items: { abbr: string; deg?: number; asc?: boolean }[] }
export interface DashaOut { lord: string; years: number; startYear: number; range: string; start: number; end: number; antar: { name: string; lord: string; range: string; short: string; start: number; end: number }[] }
export interface KundliResult {
  v: 1;
  generatedAt: number;
  input: KundliInput;
  firstName: string;
  headline: string;
  tiles: { key: string; label: string; en: string; hi: string; sub: string }[];
  details: [string, string][];
  panchang: [string, string][];
  d1: ChartHouse[];
  d9: ChartHouse[];
  stand: string[];
  planets: { name: string; sign: string; deg: string; nak: string; nakLord: string; house: number | null; strength: string }[];
  doshas: {
    key: string; title: string; hi: string; present: boolean; label: string; chart: string; note: string; remedy: boolean;
  }[];
  dasha: DashaOut[];
  nature: { title: string; basis: string; text: string }[];
}

/* ---------- charts ---------- */
function houses(lagSign: number, occ: Record<number, ChartHouse["items"]>, asc: ChartHouse["items"][number]): ChartHouse[] {
  return Array.from({ length: 12 }, (_, i) => {
    const sign = (lagSign + i) % 12;
    const items = (occ[sign] ?? []).slice();
    return { sign: sign + 1, items: i === 0 ? [asc, ...items] : items };
  });
}

function strength(p: { name: string; states: PlanetState[] }) {
  const isNode = p.name === "Rahu" || p.name === "Ketu";
  return STATE_ORDER.filter((k) => p.states.includes(k) && !(isNode && k === "retro")).map((k) => STATE_NAME[k]).join(", ");
}

function standouts(c: Chart): string[] {
  const out: string[] = [];
  const seven = c.planets.filter((p) => p.name !== "Rahu" && p.name !== "Ketu");
  const where = (p: Planet) => (p.house === 1 ? `your lagna (${p.signName})` : `${p.signName}, in the ${ord(p.house)} house`);
  for (const p of seven) if (p.states.includes("exalt")) out.push(`${the(p.name)} is exalted in ${where(p)}.`);
  for (const p of seven) if (p.states.includes("debil")) out.push(`${the(p.name)} is debilitated in ${where(p)}.`);
  for (let h = 1; h <= 12; h++) {
    const here = seven.filter((p) => p.house === h);
    if (here.length < 3) continue;
    const burnt = here.filter((p) => p.states.includes("combust")).map((p) => p.name);
    out.push(`${NUM_WORD[here.length] ?? here.length} planets sit in the ${ord(h)} house: ${list(here.map((p) => (p.name === "Sun" || p.name === "Moon" ? "the " + p.name : p.name)))}.`
      + (burnt.length ? ` ${list(burnt)} ${burnt.length === 1 ? "is" : "are"} combust.` : ""));
  }
  if (!out.length) out.push("No planet sits in its exalted or debilitated sign, and no house holds three or more planets.");
  return out;
}

function doshaCards(c: Chart) {
  const d = c.doshas;
  const sade = d.sadesati;
  const card = (key: string, title: string, hi: string, present: boolean, label: string, chart: string, note: string, remedy = present) =>
    ({ key, title, hi, present, label, chart, note, remedy });
  return [
    card("manglik", "Manglik dosha", "मांगलिक दोष", d.manglik.flag, d.manglik.flag ? "Present" : "Not present",
      `Mars is in the ${ord(d.manglik.fl)} house from your lagna and the ${ord(d.manglik.fm)} from your Moon.`,
      d.manglik.flag
        ? "Manglik dosha is common and is often reduced or cancelled by other placements. Our experts check this before suggesting any remedy."
        : "Manglik dosha forms when Mars sits in the 1st, 2nd, 4th, 7th, 8th or 12th house from the lagna or the Moon. Neither applies in your chart."),
    card("kaalsarp", "Kaal Sarp dosha", "काल सर्प दोष", d.kaalsarp.flag, d.kaalsarp.flag ? "Present" : "Not present",
      d.kaalsarp.flag ? "All seven planets sit on one side of the Rahu and Ketu axis." : "The seven planets are not all on one side of the Rahu and Ketu axis.",
      d.kaalsarp.flag
        ? "Its effect depends on the houses involved and on the strength of your other planets, so it needs a proper reading."
        : "Kaal Sarp dosha forms only when all seven planets fall between Rahu and Ketu on one side. That is not the case here."),
    card("sadesati", "Sade Sati", "साढ़े साती", sade.flag, sade.flag ? "Running" : "Not running",
      `Saturn is transiting the ${ord(sade.house)} house from your Moon as of today.`,
      sade.flag
        ? "Sade Sati runs while Saturn passes the 12th, 1st and 2nd houses from your Moon. It is affecting you now, and its effect depends on the rest of your chart."
        : "Sade Sati runs while Saturn passes the 12th, 1st and 2nd houses from your Moon. It is not affecting you now.",
      sade.flag),
  ];
}

function dashaOut(c: Chart, tz: string): DashaOut[] {
  return c.dasha.map((m) => ({
    lord: m.lord,
    years: Math.max(1, Math.round((m.end - m.start) / (365.25 * 864e5))),
    startYear: parts(m.start, tz).y,
    range: `${my(m.start, tz)} to ${my(m.end, tz)}`,
    start: m.start, end: m.end,
    antar: dashaChildren(m).map((a: DashaNode) => ({
      name: `${m.lord} – ${a.lord}`, lord: a.lord, range: `${dmy(a.start, tz)} to ${dmy(a.end, tz)}`,
      short: `${my(a.start, tz)} to ${my(a.end, tz)}`, start: a.start, end: a.end,
    })),
  }));
}

/* ---------- main ---------- */
export function buildKundli(raw: unknown, now: Date = new Date()): KundliResult {
  const { input, y, mo, d, h, mi, s } = parseInput(raw);
  const { place } = input;
  const tz = place.tz;

  const utc = new Date(zonedToUtc(y, mo, d, h, mi, tz).getTime() + s * 1000);
  if (!Number.isFinite(utc.getTime())) throw new InputError("We could not work out that birth time. Please check the details.");
  const c = computeChart(utc, place.la, place.lo, now);
  const { asc, moon } = c;

  // charts
  const occD1: Record<number, ChartHouse["items"]> = {}, occD9: Record<number, ChartHouse["items"]> = {};
  c.planets.forEach((p) => {
    (occD1[p.sign] ||= []).push({ abbr: ABBR[p.name], deg: Math.floor(p.deg) });
    (occD9[p.navamsa] ||= []).push({ abbr: ABBR[p.name] });
  });
  const d1 = houses(asc.sign, occD1, { abbr: "Asc", deg: Math.floor(asc.deg), asc: true });
  const d9 = houses(asc.navamsa, occD9, { abbr: "Asc", asc: true });

  // panchang, from the sidereal Sun and Moon at birth
  const sm = siderealSunMoon(utc);
  const tithi = tithiAt(sm.sun, sm.moon);
  const karana = karanaAt(sm.sun, sm.moon);
  const yoga = yogaAt(sm.sun, sm.moon).name;

  // Vedic day (vara) starts at sunrise: a birth before sunrise belongs to the previous weekday.
  const civilDow = new Date(Date.UTC(y, mo - 1, d)).getUTCDay();
  const dayStart = zonedToUtc(y, mo, d, 0, 0, tz);
  const sr = sunRiseSet(dayStart, place.la, place.lo);
  const varaDow = sr.rise !== null && utc.getTime() < sr.rise ? (civilDow + 6) % 7 : civilDow;

  const moonLord = INTERP.signs[moon.sign].lord;
  const placeText = place.online ? place.n : `${place.n}${place.r ? ", " + place.r.replace(/, India$/, "") : ""}`;
  const firstName = input.name.split(" ")[0];
  const hasSecs = s !== 0;

  const planets: KundliResult["planets"] = [
    { name: "Lagna", sign: asc.signName, deg: asc.dms, nak: `${asc.nak} ${asc.pada}`, nakLord: asc.nakLord, house: 1, strength: asc.states.includes("varg") ? STATE_NAME.varg : "" },
    ...c.planets.map((p) => ({ name: p.name, sign: p.signName, deg: p.dms, nak: `${p.nak} ${p.pada}`, nakLord: p.nakLord, house: p.house, strength: strength(p) })),
  ];

  return {
    v: 1,
    generatedAt: now.getTime(),
    input,
    firstName,
    headline: `${WEEKDAYS[civilDow]}, ${d} ${MONTHS_LONG[mo - 1]} ${y} · ${clock12(h, mi, s, hasSecs)} · ${placeText}`,
    tiles: [
      { key: "lagna", label: "Lagna (ascendant)", en: SIGNS[asc.sign], hi: SIGN_HI[asc.sign], sub: `${RASHI[asc.sign]} lagna, ruled by ${INTERP.signs[asc.sign].lord}` },
      { key: "moon", label: "Moon sign (rashi)", en: SIGNS[moon.sign], hi: SIGN_HI[moon.sign], sub: `${RASHI[moon.sign]} rashi, ruled by ${moonLord}` },
      { key: "nak", label: "Nakshatra", en: moon.nak, hi: NAK_HI[moon.nakIdx], sub: `Pada ${moon.pada}, ruled by ${moon.nakLord}` },
    ],
    details: [
      ["Name", input.name],
      ["Gender", input.gender || "Not stated"],
      ["Date of birth", `${d} ${MONTHS_LONG[mo - 1]} ${y}`],
      ["Day", WEEKDAYS[civilDow]],
      ["Time of birth", clock12(h, mi, s, true)],
      ["Place", placeText],
      ["Latitude, longitude", `${coord(place.la, "N", "S")}, ${coord(place.lo, "E", "W")}`],
      ["Time zone", zoneLabel(tz, utc.getTime())],
      ["Ayanamsa", `Lahiri ${prime(dms(c.ay))}`],
      ["Sunrise and sunset", sr.rise !== null && sr.set !== null ? `${hhmm(sr.rise, tz)} and ${hhmm(sr.set, tz)}` : "Not available at this latitude"],
    ],
    panchang: [
      ["Tithi", tithi.label],
      ["Vara", VARA[varaDow]],
      ["Nakshatra", `${moon.nak}, pada ${moon.pada}`],
      ["Yoga", yoga],
      ["Karana", karana],
      ["Varna", varnaOf(moon.sign)],
      ["Vashya", vashyaOf(moon.sign, moon.deg)],
      ["Yoni", yoniOf(moon.nakIdx)],
      ["Gana", ganaOf(moon.nakIdx)],
      ["Nadi", nadiOf(moon.nakIdx)],
    ],
    d1, d9,
    stand: standouts(c),
    planets,
    doshas: doshaCards(c),
    dasha: dashaOut(c, tz),
    nature: [
      { title: "Your basic nature", basis: `Based on your weekday (${WEEKDAYS[varaDow]})`, text: WEEKDAY_TRAIT[varaDow] },
      { title: "Your character", basis: `Based on your nakshatra (${moon.nak})`, text: INTERP.nakshatra[moon.nakIdx].essence },
      { title: "Your values", basis: `Based on your tithi (${tithi.label})`, text: TITHI_TRAIT[tithi.nameIdx] },
      { title: "Your habits", basis: `Based on your karana (${karana})`, text: KARANA_TRAIT[karana] },
      { title: "Your interests", basis: `Based on your yoga (${yoga})`, text: YOGA_TRAIT[yoga] },
    ],
  };
}
