// North Indian chart for the Free Kundli page. Same frame, fonts and positions as the design's sample charts:
// the top centre box is the first house and houses run anticlockwise; red numbers are signs, 1 for Aries to 12 for Pisces.
import React from "react";

// Where each house's sign number sits, and the centre of the block of planets inside it (the design's layout).
const NUM = { 1: [180, 52.6], 2: [55.8, 27.4], 3: [23.4, 59.8], 4: [48.6, 184], 5: [23.4, 308.2], 6: [55.8, 340.6], 7: [180, 315.4], 8: [304.2, 340.6], 9: [336.6, 308.2], 10: [311.4, 184], 11: [336.6, 59.8], 12: [304.2, 27.4] };
const MID = { 1: [180, 113], 2: [97.2, 51.8], 3: [46.8, 102.2], 4: [108, 185], 5: [46.8, 267.8], 6: [97.2, 318.2], 7: [180, 257], 8: [262.8, 318.2], 9: [313.2, 267.8], 10: [252, 185], 11: [313.2, 102.2], 12: [262.8, 51.8] };
const DIAMOND = new Set([1, 4, 7, 10]);
const LINE = 17;

const font = "Manrope, sans-serif";

function cells(items, house) {
  // One planet per line, as the design does. A crowded house wraps to two or three per line so it stays inside its box.
  const n = items.length;
  const limit = DIAMOND.has(house) ? 5 : 3;
  const cols = n <= limit ? 1 : n <= limit * 2 ? 2 : 3;
  const rows = Math.ceil(n / cols);
  const [cx, cy] = MID[house];
  const dx = cols === 1 ? [0] : cols === 2 ? [-21, 21] : [-34, 0, 34];
  return items.map((it, k) => ({ it, x: cx + dx[k % cols], y: cy + (Math.floor(k / cols) - (rows - 1) / 2) * LINE }));
}

export default function NorthChart({ houses, label }) {
  return (
    <svg viewBox="0 0 360 360" role="img" aria-label={label} style={{ display: "block", width: "100%", height: "auto", background: "#FFFFFF", borderRadius: "12px" }}>
      <rect x="1" y="1" width="358" height="358" rx="10" fill="#FFFFFF" stroke="#6C1594" strokeWidth="2" />
      <path d="M4 4L356 356M356 4L4 356" stroke="#D6C3E2" strokeWidth="1.2" />
      <path d="M180.0 3L357 180.0L180.0 357L3 180.0Z" fill="none" stroke="#D6C3E2" strokeWidth="1.2" />
      {houses.map((h, i) => {
        const house = i + 1;
        return (
          <React.Fragment key={house}>
            <text x={NUM[house][0]} y={NUM[house][1]} textAnchor="middle" fontFamily={font} fontSize="12" fill="#921A11">{String(h.sign)}</text>
            {cells(h.items, house).map(({ it, x, y }, k) => (
              <text key={k} x={x} y={y} textAnchor="middle" fontFamily={font} fontSize="14" fontWeight="700" fill={it.asc ? "#921A11" : "#1E1830"}>
                {it.abbr}
                {it.deg !== undefined ? <tspan fontSize="9" fill="#8A7F98" dy="-5">{it.deg + "°"}</tspan> : null}
              </text>
            ))}
          </React.Fragment>
        );
      })}
    </svg>
  );
}
