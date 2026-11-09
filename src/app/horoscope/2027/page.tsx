import type { Metadata } from "next";
import { getYearly } from "@/lib/horoscope/data";
import { PeriodShell, YearHub } from "@/lib/horoscope/period-ui";

export const metadata: Metadata = {
  alternates: { canonical: "/horoscope/2027" },
  title: "Horoscope 2027: Yearly Rashifal for All 12 Signs",
  description: "Horoscope 2027 for every Moon sign, with the exact dates Jupiter, Saturn and Rahu change house, your Sade Sati and dhaiya status, and what each phase means. Calculated from real planet positions.",
};

export default async function Page() {
  const data = await getYearly(2027);
  return (
    <PeriodShell crumb="2027">
      <YearHub data={data} />
    </PeriodShell>
  );
}
