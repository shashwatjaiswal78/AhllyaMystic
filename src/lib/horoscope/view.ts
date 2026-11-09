// One sign's weekly, monthly or yearly view, in the small shape the horoscope page needs in the browser.
import { getMonthly, getNext12, getWeekly, getYearly } from "./data";
import type { SignPeriod, SignYear } from "./periods";
import { SIGN_SLUGS } from "./seo";

export const VIEWS = ["weekly", "monthly", "yearly", "2027", "2028"] as const;
export type ViewKey = (typeof VIEWS)[number];

export interface PeriodView {
  view: ViewKey;
  sign: string; // slug
  title: string;
  range: string;
  events: { planet: string; dateLabel: string; toSign: string }[];
  period: SignPeriod | null;
  year: SignYear | null;
}

export const isView = (v: string): v is ViewKey => (VIEWS as readonly string[]).includes(v);

export async function getPeriodView(view: ViewKey, slug: string): Promise<PeriodView | null> {
  const i = SIGN_SLUGS.indexOf(slug);
  if (i < 0) return null;
  if (view === "weekly" || view === "monthly") {
    const d = view === "weekly" ? await getWeekly() : await getMonthly();
    return { view, sign: slug, title: d.title, range: d.range, events: d.events, period: d.signs[i], year: null };
  }
  const d = view === "yearly" ? await getNext12() : await getYearly(Number(view));
  return { view, sign: slug, title: view === "yearly" ? "Next 12 months" : `Horoscope ${d.year}`, range: d.label, events: d.events, period: null, year: d.signs[i] };
}
