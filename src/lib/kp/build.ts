// Builds the Free KP Kundli result: validates the birth details, runs the KP engine and returns everything the
// /kp-kundli page displays. Runs on the server only.
import { InputError, parseInput, parsePlace, type KundliInput } from "../kundli/kundli";
import { offLabel, tzOffset, zonedToUtc } from "../kundli/engine";
import { computeChart, KpError, rulingNow, type KpOpts } from "./engine";
import { nakshatraNadi, significators, vimshottari, type ChartData, type DashaNode, type NadiPlanet, type Ruling, type Significators } from "./core";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export interface KpResult {
  v: 1;
  generatedAt: number;
  input: KundliInput;
  opts: { node: "mean" | "true"; ay: "mean" | "true" };
  firstName: string;
  meta: { name: string; when: string; place: string; off: string; tz: string; la: number; lo: number };
  chart: ChartData;
  sig: Significators;
  nadi: NadiPlanet[];
  dasha: DashaNode[];
}

const pick = (v: unknown): "mean" | "true" => (v === "true" ? "true" : "mean");

export function buildKp(raw: unknown): KpResult {
  const { input, y, mo, d, h, mi, s } = parseInput(raw);
  const b = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const opts: KpOpts = { node: pick(b.node), ay: pick(b.ay) };
  const { place } = input;
  const tz = place.tz;

  const utc = new Date(zonedToUtc(y, mo, d, h, mi, tz).getTime() + s * 1000);
  if (!Number.isFinite(utc.getTime())) throw new InputError("We could not work out that birth time. Please check the details.");
  let c;
  try {
    c = computeChart(utc, place.la, place.lo, opts);
  } catch (err) {
    if (err instanceof KpError) throw new InputError(err.message);
    throw err;
  }
  const chart: ChartData = { ay: c.ay, ayMode: c.ayMode, mode: c.mode, horary: c.horary, cuspRows: c.cuspRows, planets: c.planets };
  const dasha = vimshottari(utc.getTime(), c.moon.lon);
  const placeText = place.online ? place.n : `${place.n}${place.r ? ", " + place.r.replace(/, India$/, "") : ""}`;

  return {
    v: 1,
    generatedAt: Date.now(),
    input,
    opts: { node: opts.node!, ay: opts.ay! },
    firstName: input.name.split(" ")[0],
    meta: {
      name: input.name,
      when: `${String(d).padStart(2, "0")} ${MONTHS[mo - 1]} ${y}, ${input.tob}`,
      place: placeText, off: offLabel(utc.getTime(), tz), tz, la: place.la, lo: place.lo,
    },
    chart,
    sig: significators(chart),
    nadi: nakshatraNadi(chart),
    dasha,
  };
}

/* Ruling planets for this very moment at a place (the live panel on the result page). */
export function buildRuling(raw: unknown, now: Date = new Date()): Ruling {
  const b = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const place = parsePlace(b.place);
  try {
    return rulingNow(now, place.la, place.lo, tzOffset(now.getTime(), place.tz), { node: pick(b.node), ay: pick(b.ay) });
  } catch (err) {
    if (err instanceof KpError) throw new InputError(err.message);
    throw err;
  }
}
