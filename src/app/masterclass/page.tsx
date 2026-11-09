import type { Metadata } from "next";
import MasterclassPage from "@/app/_design/MasterclassPage";

export const metadata: Metadata = { alternates: { canonical: "/masterclass" }, title: "Manifestation Masterclass", description: "A live 2-day manifestation masterclass. Register for ₹99." };

export default function Page() {
  return <MasterclassPage />;
}
