// Today / Weekly / Monthly / 2027 / 2028 tabs shared by every horoscope page.
// Kept free of heavy imports so the client-side horoscope page can use it too.
export const PERIOD_TABS = [
  { key: "today", label: "Today" },
  { key: "weekly", label: "Weekly" },
  { key: "monthly", label: "Monthly" },
  { key: "2027", label: "2027" },
  { key: "2028", label: "2028" },
] as const;

export type PeriodKey = (typeof PERIOD_TABS)[number]["key"];

/** Path of a horoscope view, for all signs or for one sign. */
export function horoscopePath(key: PeriodKey, sign?: string): string {
  const base = sign ? `/horoscope/${sign}` : "/horoscope";
  return key === "today" ? base : `${base}/${key}`;
}

export function HoroscopeTabs({ active, sign }: { active: PeriodKey; sign?: string }) {
  return (
    <nav aria-label="Horoscope period" style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "0 0 22px", fontFamily: "var(--font-sans-body), system-ui, sans-serif" }}>
      {PERIOD_TABS.map((t) => {
        const on = t.key === active;
        return (
          <a
            key={t.key}
            href={horoscopePath(t.key, sign)}
            aria-current={on ? "page" : undefined}
            style={{
              display: "inline-flex", alignItems: "center", minHeight: 44, padding: "0 20px", borderRadius: 999, fontSize: 15, fontWeight: 700, textDecoration: "none",
              background: on ? "#6C1594" : "#FFFFFF", color: on ? "#FFFFFF" : "#6C1594", border: "1px solid " + (on ? "#6C1594" : "#D7C6E6"),
            }}
          >
            {t.label}
          </a>
        );
      })}
    </nav>
  );
}
