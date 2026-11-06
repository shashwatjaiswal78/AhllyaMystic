// Panchang and Avkahada values shown on the Kundli page. These are standard rule-based tables
// computed from the sidereal Sun and Moon at birth (the artifact itself does not include them).
import { INTERP } from "./data/interpretations";
import { NAK } from "./engine";

const norm = (d: number) => ((d % 360) + 360) % 360;

const TITHI = ["Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi"] as const;
const YOGA = ["Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda", "Sukarma", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyana", "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma", "Indra", "Vaidhriti"] as const;
const MOVABLE_KARANA = ["Bava", "Balava", "Kaulava", "Taitila", "Gara", "Vanija", "Vishti"] as const;
const FIXED_KARANA = ["Shakuni", "Chatushpada", "Naga"] as const;

export const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;
export const VARA = ["Ravivara", "Somavara", "Mangalavara", "Budhavara", "Guruvara", "Shukravara", "Shanivara"] as const;
export const WEEKDAY_LORD = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"] as const;

export interface Tithi { index: number; name: string; paksha: "Shukla" | "Krishna"; label: string; nameIdx: number }

/* Tithi: every 12° of Moon-minus-Sun elongation. 0-14 waxing (Shukla), 15-29 waning (Krishna). */
export function tithiAt(sun: number, moon: number): Tithi {
  const el = norm(moon - sun);
  const index = Math.floor(el / 12);
  const paksha = index < 15 ? "Shukla" : "Krishna";
  const n = index % 15;
  if (n === 14) {
    const name = paksha === "Shukla" ? "Purnima" : "Amavasya";
    return { index, name, paksha, label: name, nameIdx: 14 + (paksha === "Shukla" ? 0 : 1) };
  }
  return { index, name: TITHI[n], paksha, label: `${paksha} ${TITHI[n]}`, nameIdx: n };
}

/* Karana: every 6° of elongation. 1..56 repeat the seven movable karanas; 0 and 57..59 are the fixed ones. */
export function karanaAt(sun: number, moon: number): string {
  const k = Math.floor(norm(moon - sun) / 6);
  if (k === 0) return "Kimstughna";
  if (k >= 57) return FIXED_KARANA[k - 57];
  return MOVABLE_KARANA[(k - 1) % 7];
}

/* Yoga: every 13°20' of Sun plus Moon longitude. */
export function yogaAt(sun: number, moon: number): { index: number; name: string } {
  const index = Math.floor(norm(sun + moon) / (360 / 27));
  return { index, name: YOGA[index] };
}

/* ---- Avkahada ---- */
const VARNA = ["Kshatriya", "Vaishya", "Shudra", "Brahmin", "Kshatriya", "Vaishya", "Shudra", "Brahmin", "Kshatriya", "Vaishya", "Shudra", "Brahmin"];
export const varnaOf = (moonSign: number) => VARNA[moonSign];

/* Vashya by Moon sign; Sagittarius and Capricorn split at 15 degrees. */
export function vashyaOf(moonSign: number, degInSign: number): string {
  switch (moonSign) {
    case 0: case 1: return "Chatushpada";
    case 2: case 5: case 6: case 10: return "Manava";
    case 3: case 11: return "Jalachara";
    case 4: return "Vanachara";
    case 7: return "Keeta";
    case 8: return degInSign < 15 ? "Manava" : "Chatushpada";
    default: return degInSign < 15 ? "Chatushpada" : "Jalachara"; // Capricorn
  }
}

const YONI_NAME: Record<string, string> = {
  Horse: "Ashwa (horse)", Elephant: "Gaja (elephant)", Sheep: "Mesha (sheep)", Serpent: "Sarpa (serpent)", Dog: "Shwan (dog)",
  Cat: "Marjara (cat)", Rat: "Mushaka (rat)", Cow: "Go (cow)", Buffalo: "Mahisha (buffalo)", Tiger: "Vyaghra (tiger)",
  Deer: "Mriga (deer)", Monkey: "Vanara (monkey)", Mongoose: "Nakula (mongoose)", Lion: "Simha (lion)",
};
export const yoniOf = (nakIdx: number) => YONI_NAME[INTERP.nakshatra[nakIdx].yoni] ?? INTERP.nakshatra[nakIdx].yoni;
export const ganaOf = (nakIdx: number) => INTERP.nakshatra[nakIdx].gana as string;

const NADI_OF_GROUP = ["Adi", "Madhya", "Antya"];
/* Nadi cycles Adi, Madhya, Antya, Antya, Madhya, Adi through the nakshatras in groups of three. */
export function nadiOf(nakIdx: number): string {
  const r = nakIdx % 6;
  return NADI_OF_GROUP[r < 3 ? r : 5 - r];
}

/* ---- Devanagari names for the headline tiles ---- */
export const SIGN_HI = ["मेष", "वृषभ", "मिथुन", "कर्क", "सिंह", "कन्या", "तुला", "वृश्चिक", "धनु", "मकर", "कुंभ", "मीन"];
export const NAK_HI = ["अश्विनी", "भरणी", "कृत्तिका", "रोहिणी", "मृगशिरा", "आर्द्रा", "पुनर्वसु", "पुष्य", "आश्लेषा", "मघा", "पूर्वा फाल्गुनी", "उत्तरा फाल्गुनी", "हस्त", "चित्रा", "स्वाति", "विशाखा", "अनुराधा", "ज्येष्ठा", "मूल", "पूर्वाषाढ़ा", "उत्तराषाढ़ा", "श्रवण", "धनिष्ठा", "शतभिषा", "पूर्वभाद्रपद", "उत्तरभाद्रपद", "रेवती"];

if (NAK_HI.length !== NAK.length) throw new Error("NAK_HI must list all 27 nakshatras");
