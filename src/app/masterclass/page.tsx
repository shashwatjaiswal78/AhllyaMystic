import type { Metadata } from "next";
import MasterclassPage from "@/app/_design/MasterclassPage";

export const metadata: Metadata = { alternates: { canonical: "/masterclass" }, title: "Live 2-Day Manifestation Masterclass with Maneswita", description: "A live 2-day Manifestation Masterclass with Maneswita: build your personal manifestation blueprint in two live sessions. Register for ₹99." };

export default function Page() {
  return <MasterclassPage />;
}
