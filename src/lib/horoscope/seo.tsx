import { SIGN_INFO } from "./signs";
import { SITE_URL } from "@/lib/site";

export const SIGN_SLUGS = SIGN_INFO.map((s) => s.en.toLowerCase());

export const HOROSCOPE_FAQS = [
  { q: "Is this based on my Moon sign or Sun sign?", a: "Your Moon sign (rashi), as in Vedic astrology. It is the sign the Moon was in when you were born, and it is often different from the Sun sign used in western astrology." },
  { q: "How is it calculated?", a: "From the actual positions of the planets at sunrise in New Delhi, counted from your Moon sign. The scores come from how supportive each planet is for each part of life today." },
  { q: "I don’t know my Moon sign. How do I find it?", a: "Use our free Kundli tool with your date, time and place of birth. It shows your Moon sign in a few seconds." },
  { q: "Is a daily horoscope enough to make decisions?", a: "It is a general guide for everyone born under the same Moon sign. For a decision about your own life, your personal Kundli is far more accurate." },
];

/** FAQPage + BreadcrumbList structured data for the horoscope pages. */
export function HoroscopeJsonLd({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: HOROSCOPE_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${SITE_URL}${c.path}` })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

/** Plain links to every sign, so search engines and readers can reach each page, plus the WhatsApp daily sign-up. */
export function HoroscopeExtras({ current }: { current?: string }) {
  const wa = "https://wa.me/919129237566?text=" + encodeURIComponent("Hi, please send me the daily rashifal on WhatsApp. My Moon sign is ");
  const link = { color: "#6C1594", textDecoration: "none", fontWeight: 600 } as const;
  return (
    <section style={{ background: "#FBF7F0", padding: "8px 24px 56px", fontFamily: "var(--font-sans-body), system-ui, sans-serif", color: "#1E1830" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: 28 }}>
        <nav aria-label="Horoscope by sign">
          <h2 style={{ margin: "0 0 12px", fontFamily: "var(--font-serif-display), serif", fontWeight: 400, fontSize: 22.5 }}>Horoscope for every sign</h2>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: "10px 22px" }}>
            {SIGN_INFO.map((s) => (
              <li key={s.en}>
                <a href={`/horoscope/${s.en.toLowerCase()}`} aria-current={current === s.en.toLowerCase() ? "page" : undefined} style={link}>
                  {s.en} ({s.hi})
                </a>
              </li>
            ))}
          </ul>

        </nav>
        <div style={{ background: "#2E003E", color: "#FFFFFF", borderRadius: 22, padding: "26px 28px", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ maxWidth: 640 }}>
            <h2 style={{ margin: "0 0 6px", fontFamily: "var(--font-serif-display), serif", fontWeight: 400, fontSize: 22.5 }}>Get your daily rashifal on WhatsApp</h2>
            <p style={{ margin: 0, color: "#EADFF2", fontSize: 13.5 }}>Message us your Moon sign and we will add you to the daily list.</p>
          </div>
          <a href={wa} style={{ display: "inline-flex", alignItems: "center", minHeight: 52, padding: "0 26px", borderRadius: 999, background: "#FCCE07", color: "#2E003E", fontWeight: 700, textDecoration: "none" }}>
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
