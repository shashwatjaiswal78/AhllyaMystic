import type { Metadata } from "next";
import CoursesPage from "@/app/_design/CoursesPage";

export const metadata: Metadata = { title: "Courses", description: "Learn numerology, astrology, marriage compatibility and manifestation from Ahllya Mystic." };

export default function Page() {
  return <CoursesPage />;
}
