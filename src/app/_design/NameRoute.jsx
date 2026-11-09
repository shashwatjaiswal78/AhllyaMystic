"use client";
// Name number route: the calculator page until a result exists, then the result page, on the same address.
import React, { useState } from "react";
import CalculatorPage from "./CalculatorPage";
import ResultPage from "./NameNumberPage";
import { NAME_KEY } from "./NameForm";


export default function NameRoute() {
  const [view, setView] = useState("form");
  return view === "result" ? <ResultPage /> : <CalculatorPage kind="name" onDone={() => setView("result")} />;
}
