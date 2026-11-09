import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMonthly, getWeekly, getYearly } from "@/lib/horoscope/data";
import { PeriodShell, SignPeriodView, SignYearView } from "@/lib/horoscope/period-ui";
import { SIGN_SLUGS } from "@/lib/horoscope/seo";
import { SIGN_INFO } from "@/lib/horoscope/signs";

const PERIODS = ["weekly", "monthly", "2027", "2028"] as const;
type Period = (typeof PERIODS)[number];

export function generateStaticParams() {
  return SIGN_SLUGS.flatMap((sign) => PERIODS.map((period) => ({ sign, period })));
}

const TITLE: Record<Period, (en: string, hi: string) => { title: string; description: string }> = {
  weekly: (en, hi) => ({
    title: `${en} Weekly Horoscope (${hi} Saptahik Rashifal) This Week`,
    description: `${en} (${hi}) weekly horoscope: day-by-day love, career, money and health scores, your best and most careful day, and the planet changes to watch. Calculated from real planet positions.`,
  }),
  monthly: (en, hi) => ({
    title: `${en} Monthly Horoscope (${hi} Masik Rashifal): Next 30 Days`,
    description: `${en} (${hi}) monthly horoscope: scores for the next 30 days, your best and most careful dates, and when Sun, Mars, Mercury and Venus change sign. Calculated from real planet positions.`,
  }),
  "2027": (en, hi) => ({
    title: `${en} Horoscope 2027 (${hi} Rashifal 2027): Yearly Prediction`,
    description: `${en} (${hi}) horoscope for 2027: where Jupiter, Saturn and Rahu stand for your Moon sign, the exact dates they change house, and your Sade Sati and dhaiya status.`,
  }),
  "2028": (en, hi) => ({
    title: `${en} Horoscope 2028 (${hi} Rashifal 2028): Yearly Prediction`,
    description: `${en} (${hi}) horoscope for 2028: where Jupiter, Saturn and Rahu stand for your Moon sign, the exact dates they change house, and your Sade Sati and dhaiya status.`,
  }),
};

export async function generateMetadata({ params }: { params: Promise<{ sign: string; period: string }> }): Promise<Metadata> {
  const { sign, period } = await params;
  const index = SIGN_SLUGS.indexOf(sign);
  if (index < 0 || !(PERIODS as readonly string[]).includes(period)) return {};
  const info = SIGN_INFO[index];
  return { alternates: { canonical: `/horoscope/${sign}/${period}` }, ...TITLE[period as Period](info.en, info.hi) };
}

export default async function Page({ params }: { params: Promise<{ sign: string; period: string }> }) {
  const { sign, period } = await params;
  const index = SIGN_SLUGS.indexOf(sign);
  if (index < 0 || !(PERIODS as readonly string[]).includes(period)) notFound();
  const info = SIGN_INFO[index];
  const crumb = `${info.en} ${period}`;
  if (period === "weekly" || period === "monthly") {
    const data = period === "weekly" ? await getWeekly() : await getMonthly();
    return <PeriodShell crumb={crumb}><SignPeriodView data={data} index={index} kind={period} /></PeriodShell>;
  }
  const data = await getYearly(Number(period));
  return <PeriodShell crumb={crumb}><SignYearView data={data} index={index} /></PeriodShell>;
}
