import type { Metadata } from "next";
import KundliPage from "@/app/_design/KundliPage";

export const metadata: Metadata = { alternates: { canonical: "/kundli" }, title: "Free Kundli", description: "Your free Kundli: Lagna and Navamsa charts, planets, doshas and dasha periods." };

export default function Page() {
  return <KundliPage />;
}
