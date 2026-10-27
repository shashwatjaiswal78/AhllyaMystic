export interface ReportChapter { num: number; title: string; text: string; }
export interface ReportFaq { q: string; a: string; }
export interface ReportOther { slug: string; name: string; text: string; mrp: string; price: string; }

export interface ReportConfig {
  slug: string;
  productId: string;
  name: string;
  hindi: string;
  tag?: string;
  lede: string;
  mrp: string;
  price: string;
  saving: string;
  pages: string;
  deliveryDays: string;
  chapters: ReportChapter[];
  faqs: ReportFaq[];
  others: ReportOther[];
  checkoutSlug: string;
}

const KUNDLI_CHAPTERS: ReportChapter[] = [
  { num: 1, title: 'Your birth chart', text: 'Lagna (D1) and Navamsa (D9) charts, moon sign, nakshatra, Mulank, Bhagyank and your full Vimshottari dasha periods.' },
  { num: 2, title: 'Personality and life path', text: 'Your nature, strengths, hidden talents, the patterns that hold you back and your spiritual path.' },
  { num: 3, title: 'Doshas and karmic blocks', text: 'Mangal, Kaal Sarp and Pitru dosha checked in your chart, and the karmic patterns behind recurring problems.' },
  { num: 4, title: 'Family and education', text: 'Family life, parents and siblings, how you learn and where your intelligence shines.' },
  { num: 5, title: 'Health and vitality', text: 'Your natural stamina, the areas of the body to look after and the habits that keep you well.' },
  { num: 6, title: 'Career and profession', text: 'Your current path, the top career fields that match your chart and the right time for a change.' },
  { num: 7, title: 'Wealth and finances', text: 'Your main sources of income, saving and spending patterns, and the phases that support growth.' },
  { num: 8, title: 'Marriage, spouse and children', text: 'Timing of marriage, the nature of your partner and what your chart shows about children.' },
  { num: 9, title: 'Your next 3 years', text: 'Your Mahadasha and Antardasha periods with year-by-year guidance, plus the current planetary transits.' },
  { num: 10, title: 'Your two questions', text: 'Two questions you choose, each answered on its own page with a clear answer, timing and what to do.' },
  { num: 11, title: 'Numerology and lucky factors', text: 'Your Mulank and Bhagyank, with your lucky numbers, days and colours.' },
  { num: 12, title: 'Remedies and guidance', text: "Lal Kitab remedies, mantras, fasting and daan, with planet-wise dos and don'ts that fit your routine." },
];

export const REPORTS: Record<string, ReportConfig> = {
  kundli: {
    slug: 'kundli', productId: 'report-kundli', checkoutSlug: 'kundli',
    name: 'Personalised Kundli Report', hindi: 'व्यक्तिगत कुंडली', tag: 'Most popular',
    lede: 'Clear, personal guidance on love, career, money, health and education from experts who study your chart, with your next 3 years, doshas, numerology and easy remedies.',
    mrp: '₹1,998', price: '₹999', saving: '₹999', pages: '32 pages', deliveryDays: '5 to 7',
    chapters: KUNDLI_CHAPTERS,
    faqs: [
      { q: 'What is a Janam Kundli?', a: 'It is your birth chart: the positions of the planets at the exact date, time and place you were born. Astrologers read it to understand your nature, the timing of events and the remedies that suit you.' },
      { q: 'What do I need to provide?', a: 'Your name, date, time and place of birth, plus your email and WhatsApp number so we can send the report.' },
      { q: 'What if I do not know my exact birth time?', a: 'We can still prepare the report from your date and place of birth. Predictions that depend on your lagna and houses will be less precise, and we will tell you which ones.' },
      { q: 'How is this different from the free Kundli?', a: 'The free Kundli shows your chart. This report explains it: what your placements mean for your life, when key periods arrive and what to do about them.' },
      { q: 'Can I ask questions after I receive it?', a: 'Yes. Send us one or two questions on WhatsApp about anything in your report and we will clarify.' },
      { q: 'Will my details stay private?', a: 'Yes. Your birth details are used only to prepare your report and are never shared.' },
    ],
    others: [
      { slug: 'varshphal', name: 'Varshphal 2027', text: "Your next 12 months, month by month: the year's main focus, key phases and simple remedies.", mrp: '₹1,478', price: '₹739' },
      { slug: 'lal-kitab', name: 'Lal Kitab Report', text: 'Lal Kitab predictions with simple remedies you can follow at home, no complex rituals.', mrp: '₹1,998', price: '₹999' },
      { slug: 'milan', name: 'Couple Kundli Milan', text: 'Gun Milan, Mangal Dosha check and an honest view of long-term compatibility before marriage.', mrp: '₹6,798', price: '₹3,399' },
    ],
  },
  varshphal: {
    slug: 'varshphal', productId: 'report-varshphal', checkoutSlug: 'varshphal',
    name: 'Varshphal 2027 Report', hindi: 'वर्षफल 2027', tag: 'New for 2027',
    lede: "A detailed month-by-month guide to your year 2027: the year's main theme, key periods for career, money, health and relationships, and practical remedies.",
    mrp: '₹1,478', price: '₹739', saving: '₹739', pages: '24 pages', deliveryDays: '5 to 7',
    chapters: [
      { num: 1, title: 'Year overview', text: 'The main theme of your year 2027, based on the annual chart cast at your solar return.' },
      { num: 2, title: 'Career and income', text: 'The key phases for growth, change and challenges in career and finances.' },
      { num: 3, title: 'Health and vitality', text: 'The months to take extra care and habits that will support you through the year.' },
      { num: 4, title: 'Relationships and family', text: 'Highs and lows in personal relationships and family life.' },
      { num: 5, title: 'Month-by-month guide', text: 'Each month of 2027 covered with the key focus, favourable periods and what to watch.' },
      { num: 6, title: 'Remedies', text: 'Simple Lal Kitab and planetary remedies tailored to your annual chart.' },
    ],
    faqs: [
      { q: 'What is Varshphal?', a: 'Varshphal is the annual horoscope calculated at the exact time the Sun returns to the position it occupied at your birth, every year. It gives a year-by-year view of your life.' },
      { q: 'What do I need to provide?', a: 'Your name, date, time and place of birth, plus your email and WhatsApp number.' },
      { q: 'When is this most useful?', a: 'Around your birthday each year, or at any time when you want to understand the year ahead before planning big decisions.' },
      { q: 'Does this include the full Kundli analysis?', a: 'No. Varshphal focuses on the coming year. For a full life reading, order the Personalised Kundli Report.' },
    ],
    others: [
      { slug: 'kundli', name: 'Personalised Kundli Report', text: 'Full life reading: career, love, health, doshas, remedies and your next 3 years.', mrp: '₹1,998', price: '₹999' },
      { slug: 'lal-kitab', name: 'Lal Kitab Report', text: 'Lal Kitab predictions with simple remedies you can follow at home, no complex rituals.', mrp: '₹1,998', price: '₹999' },
      { slug: 'milan', name: 'Couple Kundli Milan', text: 'Gun Milan, Mangal Dosha check and an honest view of long-term compatibility.', mrp: '₹6,798', price: '₹3,399' },
    ],
  },
  'lal-kitab': {
    slug: 'lal-kitab', productId: 'report-lal-kitab', checkoutSlug: 'lal-kitab',
    name: 'Lal Kitab Report', hindi: 'लाल किताब रिपोर्ट',
    lede: 'Lal Kitab is an ancient system of astrology known for its simple, powerful remedies. This report shows your placements, the karmic patterns they reveal and practical remedies that fit your everyday life.',
    mrp: '₹1,998', price: '₹999', saving: '₹999', pages: '28 pages', deliveryDays: '5 to 7',
    chapters: [
      { num: 1, title: 'Your Lal Kitab chart', text: 'The planetary positions in your chart read through the Lal Kitab system.' },
      { num: 2, title: 'Karmic debts and patterns', text: 'The debts and patterns from past karma that affect your current life, house by house.' },
      { num: 3, title: 'Career and finances', text: 'Planetary influence on your work, income and financial growth, with timing.' },
      { num: 4, title: 'Relationships and marriage', text: 'Marriage timing, the nature of your partner and family harmony.' },
      { num: 5, title: 'Health', text: 'Planets affecting your health and the habits that support well-being.' },
      { num: 6, title: 'Lal Kitab remedies', text: 'Simple, inexpensive remedies based on your chart — no complex rituals, no costly items.' },
    ],
    faqs: [
      { q: 'What is Lal Kitab?', a: 'Lal Kitab is a set of five astrological books written in Urdu in the 19th century. It is known for its easy-to-follow remedies based on planetary positions.' },
      { q: 'How is it different from a regular Kundli report?', a: 'A Kundli report uses the Vedic system with full divisional charts. The Lal Kitab report focuses specifically on the Lal Kitab system and its remedies.' },
      { q: 'What do I need to provide?', a: 'Your name, date, time and place of birth, plus your email and WhatsApp number.' },
      { q: 'Are the remedies difficult to follow?', a: 'No. Lal Kitab remedies are known for being simple and low-cost — feeding birds, wearing a specific colour, keeping a small item at home.' },
    ],
    others: [
      { slug: 'kundli', name: 'Personalised Kundli Report', text: 'Full life reading: career, love, health, doshas, remedies and your next 3 years.', mrp: '₹1,998', price: '₹999' },
      { slug: 'varshphal', name: 'Varshphal 2027', text: 'Your year ahead, month by month.', mrp: '₹1,478', price: '₹739' },
      { slug: 'milan', name: 'Couple Kundli Milan', text: 'Gun Milan, Mangal Dosha check and long-term compatibility.', mrp: '₹6,798', price: '₹3,399' },
    ],
  },
  milan: {
    slug: 'milan', productId: 'report-milan', checkoutSlug: 'milan',
    name: 'Couple Kundli Milan', hindi: 'कुंडली मिलान',
    lede: 'A thorough compatibility reading for two people before marriage: Gun Milan, Mangal Dosha check, Nadi Dosha, Gana compatibility and an honest view of your long-term life together.',
    mrp: '₹6,798', price: '₹3,399', saving: '₹3,399', pages: '40 pages', deliveryDays: '5 to 7',
    chapters: [
      { num: 1, title: 'Both birth charts', text: 'Lagna (D1) and Navamsa (D9) charts for both partners, with moon signs and nakshatras.' },
      { num: 2, title: 'Gun Milan (Ashtkoot)', text: 'All 8 gunas scored and explained: Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot and Nadi.' },
      { num: 3, title: 'Mangal Dosha check', text: 'Whether Mangal Dosha is present in either chart, its intensity and whether it cancels.' },
      { num: 4, title: 'Nadi and Gana compatibility', text: 'A detailed look at two of the most important gunas for long-term health and harmony.' },
      { num: 5, title: 'Relationship and family life', text: 'How the charts interact for love, communication, children and family.' },
      { num: 6, title: 'Timing of marriage', text: 'Favourable periods for marriage based on both Dashas and planetary transits.' },
      { num: 7, title: 'Remedies', text: 'Specific remedies if needed to strengthen compatibility or neutralise Doshas.' },
    ],
    faqs: [
      { q: 'What is Kundli Milan?', a: 'It is the traditional process of matching two birth charts before marriage. It checks compatibility across 8 factors (Ashtkoot Gun Milan) and looks for Doshas that may affect the relationship.' },
      { q: 'What do I need to provide?', a: 'The full name, date, time and place of birth for both partners.' },
      { q: 'What if one person does not know their birth time?', a: 'We can still prepare a partial report using the available details. We will explain which assessments are less precise.' },
      { q: 'How is this different from an online matching tool?', a: 'Online tools give a score. This report is prepared by an expert who reads both charts together and gives an honest view — including when a low score should not prevent marriage, or when a high score does not tell the full story.' },
    ],
    others: [
      { slug: 'kundli', name: 'Personalised Kundli Report', text: 'Full life reading for one person.', mrp: '₹1,998', price: '₹999' },
      { slug: 'lal-kitab', name: 'Lal Kitab Report', text: 'Lal Kitab predictions with simple remedies.', mrp: '₹1,998', price: '₹999' },
      { slug: 'varshphal', name: 'Varshphal 2027', text: 'Your year ahead, month by month.', mrp: '₹1,478', price: '₹739' },
    ],
  },
  'name-numerology': {
    slug: 'name-numerology', productId: 'report-name', checkoutSlug: 'numerology',
    name: 'Name Numerology Report', hindi: 'नाम अंक शास्त्र',
    lede: 'A personal numerology reading based on your full name and date of birth, with your Mulank, Bhagyank, name vibration and a corrected name spelling if needed.',
    mrp: '₹798', price: '₹399', saving: '₹399', pages: '16 pages', deliveryDays: '5 to 7',
    chapters: [
      { num: 1, title: 'Your numbers', text: "Mulank (birth number), Bhagyank (destiny number) and your name's Namank — how they work together." },
      { num: 2, title: 'Personality and strengths', text: 'What your numbers reveal about your nature, talents and how others see you.' },
      { num: 3, title: 'Career and finances', text: 'Fields and directions that align with your numerological profile.' },
      { num: 4, title: 'Name vibration analysis', text: 'Whether the vibration of your current name supports or opposes your birth numbers.' },
      { num: 5, title: 'Name correction', text: 'A corrected spelling, if your current name is creating friction, with one free revision.' },
      { num: 6, title: 'Lucky factors', text: 'Your lucky numbers, days, colours and business names.' },
    ],
    faqs: [
      { q: 'What is a name numerology report?', a: 'It analyses the vibrational energy of your name and how it aligns with your birth date numbers. A misaligned name can create friction in career, relationships and health.' },
      { q: 'Do I need to change my name?', a: 'Not always. Many people have harmonious names. The report tells you whether a change would help, and if so, what to adjust.' },
      { q: 'How is the corrected name different from my current name?', a: 'Usually a small spelling change — one or two letters — to bring the vibration into alignment. The report explains the change clearly.' },
      { q: 'Is one revision included?', a: 'Yes. If you are not comfortable with the first suggestion, tell us within 7 days and we will work on it once more.' },
    ],
    others: [
      { slug: 'mobile-number', name: 'Mobile Number Report', text: 'Is your mobile number helping or hurting? A simple numerology check.', mrp: '₹498', price: '₹249' },
      { slug: 'kundli', name: 'Personalised Kundli Report', text: 'Full life reading: career, love, health, doshas, remedies and your next 3 years.', mrp: '₹1,998', price: '₹999' },
      { slug: 'varshphal', name: 'Varshphal 2027', text: 'Your year ahead, month by month.', mrp: '₹1,478', price: '₹739' },
    ],
  },
  'mobile-number': {
    slug: 'mobile-number', productId: 'report-mobile', checkoutSlug: 'numerology',
    name: 'Mobile Number Report', hindi: 'मोबाइल नंबर रिपोर्ट',
    lede: 'Your mobile number carries a vibration that affects your daily life — career calls, business deals, relationships and energy. This report checks whether your number supports your birth numbers.',
    mrp: '₹498', price: '₹249', saving: '₹249', pages: '10 pages', deliveryDays: '3 to 5',
    chapters: [
      { num: 1, title: "Your mobile number's total", text: 'The numerological reduction of your number and the planet it is governed by.' },
      { num: 2, title: 'Compatibility with your birth numbers', text: 'Whether the number supports your Mulank and Bhagyank, or creates friction.' },
      { num: 3, title: 'Effect on career and finances', text: 'How the number affects income calls, business opportunities and financial luck.' },
      { num: 4, title: 'Effect on relationships', text: "The number's influence on personal and social interactions." },
      { num: 5, title: 'Recommendation', text: 'Whether to keep the number, make a small change to one digit, or choose a better number.' },
    ],
    faqs: [
      { q: 'Can a mobile number really affect my life?', a: 'In numerology, yes. Your mobile number is the vibration people call you on daily. A number that conflicts with your birth numbers can create subconscious friction in every interaction.' },
      { q: 'What do I need to provide?', a: 'Your full mobile number and your date of birth.' },
      { q: 'What if I cannot change my number?', a: 'We will tell you that too. The report gives an honest assessment — if your current number is fine, we say so.' },
      { q: 'How is this different from checking my number online?', a: 'Online tools give a single score. This report checks your specific birth numbers against the number and gives personal guidance.' },
    ],
    others: [
      { slug: 'name-numerology', name: 'Name Numerology Report', text: 'Your name vibration and a corrected spelling if needed.', mrp: '₹798', price: '₹399' },
      { slug: 'kundli', name: 'Personalised Kundli Report', text: 'Full life reading: career, love, health, doshas, remedies and your next 3 years.', mrp: '₹1,998', price: '₹999' },
      { slug: 'varshphal', name: 'Varshphal 2027', text: 'Your year ahead, month by month.', mrp: '₹1,478', price: '₹739' },
    ],
  },
};
