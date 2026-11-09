// Titles, descriptions and FAQs for the Panchang and Choghadiya pages, general and per city.
import type { City } from "./cities";

export type Mode = "panchang" | "choghadiya";
export type Faq = { q: string; a: string };

export function metaFor(mode: Mode, city?: City) {
  const base = mode === "panchang" ? "/panchang" : "/choghadiya";
  if (!city) {
    return mode === "panchang"
      ? { path: base, title: "Daily Panchang for Your City: Tithi, Nakshatra, Muhurat | आज का पंचांग", description: "Free daily Panchang for any city or village: tithi, nakshatra, yoga, karana, sunrise, moonrise, Rahu Kalam, Abhijit Muhurat and more. आज का पंचांग, अपने शहर के लिए।" }
      : { path: base, title: "Daily Choghadiya Today for Your City | आज का चौघड़िया", description: "Today’s day and night Choghadiya for any city or village, with the slot running now and Rahu Kaal. आज का चौघड़िया, शुभ और अशुभ समय, अपने शहर के लिए।" };
  }
  return mode === "panchang"
    ? { path: `${base}/${city.slug}`, title: `Today’s Panchang in ${city.name}: Tithi, Nakshatra, Muhurat | आज का पंचांग ${city.hi}`, description: `Aaj ka Panchang for ${city.name}: tithi, nakshatra, yoga, karana, sunrise, moonrise, Rahu Kalam and Abhijit Muhurat. ${city.hi} का आज का पंचांग।` }
    : { path: `${base}/${city.slug}`, title: `Today’s Choghadiya in ${city.name} | आज का चौघड़िया ${city.hi}`, description: `Aaj ka Choghadiya for ${city.name}: day and night slots, the one running now and Rahu Kaal. ${city.hi} का आज का चौघड़िया।` };
}

export function faqFor(mode: Mode, city?: City): Faq[] {
  const n = city?.name ?? "your city", h = city?.hi ?? "आपके शहर";
  if (mode === "choghadiya") {
    return [
      { q: `What is today's Choghadiya in ${n}?`, a: `The tables on this page list the day and night Choghadiya for ${n} with the time of each slot, and the slot running now is shown at the top. Amrit, Shubh, Labh and Char are favourable; Rog, Kaal and Udveg are best avoided.` },
      { q: "What is Choghadiya?", a: "Choghadiya is a way of checking whether a time of day is favourable for starting something. The day from sunrise to sunset and the night from sunset to the next sunrise are each divided into 8 slots, each ruled by a planet." },
      { q: `When is Rahu Kaal today in ${n}?`, a: `Rahu Kaal is one eighth of the daylight, counted from sunrise, and it moves with the weekday. The exact time for ${n} is marked in the day table on this page.` },
      { q: `आज ${h} में चौघड़िया कब है?`, a: `इस पेज की तालिकाओं में ${h} के लिए दिन और रात के चौघड़िया का समय दिया गया है, और जो अभी चल रहा है वह ऊपर दिखता है। अमृत, शुभ, लाभ और चर शुभ हैं; रोग, काल और उद्वेग से बचना चाहिए।` },
      { q: `आज ${h} में राहु काल कब है?`, a: `राहु काल सूर्योदय से गिना गया दिन का आठवाँ भाग है और वार के अनुसार बदलता है। ${h} के लिए सही समय इस पेज की दिन की तालिका में चिह्नित है।` },
    ];
  }
  return [
    { q: `What is today's tithi and nakshatra in ${n}?`, a: `This page shows today's tithi, nakshatra, yoga and karana for ${n}, each with the time it changes. A Panchang day begins at sunrise, so the values are worked out for the sunrise of ${n}.` },
    { q: "What is a Panchang?", a: "A Panchang has five limbs: Tithi (lunar day), Vaara (weekday), Nakshatra (the star the Moon is in), Yoga and Karana. It tells you what kind of day it is for starting something." },
    { q: `What is Abhijit Muhurat today in ${n}?`, a: `Abhijit Muhurat falls in the middle of the daylight and is considered good for most auspicious work. The time for ${n} is listed under Auspicious timings on this page. By tradition it is not counted on a Wednesday.` },
    { q: `आज ${h} में तिथि और नक्षत्र क्या है?`, a: `इस पेज पर ${h} के लिए आज की तिथि, नक्षत्र, योग और करण उनके बदलने के समय के साथ दिए गए हैं। पंचांग का दिन सूर्योदय से शुरू होता है, इसलिए मान ${h} के सूर्योदय के अनुसार निकाले गए हैं।` },
    { q: `आज ${h} में राहु काल कब है?`, a: `राहु काल सूर्योदय से गिना गया दिन का आठवाँ भाग है और वार के अनुसार बदलता है। ${h} का समय इस पेज पर अशुभ समय में दिया गया है।` },
  ];
}
