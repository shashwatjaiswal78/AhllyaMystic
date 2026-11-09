// Hindi wording for the Panchang pages: the names that come out of the engine, and the labels around them.
export type Lang = "en" | "hi";

const MAP: Record<string, string> = {
  // tithi
  Pratipada: "प्रतिपदा", Dwitiya: "द्वितीया", Tritiya: "तृतीया", Chaturthi: "चतुर्थी", Panchami: "पंचमी", Shashthi: "षष्ठी", Saptami: "सप्तमी",
  Ashtami: "अष्टमी", Navami: "नवमी", Dashami: "दशमी", Ekadashi: "एकादशी", Dwadashi: "द्वादशी", Trayodashi: "त्रयोदशी", Chaturdashi: "चतुर्दशी",
  Purnima: "पूर्णिमा", Amavasya: "अमावस्या", Shukla: "शुक्ल", Krishna: "कृष्ण",
  // nakshatra
  Ashwini: "अश्विनी", Bharani: "भरणी", Krittika: "कृत्तिका", Rohini: "रोहिणी", Mrigashira: "मृगशिरा", Ardra: "आर्द्रा", Punarvasu: "पुनर्वसु", Pushya: "पुष्य",
  Ashlesha: "आश्लेषा", Magha: "मघा", "Purva Phalguni": "पूर्वा फाल्गुनी", "Uttara Phalguni": "उत्तरा फाल्गुनी", Hasta: "हस्त", Chitra: "चित्रा", Swati: "स्वाति",
  Vishakha: "विशाखा", Anuradha: "अनुराधा", Jyeshtha: "ज्येष्ठा", Mula: "मूल", "Purva Ashadha": "पूर्वाषाढ़ा", "Uttara Ashadha": "उत्तराषाढ़ा", Shravana: "श्रवण",
  Dhanishta: "धनिष्ठा", Shatabhisha: "शतभिषा", "Purva Bhadrapada": "पूर्वभाद्रपद", "Uttara Bhadrapada": "उत्तरभाद्रपद", Revati: "रेवती",
  // yoga
  Vishkambha: "विष्कंभ", Priti: "प्रीति", Ayushman: "आयुष्मान", Saubhagya: "सौभाग्य", Shobhana: "शोभन", Atiganda: "अतिगंड", Sukarma: "सुकर्मा", Dhriti: "धृति",
  Shula: "शूल", Ganda: "गंड", Vriddhi: "वृद्धि", Dhruva: "ध्रुव", Vyaghata: "व्याघात", Harshana: "हर्षण", Vajra: "वज्र", Siddhi: "सिद्धि", Vyatipata: "व्यतीपात",
  Variyana: "वरीयान", Parigha: "परिघ", Shiva: "शिव", Siddha: "सिद्ध", Sadhya: "साध्य", Shubha: "शुभ", Brahma: "ब्रह्म", Indra: "इंद्र", Vaidhriti: "वैधृति",
  // karana
  Bava: "बव", Balava: "बालव", Kaulava: "कौलव", Taitila: "तैतिल", Gara: "गर", Vanija: "वणिज", Vishti: "विष्टि (भद्रा)", Kimstughna: "किंस्तुघ्न",
  Shakuni: "शकुनि", Chatushpada: "चतुष्पद", Naga: "नाग",
  // choghadiya
  Amrit: "अमृत", Shubh: "शुभ", Labh: "लाभ", Char: "चर", Udveg: "उद्वेग", Rog: "रोग", Kaal: "काल",
  // nature
  Best: "सर्वोत्तम", Good: "अच्छा", Gain: "लाभ", Neutral: "सामान्य", Bad: "अशुभ", Evil: "अशुभ", Loss: "हानि",
  // weekdays
  Sunday: "रविवार", Monday: "सोमवार", Tuesday: "मंगलवार", Wednesday: "बुधवार", Thursday: "गुरुवार", Friday: "शुक्रवार", Saturday: "शनिवार",
  // lunar months
  Chaitra: "चैत्र", Vaishakha: "वैशाख", Ashadha: "आषाढ़", Bhadrapada: "भाद्रपद", Ashwina: "आश्विन", Kartika: "कार्तिक", Margashirsha: "मार्गशीर्ष",
  Pausha: "पौष", Phalguna: "फाल्गुन", Adhika: "अधिक",
  // rashi
  Mesha: "मेष", Vrishabha: "वृषभ", Mithuna: "मिथुन", Karka: "कर्क", Simha: "सिंह", Kanya: "कन्या", Tula: "तुला", Vrishchika: "वृश्चिक", Dhanu: "धनु", Makara: "मकर", Kumbha: "कुंभ", Meena: "मीन",
  // ritu and ayana
  Vasanta: "वसंत", Grishma: "ग्रीष्म", Varsha: "वर्षा", Sharad: "शरद", Hemanta: "हेमंत", Shishira: "शिशिर", Uttarayana: "उत्तरायण", Dakshinayana: "दक्षिणायन",
  // directions
  East: "पूर्व", West: "पश्चिम", North: "उत्तर", South: "दक्षिण",
  // planets
  Sun: "सूर्य", Moon: "चंद्र", Mars: "मंगल", Mercury: "बुध", Jupiter: "गुरु", Venus: "शुक्र", Saturn: "शनि",
};

// Lunar months share some spellings with nakshatras (Magha, Jyeshtha, Shravana), so they have their own table.
const MONTH_HI: Record<string, string> = {
  Chaitra: "चैत्र", Vaishakha: "वैशाख", Jyeshtha: "ज्येष्ठ", Ashadha: "आषाढ़", Shravana: "श्रावण", Bhadrapada: "भाद्रपद", Ashwina: "आश्विन",
  Kartika: "कार्तिक", Margashirsha: "मार्गशीर्ष", Pausha: "पौष", Magha: "माघ", Phalguna: "फाल्गुन",
};
/** "Adhika Ashadha" -> "अधिक आषाढ़". */
export const hiLunarMonth = (s: string) => s.split(" ").map((w) => (w === "Adhika" ? "अधिक" : MONTH_HI[w] ?? w)).join(" ");

/** "Pratipada, Shukla" -> "प्रतिपदा, शुक्ल". Unknown words stay as they are. */
export function hiName(s: string): string {
  if (MAP[s]) return MAP[s];
  return s.split(", ").map((part) => MAP[part] ?? part.split(" ").map((w) => MAP[w] ?? w).join(" ")).join(", ");
}
export const hiMonthLong = ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
export const hiMonthShort = ["जन", "फ़र", "मार्च", "अप्रैल", "मई", "जून", "जुला", "अग", "सित", "अक्टू", "नव", "दिस"];

/** Interface labels. English is the fallback for anything not listed. */
export const UI: Record<string, { en: string; hi: string }> = {
  eyebrow: { en: "Free Panchang tool", hi: "मुफ़्त पंचांग टूल" },
  crumbHoroscope: { en: "Horoscope", hi: "राशिफल" },
  nowKicker: { en: "Aaj ka Choghadiya", hi: "आज का चौघड़िया" },
  left: { en: "left", hi: "शेष" },
  next: { en: "next", hi: "अगला" },
  paksha: { en: "Paksha", hi: "पक्ष" },
  till: { en: "till", hi: "तक" },
  untilSunrise: { en: "until the next sunrise", hi: "अगले सूर्योदय तक" },
  prev: { en: "Prev day", hi: "पिछला दिन" },
  today: { en: "Today", hi: "आज" },
  nextDay: { en: "Next day", hi: "अगला दिन" },
  Tithi: { en: "Tithi", hi: "तिथि" },
  Nakshatra: { en: "Nakshatra", hi: "नक्षत्र" },
  Yoga: { en: "Yoga", hi: "योग" },
  Karana: { en: "Karana", hi: "करण" },
  dayCh: { en: "Day Choghadiya", hi: "दिन का चौघड़िया" },
  nightCh: { en: "Night Choghadiya", hi: "रात का चौघड़िया" },
  sunrise: { en: "sunrise", hi: "सूर्योदय" },
  sunset: { en: "sunset", hi: "सूर्यास्त" },
  rahu: { en: "Rahu Kaal", hi: "राहु काल" },
  to: { en: "to", hi: "से" },
  auspicious: { en: "Auspicious", hi: "शुभ" },
  inauspicious: { en: "Inauspicious", hi: "अशुभ" },
  neutral: { en: "Neutral", hi: "सामान्य" },
  avoidRahu: { en: "Avoid for auspicious work", hi: "शुभ कार्य के लिए त्यागें" },
  samvat: { en: "Vikrama Samvata", hi: "विक्रम संवत" },
};
