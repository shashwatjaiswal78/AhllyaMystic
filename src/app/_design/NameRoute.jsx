"use client";
// Name number route: the calculator page until a result exists, then the result page, on the same address.
import React, { useEffect, useState } from "react";
import CalculatorPage from "./CalculatorPage";
import ResultPage from "./NameNumberPage";
import { NAME_KEY } from "./NameForm";

const hasResult = (d) => d && d.v === 1 && d.verdict && d.loShu;

export default function NameRoute() {
  const [view, setView] = useState("form");
  useEffect(() => {
    // "Edit details" (?edit=1) always opens the form; otherwise a saved result opens the result.
    if (new URLSearchParams(window.location.search).get("edit") === "1") return;
    try { if (hasResult(JSON.parse(sessionStorage.getItem(NAME_KEY) || "null"))) setView("result"); } catch (e) { /* nothing saved */ }
  }, []);
  return view === "result" ? <ResultPage /> : <CalculatorPage kind="name" onDone={() => setView("result")} />;
}
