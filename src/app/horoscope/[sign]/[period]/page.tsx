import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HoroscopePage from "@/app/_design/HoroscopePage";
import { getHoroscopes } from "@/lib/horoscope/data";
import { HoroscopeExtras, HoroscopeJsonLd, SIGN_SLUGS } from "@/lib/horoscope/seo";
import { SIGN_INFO } from "@/lib/horoscope/signs";
import { VIEWS, getPeriodView, isView, type ViewKey } from "@/lib/horoscope/view";

export function generateStaticParams() {
  return SIGN_SLUGS.flatMap((sign) => VIEWS.map((period) => ({ sign, period })));
}

const TITLE: Record<ViewKey, (en: string, hi: string) => { title: string; description: string }> = {
  weekly: (en, hi) => ({
    title: `${en} Weekly Horoscope (${hi} Rashifal)`,
    description: `${en} (${hi}) weekly horoscope: day-by-day scores for love, career, money and health, your best day and the planet changes to watch.`,
  }),
  monthly: (en, hi) => ({
    title: `${en} Monthly Horoscope (${hi} Rashifal)`,
    description: `${en} (${hi}) monthly horoscope: scores for the next 30 days, your best and most careful dates, and when the planets change sign.`,
  }),
  yearly: (en, hi) => ({
    title: `${en} Yearly Horoscope (${hi} Rashifal)`,
    description: `${en} (${hi}) yearly horoscope for the next 12 months: where Jupiter, Saturn and Rahu stand and when they change house.`,
  }),
  "2027": (en, hi) => ({
    title: `${en} Horoscope 2027 (${hi} Rashifal)`,
    description: `${en} (${hi}) horoscope 2027: the dates Jupiter, Saturn and Rahu change house, plus your Sade Sati and dhaiya status.`,
  }),
};

export async function generateMetadata({ params }: { params: Promise<{ sign: string; period: string }> }): Promise<Metadata> {
  const { sign, period } = await params;
  const index = SIGN_SLUGS.indexOf(sign);
  if (index < 0 || !isView(period)) return {};
  const info = SIGN_INFO[index];
  return { alternates: { canonical: `/horoscope/${sign}/${period}` }, ...TITLE[period](info.en, info.hi) };
}

export default async function Page({ params }: { params: Promise<{ sign: string; period: string }> }) {
  const { sign, period } = await params;
  const index = SIGN_SLUGS.indexOf(sign);
  if (index < 0 || !isView(period)) notFound();
  const [data, view] = await Promise.all([getHoroscopes(), getPeriodView(period, sign)]);
  return (
    <>
      <HoroscopeJsonLd
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Daily horoscope", path: "/horoscope" },
          { name: `${SIGN_INFO[index].en} horoscope`, path: `/horoscope/${sign}` },
          { name: period, path: `/horoscope/${sign}/${period}` },
        ]}
      />
      <HoroscopePage data={data} initialState={{ sign: index, day: period }} period={view} extras={<HoroscopeExtras current={sign} />} />
    </>
  );
}
