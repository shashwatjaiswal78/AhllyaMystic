import type { Metadata } from "next";
import KpKundliPage from "@/app/_design/KpKundliPage";

export const metadata: Metadata = { title: "Free KP Kundli calculator", description: "Free KP Kundli with cusps, significators and ruling planets." };

export default function Page() {
  return <KpKundliPage />;
}
