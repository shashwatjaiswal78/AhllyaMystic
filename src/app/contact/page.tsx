import type { Metadata } from "next";
import ContactPage from "@/app/_design/ContactPage";

export const metadata: Metadata = { alternates: { canonical: "/contact" }, title: "Contact us", description: "WhatsApp, email or send us a message about a report, consultation or course." };

export default function Page() {
  return <ContactPage />;
}
