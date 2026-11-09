import type { ReactNode } from "react";
import { SITE_URL } from "@/lib/site";
import { HOROSCOPE_FAQS } from "./seo";
import { SIGN_INFO } from "./signs";
import { AREAS, AREA_LABEL, type DayScore, type PeriodData, type YearData } from "./periods";
import { HoroscopeTabs, horoscopePath, type PeriodKey } from "./tabs";

const C = { bg: "#FBF7F0", ink: "#1E1830", mute: "#5C5470", purple: "#6C1594", deep: "#2E003E", gold: "#FCCE07", line: "#E8DFD0" };
const serif = "var(--font-serif-display), 'Marcellus', serif";
const sans = "var(--font-sans-body), 'Manrope', system-ui, sans-serif";

export const band = (n: number) => (n >= 70 ? { bg: "#E6F3E1", fg: "#2C6B1F", name: "Favourable" } : n >= 50 ? { bg: "#FFF3D1", fg: "#7A5A00", name: "Mixed" } : { bg: "#FBE3DF", fg: "#921A11", name: "Careful" });

const NAV: [string, string][] = [["Consultations", "/#consult"], ["Free Kundli", "/kundli"], ["Reports", "/#reports"], ["Horoscope", "/horoscope"], ["About", "/about"]];

/** Page frame for the longer-range horoscope views: same colours and type as the rest of the site. */
export function PeriodShell({ children, crumb, jsonLd }: { children: ReactNode; crumb: string; jsonLd?: object }) {
  const link = { color: "#FFFFFF", textDecoration: "none", fontSize: 15, fontWeight: 500 } as const;
  const faq = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "FAQPage", mainEntity: HOROSCOPE_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      ...(jsonLd ? [jsonLd] : []),
    ],
  };
  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: sans, lineHeight: 1.6, minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq).replace(/</g, "\\u003c") }} />
      <header style={{ background: C.deep, position: "sticky", top: 0, zIndex: 20 }}>
        <nav aria-label="Main" style={{ maxWidth: 1200, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <a href="/" aria-label="Ahllya Mystic home"><img src="/images/f0424906cf2ed307d839fd952ac77981.png" alt="Ahllya Mystic" style={{ height: 44, width: "auto", display: "block" }} /></a>
          <div style={{ display: "flex", gap: "8px 22px", flexWrap: "wrap" }}>{NAV.map(([t, h]) => <a key={h} href={h} style={link}>{t}</a>)}</div>
        </nav>
      </header>
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 24px 56px" }}>
        <p style={{ margin: "0 0 14px", fontSize: 14, color: C.mute }}>
          <a href="/" style={{ color: C.mute, textDecoration: "none" }}>Home</a> / <a href="/horoscope" style={{ color: C.mute, textDecoration: "none" }}>Daily horoscope</a> / {crumb}
        </p>
        {children}
        <section style={{ marginTop: 48 }}>
          <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 28, margin: "0 0 14px" }}>About these horoscopes</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {HOROSCOPE_FAQS.map((f) => (
              <details key={f.q} style={{ background: "#FFFFFF", border: `1px solid ${C.line}`, borderRadius: 16, padding: "14px 18px" }}>
                <summary style={{ cursor: "pointer", fontWeight: 600 }}>{f.q}</summary>
                <p style={{ margin: "10px 0 0", color: C.mute }}>{f.a}</p>
              </details>
            ))}
          </div>
          <p style={{ marginTop: 18, color: C.mute, fontSize: 14 }}>
            These readings are general, for everyone born under the same Moon sign. They are not based on your own chart. <a href="/report/kundli" style={{ color: C.purple }}>Get your personalised Kundli report</a> or <a href="/consult" style={{ color: C.purple }}>book a consultation</a>.
          </p>
        </section>
      </main>
      <footer style={{ background: C.deep, color: "#EADFF2", padding: "28px 24px", fontSize: 14 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "8px 24px", justifyContent: "space-between" }}>
          <span>© Ahllya Mystic · <a href={SITE_URL} style={{ color: "#EADFF2" }}>ahllyamystic.com</a></span>
          <span style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <a href="/policies/privacy" style={{ color: "#EADFF2" }}>Privacy</a><a href="/policies/terms" style={{ color: "#EADFF2" }}>Terms</a><a href="/contact" style={{ color: "#EADFF2" }}>Contact</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export function PageHead({ title, sub }: { title: string; sub: string }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(32px, 4.4vw, 52px)", lineHeight: 1.1, margin: "0 0 10px" }}>{title}</h1>
      <p style={{ margin: 0, color: C.mute, maxWidth: 760, fontSize: 17 }}>{sub}</p>
    </div>
  );
}

export function Pill({ n }: { n: number }) {
  const b = band(n);
  return <span style={{ display: "inline-block", minWidth: 36, textAlign: "center", padding: "2px 8px", borderRadius: 999, background: b.bg, color: b.fg, fontWeight: 700, fontSize: 13 }} aria-label={`${n}, ${b.name}`}>{n}</span>;
}

/** One column per day, with the overall score as number and colour. */
export function DayStrip({ days }: { days: DayScore[] }) {
  return (
    <div role="list" aria-label="Overall score by day" style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(days.length, 10)}, minmax(0, 1fr))`, gap: 4 }}>
      {days.map((d) => {
        const b = band(d.scores.overall);
        return (
          <div key={d.label} role="listitem" title={`${d.weekday} ${d.label}: ${d.scores.overall} (${b.name})`} style={{ background: b.bg, color: b.fg, borderRadius: 8, padding: "5px 2px", textAlign: "center", fontSize: 11, lineHeight: 1.25 }}>
            <div style={{ fontWeight: 700 }}>{d.scores.overall}</div>
            <div>{days.length <= 7 ? d.weekday : d.label.split(" ")[0]}</div>
          </div>
        );
      })}
    </div>
  );
}

export function PeriodGrid({ data, kind }: { data: PeriodData; kind: "week" | "month" }) {
  return (
    <>
      <section style={{ background: "#FFFFFF", border: `1px solid ${C.line}`, borderRadius: 18, padding: "18px 22px", marginBottom: 24 }}>
        <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 24, margin: "0 0 8px" }}>In the sky this {kind}</h2>
        {data.events.length ? (
          <ul style={{ margin: 0, paddingLeft: 20 }}>{data.events.map((e) => <li key={e.planet + e.dateLabel}><b>{e.planet}</b> moves into {e.toSign} on {e.dateLabel}.</li>)}</ul>
        ) : <p style={{ margin: 0, color: C.mute }}>No fast planet changes sign this {kind}. The Moon sets the rhythm of each day.</p>}
      </section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))", gap: 16 }}>
        {SIGN_INFO.map((info, i) => {
          const s = data.signs[i];
          return (
            <article key={info.en} id={info.en.toLowerCase()} style={{ background: "#FFFFFF", border: `1px solid ${C.line}`, borderRadius: 20, padding: "18px 20px", display: "grid", gap: 12 }}>
              <header style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
                <h2 style={{ margin: 0, fontFamily: serif, fontWeight: 400, fontSize: 24 }}>{info.en} <span style={{ color: C.mute, fontSize: 18 }}>{info.hi}</span></h2>
                <a href={`/horoscope/${info.en.toLowerCase()}/${kind === "week" ? "weekly" : "monthly"}`} style={{ color: C.purple, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Full {kind} →</a>
              </header>
              <DayStrip days={s.days} />
              <p style={{ margin: 0, fontSize: 15 }}>
                Best day: <b>{s.best.weekday} {s.best.label}</b> ({s.best.scores.overall}). Take care on <b>{s.careful.weekday} {s.careful.label}</b> ({s.careful.scores.overall}).
                {" "}Strongest area: <b>{AREA_LABEL[s.strongest]}</b>. Needs the most care: <b>{AREA_LABEL[s.weakest]}</b>.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 14px", fontSize: 14, color: C.mute }}>
                {AREAS.map((a) => <span key={a}>{AREA_LABEL[a]} <Pill n={s.avg[a]} /></span>)}
              </div>
              {s.ingresses.length ? (
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: C.mute }}>
                  {s.ingresses.map((g) => <li key={g.planet + g.dateLabel}><b>{g.dateLabel}:</b> {g.note}</li>)}
                </ul>
              ) : null}
            </article>
          );
        })}
      </div>
    </>
  );
}

/* ---------------------------------------------------------------- Sign pages and year hub */

export function SignLinks({ period, current }: { period: PeriodKey; current?: string }) {
  return (
    <nav aria-label="Other signs" style={{ marginTop: 32 }}>
      <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 24, margin: "0 0 12px" }}>Other signs</h2>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
        {SIGN_INFO.map((s) => {
          const slug = s.en.toLowerCase();
          return slug === current ? null : <li key={slug}><a href={horoscopePath(period, slug)} style={{ color: C.purple, fontWeight: 600, textDecoration: "none" }}>{s.en} ({s.hi})</a></li>;
        })}
      </ul>
    </nav>
  );
}

/** A full week or month for one sign: every day with its scores and the Moon's role. */
export function SignPeriodView({ data, index, kind }: { data: PeriodData; index: number; kind: "weekly" | "monthly" }) {
  const info = SIGN_INFO[index];
  const slug = info.en.toLowerCase();
  const s = data.signs[index];
  const noun = kind === "weekly" ? "week" : "month";
  return (
    <>
      <HoroscopeTabs active={kind} sign={slug} />
      <PageHead title={`${info.en} ${kind === "weekly" ? "weekly" : "monthly"} horoscope, ${data.range}`} sub={`${info.en} (${info.hi}) day by day: love, career, money and health scores, the days to lean into and the days to go slowly. Ruled by ${info.lord}.`} />
      <section style={{ background: "#FFFFFF", border: `1px solid ${C.line}`, borderRadius: 18, padding: "18px 22px", marginBottom: 20 }}>
        <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 24, margin: "0 0 8px" }}>The {noun} at a glance</h2>
        <p style={{ margin: "0 0 12px" }}>
          Your best day is <b>{s.best.weekday} {s.best.label}</b> (overall {s.best.scores.overall}). Take extra care on <b>{s.careful.weekday} {s.careful.label}</b> (overall {s.careful.scores.overall}).
          {" "}This {noun} <b>{AREA_LABEL[s.strongest].toLowerCase()}</b> is your strongest area and <b>{AREA_LABEL[s.weakest].toLowerCase()}</b> needs the most care.
        </p>
        <DayStrip days={s.days} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 12, fontSize: 14, color: C.mute }}>
          {AREAS.map((a) => <span key={a}>{AREA_LABEL[a]} average <Pill n={s.avg[a]} /></span>)}
        </div>
      </section>
      {s.ingresses.length ? (
        <section style={{ background: "#FFFFFF", border: `1px solid ${C.line}`, borderRadius: 18, padding: "18px 22px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 24, margin: "0 0 8px" }}>Planet changes for {info.en} this {noun}</h2>
          <ul style={{ margin: 0, paddingLeft: 20 }}>{s.ingresses.map((g) => <li key={g.planet + g.dateLabel}><b>{g.dateLabel}:</b> {g.note}</li>)}</ul>
        </section>
      ) : null}
      <section>
        <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 24, margin: "0 0 12px" }}>Day by day</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))", gap: 12 }}>
          {s.days.map((d) => (
            <article key={d.label} style={{ background: "#FFFFFF", border: `1px solid ${C.line}`, borderRadius: 16, padding: "14px 16px" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: 16 }}>{d.weekday} {d.label} <Pill n={d.scores.overall} /></h3>
              <p style={{ margin: "0 0 8px", fontSize: 14, color: C.mute }}>{d.moon}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 12px", fontSize: 13 }}>
                {AREAS.filter((a) => a !== "overall").map((a) => <span key={a}>{AREA_LABEL[a]} <Pill n={d.scores[a]} /></span>)}
              </div>
            </article>
          ))}
        </div>
      </section>
      <p style={{ marginTop: 24 }}>
        <a href={`/horoscope/${slug}`} style={{ color: C.purple, fontWeight: 600 }}>Today’s {info.en} horoscope</a>
        {" · "}<a href={`/horoscope/${kind}`} style={{ color: C.purple, fontWeight: 600 }}>{kind === "weekly" ? "Weekly" : "Monthly"} horoscope for all signs</a>
      </p>
      <SignLinks period={kind} current={slug} />
    </>
  );
}

function ordinal(n: number) {
  return n + (n % 10 === 1 && n !== 11 ? "st" : n % 10 === 2 && n !== 12 ? "nd" : n % 10 === 3 && n !== 13 ? "rd" : "th");
}

function YearCard({ data, index, full }: { data: YearData; index: number; full?: boolean }) {
  const info = SIGN_INFO[index];
  const y = data.signs[index];
  const slug = info.en.toLowerCase();
  const H = full ? "h2" : "h2";
  return (
    <article id={slug} style={{ background: "#FFFFFF", border: `1px solid ${C.line}`, borderRadius: 20, padding: "18px 20px", display: "grid", gap: 12 }}>
      <H style={{ margin: 0, fontFamily: serif, fontWeight: 400, fontSize: 24 }}>{info.en} <span style={{ color: C.mute, fontSize: 18 }}>{info.hi}</span> {data.year}</H>
      <p style={{ margin: 0, fontSize: 15 }}>{y.saturnNote}</p>
      {y.planets.map((p) => (
        <div key={p.planet}>
          <p style={{ margin: "0 0 4px", fontSize: 15 }}>{p.summary}</p>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: C.mute }}>
            {p.stretches.map((st) => <li key={st.from}>{st.from} to {st.to}: {ordinal(st.house)} house, {st.good ? "supportive" : "challenging"}</li>)}
          </ul>
        </div>
      ))}
      {!full ? <a href={`/horoscope/${slug}/${data.year}`} style={{ color: C.purple, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Full {info.en} {data.year} horoscope →</a> : null}
    </article>
  );
}

/** Yearly horoscope for all signs. */
export function YearHub({ data }: { data: YearData }) {
  return (
    <>
      <HoroscopeTabs active={String(data.year) as PeriodKey} />
      <PageHead title={`Horoscope ${data.year}`} sub={`The slow planets decide the shape of a year. Here is where Jupiter, Saturn and Rahu sit for each Moon sign in ${data.year}, and the dates they change house.`} />
      <section style={{ background: "#FFFFFF", border: `1px solid ${C.line}`, borderRadius: 18, padding: "18px 22px", marginBottom: 24 }}>
        <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 24, margin: "0 0 8px" }}>Big planet changes in {data.year}</h2>
        <ul style={{ margin: 0, paddingLeft: 20 }}>{data.events.map((e) => <li key={e.planet + e.dateLabel}><b>{e.dateLabel}:</b> {e.planet} moves into {e.toSign}</li>)}</ul>
        <p style={{ margin: "10px 0 0", color: C.mute, fontSize: 14 }}>Sidereal (Lahiri) signs. A planet can step back into the previous sign while retrograde, which is why some planets appear twice.</p>
      </section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(360px, 100%), 1fr))", gap: 16 }}>
        {SIGN_INFO.map((_, i) => <YearCard key={i} data={data} index={i} />)}
      </div>
    </>
  );
}

/** Yearly horoscope for one sign. */
export function SignYearView({ data, index }: { data: YearData; index: number }) {
  const info = SIGN_INFO[index];
  const slug = info.en.toLowerCase();
  const y = data.signs[index];
  return (
    <>
      <HoroscopeTabs active={String(data.year) as PeriodKey} sign={slug} />
      <PageHead title={`${info.en} horoscope ${data.year}`} sub={`${info.en} (${info.hi}) for ${data.year}: where Jupiter, Saturn and Rahu stand for your Moon sign, the exact dates they change house, and what it means for the year. Ruled by ${info.lord}.`} />
      {y.highlights.length ? (
        <section style={{ background: "#FFFFFF", border: `1px solid ${C.line}`, borderRadius: 18, padding: "18px 22px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 24, margin: "0 0 8px" }}>Dates to remember</h2>
          <ul style={{ margin: 0, paddingLeft: 20 }}>{y.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
        </section>
      ) : null}
      <YearCard data={data} index={index} full />
      <p style={{ marginTop: 24 }}>
        <a href={`/horoscope/${slug}`} style={{ color: C.purple, fontWeight: 600 }}>Today’s {info.en} horoscope</a>
        {" · "}<a href={`/horoscope/${data.year}`} style={{ color: C.purple, fontWeight: 600 }}>Horoscope {data.year} for all signs</a>
      </p>
      <SignLinks period={String(data.year) as PeriodKey} current={slug} />
    </>
  );
}
