"use client";
// Free Kundli route: the calculator page until a result exists, then the result page, on the same address.
import React, { useState } from "react";
import CalculatorPage from "./CalculatorPage";
import ResultPage from "./KundliPage";
import { KUNDLI_KEY } from "./KundliForm";


export default function KundliRoute() {
  const [view, setView] = useState("form");
  return view === "result" ? <ResultPage /> : <CalculatorPage kind="kundli" onDone={() => setView("result")} />;
}
