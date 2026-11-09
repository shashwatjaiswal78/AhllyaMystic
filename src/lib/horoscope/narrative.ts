// Plain-language wording for the weekly, monthly and yearly views. Every sentence is chosen from numbers the
// engine has already worked out (scores, best days, planet houses), never made up.

export type AreaId = "love" | "career" | "money" | "health";

export const tone = (n: number) => (n >= 70 ? "favourable" : n >= 50 ? "balanced" : "demanding");

const HIGHLIGHT: Record<AreaId, { label: string; high: string; mid: string; low: string; hiAt: number }> = {
  love: {
    label: "Love and family", hiAt: 75,
    high: "A warm period for love and family. Make time for the people you care about.",
    mid: "Steady for love, with small ups and downs. Talk openly and keep expectations light.",
    low: "Go gently with loved ones and avoid old arguments. Patience protects your closest bonds.",
  },
  career: {
    label: "Career", hiAt: 75,
    high: "A strong period for work. Push ahead with what matters and speak up with seniors.",
    mid: "A workable period at work, where steady effort pays. Finish what you have started.",
    low: "Work may feel slow. Focus on routine tasks and let your results speak for you.",
  },
  money: {
    label: "Money", hiAt: 75,
    high: "A good period for money matters. A fine time to plan savings or an investment.",
    mid: "Money stays steady if you keep to your plan. Avoid impulse spending.",
    low: "Be careful with money. Hold off on big purchases and lending.",
  },
  health: {
    label: "Health", hiAt: 70,
    high: "Your energy is good. Keep exercising and keep a regular routine.",
    mid: "Health is fair. Keep to your routine, eat on time and sleep well.",
    low: "Energy may dip. Rest well and slow down while driving and working.",
  },
};

export function areaHighlight(area: AreaId, score: number) {
  const h = HIGHLIGHT[area];
  return { area, label: h.label, score, text: score >= h.hiAt ? h.high : score >= 50 ? h.mid : h.low };
}

/** One row of the week-to-week forecast. */
export function weekText(score: number, strongest: string, bestFull: string) {
  const lead = score >= 70
    ? "A lucky stretch. Efforts pay off and support comes easily."
    : score >= 50
      ? "A steady stretch. Keep up consistent effort and plans will move ahead."
      : "A slower stretch. Move carefully and keep important decisions for better days.";
  return `${lead} ${strongest} is your strongest area. Best day: ${bestFull}.`;
}

export function periodSummary(opts: { noun: "week" | "month"; sign: string; avg: number; strongest: string; weakest: string; bestFull: string; carefulFull: string; firstChange?: string }) {
  const t = tone(opts.avg);
  const parts = [
    `This ${opts.noun} looks ${t} for ${opts.sign} natives.`,
    `${opts.strongest} is your strongest area, so lean into it, while ${opts.weakest.toLowerCase()} needs the most care.`,
    `Your best day is ${opts.bestFull}, and it is wise to go slowly on ${opts.carefulFull}.`,
  ];
  if (opts.firstChange) parts.push(opts.firstChange);
  return parts.join(" ");
}

export function monthText(score: number, planets: { planet: string; house: string; good: boolean }[]) {
  const lead = score >= 70 ? "A favourable month." : score >= 50 ? "A mixed month." : "A slower month, so move carefully.";
  const detail = planets.map((p) => `${p.planet} in your ${p.house} house is ${p.good ? "supportive" : "challenging"}`).join("; ");
  return `${lead} ${detail}.`;
}
