"use client";
// Header menus with a dropdown on desktop and an accordion in the phone menu:
//  - Horoscope: Daily, Weekly, Monthly, Yearly, Rashifal 2027 and Panchang. The horoscope items open that view for the
//    sign the visitor last chose (Aries until they choose one).
//  - Free Calculators: Free Kundli, KP Kundli, Name Number and Mobile Number, each opening its own calculator.
//  - Reports: each report opens its own page.
import React, { useEffect, useRef, useState } from "react";

export const SIGN_KEY = "ahllya:sign";

const HOROSCOPE_ITEMS = [
  { key: "today", label: "Daily Horoscope", path: "", icon: "M12 4v2M12 18v2M4 12H2M22 12h-2M6.3 6.3L4.9 4.9M19.1 19.1l-1.4-1.4M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4M12 8a4 4 0 100 8 4 4 0 000-8z" },
  { key: "weekly", label: "Weekly Horoscope", path: "/weekly", icon: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" },
  { key: "monthly", label: "Monthly Horoscope", path: "/monthly", icon: "M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z" },
  { key: "yearly", label: "Yearly Horoscope", path: "/yearly", icon: "M3 18a9 9 0 0118 0M7 18a5 5 0 0110 0M12 18V9" },
  { key: "2027", label: "Rashifal 2027 Horoscope", path: "/2027", icon: "M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.3l6.1-.7z" },
  { key: "panchang", label: "Panchang", href: "/panchang", icon: "M12 7v5l3 2M12 3a9 9 0 100 18 9 9 0 000-18z" },
];

// Each calculator has its own page, with the form on it.
const CALC_ITEMS = [
  { key: "kundli", label: "Free Kundli", href: "/kundli", icon: "M12 3l9 9-9 9-9-9zM12 8l4 4-4 4-4-4z" },
  { key: "kp", label: "KP Kundli", href: "/kp-kundli", icon: "M4 4h16v16H4zM4 12h16M12 4v16" },
  { key: "name", label: "Name Number", href: "/name-number", icon: "M9 4L7 20M17 4l-2 16M4 9h17M3 15h17" },
  { key: "mobile", label: "Mobile Number", href: "/mobile-number", icon: "M8 2h8a1 1 0 011 1v18a1 1 0 01-1 1H8a1 1 0 01-1-1V3a1 1 0 011-1zM11 18h2" },
];

// Each report opens its own page.
const REPORT_ITEMS = [
  { key: "kundli", label: "Personalised Kundli Report", href: "/report/kundli", icon: "M12 3l9 9-9 9-9-9zM12 8l4 4-4 4-4-4z" },
  { key: "varshphal", label: "Varshphal 2027 Report", href: "/report/varshphal", icon: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" },
  { key: "milan", label: "Couple Kundli Milan", href: "/report/milan", icon: "M12 20s-7-4.4-9.3-9A5.4 5.4 0 0112 5.6 5.4 5.4 0 0121.3 11C19 15.6 12 20 12 20z" },
  { key: "lal-kitab", label: "Lal Kitab Report", href: "/report/lal-kitab", icon: "M5 4h11a3 3 0 013 3v13H8a3 3 0 01-3-3zM5 17a3 3 0 013-3h11" },
  { key: "name", label: "Name Numerology Report", href: "/report/name-numerology", icon: "M9 4L7 20M17 4l-2 16M4 9h17M3 15h17" },
  { key: "mobile", label: "Mobile Number Report", href: "/report/mobile-number", icon: "M8 2h8a1 1 0 011 1v18a1 1 0 01-1 1H8a1 1 0 01-1-1V3a1 1 0 011-1zM11 18h2" },
];

function useSign() {
  const [sign, setSign] = useState("aries");
  useEffect(() => {
    try {
      const s = localStorage.getItem(SIGN_KEY);
      if (s && /^[a-z]+$/.test(s)) setSign(s);
    } catch (e) { /* storage unavailable: stay on Aries */ }
  }, []);
  return sign;
}

function Icon({ d }) {
  return (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
  );
}

function Dropdown({ label, href, items, hrefOf, menuId, ariaLabel }) {
  const [open, setOpen] = useState(false);
  const box = useRef(null);
  const timer = useRef(null);

  useEffect(() => {
    const away = (e) => { if (box.current && !box.current.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", away);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("mousedown", away); document.removeEventListener("keydown", esc); };
  }, []);

  const enter = () => { clearTimeout(timer.current); setOpen(true); };
  const leave = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(false), 140); };

  return (
    <div ref={box} onMouseEnter={enter} onMouseLeave={leave} style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: "4px" }}>
      <a href={href} style={{ color: "#FFFFFF", textDecoration: "none" }}>{label}</a>
      <button
        type="button" aria-label={ariaLabel} aria-haspopup="true" aria-expanded={open} aria-controls={menuId}
        onClick={() => setOpen(!open)}
        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", padding: 0, border: 0, background: "transparent", color: "#FFFFFF", cursor: "pointer" }}
      >
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform .2s", transform: open ? "rotate(180deg)" : "none" }}><path d="M6 9l6 6 6-6" /></svg>
      </button>
      {open ? (
        <div id={menuId} style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", paddingTop: "16px", zIndex: 80 }}>
          <div style={{ width: "min(340px, 92vw)", background: "#FFFFFF", color: "#1E1830", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "10px", boxShadow: "0 24px 50px -20px rgba(46,0,62,0.55)", display: "grid", gap: "4px" }}>
            {items.map((it) => (
              <a
                key={it.key} href={hrefOf(it)} onClick={() => setOpen(false)}
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "10px 12px", borderRadius: "14px", textDecoration: "none", color: "#1E1830", fontSize: "13.5px", fontWeight: 600 }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#F3E8F7"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                onFocus={(e) => { e.currentTarget.style.background = "#F3E8F7"; }} onBlur={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                <span style={{ flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "999px", background: "#F3E8F7", color: "#6C1594" }}><Icon d={it.icon} /></span>
                <span style={{ flex: 1 }}>{it.label}</span>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6C1594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Accordion({ label, items, hrefOf, onNavigate }) {
  const [open, setOpen] = useState(false);
  const row = { display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "19px" };
  return (
    <div>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)} style={{ ...row, width: "100%", background: "transparent", border: 0, borderBottom: "1px solid rgba(255,255,255,0.14)", cursor: "pointer", padding: 0, textAlign: "left" }}>
        {label}
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform .2s", transform: open ? "rotate(90deg)" : "none" }}><path d="M9 6l6 6-6 6" /></svg>
      </button>
      {open ? (
        <div style={{ display: "grid", padding: "4px 0 8px 14px", borderBottom: "1px solid rgba(255,255,255,0.14)" }}>
          {items.map((it) => (
            <a key={it.key} href={hrefOf(it)} onClick={onNavigate} style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "48px", color: "#EADFF2", textDecoration: "none", fontSize: "15px" }}>
              <span style={{ display: "inline-flex", color: "#FCCE07" }}><Icon d={it.icon} /></span>{it.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function HoroscopeMenu() {
  const sign = useSign();
  return <Dropdown label="Horoscope" href="/horoscope" items={HOROSCOPE_ITEMS} menuId="horoscope-menu" ariaLabel="Horoscope menu" hrefOf={(it) => it.href || "/horoscope/" + sign + it.path} />;
}

export function HoroscopeMobileMenu({ onNavigate }) {
  const sign = useSign();
  return <Accordion label="Horoscope" items={HOROSCOPE_ITEMS} onNavigate={onNavigate} hrefOf={(it) => it.href || "/horoscope/" + sign + it.path} />;
}

export function CalculatorsMenu() {
  return <Dropdown label="Free Calculators" href="/#free" items={CALC_ITEMS} menuId="calculators-menu" ariaLabel="Free calculators menu" hrefOf={(it) => it.href} />;
}

export function CalculatorsMobileMenu({ onNavigate }) {
  return <Accordion label="Free Calculators" items={CALC_ITEMS} onNavigate={onNavigate} hrefOf={(it) => it.href} />;
}

export function ReportsMenu() {
  return <Dropdown label="Reports" href="/#reports" items={REPORT_ITEMS} menuId="reports-menu" ariaLabel="Reports menu" hrefOf={(it) => it.href} />;
}

export function ReportsMobileMenu({ onNavigate }) {
  return <Accordion label="Reports" items={REPORT_ITEMS} onNavigate={onNavigate} hrefOf={(it) => it.href} />;
}
