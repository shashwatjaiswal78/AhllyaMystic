"use client";
// "Don't know your moon sign?" finder on the home page. Same look as the design; this adds the birth place
// suggestions (the same list the Kundli form uses) and the call to /api/moon-sign, then selects that rashi below.
import React, { useEffect, useRef, useState } from "react";
import { maskDate, maskTime } from "./wire";

const labelStyle = { display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600" };
const inputStyle = { font: "inherit", fontWeight: "400", minHeight: "48px", padding: "0 14px", border: "1px solid #D9CFBE", borderRadius: "12px", background: "#FBF7F0", color: "#1E1830", minWidth: "0" };
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

export default function MoonForm({ onFound, margin = "-12px auto 48px" }) {
  const dobRef = useRef(null), tobRef = useRef(null), placeRef = useRef(null);
  const timer = useRef(null), seq = useRef(0), box = useRef(null);
  const chosen = useRef(null);
  const [hits, setHits] = useState([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [found, setFound] = useState(null);

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
    setError(""); setFound(null);
    const dob = isoDate(dobRef.current.value);
    const tob = tobRef.current.value.trim();
    const typed = placeRef.current.value.trim();
    if (!dob) return setError("Enter your actual date of birth as DD/MM/YYYY.");
    if (!/^\d{2}:\d{2}(:\d{2})?$/.test(tob)) return setError("Enter your time of birth as HH:MM:SS on the 24-hour clock, for example 14:30:00.");
    if (!typed) return setError("Enter your place of birth.");

    setBusy(true);
    try {
      let place = chosen.current;
      if (!place) {
        // Typed without picking from the list: use it only when it names exactly one place.
        const list = await search(typed);
        const city = fold(typed.split(",")[0]);
        const exact = list.filter((p) => fold(p.n) === city);
        place = list.length === 1 ? list[0] : exact.length === 1 ? exact[0] : null;
        if (!place) {
          setBusy(false);
          setError(list.length ? "Pick your birth place from the list so we use the right coordinates." : "We could not find that place. Try the nearest town, or add the district.");
          return;
        }
        pick(place);
      }
      const res = await fetch("/api/moon-sign", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ dob, tob, place }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Could not find your moon sign. Please try again.");
      setFound(data);
      if (onFound) onFound(data.sign);
      setBusy(false);
    } catch (err) {
      setBusy(false);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={submit} noValidate style={{ maxWidth: "980px", margin: margin, color: "#1E1830", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "22px 24px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", textAlign: "left", boxShadow: "0 30px 60px -30px rgba(0,0,0,0.6)" }}>
      <p style={{ margin: "0 0 14px", fontSize: "13.5px", color: "#5C5470", textAlign: "center" }}>
        <strong style={{ color: "#1E1830" }}>{"Don’t know your moon sign?"}</strong>
        {" Find it free in a few seconds, then pick your rashi below."}
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "12px", alignItems: "end" }}>
        <label style={labelStyle}>
          {"Actual date of birth"}
          <input ref={dobRef} type="text" placeholder="DD / MM / YYYY" inputMode="numeric" autoComplete="off" onInput={maskDate} style={inputStyle} />
        </label>
        <label style={labelStyle}>
          {"Time of birth"}
          <input ref={tobRef} type="text" placeholder="HH : MM : SS" inputMode="numeric" autoComplete="off" onInput={maskTime} style={inputStyle} />
        </label>
        <div style={labelStyle}>
          <label htmlFor="moon-place">{"Place of birth"}</label>
          <div ref={box} style={{ position: "relative", display: "grid" }}>
            <input
              id="moon-place" ref={placeRef} type="text" placeholder="City, State" autoComplete="off" spellCheck={false}
              role="combobox" aria-expanded={open} aria-autocomplete="list" aria-controls="moon-places"
              onInput={onPlaceInput} onKeyDown={onPlaceKey} onFocus={() => { if (hits.length) setOpen(true); }}
              style={inputStyle}
            />
            {open && hits.length ? (
              <ul id="moon-places" role="listbox" style={listStyle}>
                {hits.map((p, i) => (
                  <li key={i} role="option" aria-selected={i === active}>
                    <button
                      type="button" onMouseDown={(e) => { e.preventDefault(); pick(p); }} onMouseEnter={() => setActive(i)}
                      style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 14px", border: 0, borderBottom: "1px solid #EFE6D8", background: i === active ? "#F3E8F7" : "#FFFFFF", color: "#1E1830", font: "inherit", fontSize: "13.5px", cursor: "pointer" }}
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
        <button type="submit" disabled={busy} aria-busy={busy || undefined} style={{ font: "inherit", fontWeight: "700", minHeight: "48px", padding: "0 18px", border: "0", borderRadius: "999px", background: "#FCCE07", color: "#921A11", cursor: busy ? "default" : "pointer", opacity: busy ? 0.7 : 1 }}>
          {busy ? "Finding…" : "Find my moon sign"}
        </button>
      </div>
      {error ? <p role="alert" style={{ margin: "12px 0 0", fontSize: "13px", fontWeight: "600", color: "#921A11", textAlign: "center" }}>{error}</p> : null}
      {found ? (
        <p role="status" style={{ margin: "12px 0 0", fontSize: "13.5px", fontWeight: "600", color: "#2C6B1F", textAlign: "center" }}>
          {"Your moon sign is " + found.en + " (" + found.hi + "), in " + found.nak + " nakshatra. Today’s horoscope for " + found.en + " is shown below."}
        </p>
      ) : (
        <p style={{ margin: "12px 0 0", fontSize: "12px", color: "#736B8A", textAlign: "center" }}>
          {"Please use your actual date of birth, even if your documents show a different one."}
        </p>
      )}
    </form>
  );
}
