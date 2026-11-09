"use client";
// A real countdown to the end of the festive offer. The first (server) render shows dashes, so it never reads the clock.
import React, { useEffect, useState } from "react";
import { FESTIVE_OFFER_ENDS } from "@/lib/offer";

const box = { minWidth: "58px", textAlign: "center", background: "rgba(255,255,255,0.12)", borderRadius: "10px", padding: "6px 4px" };
const num = { margin: "0", fontFamily: "'Marcellus', serif", fontSize: "19px", lineHeight: "1.1", color: "#FFFFFF" };
const lbl = { margin: "0", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#EADFF2" };
const two = (n) => String(n).padStart(2, "0");

export default function OfferCountdown() {
  const [left, setLeft] = useState(null);
  useEffect(() => {
    const tick = () => {
      const ms = FESTIVE_OFFER_ENDS - Date.now();
      if (ms <= 0) { window.location.replace("/consultation"); return; } // the offer has ended
      setLeft(ms);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const s = left == null ? null : Math.floor(left / 1000);
  const parts = [["Din", s == null ? "--" : two(Math.floor(s / 86400))], ["Ghante", s == null ? "--" : two(Math.floor((s % 86400) / 3600))], ["Minute", s == null ? "--" : two(Math.floor((s % 3600) / 60))], ["Second", s == null ? "--" : two(s % 60)]];
  return (
    <div style={{ display: "inline-flex", gap: "8px" }} role="timer" aria-label="Time left in the festive offer">
      {parts.map(([l, v]) => (
        <div key={l} style={box}>
          <p style={num}>{v}</p>
          <p style={lbl}>{l}</p>
        </div>
      ))}
    </div>
  );
}
