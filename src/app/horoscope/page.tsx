import type { Metadata } from "next";
import HoroscopePage from "@/app/_design/HoroscopePage";

export const metadata: Metadata = { title: "Daily horoscope", description: "Today's horoscope for every sign, in English and Hindi." };

export default function Page() {
  return <HoroscopePage />;
}
