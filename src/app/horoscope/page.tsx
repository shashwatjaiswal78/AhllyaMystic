"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type Sign = {
  en: string; hi: string; lord: string; lordHi: string;
  el: string; elHi: string; q: string; qHi: string;
  day: string; dayHi: string;
  str: string[]; strHi: string[]; ch: string[]; chHi: string[];
  img: string;
};

const SIGNS: Sign[] = [
  { en: "Aries", hi: "मेष", lord: "Mars", lordHi: "मंगल", el: "Fire", elHi: "अग्नि", q: "Movable", qHi: "चर", day: "Tuesday", dayHi: "मंगलवार", str: ["Leadership", "Courage", "Energy"], strHi: ["नेतृत्व", "साहस", "ऊर्जा"], ch: ["Impatience", "Impulsiveness"], chHi: ["अधीरता", "आवेश"], img: "" },
  { en: "Taurus", hi: "वृषभ", lord: "Venus", lordHi: "शुक्र", el: "Earth", elHi: "पृथ्वी", q: "Fixed", qHi: "स्थिर", day: "Friday", dayHi: "शुक्रवार", str: ["Patience", "Reliability", "Taste"], strHi: ["धैर्य", "विश्वसनीयता", "सुरुचि"], ch: ["Stubbornness", "Possessiveness"], chHi: ["हठ", "अधिकार भावना"], img: "" },
  { en: "Gemini", hi: "मिथुन", lord: "Mercury", lordHi: "बुध", el: "Air", elHi: "वायु", q: "Dual", qHi: "द्विस्वभाव", day: "Wednesday", dayHi: "बुधवार", str: ["Versatility", "Wit", "Communication"], strHi: ["बहुमुखी प्रतिभा", "बुद्धि", "संवाद"], ch: ["Indecision", "Restlessness"], chHi: ["अनिर्णय", "चंचलता"], img: "" },
  { en: "Cancer", hi: "कर्क", lord: "Moon", lordHi: "चंद्र", el: "Water", elHi: "जल", q: "Movable", qHi: "चर", day: "Monday", dayHi: "सोमवार", str: ["Intuition", "Care", "Loyalty"], strHi: ["अंतर्ज्ञान", "देखभाल", "निष्ठा"], ch: ["Moodiness", "Over-sensitivity"], chHi: ["मनोदशा", "अतिसंवेदनशीलता"], img: "" },
  { en: "Leo", hi: "सिंह", lord: "Sun", lordHi: "सूर्य", el: "Fire", elHi: "अग्नि", q: "Fixed", qHi: "स्थिर", day: "Sunday", dayHi: "रविवार", str: ["Confidence", "Generosity", "Leadership"], strHi: ["आत्मविश्वास", "उदारता", "नेतृत्व"], ch: ["Pride", "Stubbornness"], chHi: ["अहंकार", "हठ"], img: "" },
  { en: "Virgo", hi: "कन्या", lord: "Mercury", lordHi: "बुध", el: "Earth", elHi: "पृथ्वी", q: "Dual", qHi: "द्विस्वभाव", day: "Wednesday", dayHi: "बुधवार", str: ["Analytical", "Detail-oriented", "Practical"], strHi: ["विश्लेषणात्मक", "विस्तार पर ध्यान", "व्यावहारिक"], ch: ["Over-criticism", "Anxiety"], chHi: ["अत्यधिक आलोचना", "चिंता"], img: "" },
  { en: "Libra", hi: "तुला", lord: "Venus", lordHi: "शुक्र", el: "Air", elHi: "वायु", q: "Movable", qHi: "चर", day: "Friday", dayHi: "शुक्रवार", str: ["Diplomacy", "Balance", "Charm"], strHi: ["कूटनीति", "संतुलन", "आकर्षण"], ch: ["Indecision", "People-pleasing"], chHi: ["अनिर्णय", "सबको खुश रखना"], img: "" },
  { en: "Scorpio", hi: "वृश्चिक", lord: "Mars", lordHi: "मंगल", el: "Water", elHi: "जल", q: "Fixed", qHi: "स्थिर", day: "Tuesday", dayHi: "मंगलवार", str: ["Intensity", "Intuition", "Determination"], strHi: ["तीव्रता", "अंतर्ज्ञान", "दृढ़ता"], ch: ["Jealousy", "Secretiveness"], chHi: ["ईर्ष्या", "रहस्यमयता"], img: "" },
  { en: "Sagittarius", hi: "धनु", lord: "Jupiter", lordHi: "बृहस्पति", el: "Fire", elHi: "अग्नि", q: "Dual", qHi: "द्विस्वभाव", day: "Thursday", dayHi: "गुरुवार", str: ["Optimism", "Adventure", "Wisdom"], strHi: ["आशावाद", "साहसिकता", "ज्ञान"], ch: ["Tactlessness", "Restlessness"], chHi: ["बेतुकापन", "अस्थिरता"], img: "" },
  { en: "Capricorn", hi: "मकर", lord: "Saturn", lordHi: "शनि", el: "Earth", elHi: "पृथ्वी", q: "Movable", qHi: "चर", day: "Saturday", dayHi: "शनिवार", str: ["Discipline", "Ambition", "Patience"], strHi: ["अनुशासन", "महत्वाकांक्षा", "धैर्य"], ch: ["Rigidity", "Pessimism"], chHi: ["कठोरता", "निराशावाद"], img: "" },
  { en: "Aquarius", hi: "कुंभ", lord: "Saturn", lordHi: "शनि", el: "Air", elHi: "वायु", q: "Fixed", qHi: "स्थिर", day: "Saturday", dayHi: "शनिवार", str: ["Innovation", "Humanitarianism", "Intellect"], strHi: ["नवाचार", "मानवतावाद", "बुद्धिमत्ता"], ch: ["Detachment", "Stubbornness"], chHi: ["अलगाव", "हठ"], img: "" },
  { en: "Pisces", hi: "मीन", lord: "Jupiter", lordHi: "बृहस्पति", el: "Water", elHi: "जल", q: "Dual", qHi: "द्विस्वभाव", day: "Thursday", dayHi: "गुरुवार", str: ["Compassion", "Intuition", "Creativity"], strHi: ["करुणा", "अंतर्ज्ञान", "रचनात्मकता"], ch: ["Escapism", "Over-sensitivity"], chHi: ["पलायन", "अतिसंवेदनशीलता"], img: "" },
];

const TODAY_DATA = [
  { overall: 78, band: 0, areas: [{ id: "love", score: 82 }, { id: "career", score: 75 }, { id: "money", score: 68 }, { id: "health", score: 87 }], lucky: { num: 3, col: "Red", colHi: "लाल", g: "Mars", gHi: "मंगल" } },
  { overall: 65, band: 1, areas: [{ id: "love", score: 60 }, { id: "career", score: 70 }, { id: "money", score: 72 }, { id: "health", score: 58 }], lucky: { num: 6, col: "Pink", colHi: "गुलाबी", g: "Venus", gHi: "शुक्र" } },
  { overall: 72, band: 1, areas: [{ id: "love", score: 70 }, { id: "career", score: 80 }, { id: "money", score: 65 }, { id: "health", score: 73 }], lucky: { num: 5, col: "Green", colHi: "हरा", g: "Mercury", gHi: "बुध" } },
  { overall: 60, band: 2, areas: [{ id: "love", score: 72 }, { id: "career", score: 55 }, { id: "money", score: 48 }, { id: "health", score: 65 }], lucky: { num: 2, col: "White", colHi: "सफेद", g: "Moon", gHi: "चंद्र" } },
  { overall: 85, band: 0, areas: [{ id: "love", score: 90 }, { id: "career", score: 88 }, { id: "money", score: 80 }, { id: "health", score: 82 }], lucky: { num: 1, col: "Gold", colHi: "सोनहरा", g: "Sun", gHi: "सूर्य" } },
  { overall: 70, band: 1, areas: [{ id: "love", score: 62 }, { id: "career", score: 78 }, { id: "money", score: 74 }, { id: "health", score: 66 }], lucky: { num: 5, col: "Green", colHi: "हरा", g: "Mercury", gHi: "बुध" } },
  { overall: 75, band: 0, areas: [{ id: "love", score: 85 }, { id: "career", score: 72 }, { id: "money", score: 70 }, { id: "health", score: 73 }], lucky: { num: 6, col: "Pink", colHi: "गुलाबी", g: "Venus", gHi: "शुक्र" } },
  { overall: 68, band: 1, areas: [{ id: "love", score: 65 }, { id: "career", score: 72 }, { id: "money", score: 60 }, { id: "health", score: 75 }], lucky: { num: 9, col: "Red", colHi: "लाल", g: "Mars", gHi: "मंगल" } },
  { overall: 80, band: 0, areas: [{ id: "love", score: 78 }, { id: "career", score: 85 }, { id: "money", score: 76 }, { id: "health", score: 81 }], lucky: { num: 3, col: "Yellow", colHi: "पीला", g: "Jupiter", gHi: "बृहस्पति" } },
  { overall: 62, band: 2, areas: [{ id: "love", score: 55 }, { id: "career", score: 68 }, { id: "money", score: 65 }, { id: "health", score: 60 }], lucky: { num: 8, col: "Blue", colHi: "नीला", g: "Saturn", gHi: "शनि" } },
  { overall: 74, band: 1, areas: [{ id: "love", score: 70 }, { id: "career", score: 80 }, { id: "money", score: 72 }, { id: "health", score: 74 }], lucky: { num: 4, col: "Sky Blue", colHi: "आकाशी नीला", g: "Saturn", gHi: "शनि" } },
  { overall: 71, band: 1, areas: [{ id: "love", score: 77 }, { id: "career", score: 68 }, { id: "money", score: 65 }, { id: "health", score: 74 }], lucky: { num: 7, col: "Sea Green", colHi: "समुद्री हरा", g: "Jupiter", gHi: "बृहस्पति" } },
];

const AREA_LABELS: Record<string, { en: string; hi: string; icon: string }> = {
  love: { en: "Love & family", hi: "प्रेम और परिवार", icon: "M12 21s-7-4.4-9.3-9A5.4 5.4 0 0 1 12 6.6 5.4 5.4 0 0 1 21.3 12C19 16.6 12 21 12 21z" },
  career: { en: "Career", hi: "करियर", icon: "M4 7h16v12H4zM9 7V5h6v2" },
  money: { en: "Money", hi: "धन", icon: "M12 3v18M17 7H9.5a3 3 0 0 0 0 6h5a3 3 0 0 1 0 6H6" },
  health: { en: "Health", hi: "स्वास्थ्य", icon: "M3 12h4l3-7 4 14 3-7h4" },
};

const BAND_LABELS = { en: ["Favourable day", "Mixed day", "Cautious day"], hi: ["शुभ दिन", "मिला-जुला दिन", "सावधानी का दिन"] };

const FAQS_EN = [
  { q: "Is this based on Moon sign or Sun sign?", a: "Moon sign (Chandra Rashi), as in Vedic astrology. This is the sign the Moon was in at the time of your birth, and it often differs from your Western Sun sign." },
  { q: "How are these scores calculated?", a: "From the actual positions of planets at sunrise in New Delhi, counted from your Moon sign. The scores reflect how each planet influences different areas of life today." },
  { q: "I don't know my Moon sign. How do I find it?", a: "Use our free Kundli tool with your birth date, time and place. It tells you your Moon sign in seconds." },
  { q: "Is the daily horoscope enough to make decisions?", a: "It is general guidance for everyone with your Moon sign. For your own decisions, your personal Kundli is far more accurate." },
];

export default function HoroscopePage() {
  const [signIdx, setSignIdx] = useState(0);
  const [lang, setLang] = useState<"en" | "hi">("en");
  const [day, setDay] = useState<"today" | "tomorrow">("today");

  const hi = lang === "hi";
  const sg = SIGNS[signIdx];
  const d = TODAY_DATA[signIdx];
  const bands = hi ? BAND_LABELS.hi : BAND_LABELS.en;
  const C = 2 * Math.PI * 52;

  return (
    <div style={{ fontFamily: "'Manrope', system-ui, sans-serif", color: "#1E1830", background: "#FBF7F0", fontSize: 16, lineHeight: 1.6 }}>
      {/* Announcement bar */}
      <div style={{ background: "#FFFFFF", color: "#921A11", fontSize: 14, fontWeight: 600, textAlign: "center", padding: "10px 16px", borderBottom: "1px solid #EADFD3" }}>
        <Link href="/masterclass" style={{ color: "#921A11", textDecoration: "none" }}>
          Live 2-day Manifestation Masterclass. Dates announced soon. Register for ₹99 →
        </Link>
      </div>

      <Nav />

      {/* HERO */}
      <div style={{ position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at 100% 0%, rgba(108,21,148,0.10), rgba(108,21,148,0) 50%), radial-gradient(ellipse at 0% 100%, rgba(146,26,17,0.05), rgba(146,26,17,0) 45%), #FBF7F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "22px 24px 40px", position: "relative" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: "#5C5470", marginBottom: 28 }}>
            <Link href="/" style={{ color: "#5C5470", textDecoration: "none" }}>{hi ? "होम" : "Home"}</Link>
            <span aria-hidden="true" style={{ margin: "0 8px" }}>/</span>
            <span style={{ color: "#1E1830", fontWeight: 600 }}>{hi ? "राशिफल" : "Horoscope"}</span>
          </nav>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 18, marginBottom: 26 }}>
            <div style={{ minWidth: 0 }}>
              <p style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 }}>
                {hi ? "दैनिक राशिफल" : "Daily horoscope"}
              </p>
              <h1 style={{ margin: "0 0 8px", fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(34px, 4.2vw, 52px)", lineHeight: 1.1 }}>
                {hi ? `${sg.hi} राशिफल ${day === "today" ? "आज" : "कल"}` : `${sg.en} Horoscope ${day === "today" ? "Today" : "Tomorrow"}`}
              </h1>
              <p style={{ margin: 0, fontSize: 16, color: "#5C5470" }}>
                {hi ? "आज, 27 अक्टूबर 2026" : "Tuesday, 27 October 2026"}
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {/* Day tabs */}
              <div role="tablist" aria-label="Day" style={{ display: "inline-flex", gap: 4, background: "#F3EDE3", padding: 4, borderRadius: 999 }}>
                {(["today", "tomorrow"] as const).map((d_) => (
                  <button key={d_} type="button" role="tab" aria-selected={day === d_} onClick={() => setDay(d_)}
                    style={{ minHeight: 40, padding: "0 18px", borderRadius: 999, border: 0, background: day === d_ ? "#FFFFFF" : "transparent", color: day === d_ ? "#2E003E" : "#5C5470", font: "inherit", fontSize: 14, fontWeight: day === d_ ? 700 : 600, boxShadow: day === d_ ? "0 6px 14px -10px rgba(46,0,62,.55)" : undefined, cursor: "pointer" }}>
                    {d_ === "today" ? (hi ? "आज" : "Today") : (hi ? "कल" : "Tomorrow")}
                  </button>
                ))}
              </div>
              {/* Language tabs */}
              <div role="tablist" aria-label="Language" style={{ display: "inline-flex", gap: 4, background: "#F3EDE3", padding: 4, borderRadius: 999 }}>
                {(["en", "hi"] as const).map((l) => (
                  <button key={l} type="button" role="tab" aria-selected={lang === l} onClick={() => setLang(l)}
                    style={{ minHeight: 40, padding: "0 18px", borderRadius: 999, border: 0, background: lang === l ? "#FFFFFF" : "transparent", color: lang === l ? "#2E003E" : "#5C5470", font: "inherit", fontSize: 14, fontWeight: lang === l ? 700 : 600, boxShadow: lang === l ? "0 6px 14px -10px rgba(46,0,62,.55)" : undefined, cursor: "pointer" }}>
                    {l === "en" ? "English" : "हिंदी"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sign selector */}
          <div role="tablist" aria-label={hi ? "अपनी राशि चुनें" : "Choose your rashi"} style={{ display: "flex", gap: 6, overflowX: "auto", padding: "4px 2px 16px", scrollSnapType: "x mandatory" }}>
            {SIGNS.map((s, i) => {
              const sel = i === signIdx;
              return (
                <button key={s.en} type="button" role="tab" aria-selected={sel} onClick={() => setSignIdx(i)}
                  style={{ flex: "1 0 84px", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "4px 0", border: 0, background: "none", cursor: "pointer", font: "inherit", color: "#1E1830" }}>
                  <span style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 80, height: 80 }}>
                    <svg aria-hidden="true" viewBox="0 0 116 116" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" stroke={sel ? "#921A11" : "#6C1594"} strokeOpacity={sel ? 1 : 0.45} strokeWidth={sel ? 2 : 1}>
                      <circle cx="58" cy="58" r="56" strokeDasharray={sel ? "4 4" : "2 5"} />
                      <path d="M58 0V8M58 108V116M0 58H8M108 58H116" strokeOpacity="0.6" />
                    </svg>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: 999, background: sel ? "#F3E8F7" : "#FFFFFF", boxShadow: sel ? "0 0 0 3px rgba(108,21,148,0.18), 0 12px 24px -10px rgba(46,0,62,0.55)" : "0 10px 22px -12px rgba(46,0,62,0.45)" }}>
                      <span style={{ fontFamily: "'Marcellus', serif", fontSize: 20, color: sel ? "#6C1594" : "#5C5470" }}>{s.en.slice(0, 2)}</span>
                    </span>
                  </span>
                  <span style={{ fontFamily: "'Marcellus', serif", fontSize: 15, lineHeight: 1.15, color: sel ? "#6C1594" : "inherit" }}>{s.en}</span>
                  <span style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: 14, lineHeight: 1.1, color: "#921A11", marginTop: -4 }}>{s.hi}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* TODAY READING */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "8px 24px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 380px) minmax(0, 1fr)", gap: 20, alignItems: "start" }}>
          {/* Score card */}
          <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #2E003E 0%, #4A0A66 55%, #6C1594 100%)", color: "#FFFFFF", borderRadius: 22, padding: 28 }}>
            <div className="am-stars" aria-hidden="true" />
            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 16, marginBottom: 22 }}>
              <span style={{ flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: 72, height: 72, borderRadius: 999, background: "rgba(255,255,255,0.15)", boxShadow: "0 0 0 4px rgba(252,206,7,0.35)", fontFamily: "'Marcellus', serif", fontSize: 28, color: "#FCCE07" }}>
                {sg.en.slice(0, 1)}
              </span>
              <div>
                <p style={{ margin: 0, fontFamily: "'Marcellus', serif", fontSize: 30, lineHeight: 1.1 }}>{hi ? sg.hi : sg.en}</p>
                <p style={{ margin: "4px 0 0", fontSize: 14, color: "#EADFF2" }}>{hi ? `${sg.hi} · स्वामी ${sg.lordHi} · ${sg.elHi} तत्व` : `${sg.hi} · Ruled by ${sg.lord}`}</p>
              </div>
            </div>
            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 20, padding: "18px 0", borderTop: "1px solid rgba(255,255,255,0.18)", borderBottom: "1px solid rgba(255,255,255,0.18)" }}>
              <div style={{ position: "relative", flex: "none", width: 104, height: 104 }}>
                <svg viewBox="0 0 120 120" aria-hidden="true" style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
                  <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="10" />
                  <circle cx="60" cy="60" r="52" fill="none" stroke="#FCCE07" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${(C * d.overall / 100).toFixed(1)} ${C.toFixed(1)}`} />
                </svg>
                <span style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Marcellus', serif", fontSize: 32, lineHeight: 1 }}>{d.overall}</span>
                  <span style={{ fontSize: 11, color: "#EADFF2" }}>/ 100</span>
                </span>
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ margin: "0 0 4px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FCCE07", fontWeight: 700 }}>{hi ? "कुल स्कोर" : "Overall"}</p>
                <p style={{ margin: 0, fontFamily: "'Marcellus', serif", fontSize: 24, lineHeight: 1.2 }}>{bands[d.band]}</p>
              </div>
            </div>
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 20 }}>
              <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: 14, padding: "12px 14px" }}>
                <p style={{ margin: 0, fontSize: 12, color: "#EADFF2" }}>{hi ? "भाग्यशाली अंक" : "Lucky number"}</p>
                <p style={{ margin: "2px 0 0", fontFamily: "'Marcellus', serif", fontSize: 28, lineHeight: 1.1 }}>{d.lucky.num}</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: 14, padding: "12px 14px" }}>
                <p style={{ margin: 0, fontSize: 12, color: "#EADFF2" }}>{hi ? "भाग्यशाली रंग" : "Lucky colour"}</p>
                <p style={{ margin: "6px 0 0", display: "flex", alignItems: "center", gap: 8, fontWeight: 700 }}>{hi ? d.lucky.colHi : d.lucky.col}</p>
              </div>
            </div>
          </div>

          {/* Area cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 16 }}>
            {d.areas.map((a) => {
              const area = AREA_LABELS[a.id];
              return (
                <div key={a.id} style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: 22, outline: "1px solid #EFE6D8", outlineOffset: -9, padding: "22px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <span style={{ flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 999, background: "#F3E8F7", color: "#6C1594" }}>
                      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                        <path d={area.icon} />
                      </svg>
                    </span>
                    <span style={{ flex: 1, fontFamily: "'Marcellus', serif", fontSize: 21 }}>{hi ? area.hi : area.en}</span>
                    <span style={{ fontWeight: 700, color: "#2E003E" }}>{a.score}<span style={{ fontWeight: 500, color: "#8E86A3", fontSize: 13 }}> / 100</span></span>
                  </div>
                  <progress className="am-bar" value={a.score} max={100} aria-label={`${area.en} score`} style={{ marginBottom: 14 }} />
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "#3A3350" }}>
                    {hi
                      ? `${sg.hi} राशि के लिए आज ${area.hi} के क्षेत्र में ग्रह स्थिति ${a.score >= 75 ? "अनुकूल है।" : a.score >= 60 ? "मिली-जुली है।" : "सावधानी चाहती है।"}`
                      : `For ${sg.en}, the planetary influence on ${area.en.toLowerCase()} today is ${a.score >= 75 ? "favourable." : a.score >= 60 ? "mixed." : "requires caution."}`}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* PERSONAL CTA */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px 0" }}>
        <div style={{ background: "linear-gradient(135deg, #2E003E 0%, #6C1594 100%)", color: "#FFFFFF", borderRadius: 22, padding: "36px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24, position: "relative", overflow: "hidden" }}>
          <div className="am-stars" aria-hidden="true" />
          <div style={{ position: "relative", maxWidth: 600 }}>
            <p style={{ margin: "0 0 8px", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: 700 }}>{hi ? "आपकी अपनी कुंडली" : "Your personal chart"}</p>
            <p style={{ margin: 0, fontFamily: "'Marcellus', serif", fontSize: "clamp(20px, 2.4vw, 28px)", lineHeight: 1.3 }}>
              {hi ? `यह राशिफल सभी ${sg.hi} राशि वालों के लिए है। आपकी कुंडली सिर्फ़ आपकी है।` : `This reading is for every ${sg.en} Moon sign. Your chart is yours alone.`}
            </p>
          </div>
          <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link href="/checkout/kundli" style={{ display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 24px", borderRadius: 999, background: "#FCCE07", color: "#921A11", fontWeight: 700, textDecoration: "none" }}>
              {hi ? "अपनी व्यक्तिगत कुंडली बनवाएं" : "Get my personalised report"}
            </Link>
            <Link href="/kundli" style={{ display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 22px", borderRadius: 999, border: "1.5px solid rgba(255,255,255,0.5)", color: "#FFFFFF", fontWeight: 600, textDecoration: "none" }}>
              {hi ? "अपनी चंद्र राशि मुफ़्त जानें" : "Free Kundli"}
            </Link>
          </div>
        </div>
      </div>

      {/* ABOUT SIGN */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 0" }}>
        <div style={{ marginBottom: 24 }}>
          <p style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 }}>{hi ? "अपनी राशि को जानें" : "About your sign"}</p>
          <h2 style={{ margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: 1.2 }}>
            {hi ? `${sg.hi} राशि` : `About ${sg.en}`}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 20 }}>
          {/* Sign facts */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: 22, padding: "24px 26px", outline: "1px solid #EFE6D8", outlineOffset: -9 }}>
            <p style={{ margin: "0 0 16px", fontFamily: "'Marcellus', serif", fontSize: 22 }}>{hi ? "मूल विवरण" : "Key facts"}</p>
            {[
              [hi ? "स्वामी ग्रह" : "Ruling planet", hi ? sg.lordHi : sg.lord],
              [hi ? "तत्व" : "Element", hi ? sg.elHi : sg.el],
              [hi ? "स्वभाव" : "Nature", hi ? sg.qHi : sg.q],
              [hi ? "शुभ दिन" : "Lucky day", hi ? sg.dayHi : sg.day],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "10px 0", borderBottom: "1px solid #EFE6D8", fontSize: 15 }}>
                <span style={{ color: "#5C5470" }}>{k}</span>
                <span style={{ fontWeight: 700, textAlign: "right" }}>{v}</span>
              </div>
            ))}
          </div>
          {/* Strengths */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: 22, padding: "24px 26px", outline: "1px solid #EFE6D8", outlineOffset: -9 }}>
            <p style={{ margin: "0 0 16px", fontFamily: "'Marcellus', serif", fontSize: 22 }}>{hi ? "खूबियां" : "Strengths"}</p>
            {(hi ? sg.strHi : sg.str).map((s) => (
              <div key={s} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: "1px solid #EFE6D8", fontSize: 15 }}>
                <span style={{ color: "#1F7A4C", fontWeight: 700 }}>+</span>
                <span>{s}</span>
              </div>
            ))}
            <p style={{ margin: "16px 0 0", fontFamily: "'Marcellus', serif", fontSize: 20 }}>{hi ? "ध्यान रखें" : "Watch for"}</p>
            {(hi ? sg.chHi : sg.ch).map((c) => (
              <div key={c} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: "1px solid #EFE6D8", fontSize: 15 }}>
                <span style={{ color: "#921A11", fontWeight: 700 }}>→</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQS */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 80px" }}>
        <h2 style={{ margin: "0 0 28px", fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(26px, 3vw, 36px)" }}>
          {hi ? "दैनिक राशिफल के बारे में" : "About the daily horoscope"}
        </h2>
        <div style={{ display: "grid", gap: 12 }}>
          {FAQS_EN.map(({ q, a }) => (
            <details key={q} style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: 16, padding: "18px 22px" }}>
              <summary style={{ fontWeight: 700, fontSize: 16, cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                {q}
                <svg className="faq-plus" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p style={{ margin: "12px 0 0", fontSize: 15, color: "#5C5470", lineHeight: 1.7 }}>{a}</p>
            </details>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
