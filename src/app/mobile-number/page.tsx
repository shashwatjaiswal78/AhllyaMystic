import type { Metadata } from "next";
import MobileNumberPage from "@/app/_design/MobileNumberPage";

export const metadata: Metadata = {
  title: "Free mobile number check",
  description: "Check whether your mobile number suits you: your total, the combinations inside it, and a clear keep or change verdict.",
};

export default function Page() {
  return <MobileNumberPage />;
}
