"use client";
// The "Free Kundli" and "Free KP Kundli" forms on the home page. Same markup and styles as the design; this file adds
// the behaviour: birth place suggestions, a call to the engine (/api/kundli or /api/kp) and the hand-off to the
// result page (/kundli or /kp-kundli), which reads what the engine returned from sessionStorage.
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { maskDate, maskTime } from "./wire";

export const KUNDLI_KEY = "ahllya:kundli";
export const KP_KEY = "ahllya:kp";

const KINDS = {
  kundli: {
    api: "/api/kundli", key: KUNDLI_KEY, href: "/kundli", timeLabel: "Time of birth", cta: "Generate my free Kundli", busy: "Casting your Kundli\u2026",
    wa: "To get your Kundli there", noteText: "Want the full picture? See the ", noteLink: "Personalised Kundli Report", noteHref: "/report/kundli",
  },
  kp: {
    api: "/api/kp", key: KP_KEY, href: "/kp-kundli", timeLabel: "Exact time of birth", cta: "Generate my free KP Kundli", busy: "Casting your KP Kundli\u2026",
    wa: "To get your KP Kundli there", noteText: "Want precise timing for a decision? ", noteLink: "Book a consultation", noteHref: "/consult",
  },
};

const labelStyle = { display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600" };
const inputStyle = { font: "inherit", fontWeight: "400", minHeight: "48px", padding: "0 14px", border: "1px solid #D9CFBE", borderRadius: "12px", background: "#FBF7F0", color: "#1E1830" };
const selectStyle = {
  ...inputStyle, padding: "0 40px 0 14px", minWidth: "0", cursor: "pointer", WebkitAppearance: "none", appearance: "none",
  background: "#FBF7F0 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%236C1594' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\") no-repeat right 14px center",
};
const listStyle = {
  position: "absolute", zIndex: 30, left: 0, right: 0, top: "calc(100% + 4px)", margin: 0, padding: 0, listStyle: "none", background: "#FFFFFF",
  border: "1px solid #E8DFD0", borderRadius: "14px", boxShadow: "0 18px 40px -20px rgba(46,0,62,0.45)", maxHeight: "240px", overflowY: "auto",
};

const fold = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
const label = (p) => (p.online ? p.n : p.n + (p.r ? ", " + p.r.replace(/, India$/, "") : ""));

// "14/02/1996" -> "1996-02-14", or "" when it is not a real date.
function isoDate(text) {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(text.trim());
  if (!m) return "";
  const [d, mo, y] = [+m[1], +m[2], +m[3]];
  const t = new Date(Date.UTC(y, mo - 1, d));
  return t.getUTCFullYear() === y && t.getUTCMonth() === mo - 1 && t.getUTCDate() === d ? `${m[3]}-${m[2]}-${m[1]}` : "";
}

export default function KundliForm({ kind = "kundli" }) {
  const cfg = KINDS[kind] || KINDS.kundli;
  const router = useRouter();
  const nameRef = useRef(null), genderRef = useRef(null), dobRef = useRef(null), tobRef = useRef(null), placeRef = useRef(null);
  const timer = useRef(null), seq = useRef(0), box = useRef(null);
  const chosen = useRef(null); // the place picked from the list; it never changes what is drawn, so it lives in a ref
  const [hits, setHits] = useState([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  // Coming back through "Edit details": fill the form with what was entered last time.
  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(cfg.key) || "null");
      const i = saved && saved.input;
      if (!i) return;
      if (nameRef.current) nameRef.current.value = i.name || "";
      if (genderRef.current && i.gender) genderRef.current.value = i.gender;
      const [y, m, d] = String(i.dob || "").split("-");
      if (dobRef.current && y) dobRef.current.value = `${d}/${m}/${y}`;
      if (tobRef.current) tobRef.current.value = i.tob || "";
      if (placeRef.current && i.place) { placeRef.current.value = label(i.place); chosen.current = i.place; }
    } catch { /* nothing saved, or storage unavailable */ }
  }, [cfg.key]);

  useEffect(() => {
    const away = (e) => { if (box.current && !box.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", away);
    return () => document.removeEventListener("mousedown", away);
  }, []);

  const search = async (q) => {
    const mine = ++seq.current;
    try {
      const r = await fetch("/api/kundli/places?q=" + encodeURIComponent(q));
      const j = await r.json();
      if (mine !== seq.current) return [];
      const list = Array.isArray(j.places) ? j.places : [];
      setHits(list); setActive(list.length ? 0 : -1); setOpen(list.length > 0);
      return list;
    } catch { return []; }
  };

  const onPlaceInput = (e) => {
    const v = e.currentTarget.value;
    chosen.current = null; setError("");
    clearTimeout(timer.current);
    if (v.trim().length < 2) { seq.current++; setHits([]); setOpen(false); return; }
    timer.current = setTimeout(() => search(v), 250);
  };

  const pick = (p) => {
    seq.current++;
    if (placeRef.current) placeRef.current.value = label(p);
    chosen.current = p; setHits([]); setOpen(false); setActive(-1); setError("");
  };

  const onPlaceKey = (e) => {
    if (!open || !hits.length) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((active + 1) % hits.length); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((active - 1 + hits.length) % hits.length); }
    else if (e.key === "Enter" && active >= 0) { e.preventDefault(); pick(hits[active]); }
    else if (e.key === "Escape") setOpen(false);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (busy) return;
    setError("");
    const name = nameRef.current.value.trim();
    const dob = isoDate(dobRef.current.value);
    const tob = tobRef.current.value.trim();
    const typed = placeRef.current.value.trim();
    if (!/\p{L}/u.test(name)) return setError("Enter your name.");
    if (!dob) return setError("Enter your actual date of birth as DD/MM/YYYY.");
    if (!/^\d{2}:\d{2}(:\d{2})?$/.test(tob)) return setError("Enter your time of birth as HH:MM:SS on the 24-hour clock, for example 14:30:00.");
    if (!typed) return setError("Enter your place of birth.");

    setBusy(true);
    try {
      let place = chosen.current;
      if (!place) {
        // The text was typed without picking from the list. Use it only when it names exactly one place.
        const list = await search(typed);
        const city = fold(typed.split(",")[0]);
        const exact = list.filter((p) => fold(p.n) === city);
        place = list.length === 1 ? list[0] : exact.length === 1 ? exact[0] : null;
        if (!place) {
          setBusy(false);
          setError(list.length ? "Pick your birth place from the list so the chart uses the right coordinates." : "We could not find that place. Try the nearest town, or add the district, for example: Nautanwa, Maharajganj.");
          return;
        }
        pick(place);
      }
      const res = await fetch(cfg.api, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, gender: genderRef.current.value, dob, tob, place }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Could not cast your Kundli. Please try again.");
      try { sessionStorage.setItem(cfg.key, JSON.stringify(data)); } catch { /* private mode: the result page asks again */ }
      router.push(cfg.href);
    } catch (err) {
      setBusy(false);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={submit} noValidate style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px" }}>
      <label style={labelStyle}>
        {"Full name"}
        <input ref={nameRef} type="text" placeholder="First and last name" autoComplete="name" style={{ ...inputStyle, minWidth: "0" }} />
      </label>
      <label style={labelStyle}>
        {"Gender"}
        <select ref={genderRef} style={selectStyle} defaultValue="Select">
          <option value="" disabled>{"Select"}</option>
          <option>{"Female"}</option>
          <option>{"Male"}</option>
          <option>{"Other"}</option>
        </select>
      </label>
      <label style={labelStyle}>
        {"Actual date of birth"}
        <input ref={dobRef} type="text" placeholder="DD / MM / YYYY" inputMode="numeric" autoComplete="off" onInput={maskDate} style={inputStyle} />
      </label>
      <label style={labelStyle}>
        {cfg.timeLabel}
        <input ref={tobRef} type="text" placeholder="HH : MM : SS" inputMode="numeric" autoComplete="off" onInput={maskTime} style={inputStyle} />
      </label>
      <div style={labelStyle}>
        <label htmlFor="kundli-place">{"Place of birth"}</label>
        <div ref={box} style={{ position: "relative", display: "grid" }}>
          <input
            id="kundli-place" ref={placeRef} type="text" placeholder="City, State" autoComplete="off" spellCheck={false}
            role="combobox" aria-expanded={open} aria-autocomplete="list" aria-controls="kundli-places"
            onInput={onPlaceInput} onKeyDown={onPlaceKey} onFocus={() => { if (hits.length) setOpen(true); }}
            style={{ ...inputStyle, minWidth: "0" }}
          />
          {open && hits.length ? (
            <ul id="kundli-places" role="listbox" style={listStyle}>
              {hits.map((p, i) => (
                <li key={i} role="option" aria-selected={i === active}>
                  <button
                    type="button" onMouseDown={(e) => { e.preventDefault(); pick(p); }} onMouseEnter={() => setActive(i)}
                    style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 14px", border: 0, borderBottom: "1px solid #EFE6D8", background: i === active ? "#F3E8F7" : "#FFFFFF", color: "#1E1830", font: "inherit", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}
                  >
                    {p.n}
                    <span style={{ display: "block", fontSize: "12px", color: "#5C5470" }}>{p.r}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <label style={labelStyle}>
        <span>
          {"WhatsApp number "}
          <span style={{ fontWeight: "400", color: "#736B8A" }}>{"(optional)"}</span>
        </span>
        <input type="tel" placeholder={cfg.wa} style={{ ...inputStyle, minWidth: "0" }} />
      </label>
      <button type="submit" disabled={busy} aria-busy={busy || undefined} style={{ gridColumn: "1 / -1", font: "inherit", fontWeight: "700", minHeight: "52px", border: "0", borderRadius: "999px", background: "#FCCE07", color: "#921A11", cursor: busy ? "default" : "pointer", opacity: busy ? 0.8 : 1 }}>
        {busy ? cfg.busy : cfg.cta}
      </button>
      {error ? <p role="alert" style={{ gridColumn: "1 / -1", margin: "0", fontSize: "14px", fontWeight: "600", color: "#921A11", textAlign: "center" }}>{error}</p> : null}
      <p style={{ gridColumn: "1 / -1", margin: "0", fontSize: "13px", color: "#5C5470", textAlign: "center" }}>
        {cfg.noteText}
        <a href={cfg.noteHref}>{cfg.noteLink}</a>
        {"."}
      </p>
    </form>
  );
}
