// Daily horoscope engine: Vedic Gochar (transit) reading counted from each Moon sign.
// Planet positions are real (sidereal Lahiri, via the Kundli engine) at sunrise in New Delhi.
// Output shape matches what the horoscope page renders.
import { NAK, NAK_LORD, computeChart, siderealSunMoon, sunRiseSet } from "@/lib/kundli/engine";
import { NAK_HI, WEEKDAY_LORD, WEEKDAYS, tithiAt, yogaAt } from "@/lib/kundli/panchang";
import { SIGN_INFO, type SignInfo } from "./signs";

const DELHI = { lat: 28.6139, lon: 77.209, tz: "Asia/Kolkata" };
const DAY_MS = 864e5;

/* ---------------------------------------------------------------- Static tables */

const PLANETS = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"] as const;
type Planet = (typeof PLANETS)[number];

const PLANET_HI: Record<Planet, string> = {
  Sun: "सूर्य", Moon: "चंद्रमा", Mars: "मंगल", Mercury: "बुध", Jupiter: "गुरु", Venus: "शुक्र", Saturn: "शनि", Rahu: "राहु", Ketu: "केतु",
};

/* Classical Gochar: houses from the Moon sign in which each planet gives good results. */
const GOOD_HOUSES: Record<Planet, number[]> = {
  Sun: [3, 6, 10, 11],
  Moon: [1, 3, 6, 7, 10, 11],
  Mars: [3, 6, 11],
  Mercury: [2, 4, 6, 8, 10, 11],
  Jupiter: [2, 5, 7, 9, 11],
  Venus: [1, 2, 3, 4, 5, 8, 9, 11, 12],
  Saturn: [3, 6, 11],
  Rahu: [3, 6, 11],
  Ketu: [3, 6, 11],
};

/* Day scores come from the Moon's house, the fastest and most telling transit of the day. */
const MOON_SCORES: Record<number, { love: number; career: number; money: number; health: number; overall: number }> = {
  1: { love: 80, career: 60, money: 85, health: 50, overall: 70 },
  2: { love: 60, career: 35, money: 40, health: 45, overall: 45 },
  3: { love: 60, career: 90, money: 85, health: 75, overall: 80 },
  4: { love: 55, career: 50, money: 45, health: 45, overall: 50 },
  5: { love: 60, career: 40, money: 60, health: 35, overall: 50 },
  6: { love: 75, career: 65, money: 60, health: 60, overall: 65 },
  7: { love: 90, career: 65, money: 90, health: 70, overall: 80 },
  8: { love: 50, career: 45, money: 40, health: 45, overall: 45 },
  9: { love: 55, career: 40, money: 50, health: 35, overall: 45 },
  10: { love: 85, career: 60, money: 85, health: 55, overall: 70 },
  11: { love: 60, career: 85, money: 60, health: 90, overall: 75 },
  12: { love: 35, career: 35, money: 35, health: 35, overall: 35 },
};

const ORD_EN = ["", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"];
const ORD_HI = ["", "पहले", "दूसरे", "तीसरे", "चौथे", "पांचवें", "छठे", "सातवें", "आठवें", "नौवें", "दसवें", "ग्यारहवें", "बारहवें"];

/* What the Moon brings in each house from your Moon sign. */
const MOON_HOUSE: Record<number, [string, string]> = {
  1: ["comfort, good food and a settled mind", "सुख, अच्छा भोजन और शांत मन"],
  2: ["spending and some loss of focus; guard money and words", "खर्च और ध्यान भटकना; धन और वाणी पर संयम रखें"],
  3: ["success through effort, courage and helpful siblings or friends", "मेहनत, साहस और भाई-बहनों या मित्रों के सहयोग से सफलता"],
  4: ["unease at home, low patience; travel and big decisions may feel heavy", "घर में बेचैनी और धैर्य की कमी; यात्रा और बड़े निर्णय भारी लग सकते हैं"],
  5: ["obstacles in plans, worry about children or studies; avoid speculation", "योजनाओं में रुकावट, संतान या पढ़ाई की चिंता; सट्टे से बचें"],
  6: ["good health and victory over rivals and pending problems", "अच्छा स्वास्थ्य और विरोधियों तथा अटके कामों पर जीत"],
  7: ["companionship, warmth in relationships and pleasant meetings", "साथ, रिश्तों में गर्मजोशी और सुखद मुलाकातें"],
  8: ["anxiety and unexpected hurdles; slow down and avoid risks", "चिंता और अचानक रुकावटें; धीमे चलें और जोखिम से बचें"],
  9: ["delays and low energy; keep to routine and faith", "देरी और कम ऊर्जा; दिनचर्या और आस्था बनाए रखें"],
  10: ["success at work, recognition and tasks completed", "काम में सफलता, पहचान और काम पूरे होना"],
  11: ["gains, good news and support from friends", "लाभ, शुभ समाचार और मित्रों का सहयोग"],
  12: ["expenses, tiredness and a need for rest", "खर्च, थकान और आराम की ज़रूरत"],
};

/* Planet that colours each life area, with its good / bad sentence. */
const SUPPORT: Record<"Jupiter" | "Venus" | "Sun" | "Mars", { en: string; hi: string }> = {
  Jupiter: { en: "growth and guidance", hi: "वृद्धि और मार्गदर्शन" },
  Venus: { en: "love and comforts", hi: "प्रेम और सुख-सुविधा" },
  Sun: { en: "authority and vitality", hi: "मान-सम्मान और ऊर्जा" },
  Mars: { en: "energy and courage", hi: "ऊर्जा और साहस" },
};

/* Lucky number, colour and mantra for each graha. */
const GRAHA: Record<Planet, { num: number; col: string; colHi: string; hex: string; mEn: string; mHi: string }> = {
  Sun: { num: 1, col: "Orange", colHi: "नारंगी", hex: "#F28C28", mEn: "Om Hraam Hreem Hraum Sah Suryaya Namah", mHi: "ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः" },
  Moon: { num: 2, col: "White", colHi: "सफ़ेद", hex: "#FFFFFF", mEn: "Om Shraam Shreem Shraum Sah Chandraya Namah", mHi: "ॐ श्रां श्रीं श्रौं सः चन्द्राय नमः" },
  Mars: { num: 9, col: "Red", colHi: "लाल", hex: "#C62828", mEn: "Om Kraam Kreem Kraum Sah Bhaumaya Namah", mHi: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः" },
  Mercury: { num: 5, col: "Green", colHi: "हरा", hex: "#2E9E5B", mEn: "Om Braam Breem Braum Sah Budhaya Namah", mHi: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः" },
  Jupiter: { num: 3, col: "Yellow", colHi: "पीला", hex: "#FCCE07", mEn: "Om Graam Greem Graum Sah Gurave Namah", mHi: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः" },
  Venus: { num: 6, col: "White", colHi: "सफ़ेद", hex: "#FFFFFF", mEn: "Om Draam Dreem Draum Sah Shukraya Namah", mHi: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः" },
  Saturn: { num: 8, col: "Blue", colHi: "नीला", hex: "#2F5DCC", mEn: "Om Praam Preem Praum Sah Shanaischaraya Namah", mHi: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः" },
  Rahu: { num: 4, col: "Grey", colHi: "धूसर", hex: "#6B7280", mEn: "Om Bhraam Bhreem Bhraum Sah Rahave Namah", mHi: "ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः" },
  Ketu: { num: 7, col: "Brown", colHi: "भूरा", hex: "#8D6E63", mEn: "Om Sraam Sreem Sraum Sah Ketave Namah", mHi: "ॐ स्रां स्रीं स्रौं सः केतवे नमः" },
};

/* Sign lord, by sign index (0 = Aries). Natural friendships, own signs and exaltation for the lucky-planet pick. */
const SIGN_LORD: Planet[] = ["Mars", "Venus", "Mercury", "Moon", "Sun", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Saturn", "Jupiter"];
const FRIENDS: Record<string, Planet[]> = {
  Sun: ["Moon", "Mars", "Jupiter"], Moon: ["Sun", "Mercury"], Mars: ["Sun", "Moon", "Jupiter"], Mercury: ["Sun", "Venus"],
  Jupiter: ["Sun", "Moon", "Mars"], Venus: ["Mercury", "Saturn"], Saturn: ["Mercury", "Venus"],
};
const OWN: Record<string, number[]> = { Sun: [4], Moon: [3], Mars: [0, 7], Mercury: [2, 5], Jupiter: [8, 11], Venus: [1, 6], Saturn: [9, 10] };
const EXALT: Record<string, number> = { Sun: 0, Moon: 1, Mars: 9, Mercury: 5, Jupiter: 3, Venus: 11, Saturn: 6 };

const WEEKDAY_HI = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];
const MONTHS_EN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const MONTHS_HI = ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
const TITHI_HI = ["प्रतिपदा", "द्वितीया", "तृतीया", "चतुर्थी", "पंचमी", "षष्ठी", "सप्तमी", "अष्टमी", "नवमी", "दशमी", "एकादशी", "द्वादशी", "त्रयोदशी", "चतुर्दशी", "पूर्णिमा", "अमावस्या"];
const YOGA_HI = ["विष्कम्भ", "प्रीति", "आयुष्मान", "सौभाग्य", "शोभन", "अतिगण्ड", "सुकर्मा", "धृति", "शूल", "गण्ड", "वृद्धि", "ध्रुव", "व्याघात", "हर्षण", "वज्र", "सिद्धि", "व्यतीपात", "वरीयान", "परिघ", "शिव", "सिद्ध", "साध्य", "शुभ", "शुक्ल", "ब्रह्म", "ऐन्द्र", "वैधृति"];

/* ---------------------------------------------------------------- Types */

export interface HoroscopeSign {
  scores: { love: number; career: number; money: number; health: number; overall: number };
  overall: number;
  band: 0 | 1 | 2;
  areas: { id: string; en: string; hi: string; score: number; textEn: string; textHi: string }[];
  whyEn: string[];
  whyHi: string[];
  planets: { en: string; hi: string; house: number; ordEn: string; ordHi: string; good: boolean; bad: boolean; retro: boolean }[];
  lucky: { g: string; gHi: string; num: number; col: string; colHi: string; hex: string; whyEn: string; whyHi: string; mEn: string; mHi: string };
  calm: { g: string; gHi: string; whyEn: string; whyHi: string; mEn: string; mHi: string } | null;
}
export interface HoroscopeDay { dateEn: string; dateHi: string; pancEn: string; pancHi: string; signs: HoroscopeSign[] }
export interface HoroscopeData { days: { today: HoroscopeDay; tomorrow: HoroscopeDay }; signs: SignInfo[] }

/* ---------------------------------------------------------------- Helpers */

/** Hindi nakshatra name, with the Purva / Uttara prefix spaced the way readers expect. */
const nakHi = (i: number) => NAK_HI[i].replace(/^(पूर्व|उत्तर)(?=\S)/, "$1 ");
const houseFrom = (from: number, to: number) => ((to - from + 12) % 12) + 1;

function istParts(ms: number) {
  const f = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", { timeZone: DELHI.tz, hour12: false, year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", weekday: "short" })
      .formatToParts(new Date(ms)).map((p) => [p.type, p.value]),
  );
  return { y: +f.year, m: +f.month, d: +f.day, h: +f.hour % 24, mi: +f.minute };
}

/** "6:27 am" */
function clockEn(ms: number): string {
  const { h, mi } = istParts(ms);
  return `${h % 12 || 12}:${String(mi).padStart(2, "0")} ${h < 12 ? "am" : "pm"}`;
}
/** "6:27" with a Hindi part of day for the Moon-change line. */
function clockHi(ms: number): { time: string; part: string } {
  const { h, mi } = istParts(ms);
  const part = h < 4 ? "रात" : h < 12 ? "सुबह" : h < 16 ? "दोपहर" : h < 20 ? "शाम" : "रात";
  return { time: `${h % 12 || 12}:${String(mi).padStart(2, "0")}`, part };
}

function listEn(items: string[]): string {
  return items.length < 2 ? items.join("") : items.slice(0, -1).join(", ") + " and " + items[items.length - 1];
}

function areaTier(score: number, hi: number, mid: number): 0 | 1 | 2 {
  return score >= hi ? 0 : score >= mid ? 1 : 2;
}

/* ---------------------------------------------------------------- One day */

function buildDay(istY: number, istM: number, istD: number): HoroscopeDay {
  const dayStart = new Date(Date.UTC(istY, istM - 1, istD) - 5.5 * 36e5); // IST midnight
  const rise = sunRiseSet(dayStart, DELHI.lat, DELHI.lon).rise ?? dayStart.getTime() + 6.5 * 36e5;
  const nextRise = sunRiseSet(new Date(dayStart.getTime() + DAY_MS), DELHI.lat, DELHI.lon).rise ?? rise + DAY_MS;
  const utc = new Date(rise);
  const chart = computeChart(utc, DELHI.lat, DELHI.lon, utc);

  const sign: Record<string, number> = {};
  const retro: Record<string, boolean> = {};
  for (const p of chart.planets) { sign[p.name] = p.sign; retro[p.name] = p.retro && p.name !== "Rahu" && p.name !== "Ketu"; }

  const weekday = new Date(Date.UTC(istY, istM - 1, istD)).getUTCDay();
  const dayLord = WEEKDAY_LORD[weekday] as Planet;
  const moonNak = chart.moon.nakIdx;
  const nakLord = NAK_LORD[moonNak % 9] as Planet;

  /* Moon's change of sign before the next sunrise, if any. */
  const moonSignAt = (ms: number) => Math.floor(siderealSunMoon(new Date(ms)).moon / 30);
  let moveMs: number | null = null;
  let moveSign = sign.Moon;
  if (moonSignAt(nextRise) !== sign.Moon) {
    let lo = rise, hi = nextRise;
    while (hi - lo > 30e3) { const mid = (lo + hi) / 2; if (moonSignAt(mid) === sign.Moon) lo = mid; else hi = mid; }
    moveMs = Math.round(hi / 6e4) * 6e4;
    moveSign = moonSignAt(nextRise);
  }

  /* Panchang line */
  const { sun, moon } = siderealSunMoon(utc);
  const tithi = tithiAt(sun, moon);
  const yoga = yogaAt(sun, moon);
  const tithiHiLabel = tithi.nameIdx >= 14 ? TITHI_HI[tithi.nameIdx] : (tithi.paksha === "Shukla" ? "शुक्ल " : "कृष्ण ") + TITHI_HI[tithi.nameIdx];
  const pancEn = `${tithi.label} · Moon in ${NAK[moonNak]} nakshatra · ${yoga.name} yoga · Sunrise ${clockEn(rise)}`;
  const pancHi = `${tithiHiLabel} · ${nakHi(moonNak)} नक्षत्र · ${YOGA_HI[yoga.index]} योग · सूर्योदय ${clockHi(rise).time} बजे`;

  const dateEn = `${WEEKDAYS[weekday]}, ${istD} ${MONTHS_EN[istM - 1]} ${istY}`;
  const dateHi = `${WEEKDAY_HI[weekday]}, ${istD} ${MONTHS_HI[istM - 1]} ${istY}`;

  const signs: HoroscopeSign[] = SIGN_INFO.map((info, rashi) => {
    const house = (pl: string) => houseFrom(rashi, sign[pl]);
    const good = (pl: Planet) => GOOD_HOUSES[pl].includes(house(pl));
    const moonHouse = house("Moon");
    const sc = MOON_SCORES[moonHouse];
    const band = (sc.overall >= 70 ? 0 : sc.overall >= 50 ? 1 : 2) as 0 | 1 | 2;

    /* ---- area texts: an opener by score, then the planet that colours the area ---- */
    const venus = good("Venus"), sunG = good("Sun"), satG = good("Saturn"), jup = good("Jupiter"), mars = good("Mars");
    const loveT = areaTier(sc.love, 75, 50);
    const careerT = areaTier(sc.career, 80, 50);
    const moneyT = areaTier(sc.money, 75, 50);
    const healthT = areaTier(sc.health, 70, 50);
    const areas = [
      {
        id: "love", en: "Love and family", hi: "प्रेम और परिवार", score: sc.love,
        textEn: [["A warm, easy day for love and family.", "A steady day for love, with small ups and downs.", "Go gently with loved ones today."][loveT],
          venus ? "Venus supports affection, so plan time together or reach out to someone you care about." : "Venus is not on your side today, so keep expectations light and avoid old arguments."].join(" "),
        textHi: [["प्रेम और परिवार के लिए सुखद दिन।", "प्रेम के लिए स्थिर दिन, छोटे-मोटे उतार-चढ़ाव के साथ।", "आज अपनों के साथ नरमी से पेश आएं।"][loveT],
          venus ? "शुक्र का साथ है, इसलिए साथ में समय बिताएं या किसी प्रिय से बात करें।" : "आज शुक्र का साथ नहीं है, इसलिए उम्मीदें हल्की रखें और पुरानी बहस से बचें।"].join(" "),
      },
      {
        id: "career", en: "Career", hi: "करियर", score: sc.career,
        textEn: [["A strong day for work, so push ahead with what matters.", "A workable day at work, where steady effort pays.", "Work may feel slow today, so focus on routine tasks."][careerT],
          sunG ? "The Sun gives you visibility, so speak up in meetings and with seniors." : "Keep a low profile with seniors and let your work speak for you.",
          satG ? "Saturn rewards steady, patient work." : "Saturn asks for patience, so avoid shortcuts."].join(" "),
        textHi: [["काम के लिए मज़बूत दिन, ज़रूरी कामों को आगे बढ़ाएं।", "काम के लिहाज़ से ठीक दिन, लगातार मेहनत का फल मिलेगा।", "आज काम धीमा लग सकता है, इसलिए रोज़मर्रा के कामों पर ध्यान दें।"][careerT],
          sunG ? "सूर्य आपको पहचान दिला रहा है, इसलिए बैठकों और वरिष्ठों के सामने अपनी बात रखें।" : "वरिष्ठों के साथ संयम रखें और अपने काम को बोलने दें।",
          satG ? "शनि लगातार और धैर्य से किए गए काम का फल देता है।" : "शनि धैर्य मांगता है, इसलिए शॉर्टकट से बचें।"].join(" "),
      },
      {
        id: "money", en: "Money", hi: "धन", score: sc.money,
        textEn: [["A good day for money matters.", "Money stays steady if you keep to your plan.", "Be careful with money today."][moneyT],
          jup ? "Jupiter supports growth, so it is a good day to plan savings or an investment." : "Jupiter is not supportive, so hold off on big purchases and lending."].join(" "),
        textHi: [["धन के मामलों के लिए अच्छा दिन।", "योजना के अनुसार चलें तो धन की स्थिति स्थिर रहेगी।", "आज धन के मामलों में सावधानी रखें।"][moneyT],
          jup ? "गुरु वृद्धि में सहायक है, इसलिए बचत या निवेश की योजना के लिए अच्छा दिन है।" : "गुरु का साथ नहीं है, इसलिए बड़ी खरीदारी और उधार देने से बचें।"].join(" "),
      },
      {
        id: "health", en: "Health", hi: "स्वास्थ्य", score: sc.health,
        textEn: [["Your energy is good today.", "Health is fair, so keep to your routine.", "Your energy may dip today, so rest well."][healthT],
          mars ? "Mars adds strength, so it is a good day for exercise." : "Mars can make you hasty, so slow down while driving and working."].join(" "),
        textHi: [["आज ऊर्जा अच्छी रहेगी।", "स्वास्थ्य ठीक रहेगा, अपनी दिनचर्या बनाए रखें।", "आज ऊर्जा कम हो सकती है, इसलिए अच्छा आराम करें।"][healthT],
          mars ? "मंगल शक्ति दे रहा है, इसलिए व्यायाम के लिए अच्छा दिन है।" : "मंगल जल्दबाज़ी करा सकता है, इसलिए गाड़ी चलाते और काम करते समय धीरे चलें।"].join(" "),
      },
    ];

    /* ---- "why today looks this way" ---- */
    const S = info.en, SH = info.hi;
    const whyEn: string[] = [], whyHi: string[] = [];
    let moonEn = `The Moon is in your ${ORD_EN[moonHouse]} house, which brings ${MOON_HOUSE[moonHouse][0]}.`;
    let moonHi = `चंद्रमा आपकी राशि से ${ORD_HI[moonHouse]} भाव में है, जिससे ${MOON_HOUSE[moonHouse][1]} का योग है।`;
    if (moveMs != null) {
      const nh = houseFrom(rashi, moveSign);
      const ch = clockHi(moveMs);
      moonEn += ` From ${clockEn(moveMs)} it moves to your ${ORD_EN[nh]} house: ${MOON_HOUSE[nh][0]}.`;
      moonHi += ` ${ch.part} ${ch.time} से यह ${ORD_HI[nh]} भाव में जाएगा: ${MOON_HOUSE[nh][1]}।`;
    }
    whyEn.push(moonEn); whyHi.push(moonHi);

    const satHouse = house("Saturn");
    const satNote: Record<number, [string, string]> = {
      12: [`Saturn is in the 12th house from ${S}: the first phase of Sade Sati. Be patient and keep spending under control.`, `शनि ${SH} से बारहवें भाव में है: साढ़ेसाती का पहला चरण। धैर्य रखें और खर्च पर नियंत्रण रखें।`],
      1: [`Saturn is over ${S}: the peak of Sade Sati. Steady effort works; shortcuts do not.`, `शनि ${SH} पर है: साढ़ेसाती का मध्य चरण। लगातार मेहनत करें, शॉर्टकट से बचें।`],
      2: [`Saturn is in the 2nd house from ${S}: the last phase of Sade Sati. Take care in family and money conversations.`, `शनि ${SH} से दूसरे भाव में है: साढ़ेसाती का अंतिम चरण। परिवार और धन की बातों में सावधानी रखें।`],
      4: [`Saturn is in the 4th house from ${S}: Kantaka Shani dhaiya. Home and peace of mind need care.`, `शनि ${SH} से चौथे भाव में है: कंटक शनि ढैय्या। घर और मन की शांति का ध्यान रखें।`],
      8: [`Saturn is in the 8th house from ${S}: Ashtama Shani dhaiya. Look after your health and go slow with sudden changes.`, `शनि ${SH} से आठवें भाव में है: अष्टम शनि ढैय्या। स्वास्थ्य का ध्यान रखें और अचानक बदलावों में धीरे चलें।`],
    };
    if (satNote[satHouse]) { whyEn.push(satNote[satHouse][0]); whyHi.push(satNote[satHouse][1]); }

    for (const pl of ["Jupiter", "Venus", "Sun", "Mars"] as const) {
      const g = good(pl), h = house(pl);
      whyEn.push(`${pl} is in your ${ORD_EN[h]} house, ${g ? "supportive" : "not supportive"} for ${SUPPORT[pl].en}.`);
      whyHi.push(`${PLANET_HI[pl]} आपकी राशि से ${ORD_HI[h]} भाव में है, जो ${SUPPORT[pl].hi} के लिए ${g ? "अनुकूल" : "प्रतिकूल"} है।`);
    }
    if (good("Rahu")) {
      whyEn.push(`Rahu is in your ${ORD_EN[house("Rahu")]} house, which helps ambition and bold moves.`);
      whyHi.push(`राहु आपकी राशि से ${ORD_HI[house("Rahu")]} भाव में है, जो महत्वाकांक्षा और साहसी कदमों में मदद करता है।`);
    }

    const planets = PLANETS.map((pl) => {
      const h = house(pl), g = good(pl);
      return { en: pl, hi: PLANET_HI[pl], house: h, ordEn: ORD_EN[h], ordHi: ORD_HI[h], good: g, bad: !g, retro: retro[pl] ?? false };
    });

    /* ---- lucky graha: the best-placed, best-dignified planet for this sign ---- */
    const lord = SIGN_LORD[rashi];
    const luckyPool = PLANETS.filter((p) => p !== "Rahu" && p !== "Ketu");
    let best: Planet = "Sun", bestScore = -99;
    for (const pl of luckyPool) {
      let s = 0;
      if (good(pl)) s += 3;
      if (pl === lord) { if (good(pl) || EXALT[pl] === sign[pl] || OWN[pl]?.includes(sign[pl])) s += 3.5; }
      else if (FRIENDS[lord]?.includes(pl)) s += 1;
      if (pl === dayLord) s += 1;
      if (pl === nakLord) s += 1;
      if (EXALT[pl] === sign[pl]) s += 1.8;
      else if (OWN[pl]?.includes(sign[pl])) s += 0.9;
      else if ((EXALT[pl] + 6) % 12 === sign[pl]) s -= 1.5;
      if (s > bestScore) { bestScore = s; best = pl; }
    }
    const gr = GRAHA[best];
    const partsEn: string[] = [], partsHi: string[] = [];
    if (good(best)) { partsEn.push(`well placed in your ${ORD_EN[house(best)]} house`); partsHi.push(`आपकी राशि से ${ORD_HI[house(best)]} भाव में शुभ`); }
    if (best === lord) { partsEn.push("your sign lord"); partsHi.push("आपका राशि स्वामी"); }
    else if (FRIENDS[lord]?.includes(best)) { partsEn.push(`a friend of your sign lord, ${lord}`); partsHi.push(`आपके राशि स्वामी ${PLANET_HI[lord]} का मित्र`); }
    if (best === dayLord) { partsEn.push(`lord of the day (${WEEKDAYS[weekday]})`); partsHi.push(`आज के दिन (${WEEKDAY_HI[weekday]}) का स्वामी`); }
    if (best === nakLord) { partsEn.push(`lord of today’s nakshatra, ${NAK[moonNak]}`); partsHi.push(`आज के नक्षत्र ${nakHi(moonNak)} का स्वामी`); }
    if (EXALT[best] === sign[best]) { partsEn.push("exalted today"); partsHi.push("आज उच्च का"); }
    else if (OWN[best]?.includes(sign[best])) { partsEn.push("in its own sign today"); partsHi.push("आज अपनी राशि में"); }
    const hiJoin = partsHi.length < 2 ? partsHi.join("") : partsHi.slice(0, -1).join(", ") + " और " + partsHi[partsHi.length - 1];

    /* ---- planet that most needs calming today ---- */
    type Cand = { pl: Planet; sev: number; en: string; hi: string };
    const cands: Cand[] = [];
    if (moonHouse === 8) cands.push({ pl: "Moon", sev: 6, en: `The Moon is in the 8th house from ${S} (Chandrashtama), a day that asks for calm.`, hi: `चंद्रमा ${SH} से आठवें भाव में है (चंद्राष्टम), इसलिए मन शांत रखें।` });
    if (satHouse === 1) cands.push({ pl: "Saturn", sev: 5, en: `Saturn is over ${S}.`, hi: `शनि ${SH} पर है।` });
    else if ([12, 2, 4, 8].includes(satHouse)) cands.push({ pl: "Saturn", sev: 5, en: `Saturn is in the ${ORD_EN[satHouse]} house from ${S}.`, hi: `शनि ${SH} से ${ORD_HI[satHouse]} भाव में है।` });
    else if (satHouse === 10) cands.push({ pl: "Saturn", sev: 2, en: `Saturn is in the 10th house from ${S}, a difficult position today.`, hi: `शनि ${SH} से दसवें भाव में है, जो आज कठिन स्थिति है।` });
    for (const pl of ["Rahu", "Ketu"] as const) {
      const h = house(pl);
      const sev = h === 8 ? 4 : h === 12 || h === 4 ? 3 : 0;
      if (sev) cands.push({ pl, sev, en: `${pl} is in the ${ORD_EN[h]} house from ${S}, a difficult position today.`, hi: `${PLANET_HI[pl]} ${SH} से ${ORD_HI[h]} भाव में है, जो आज कठिन स्थिति है।` });
    }
    cands.sort((a, b) => b.sev - a.sev);
    const c = cands[0];

    return {
      scores: sc, overall: sc.overall, band, areas, whyEn, whyHi, planets,
      lucky: {
        g: best, gHi: PLANET_HI[best], num: gr.num, col: gr.col, colHi: gr.colHi, hex: gr.hex,
        whyEn: listEn(partsEn), whyHi: hiJoin, mEn: gr.mEn, mHi: gr.mHi,
      },
      calm: c ? { g: c.pl, gHi: PLANET_HI[c.pl], whyEn: c.en, whyHi: c.hi, mEn: GRAHA[c.pl].mEn, mHi: GRAHA[c.pl].mHi } : null,
    };
  });

  return { dateEn, dateHi, pancEn, pancHi, signs };
}

/* ---------------------------------------------------------------- Public */

/** Horoscopes for the given instant's IST date and the next day. */
export function dailyHoroscopes(now: Date = new Date()): HoroscopeData {
  const t = istParts(now.getTime());
  const next = istParts(Date.UTC(t.y, t.m - 1, t.d) + DAY_MS - 5.5 * 36e5 + 12 * 36e5);
  return {
    days: { today: buildDay(t.y, t.m, t.d), tomorrow: buildDay(next.y, next.m, next.d) },
    signs: SIGN_INFO,
  };
}

