import type { Metadata } from "next";
import HoroscopePage from "@/app/_design/HoroscopePage";
import { getHoroscopes } from "@/lib/horoscope/data";
import { HoroscopeExtras, HoroscopeJsonLd } from "@/lib/horoscope/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/horoscope" },
  title: "Daily Rashifal: Horoscope for All 12 Signs",
  description:
    "Free daily rashifal for all 12 Moon signs in English and Hindi: love, career, money and health, Rahu Kaal, Abhijit Muhurat and lucky numbers.",
};

export default async function Page() {
  const data = await getHoroscopes();
  return (
    <>
      <HoroscopeJsonLd crumbs={[{ name: "Home", path: "/" }, { name: "Daily horoscope", path: "/horoscope" }]} />
      <HoroscopePage data={data} extras={<HoroscopeExtras />} />
    </>
  );
}
