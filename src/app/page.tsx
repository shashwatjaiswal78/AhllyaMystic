import HomePage from "@/app/_design/HomePage";
import { getHoroscopes } from "@/lib/horoscope/data";

export default async function Page() {
  const { days } = await getHoroscopes();
  // The home page widget only shows today, so send just that to the browser.
  return <HomePage data={{ days: { today: days.today } }} />;
}
