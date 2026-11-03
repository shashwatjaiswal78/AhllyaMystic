import type { Metadata } from "next";
import AboutPage from "@/app/_design/AboutPage";

export const metadata: Metadata = { title: "About Ahllya Mystic", description: "Meet Ahalya Sangeeta and Maneswita, the mother and daughter who read every chart together." };

export default function Page() {
  return <AboutPage />;
}
