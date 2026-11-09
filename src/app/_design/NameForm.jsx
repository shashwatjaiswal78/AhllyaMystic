"use client";
// The "Name number" form on the home page. Same markup and styles as the design; this file adds the behaviour:
// a call to the engine (/api/name-number) and the hand-off to the /name-number result page, which reads what the
// engine returned from sessionStorage.
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { maskDate } from "./wire";
import { labelStyle, inputStyle, selectStyle, isoDate } from "./form-parts";

export const NAME_KEY = "ahllya:name";

export default function NameForm({ onDone }) {
  const router = useRouter();
  const nameRef = useRef(null), genderRef = useRef(null), dobRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  // Coming back through "Edit details" (?edit=1): fill the form with what was entered last time. Otherwise it starts blank.
  useEffect(() => {
    try {
      if (new URLSearchParams(window.location.search).get("edit") !== "1") return; // opened from the menu or a link: start blank
      const i = (JSON.parse(sessionStorage.getItem(NAME_KEY) || "null") || {}).input;
      if (!i) return;
      if (nameRef.current) nameRef.current.value = i.name || "";
      if (genderRef.current && i.gender) genderRef.current.value = i.gender.charAt(0).toUpperCase() + i.gender.slice(1);
      if (dobRef.current && i.dob) dobRef.current.value = `${String(i.dob.day).padStart(2, "0")}/${String(i.dob.month).padStart(2, "0")}/${i.dob.year}`;
    } catch { /* nothing saved, or storage unavailable */ }
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (busy) return;
    setError("");
    const name = nameRef.current.value.trim();
    const dob = isoDate(dobRef.current.value);
    if (!/[A-Za-z]/.test(name)) return setError("Please enter your name. It needs at least one letter.");
    if (!genderRef.current.value) return setError("Please select your gender.");
    if (!dob) return setError("Enter your actual date of birth as DD/MM/YYYY.");

    setBusy(true);
    try {
      const res = await fetch("/api/name-number", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, gender: genderRef.current.value.toLowerCase(), dob }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Could not check your name. Please try again.");
      try { sessionStorage.setItem(NAME_KEY, JSON.stringify(data)); } catch { /* private mode: the result page asks again */ }
      if (onDone) onDone(); else router.push("/name-number");
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
        <select ref={genderRef} style={selectStyle} defaultValue="">
          <option value="" disabled>{"Select"}</option>
          <option>{"Female"}</option>
          <option>{"Male"}</option>
          <option>{"Other"}</option>
        </select>
      </label>
      <p style={{ gridColumn: "1 / -1", margin: "-6px 0 0", fontSize: "12px", color: "#736B8A" }}>
        {"Enter the spelling exactly as written in your official documents, such as your Aadhaar or passport."}
      </p>
      <label style={labelStyle}>
        {"Actual date of birth"}
        <input ref={dobRef} type="text" placeholder="DD / MM / YYYY" inputMode="numeric" autoComplete="off" onInput={maskDate} style={inputStyle} />
      </label>
      <label style={labelStyle}>
        <span>
          {"WhatsApp number "}
          <span style={{ fontWeight: "400", color: "#736B8A" }}>{"(optional)"}</span>
        </span>
        <input type="tel" placeholder="To get your result there" style={inputStyle} />
      </label>
      <button type="submit" disabled={busy} aria-busy={busy || undefined} style={{ gridColumn: "1 / -1", font: "inherit", fontWeight: "700", minHeight: "52px", border: "0", borderRadius: "999px", background: "#FCCE07", color: "#921A11", cursor: busy ? "default" : "pointer", opacity: busy ? 0.8 : 1 }}>
        {busy ? "Checking your name…" : "Check my name number"}
      </button>
      {error ? <p role="alert" style={{ gridColumn: "1 / -1", margin: "0", fontSize: "13px", fontWeight: "600", color: "#921A11", textAlign: "center" }}>{error}</p> : null}
      <p style={{ gridColumn: "1 / -1", margin: "0", fontSize: "12px", color: "#5C5470", textAlign: "center" }}>
        {"Want a name that truly supports you? See the "}
        <a href="/report/name-numerology">{"Name Numerology Report"}</a>
        {"."}
      </p>
    </form>
  );
}
