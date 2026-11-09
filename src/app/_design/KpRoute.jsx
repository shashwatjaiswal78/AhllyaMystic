"use client";
// KP Kundli route: the calculator page until a result exists, then the result page, on the same address.
import React, { useState } from "react";
import CalculatorPage from "./CalculatorPage";
import ResultPage from "./KpKundliPage";
import { KP_KEY } from "./KundliForm";


export default function KpRoute() {
  const [view, setView] = useState("form");
  return view === "result" ? <ResultPage /> : <CalculatorPage kind="kp" onDone={() => setView("result")} />;
}
