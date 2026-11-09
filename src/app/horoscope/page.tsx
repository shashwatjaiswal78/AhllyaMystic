import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import HoroscopePage from "@/app/_design/HoroscopePage";
import { dailyHoroscopes } from "@/lib/horoscope/engine";

export const metadata: Metadata = {
  alternates: { canonical: "/horoscope" },
  title: "Daily horoscope",
  description: "Today's horoscope for every sign, in English and Hindi.",
};

/* Calculated from the real planet positions at sunrise in New Delhi, then cached. A new IST day
   shows up within half an hour of midnight. */
async function getHoroscopes() {
  "use cache";
  cacheLife({ stale: 300, revalidate: 1800, expire: 86400 });
  return dailyHoroscopes();
}

export default async function Page() {
  const data = await getHoroscopes();
  return <HoroscopePage data={data} />;
}
