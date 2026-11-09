// Static sign facts shown on the horoscope page (names, ruler, element, traits).
export interface SignInfo { en: string; hi: string; img: string; lord: string; lordHi: string; el: string; elHi: string; q: string; qHi: string; day: string; dayHi: string; str: string[]; strHi: string[]; ch: string[]; chHi: string[] }
export const SIGN_INFO: SignInfo[] = [
  {
    "en": "Aries",
    "hi": "मेष",
    "img": "/images/5a0f65dfaa71ef2c506dc1054947c5ff.png",
    "lord": "Mars",
    "lordHi": "मंगल",
    "el": "Fire",
    "elHi": "अग्नि",
    "q": "Movable",
    "qHi": "चर",
    "day": "Tuesday",
    "dayHi": "मंगलवार",
    "str": [
      "Brave",
      "Energetic",
      "A natural starter"
    ],
    "strHi": [
      "साहसी",
      "ऊर्जावान",
      "पहल करने वाले"
    ],
    "ch": [
      "Impatient",
      "Quick to anger"
    ],
    "chHi": [
      "अधीर",
      "जल्दी गुस्सा"
    ]
  },
  {
    "en": "Taurus",
    "hi": "वृषभ",
    "img": "/images/ac8af94238978a3e94d9c66080d26ddb.png",
    "lord": "Venus",
    "lordHi": "शुक्र",
    "el": "Earth",
    "elHi": "पृथ्वी",
    "q": "Fixed",
    "qHi": "स्थिर",
    "day": "Friday",
    "dayHi": "शुक्रवार",
    "str": [
      "Loyal",
      "Patient",
      "Loves comfort and beauty"
    ],
    "strHi": [
      "वफ़ादार",
      "धैर्यवान",
      "सुख और सुंदरता प्रिय"
    ],
    "ch": [
      "Stubborn",
      "Resists change"
    ],
    "chHi": [
      "ज़िद्दी",
      "बदलाव से बचते हैं"
    ]
  },
  {
    "en": "Gemini",
    "hi": "मिथुन",
    "img": "/images/c1ecdc04c510562fdc5aab383261862b.png",
    "lord": "Mercury",
    "lordHi": "बुध",
    "el": "Air",
    "elHi": "वायु",
    "q": "Dual",
    "qHi": "द्विस्वभाव",
    "day": "Wednesday",
    "dayHi": "बुधवार",
    "str": [
      "Curious",
      "Quick-witted",
      "A good talker"
    ],
    "strHi": [
      "जिज्ञासु",
      "हाज़िरजवाब",
      "अच्छे वक्ता"
    ],
    "ch": [
      "Restless",
      "Easily distracted"
    ],
    "chHi": [
      "बेचैन",
      "जल्दी ध्यान भटकता है"
    ]
  },
  {
    "en": "Cancer",
    "hi": "कर्क",
    "img": "/images/1bc09452b30f9800803f58118330e4f6.png",
    "lord": "Moon",
    "lordHi": "चंद्रमा",
    "el": "Water",
    "elHi": "जल",
    "q": "Movable",
    "qHi": "चर",
    "day": "Monday",
    "dayHi": "सोमवार",
    "str": [
      "Caring",
      "Intuitive",
      "Devoted to family"
    ],
    "strHi": [
      "देखभाल करने वाले",
      "अंतर्ज्ञानी",
      "परिवार के प्रति समर्पित"
    ],
    "ch": [
      "Moody",
      "Holds on to hurt"
    ],
    "chHi": [
      "मूडी",
      "दुख मन में रखते हैं"
    ]
  },
  {
    "en": "Leo",
    "hi": "सिंह",
    "img": "/images/d09914f3b4274dc9bfc8af1deb71a1f0.png",
    "lord": "Sun",
    "lordHi": "सूर्य",
    "el": "Fire",
    "elHi": "अग्नि",
    "q": "Fixed",
    "qHi": "स्थिर",
    "day": "Sunday",
    "dayHi": "रविवार",
    "str": [
      "Confident",
      "Generous",
      "A born leader"
    ],
    "strHi": [
      "आत्मविश्वासी",
      "उदार",
      "जन्मजात नेता"
    ],
    "ch": [
      "Proud",
      "Needs recognition"
    ],
    "chHi": [
      "अभिमानी",
      "सराहना चाहते हैं"
    ]
  },
  {
    "en": "Virgo",
    "hi": "कन्या",
    "img": "/images/9578bc47ab6e5fe1f6f50da2361155b1.png",
    "lord": "Mercury",
    "lordHi": "बुध",
    "el": "Earth",
    "elHi": "पृथ्वी",
    "q": "Dual",
    "qHi": "द्विस्वभाव",
    "day": "Wednesday",
    "dayHi": "बुधवार",
    "str": [
      "Practical",
      "Detail-minded",
      "Helpful"
    ],
    "strHi": [
      "व्यावहारिक",
      "बारीकी पर ध्यान",
      "मददगार"
    ],
    "ch": [
      "Overthinks",
      "Self-critical"
    ],
    "chHi": [
      "ज़्यादा सोचते हैं",
      "खुद से कठोर"
    ]
  },
  {
    "en": "Libra",
    "hi": "तुला",
    "img": "/images/7943e80f8844d74d2b2ae5af9b8f064b.png",
    "lord": "Venus",
    "lordHi": "शुक्र",
    "el": "Air",
    "elHi": "वायु",
    "q": "Movable",
    "qHi": "चर",
    "day": "Friday",
    "dayHi": "शुक्रवार",
    "str": [
      "Fair-minded",
      "Charming",
      "Seeks harmony"
    ],
    "strHi": [
      "न्यायप्रिय",
      "आकर्षक",
      "सामंजस्य चाहने वाले"
    ],
    "ch": [
      "Indecisive",
      "Avoids conflict"
    ],
    "chHi": [
      "निर्णय में देर",
      "टकराव से बचते हैं"
    ]
  },
  {
    "en": "Scorpio",
    "hi": "वृश्चिक",
    "img": "/images/1a65871926eb0ac98d213af25887658a.png",
    "lord": "Mars",
    "lordHi": "मंगल",
    "el": "Water",
    "elHi": "जल",
    "q": "Fixed",
    "qHi": "स्थिर",
    "day": "Tuesday",
    "dayHi": "मंगलवार",
    "str": [
      "Determined",
      "Deep",
      "Loyal"
    ],
    "strHi": [
      "दृढ़ निश्चयी",
      "गहरे",
      "वफ़ादार"
    ],
    "ch": [
      "Secretive",
      "Jealous at times"
    ],
    "chHi": [
      "रहस्यमयी",
      "कभी-कभी ईर्ष्यालु"
    ]
  },
  {
    "en": "Sagittarius",
    "hi": "धनु",
    "img": "/images/361b47e8acf0bbccc84b6d4f54a15fde.png",
    "lord": "Jupiter",
    "lordHi": "गुरु",
    "el": "Fire",
    "elHi": "अग्नि",
    "q": "Dual",
    "qHi": "द्विस्वभाव",
    "day": "Thursday",
    "dayHi": "गुरुवार",
    "str": [
      "Optimistic",
      "Wise",
      "Loves freedom"
    ],
    "strHi": [
      "आशावादी",
      "ज्ञानी",
      "स्वतंत्रता प्रिय"
    ],
    "ch": [
      "Blunt",
      "Over-promises"
    ],
    "chHi": [
      "मुंहफट",
      "ज़्यादा वादे"
    ]
  },
  {
    "en": "Capricorn",
    "hi": "मकर",
    "img": "/images/6cf3444efe7515212067918671d3c45e.png",
    "lord": "Saturn",
    "lordHi": "शनि",
    "el": "Earth",
    "elHi": "पृथ्वी",
    "q": "Movable",
    "qHi": "चर",
    "day": "Saturday",
    "dayHi": "शनिवार",
    "str": [
      "Disciplined",
      "Ambitious",
      "Responsible"
    ],
    "strHi": [
      "अनुशासित",
      "महत्वाकांक्षी",
      "ज़िम्मेदार"
    ],
    "ch": [
      "Rigid",
      "Works too hard"
    ],
    "chHi": [
      "कठोर",
      "ज़रूरत से ज़्यादा काम"
    ]
  },
  {
    "en": "Aquarius",
    "hi": "कुंभ",
    "img": "/images/ceaf4ebd9cd0c16b845146a5d128ca34.png",
    "lord": "Saturn",
    "lordHi": "शनि",
    "el": "Air",
    "elHi": "वायु",
    "q": "Fixed",
    "qHi": "स्थिर",
    "day": "Saturday",
    "dayHi": "शनिवार",
    "str": [
      "Original",
      "Humane",
      "Independent"
    ],
    "strHi": [
      "मौलिक",
      "मानवतावादी",
      "स्वतंत्र"
    ],
    "ch": [
      "Detached",
      "Stubborn in ideas"
    ],
    "chHi": [
      "भावनाओं से दूर",
      "विचारों में ज़िद्दी"
    ]
  },
  {
    "en": "Pisces",
    "hi": "मीन",
    "img": "/images/9e65e00dea31321e5cf5ec94179adfa0.png",
    "lord": "Jupiter",
    "lordHi": "गुरु",
    "el": "Water",
    "elHi": "जल",
    "q": "Dual",
    "qHi": "द्विस्वभाव",
    "day": "Thursday",
    "dayHi": "गुरुवार",
    "str": [
      "Compassionate",
      "Imaginative",
      "Spiritual"
    ],
    "strHi": [
      "करुणामय",
      "कल्पनाशील",
      "आध्यात्मिक"
    ],
    "ch": [
      "Escapist",
      "Too trusting"
    ],
    "chHi": [
      "वास्तविकता से भागना",
      "ज़्यादा भरोसा"
    ]
  }
];
