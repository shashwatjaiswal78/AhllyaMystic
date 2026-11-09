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
    </svg>
  );
}

export const ArticleBanner = ({ slug }) => {
  if (slug.startsWith("sade-sati")) return <Banner kind="saturn" label="Saturn with its rings" />;
  if (slug.startsWith("should-you")) return <Banner kind="numbers" label="Numerology numbers" />;
  return <Banner kind="vastu" label="Home floor plan on a Vastu grid" />;
};

const box = { margin: "30px 0", padding: "22px 20px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px" };
const cap = { margin: "14px 0 0", fontSize: "13px", color: "#736B8A", textAlign: "center", lineHeight: 1.5 };

export function Figure({ kind }) {
  if (kind === "phases") {
    const ph = [["1", "Saturn in the sign before your Moon sign", "Pressure builds"], ["2", "Saturn over your Moon sign", "The personal core"], ["3", "Saturn in the sign after your Moon sign", "Results settle"]];
    return (
      <figure style={{ ...box, marginInline: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px" }}>
          {ph.map(([n, a, b], i) => (
            <div key={n} style={{ position: "relative", padding: "16px", borderRadius: "16px", background: i === 1 ? "#2E003E" : "#F6EEF9", color: i === 1 ? "#FFFFFF" : "#2E003E", textAlign: "center" }}>
              <div style={{ fontFamily: serif, fontSize: "30px", color: i === 1 ? GOLD : "#921A11" }}>{n}</div>
              <div style={{ fontSize: "13.5px", fontWeight: 700, margin: "4px 0" }}>{b}</div>
              <div style={{ fontSize: "12.5px", opacity: 0.85, lineHeight: 1.45 }}>{a}</div>
              <div style={{ fontSize: "12px", marginTop: "8px", opacity: 0.7 }}>about 2½ years</div>
            </div>
          ))}
        </div>
        <figcaption style={cap}>Sade Sati: three signs, about seven and a half years in total.</figcaption>
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
        <figcaption style={cap}>The Lo Shu grid. Your birth date fills some squares; a missing number is what a name can help supply.</figcaption>
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
              <span style={{ fontSize: "11.5px", opacity: 0.8 }}>{b}</span>
            </div>
          ))}
        </div>
        <figcaption style={cap}>The Vastu grid of a home, with the north-east (highlighted) kept light and open.</figcaption>
      </figure>
    );
  }
  return null;
}
