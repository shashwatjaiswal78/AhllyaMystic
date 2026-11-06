// General traits for the "Your birth panchang" cards. They describe tendencies shared by everyone
// born under the same weekday, tithi, karana or yoga, not a reading of the full chart. Edit freely.

export const WEEKDAY_TRAIT = [
  "Born on a Sunday, the day of the Sun, you tend to carry natural confidence and a wish to lead. You like to be respected, you take responsibility seriously and you are at your best when you have a clear purpose.",
  "Born on a Monday, the day of the Moon, you tend to be caring, sensitive and imaginative. Your mood follows the people and places around you, and you do best where you feel safe and understood.",
  "Born on a Tuesday, the day of Mars, you tend to be energetic, brave and direct. You like to act rather than wait, and you need a goal to put that drive into, or it turns into restlessness.",
  "Born on a Wednesday, the day of Mercury, you tend to be quick-witted, curious and good with words. You learn fast and enjoy conversation, ideas and anything that keeps your mind busy.",
  "Born on a Thursday, the day of Jupiter, you tend to be thoughtful, fair-minded and hopeful. You are drawn to learning and guidance, and people often come to you to make sense of things.",
  "Born on a Friday, the day of Venus, you tend to be warm, charming and fond of beauty. You value harmony in your relationships and surroundings, and you enjoy comfort, art and good company.",
  "Born on a Saturday, the day of Saturn, you tend to be patient, disciplined and hardworking. Results may come slowly, but what you build lasts, and you earn respect through steady effort.",
] as const;

// Index 0..13 are Pratipada to Chaturdashi, 14 is Purnima and 15 is Amavasya.
export const TITHI_TRAIT = [
  "Pratipada is the first tithi, a tithi of beginnings. You like to start fresh, you are self-reliant, and you are happiest when a new plan or chapter is opening in front of you.",
  "Dwitiya is the tithi of partnership and steady growth. You build things step by step, you value the people who support you, and you do well when you work with others.",
  "Tritiya is a tithi of skill and creativity. You are resourceful, you enjoy using your talents, and you tend to be good at turning ideas into something real.",
  "Chaturthi is the tithi of removing obstacles. You meet difficulties with determination and a practical eye, and you usually find a way around a problem instead of giving up.",
  "Panchami is a tithi of learning and the arts. You are curious, you enjoy knowledge and creative pursuits, and you like to keep improving your skills.",
  "Shashthi is a tithi of care and protection. You look after the people you love, you like order and routine, and you work hard for the comfort of your family.",
  "Saptami is a tithi of movement and travel. You like change, new places and fresh experiences, and you adapt quickly when life shifts.",
  "Ashtami is a tithi of inner strength. You are determined and handle pressure well, and you often grow most through the tests that life gives you.",
  "Navami is a tithi of courage and energy. You are bold and protective, you speak up for what you believe in, and you push on when others hesitate.",
  "Dashami is a tithi of steady effort and duty. You like to finish what you begin, and you respect people who keep their word.",
  "Ekadashi is a tithi of discipline and reflection. You have a thoughtful, spiritual side, you value self-control, and you find clarity when you slow down.",
  "Dwadashi is a tithi of generosity and gratitude. You like to share what you have, you are fair with others, and you are often the one who keeps a group together.",
  "Trayodashi is a tithi of charm and enjoyment. You are sociable and pleasant company, you appreciate the good things in life, and you make friends easily.",
  "Chaturdashi is a tithi of intensity. You have strong willpower and a deep, private side, and you can face difficult situations that others avoid.",
  "Purnima is the full moon tithi, a tithi of fullness. Your feelings run deep, you are generous and warm, and you are happiest when your efforts feel complete and appreciated.",
  "Amavasya is the new moon tithi, a tithi of inner focus. You are reflective, you value quiet and privacy, and you often understand things by looking within rather than around you.",
] as const;

export const KARANA_TRAIT: Record<string, string> = {
  Bava: "Bava is a karana of vitality and good health. It gives you a lively, positive nature and a habit of meeting the day with energy.",
  Balava: "Balava is a karana of learning and goodwill. It brings a gentle, helpful nature and an interest in knowledge, tradition and doing right by others.",
  Kaulava: "Kaulava is a karana of family and friendship. It brings a loyal, sociable streak and a talent for keeping relationships warm.",
  Taitila: "Taitila is a karana of comfort and kindness. It brings an easy-going nature, generosity and a liking for a pleasant, settled life.",
  Gara: "Gara is a karana of hard work. It brings a diligent, practical streak and the stamina to keep going on tasks that need patience.",
  Vanija: "Vanija is the karana of trade. It brings a practical, business-minded streak and a habit of weighing the value of things before you commit.",
  Vishti: "Vishti, also called Bhadra, is a karana of intensity. It brings strong willpower and a forceful way of getting things done, and it works best when that drive is pointed at a worthwhile goal.",
  Shakuni: "Shakuni is a karana of cleverness. It brings a sharp, observant mind and a knack for noticing what others miss.",
  Chatushpada: "Chatushpada is a karana of steadiness. It brings a grounded, dependable nature and respect for tradition and routine.",
  Naga: "Naga is a karana of depth. It brings a private, watchful nature and strong instincts about people and situations.",
  Kimstughna: "Kimstughna is a karana of new starts. It brings a hopeful, optimistic nature and the ability to begin again after a setback.",
};

export const YOGA_TRAIT: Record<string, string> = {
  Vishkambha: "Vishkambha means a pillar or support. It points to a firm, determined nature and an ability to hold things together for the people around you.",
  Priti: "Priti means affection. It points to a loving, friendly nature and a talent for winning people's goodwill.",
  Ayushman: "Ayushman means long life. It points to a healthy, resilient temperament and a steady attitude to life's ups and downs.",
  Saubhagya: "Saubhagya means good fortune. It points to an optimistic outlook and a tendency to find help when you need it.",
  Shobhana: "Shobhana means radiance. It points to a pleasant presence, a sense of style and a liking for beauty.",
  Atiganda: "Atiganda means a great obstacle. It points to a sharp, restless mind that grows stronger by working through difficulty.",
  Sukarma: "Sukarma means good deeds. It points to a dutiful, helpful nature and pride in doing things properly.",
  Dhriti: "Dhriti means steadiness. It points to patience, a calm manner and the ability to stay the course.",
  Shula: "Shula means a spear. It points to strong opinions and a sharp tongue, and it asks you to choose your words with care.",
  Ganda: "Ganda means a knot. It points to someone who likes to untangle complicated problems and learns through challenge.",
  Vriddhi: "Vriddhi means growth. It points to ambition, a steady rise and a habit of improving whatever you take up.",
  Dhruva: "Dhruva means fixed, like the pole star. It points to reliability, loyalty and long-lasting commitments.",
  Vyaghata: "Vyaghata means a strike. It points to a forceful, determined nature that does best when its energy has a clear purpose.",
  Harshana: "Harshana means joy. It points to a cheerful, optimistic temperament and a knack for lifting the mood of the people around you.",
  Vajra: "Vajra means a thunderbolt. It points to a strong will, courage and the ability to stand firm under pressure.",
  Siddhi: "Siddhi means accomplishment. It points to skill, focus and a good chance of finishing what you set out to do.",
  Vyatipata: "Vyatipata means a sudden turn. It points to someone who adapts quickly when plans change and learns from setbacks.",
  Variyana: "Variyana means comfort. It points to a love of ease and good things, along with a generous, easy-going nature.",
  Parigha: "Parigha means a bar across a gate. It points to protectiveness, a strong sense of boundaries and a determined nature.",
  Shiva: "Shiva means auspicious. It points to a calm, spiritual leaning and a wish to do good.",
  Siddha: "Siddha means accomplished. It points to a capable, goal-oriented nature and a talent for completing what you start.",
  Sadhya: "Sadhya means achievable. It points to practical goals, persistence and learning through effort.",
  Shubha: "Shubha means auspicious and pleasant. It points to a kind, gracious manner and good relationships.",
  Shukla: "Shukla means bright. It points to a clear mind, honest speech and a fresh way of seeing things.",
  Brahma: "Brahma is the yoga of the creator. It points to knowledge, creativity and a love of learning.",
  Indra: "Indra is named for the king of the gods. It points to leadership, dignity and a readiness to take on responsibility.",
  Vaidhriti: "Vaidhriti points to independence and a mind of your own, with a talent for finding your own way when others hesitate.",
};
