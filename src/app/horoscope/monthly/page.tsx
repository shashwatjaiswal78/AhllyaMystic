import type { Metadata } from "next";
import { getMonthly } from "@/lib/horoscope/data";
import { PageHead, PeriodGrid, PeriodShell } from "@/lib/horoscope/period-ui";
import { HoroscopeTabs } from "@/lib/horoscope/tabs";

export const metadata: Metadata = {
  alternates: { canonical: "/horoscope/monthly" },
  title: "Monthly Rashifal: The Next 30 Days for All 12 Signs",
  description: "Monthly Vedic horoscope for all 12 Moon signs: day-by-day scores, your best and most careful dates, and when Sun, Mars, Mercury and Venus change sign. Calculated from real planet positions.",
};

export default async function Page() {
  const data = await getMonthly();
  return (
    <PeriodShell crumb="Monthly">
      <HoroscopeTabs active="monthly" />
      <PageHead title={`Monthly horoscope, ${data.range}`} sub="The next 30 days for every Moon sign, with the dates to lean into and the dates to go slowly." />
      <PeriodGrid data={data} kind="month" />
    </PeriodShell>
  );
}
