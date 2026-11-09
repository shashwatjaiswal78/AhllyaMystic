// The journal: a few plain-language articles. Each article is a list of blocks so the page can render it
// as real headings and paragraphs (good for search) without a CMS.
export type Block =
  | { t: "h2"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "fig"; kind: "phases" | "loshu" | "directions" }
  | { t: "table"; head: string[]; rows: string[][]; caption?: string }
  | { t: "cta"; text: string; label: string; href: string };

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: "Astrology" | "Numerology" | "Vastu" | "Panchang";
  minutes: number;
  published: string; // ISO date
  author: string;
  excerpt: string;
  related: { label: string; href: string }[];
  body: Block[];
};

export const AUTHOR = "Ahllya Mystic";

import { MORE_ARTICLES } from "./blog-more";

const BASE_ARTICLES: Article[] = [
  {
    slug: "sade-sati-what-it-really-means",
    title: "Sade Sati: what it really means, and why it is not something to fear",
    description:
      "Sade Sati is Saturn's seven and a half year passage around your Moon sign. Here is what actually changes, the three phases, and how to use the time well.",
    category: "Astrology",
    minutes: 6,
    published: "2026-11-09",
    author: AUTHOR,
    excerpt: "Saturn’s seven and a half years have a scary reputation. Here is what actually changes, and how to use the phase well.",
    related: [
      { label: "Free Janam Kundali calculator", href: "/kundli" },
      { label: "Daily horoscope and Moon sign finder", href: "/horoscope" },
      { label: "Book a consultation", href: "/consultation" },
    ],
    body: [
      { t: "p", text: "Ask a few people what they know about Sade Sati and most will say the same thing: seven bad years. That is not how the classical texts treat it, and it is not what we see in charts. Sade Sati is a long, slow period of testing and rebuilding. Many people come out of it with a stronger career, clearer priorities and a better sense of who they can rely on." },
      { t: "h2", text: "What Sade Sati actually is" },
      { t: "p", text: "In Vedic astrology, Sade Sati (literally “seven and a half”) begins when Saturn enters the sign just before your Moon sign. It continues while Saturn crosses your Moon sign, and it ends when Saturn leaves the sign after it. Saturn spends about two and a half years in each sign, so the three signs together add up to roughly seven and a half years." },
      { t: "p", text: "Your Moon sign (rashi) is the sign the Moon was in when you were born. It is the sign used for daily rashifal, and it is the reference point for this transit. You can find it with the Moon sign finder on our horoscope page, or from your free Kundli." },
      { t: "h2", text: "The three phases" },
      { t: "ul", items: [
        "First phase, Saturn in the sign before your Moon sign. Pressure usually shows up around money, responsibilities, sleep and where your energy goes. Old habits start to feel expensive.",
        "Middle phase, Saturn over your Moon sign. This is the most personal stretch. It tends to bring questions about health, relationships and your own direction. The mind feels heavier, so routine matters more than ever.",
        "Last phase, Saturn in the sign after your Moon sign. Saturn’s lessons start turning into results. Finances, family matters and long-term plans are rebuilt on firmer ground.",
      ] },
      { t: "fig", kind: "phases" },
      { t: "h2", text: "How often does it happen?" },
      { t: "p", text: "Saturn takes about twenty-nine to thirty years to go around the zodiac, so Sade Sati returns roughly every thirty years. Most people go through it two or three times in a lifetime. The first one, often in the late twenties or thirties, is usually remembered as the one that forced the biggest changes." },
      { t: "h2", text: "Why it is not the same for everyone" },
      { t: "p", text: "Two people with the same Moon sign can have very different experiences, because Sade Sati is read together with the rest of the chart. We look at:" },
      { t: "ul", items: [
        "Where Saturn sits in your birth chart and how strong it is. Saturn that is well placed in your own chart is far kinder than Saturn that is weak.",
        "The strength of your Moon, by sign, house and the planets that aspect it.",
        "The running dasha. A supportive dasha can soften the transit, and a difficult one can sharpen it.",
        "The house Saturn is moving through for you, which decides whether pressure lands on work, home, health or relationships.",
      ] },
      { t: "h2", text: "A related period: Saturn’s dhaiya" },
      { t: "p", text: "Saturn also puts pressure on you when it moves through the fourth and eighth signs from your Moon sign. Each lasts about two and a half years and is called a dhaiya (or Kantak and Ashtama Shani). It is shorter than Sade Sati, and it is worth knowing about because people often mistake it for Sade Sati." },
      { t: "h2", text: "How to use the time well" },
      { t: "p", text: "Saturn rewards discipline and honesty, and punishes shortcuts. These habits are simple and sensible whatever your beliefs:" },
      { t: "ul", items: [
        "Keep a steady daily routine for sleep, meals and work. Saturn works through the small, repeated things.",
        "Finish what is pending, and pay what you owe, on time and in full.",
        "Avoid risky shortcuts, new debt and big impulsive decisions where you can wait.",
        "Be fair and generous with people who work for you or depend on you. This is the classical heart of Saturn’s teaching.",
        "Many families keep traditional practices on Saturdays, such as lighting a lamp, reading the Hanuman Chalisa or helping those in need. Treat these as steadying habits rather than guarantees.",
      ] },
      { t: "p", text: "None of this removes a hard period, and no honest astrologer will promise that it does. What a chart reading can do is tell you which parts of your life are under most pressure and when it eases, so you can plan around it." },
      { t: "cta", text: "Want to know exactly where you stand? Your free Janam Kundali includes your Moon sign and the classical dosha screen. For timing and a plan built around your own chart, book a one-on-one consultation.", label: "Get my free Kundli", href: "/kundli" },
    ],
  },
  {
    slug: "should-you-change-your-name-spelling",
    title: "Should you change the spelling of your name? How we decide",
    description:
      "A name correction is not about luck. Here is how numerology checks whether your name agrees with your birth numbers, and when we advise leaving it alone.",
    category: "Numerology",
    minutes: 5,
    published: "2026-11-09",
    author: AUTHOR,
    excerpt: "A name correction is not about luck. We check how your name number agrees with your birth numbers first.",
    related: [
      { label: "Free name numerology calculator", href: "/name-number" },
      { label: "Name numerology report", href: "/report/name-numerology" },
      { label: "Book a consultation", href: "/consultation" },
    ],
    body: [
      { t: "p", text: "Every few weeks someone asks us whether adding a letter to their name will change their luck. The honest answer is that a spelling change is not a lucky charm. Numerology treats your name as a set of numbers that either agrees with your birth numbers or pulls against them. A correction only makes sense when there is a real mismatch, and often there is not." },
      { t: "h2", text: "Your birth date is fixed. Your spelling is not." },
      { t: "p", text: "Two numbers come from your date of birth: the birth number (the day you were born, reduced to a single digit) and the destiny number (the full date added up). These cannot be changed. The name number, on the other hand, comes from the spelling you use, and that is the one part of the picture you can choose." },
      { t: "h2", text: "How a name is turned into a number" },
      { t: "p", text: "In the Chaldean system each letter has a value from 1 to 8 (9 is treated as sacred and not given to a letter). The letters of your name are added up and reduced to a single digit, and sometimes the compound number before reduction is read as well. Each digit belongs to a planet, so the result tells you which planet your name leans on." },
      { t: "fig", kind: "loshu" },
      { t: "h2", text: "What we compare" },
      { t: "ul", items: [
        "The planet of your name number against the planets of your birth and destiny numbers. In Vedic numerology some planets are friends, some neutral, some opposed.",
        "The Lo Shu grid built from your birth date, to see which numbers are strong, which are missing and what your name could add.",
        "How the name is actually used. A nickname you use every day often matters more than the formal name on paper.",
      ] },
      { t: "h2", text: "When we advise leaving the name alone" },
      { t: "p", text: "If your name number sits comfortably with your birth numbers, there is nothing to fix, and changing it would only create confusion. We also advise against a change when the spelling is on your passport, degree certificates and bank records and the mismatch is minor. The cost of updating documents is real, and the benefit would be small." },
      { t: "h2", text: "When a change is worth considering" },
      { t: "ul", items: [
        "The name number is clearly opposed to your birth number or destiny number.",
        "An important number is missing from your Lo Shu grid and a small change would supply it.",
        "You already use an informal spelling, for the business, on social media or among friends, and the question is only which version to settle on.",
      ] },
      { t: "p", text: "Even then, the aim is the smallest change that works: usually one added or dropped letter, never a completely new name. The new spelling should still look natural, and you should be able to use it consistently." },
      { t: "h2", text: "A fair expectation" },
      { t: "p", text: "Numerology is a traditional system of interpretation, not a scientific guarantee. A good correction can help you feel more settled and consistent in how you present yourself, but it will not replace effort, skill or good timing. Be wary of anyone who promises dramatic results from a spelling change." },
      { t: "cta", text: "Start with the free name check: it shows your name number, your core numbers and the Lo Shu grid, with the working. If it points to a mismatch, the name numerology report goes through the spelling options in detail.", label: "Check my name number", href: "/name-number" },
    ],
  },
  {
    slug: "simple-vastu-fixes-for-your-home",
    title: "Five simple Vastu fixes to refresh your home",
    description:
      "No walls broken, no big spends. Five small Vastu changes you can make room by room to make your home feel lighter, calmer and better organised.",
    category: "Vastu",
    minutes: 4,
    published: "2026-11-09",
    author: AUTHOR,
    excerpt: "No walls broken, no big spends. Small changes room by room that bring the energy of your home back into balance.",
    related: [
      { label: "Book a Vastu consultation", href: "/consultation" },
      { label: "Free Janam Kundali calculator", href: "/kundli" },
      { label: "Courses", href: "/courses" },
    ],
    body: [
      { t: "p", text: "People often assume Vastu means demolition and expensive renovation. In daily practice, most of what helps is far simpler: clearing, repositioning and letting in light. Here are five changes you can make this week. None of them needs a builder." },
      { t: "h2", text: "1. Clear the entrance" },
      { t: "p", text: "The main door is where a home meets the outside world. Keep it well lit, clean and free of shoes piled up, broken items or dustbins. The door should open fully and easily. A simple nameplate, a lamp or fresh flowers near the entrance makes the first impression warmer." },
      { t: "fig", kind: "directions" },
      { t: "h2", text: "2. Let the north-east breathe" },
      { t: "p", text: "In Vastu the north-east corner is linked with clarity and calm, and it is meant to stay light and open. If heavy furniture, storage boxes or clutter have collected there, move them out. It is a good place for a prayer space, a plant or simply open floor." },
      { t: "h2", text: "3. Sort out the kitchen" },
      { t: "p", text: "The kitchen is linked with fire, and the south-east is its traditional place. Whether or not your kitchen is there, you can keep the stove clean, avoid placing it directly opposite the sink or a water tap where possible, and store grains and spices in tidy, closed containers. A well-kept kitchen is good advice in any tradition." },
      { t: "h2", text: "4. Rearrange the bedroom" },
      { t: "ul", items: [
        "Sleep with your head towards the south or east where you can arrange it.",
        "Keep mirrors from directly facing the bed.",
        "Remove electronics, piles of paper and unused items from under and around the bed.",
        "Choose soft, calm colours for the walls and bedding.",
      ] },
      { t: "h2", text: "5. Let in light, air and green" },
      { t: "p", text: "Open windows each morning, even for ten minutes. Clean the glass so more daylight comes in. Add a few easy plants such as money plant or tulsi, and keep their pots tidy. A home with fresh air and light almost always feels better, and it is the most reliable Vastu advice of all." },
      { t: "h2", text: "What these fixes can and cannot do" },
      { t: "p", text: "These are small, sensible adjustments, and many people find they enjoy their space more afterwards. They are not a cure for serious problems, and they are not a substitute for a proper reading of your plot, your floor plan and your chart. If something larger is bothering you, such as repeated health, money or sleep trouble that seems to be tied to the house, it is worth having the whole layout looked at." },
      { t: "cta", text: "If you would like us to look at your own home, share your floor plan and tell us what is bothering you. A consultation will tell you what matters for your layout and what you can safely ignore.", label: "Book a consultation", href: "/consultation" },
    ],
  },
];

export const ARTICLES: Article[] = [...BASE_ARTICLES, ...MORE_ARTICLES];

export const bySlug = (slug: string) => ARTICLES.find((a) => a.slug === slug);
