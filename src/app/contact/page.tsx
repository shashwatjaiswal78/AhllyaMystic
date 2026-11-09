import type { Metadata } from "next";
import ContactPage from "@/app/_design/ContactPage";

export const metadata: Metadata = { alternates: { canonical: "/contact" }, title: "Contact Ahllya Mystic: WhatsApp, Email, Message", description: "Reach Ahllya Mystic on WhatsApp or email, or send a message about a report, a consultation or a course. We reply to every enquiry." };

export default function Page() {
  return <ContactPage />;
}
