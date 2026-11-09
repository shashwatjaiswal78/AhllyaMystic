// Server-rendered text around the Panchang tool: a short explanation for a city page, in English and Hindi, and the
// links to every other city. Plain markup, so search engines read all of it on the first load.
import React from "react";
import { CITIES } from "@/lib/panchang/cities";

const serif = "'Marcellus', 'Tiro Devanagari Hindi', serif";
const wrap = { maxWidth: "1200px", margin: "0 auto", padding: "0 24px" };
const h2 = { margin: "0 0 12px", fontFamily: serif, fontWeight: 400, fontSize: "clamp(22px, 2.5vw, 30px)", lineHeight: 1.25, color: "#1E1830" };
const p = { margin: "0 0 14px", fontSize: "15.5px", lineHeight: 1.75, color: "#3A3350", maxWidth: "78ch" };
const deg = (v, pos, neg) => `${Math.abs(v).toFixed(2)}° ${v >= 0 ? pos : neg}`;

export function CityIntro({ city, mode = "panchang" }) {
  const ch = mode === "choghadiya";
  const coords = `${deg(city.la, "N", "S")}, ${deg(city.lo, "E", "W")}`;
  return (
    <section style={{ ...wrap, padding: "8px 24px 8px" }}>
      <div style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "28px" }}>
        {ch ? (
          <>
            <h2 style={h2}>Choghadiya today in {city.name}</h2>
            <p style={p}>
              This page lists today’s day and night Choghadiya for {city.name}, {city.region}, worked out for its own position ({coords}, time zone {city.tz.replace("_", " ")}).
              The day Choghadiya runs from sunrise to sunset and the night Choghadiya from sunset to the next sunrise, each in eight slots, so the times here are different from those of any other city.
              The slot running now is shown at the top with a countdown, and Rahu Kaal is marked in the day table.
            </p>
            <p style={p}>
              Amrit, Shubh, Labh and Char are favourable for a purchase, a journey or a new beginning, while Rog, Kaal and Udveg are best avoided. Use the date buttons to check another day before you plan.
            </p>
            <h2 lang="hi" style={{ ...h2, marginTop: "26px" }}>{city.hi} में आज का चौघड़िया</h2>
            <p lang="hi" style={p}>
              इस पेज पर {city.hi}, {city.hiRegion} के लिए आज का दिन और रात का चौघड़िया दिया गया है, जो इसी शहर की स्थिति ({coords}) के अनुसार निकाला गया है।
              दिन का चौघड़िया सूर्योदय से सूर्यास्त तक और रात का चौघड़िया सूर्यास्त से अगले सूर्योदय तक, आठ-आठ भागों में होता है, इसलिए यहाँ के समय दूसरे शहरों से अलग हैं।
              जो चौघड़िया अभी चल रहा है वह गिनती के साथ ऊपर दिखता है, और राहु काल दिन की तालिका में चिह्नित है।
            </p>
            <p lang="hi" style={p}>
              खरीदारी, यात्रा या नई शुरुआत के लिए अमृत, शुभ, लाभ और चर अच्छे माने जाते हैं, जबकि रोग, काल और उद्वेग से बचना चाहिए। योजना बनाने से पहले तारीख़ के बटन से दूसरे दिन भी देख लें।
            </p>
          </>
        ) : (
          <>
            <h2 style={h2}>Panchang today in {city.name}</h2>
            <p style={p}>
              This page shows today’s Panchang for {city.name}, {city.region}, worked out for its own position ({coords}, time zone {city.tz.replace("_", " ")}).
              A Panchang day begins at sunrise, so the sunrise, moonrise, auspicious and inauspicious timings here are different from those of any other city.
              The tithi, nakshatra, yoga and karana are shown with the time each one changes, and you can move to any other date with the buttons above.
            </p>
            <p style={p}>
              Brahma Muhurta and Abhijit Muhurat are listed as auspicious times; Rahu Kalam, Yamaganda and Gulika Kalam are the periods in which new work is traditionally not begun.
            </p>
            <h2 lang="hi" style={{ ...h2, marginTop: "26px" }}>{city.hi} का आज का पंचांग</h2>
            <p lang="hi" style={p}>
              इस पेज पर {city.hi}, {city.hiRegion} के लिए आज का पंचांग दिया गया है, जो इसी शहर की स्थिति ({coords}) के अनुसार निकाला गया है।
              पंचांग का दिन सूर्योदय से शुरू होता है, इसलिए {city.hi} के सूर्योदय, चंद्रोदय और शुभ-अशुभ समय दूसरे शहरों से अलग होते हैं।
              तिथि, नक्षत्र, योग और करण के साथ उनके बदलने का समय भी दिखाया गया है, और ऊपर के बटन से आप कोई भी दूसरी तारीख़ देख सकते हैं।
            </p>
            <p lang="hi" style={p}>
              ब्रह्म मुहूर्त और अभिजित मुहूर्त शुभ समय के रूप में दिए गए हैं; राहु काल, यमगंड और गुलिक काल वे समय हैं जिनमें परंपरा से नया काम शुरू नहीं किया जाता।
            </p>
          </>
        )}
      </div>
    </section>
  );
}

export function CityLinks({ current = "", mode = "panchang" }) {
  const base = mode === "choghadiya" ? "/choghadiya" : "/panchang";
  const india = CITIES.filter((c) => !c.abroad);
  const abroad = CITIES.filter((c) => c.abroad);
  const link = (c) => (
    <li key={c.slug}>
      <a href={`${base}/${c.slug}`} aria-current={c.slug === current ? "page" : undefined} style={{ color: c.slug === current ? "#2E003E" : "#921A11", fontWeight: c.slug === current ? 800 : 600, textDecoration: "none" }}>
        {c.name} <span lang="hi" style={{ color: "#736B8A", fontWeight: 500 }}>· {c.hi}</span>
      </a>
    </li>
  );
  const grid = { listStyle: "none", margin: "0 0 28px", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "10px 18px", fontSize: "14.5px" };
  return (
    <section style={{ ...wrap, padding: "32px 24px 72px" }}>
      <h2 style={h2}>{mode === "choghadiya" ? "Choghadiya by city · शहर के अनुसार चौघड़िया" : "Panchang by city · शहर के अनुसार पंचांग"}</h2>
      <p style={{ ...p, marginBottom: "18px" }}>Pick your city for its own sunrise, timings and Rahu Kaal. For a smaller town or village, use the place search above.</p>
      <ul style={grid}>{india.map(link)}</ul>
      <h3 style={{ ...h2, fontSize: "19px" }}>Outside India · भारत से बाहर</h3>
      <ul style={grid}>{abroad.map(link)}</ul>
    </section>
  );
}
