import type { Metadata } from "next";
import CoursesPage from "@/app/_design/CoursesPage";

export const metadata: Metadata = { alternates: { canonical: "/courses" }, title: "Online Courses: Numerology, Astrology, Manifestation", description: "Learn numerology, astrology, marriage compatibility and manifestation in clear, practical courses from Ahalya Sangeeta and Maneswita at Ahllya Mystic." };

export default function Page() {
  return <CoursesPage />;
}
