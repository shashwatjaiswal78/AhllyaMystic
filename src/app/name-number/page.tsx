import type { Metadata } from "next";
import NameNumberPage from "@/app/_design/NameNumberPage";

export const metadata: Metadata = {
  title: "Free name number check",
  description: "Check whether your name supports your birth numbers: a name vibration score, your core numbers, Lo Shu grid and spelling options.",
};

export default function Page() {
  return <NameNumberPage />;
}
