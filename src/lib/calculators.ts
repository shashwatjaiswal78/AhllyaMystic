// Content for the four free calculator pages: /kundli, /kp-kundli, /name-number and /mobile-number.
// Shared by the pages (titles, descriptions, structured data) and by the calculator page component.
export type CalcKind = "kundli" | "kp" | "name" | "mobile";

export interface CalcConfig {
  path: string;
  eyebrow: string;
  h1: string;
  sub: string;
  method: string;
  features: { t: string; d: string }[];
  steps: [string, string][];
  faqs: [string, string][];
  report: { href: string; label: string; blurb: string };
  title: string;
  description: string;
}

const STEPS = (what: string): [string, string][] => [
  ["Enter your details", what],
  ["We calculate it", "The calculation runs on our server the moment you press the button, using real planetary positions."],
  ["Read and keep your result", "Your result opens on its own page, and you can go back and change your details at any time."],
];

const NOT_STORED: [string, string] = ["Are my details stored?", "No. Your details are used for the calculation and then dropped. Nothing is saved on our server."];

export const CALCULATORS: Record<CalcKind, CalcConfig> = {
  kundli: {
    path: "/kundli",
    eyebrow: "Free Janam Kundali",
    h1: "Janam Kundali Calculator",
    sub: "Your Vedic birth chart in seconds: Lagna and Navamsa charts, graha positions, Vimshottari dasha and dosha screen.",
    method: "Sidereal Lahiri positions, whole sign houses, Vimshottari dasha.",
    features: [
      { t: "Lagna and Navamsa charts", d: "Your birth chart and the D9 chart, drawn in the North Indian style." },
      { t: "Graha positions", d: "Every planet with its sign, degree, nakshatra, pada and house, and whether it is retrograde, combust, exalted or debilitated." },
      { t: "Vimshottari dasha", d: "Your mahadasha and antardasha periods with their dates, so you can see which planetary period you are in." },
      { t: "Dosha screen", d: "Manglik, Kaal Sarp and Sade Sati, checked from your own chart." },
      { t: "Panchang at birth", d: "The tithi, nakshatra, yoga, karana, sunrise and sunset on the day you were born." },
      { t: "Avkahada details", d: "Varna, vashya, yoni, gana and nadi, the details used for Kundli matching." },
    ],
    steps: STEPS("Your name, gender, date, time and place of birth. Pick your place from the list."),
    faqs: [
      ["How exact does my birth time need to be?", "As exact as you can make it. The rising sign (Lagna) changes roughly every two hours, and your houses and dasha timing depend on it. If you only know the time approximately, treat the house-based results with care."],
      ["Which system does the calculator use?", "Sidereal positions with the Lahiri ayanamsa and whole sign houses, the standard approach in Vedic astrology."],
      ["Is the Kundli really free?", "Yes. The chart, dasha and dosha screen are free. If you would like your chart explained for your life, our Personalised Kundli Report covers love, career, money, health and education, with remedies."],
      NOT_STORED,
    ],
    report: { href: "/report/kundli", label: "Personalised Kundli Report", blurb: "Want your chart explained in plain words, with remedies? Our experts study it and write it up for you." },
    title: "Free Janam Kundli: Lagna Chart, Dasha, Doshas",
    description: "Free Janam Kundali calculator: Lagna and Navamsa charts, planets with nakshatra and pada, Vimshottari dasha and doshas. Lahiri ayanamsa, whole sign houses.",
  },
  kp: {
    path: "/kp-kundli",
    eyebrow: "Free KP Kundli",
    h1: "KP Kundli Calculator",
    sub: "Your KP birth chart in seconds: planets and cusps with sub lords, dasha, significators and ruling planets.",
    method: "Placidus house cusps, KP sub lords, Vimshottari dasha.",
    features: [
      { t: "Planets and house cusps", d: "Each planet and cusp with its sign, star, sub and sub-sub lords, the base of every KP judgement." },
      { t: "Vimshottari dasha", d: "Dasha periods down to five levels, so you can see the timing of events more closely." },
      { t: "Significators", d: "Which houses each planet signifies, worked out the KP way." },
      { t: "Nakshatra Nadi", d: "The star and sub connections between the planets in your chart." },
      { t: "Ruling planets", d: "The ruling planets for a moment you choose, used to confirm the timing of an event." },
      { t: "Detail on every cusp", d: "Open any cusp to see its lords and what it connects to." },
    ],
    steps: STEPS("Your name, gender, date and exact time of birth, and your place of birth. Pick your place from the list."),
    faqs: [
      ["What is KP astrology?", "Krishnamurti Paddhati is a system that judges events through star lords and sub lords. It is known for precise timing, which is why the birth time matters even more here than in a regular Kundli."],
      ["How is this different from the Janam Kundali?", "A Janam Kundali uses whole sign houses. A KP chart uses Placidus house cusps and adds the sub and sub-sub lords for every planet and cusp."],
      ["How exact does my birth time need to be?", "As exact as possible, ideally to the minute. The sub lord of a cusp can change within a few minutes of birth time."],
      NOT_STORED,
    ],
    report: { href: "/consultation", label: "Book a consultation", blurb: "Want precise timing for a decision? Talk to our experts, who study your KP chart before the call." },
    title: "Free KP Kundli: Cusps, Significators, Dasha",
    description: "Free KP Kundli calculator: planets and cusps with star, sub and sub-sub lords, Vimshottari dasha, significators, Nakshatra Nadi and ruling planets.",
  },
  name: {
    path: "/name-number",
    eyebrow: "Free Name Numerology",
    h1: "Is your name helping you?",
    sub: "Your birth date is fixed, your spelling is not. See whether the two agree, with the working shown.",
    method: "Chaldean name values, Vedic planetary friendship, Lo Shu grid.",
    features: [
      { t: "A name vibration score", d: "One clear score for how well your name agrees with your birth numbers." },
      { t: "Your core numbers", d: "Your birth and name numbers, with the planet that rules each one." },
      { t: "The Lo Shu grid", d: "Your birth date laid out on the Lo Shu grid, with the numbers you have and the ones you lack." },
      { t: "Letter-by-letter working", d: "See how every letter of your name is valued, so nothing is a black box." },
      { t: "Spelling options", d: "If your name does not support your numbers, we show whether a small spelling change could help." },
    ],
    steps: STEPS("Your full name as you write it, your gender and your date of birth."),
    faqs: [
      ["Which numerology system is this?", "It uses Chaldean name values, Vedic planetary friendship between your numbers, and the Lo Shu grid. The page shows its working so you can follow every step."],
      ["Does my name need changing?", "Not every name does. Check for free whether yours supports your birth number, and consider a spelling change only if it does not."],
      ["Why does it ask for my gender?", "Some numbers, such as the Kua number and its favourable directions, are worked out differently for men and women."],
      NOT_STORED,
    ],
    report: { href: "/report/name-numerology", label: "Name Numerology Report", blurb: "Want the full picture for yourself, a newborn or a business? Our report explains your name in detail and suggests corrections." },
    title: "Free Name Number Check: Is Your Name Lucky?",
    description: "Free name numerology check: a name vibration score, your core numbers, Lo Shu grid and spelling options, using Chaldean values and planetary friendship.",
  },
  mobile: {
    path: "/mobile-number",
    eyebrow: "Free Mobile Number Numerology",
    h1: "Is your mobile number lucky for you?",
    sub: "Add up your digits and check the total against your birth date and name, with the working shown.",
    method: "Digit total, Vedic planetary friendship, with your birth date and name.",
    features: [
      { t: "Your number's total", d: "The sum of your digits reduced to a single number, and the planet that rules it." },
      { t: "The combinations inside it", d: "How the digit pairs in your number add up, and what each combination means." },
      { t: "A match with you", d: "How your number agrees with your birth date and name, using Vedic planetary friendship." },
      { t: "A clear verdict", d: "Keep it or change it, in plain words, with the reasons." },
      { t: "Lucky combinations", d: "If your number does not suit you, our report suggests combinations to choose from." },
    ],
    steps: STEPS("Your full name, gender, date of birth and the mobile number you want to check."),
    faqs: [
      ["How is the number checked?", "Your digits are added up to a total, which is compared with your birth date and name through the friendship between the ruling planets. The page shows the working."],
      ["Should I change my number if it is not lucky?", "Only if you wish to. The verdict explains why a number does or does not support you, and our report suggests better combinations if you want to switch."],
      ["Can I check a number that is not mine?", "Yes, but the result depends on the person's birth date and name, so enter their details, not yours."],
      NOT_STORED,
    ],
    report: { href: "/report/mobile-number", label: "Mobile Number Report", blurb: "Want lucky combinations to choose from? Our report checks your number in detail and suggests better ones." },
    title: "Free Mobile Number Numerology: Is It Lucky?",
    description: "Free mobile number numerology check: your number's total, the combinations inside it, a match with your birth date and name, and a clear keep or change verdict.",
  },
};

export const CALC_KINDS = Object.keys(CALCULATORS) as CalcKind[];
