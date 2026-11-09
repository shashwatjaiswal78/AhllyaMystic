import type { Metadata } from "next";
import HoroscopePage from "@/app/_design/HoroscopePage";
import { getHoroscopes } from "@/lib/horoscope/data";
import { HoroscopeExtras, HoroscopeJsonLd } from "@/lib/horoscope/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/horoscope" },
  title: "Daily Rashifal: Today's Horoscope for All 12 Signs",
  description:
    "Free daily Vedic horoscope (rashifal) for all 12 Moon signs in English and Hindi. Love, career, money and health scores, lucky number and colour, Rahu Kaal and Abhijit Muhurat, calculated from today's real planet positions.",
};

export default async function Page() {
  const data = await getHoroscopes();
  return (
    <>
      <HoroscopeJsonLd crumbs={[{ name: "Home", path: "/" }, { name: "Daily horoscope", path: "/horoscope" }]} />
      <HoroscopePage data={data} />
      <HoroscopeExtras />
    </>
  );
}
