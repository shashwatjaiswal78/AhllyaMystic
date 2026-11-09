// Weekly, monthly and yearly horoscopes. All of it is derived from real planet positions:
// day scores come from the daily engine, and the longer views from the planets' changes of sign.
import { computeChart, siderealSunMoon } from "@/lib/kundli/engine";
import { DELHI, GOOD_HOUSES, GRAHA, MONTHS_EN, ORD_EN, SIGN_LORD, SUPPORT, buildDay, istParts, type HoroscopeDay } from "./engine";
import { areaHighlight, monthText, periodSummary, tone, weekText, type AreaId } from "./narrative";
import { SIGN_INFO } from "./signs";

const DAY_MS = 864e5;
const WEEKDAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const WEEKDAY_LONG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

type Area = "love" | "career" | "money" | "health" | "overall";
export const AREAS: Area[] = ["overall", "love", "career", "money", "health"];
export const AREA_LABEL: Record<Area, string> = { overall: "Overall", love: "Love", career: "Career", money: "Money", health: "Health" };

export interface DayScore { label: string; weekday: string; full: string; scores: Record<Area, number>; moon: string; luckyCol: string; luckyNum: number }
export interface WeekRow { label: string; range: string; score: number; text: string }
export interface Highlight { area: AreaId; label: string; score: number; text: string }
export interface Ingress { planet: string; at: number; dateLabel: string; fromHouse: number; toHouse: number; good: boolean; note: string }
export interface SignPeriod {
  days: DayScore[];
  avg: Record<Area, number>;
  best: DayScore;
  careful: DayScore;
  strongest: Area;
  weakest: Area;
  ingresses: Ingress[];
  summary: string;
  luckyDay: string;
  luckyColour: string;
  luckyNumbers: string;
  weeks: WeekRow[];
  highlights: Highlight[];
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
      const wd = new Date(days[k].noon + 5.5 * 36e5).getUTCDay();
      const t = istParts(days[k].noon);
      return { label: dateLabel(days[k].noon), weekday: WEEKDAY_SHORT[wd], full: `${WEEKDAY_LONG[wd]}, ${t.d} ${MONTHS_EN[t.m - 1]}`, moon: b.signs[i].whyEn[0], luckyCol: b.signs[i].lucky.col, luckyNum: b.signs[i].lucky.num, scores: { overall: sc.overall, love: sc.love, career: sc.career, money: sc.money, health: sc.health } };
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
    // Lucky colour and numbers are the ones that came up most often over the period.
    const tally = <T,>(xs: T[]) => { const m = new Map<T, number>(); xs.forEach((x) => m.set(x, (m.get(x) ?? 0) + 1)); return [...m.entries()].sort((a, b) => b[1] - a[1]); };
    const luckyColour = tally(dayScores.map((d) => d.luckyCol))[0][0];
    const luckyNumbers = tally(dayScores.map((d) => d.luckyNum)).slice(0, 2).map((e) => e[0]).sort((a, b) => a - b).join(", ");
    // Week-to-week rows: the period split into blocks of seven days.
    const weeks: WeekRow[] = [];
    if (dayScores.length > 7) {
      const blocks = 4;
      for (let b = 0; b < blocks; b++) {
        const chunk = dayScores.slice(Math.round((b * dayScores.length) / blocks), Math.round(((b + 1) * dayScores.length) / blocks));
        const score = Math.round(chunk.reduce((sum, d) => sum + d.scores.overall, 0) / chunk.length / 5) * 5;
        const top = chunk.reduce((a, c) => (c.scores.overall > a.scores.overall ? c : a));
        const area = (["love", "career", "money", "health"] as const).reduce((a, c) => (chunk.reduce((n, d) => n + d.scores[c], 0) > chunk.reduce((n, d) => n + d.scores[a], 0) ? c : a));
        weeks.push({ label: `Week ${b + 1}`, range: `${chunk[0].label} to ${chunk[chunk.length - 1].label}`, score, text: weekText(score, AREA_LABEL[area], top.full) });
      }
    }
    const highlights = (["career", "love", "money", "health"] as const).map((a) => areaHighlight(a, avg[a]));
    const summary = periodSummary({
      noun: dayScores.length <= 7 ? "week" : "month", sign: SIGN_INFO[i].en, avg: avg.overall, strongest: AREA_LABEL[ranked[0]], weakest: AREA_LABEL[ranked[ranked.length - 1]],
      bestFull: best.full, carefulFull: careful.full, firstChange: ingresses[0] ? `On ${ingresses[0].dateLabel}: ${ingresses[0].note}` : undefined,
    });
    return { days: dayScores, avg, best, careful, strongest: ranked[0], weakest: ranked[ranked.length - 1], ingresses, summary, luckyDay: best.full, luckyColour, luckyNumbers, weeks, highlights };
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

export interface YearStretch { from: string; to: string; house: number; good: boolean; pct: number }
export interface YearPlanet { planet: string; stretches: YearStretch[]; summary: string }
export interface MonthRow { label: string; score: number; text: string }
export interface SignYear {
  planets: YearPlanet[]; saturnNote: string; supportive: number; highlights: string[];
  score: number; luckyMonth: string; luckyColour: string; luckyNumbers: string; summary: string; months: MonthRow[];
}
export interface YearData { year: number; label: string; events: { planet: string; dateLabel: string; toSign: string }[]; signs: SignYear[] }

const SLOW: { planet: string; topic: string; stepDays: number }[] = [
  { planet: "Jupiter", topic: "growth, luck and guidance", stepDays: 5 },
  { planet: "Saturn", topic: "discipline, work and long-term results", stepDays: 7 },
  { planet: "Rahu", topic: "ambition, change and bold moves", stepDays: 7 },
];

/** A calendar year, for example 2027. */
export function yearlyHoroscopes(year = 2027): YearData {
  return yearlyBetween(Date.UTC(year, 0, 1) - 5.5 * 36e5, Date.UTC(year + 1, 0, 1) - 5.5 * 36e5, String(year), year, false);
}

/** The 12 months from today (IST). */
export function next12Months(now: Date = new Date()): YearData {
  const t = istParts(now.getTime());
  const start = Date.UTC(t.y, t.m - 1, t.d) - 5.5 * 36e5;
  return yearlyBetween(start, start + 365 * DAY_MS, "Next 12 months", t.y, true);
}

function yearlyBetween(start: number, end: number, label: string, year: number, rolling: boolean): YearData {
  const lab = (ms: number) => (rolling ? `${dateLabel(ms)} ${istParts(ms).y}` : dateLabel(ms));
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
        return {
          from: k === 0 ? (rolling ? lab(start) : "1 Jan") : lab(marks[k]),
          to: k === signsIn.length - 1 ? (rolling ? lab(end - 1) : "31 Dec") : lab(marks[k + 1]),
          house, good, pct: ((marks[k + 1] - marks[k]) / (end - start)) * 100,
        };
      });
      const goodShare = stretches.reduce((sum, st, k) => sum + (st.good ? (marks[k + 1] - marks[k]) : 0), 0) / (end - start);
      const tone = goodShare > 0.75 ? "mostly supportive" : goodShare > 0.35 ? "a mixed influence" : goodShare > 0 ? "mostly challenging" : "challenging throughout";
      const lastTwo = stretches.length > 1 ? ` It changes house on ${stretches[1].from}.` : "";
      if (stretches.length > 1) highlights.push(`${s.planet} changes house on ${stretches[1].from}, from your ${ORD_EN[stretches[0].house]} to your ${ORD_EN[stretches[1].house]} house.`);
      return { planet: s.planet, stretches, summary: `${s.planet} (${s.topic}) is ${tone} for you ${rolling ? "over the next 12 months" : "in " + year}.${lastTwo}` };
    });
    const satStretches = planets[1].stretches;
    const phases = satStretches.map((st) => (st.house === 12 ? "the first phase of Sade Sati" : st.house === 1 ? "the peak of Sade Sati" : st.house === 2 ? "the last phase of Sade Sati" : st.house === 4 ? "Kantaka Shani dhaiya" : st.house === 8 ? "Ashtama Shani dhaiya" : null));
    const active = phases.map((ph, k) => (ph ? `${ph} (${satStretches[k].from} to ${satStretches[k].to})` : null)).filter(Boolean);
    const saturnNote = active.length ? `Saturn is running ${active.join(", then ")}. Keep to routine, be patient with money and health, and avoid shortcuts.` : "You are not in Sade Sati or Shani dhaiya in this year.";
    // Month by month: Jupiter, Saturn and Rahu decide the tone; each supportive planet lifts the score.
    const WEIGHT = [25, 20, 10];
    const m0 = istParts(start + 3 * 36e5);
    const months: MonthRow[] = [];
    for (let m = 0; m < 12; m++) {
      const yy = m0.y + Math.floor((m0.m - 1 + m) / 12), mm = (m0.m - 1 + m) % 12;
      const mid = Math.min(Math.max(Date.UTC(yy, mm, 15, 12) - 5.5 * 36e5, start), end - 1);
      const state = planets.map((pl, pi) => {
        const marks = [start, ...per[SLOW[pi].planet].map((e) => e.at), end];
        let k = 0; while (k < pl.stretches.length - 1 && mid >= marks[k + 1]) k++;
        return { planet: pl.planet, house: ORD_EN[pl.stretches[k].house].replace(" house", ""), good: pl.stretches[k].good };
      });
      const score = Math.round((35 + state.reduce((sum, st, pi) => sum + (st.good ? WEIGHT[pi] : 0), 0)) / 5) * 5;
      months.push({ label: `${MONTHS_EN[mm]} ${yy}`, score, text: monthText(score, state) });
    }
    const score = Math.round(months.reduce((n, x) => n + x.score, 0) / 12 / 5) * 5;
    const bestMonth = months.reduce((a, b) => (b.score > a.score ? b : a));
    const lord = SIGN_LORD[i];
    const rollingNote = rolling ? "The next 12 months" : `${year}`;
    const summary = `${rollingNote} look${rolling ? "" : "s"} ${tone(score)} for ${SIGN_INFO[i].en} natives. ${saturnNote} ${bestMonth.label} is the most supportive month.`;
    return { planets, saturnNote, supportive: Math.round((supportiveDays / (3 * 365)) * 100), highlights, score, luckyMonth: bestMonth.label, luckyColour: GRAHA[lord].col, luckyNumbers: [GRAHA[lord].num, GRAHA.Jupiter.num].filter((n, k, a) => a.indexOf(n) === k).join(", "), summary, months };
  });
  return { year, label, events, signs };
}
