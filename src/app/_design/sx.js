import React from "react";

// Turns a CSS declaration string (as the design runtime accepts) into a React style object.
export function sx(style) {
  if (!style || typeof style !== "string") return style || undefined;
  const out = {};
  for (const decl of style.split(/;(?![^(]*\))/)) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim().replace(/\s*!important$/i, "");
    if (!prop) continue;
    const key = prop.startsWith("--") ? prop : prop.replace(/^-(webkit|moz|ms)-/, (_, p) => (p === "ms" ? "ms-" : p[0].toUpperCase() + p.slice(1) + "-")).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[key] = value;
  }
  return out;
}

// Renders a text hole the way the design runtime does: values sit in their own span.
export function hole(value) {
  if (value === undefined || value === null || typeof value === "boolean") return null;
  if (React.isValidElement(value) || Array.isArray(value)) return value;
  return React.createElement("span", { className: "sc-interp" }, String(value));
}
