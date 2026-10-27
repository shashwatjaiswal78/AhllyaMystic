"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const QUESTION_GROUPS = [
  {
    title: "Love, marriage and family",
    icon: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z",
    items: [
      "When will I get married?",
      "Will I have a love or an arranged marriage?",
      "What will my married life be like?",
      "Will I have children?",
    ],
  },
  {
    title: "Career",
    icon: "M4 8h16v11H4zM9 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M4 13h16",
    items: [
      "When will I get a stable job or a promotion?",
      "Is a job or a business better for me?",
      "When can I change my job?",
    ],
  },
  {
    title: "Money and property",
    icon: "M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z",
    items: ["When will my finances improve?", "Will I own a house?"],
  },
  {
    title: "Health",
    icon: "M3 12h4l2-5 4 10 2-5h6",
    items: ["Which health areas should I take care of?"],
  },
  {
    title: "Education and travel",
    icon: "M3 9l9-4 9 4-9 4-9-4zM7 11v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4",
    items: ["Should I pursue further studies?", "Will I settle or work abroad?"],
  },
  {
    title: "Doshas and remedies",
    icon: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18",
    items: [
      "How serious is my Manglik dosha, and how do I reduce it?",
      "Does Kaal Sarp dosha affect me, and what should I do?",
      "Which gemstone suits me, if any?",
    ],
  },
];

function toINR(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

export default function KundliPage() {
  const [picks, setPicks] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggle(t: string) {
    setPicks((cur) => {
      const at = cur.indexOf(t);
      if (at >= 0) {
        const next = [...cur];
        next.splice(at, 1);
        return next;
      }
      return [...cur, t];
    });
  }

  const n = picks.length;
  const extra = Math.max(0, n - 2);
  const total = 999 + extra * 159;
  const hint =
    n === 0
      ? "Pick up to two questions at no extra cost."
      : n === 1
      ? "You can add one more question at no extra cost."
      : n === 2
      ? "Both included questions chosen. Extra questions are ₹159 each."
      : `${extra} extra ${extra === 1 ? "question" : "questions"} added.`;
  const barTitle =
    n === 0
      ? "Personalised Kundli Report"
      : `${n} ${n === 1 ? "question" : "questions"} selected`;

  return (
    <div style={{ fontFamily: "'Manrope', system-ui, sans-serif", color: "#1E1830", background: "#FBF7F0", fontSize: 16, lineHeight: 1.6 }}>
      {/* Announcement bar */}
      <div style={{ background: "#FFFFFF", color: "#921A11", fontSize: 14, fontWeight: 600, textAlign: "center", padding: "10px 16px", borderBottom: "1px solid #EADFD3" }}>
        <Link href="/masterclass" style={{ color: "#921A11", textDecoration: "none" }}>
          Live 2-day Manifestation Masterclass. Dates announced soon. Register for ₹99 →
        </Link>
      </div>

      <Nav />

      {/* RESULT HERO */}
      <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #2E003E 0%, #3D0752 50%, #6C1594 100%)", color: "#FFFFFF" }}>
        <div className="am-stars" aria-hidden="true" />
        <div className="am-stars2" aria-hidden="true" />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 24px 72px", position: "relative" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: "#EADFF2", marginBottom: 36 }}>
            <Link href="/" style={{ color: "#EADFF2", textDecoration: "none" }}>Home</Link>
            <span aria-hidden="true" style={{ margin: "0 8px" }}>/</span>
            <span style={{ color: "#FFFFFF", fontWeight: 600 }}>Free Kundli</span>
          </nav>
          <div>
            <p style={{ margin: "0 0 12px", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: 700 }}>Your free Kundli</p>
            <h1 style={{ margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(34px, 4.4vw, 56px)", lineHeight: 1.1 }}>
              Riya, here is your Kundli.
            </h1>
            <p style={{ margin: "0 0 32px", fontSize: 17, color: "#EADFF2" }}>
              Wednesday, 14 February 1996 · 9:30 am · Lucknow, Uttar Pradesh{" "}
              <a href="#" style={{ marginLeft: 10, color: "#FFFFFF", fontWeight: 700 }}>Edit details</a>
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: 16, marginBottom: 28 }}>
            <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 18, padding: "18px 20px" }}>
              <p style={{ margin: 0, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#EADFF2", fontWeight: 700 }}>Lagna (ascendant)</p>
              <p style={{ margin: "6px 0 0", display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'Marcellus', serif", fontSize: 30, lineHeight: 1.1 }}>Pisces</span>
                <span style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: 20, color: "#FCCE07" }}>मीन</span>
              </p>
              <p style={{ margin: "6px 0 0", fontSize: 14, color: "#EADFF2" }}>Meena lagna, ruled by Jupiter</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 18, padding: "18px 20px" }}>
              <p style={{ margin: 0, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#EADFF2", fontWeight: 700 }}>Moon sign (rashi)</p>
              <p style={{ margin: "6px 0 0", display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'Marcellus', serif", fontSize: 30, lineHeight: 1.1 }}>Scorpio</span>
                <span style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: 20, color: "#FCCE07" }}>वृश्चिक</span>
              </p>
              <p style={{ margin: "6px 0 0", fontSize: 14, color: "#EADFF2" }}>Vrischika rashi, ruled by Mars</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 18, padding: "18px 20px" }}>
              <p style={{ margin: 0, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#EADFF2", fontWeight: 700 }}>Nakshatra</p>
              <p style={{ margin: "6px 0 0", display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'Marcellus', serif", fontSize: 30, lineHeight: 1.1 }}>Jyeshtha</span>
                <span style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: 20, color: "#FCCE07" }}>ज्येष्ठा</span>
              </p>
              <p style={{ margin: "6px 0 0", fontSize: 14, color: "#EADFF2" }}>Pada 3, ruled by Mercury</p>
            </div>
          </div>
          {/* PDF download bar */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "18px 28px", background: "#FFFFFF", color: "#1E1830", borderRadius: 20, padding: "20px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, flex: "1 1 380px", minWidth: 0 }}>
              <span style={{ flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: 14, background: "#FCCE07", color: "#921A11" }}>
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                  <path d="M14 3v5h5M12 12v6M9 15l3 3 3-3" />
                </svg>
              </span>
              <div>
                <p style={{ margin: 0, fontFamily: "'Marcellus', serif", fontSize: 21 }}>Your free Kundli PDF</p>
                <p style={{ margin: "2px 0 0", fontSize: 14, color: "#5C5470" }}>Charts, planet positions, dasha periods and dosha checks in one file. Calculated instantly by software.</p>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, minHeight: 50, padding: "0 24px", borderRadius: 999, background: "#FCCE07", color: "#921A11", fontWeight: 700, textDecoration: "none" }}>
                Download free PDF
              </a>
              <a href="https://wa.me/919129237566" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, minHeight: 50, padding: "0 22px", borderRadius: 999, border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: 700, textDecoration: "none" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />
                  <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2z" />
                </svg>
                Send to WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SUB-NAV */}
      <div style={{ position: "sticky", top: 72, zIndex: 40, background: "rgba(251,247,240,0.96)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", borderBottom: "1px solid #E8DFD0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", gap: 28, overflowX: "auto", whiteSpace: "nowrap" }}>
          {[
            { href: "#profile", label: "Birth profile" },
            { href: "#charts", label: "Charts" },
            { href: "#planets", label: "Planets" },
            { href: "#doshas", label: "Doshas" },
            { href: "#dasha", label: "Dasha" },
            { href: "#nature", label: "Your nature" },
            { href: "#ask", label: "Ask our experts", red: true },
          ].map(({ href, label, red }) => (
            <a key={href} href={href} style={{ display: "inline-flex", alignItems: "center", minHeight: 54, fontSize: 15, fontWeight: 600, color: red ? "#921A11" : "#1E1830", textDecoration: "none" }}>
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* BIRTH PROFILE */}
      <div id="profile" style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 24px" }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 }}>Birth profile</p>
          <h2 style={{ margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: 1.15 }}>The basics of your chart.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: 20 }}>
          <ProfileCard title="Birth details" hindi="जन्म विवरण" rows={[
            ["Name", "Riya Sharma"], ["Gender", "Female"], ["Date of birth", "14 February 1996"],
            ["Day", "Wednesday"], ["Time of birth", "9:30:00 am"], ["Place", "Lucknow, Uttar Pradesh"],
            ["Latitude, longitude", "26°51′ N, 80°57′ E"], ["Time zone", "IST, UTC+05:30"],
            ["Ayanamsa", "Lahiri 23°48′18″"], ["Sunrise and sunset", "06:44 and 17:57"],
          ]} />
          <ProfileCard title="Panchang and Avkahada" hindi="पंचांग और अवकहड़ा चक्र" rows={[
            ["Tithi", "Krishna Dashami"], ["Vara", "Budhavara"], ["Nakshatra", "Jyeshtha, pada 3"],
            ["Yoga", "Harshana"], ["Karana", "Vanija"], ["Varna", "Brahmin"],
            ["Vashya", "Keeta"], ["Yoni", "Mriga (deer)"], ["Gana", "Rakshasa"], ["Nadi", "Adi"],
          ]} />
        </div>
      </div>

      {/* CHARTS */}
      <div id="charts" style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 24px" }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 }}>Your charts</p>
          <h2 style={{ margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: 1.15 }}>Lagna and Navamsa charts.</h2>
          <p style={{ margin: "0", fontSize: 16, color: "#5C5470", maxWidth: 720 }}>North Indian style. The top centre box is your first house, and houses run anticlockwise. Red numbers are signs, from 1 for Aries to 12 for Pisces.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: 24 }}>
          {/* Lagna Chart */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: 20, padding: 22 }}>
            <p style={{ margin: "0 0 14px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontFamily: "'Marcellus', serif", fontSize: 22 }}>Lagna chart (D1)</span>
              <span style={{ fontFamily: "'Tiro Devanagari Hindi', serif", color: "#921A11" }}>लग्न कुंडली</span>
            </p>
            <svg viewBox="0 0 360 360" role="img" aria-label="Lagna chart" style={{ display: "block", width: "100%", height: "auto", background: "#FFFFFF", borderRadius: 12 }}>
              <rect x="1" y="1" width="358" height="358" rx="10" fill="#FFFFFF" stroke="#6C1594" strokeWidth="2"/>
              <path d="M4 4L356 356M356 4L4 356" stroke="#D6C3E2" strokeWidth="1.2"/>
              <path d="M180.0 3L357 180.0L180.0 357L3 180.0Z" fill="none" stroke="#D6C3E2" strokeWidth="1.2"/>
              <text x="180.0" y="52.6" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">12</text>
              <text x="180.0" y="96.0" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#921A11">Asc<tspan fontSize="9" fill="#8A7F98" dy="-5">26°</tspan></text>
              <text x="180.0" y="113.0" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Ve<tspan fontSize="9" fill="#8A7F98" dy="-5">12°</tspan></text>
              <text x="180.0" y="130.0" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Ke<tspan fontSize="9" fill="#8A7F98" dy="-5">26°</tspan></text>
              <text x="55.8" y="27.4" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">1</text>
              <text x="23.4" y="59.8" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">2</text>
              <text x="48.6" y="184.0" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">3</text>
              <text x="23.4" y="308.2" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">4</text>
              <text x="55.8" y="340.6" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">5</text>
              <text x="180.0" y="315.4" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">6</text>
              <text x="180.0" y="257.0" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Ra<tspan fontSize="9" fill="#8A7F98" dy="-5">26°</tspan></text>
              <text x="304.2" y="340.6" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">7</text>
              <text x="336.6" y="308.2" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">8</text>
              <text x="313.2" y="267.8" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Mo<tspan fontSize="9" fill="#8A7F98" dy="-5">24°</tspan></text>
              <text x="311.4" y="184.0" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">9</text>
              <text x="252.0" y="185.0" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Ju<tspan fontSize="9" fill="#8A7F98" dy="-5">15°</tspan></text>
              <text x="336.6" y="59.8" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">10</text>
              <text x="313.2" y="102.2" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Me<tspan fontSize="9" fill="#8A7F98" dy="-5">5°</tspan></text>
              <text x="304.2" y="27.4" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">11</text>
              <text x="262.8" y="34.8" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Su<tspan fontSize="9" fill="#8A7F98" dy="-5">0°</tspan></text>
              <text x="262.8" y="51.8" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Ma<tspan fontSize="9" fill="#8A7F98" dy="-5">5°</tspan></text>
              <text x="262.8" y="68.8" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Sa<tspan fontSize="9" fill="#8A7F98" dy="-5">29°</tspan></text>
            </svg>
          </div>
          {/* Navamsa Chart */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: 20, padding: 22 }}>
            <p style={{ margin: "0 0 14px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontFamily: "'Marcellus', serif", fontSize: 22 }}>Navamsa chart (D9)</span>
              <span style={{ fontFamily: "'Tiro Devanagari Hindi', serif", color: "#921A11" }}>नवांश कुंडली</span>
            </p>
            <svg viewBox="0 0 360 360" role="img" aria-label="Navamsa chart" style={{ display: "block", width: "100%", height: "auto", background: "#FFFFFF", borderRadius: 12 }}>
              <rect x="1" y="1" width="358" height="358" rx="10" fill="#FFFFFF" stroke="#6C1594" strokeWidth="2"/>
              <path d="M4 4L356 356M356 4L4 356" stroke="#D6C3E2" strokeWidth="1.2"/>
              <path d="M180.0 3L357 180.0L180.0 357L3 180.0Z" fill="none" stroke="#D6C3E2" strokeWidth="1.2"/>
              <text x="180.0" y="52.6" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">11</text>
              <text x="180.0" y="87.5" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#921A11">Asc</text>
              <text x="180.0" y="104.5" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Mo</text>
              <text x="180.0" y="121.5" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Me</text>
              <text x="180.0" y="138.5" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Ke</text>
              <text x="55.8" y="27.4" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">12</text>
              <text x="23.4" y="59.8" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">1</text>
              <text x="48.6" y="184.0" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">2</text>
              <text x="23.4" y="308.2" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">3</text>
              <text x="46.8" y="267.8" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Sa</text>
              <text x="55.8" y="340.6" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">4</text>
              <text x="180.0" y="315.4" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">5</text>
              <text x="180.0" y="248.5" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Ju</text>
              <text x="180.0" y="265.5" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Ra</text>
              <text x="304.2" y="340.6" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">6</text>
              <text x="336.6" y="308.2" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">7</text>
              <text x="313.2" y="259.3" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Su</text>
              <text x="313.2" y="276.3" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Ve</text>
              <text x="311.4" y="184.0" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">8</text>
              <text x="252.0" y="185.0" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#1E1830">Ma</text>
              <text x="336.6" y="59.8" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">9</text>
              <text x="304.2" y="27.4" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#921A11">10</text>
            </svg>
          </div>
        </div>
        <div style={{ marginTop: 20, background: "#F3E8F7", borderRadius: 18, padding: "20px 24px" }}>
          <p style={{ margin: "0 0 10px", fontWeight: 700, color: "#3D0752" }}>Placements that stand out</p>
          <ul style={{ margin: 0, paddingLeft: 20, color: "#3D0752", fontSize: 15 }}>
            <li style={{ marginBottom: 8 }}>Venus is exalted in your lagna (Pisces).</li>
            <li style={{ marginBottom: 8 }}>The Moon is debilitated in Scorpio, in the 9th house.</li>
            <li style={{ marginBottom: 8 }}>Three planets sit in the 12th house: the Sun, Mars and Saturn. Mars is combust.</li>
          </ul>
          <p style={{ margin: "8px 0 0", fontSize: 14, color: "#5C5470" }}>What these mean for your life is explained in the Personalised Kundli Report.</p>
        </div>
      </div>

      {/* PLANETS */}
      <div id="planets" style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 24px" }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 }}>Planet positions</p>
          <h2 style={{ margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: 1.15 }}>Where each planet was when you were born.</h2>
        </div>
        <div style={{ overflowX: "auto", border: "1px solid #E8DFD0", borderRadius: 16, background: "#FFFFFF" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 760 }}>
            <thead>
              <tr>
                {["Planet", "Sign", "Degree", "Nakshatra, pada", "Nakshatra lord", "House", "Strength"].map((h) => (
                  <th key={h} style={{ textAlign: "left", padding: "12px 14px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFFFFF", background: "#4A0A66", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Lagna", "Pisces", "26°06′35″", "Revati 3", "", "1", ""],
                ["Sun", "Aquarius", "0°56′02″", "Dhanishta 3", "Mars", "12", ""],
                ["Moon", "Scorpio", "24°26′16″", "Jyeshtha 3", "Mercury", "9", "Debilitated"],
                ["Mars", "Aquarius", "5°08′46″", "Dhanishta 4", "Mars", "12", "Combust"],
                ["Mercury", "Capricorn", "5°07′59″", "Uttara Ashadha 3", "Sun", "11", ""],
                ["Jupiter", "Sagittarius", "15°05′13″", "Purva Ashadha 1", "Venus", "10", ""],
                ["Venus", "Pisces", "12°10′03″", "Uttara Bhadrapada 3", "Saturn", "1", "Exalted"],
                ["Saturn", "Aquarius", "29°43′41″", "Purva Bhadrapada 3", "Jupiter", "12", ""],
                ["Rahu", "Virgo", "26°17′41″", "Chitra 1", "Mars", "7", ""],
                ["Ketu", "Pisces", "26°17′41″", "Revati 3", "Mercury", "1", ""],
              ].map(([planet, sign, deg, nak, lord, house, str], i) => (
                <tr key={planet}>
                  {[planet, sign, deg, nak, lord, house, str].map((cell, j) => (
                    <td key={j} style={{ padding: "11px 14px", fontSize: 15, borderBottom: "1px solid #EFE6D8", background: i % 2 === 0 ? "#FFFFFF" : "#FBF7F0", whiteSpace: "nowrap", fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ margin: "12px 0 0", fontSize: 14, color: "#5C5470" }}>Sidereal zodiac, Lahiri ayanamsa, whole sign houses. Rahu and Ketu always move in reverse, so they are not marked retrograde.</p>
      </div>

      {/* DOSHAS */}
      <div id="doshas" style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 24px" }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 }}>Dosha check</p>
          <h2 style={{ margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: 1.15 }}>Three doshas, checked automatically.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 20 }}>
          <DoshaCard
            title="Manglik dosha" hindi="मांगलिक दोष"
            status="Present" statusColor="#921A11" statusBg="#F8E8E6" borderColor="#921A11"
            body="Mars is in the 12th house from your lagna and the 4th from your Moon."
            note="Manglik dosha is common and is often reduced or cancelled by other placements. Our experts check this before suggesting any remedy."
            showLink
          />
          <DoshaCard
            title="Kaal Sarp dosha" hindi="काल सर्प दोष"
            status="Present" statusColor="#921A11" statusBg="#F8E8E6" borderColor="#921A11"
            body="All seven planets sit on one side of the Rahu and Ketu axis."
            note="Its effect depends on the houses involved and on the strength of your other planets, so it needs a proper reading."
            showLink
          />
          <DoshaCard
            title="Sade Sati" hindi="साढ़े साती"
            status="Not running" statusColor="#1F7A4C" statusBg="#EAF5EE" borderColor="#1F7A4C"
            body="Saturn is transiting the 5th house from your Moon as of today."
            note="Sade Sati runs while Saturn passes the 12th, 1st and 2nd houses from your Moon. It is not affecting you now."
            showLink={false}
          />
        </div>
      </div>

      {/* DASHA */}
      <div id="dasha" style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 24px" }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 }}>Vimshottari dasha</p>
          <h2 style={{ margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: 1.15 }}>The planetary periods of your life.</h2>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
          <span style={{ fontSize: 15, background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: 999, padding: "8px 16px" }}>Mahadasha: <b>Venus</b> · Mar 2010 to Mar 2030</span>
          <span style={{ fontSize: 15, background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: 999, padding: "8px 16px" }}>Antardasha: <b>Mercury</b> · Mar 2026 to Jan 2029</span>
        </div>
        {/* Dasha timeline bar */}
        <div style={{ display: "flex", border: "1px solid #E8DFD0", borderRadius: 14, overflow: "hidden", marginBottom: 24, overflowX: "auto" }}>
          {[
            { label: "Mercury", year: "1996", flex: 7, active: false },
            { label: "Ketu", year: "2003", flex: 7, active: false },
            { label: "Venus", year: "2010", flex: 20, active: true },
            { label: "Sun", year: "2030", flex: 6, active: false },
            { label: "Moon", year: "2036", flex: 10, active: false },
            { label: "Mars", year: "2046", flex: 7, active: false },
            { label: "Rahu", year: "2053", flex: 18, active: false },
            { label: "Jupiter", year: "2071", flex: 16, active: false },
            { label: "Saturn", year: "2087", flex: 19, active: false },
          ].map(({ label, year, flex, active }, i, arr) => (
            <div key={label} style={{ flex: `${flex} 1 0`, minWidth: 0, padding: "10px 6px", textAlign: "center", background: active ? "#6C1594" : "#FFFFFF", color: active ? "#FFFFFF" : "#1E1830", borderRight: i < arr.length - 1 ? "1px solid #E8DFD0" : undefined }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 14, overflow: "hidden", textOverflow: "ellipsis" }}>{label}</p>
              <p style={{ margin: "2px 0 0", fontSize: 12, opacity: 0.8 }}>{year}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: 20, alignItems: "start" }}>
          <div style={{ border: "1px solid #E8DFD0", borderRadius: 16, overflow: "hidden" }}>
            <p style={{ margin: 0, padding: "14px 16px", background: "#4A0A66", color: "#FFFFFF", fontWeight: 700 }}>Antardashas within Venus</p>
            {[
              ["Venus – Venus", "19 Mar 2010 to 18 Jul 2013", false],
              ["Venus – Sun", "18 Jul 2013 to 18 Jul 2014", false],
              ["Venus – Moon", "18 Jul 2014 to 18 Mar 2016", false],
              ["Venus – Mars", "18 Mar 2016 to 18 May 2017", false],
              ["Venus – Rahu", "18 May 2017 to 18 May 2020", false],
              ["Venus – Jupiter", "18 May 2020 to 17 Jan 2023", false],
              ["Venus – Saturn", "17 Jan 2023 to 19 Mar 2026", false],
              ["Venus – Mercury", "19 Mar 2026 to 17 Jan 2029", true],
              ["Venus – Ketu", "17 Jan 2029 to 19 Mar 2030", false],
            ].map(([label, dates, isCurrent]) => (
              <div key={label as string} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: 12, padding: "12px 16px", borderBottom: "1px solid #EFE6D8", background: isCurrent ? "#F3E8F7" : "#FFFFFF", fontSize: 15 }}>
                <span style={{ fontWeight: isCurrent ? 700 : 500 }}>
                  {label}
                  {isCurrent && <span style={{ marginLeft: 8, fontSize: 12, fontWeight: 700, color: "#FFFFFF", background: "#921A11", padding: "2px 8px", borderRadius: 999 }}>Now</span>}
                </span>
                <span style={{ color: "#5C5470" }}>{dates as string}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "linear-gradient(135deg, #2E003E, #6C1594)", color: "#FFFFFF", borderRadius: 20, padding: 26, position: "relative", overflow: "hidden" }}>
            <div className="am-stars" aria-hidden="true" />
            <p style={{ position: "relative", margin: "0 0 8px", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: 700 }}>What does Venus–Mercury mean for you?</p>
            <p style={{ position: "relative", margin: "0 0 18px", fontFamily: "'Marcellus', serif", fontSize: 24, lineHeight: 1.3 }}>Your report reads your next three years period by period, with dates and what to do in each.</p>
            <a href="#ask" style={{ position: "relative", display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 22px", borderRadius: 999, background: "#FCCE07", color: "#921A11", fontWeight: 700, textDecoration: "none" }}>See what is ahead</a>
          </div>
        </div>
      </div>

      {/* YOUR NATURE */}
      <div id="nature" style={{ background: "#FFFFFF", borderTop: "1px solid #E8DFD0", borderBottom: "1px solid #E8DFD0", marginTop: 64 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px" }}>
          <div style={{ marginBottom: 32 }}>
            <p style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 }}>Your birth panchang</p>
            <h2 style={{ margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: 1.15 }}>What the day you were born says about you.</h2>
            <p style={{ margin: 0, fontSize: 16, color: "#5C5470", maxWidth: 720 }}>General traits for your weekday, nakshatra, tithi, karana and yoga. They describe tendencies shared by everyone born under them, not a reading of your full chart.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: 18 }}>
            {[
              { title: "Your basic nature", basis: "Based on your weekday (Wednesday)", text: "Born on a Wednesday, the day of Mercury, you tend to be quick-witted, curious and good with words. You learn fast and enjoy conversation, ideas and anything that keeps your mind busy." },
              { title: "Your character", basis: "Based on your nakshatra (Jyeshtha)", text: "Jyeshtha, the eldest star, gives a protective and responsible nature. You often take charge in difficult moments and people rely on you, though you may keep your own worries to yourself." },
              { title: "Your values", basis: "Based on your tithi (Krishna Dashami)", text: "Dashami is a tithi of steady effort and duty. You like to finish what you begin, and you respect people who keep their word." },
              { title: "Your habits", basis: "Based on your karana (Vanija)", text: "Vanija is the karana of trade. It brings a practical, business-minded streak and a habit of weighing the value of things before you commit." },
              { title: "Your interests", basis: "Based on your yoga (Harshana)", text: "Harshana means joy. It points to a cheerful, optimistic temperament and a knack for lifting the mood of the people around you." },
            ].map(({ title, basis, text }) => (
              <div key={title} style={{ background: "#FBF7F0", border: "1px solid #EFE6D8", borderRadius: 18, padding: "22px 24px" }}>
                <p style={{ margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: 22 }}>{title}</p>
                <p style={{ margin: "0 0 12px", paddingLeft: 12, borderLeft: "3px solid #921A11", fontSize: 14, fontWeight: 700, color: "#921A11" }}>{basis}</p>
                <p style={{ margin: 0, fontSize: 15, color: "#3B3350" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ASK OUR EXPERTS */}
      <div id="ask" style={{ position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at 100% 0%, rgba(108,21,148,0.08), rgba(108,21,148,0) 55%), #F4EDE1" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px 88px" }}>
          <div style={{ marginBottom: 36 }}>
            <p style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 }}>Ask our experts</p>
            <h2 style={{ margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: 1.15 }}>Want answers, not just a chart?</h2>
            <p style={{ margin: 0, fontSize: 17, color: "#5C5470", maxWidth: 760 }}>Your chart shows where the planets are. Our experts tell you what it means for your life. Pick the questions you want answered in your Personalised Kundli Report: two are included, and each extra question is ₹159.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)", gap: 28, alignItems: "start" }}>
            <div style={{ display: "grid", gap: 16 }}>
              {QUESTION_GROUPS.map((grp) => (
                <div key={grp.title} style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: 20, padding: "20px 22px" }}>
                  <p style={{ margin: "0 0 14px", display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 999, background: "#FCCE07", color: "#921A11" }}>
                      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d={grp.icon} />
                      </svg>
                    </span>
                    <span style={{ fontFamily: "'Marcellus', serif", fontSize: 21 }}>{grp.title}</span>
                  </p>
                  <div style={{ display: "grid", gap: 8 }}>
                    {grp.items.map((text) => {
                      const sel = picks.includes(text);
                      return (
                        <button
                          key={text}
                          type="button"
                          role="checkbox"
                          aria-checked={sel}
                          onClick={() => toggle(text)}
                          style={{
                            display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left",
                            padding: "12px 14px", borderRadius: 14, cursor: "pointer", font: "inherit", fontSize: 15,
                            border: sel ? "1.5px solid #6C1594" : "1px solid #E8DFD0",
                            background: sel ? "#F3E8F7" : "#FFFFFF",
                            fontWeight: sel ? 600 : 400, color: sel ? "#2E003E" : "#1E1830",
                          }}
                        >
                          <span style={{
                            flex: "none", display: "flex", alignItems: "center", justifyContent: "center",
                            width: 22, height: 22, borderRadius: 6,
                            background: sel ? "#6C1594" : "#FFFFFF",
                            border: sel ? "none" : "1.5px solid #B9AEC6",
                            color: "#FFFFFF",
                          }}>
                            {sel && (
                              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12l5 5 9-10" />
                              </svg>
                            )}
                          </span>
                          {text}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <aside style={{ position: "sticky", top: 150, display: "grid", gap: 14 }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: 22, padding: 24, outline: "1px solid #EFE6D8", outlineOffset: -9 }}>
                <p style={{ margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: 23 }}>Personalised Kundli Report</p>
                <p style={{ margin: "0 0 18px", fontSize: 14, color: "#5C5470" }}>32-page report prepared by Ahalya Sangeeta and Maneswita, in English or Hindi.</p>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 15, marginBottom: 8 }}>
                  <span>Report with 2 questions</span>
                  <span><span style={{ color: "#5C5470", textDecoration: "line-through", marginRight: 6 }}>₹1,998</span>₹999</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 15, marginBottom: 8 }}>
                  <span>Questions selected</span><span>{n}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 15, marginBottom: 14 }}>
                  <span>Extra questions ({extra} × ₹159)</span><span>{toINR(extra * 159)}</span>
                </div>
                <div style={{ height: 1, background: "#EFE6D8", marginBottom: 14 }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
                  <span style={{ fontWeight: 700 }}>Total</span>
                  <span style={{ fontFamily: "'Marcellus', serif", fontSize: 32 }}>{toINR(total)}</span>
                </div>
                <Link href="/checkout/kundli" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 54, borderRadius: 999, background: "#FCCE07", color: "#921A11", fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
                  Continue to order
                </Link>
                <p style={{ margin: "12px 0 0", textAlign: "center", fontSize: 13, color: "#5C5470" }}>{hint}</p>
              </div>
              <div style={{ background: "#F3E8F7", borderRadius: 18, padding: "16px 18px", fontSize: 14, color: "#3D0752" }}>
                Your birth details are already filled in, so ordering takes under a minute.
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* MORE WAYS */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px 32px" }}>
        <div style={{ marginBottom: 28 }}>
          <p style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 }}>Other ways we can help</p>
          <h2 style={{ margin: 0, fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(28px, 3vw, 38px)" }}>Prefer to talk, or plan your year?</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 20 }}>
          {[
            { title: "Consultation", desc: "Talk to our experts one-on-one about your chart, on an audio or video call.", price: "From ₹2,301", href: "/consult", cta: "Book a call" },
            { title: "Varshphal 2027", desc: "Your next 12 months, month by month: the year's main focus, key phases and simple remedies.", price: "₹739", href: "/report/varshphal", cta: "View report" },
            { title: "Couple Kundli Milan", desc: "Gun Milan, Mangal Dosha check and an honest view of long-term compatibility before marriage.", price: "₹3,399", href: "/report/milan", cta: "View report" },
          ].map(({ title, desc, price, href, cta }) => (
            <div key={title} style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: 20, padding: 26, display: "flex", flexDirection: "column", gap: 10, outline: "1px solid #EFE6D8", outlineOffset: -9 }}>
              <p style={{ margin: 0, fontFamily: "'Marcellus', serif", fontSize: 23 }}>{title}</p>
              <p style={{ margin: 0, fontSize: 15, color: "#5C5470" }}>{desc}</p>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, paddingTop: 8 }}>
                <span style={{ fontFamily: "'Marcellus', serif", fontSize: 24 }}>{price}</span>
                <Link href={href} style={{ display: "inline-flex", alignItems: "center", minHeight: 44, padding: "0 20px", borderRadius: 999, border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: 700, textDecoration: "none" }}>{cta}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STICKY ORDER BAR */}
      <div style={{ position: "sticky", bottom: 0, zIndex: 30, background: "rgba(46,0,62,0.96)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", color: "#FFFFFF", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
            <span style={{ flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: 42, height: 42, borderRadius: 999, background: "#FCCE07", color: "#921A11", fontWeight: 800, fontSize: 16 }}>{n}</span>
            <div style={{ minWidth: 0 }}>
              <p style={{ margin: 0, fontWeight: 700 }}>{barTitle}</p>
              <p style={{ margin: 0, fontSize: 13, color: "#EADFF2" }}>2 questions included · ₹159 for each extra</p>
            </div>
          </div>
          <Link href="/checkout/kundli" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, minHeight: 48, padding: "0 24px", borderRadius: 999, background: "#FCCE07", color: "#921A11", fontWeight: 700, textDecoration: "none" }}>
            Get my report · {toINR(total)}
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ProfileCard({ title, hindi, rows }: { title: string; hindi: string; rows: [string, string][] }) {
  return (
    <div style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: 20, padding: "24px 26px", outline: "1px solid #EFE6D8", outlineOffset: -9 }}>
      <p style={{ margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: 22 }}>{title}</p>
      <p style={{ margin: "0 0 8px", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: 15, color: "#921A11" }}>{hindi}</p>
      {rows.map(([label, value]) => (
        <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: 15 }}>
          <span style={{ color: "#5C5470" }}>{label}</span>
          <span style={{ fontWeight: 700, textAlign: "right" }}>{value}</span>
        </div>
      ))}
    </div>
  );
}

function DoshaCard({ title, hindi, status, statusColor, statusBg, borderColor, body, note, showLink }: {
  title: string; hindi: string; status: string;
  statusColor: string; statusBg: string; borderColor: string;
  body: string; note: string; showLink: boolean;
}) {
  return (
    <div style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderTop: `4px solid ${borderColor}`, borderRadius: 18, padding: 22 }}>
      <p style={{ margin: 0, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
        <span style={{ fontFamily: "'Marcellus', serif", fontSize: 22 }}>{title}</span>
        <span style={{ fontSize: 13, fontWeight: 700, color: statusColor, background: statusBg, padding: "4px 12px", borderRadius: 999 }}>{status}</span>
      </p>
      <p style={{ margin: "2px 0 12px", fontFamily: "'Tiro Devanagari Hindi', serif", color: "#921A11" }}>{hindi}</p>
      <p style={{ margin: "0 0 8px", fontSize: 15 }}><b>In your chart:</b> {body}</p>
      <p style={{ margin: 0, fontSize: 15, color: "#5C5470" }}>{note}</p>
      {showLink && <a href="#ask" style={{ display: "inline-flex", marginTop: 14, fontWeight: 700, color: "#6C1594" }}>Get remedies in your report →</a>}
    </div>
  );
}
