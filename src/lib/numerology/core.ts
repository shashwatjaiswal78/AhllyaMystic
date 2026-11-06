// Numerology basics shared by the numerology calculators: digit sums, reduction, birth date numbers.
// Ported from the Ahllya Mystic Numerology Engine in the Mobile Number artifact. Pure and deterministic.

const MASTERS = new Set([11, 22, 33]);

export function digitSum(n: number): number {
  return String(Math.abs(n)).split("").reduce((a, d) => a + +d, 0);
}

/** Reduce to a single digit. keepMasters preserves 11/22/33. */
export function reduce(n: number, keepMasters = false): { value: number; trail: number[] } {
  let v = Math.abs(Math.trunc(n));
  const trail = [v];
  while (v > 9) {
    if (keepMasters && MASTERS.has(v)) break;
    v = digitSum(v);
    trail.push(v);
  }
  return { value: v, trail };
}

export function cleanName(name: unknown): string {
  return String(name || "").toUpperCase().replace(/[^A-Z\s]/g, " ").replace(/\s+/g, " ").trim();
}

export function titleCase(s: string): string {
  return s.toLowerCase().replace(/(^|\s)([a-z])/g, (_m, a, b) => a + b.toUpperCase());
}

export interface Dob { day: number; month: number; year: number }

export function validDob(d: Dob | null): d is Dob {
  if (!d) return false;
  const { day, month, year } = d;
  if (!day || !month || !year) return false;
  if (month < 1 || month > 12 || day < 1 || day > 31 || year < 1900) return false;
  const dt = new Date(Date.UTC(year, month - 1, day));
  return dt.getUTCDate() === day && dt.getUTCMonth() === month - 1;
}

/** Moolank / Driver / Psychic number: from the birth DAY alone. */
export function moolank(day: number) {
  const r = reduce(day);
  return { value: r.value, raw: day, trail: r.trail };
}

/** Bhagyank / Conductor / Life Path: from the whole date. */
export function bhagyank(d: Dob) {
  const raw = digitSum(d.day) + digitSum(d.month) + digitSum(d.year);
  const r = reduce(raw);
  return { value: r.value, raw, trail: r.trail };
}

export const PLANETS: Record<number, { planet: string; sanskrit: string; day: string }> = {
  1: { planet: "Sun", sanskrit: "Surya", day: "Sunday" },
  2: { planet: "Moon", sanskrit: "Chandra", day: "Monday" },
  3: { planet: "Jupiter", sanskrit: "Guru", day: "Thursday" },
  4: { planet: "Rahu", sanskrit: "Rahu", day: "Saturday" },
  5: { planet: "Mercury", sanskrit: "Budh", day: "Wednesday" },
  6: { planet: "Venus", sanskrit: "Shukra", day: "Friday" },
  7: { planet: "Ketu", sanskrit: "Ketu", day: "Tuesday" },
  8: { planet: "Saturn", sanskrit: "Shani", day: "Saturday" },
  9: { planet: "Mars", sanskrit: "Mangal", day: "Tuesday" },
};
