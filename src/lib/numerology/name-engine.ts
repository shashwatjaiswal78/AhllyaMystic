// Numerology engine: name numbers (Chaldean), the compatibility score, Lo Shu grid, Kua and Personal Year numbers,
// and the spelling-correction search. Ported from the "Ahllya Mystic Numerology Engine" shared by the Name Numerology
// and Mobile Number artifacts: the code below is the artifact's own, with types added. Pure and deterministic.
import { bhagyank, cleanName, moolank, reduce, titleCase, validDob, digitSum, type Dob } from "./core";

// Chaldean: sound-based, 1-8 only. Used for NAME numbers.
export const CHALDEAN: Record<string, number> = {
  A:1, I:1, J:1, Q:1, Y:1,
  B:2, K:2, R:2,
  C:3, G:3, L:3, S:3,
  D:4, M:4, T:4,
  E:5, H:5, N:5, X:5,
  U:6, V:6, W:6,
  O:7, Z:7,
  F:8, P:8
};

// Pythagorean: positional, 1-9. Used for the "Western" cross-check numbers.
const PYTHAGOREAN: Record<string, number> = {};
for (let i = 0; i < 26; i++) {
  PYTHAGOREAN[String.fromCharCode(65 + i)] = (i % 9) + 1;
}

const VOWELS = new Set<string>(['A', 'E', 'I', 'O', 'U']);

/**
 * Break a name down letter by letter.
 * system: 'chaldean' | 'pythagorean'
 * filter: 'all' | 'vowels' | 'consonants'
 */
export function nameBreakdown(name: unknown, system: 'chaldean' | 'pythagorean' = 'chaldean', filter: 'all' | 'vowels' | 'consonants' = 'all') {
  const map = system === 'pythagorean' ? PYTHAGOREAN : CHALDEAN;
  const clean = cleanName(name);
  const words = clean ? clean.split(' ') : [];

  const parts = words.map(word => {
    const letters = word.split('')
      .filter(ch => {
        if (filter === 'vowels') return VOWELS.has(ch);
        if (filter === 'consonants') return !VOWELS.has(ch);
        return true;
      })
      .map(ch => ({ ch, value: map[ch] || 0 }));
    const total = letters.reduce((a, l) => a + l.value, 0);
    return { word, letters, total, reduced: reduce(total).value };
  });

  const total = parts.reduce((a, p) => a + p.total, 0);
  const r = reduce(total);
  return {
    system, filter,
    name: clean,
    parts,
    compound: total,          // the un-reduced total (Chaldean calls this the compound number)
    reduced: r.value,
    trail: r.trail
  };
}

export function parseDob(input: unknown): Dob | null {
  const raw = input as { day?: unknown; month?: unknown; year?: unknown } | null;
  // Accepts 'YYYY-MM-DD', 'DD/MM/YYYY', or {day, month, year}
  if (raw && typeof raw === 'object' && 'day' in raw) {
    return { day: +(raw.day as number), month: +(raw.month as number), year: +(raw.year as number) };
  }
  const s = String(input).trim();
  let m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (m) return { year: +m[1], month: +m[2], day: +m[3] };
  m = s.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{4})$/);
  if (m) return { day: +m[1], month: +m[2], year: +m[3] };
  return null;
}

/** Life Path with master numbers preserved (Western convention). */
export function lifePath(d: Dob) {
  const dayR = reduce(d.day, true).value;
  const monR = reduce(d.month, true).value;
  const yrR = reduce(d.year, true).value;
  const raw = dayR + monR + yrR;
  const r = reduce(raw, true);
  return { value: r.value, raw, components: { day: dayR, month: monR, year: yrR }, trail: r.trail };
}

/**
 * Kua number — the one figure that genuinely depends on gender.
 * Uses the Chinese solar year: births before Feb 4 belong to the previous year.
 */
export function kua(d: Dob, gender: unknown) {
  const solarYear = (d.month === 1 || (d.month === 2 && d.day < 4)) ? d.year - 1 : d.year;
  const s = reduce(digitSum(solarYear)).value;
  const post2000 = solarYear >= 2000;
  let k;
  const g = String(gender || '').toLowerCase();
  if (g === 'female') {
    k = reduce(s + (post2000 ? 6 : 5)).value;
    if (k === 5) k = 8;
  } else {
    k = reduce((post2000 ? 9 : 10) - s).value;
    if (k === 5) k = 2;
    if (k === 0) k = 9;
  }
  const group = [1, 3, 4, 9].includes(k) ? 'East' : 'West';
  const dirs: Record<number, string[]> = {
    1: ['SE', 'E', 'S', 'N'], 2: ['NE', 'W', 'NW', 'SW'], 3: ['S', 'N', 'SE', 'E'],
    4: ['N', 'S', 'E', 'SE'], 6: ['W', 'NE', 'SW', 'NW'], 7: ['NW', 'SW', 'NE', 'W'],
    8: ['SW', 'NW', 'W', 'NE'], 9: ['E', 'SE', 'N', 'S']
  };
  return { value: k, solarYear, group, luckyDirections: dirs[k] || [] };
}

/** Lo Shu grid — digit frequency across the full date. */
export function loShu(d: Dob) {
  const digits = `${d.day}${d.month}${d.year}`.split('').map(Number).filter(n => n > 0);
  // Traditional practice also seeds the grid with moolank and bhagyank.
  digits.push(moolank(d.day).value, bhagyank(d).value);
  const counts: Record<number, number> = {};
  for (let i = 1; i <= 9; i++) counts[i] = 0;
  digits.forEach(n => { counts[n] = (counts[n] || 0) + 1; });
  const missing: number[] = [];
  const repeated: number[] = [];
  for (let i = 1; i <= 9; i++) {
    if (counts[i] === 0) missing.push(i);
    if (counts[i] >= 3) repeated.push(i);
  }
  // Grid layout is the classic magic square
  const layout = [[4, 9, 2], [3, 5, 7], [8, 1, 6]];
  const planes = {
    mind:      [4, 9, 2].every(n => counts[n] > 0),
    emotion:   [3, 5, 7].every(n => counts[n] > 0),
    practical: [8, 1, 6].every(n => counts[n] > 0),
    thought:   [4, 3, 8].every(n => counts[n] > 0),
    will:      [9, 5, 1].every(n => counts[n] > 0),
    action:    [2, 7, 6].every(n => counts[n] > 0),
    goldenYog: [4, 5, 6].every(n => counts[n] > 0),
    silverYog: [2, 5, 8].every(n => counts[n] > 0)
  };
  return { counts, missing, repeated, layout, planes, digits };
}

/** Personal year — the cycle the person is currently running. */
export function personalYear(d: Dob, refYear?: number) {
  const y = refYear || new Date().getFullYear();
  const raw = digitSum(d.day) + digitSum(d.month) + digitSum(y);
  return { value: reduce(raw).value, year: y };
}

/**
 * Planetary friendship. This is the layer that decides whether a name
 * "supports" a person. Values: 'friend' | 'neutral' | 'enemy'.
 *
 * Derived from Vedic planetary friendship (Sun 1, Moon 2, Jupiter 3, Rahu 4,
 * Mercury 5, Venus 6, Ketu 7, Saturn 8, Mars 9), then made SYMMETRIC by taking
 * the more cautious of the two directions. Symmetry matters here: a user who
 * sees "5 is friendly to 6" and "6 is unfriendly to 5" loses trust instantly.
 * Swap this one object to switch the whole engine to a different school.
 */
/* Ahllya course Chapter 14 compatibility chart (starred 4 and 8 are enemies for 4 and 8; 7 is neutral to 3) */
export const RELATIONS: Record<number, { friend: number[]; neutral: number[]; enemy: number[] }> = {
  1: { friend: [1, 2, 3, 5, 6, 9], neutral: [4, 7], enemy: [8] },
  2: { friend: [1, 2, 3, 5], neutral: [6, 7], enemy: [4, 8, 9] },
  3: { friend: [1, 2, 3, 5], neutral: [4, 7, 8, 9], enemy: [6] },
  4: { friend: [1, 5, 6, 7], neutral: [3], enemy: [2, 4, 8, 9] },
  5: { friend: [1, 2, 3, 5, 6], neutral: [4, 7, 8, 9], enemy: [] },
  6: { friend: [1, 5, 6, 7], neutral: [2, 4, 8, 9], enemy: [3] },
  7: { friend: [1, 3, 4, 5, 6], neutral: [2, 7, 8, 9], enemy: [] },
  8: { friend: [3, 5, 6, 7], neutral: [9], enemy: [1, 2, 4, 8] },
  9: { friend: [1, 3, 5], neutral: [6, 7, 8, 9], enemy: [2, 4] }
};

export function relation(a: number, b: number): 'friend' | 'neutral' | 'enemy' {
  const r = RELATIONS[a];
  if (!r) return 'neutral';
  if (r.friend.includes(b)) return 'friend';
  if (r.enemy.includes(b)) return 'enemy';
  return 'neutral';
}

/**
 * Intrinsic quality of a number as a NAME total, in Chaldean practice.
 * 0-100. This is independent of the person.
 */
export const NAME_QUALITY: Record<number, number> = {
  1: 90, 2: 70, 3: 88, 4: 35, 5: 95, 6: 92, 7: 55, 8: 30, 9: 78
};

/**
 * Compound (double-digit) name totals carry their own meaning in Chaldean work.
 * Only the well-established ones are scored; anything else is neutral.
 */
export const COMPOUND: Record<number, { tone: 'good' | 'mixed' | 'caution'; note: string }> = {
  10: { tone: 'mixed',   note: 'Wheel of fortune. Big swings, self-made outcomes.' },
  11: { tone: 'caution', note: 'Hidden trials and treachery from others. Needs care.' },
  13: { tone: 'caution', note: 'Upheaval and forced change. Powerful but destabilising.' },
  14: { tone: 'mixed',   note: 'Movement, risk, dealings with the public. Guard against loss.' },
  15: { tone: 'good',    note: 'Magnetism and material favour. Strong for public life.' },
  16: { tone: 'caution', note: 'Sudden collapse of what was built. Avoid for business names.' },
  17: { tone: 'good',    note: 'Rises after difficulty. Lasting name and legacy.' },
  18: { tone: 'caution', note: 'Conflict, deception, material gain at a cost.' },
  19: { tone: 'good',    note: 'Sun-blessed. Success, honour and recognition.' },
  20: { tone: 'mixed',   note: 'A call to act on higher purpose. Delays without decision.' },
  21: { tone: 'good',    note: 'Advancement and victory after struggle.' },
  22: { tone: 'caution', note: 'Illusion and false judgement. Needs grounding.' },
  23: { tone: 'good',    note: 'Royal star of the Lion. Help arrives, plans succeed.' },
  24: { tone: 'good',    note: 'Gain through others, love and partnership.' },
  25: { tone: 'mixed',   note: 'Strength through experience. Slow but sure.' },
  26: { tone: 'caution', note: 'Ruin through bad advice or partnership.' },
  27: { tone: 'good',    note: 'Authority earned through intellect. Act on your own judgement.' },
  28: { tone: 'caution', note: 'Gains lost repeatedly. Rebuilds required.' },
  29: { tone: 'caution', note: 'Uncertainty, unreliable people, emotional strain.' },
  30: { tone: 'mixed',   note: 'Thoughtful retirement from the crowd. Neither lucky nor unlucky.' },
  31: { tone: 'mixed',   note: 'Self-contained and isolated. Good for solitary work.' },
  32: { tone: 'good',    note: 'Magnetic with groups and crowds. Hold your own plan.' },
  33: { tone: 'good',    note: 'Carries the force of 24. Gain through others.' },
  34: { tone: 'caution', note: 'Same caution as 25. Progress after hard lessons.' },
  35: { tone: 'caution', note: 'As 26. Watch partnerships closely.' },
  36: { tone: 'good',    note: 'As 27. Independent authority.' },
  37: { tone: 'good',    note: 'Excellent for partnership, love and alliance.' },
  38: { tone: 'caution', note: 'As 29. Guard against unreliable associates.' },
  39: { tone: 'mixed',   note: 'As 30. Contemplative rather than commercial.' },
  40: { tone: 'mixed',   note: 'As 31. Detached and self-reliant.' },
  41: { tone: 'good',    note: 'As 32. Strong with groups and public causes.' },
  42: { tone: 'good',    note: 'As 24. Gain through relationships.' },
  43: { tone: 'caution', note: 'Revolution and upheaval. Unfortunate for a name.' },
  44: { tone: 'caution', note: 'As 26. Poor for financial dealings.' },
  45: { tone: 'good',    note: 'As 27. Wisdom and command.' },
  46: { tone: 'good',    note: 'As 37. Warmth and successful alliance.' },
  47: { tone: 'good',    note: 'As 29 in form but reads as 2. Handle people carefully.' },
  48: { tone: 'mixed',   note: 'As 30. Reflective, not commercial.' },
  49: { tone: 'mixed',   note: 'As 31. Solitary strength.' },
  50: { tone: 'good',    note: 'As 32. Influence over groups.' },
  51: { tone: 'good',    note: 'Sudden advancement, the warrior number. Powerful, makes enemies.' },
  52: { tone: 'caution', note: 'As 43. Sudden reversals.' }
};

const COMPOUND_POINTS: Record<string, number> = { good: 10, mixed: 6, caution: 1 };

/**
 * The headline score. 0-100, with a full breakdown so nothing is a black box.
 */
export function nameScore({ nameNumber, compound, moolank: mk, bhagyank: bk, soulUrge }: { nameNumber: number; compound: number; moolank: number; bhagyank: number; soulUrge: number }) {
  const relMool = relation(mk, nameNumber);
  const relBhag = relation(bk, nameNumber);
  const relPts: Record<string, number> = { friend: 1, neutral: 0.55, enemy: 0.12 };

  const c1 = Math.round(40 * relPts[relMool]);
  const c2 = Math.round(25 * relPts[relBhag]);
  const c3 = Math.round(20 * (NAME_QUALITY[nameNumber] || 50) / 100);
  const comp = COMPOUND[compound];
  const c4 = comp ? COMPOUND_POINTS[comp.tone] : 6;
  const relSoul = relation(mk, soulUrge);
  const c5 = Math.round(5 * relPts[relSoul]);

  const total = c1 + c2 + c3 + c4 + c5;

  let verdict: string, band: 'strong' | 'moderate' | 'weak' | 'conflict';
  if (total >= 78) { verdict = 'Your name supports you'; band = 'strong'; }
  else if (total >= 60) { verdict = 'Your name mostly works, with friction'; band = 'moderate'; }
  else if (total >= 42) { verdict = 'Your name is holding you back in places'; band = 'weak'; }
  else { verdict = 'Your name is working against you'; band = 'conflict'; }

  return {
    total, verdict, band,
    breakdown: [
      { label: 'Name vs Moolank ' + mk, detail: relMool, points: c1, max: 40 },
      { label: 'Name vs Bhagyank ' + bk, detail: relBhag, points: c2, max: 25 },
      { label: 'Strength of name number ' + nameNumber, detail: NAME_QUALITY[nameNumber] >= 75 ? 'strong' : NAME_QUALITY[nameNumber] >= 50 ? 'mixed' : 'weak', points: c3, max: 20 },
      { label: 'Compound total ' + compound, detail: comp ? comp.tone : 'neutral', points: c4, max: 10 },
      { label: 'Inner desire alignment', detail: relSoul, points: c5, max: 5 }
    ],
    compoundNote: comp ? comp.note : null
  };
}

/** Which name totals are actually safe for this person. */
export function allowedNumbers(mk: number, bk: number) {
  const out: { n: number; moolankRel: string; bhagyankRel: string; quality: number }[] = [];
  for (let n = 1; n <= 9; n++) {
    const a = relation(mk, n), b = relation(bk, n);
    if (a === 'enemy' || b === 'enemy') continue;
    if ((NAME_QUALITY[n] || 0) < 50) continue;   // 4 and 8 stay out as name totals
    out.push({ n, moolankRel: a, bhagyankRel: b, quality: NAME_QUALITY[n] });
  }
  return out.sort((x, y) =>
    Number(y.moolankRel === 'friend') - Number(x.moolankRel === 'friend') || y.quality - x.quality
  );
}

/** Levenshtein distance, used to rank corrections by how little the eye notices. */
export function editDistance(a: string, b: string) {
  const m = a.length, n = b.length;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

/**
 * Would a person actually write their name this way?
 * This gate is what separates a usable suggestion from "Jjjaiswal".
 */
export function plausible(word: string, base: string) {
  if (word.length < 3 || word.length > base.length + 2) return false;
  if (/(.)\1\1/.test(word)) return false;                 // no triple letters
  if (/^(.)\1/.test(word)) return false;                   // no doubled first letter
  const doubles = (word.match(/(.)\1/g) || []).length;
  if (doubles > 2) return false;
  if (/[AEIOU]{3}/.test(word)) return false;               // no vowel pile-ups
  if (/[^AEIOU]{4}/.test(word)) return false;              // no 4-consonant clusters
  if (/[AEIOU]$/.test(base) && /[^AEIOU]$/.test(word) && word.length < base.length) return false;
  return true;
}

/** Orthographic moves that read as natural Indian-English spelling variants. */
export function variantsOf(word: string): string[] {
  const w = word;
  const out = new Set<string>();
  const L = w.split('');

  // double an interior letter
  for (let i = 1; i < L.length; i++) {
    if (L[i] === L[i + 1] || L[i] === L[i - 1]) continue;
    out.add(w.slice(0, i + 1) + L[i] + w.slice(i + 1));
  }
  // undouble an existing repeated letter
  for (let i = 0; i < L.length - 1; i++) {
    if (L[i] === L[i + 1]) out.add(w.slice(0, i) + w.slice(i + 1));
  }
  // trailing softeners, the most common real-world correction in India
  ['A', 'H', 'AH', 'I'].forEach(suf => { if (!w.endsWith(suf)) out.add(w + suf); });
  if (/[AHI]$/.test(w) && w.length > 3) out.add(w.slice(0, -1));

  // transliteration substitutions, one at a time, both directions
  const subs = [
    ['I', 'EE'], ['Y', 'I'], ['C', 'K'], ['S', 'SH'], ['V', 'W'],
    ['U', 'OO'], ['KSH', 'X'], ['TH', 'T'], ['DH', 'D'], ['PH', 'F'],
    ['AA', 'A'], ['EE', 'I'], ['OO', 'U'], ['Z', 'J']
  ];
  subs.forEach(([a, b]) => {
    if (w.includes(a)) out.add(w.replace(a, b));
    if (w.includes(b)) out.add(w.replace(b, a));
  });

  out.delete(w);
  return [...out].filter(v => plausible(v, w));
}

/**
 * Correct a name by re-spelling it.
 *
 * Search runs in tiers, widening only when the previous tier finds nothing:
 *   1. the surname alone           (what a practitioner tries first)
 *   2. any word except the first   (surname + middle name)
 *   3. every word, first included  (flagged, because changing a given name is a bigger ask)
 * Within a tier the search is depth 2 over the spelling moves, and every
 * candidate must pass the plausibility gate before it is ever scored.
 */
export interface CorrectionOption {
  name: string; changedWord: string; originalWord: string; position: number; touchesFirstName: boolean;
  compound: number; nameNumber: number; score: number; band: string; compoundNote: string | null; edits: number;
}

export function correctName(fullName: unknown, mk: number, bk: number, limit = 6) {
  const clean = cleanName(fullName);
  const words = clean.split(' ');
  if (words.length < 2) {
    return { possible: false, reason: 'A surname is needed before the full name can be corrected.', options: [] };
  }

  const allowed = allowedNumbers(mk, bk).map(a => a.n);

  const candidatesFor = (base: string) => {
    const d1 = variantsOf(base);
    const set = new Set(d1);
    d1.slice(0, 60).forEach(v => variantsOf(v).forEach(v2 => {
      if (plausible(v2, base)) set.add(v2);
    }));
    return [...set].slice(0, 500);
  };

  const seen = new Set([clean]);
  let searched = 0;

  const runTier = (indices: number[], floor: number) => {
    const found: CorrectionOption[] = [];
    indices.forEach(idx => {
      candidatesFor(words[idx]).forEach(v => {
        const next = words.slice();
        next[idx] = v;
        const joined = next.join(' ');
        if (seen.has(joined)) return;
        seen.add(joined);
        searched++;

        const bd = nameBreakdown(joined, 'chaldean');
        if (!allowed.includes(bd.reduced)) return;
        const comp = COMPOUND[bd.compound];
        if (comp && comp.tone === 'caution') return;   // never recommend a warned compound

        const sc = nameScore({
          nameNumber: bd.reduced,
          compound: bd.compound,
          moolank: mk,
          bhagyank: bk,
          soulUrge: nameBreakdown(joined, 'chaldean', 'vowels').reduced
        });
        if (sc.total < floor) return;

        found.push({
          name: titleCase(joined),
          changedWord: titleCase(v),
          originalWord: titleCase(words[idx]),
          position: idx,
          touchesFirstName: idx === 0,
          compound: bd.compound,
          nameNumber: bd.reduced,
          score: sc.total,
          band: sc.band,
          compoundNote: sc.compoundNote,
          edits: editDistance(words[idx], v)
        });
      });
    });
    return found;
  };

  const all = words.map((_, i) => i);
  const tiers = [
    { idx: [words.length - 1], floor: 72, label: 'surname' },
    { idx: all.filter(i => i > 0), floor: 72, label: 'surname or middle name' },
    { idx: all.filter(i => i > 0), floor: 62, label: 'surname or middle name, partial gain' },
    { idx: all, floor: 62, label: 'full name including given name' }
  ];

  let options: CorrectionOption[] = [], tierUsed: string | null = null;
  for (const t of tiers) {
    options = runTier(t.idx, t.floor);
    if (options.length) { tierUsed = t.label; break; }
  }

  options.sort((a, b) =>
    (Number(a.touchesFirstName) - Number(b.touchesFirstName)) || b.score - a.score || a.edits - b.edits || a.name.length - b.name.length
  );

  return {
    possible: options.length > 0,
    firstNameKept: titleCase(words[0]),
    allowed,
    searched,
    scope: tierUsed,
    options: options.slice(0, limit),
    reason: options.length ? null
      : 'No natural re-spelling of this name reaches a supportive total. This chart needs a consultation to consider an added middle name or an alternate surname.'
  };
}

export function analyse({ name, dob, gender }: { name: unknown; dob: unknown; gender?: unknown }) {
  const d = parseDob(dob);
  if (!validDob(d)) return { ok: false as const, error: 'Please enter a valid date of birth.' };
  const clean = cleanName(name);
  if (clean.replace(/\s/g, '').length < 2) return { ok: false as const, error: 'Please enter your full name.' };

  const full = nameBreakdown(clean, 'chaldean');
  const firstOnly = nameBreakdown(clean.split(' ')[0], 'chaldean');
  const soul = nameBreakdown(clean, 'chaldean', 'vowels');
  const persona = nameBreakdown(clean, 'chaldean', 'consonants');
  const pyDestiny = nameBreakdown(clean, 'pythagorean');

  const mk = moolank(d.day);
  const bk = bhagyank(d);
  const lp = lifePath(d);
  const ku = kua(d, gender);
  const grid = loShu(d);
  const py = personalYear(d);

  const score = nameScore({
    nameNumber: full.reduced,
    compound: full.compound,
    moolank: mk.value,
    bhagyank: bk.value,
    soulUrge: soul.reduced
  });

  const correction = score.band === 'strong'
    ? { possible: false, reason: 'No correction needed. Your name already supports your chart.', options: [] }
    : correctName(clean, mk.value, bk.value);

  return {
    ok: true as const,
    input: { name: titleCase(clean), gender: gender || 'unspecified', dob: d },
    dateNumbers: { moolank: mk, bhagyank: bk, lifePath: lp, kua: ku, personalYear: py },
    nameNumbers: {
      full, firstName: firstOnly, soulUrge: soul, personality: persona, pythagoreanDestiny: pyDestiny
    },
    loShu: grid,
    compatibility: { score, allowed: allowedNumbers(mk.value, bk.value), relations: RELATIONS[mk.value] },
    correction
  };
}
