// Interpretation library from the Ahllya Mystic Numerology artifact (copy is the artifact's own). Edit freely.
export interface Planet { planet: string; sanskrit: string; day: string; colors: string[]; gemstone: string; metal: string; element: string; direction: string }
export interface Content {
  PLANETS: Record<number, Planet>; ARCHETYPE: Record<number, string>; MOOLANK: Record<number, string>; BHAGYANK: Record<number, string>;
  NAME_NUMBER: Record<number, string>; SOUL_URGE: Record<number, string>; PERSONALITY: Record<number, string>;
  STRENGTHS: Record<number, string[]>; CHALLENGES: Record<number, string[]>; CAREERS: Record<number, string>; REMEDIES: Record<number, string[]>;
  MISSING_NUMBER: Record<number, string>; REPEATED_NUMBER: Record<number, string>;
  PLANES: Record<string, { label: string; on: string; off: string | null }>; PERSONAL_YEAR: Record<number, string>;
  BAND_COPY: Record<string, { headline: string; sub: string }>;
}
export const CONTENT = {
 "PLANETS": {
  "1": {
   "planet": "Sun",
   "sanskrit": "Surya",
   "day": "Sunday",
   "colors": [
    "Golden yellow",
    "Orange"
   ],
   "gemstone": "Ruby",
   "metal": "Gold",
   "element": "Fire",
   "direction": "East"
  },
  "2": {
   "planet": "Moon",
   "sanskrit": "Chandra",
   "day": "Monday",
   "colors": [
    "White",
    "Pearl grey"
   ],
   "gemstone": "Natural pearl",
   "metal": "Silver",
   "element": "Water",
   "direction": "North-west"
  },
  "3": {
   "planet": "Jupiter",
   "sanskrit": "Guru",
   "day": "Thursday",
   "colors": [
    "Yellow",
    "Saffron"
   ],
   "gemstone": "Yellow sapphire",
   "metal": "Gold",
   "element": "Ether",
   "direction": "North-east"
  },
  "4": {
   "planet": "Rahu",
   "sanskrit": "Rahu",
   "day": "Saturday",
   "colors": [
    "Electric blue",
    "Grey"
   ],
   "gemstone": "Hessonite",
   "metal": "Iron",
   "element": "Air",
   "direction": "South-west"
  },
  "5": {
   "planet": "Mercury",
   "sanskrit": "Budh",
   "day": "Wednesday",
   "colors": [
    "Green",
    "Turquoise"
   ],
   "gemstone": "Emerald",
   "metal": "Brass",
   "element": "Earth",
   "direction": "North"
  },
  "6": {
   "planet": "Venus",
   "sanskrit": "Shukra",
   "day": "Friday",
   "colors": [
    "Pink",
    "Ivory"
   ],
   "gemstone": "Diamond",
   "metal": "Silver",
   "element": "Water",
   "direction": "South-east"
  },
  "7": {
   "planet": "Ketu",
   "sanskrit": "Ketu",
   "day": "Tuesday",
   "colors": [
    "Smoke grey",
    "Sea blue"
   ],
   "gemstone": "Cat's eye",
   "metal": "Mixed",
   "element": "Ether",
   "direction": "South"
  },
  "8": {
   "planet": "Saturn",
   "sanskrit": "Shani",
   "day": "Saturday",
   "colors": [
    "Deep blue",
    "Black"
   ],
   "gemstone": "Blue sapphire",
   "metal": "Iron",
   "element": "Air",
   "direction": "West"
  },
  "9": {
   "planet": "Mars",
   "sanskrit": "Mangal",
   "day": "Tuesday",
   "colors": [
    "Red",
    "Coral"
   ],
   "gemstone": "Red coral",
   "metal": "Copper",
   "element": "Fire",
   "direction": "South"
  }
 },
 "ARCHETYPE": {
  "1": "The Initiator",
  "2": "The Harmoniser",
  "3": "The Teacher",
  "4": "The Disruptor",
  "5": "The Negotiator",
  "6": "The Provider",
  "7": "The Enquirer",
  "8": "The Endurer",
  "9": "The Contender",
  "11": "The Illuminator",
  "22": "The Architect",
  "33": "The Elder"
 },
 "MOOLANK": {
  "1": "You move first and explain later. Being told what to do costs you more energy than the work itself.",
  "2": "You read a room before you speak. Decisions settle in you slowly, and rushing them rarely ends well.",
  "3": "You think out loud and learn by teaching. Ideas arrive faster than you can finish the last one.",
  "4": "You see what everyone else has skipped. That instinct makes you valuable and, in the wrong room, unpopular.",
  "5": "You need movement, variety and a way out. Routine does not calm you down, it wears you thin.",
  "6": "You carry people. Comfort, beauty and looking after your own come before your own rest.",
  "7": "You question before you accept. Solitude is not a mood for you, it is how you recharge.",
  "8": "You build slowly and hold on. Recognition arrives late and then it stays.",
  "9": "You run hot. You will fight for a cause long after the people who started it have gone home."
 },
 "BHAGYANK": {
  "1": "Life keeps putting you in front, whether or not you asked. Independence is the lesson, not the reward.",
  "2": "Your path runs through other people. Partnerships, alliances and timing shape more of your story than effort does.",
  "3": "You are meant to be heard. Teaching, writing, advising and guiding keep reappearing until you take them seriously.",
  "4": "Your road is unconventional and rarely smooth. Stability comes from systems you build yourself, not from institutions.",
  "5": "Change is the constant. Money, travel, communication and quick turns of fortune define the arc.",
  "6": "Home, responsibility and the wellbeing of others are the recurring theme. You are the one people rely on.",
  "7": "You are pushed toward depth. Research, faith, healing or study will take you further than commerce will.",
  "8": "Your life asks for patience. Everything you gain is earned twice, and what you keep, you keep permanently.",
  "9": "You are given causes bigger than yourself. Service, courage and public contribution are the through-line.",
  "11": "You are here to see what others miss and say it out loud. The pressure is real and so is the reach.",
  "22": "You are meant to build something that outlasts you. The scale is large and the timeline is long.",
  "33": "Your path is service through teaching and care, without needing the credit for it."
 },
 "NAME_NUMBER": {
  "1": "Your name carries authority. People assume you are in charge before you have proved it.",
  "2": "Your name reads as approachable and safe. It opens doors socially and slows them down commercially.",
  "3": "Your name sounds credible and quotable. Strong for anyone who teaches, sells or performs.",
  "4": "Your name carries friction. It makes progress feel heavier than your effort deserves.",
  "5": "Your name is fast and adaptable. It works everywhere and belongs to no one category.",
  "6": "Your name attracts comfort, trust and beauty. Strong for anything client-facing.",
  "7": "Your name reads as deep and slightly distant. Excellent for advisory work, difficult for volume sales.",
  "8": "Your name carries weight and delay. Everything it touches takes longer and costs more before it pays.",
  "9": "Your name commands respect and provokes reaction. Rarely ignored, occasionally resented."
 },
 "SOUL_URGE": {
  "1": "To be the one who decides.",
  "2": "To be genuinely understood by a few people.",
  "3": "To be listened to.",
  "4": "To do it differently and be proved right.",
  "5": "To be free to change your mind.",
  "6": "To be needed by the people you love.",
  "7": "To understand how it really works.",
  "8": "To build something that cannot be taken away.",
  "9": "To matter to more than your own circle."
 },
 "PERSONALITY": {
  "1": "Direct, self-contained, slightly intimidating.",
  "2": "Warm, unhurried, easy to confide in.",
  "3": "Bright, articulate, quick to fill a silence.",
  "4": "Unusual, hard to place, quietly contrary.",
  "5": "Restless, quick, informal with everyone.",
  "6": "Gracious, well turned out, naturally hospitable.",
  "7": "Reserved, observant, hard to read.",
  "8": "Serious, composed, older than your years.",
  "9": "Intense, forthright, impossible to ignore."
 },
 "STRENGTHS": {
  "1": [
   "Decides fast and owns the outcome",
   "Starts things other people only discuss",
   "Reads as senior in any room"
  ],
  "2": [
   "Reads people accurately",
   "Holds partnerships together under strain",
   "Negotiates without creating enemies"
  ],
  "3": [
   "Explains complicated things simply",
   "Attracts opportunity through visibility",
   "Recovers optimism quickly"
  ],
  "4": [
   "Spots the flaw everyone walked past",
   "Comfortable outside the accepted method",
   "Works through conditions others quit in"
  ],
  "5": [
   "Adapts before the situation forces it",
   "Sells, persuades and connects naturally",
   "Turns information into money"
  ],
  "6": [
   "Builds loyalty that lasts decades",
   "Strong instinct for taste and presentation",
   "Reliable when other people fall apart"
  ],
  "7": [
   "Sees the pattern under the noise",
   "Independent of other people’s approval",
   "Trusted for judgement, not charm"
  ],
  "8": [
   "Endures long timelines without losing focus",
   "Handles responsibility others avoid",
   "Accumulates rather than spends"
  ],
  "9": [
   "Acts on conviction, not consensus",
   "Protects the people under them",
   "Commands respect quickly"
  ]
 },
 "CHALLENGES": {
  "1": [
   "Struggles to delegate or be led",
   "Reads as arrogant when under pressure",
   "Isolation disguised as independence"
  ],
  "2": [
   "Over-considers and misses the window",
   "Absorbs other people’s moods as your own",
   "Undersells your contribution"
  ],
  "3": [
   "Starts more than you finish",
   "Scatters energy across too many fronts",
   "Says the thing that costs you the room"
  ],
  "4": [
   "Progress arrives late and out of sequence",
   "Friction with authority and process",
   "Sudden reversals just before the win"
  ],
  "5": [
   "Commitment feels like confinement",
   "Money moves through you rather than to you",
   "Boredom mistaken for a signal to leave"
  ],
  "6": [
   "Carries loads that were never yours",
   "Comfort spending outruns income",
   "Resentment builds quietly and late"
  ],
  "7": [
   "Withdraws instead of resolving",
   "Overthinks a decision into the ground",
   "Undervalues the commercial side of your work"
  ],
  "8": [
   "Delays that test faith more than skill",
   "Difficulty asking for help",
   "Success arrives after the cost is paid"
  ],
  "9": [
   "Temper is expensive when it lands",
   "Fights battles that were not yours",
   "Impatience with slower people"
  ]
 },
 "CAREERS": {
  "1": "Founder, department head, independent practice, anything you sign your own name to.",
  "2": "Partnerships, HR, mediation, counselling, design, hospitality.",
  "3": "Teaching, consulting, law, content, training, advisory work.",
  "4": "Technology, research, engineering, reform work, anything unconventional.",
  "5": "Sales, trading, media, travel, marketing, brokerage.",
  "6": "Beauty, food, interiors, healthcare, luxury retail, family business.",
  "7": "Research, spirituality, analytics, medicine, writing, investigation.",
  "8": "Real estate, law, mining, heavy industry, long-horizon investment.",
  "9": "Defence, surgery, sport, activism, property, anything with real stakes."
 },
 "REMEDIES": {
  "1": [
   "Offer water to the rising sun on Sunday mornings",
   "Keep Sunday light, avoid salt after sunset",
   "Chant Om Suryaya Namah, 108 counts"
  ],
  "2": [
   "Offer white flowers or milk at a Shiva temple on Monday",
   "Keep a silver item on you",
   "Chant Om Chandraya Namah, 108 counts"
  ],
  "3": [
   "Donate yellow items or chana dal on Thursday",
   "Respect and serve your teachers",
   "Chant Om Brihaspataye Namah, 108 counts"
  ],
  "4": [
   "Donate a dark blue or grey cloth on Saturday",
   "Feed birds each morning",
   "Chant the Rahu beej mantra on Saturday"
  ],
  "5": [
   "Worship Ganesha on Wednesday",
   "Donate green moong to students",
   "Chant Om Budhaya Namah, 108 counts"
  ],
  "6": [
   "Offer white sweets to young girls on Friday",
   "Keep your home and dressing table in order",
   "Chant Om Shukraya Namah, 108 counts"
  ],
  "7": [
   "Donate black sesame on Saturday",
   "Keep a flag or dhwaja offering at a Ganesha temple",
   "Chant Om Ketave Namah, 108 counts"
  ],
  "8": [
   "Read the Hanuman Chalisa daily",
   "Donate mustard oil on Saturday evening",
   "Serve the elderly and labourers"
  ],
  "9": [
   "Read the Hanuman Chalisa on Tuesday",
   "Donate red masoor dal",
   "Chant Om Mangalaya Namah, 108 counts"
  ]
 },
 "MISSING_NUMBER": {
  "1": "Confidence has to be built rather than assumed. You defer to others longer than you should.",
  "2": "Emotional footing wobbles under stress. Intuition is there but you argue yourself out of it.",
  "3": "Self-expression takes effort. You know more than you let people see.",
  "4": "Practical order does not come naturally. Systems and discipline have to be imposed from outside.",
  "5": "The centre of the grid is empty. Direction and balance are the lifelong work, and change lands harder on you.",
  "6": "Domestic and family stability needs conscious attention. Do not assume it will hold itself together.",
  "7": "Faith gets tested through experience rather than given. Lessons come the expensive way.",
  "8": "Money management is learned, not instinctive. Structure your finances deliberately.",
  "9": "Ambition needs a target. Without one, energy leaks into other people’s priorities."
 },
 "REPEATED_NUMBER": {
  "1": "Strong self-focus. Independence is a strength until it becomes a wall.",
  "2": "Highly sensitive to atmosphere. Protect your energy around difficult people.",
  "3": "Very expressive. Channel it into one craft rather than five conversations.",
  "4": "Unusually practical and stubborn. Rigidity is the risk.",
  "5": "Powerful centre of gravity. You attract situations that demand a decision.",
  "6": "Deeply attached to home and family. Watch for over-giving.",
  "7": "Marked spiritual or analytical bent. Solitude is necessary, isolation is not.",
  "8": "Strong material drive. Money will occupy more of your attention than you expect.",
  "9": "High intensity. Great in a crisis, harder in a quiet week."
 },
 "PLANES": {
  "mind": {
   "label": "Mind plane (4-9-2)",
   "on": "You think in structures and see the whole board.",
   "off": "Analysis is not automatic. Slow down before you decide."
  },
  "emotion": {
   "label": "Emotion plane (3-5-7)",
   "on": "Emotionally resilient and artistically inclined.",
   "off": "Feelings run without a handrail. Name them before acting."
  },
  "practical": {
   "label": "Practical plane (8-1-6)",
   "on": "You get things finished and finished properly.",
   "off": "Follow-through needs external structure to hold."
  },
  "thought": {
   "label": "Thought plane (4-3-8)",
   "on": "Planning and memory are strong assets.",
   "off": "Ideas fade before execution. Write everything down."
  },
  "will": {
   "label": "Will plane (9-5-1)",
   "on": "Determination carries you through long stretches.",
   "off": "Willpower is situational. Build habits instead of relying on it."
  },
  "action": {
   "label": "Action plane (2-7-6)",
   "on": "You convert intention into movement quickly.",
   "off": "Starting is the hard part, not finishing."
  },
  "goldenYog": {
   "label": "Golden Yog (4-5-6)",
   "on": "A rare wealth and fame combination sits in your grid.",
   "off": null
  },
  "silverYog": {
   "label": "Silver Yog (2-5-8)",
   "on": "Strong protective and financial support in your grid.",
   "off": null
  }
 },
 "PERSONAL_YEAR": {
  "1": "A starting year. Begin things now, even imperfectly. What you plant here runs for nine years.",
  "2": "A slow year by design. Partnerships, patience and quiet groundwork. Forcing it backfires.",
  "3": "A visible year. Put yourself in front of people. Good for launch, marketing and study.",
  "4": "A building year. Unglamorous, structural, necessary. Fix the foundations you skipped.",
  "5": "A year of change and movement. Travel, offers and disruption. Keep your options open.",
  "6": "A year weighted toward home, family and responsibility. Income often follows service.",
  "7": "An inward year. Learn, research, withdraw a little. Poor year to push commercially.",
  "8": "A harvest year. Money, authority and results from earlier work. Ask for what you are owed.",
  "9": "A closing year. Finish, release and clear out. Do not start what you cannot end."
 },
 "BAND_COPY": {
  "strong": {
   "headline": "Your name is working for you",
   "sub": "The vibration of your name agrees with your birth chart. No correction is needed."
  },
  "moderate": {
   "headline": "Your name mostly works",
   "sub": "It supports you in places and drags in others. A small spelling change closes the gap."
  },
  "weak": {
   "headline": "Your name is holding you back",
   "sub": "Effort is leaking. The chart is fine, the spelling is not."
  },
  "conflict": {
   "headline": "Your name is working against you",
   "sub": "Your name total is at odds with your core numbers. This is the most common reason effort does not convert."
  }
 }
} as unknown as Content;
