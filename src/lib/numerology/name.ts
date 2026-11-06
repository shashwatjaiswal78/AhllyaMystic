// Builds the Free Name Number result: validates the details, runs the numerology engine and returns everything the
// /name-number page shows, already worded. Runs on the server only.
// Wording follows the "Name Numerology Calculator" Artifact; the paid-report call to action points at the site's own
// report page instead of the artifact's standalone checkout, and the corrected spellings stay on the server (the page
// only gets them masked, as the artifact shows them).
import { analyse, personalYear } from "./name-engine";
import { CONTENT as C } from "./name-content";
import type { Dob } from "./core";

export class NameInputError extends Error {}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WA = "919129237566";

export interface Row { title: string; text: string; value: number; working: string }

export interface NameResult {
  v: 1;
  generatedAt: number;
  input: { name: string; gender: string; dob: Dob };
  firstName: string;
  verdict: {
    score: number; band: string; tone: "good" | "care" | "bad"; headline: string; sub: string;
    breakdown: { label: string; detail: string; points: number; max: number }[];
    compound: number; compoundNote: string | null;
  };
  core: { kicker: string; rows: Row[]; ruling: { planet: string; sanskrit: string; day: string; colors: string[]; gemstone: string } };
  loShu: {
    layout: number[][]; counts: Record<number, number>; complete: boolean;
    missing: { n: number; text: string }[]; repeated: { n: number; text: string }[]; planes: { label: string; on: string }[];
  };
  nameCalc: { parts: { letters: { ch: string; value: number }[]; total: number }[]; rows: Row[]; strengths: string[]; challenges: string[]; careers: string };
  fix:
    | { possible: false; reason: string; allowed: string }
    | { possible: true; count: number; searched: number; scope: string; allowed: string; was: string; rows: { mask: string; compound: number; nameNumber: number; score: number }[] };
  offer: { whatsapp: string; bullets: string[]; remediesTitle: string; remedies: string[] };
}

/* The year in India, so a visitor in India sees the right Personal Year on 1 January. */
const istYear = (d: Date) => new Date(d.getTime() + 5.5 * 36e5).getUTCFullYear();

export function buildName(raw: unknown, now: Date = new Date()): NameResult {
  const b = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const name = String(b.name ?? "").trim();
  if (!/[A-Za-z]/.test(name)) throw new NameInputError("Please enter your name. It needs at least one letter.");
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(b.dob ?? ""));
  if (!m) throw new NameInputError("Please enter a valid date of birth.");
  const gender = ["male", "female", "other"].includes(String(b.gender)) ? String(b.gender) : "other";

  const r = analyse({ name, dob: { day: +m[3], month: +m[2], year: +m[1] }, gender });
  if (!r.ok) throw new NameInputError(r.error);

  const d = r.dateNumbers, dob = r.input.dob, mk = d.moolank.value, bk = d.bhagyank.value;
  const sc = r.compatibility.score, f = r.nameNumbers.full, n = r.nameNumbers;
  const pyear = personalYear(dob, istYear(now));
  const band = C.BAND_COPY[sc.band];
  const pl = C.PLANETS[mk];

  const bw = String(dob.day).split("").concat(String(dob.month).split(""), String(dob.year).split("")).join("+") + " = " + d.bhagyank.raw + " → " + bk;
  const coreRows: Row[] = [
    { title: "Moolank · " + C.ARCHETYPE[mk], text: C.MOOLANK[mk], value: mk, working: "birth day " + dob.day + " → " + d.moolank.trail.join(" → ") },
    { title: "Bhagyank · " + C.ARCHETYPE[bk], text: C.BHAGYANK[bk], value: bk, working: bw },
    { title: "Kua number", text: d.kua.group + " group · favourable directions " + d.kua.luckyDirections.join(", "), value: d.kua.value, working: "solar year " + d.kua.solarYear + ", " + r.input.gender },
    { title: "Personal year " + pyear.year, text: C.PERSONAL_YEAR[pyear.value], value: pyear.value, working: "" },
  ];

  const g = r.loShu;
  const nameRows: Row[] = [
    { title: "Name number", text: C.NAME_NUMBER[f.reduced], value: f.reduced, working: f.parts.map((p) => p.total).join(" + ") + " = " + f.compound + " → " + f.trail.join(" → ") },
    { title: "Soul urge", text: C.SOUL_URGE[n.soulUrge.reduced], value: n.soulUrge.reduced, working: "vowels only = " + n.soulUrge.compound },
    { title: "Personality", text: C.PERSONALITY[n.personality.reduced], value: n.personality.reduced, working: "consonants only = " + n.personality.compound },
  ];

  const allowed = r.compatibility.allowed.map((a) => a.n).join(", ");
  const c = r.correction;
  const fix: NameResult["fix"] = !c.possible
    ? { possible: false, reason: c.reason || "No correction needed.", allowed }
    : {
      possible: true, count: c.options.length, searched: (c as { searched?: number }).searched ?? 0, scope: (c as { scope?: string | null }).scope || "name", allowed, was: r.input.name,
      rows: c.options.map((o) => ({ mask: o.name.replace(/[^\s]/g, "•"), compound: o.compound, nameNumber: o.nameNumber, score: o.score })),
    };

  return {
    v: 1,
    generatedAt: now.getTime(),
    input: { name: r.input.name, gender: String(r.input.gender), dob },
    firstName: r.input.name.split(" ")[0],
    verdict: {
      score: sc.total, band: sc.band,
      tone: sc.band === "strong" ? "good" : sc.band === "moderate" ? "care" : "bad",
      headline: band.headline, sub: band.sub, breakdown: sc.breakdown, compound: f.compound, compoundNote: sc.compoundNote,
    },
    core: {
      kicker: r.input.name + " · " + dob.day + " " + MONTHS[dob.month - 1] + " " + dob.year,
      rows: coreRows,
      ruling: { planet: pl.planet, sanskrit: pl.sanskrit, day: pl.day, colors: pl.colors, gemstone: pl.gemstone },
    },
    loShu: {
      layout: g.layout, counts: g.counts, complete: g.missing.length === 0,
      missing: g.missing.slice(0, 4).map((x) => ({ n: x, text: C.MISSING_NUMBER[x] })),
      repeated: g.repeated.map((x) => ({ n: x, text: C.REPEATED_NUMBER[x] })),
      planes: Object.keys(C.PLANES).filter((k) => (g.planes as Record<string, boolean>)[k]).map((k) => ({ label: C.PLANES[k].label, on: C.PLANES[k].on })),
    },
    nameCalc: {
      parts: f.parts.map((p) => ({ letters: p.letters.map((l) => ({ ch: l.ch, value: l.value })), total: p.total })),
      rows: nameRows, strengths: C.STRENGTHS[mk], challenges: C.CHALLENGES[mk], careers: C.CAREERS[mk],
    },
    fix,
    offer: {
      whatsapp: "https://wa.me/" + WA + "?text=" + encodeURIComponent("Namaste, I ran the free name check. My name is " + r.input.name + " and my score was " + sc.total + ". I have a question about my name correction."),
      bullets: ["Every corrected spelling, ranked", "Letter-by-letter working", "Lo Shu grid reading", "Lucky numbers, days, colours", "Mobile number check", "Remedies for your ruling planet", "Career and money outlook", "PDF, delivered on WhatsApp"],
      remediesTitle: "Free remedies for " + pl.planet,
      remedies: C.REMEDIES[mk],
    },
  };
}
