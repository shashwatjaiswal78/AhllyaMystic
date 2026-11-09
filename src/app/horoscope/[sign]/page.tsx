import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HoroscopePage from "@/app/_design/HoroscopePage";
import { getHoroscopes } from "@/lib/horoscope/data";
import { SIGN_INFO } from "@/lib/horoscope/signs";
import { HoroscopeExtras, HoroscopeJsonLd, SIGN_SLUGS } from "@/lib/horoscope/seo";

export function generateStaticParams() {
  return SIGN_SLUGS.map((sign) => ({ sign }));
}

export async function generateMetadata({ params }: { params: Promise<{ sign: string }> }): Promise<Metadata> {
  const { sign } = await params;
  const info = SIGN_INFO[SIGN_SLUGS.indexOf(sign)];
  if (!info) return {};
  return {
    alternates: { canonical: `/horoscope/${sign}` },
    title: `${info.en} Horoscope Today (${info.hi} Rashifal): Daily Prediction`,
    description: `${info.en} (${info.hi}) horoscope for today and tomorrow: love, career, money and health scores, lucky number and colour, mantra, Rahu Kaal and Abhijit Muhurat. Free, in English and Hindi, calculated from real planet positions.`,
  };
}

export default async function Page({ params }: { params: Promise<{ sign: string }> }) {
  const { sign } = await params;
  const index = SIGN_SLUGS.indexOf(sign);
  if (index < 0) notFound();
  const data = await getHoroscopes();
  return (
    <>
      <HoroscopeJsonLd
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Daily horoscope", path: "/horoscope" },
          { name: `${SIGN_INFO[index].en} horoscope`, path: `/horoscope/${sign}` },
        ]}
      />
      <HoroscopePage data={data} initialState={{ sign: index }} extras={<HoroscopeExtras current={sign} />} />
    </>
  );
}
