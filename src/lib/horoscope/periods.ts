// Weekly, monthly and yearly horoscopes. All of it is derived from real planet positions:
// day scores come from the daily engine, and the longer views from the planets' changes of sign.
import { computeChart, siderealSunMoon } from "@/lib/kundli/engine";
import { DELHI, GOOD_HOUSES, MONTHS_EN, ORD_EN, PLANET_HI, SUPPORT, buildDay, istParts, type HoroscopeDay } from "./engine";
import { SIGN_INFO } from "./signs";

const DAY_MS = 864e5;
const WEEKDAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type Area = "love" | "career" | "money" | "health" | "overall";
export const AREAS: Area[] = ["overall", "love", "career", "money", "health"];
export const AREA_LABEL: Record<Area, string> = { overall: "Overall", love: "Love", career: "Career", money: "Money", health: "Health" };

export interface DayScore { label: string; weekday: string; scores: Record<Area, number>; moon: string }
export interface Ingress { planet: string; at: number; dateLabel: string; fromHouse: number; toHouse: number; good: boolean; note: string }
export interface SignPeriod {
  days: DayScore[];
  avg: Record<Area, number>;
  best: DayScore;
  careful: DayScore;
  strongest: Area;
  weakest: Area;
  ingresses: Ingress[];
}
export interface PeriodData { title: string; range: string; days: string[]; events: { planet: string; dateLabel: string; toSign: string }[]; signs: SignPeriod[] }

const SUPPORT_PLANETS = ["Sun", "Mars", "Mercury", "Venus", "Jupiter", "Saturn", "Rahu"] as const;
const FAST_PLANETS = ["Sun", "Mars", "Mercury", "Venus"] as const;

/** Sidereal sign of a planet at an instant. */
function signOf(planet: string, ms: number): number {
  const c = computeChart(new Date(ms), DELHI.lat, DELHI.lon, new Date(ms));
  if (planet === "Moon") return Math.floor(siderealSunMoon(new Date(ms)).moon / 30);
  return c.planets.find((p) => p.name === planet)!.sign;
}

function dateLabel(ms: number) {
  const t = istParts(ms);
  return `${t.d} ${MONTHS_EN[t.m - 1].slice(0, 3)}`;
}

/** Instants (IST noon) for each day between two IST dates, inclusive. */
function istDays(from: { y: number; m: number; d: number }, count: number) {
  const out: { y: number; m: number; d: number; noon: number }[] = [];
  for (let i = 0; i < count; i++) {
    const noon = Date.UTC(from.y, from.m - 1, from.d) + i * DAY_MS + 12 * 36e5 - 5.5 * 36e5;
    const t = istParts(noon);
    out.push({ y: t.y, m: t.m, d: t.d, noon });
  }
  return out;
}

/** Find when a planet crosses into a different sign between two instants (binary search). */
function crossing(planet: string, a: number, b: number): number {
  const sa = signOf(planet, a);
  let lo = a, hi = b;
  while (hi - lo > 15 * 60e3) { const mid = (lo + hi) / 2; if (signOf(planet, mid) === sa) lo = mid; else hi = mid; }
  return hi;
}

/** Changes of sign for the given planets during [start, end), checked every `stepDays`. */
function ingressesBetween(planets: readonly string[], start: number, end: number, stepDays: number) {
  const out: { planet: string; at: number; from: number; to: number }[] = [];
  for (const pl of planets) {
    let prevT = start, prev = signOf(pl, prevT);
    for (let t = start + stepDays * DAY_MS; ; t += stepDays * DAY_MS) {
      const tt = Math.min(t, end);
      const cur = signOf(pl, tt);
      if (cur !== prev) { out.push({ planet: pl, at: crossing(pl, prevT, tt), from: prev, to: cur }); }
      prev = cur; prevT = tt;
      if (tt >= end) break;
    }
  }
  return out.sort((a, b) => a.at - b.at);
}

const houseFrom = (from: number, to: number) => ((to - from + 12) % 12) + 1;

function periodFromDays(days: { y: number; m: number; d: number; noon: number }[], title: string, range: string): PeriodData {
  const built: HoroscopeDay[] = days.map((d) => buildDay(d.y, d.m, d.d));
  const events = ingressesBetween(FAST_PLANETS, days[0].noon - 12 * 36e5, days[days.length - 1].noon + 12 * 36e5, 1);
  const signs: SignPeriod[] = SIGN_INFO.map((_, i) => {
    const dayScores: DayScore[] = built.map((b, k) => {
      const sc = b.signs[i].scores;
      return { label: dateLabel(days[k].noon), weekday: WEEKDAY_SHORT[new Date(days[k].noon + 5.5 * 36e5).getUTCDay()], moon: b.signs[i].whyEn[0], scores: { overall: sc.overall, love: sc.love, career: sc.career, money: sc.money, health: sc.health } };
    });
    const avg = Object.fromEntries(AREAS.map((a) => [a, Math.round(dayScores.reduce((s, d) => s + d.scores[a], 0) / dayScores.length)])) as Record<Area, number>;
    const best = dayScores.reduce((a, b) => (b.scores.overall > a.scores.overall ? b : a));
    const careful = dayScores.reduce((a, b) => (b.scores.overall < a.scores.overall ? b : a));
    const ranked = AREAS.filter((a) => a !== "overall").sort((a, b) => avg[b] - avg[a]);
    const ingresses: Ingress[] = events.map((e) => {
      const toHouse = houseFrom(i, e.to);
      const good = GOOD_HOUSES[e.planet as keyof typeof GOOD_HOUSES].includes(toHouse);
      const topic = (SUPPORT as Record<string, { en: string }>)[e.planet]?.en ?? (e.planet === "Mercury" ? "communication and learning" : "your plans");
      return {
        planet: e.planet, at: e.at, dateLabel: dateLabel(e.at), fromHouse: houseFrom(i, e.from), toHouse, good,
        note: `${e.planet} moves into your ${ORD_EN[toHouse]} house, ${good ? "supportive" : "not supportive"} for ${topic}.`,
      };
    });
    return { days: dayScores, avg, best, careful, strongest: ranked[0], weakest: ranked[ranked.length - 1], ingresses };
  });
  return {
    title, range, days: built.map((_, k) => dateLabel(days[k].noon)),
    events: events.map((e) => ({ planet: e.planet, dateLabel: dateLabel(e.at), toSign: SIGN_INFO[e.to].en })),
    signs,
  };
}

/** The next seven days, starting today (IST). */
export function weeklyHoroscopes(now: Date = new Date()): PeriodData {
  const t = istParts(now.getTime());
  const days = istDays(t, 7);
  return periodFromDays(days, "Weekly horoscope", `${dateLabel(days[0].noon)} to ${dateLabel(days[6].noon)} ${istParts(days[6].noon).y}`);
}

/** The rest of the current month and the start of the next, 30 days from today (IST). */
export function monthlyHoroscopes(now: Date = new Date()): PeriodData {
  const t = istParts(now.getTime());
  const days = istDays(t, 30);
  return periodFromDays(days, "Monthly horoscope", `${dateLabel(days[0].noon)} to ${dateLabel(days[29].noon)} ${istParts(days[29].noon).y}`);
}

/* ---------------------------------------------------------------- Yearly (slow planets) */

export interface YearStretch { from: string; to: string; house: number; good: boolean }
export interface YearPlanet { planet: string; stretches: YearStretch[]; summary: string }
export interface SignYear { planets: YearPlanet[]; saturnNote: string; supportive: number; highlights: string[] }
export interface YearData { year: number; events: { planet: string; dateLabel: string; toSign: string }[]; signs: SignYear[] }

const SLOW: { planet: string; topic: string; stepDays: number }[] = [
  { planet: "Jupiter", topic: "growth, luck and guidance", stepDays: 5 },
  { planet: "Saturn", topic: "discipline, work and long-term results", stepDays: 7 },
  { planet: "Rahu", topic: "ambition, change and bold moves", stepDays: 7 },
];

export function yearlyHoroscopes(year = 2027): YearData {
  const start = Date.UTC(year, 0, 1) - 5.5 * 36e5;
  const end = Date.UTC(year + 1, 0, 1) - 5.5 * 36e5;
  const per: Record<string, { at: number; from: number; to: number }[]> = {};
  const startSign: Record<string, number> = {};
  for (const s of SLOW) { per[s.planet] = ingressesBetween([s.planet], start, end, s.stepDays); startSign[s.planet] = signOf(s.planet, start + 3 * 36e5); }
  const events = SLOW.flatMap((s) => per[s.planet].map((e) => ({ planet: s.planet, at: e.at, toSign: SIGN_INFO[e.to].en })))
    .sort((a, b) => a.at - b.at).map((e) => ({ planet: e.planet, dateLabel: `${dateLabel(e.at)} ${istParts(e.at).y}`, toSign: e.toSign }));

  const signs: SignYear[] = SIGN_INFO.map((_, i) => {
    let supportiveDays = 0;
    const highlights: string[] = [];
    const planets: YearPlanet[] = SLOW.map((s) => {
      const marks = [start, ...per[s.planet].map((e) => e.at), end];
      const signsIn = [startSign[s.planet], ...per[s.planet].map((e) => e.to)];
      const stretches: YearStretch[] = signsIn.map((sg, k) => {
        const house = houseFrom(i, sg);
        const good = GOOD_HOUSES[s.planet as keyof typeof GOOD_HOUSES].includes(house);
        if (good) supportiveDays += (marks[k + 1] - marks[k]) / DAY_MS;
        return { from: k === 0 ? "1 Jan" : dateLabel(marks[k]), to: k === signsIn.length - 1 ? "31 Dec" : dateLabel(marks[k + 1]), house, good };
      });
      const goodShare = stretches.reduce((sum, st, k) => sum + (st.good ? (marks[k + 1] - marks[k]) : 0), 0) / (end - start);
      const tone = goodShare > 0.75 ? "mostly supportive" : goodShare > 0.35 ? "a mixed influence" : goodShare > 0 ? "mostly challenging" : "challenging throughout";
      const lastTwo = stretches.length > 1 ? ` It changes house on ${stretches[1].from}.` : "";
      if (stretches.length > 1) highlights.push(`${s.planet} changes house on ${stretches[1].from}, from your ${ORD_EN[stretches[0].house]} to your ${ORD_EN[stretches[1].house]} house.`);
      return { planet: s.planet, stretches, summary: `${s.planet} (${s.topic}) is ${tone} for you in ${year}.${lastTwo}` };
    });
    const satStretches = planets[1].stretches;
    const phases = satStretches.map((st) => (st.house === 12 ? "the first phase of Sade Sati" : st.house === 1 ? "the peak of Sade Sati" : st.house === 2 ? "the last phase of Sade Sati" : st.house === 4 ? "Kantaka Shani dhaiya" : st.house === 8 ? "Ashtama Shani dhaiya" : null));
    const active = phases.map((ph, k) => (ph ? `${ph} (${satStretches[k].from} to ${satStretches[k].to})` : null)).filter(Boolean);
    const saturnNote = active.length ? `Saturn is running ${active.join(", then ")}. Keep to routine, be patient with money and health, and avoid shortcuts.` : "You are not in Sade Sati or Shani dhaiya in this year.";
    return { planets, saturnNote, supportive: Math.round((supportiveDays / (3 * 365)) * 100), highlights };
  });
  return { year, events, signs };
}
