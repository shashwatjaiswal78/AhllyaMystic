// Mobile number numerology engine: Ahllya course rules (adjacent digit pairs, repeats, total, keep or change verdict,
// and a search for better endings). Ported from the "Mobile Number Numerology Calculator" Artifact; rules, weights
// and wording are unchanged.
import { reduce } from "./core";

/* Adjacent digit pairs: b benefic, n neutral, m malefic. Order matters (12 is not 21). */
const PAIRS: Record<string, "b" | "n" | "m"> = { "12": "b", "13": "b", "31": "b", "15": "b", "51": "b", "25": "b", "52": "b", "29": "b", "92": "b", "37": "b", "73": "b", "38": "b", "83": "b", "47": "b", "74": "b", "57": "b", "75": "b", "78": "b", "87": "b", "69": "b", "96": "b", "21": "n", "17": "n", "71": "n", "19": "n", "91": "n", "24": "n", "42": "n", "35": "n", "53": "n", "36": "n", "63": "n", "39": "n", "93": "n", "49": "n", "94": "n", "56": "n", "65": "n", "58": "n", "85": "n", "59": "n", "95": "n", "79": "n", "97": "n", "14": "m", "41": "m", "16": "m", "61": "m", "18": "m", "81": "m", "23": "m", "32": "m", "26": "m", "62": "m", "27": "m", "72": "m", "28": "m", "82": "m", "34": "m", "43": "m", "45": "m", "54": "m", "46": "m", "64": "m", "48": "m", "84": "m", "67": "m", "76": "m", "68": "m", "86": "m", "89": "m", "98": "m" };

/* Course Chapter 14 compatibility chart. 4* and 8* are enemies for 4 and 8; 7* under 3 is neutral. */
const CHART: Record<number, { f: number[]; e: number[] }> = {
  1: { f: [1, 2, 3, 5, 6, 9], e: [8] }, 2: { f: [1, 2, 3, 5], e: [8, 4, 9] }, 3: { f: [1, 2, 3, 5], e: [6] },
  4: { f: [1, 5, 7, 6], e: [2, 9, 4, 8] }, 5: { f: [1, 2, 3, 5, 6], e: [] }, 6: { f: [1, 5, 6, 7], e: [3] },
  7: { f: [1, 3, 5, 4, 6], e: [] }, 8: { f: [5, 3, 6, 7], e: [1, 2, 4, 8] }, 9: { f: [1, 5, 3], e: [4, 2] },
};
export type Rel = "friend" | "neutral" | "enemy";
export function relOf(a: number, b: number): Rel {
  const c = CHART[a];
  if (!c) return "neutral";
  return c.f.includes(b) ? "friend" : c.e.includes(b) ? "enemy" : "neutral";
}
const RELPTS: Record<Rel, number> = { friend: 1, neutral: 0.55, enemy: 0.12 };
const GOOD_TOTALS = [1, 3, 5, 6];
export const AVOID_DIGITS = [2, 4, 8];
export const COMP_GOOD: Record<number, number[]> = { 1: [46, 64, 37, 55], 6: [42, 24, 33, 60], 5: [41, 32, 50, 59], 3: [66, 39, 30] };

/** 10 digits, with a leading +91, 91 or 0 stripped. */
export function clean(raw: unknown): string {
  let d = String(raw || "").replace(/\D/g, "");
  if (d.length === 12 && d.indexOf("91") === 0) d = d.slice(2);
  if (d.length === 11 && d.charAt(0) === "0") d = d.slice(1);
  return d;
}

export interface PairInfo { a: number; b: number; i: number; j: number; p: { a: number; b: number; cls: "b" | "n" | "m" } | null }
export interface Analysis {
  digits: number[]; sum: number; total: number; trail: number[];
  counts: Record<number, number>; mult: { d: number; count: number; run: number; level: string }[];
  pairs: PairInfo[]; nb: number; nn: number; nm: number;
  tier: "good" | "avoid" | "mid"; relM: Rel; relB: Rel; score: number; band: string;
  breakdown: { label: string; detail: string; points: number; max: number }[];
}

function pairOf(a: number, b: number) {
  if (a === b || a === 0 || b === 0) return null;
  const c = PAIRS["" + a + b];
  return c ? { a, b, cls: c } : null;
}

function multiples(ds: number[]) {
  const counts: Record<number, number> = {}, run: Record<number, number> = {};
  let cur = 0, prev = -1;
  const out: { d: number; count: number; run: number; level: string }[] = [];
  for (let i = 0; i <= 9; i++) { counts[i] = 0; run[i] = 0; }
  ds.forEach((d) => { counts[d]++; cur = d === prev ? cur + 1 : 1; prev = d; if (cur > run[d]) run[d] = cur; });
  for (let d = 1; d <= 9; d++) {
    const c = counts[d];
    if (c < 2) continue;
    const lvl = run[d] >= 3 || c >= 4 ? "High" : c === 3 ? "Medium" : "Low";
    out.push({ d, count: c, run: run[d], level: lvl });
  }
  return { counts, run, list: out };
}

export function analyseNumber(num: string, mk: number, bk: number): Analysis {
  const ds = num.split("").map(Number);
  const sum = ds.reduce((a, b) => a + b, 0), red = reduce(sum), total = red.value;
  const nzi: number[] = [];
  ds.forEach((d, i) => { if (d > 0) nzi.push(i); });
  const pairs: PairInfo[] = [];
  for (let k = 0; k + 1 < nzi.length; k++) {
    const i1 = nzi[k], j1 = nzi[k + 1];
    pairs.push({ a: ds[i1], b: ds[j1], i: i1, j: j1, p: pairOf(ds[i1], ds[j1]) });
  }
  let nb = 0, nn = 0, nm = 0;
  pairs.forEach((e) => { const p = e.p; if (!p) return; if (p.cls === "b") nb++; else if (p.cls === "n") nn++; else nm++; });
  const mu = multiples(ds.filter((d) => d > 0));
  mu.counts[0] = ds.filter((d) => d === 0).length;
  const relM = relOf(mk, total), relB = relOf(bk, total);
  const tier = GOOD_TOTALS.includes(total) ? "good" : AVOID_DIGITS.includes(total) ? "avoid" : "mid";
  const c1 = tier === "good" ? 30 : tier === "mid" ? 17 : 6;
  const c2 = Math.round(20 * RELPTS[relM]), c3 = Math.round(10 * RELPTS[relB]);
  const c4 = Math.max(0, Math.min(25, 25 - 8 * nm + Math.min(nb, 3) * 2));
  let pen = 0;
  AVOID_DIGITS.forEach((d) => { const c = mu.counts[d]; if (c > 1) pen += 3 * (c - 1); if (c >= 3) pen += 2; });
  const c5 = Math.max(0, 15 - pen);
  let score = c1 + c2 + c3 + c4 + c5;
  if (nm >= 3) score = Math.min(score, 59); else if (nm > 0) score = Math.min(score, 77);
  const band = score >= 78 ? "strong" : score >= 60 ? "moderate" : score >= 42 ? "weak" : "conflict";
  return {
    digits: ds, sum, total, trail: red.trail, counts: mu.counts, mult: mu.list, pairs, nb, nn, nm, tier, relM, relB, score, band,
    breakdown: [
      { label: "Mobile total " + total, detail: tier === "good" ? "strong" : tier === "mid" ? "mixed" : "weak", points: c1, max: 30 },
      { label: "Total " + total + " vs your Moolank " + mk, detail: relM, points: c2, max: 20 },
      { label: "Total " + total + " vs your Bhagyank " + bk, detail: relB, points: c3, max: 10 },
      { label: "Inside pairs (" + nb + " benefic, " + nn + " neutral, " + nm + " malefic)", detail: nm === 0 ? "strong" : nm === 1 ? "mixed" : "weak", points: c4, max: 25 },
      { label: "Repeats of 2, 4 and 8", detail: c5 >= 15 ? "strong" : c5 >= 9 ? "mixed" : "weak", points: c5, max: 15 },
    ],
  };
}

const BAD_TOTALS = [2, 4, 7, 8];
const SEVERE: Record<string, number> = { "14": 1, "41": 1, "34": 1, "43": 1, "45": 1, "54": 1, "48": 1, "84": 1, "68": 1, "86": 1, "89": 1, "98": 1 };
export interface TotalStatus { ok: boolean; soft?: boolean; why?: string }
export function totalStatus(t: number, mk: number, bk: number): TotalStatus {
  if (BAD_TOTALS.includes(t)) return { ok: false, why: "avoid" };
  if (t === 9) return mk === 1 || bk === 1 ? { ok: true, soft: true, why: "nine" } : { ok: false, why: "nine" };
  if ((t === 3 && (mk === 6 || bk === 6)) || (t === 6 && (mk === 3 || bk === 3))) return { ok: false, why: "clash" };
  return { ok: true };
}
export function severeCount(an: Analysis): number {
  let c = 0;
  an.pairs.forEach((e) => { if (e.p && e.p.cls === "m" && SEVERE["" + e.a + e.b]) c++; });
  return c;
}

export const QUAL: Record<number, string> = { 1: "confidence and authority", 2: "emotion and sensitivity", 3: "wisdom and principles", 4: "restlessness and delay", 5: "speed and communication", 6: "comfort and charm", 7: "withdrawal and overthinking", 8: "heaviness and delay", 9: "anger and drive" };
const WHY_AVOID: Record<number, string> = {
  2: "A total of 2 makes a person more emotional and sensitive. It is hard to stay level in work and relationships when feelings run the show, and a working person needs steadiness and judgement.",
  4: "A total of 4 brings restlessness, delay and obstacles. Work and results come slower and with more friction than the effort deserves.",
  7: "A total of 7 pulls a person inward, into overthinking and distance. It can leave relationships feeling cold and slow down income and deals.",
  8: "A total of 8 brings heaviness, delay and struggle. Gains come late and cost more effort than they should.",
  9: "A total of 9 adds heat, anger and a rush to act. It only works when a 1 in your Moolank or Bhagyank gives that energy direction, and yours does not.",
};
const WHY_GOOD: Record<number, string> = {
  1: "Your total of 1 adds confidence and authority, which supports work and relationships.",
  3: "Your total of 3 adds wisdom and sound judgement, which supports work and relationships.",
  5: "Your total of 5 adds speed, communication and sharp thinking, which supports work and money.",
  6: "Your total of 6 adds charm, comfort and warmth, which supports relationships and client work.",
  9: "Your total of 9 works because your 1 gives its energy direction and authority.",
};
const AMP_WATCH: Record<number, string> = { 1: "ego", 3: "preaching and rigidity", 5: "restlessness", 6: "overindulgence", 9: "temper" };

export type Level = "definite" | "recommended" | "keepcare" | "keep";
export interface Decision { level: Level; ts: TotalStatus; sv: number; why: string[] }

export function decide(an: Analysis, mk: number, bk: number): Decision {
  const ts = totalStatus(an.total, mk, bk), sv = severeCount(an), nm = an.nm, t = an.total;
  let level: Level;
  const why: string[] = [];
  if (nm >= 4) level = "definite";
  else if (!ts.ok && nm >= 1) level = "definite";
  else if (!ts.ok || sv >= 1 || nm === 3) level = "recommended";
  else if (nm >= 1 || ts.soft) level = "keepcare";
  else level = "keep";
  let hv = 0, hv2 = 0;
  AVOID_DIGITS.forEach((d) => { if (an.counts[d] >= 3) hv++; else if (an.counts[d] === 2) hv2++; });
  if (hv && (level === "keep" || level === "keepcare")) level = "recommended";
  else if (hv2 && level === "keep") level = "keepcare";
  const same = mk === t || bk === t, which = mk === t ? "Moolank" : "Bhagyank";
  if (!ts.ok) {
    if (ts.why === "avoid" || ts.why === "nine") {
      let w = WHY_AVOID[t];
      if (ts.why === "avoid" && same) w += " Your " + which + " is also " + t + ", so you already carry this and the number piles more on.";
      why.push(w);
    } else {
      const other = t === 3 ? 6 : 3;
      why.push("A total of " + t + " pulls against the " + other + " in your " + (mk === other ? "Moolank" : "Bhagyank") + ". " + (t === 3 ? "Principles and judgement" : "Comfort and pleasure") + " are pushed against " + (t === 3 ? "comfort and pleasure" : "principles and judgement") + ", so you end up pulled in two directions.");
    }
  } else {
    let g = WHY_GOOD[t] || "Your total of " + t + " suits your birth numbers.";
    if (ts.soft === undefined && same && AMP_WATCH[t]) g += " Your " + which + " is also " + t + ", so it doubles up a quality you already carry. Keep an eye on " + AMP_WATCH[t] + ".";
    why.push(g);
  }
  if (nm >= 3) why.push(nm + " of the combinations inside your number work against you.");
  else if (nm > 0) why.push(nm === 1 ? "One combination inside your number works against you." : "Two combinations inside your number work against you.");
  else why.push("The combinations inside your number sit well together.");
  if (hv) why.push("Some digits repeat three or more times, which strengthens their heavier side.");
  else if (hv2) why.push("A digit repeats, which adds some weight.");
  if (sv >= 1) why.push("One or more of those combinations carries a serious effect on health or wellbeing.");
  return { level, ts, sv, why };
}

export interface Variant { number: string; total: number; sum: number; score: number; nm: number; changed: number; cg: number }

/** Better endings: the first seven digits stay, the last three are searched (000 to 999). */
export function variants(num: string, mk: number, bk: number, limit: number): Variant[] {
  const cur = analyseNumber(num, mk, bk);
  const cs = totalStatus(cur.total, mk, bk);
  const curOk = cs.ok && !cs.soft ? true : false;
  const base = num.slice(0, 7);
  const out: Variant[] = [];
  for (let a = 0; a <= 999; a++) {
    const tail = ("00" + a).slice(-3), cand = base + tail;
    if (cand === num) continue;
    const an = analyseNumber(cand, mk, bk), ts = totalStatus(an.total, mk, bk);
    if (!ts.ok || ts.soft || severeCount(an) > 0) continue;
    if (!(an.nm < cur.nm || (!curOk && an.nm <= cur.nm))) continue;
    let changed = 0;
    for (let i = 0; i < 3; i++) if (tail.charAt(i) !== num.charAt(7 + i)) changed++;
    const cg = (COMP_GOOD[an.total] || []).includes(an.sum) ? 1 : 0;
    out.push({ number: cand, total: an.total, sum: an.sum, score: an.score, nm: an.nm, changed, cg });
  }
  out.sort((x, y) => x.nm - y.nm || y.score - x.score || y.cg - x.cg || x.changed - y.changed);
  const seen: Record<string, number> = {};
  const res: Variant[] = [];
  out.forEach((o) => { if (res.length < limit && !seen[o.total + ":" + o.sum]) { seen[o.total + ":" + o.sum] = 1; res.push(o); } });
  out.forEach((o) => { if (res.length < limit && !res.includes(o)) res.push(o); });
  return res;
}

/* Face-value effects of each total on health, career, love and money. */
export const EFFECTS: Record<number, { health: string; career: string; love: string; money: string }> = {
  1: { health: "Strong vitality, but pushing too hard shows up as heat, headaches and tension.", career: "Leadership, authority and senior or government-linked roles. Ego can clash with colleagues.", love: "Proud and protective, can come across as dominating. Needs to listen more.", money: "Steady earning that rises with position and authority." },
  2: { health: "Highly sensitive to stress. Mood and sleep swing, and the body follows the mind.", career: "Suits caring, creative and supportive work. Decisions can come slowly.", love: "Warm and devoted, but easily hurt and quick to worry.", money: "Income arrives through people and relationships. It can be uneven and is spent on emotion." },
  3: { health: "Generally stable. Watch weight, sluggishness and long sitting hours.", career: "Advice, teaching, consulting and any work where people listen to you.", love: "Respectful, mature and family minded. Relationships tend to be steady.", money: "Knowledge turns into income. Growth is gradual rather than sudden." },
  4: { health: "Restlessness, headaches and tension that comes and goes. Digestion and joints can complain.", career: "Delays and obstacles before results. Better for unconventional or technical work than for routine commerce.", love: "Misunderstandings and unusual circumstances in relationships.", money: "Irregular flow, with gains arriving late or in bursts." },
  5: { health: "Nervous energy and restlessness. Rest and routine matter.", career: "Sales, media, trade and communication. The most natural total for quick deals.", love: "Lively and talkative, but mixed signals and duality can creep in.", money: "Strong flow through conversation, networks and deals." },
  6: { health: "Usually comfortable. Indulgence in food and rest is the thing to watch.", career: "Client-facing, creative, hospitality and luxury-linked work.", love: "Attractive and sociable, with many connections. Commitment needs attention.", money: "Comfort and cash flow, with expenses that rise to match." },
  7: { health: "Overthinking and anxiety wear on sleep and mood.", career: "Research, analysis, healing and advisory work. Harder for volume sales.", love: "Reserved and private. Partners can feel distance.", money: "Skill comes before money, so income is modest and slow to build." },
  8: { health: "Fatigue and slow, long-running niggles, especially joints and bones.", career: "Delay first, then lasting gains. Suits law, land and property.", love: "Heavy with duty and delay. Warmth is slow to show.", money: "Late and hard-earned gains, held for a long time." },
  9: { health: "Heat, anger and pressure on blood and nerves. Injuries from rushing.", career: "Action, competition and protective or physical work.", love: "Passionate but argumentative. Tempers flare easily.", money: "A sharp business mind, with a risk of debt if spending runs ahead." },
};
