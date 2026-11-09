"use client";
// Mobile number route: the calculator page until a result exists, then the result page, on the same address.
import React, { useEffect, useState } from "react";
import CalculatorPage from "./CalculatorPage";
import ResultPage from "./MobileNumberPage";
import { MOBILE_KEY } from "./MobileForm";

const hasResult = (d) => d && d.v === 1 && d.verdict && d.totalSection;

export default function MobileRoute() {
  const [view, setView] = useState("form");
  useEffect(() => {
    // "Edit details" (?edit=1) always opens the form; otherwise a saved result opens the result.
    if (new URLSearchParams(window.location.search).get("edit") === "1") return;
    try { if (hasResult(JSON.parse(sessionStorage.getItem(MOBILE_KEY) || "null"))) setView("result"); } catch (e) { /* nothing saved */ }
  }, []);
  return view === "result" ? <ResultPage /> : <CalculatorPage kind="mobile" onDone={() => setView("result")} />;
}
