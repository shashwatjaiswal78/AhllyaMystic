// Pieces shared by the simple home-page forms (mobile number, name number): the design's field styles and date parsing.

export const labelStyle = { display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600" };
export const inputStyle = { font: "inherit", fontWeight: "400", minHeight: "48px", padding: "0 14px", border: "1px solid #D9CFBE", borderRadius: "12px", background: "#FBF7F0", color: "#1E1830" };
export const selectStyle = {
  ...inputStyle, padding: "0 40px 0 14px", minWidth: "0", cursor: "pointer", WebkitAppearance: "none", appearance: "none",
  background: "#FBF7F0 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%236C1594' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\") no-repeat right 14px center",
};

// "14/02/1996" -> "1996-02-14", or "" when it is not a real date.
export function isoDate(text) {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(text.trim());
  if (!m) return "";
  const [d, mo, y] = [+m[1], +m[2], +m[3]];
  const t = new Date(Date.UTC(y, mo - 1, d));
  return t.getUTCFullYear() === y && t.getUTCMonth() === mo - 1 && t.getUTCDate() === d ? `${m[3]}-${m[2]}-${m[1]}` : "";
}
