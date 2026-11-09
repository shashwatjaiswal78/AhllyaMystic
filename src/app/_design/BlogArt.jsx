// Illustrations for the journal: a banner for each article and a diagram inside it. Inline SVG in the site's
// purple and gold, so they load instantly and stay sharp on every screen.
import React from "react";

const GOLD = "#FCCE07";
const serif = "Marcellus, serif";

const Stars = ({ seed = 1 }) => {
  const pts = Array.from({ length: 26 }, (_, i) => {
    const a = (i * 9301 + seed * 49297) % 233280;
    return [(a % 320), ((a * 7) % 180), 0.6 + ((a >> 3) % 3) * 0.5];
  });
  return pts.map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} fill="#FFFFFF" opacity={0.25 + (i % 4) * 0.12} />);
};

function Banner({ kind, label }) {
  return (
    <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label} style={{ display: "block", width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id={`bg-${kind}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2E003E" />
          <stop offset="1" stopColor={kind === "vastu" ? "#7A2A6E" : "#5A0F7A"} />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill={`url(#bg-${kind})`} />
      <Stars seed={kind.length + 3} />
      {kind === "saturn" && (
        <g>
          <circle cx="160" cy="92" r="46" fill="#C99A3B" />
          <path d="M118 78 Q160 66 202 78" stroke="#E8C56A" strokeWidth="5" fill="none" opacity="0.7" />
          <path d="M115 96 Q160 84 205 96" stroke="#A8782A" strokeWidth="5" fill="none" opacity="0.7" />
          <ellipse cx="160" cy="96" rx="92" ry="20" fill="none" stroke="#FFFFFF" strokeWidth="3" opacity="0.85" transform="rotate(-14 160 96)" />
          <ellipse cx="160" cy="96" rx="76" ry="15" fill="none" stroke={GOLD} strokeWidth="2" opacity="0.8" transform="rotate(-14 160 96)" />
          <circle cx="262" cy="44" r="11" fill="#F5F1E6" />
          <circle cx="266" cy="42" r="10" fill="#4A0A66" />
        </g>
      )}
      {kind === "numbers" && (
        <g fontFamily={serif} textAnchor="middle">
          {[["1", 70, 60, 30], ["5", 160, 112, 52], ["9", 250, 62, 30], ["3", 110, 150, 22], ["7", 218, 148, 22]].map(([t, x, y, s]) => (
            <text key={t} x={x} y={y} fontSize={s * 1.6} fill={t === "5" ? GOLD : "#FFFFFF"} opacity={t === "5" ? 1 : 0.55}>{t}</text>
          ))}
          <circle cx="160" cy="92" r="64" fill="none" stroke={GOLD} strokeWidth="1.2" strokeDasharray="3 6" opacity="0.7" />
        </g>
      )}
      {kind === "vastu" && (
        <g>
          <rect x="100" y="34" width="120" height="120" fill="#FFFFFF" fillOpacity="0.1" stroke="#FFFFFF" strokeWidth="2" />
          <g stroke="#FFFFFF" strokeOpacity="0.5">
            <line x1="140" y1="34" x2="140" y2="154" /><line x1="180" y1="34" x2="180" y2="154" />
            <line x1="100" y1="74" x2="220" y2="74" /><line x1="100" y1="114" x2="220" y2="114" />
          </g>
          <rect x="180" y="34" width="40" height="40" fill={GOLD} fillOpacity="0.9" />
          <rect x="140" y="74" width="40" height="40" fill="#FFFFFF" fillOpacity="0.28" />
          <path d="M100 34 L160 8 L220 34" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <g fontFamily={serif} fontSize="11" fill="#FFFFFF" opacity="0.85" textAnchor="middle">
            <text x="200" y="58" fill="#2E003E" opacity="1">NE</text><text x="120" y="58">NW</text>
            <text x="120" y="138">SW</text><text x="200" y="138">SE</text>
          </g>
        </g>
      )}
      {kind === "kundli" && (
        <g>
          <rect x="95" y="25" width="130" height="130" fill="#FFFFFF" fillOpacity="0.08" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M95 25 L225 155 M225 25 L95 155" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="1.4" />
          <path d="M160 25 L225 90 L160 155 L95 90 Z" fill="none" stroke="#FFFFFF" strokeWidth="1.6" />
          <path d="M160 25 L225 90 L160 90 Z" fill={GOLD} fillOpacity="0.85" />
          <g fontFamily={serif} fontSize="13" fill="#FFFFFF" textAnchor="middle" opacity="0.9">
            <text x="160" y="62" fill="#2E003E" opacity="1">1</text><text x="125" y="48">2</text><text x="108" y="70">3</text><text x="136" y="92">4</text>
            <text x="108" y="115">5</text><text x="125" y="140">6</text><text x="160" y="125">7</text><text x="195" y="140">8</text>
            <text x="212" y="115">9</text><text x="184" y="92">10</text><text x="212" y="70">11</text><text x="195" y="48">12</text>
          </g>
        </g>
      )}
      {kind === "phone" && (
        <g>
          <rect x="112" y="14" width="96" height="152" rx="16" fill="#FFFFFF" fillOpacity="0.1" stroke="#FFFFFF" strokeWidth="2" />
          <rect x="124" y="32" width="72" height="30" rx="6" fill="#FFFFFF" fillOpacity="0.14" />
          <text x="160" y="53" textAnchor="middle" fontFamily={serif} fontSize="20" fill={GOLD}>9 8 1 2 3</text>
          <g fontFamily={serif} fontSize="16" fill="#FFFFFF" textAnchor="middle">
            {[["1", 138, 90], ["2", 160, 90], ["3", 182, 90], ["4", 138, 114], ["5", 160, 114], ["6", 182, 114], ["7", 138, 138], ["8", 160, 138], ["9", 182, 138]].map(([t, x, y]) => <text key={t} x={x} y={y} opacity={t === "7" ? 1 : 0.65} fill={t === "7" ? GOLD : "#FFFFFF"}>{t}</text>)}
          </g>
          <circle cx="160" cy="134" r="14" fill="none" stroke={GOLD} strokeDasharray="3 4" opacity="0" />
        </g>
      )}
      {kind === "panchang" && (
        <g>
          <circle cx="160" cy="90" r="64" fill="none" stroke="#FFFFFF" strokeOpacity="0.35" strokeDasharray="3 6" />
          {[0, 1, 2, 3, 4].map((i) => {
            const a = (-90 + i * 72) * Math.PI / 180, x = 160 + 64 * Math.cos(a), y = 90 + 64 * Math.sin(a);
            return <g key={i}><circle cx={x} cy={y} r="14" fill="#F5F1E6" /><circle cx={x + (i - 2) * 4} cy={y} r="14" fill="#3A0852" opacity={i === 2 ? 0 : 0.8} /></g>;
          })}
          <circle cx="160" cy="90" r="20" fill={GOLD} />
          <text x="160" y="96" textAnchor="middle" fontFamily={serif} fontSize="16" fill="#2E003E">5</text>
        </g>
      )}
      {kind === "clock" && (
        <g>
          {Array.from({ length: 8 }, (_, i) => {
            const a0 = (-90 + i * 45) * Math.PI / 180, a1 = (-90 + (i + 1) * 45) * Math.PI / 180, r = 62, cx = 160, cy = 90;
            const good = [0, 1, 3, 5, 6].includes(i);
            return <path key={i} d={`M${cx} ${cy} L${cx + r * Math.cos(a0)} ${cy + r * Math.sin(a0)} A${r} ${r} 0 0 1 ${cx + r * Math.cos(a1)} ${cy + r * Math.sin(a1)} Z`} fill={good ? GOLD : "#FFFFFF"} fillOpacity={good ? 0.85 : 0.18} stroke="#2E003E" strokeWidth="1.5" />;
          })}
          <circle cx="160" cy="90" r="9" fill="#2E003E" />
        </g>
      )}
      {kind === "compare" && (
        <g fontFamily={serif} textAnchor="middle">
          <circle cx="132" cy="90" r="52" fill="#FFFFFF" fillOpacity="0.16" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="188" cy="90" r="52" fill={GOLD} fillOpacity="0.26" stroke={GOLD} strokeWidth="1.5" />
          <text x="110" y="95" fontSize="15" fill="#FFFFFF">Vedic</text>
          <text x="212" y="95" fontSize="15" fill={GOLD}>KP</text>
          <text x="160" y="95" fontSize="11" fill="#FFFFFF" opacity="0.9">shared</text>
        </g>
      )}
    </svg>
  );
}

export const ArticleBanner = ({ slug }) => {
  if (slug.startsWith("sade-sati")) return <Banner kind="saturn" label="Saturn with its rings" />;
  if (slug.startsWith("should-you")) return <Banner kind="numbers" label="Numerology numbers" />;
  if (slug.startsWith("how-to-read")) return <Banner kind="kundli" label="A North Indian style birth chart with twelve houses" />;
  if (slug.startsWith("mobile-number")) return <Banner kind="phone" label="A mobile phone with digits" />;
  if (slug.startsWith("what-is-panchang")) return <Banner kind="panchang" label="Five moons for the five limbs of the Panchang" />;
  if (slug.startsWith("how-to-use-choghadiya")) return <Banner kind="clock" label="A day divided into eight Choghadiya slots" />;
  if (slug.startsWith("kp-astrology")) return <Banner kind="compare" label="Vedic and KP astrology overlapping" />;
  return <Banner kind="vastu" label="Home floor plan on a Vastu grid" />;
};

const box = { margin: "30px 0", padding: "22px 20px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px" };
const cap = { margin: "14px 0 0", fontSize: "13px", color: "#736B8A", textAlign: "center", lineHeight: 1.5 };

const FIG_HI = {
  phases: { items: [["पहला चरण", "शनि आपकी चंद्र राशि से पहले वाली राशि में", "दबाव बढ़ता है"], ["दूसरा चरण", "शनि आपकी चंद्र राशि पर", "सबसे व्यक्तिगत दौर"], ["तीसरा चरण", "शनि आपकी चंद्र राशि के बाद वाली राशि में", "नतीजे स्थिर होते हैं"]], dur: "लगभग 2½ साल", cap: "साढ़े साती: तीन राशियाँ, कुल मिलाकर लगभग साढ़े सात साल।" },
  loshu: { cap: "लो शू ग्रिड। आपकी जन्म तिथि कुछ खाने भरती है; जो अंक गायब है, उसे नाम पूरा करने में मदद कर सकता है।" },
  directions: { labels: ["वायु", "जल", "स्पष्टता", "आकाश", "केंद्र", "प्रकाश", "स्थिरता", "विश्राम", "अग्नि"], cap: "घर की वास्तु ग्रिड। उत्तर-पूर्व (पीला) को हल्का और खुला रखें।" },
};

export function Figure({ kind, lang = "en" }) {
  const hi = lang === "hi";
  if (kind === "phases") {
    const ph0 = [["1", "Saturn in the sign before your Moon sign", "Pressure builds"], ["2", "Saturn over your Moon sign", "The personal core"], ["3", "Saturn in the sign after your Moon sign", "Results settle"]];
    const ph = hi ? FIG_HI.phases.items.map(([x, a, b], i) => [String(i + 1), a, b]) : ph0;
    return (
      <figure style={{ ...box, marginInline: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px" }}>
          {ph.map(([n, a, b], i) => (
            <div key={n} style={{ position: "relative", padding: "16px", borderRadius: "16px", background: i === 1 ? "#2E003E" : "#F6EEF9", color: i === 1 ? "#FFFFFF" : "#2E003E", textAlign: "center" }}>
              <div style={{ fontFamily: serif, fontSize: "30px", color: i === 1 ? GOLD : "#921A11" }}>{n}</div>
              <div style={{ fontSize: "13.5px", fontWeight: 700, margin: "4px 0" }}>{b}</div>
              <div style={{ fontSize: "12.5px", opacity: 0.85, lineHeight: 1.45 }}>{a}</div>
              <div style={{ fontSize: "12px", marginTop: "8px", opacity: 0.7 }}>{hi ? FIG_HI.phases.dur : "about 2½ years"}</div>
            </div>
          ))}
        </div>
        <figcaption style={cap}>{hi ? FIG_HI.phases.cap : "Sade Sati: three signs, about seven and a half years in total."}</figcaption>
      </figure>
    );
  }
  if (kind === "loshu") {
    const g = [[4, 9, 2], [3, 5, 7], [8, 1, 6]];
    return (
      <figure style={{ ...box, marginInline: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 72px)", gap: "6px", justifyContent: "center" }}>
          {g.flat().map((n) => (
            <div key={n} style={{ height: "72px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: serif, fontSize: "28px", borderRadius: "12px", background: n === 5 ? "#2E003E" : "#F6EEF9", color: n === 5 ? GOLD : "#2E003E" }}>{n}</div>
          ))}
        </div>
        <figcaption style={cap}>{hi ? FIG_HI.loshu.cap : "The Lo Shu grid. Your birth date fills some squares; a missing number is what a name can help supply."}</figcaption>
      </figure>
    );
  }
  if (kind === "directions") {
    const d = [["NW", "Air"], ["N", "Water"], ["NE", "Clarity"], ["W", "Space"], ["", "Centre"], ["E", "Light"], ["SW", "Stability"], ["S", "Rest"], ["SE", "Fire"]];
    return (
      <figure style={{ ...box, marginInline: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 84px)", gap: "6px", justifyContent: "center" }}>
          {d.map(([a, b], i) => (
            <div key={i} style={{ height: "74px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: a === "NE" ? GOLD : "#F6EEF9", color: "#2E003E" }}>
              <span style={{ fontFamily: serif, fontSize: "20px" }}>{a || "·"}</span>
              <span style={{ fontSize: "11.5px", opacity: 0.8 }}>{hi ? FIG_HI.directions.labels[i] : b}</span>
            </div>
          ))}
        </div>
        <figcaption style={cap}>{hi ? FIG_HI.directions.cap : "The Vastu grid of a home, with the north-east (highlighted) kept light and open."}</figcaption>
      </figure>
    );
  }
  return null;
}
