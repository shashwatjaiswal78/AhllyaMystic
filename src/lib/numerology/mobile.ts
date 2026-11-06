// Builds the Free Mobile Number result: validates the details, runs the engine and returns everything the
// /mobile-number page shows, already worded. Runs on the server only.
// Wording follows the "Mobile Number Numerology Calculator" Artifact; the paid-report call to action points at the
// site's own report page instead of the artifact's standalone checkout.
import { PLANETS, bhagyank, cleanName, moolank, titleCase, validDob, type Dob } from "./core";
import {
  AVOID_DIGITS, COMP_GOOD, EFFECTS, QUAL, analyseNumber, clean, decide, variants,
  type Level,
} from "./mobile-engine";

export class MobileInputError extends Error {}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WA = "919129237566";

export type TotalRow =
  | { kind: "step"; title: string; text: string; value: number; working: string }
  | { kind: "against"; title: string; text: string; tag: "enemy" | "friend" | "mixed" | "neutral"; label: string };

export interface MobileResult {
  v: 1;
  generatedAt: number;
  input: { name: string; gender: string; dob: Dob; mobile: string };
  firstName: string;
  number: string;
  dobLabel: string;
  moolank: number;
  bhagyank: number;
  total: number;
  planet: string;
  totalSection: { rows: TotalRow[]; note: string };
  effects: { rows: [string, string][]; frame: string };
  inside: { text: string; note: boolean };
  verdict: { level: Level; action: "Change" | "Keep"; title: string; text: string; tone: "bad" | "care" | "good"; why: string[] };
  report: {
    fine: boolean; kicker: string; head: string; lead: string; bullets: string[]; whatsapp: string;
    gate: null | { title: string; sub: string; fresh: boolean; rows: { ending: string; changed: string; sum: number; total: number; bad: string }[] };
  };
}

const fmt = (n: string) => n.slice(0, 5) + " " + n.slice(5);

function workOf(trail: number[]): string {
  const out: string[] = [];
  for (let i = 0; i < trail.length - 1; i++) out.push(String(trail[i]).split("").join(" + ") + " = " + trail[i + 1]);
  return out.join(", then ");
}

const VERDICT: Record<Level, { action: "Change" | "Keep"; title: string; text: string; tone: "bad" | "care" | "good" }> = {
  definite: { action: "Change", title: "Change this number", text: "The number is working against you. We strongly advise changing it.", tone: "bad" },
  recommended: { action: "Change", title: "We recommend changing this number", text: "It carries enough against you that a better number is worth the effort.", tone: "bad" },
  keepcare: { action: "Keep", title: "Keep it, with care", text: "The number can stay. A few things inside it are worth watching.", tone: "care" },
  keep: { action: "Keep", title: "Keep this number", text: "It suits your birth numbers and nothing inside it works against you.", tone: "good" },
};

export function buildMobile(raw: unknown, now: Date = new Date()): MobileResult {
  const b = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const name = String(b.name ?? "").trim();
  if (!/[A-Za-z]/.test(name)) throw new MobileInputError("Please enter your name. It needs at least one letter.");
  const dm = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(b.dob ?? ""));
  if (!dm) throw new MobileInputError("Please enter a valid date of birth.");
  const num = clean(b.mobile);
  if (num.length !== 10) throw new MobileInputError("Please enter a 10 digit mobile number.");

  const dob: Dob = { day: +dm[3], month: +dm[2], year: +dm[1] };
  if (!validDob(dob)) throw new MobileInputError("Please enter a valid date of birth.");
  const cleaned = cleanName(name);
  if (cleaned.replace(/\s/g, "").length < 2) throw new MobileInputError("Please enter your full name.");
  const gender = ["male", "female", "other"].includes(String(b.gender)) ? String(b.gender) : "other";

  const mk = moolank(dob.day).value, bk = bhagyank(dob).value;
  const an = analyseNumber(num, mk, bk);
  const dec = decide(an, mk, bk);
  const fix = dec.level === "keep" || dec.level === "keepcare" ? [] : variants(num, mk, bk, 6);
  const t = an.total, pl = PLANETS[t];

  /* ---- Your total: how we got there ---- */
  const rows: TotalRow[] = [];
  const good = (COMP_GOOD[t] || []).includes(an.sum);
  if (an.sum !== t) {
    rows.push({
      kind: "step", title: "Compound: " + an.sum,
      text: "This is the full sum of your ten digits. It is the layer beneath your total and colours how the total behaves." + (good ? " It is one of the preferred compounds for a total of " + t + "." : ""),
      value: an.sum, working: an.digits.join(" + ") + " = " + an.sum,
    });
  }
  if (an.trail.length > 1) {
    rows.push({
      kind: "step", title: "Total: " + t,
      text: "Reducing the compound to one digit gives the main vibration your number carries. " + t + " belongs to " + pl.planet + ", and it brings " + QUAL[t] + ".",
      value: t, working: workOf(an.trail),
    });
  }
  const against = (label: string, n: number): TotalRow => {
    let text: string, tag: "enemy" | "friend" | "mixed" | "neutral", tg: string;
    if ((t === 3 && n === 6) || (t === 6 && n === 3)) { text = "A " + t + " and a " + n + " pull in opposite directions, so your number works against your " + label + "."; tag = "enemy"; tg = "Clashes"; }
    else if (t === 9 && n === 1) { text = "Your 1 gives the 9 direction and authority, so its energy gets put to use."; tag = "friend"; tg = "Balances"; }
    else if (n === t) { text = "Same number as your total, so it doubles up " + QUAL[t] + ", which you already carry."; tag = "mixed"; tg = "Doubles up"; }
    else { text = "Your " + label + " brings " + QUAL[n] + ". Your number adds " + QUAL[t] + " on top."; tag = "neutral"; tg = "Adds"; }
    return { kind: "against", title: "Against your " + label + " " + n, text, tag, label: tg };
  };
  rows.push(against("Moolank", mk), against("Bhagyank", bk));

  /* ---- what this number does to you ---- */
  const ef = EFFECTS[t];

  /* ---- inside your number ---- */
  const heavy = AVOID_DIGITS.some((d) => an.counts[d] > 2);
  let inText: string;
  if (an.nm === 0) inText = "The digits inside your number sit well together. Nothing in the way they are arranged pulls against the total.";
  else if (an.nm <= 2) inText = "The way a few digits sit side by side inside your number adds friction. It can show up as ups and downs in health, relationships or money, even when the total itself looks fine.";
  else inText = "Several of the digit pairs inside your number work against you. They add strain to health, relationships and finances, and can cancel out the good the total would otherwise bring. This is a common reason people feel stuck despite steady effort.";
  if (heavy && an.nm > 0) inText += " Some digits also repeat more than they should, which strengthens their heavier side.";

  /* ---- report ---- */
  const fine = dec.level === "keep" || dec.level === "keepcare";
  const wa = "https://wa.me/" + WA + "?text=" + encodeURIComponent("Namaste, I ran the free mobile number check. My total was " + t + " and the verdict was " + (fine ? "keep" : "change") + ". I have a question about my number.");
  let gate: MobileResult["report"]["gate"] = null;
  if (!fine) {
    if (fix.length) {
      gate = {
        title: fix.length + " better ending" + (fix.length > 1 ? "s" : "") + " found",
        sub: "The matching numbers and your full report are sent on WhatsApp after you order.",
        fresh: false,
        rows: fix.map((o) => ({
          ending: o.number.slice(7),
          changed: o.changed === 1 ? "one digit changed" : o.changed === 2 ? "two digits changed" : "three digits changed",
          sum: o.sum, total: o.total, bad: o.nm ? String(o.nm) : "none",
        })),
      };
    } else {
      gate = {
        title: "A fresh number, designed for you",
        sub: "The first digits of your number carry the problem, so we design a new number from scratch and send it, with your full report, on WhatsApp after you order.",
        fresh: true, rows: [],
      };
    }
  }

  const v = VERDICT[dec.level];
  const fullName = titleCase(cleaned);
  return {
    v: 1,
    generatedAt: now.getTime(),
    input: { name: fullName, gender, dob, mobile: num },
    firstName: fullName.split(" ")[0],
    number: fmt(num),
    dobLabel: `${dob.day} ${MONTHS[dob.month - 1]} ${dob.year}`,
    moolank: mk, bhagyank: bk, total: t, planet: pl.planet,
    totalSection: {
      rows,
      note: "Your Moolank and Bhagyank show the qualities you already carry. A mobile number adds its own on top of them, so the question is whether it gives you more of what you need or more of what you already have enough of.",
    },
    effects: {
      rows: [["Health", ef.health], ["Career", ef.career], ["Love", ef.love], ["Money", ef.money]],
      frame: dec.ts.ok ? "Your total suits you, so the better side of these tendencies tends to lead." : "Your total is one to avoid, so the harder side of these tendencies tends to show up more.",
    },
    inside: { text: inText, note: an.nm > 0 },
    verdict: { level: dec.level, action: v.action, title: v.title, text: v.text, tone: v.tone, why: dec.why },
    report: {
      fine,
      kicker: fine ? "Go deeper" : "Correction and a better number",
      head: fine ? "Your number works. Go deeper." : "Let us design a number that works for you.",
      lead: fine
        ? "Your number is in good shape. The full report shows exactly why, and what to protect if you ever change it."
        : "Your number is affecting how things go for you. In the full report we design a number built around your Moolank, Bhagyank and what you need most, whether that is health, career, love or money.",
      bullets: ["A number designed for your needs", "Every combination in your number explained", "Remedies for repeated digits", "Lucky colours for your phone", "Delivered as a PDF on WhatsApp"],
      whatsapp: wa,
      gate,
    },
  };
}
