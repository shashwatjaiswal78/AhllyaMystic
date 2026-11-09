import type { Metadata } from "next";
import { getWeekly } from "@/lib/horoscope/data";
import { PageHead, PeriodGrid, PeriodShell } from "@/lib/horoscope/period-ui";
import { HoroscopeTabs } from "@/lib/horoscope/tabs";

export const metadata: Metadata = {
  alternates: { canonical: "/horoscope/weekly" },
  title: "Weekly Rashifal: This Week's Horoscope for All 12 Signs",
  description: "Weekly Vedic horoscope for all 12 Moon signs: your best and most careful day, strongest area of life, and the planet changes to watch. Calculated from real planet positions.",
};

export default async function Page() {
  const data = await getWeekly();
  return (
    <PeriodShell crumb="Weekly">
      <HoroscopeTabs active="weekly" />
      <PageHead title={`Weekly horoscope, ${data.range}`} sub="Seven days at a glance for every Moon sign. Each score comes from where the Moon and the other planets sit counted from your sign." />
      <PeriodGrid data={data} kind="week" />
    </PeriodShell>
  );
}
