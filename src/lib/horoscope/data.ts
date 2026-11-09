import { cacheLife } from "next/cache";
import { dailyHoroscopes } from "./engine";
import { monthlyHoroscopes, weeklyHoroscopes, yearlyHoroscopes } from "./periods";

/* Calculated from the real planet positions at sunrise in New Delhi, then cached. A new IST day
   shows up within half an hour of midnight. */
export async function getHoroscopes() {
  "use cache";
  cacheLife({ stale: 300, revalidate: 1800, expire: 86400 });
  return dailyHoroscopes();
}

export async function getWeekly() {
  "use cache";
  cacheLife({ stale: 300, revalidate: 3600, expire: 86400 });
  return weeklyHoroscopes();
}

export async function getMonthly() {
  "use cache";
  cacheLife({ stale: 300, revalidate: 3600, expire: 86400 });
  return monthlyHoroscopes();
}

export async function getYearly(year: number) {
  "use cache";
  cacheLife("days");
  return yearlyHoroscopes(year);
}
