"use client";

import Nav from "@/components/Nav";
import Link from "next/link";

export default function KpKundliPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#FBF7F0" }}>
      {/* Announcement bar */}
      <div style={{ background: "#FFFFFF", color: "#921A11", fontSize: 14, fontWeight: 600, textAlign: "center", padding: "10px 16px", borderBottom: "1px solid #EADFD3" }}>
        <Link href="/masterclass" style={{ color: "#921A11", textDecoration: "none" }}>
          Live 2-day Manifestation Masterclass. Dates announced soon. Register for ₹99 →
        </Link>
      </div>
      <Nav />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header strip */}
        <div style={{ background: "linear-gradient(135deg, #2E003E 0%, #6C1594 100%)", color: "#FFFFFF", padding: "20px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <p style={{ margin: "0 0 4px", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: 700 }}>Free calculator</p>
              <h1 style={{ margin: 0, fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.15 }}>KP Kundli Calculator</h1>
            </div>
            <Link href="/kundli" style={{ display: "inline-flex", alignItems: "center", gap: 8, minHeight: 44, padding: "0 20px", borderRadius: 999, border: "1.5px solid rgba(255,255,255,0.5)", color: "#FFFFFF", fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
              Switch to Vedic Kundli
            </Link>
          </div>
        </div>
        {/* Calculator iframe */}
        <iframe
          src="/kp-kundli.html"
          title="KP Kundli Calculator"
          style={{ flex: 1, width: "100%", minHeight: "calc(100vh - 160px)", border: 0 }}
          allowFullScreen
        />
      </main>
    </div>
  );
}
