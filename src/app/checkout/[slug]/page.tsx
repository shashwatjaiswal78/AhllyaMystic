import { Suspense } from "react";
import CheckoutClient from "./CheckoutClient";

export default function CheckoutPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FBF7F0]" />}>
      <CheckoutClient params={params} />
    </Suspense>
  );
}
