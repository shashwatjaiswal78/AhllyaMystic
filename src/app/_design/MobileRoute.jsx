"use client";
// Mobile number route: the calculator page until a result exists, then the result page, on the same address.
import React, { useState } from "react";
import CalculatorPage from "./CalculatorPage";
import ResultPage from "./MobileNumberPage";
import { MOBILE_KEY } from "./MobileForm";


export default function MobileRoute() {
  const [view, setView] = useState("form");
  return view === "result" ? <ResultPage /> : <CalculatorPage kind="mobile" onDone={() => setView("result")} />;
}
