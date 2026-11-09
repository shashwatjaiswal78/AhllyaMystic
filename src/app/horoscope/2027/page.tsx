import type { Metadata } from "next";
import { getYearly2027 } from "@/lib/horoscope/data";
import { SIGN_INFO } from "@/lib/horoscope/signs";
import { PageHead, PeriodShell } from "@/lib/horoscope/period-ui";

export const metadata: Metadata = {
  alternates: { canonical: "/horoscope/2027" },
  title: "Horoscope 2027: Yearly Rashifal for All 12 Signs",
  description: "Horoscope 2027 for every Moon sign, with the exact dates Jupiter, Saturn and Rahu change house, your Sade Sati and dhaiya status, and what each phase means. Calculated from real planet positions.",
};

const ink = { mute: "#5C5470", line: "#E8DFD0", purple: "#6C1594" };

export default async function Page() {
  const data = await getYearly2027();
  return (
    <PeriodShell crumb="2027">
      <PageHead title="Horoscope 2027" sub="The slow planets decide the shape of a year. Here is where Jupiter, Saturn and Rahu sit for each Moon sign in 2027, and the dates they change house." />
      <section style={{ background: "#FFFFFF", border: `1px solid ${ink.line}`, borderRadius: 18, padding: "18px 22px", marginBottom: 24 }}>
        <h2 style={{ fontFamily: "var(--font-serif-display), serif", fontWeight: 400, fontSize: 24, margin: "0 0 8px" }}>Big planet changes in 2027</h2>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {data.events.map((e) => <li key={e.planet + e.dateLabel}><b>{e.dateLabel}:</b> {e.planet} moves into {e.toSign}</li>)}
        </ul>
        <p style={{ margin: "10px 0 0", color: ink.mute, fontSize: 14 }}>Sidereal (Lahiri) signs. A planet can step back into the previous sign while retrograde, which is why some planets appear twice.</p>
      </section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(360px, 100%), 1fr))", gap: 16 }}>
        {SIGN_INFO.map((info, i) => {
          const y = data.signs[i];
          return (
            <article key={info.en} id={info.en.toLowerCase()} style={{ background: "#FFFFFF", border: `1px solid ${ink.line}`, borderRadius: 20, padding: "18px 20px", display: "grid", gap: 12 }}>
              <h2 style={{ margin: 0, fontFamily: "var(--font-serif-display), serif", fontWeight: 400, fontSize: 24 }}>{info.en} <span style={{ color: ink.mute, fontSize: 18 }}>{info.hi}</span> 2027</h2>
              <p style={{ margin: 0, fontSize: 15 }}>{y.saturnNote}</p>
              {y.planets.map((p) => (
                <div key={p.planet}>
                  <p style={{ margin: "0 0 4px", fontSize: 15 }}>{p.summary}</p>
                  <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: ink.mute }}>
                    {p.stretches.map((s) => <li key={s.from}>{s.from} to {s.to}: {s.house}{["th", "st", "nd", "rd"][s.house % 10 < 4 && ![11, 12, 13].includes(s.house) ? s.house % 10 : 0]} house, {s.good ? "supportive" : "challenging"}</li>)}
                  </ul>
                </div>
              ))}
              <a href={`/horoscope/${info.en.toLowerCase()}`} style={{ color: ink.purple, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>See today’s {info.en} horoscope →</a>
            </article>
          );
        })}
      </div>
    </PeriodShell>
  );
}
