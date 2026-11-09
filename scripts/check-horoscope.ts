// Compares the live horoscope engine with the two reference days baked into the original design.
import { readFileSync } from "node:fs";
import { dailyHoroscopes } from "../src/lib/horoscope/engine";

const baked = JSON.parse(readFileSync(process.argv[2], "utf8"));
const got = dailyHoroscopes(new Date("2026-10-24T08:00:00Z"));
let diffs = 0;
for (const day of ["today", "tomorrow"] as const) {
  const a = baked.days[day], b: any = got.days[day];
  for (const k of ["dateEn", "dateHi", "pancEn", "pancHi"]) if (a[k] !== b[k]) { diffs++; console.log(day, k, "\n  want", a[k], "\n  got ", b[k]); }
  a.signs.forEach((s: any, i: number) => {
    const g: any = b.signs[i];
    for (const k of ["scores", "band", "areas", "whyEn", "whyHi", "planets", "lucky", "calm"]) {
      if (JSON.stringify(s[k]) !== JSON.stringify(g[k])) {
        diffs++;
        const sa = JSON.stringify(s[k]), sb = JSON.stringify(g[k]);
        console.log(day, i, k, "\n  want", sa.slice(0, 330), "\n  got ", sb.slice(0, 330));
      }
    }
  });
}
console.log("diffs:", diffs);
