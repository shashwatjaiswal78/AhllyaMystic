# Numerology engine (mobile number, name number)

Server-side engine behind the "Mobile number" and "Name number" tabs on the home page and their result pages.

```
Home form (MobileForm.jsx) ──▶ POST /api/mobile-number  { name, gender, dob, mobile } ──▶ MobileResult
Home form (NameForm.jsx)   ──▶ POST /api/name-number    { name, gender, dob }         ──▶ NameResult
                                          │
        sessionStorage "ahllya:mobile" / "ahllya:name" ──▶ /mobile-number, /name-number
                                          (MobileNumberPage.jsx ▸ MobileResult.jsx, NameNumberPage.jsx ▸ NameResult.jsx)
```

| File | What it does |
| --- | --- |
| `core.ts` | Digit sums, reduction, Moolank, Bhagyank, date and name cleaning. Shared. |
| `mobile-engine.ts` | The Ahllya course rules for a mobile number: adjacent digit pairs, repeats of 2, 4 and 8, the total against Moolank and Bhagyank, the keep or change decision, and the search for better endings. |
| `mobile.ts` | Validates input and returns the render-ready `MobileResult`. |
| `name-engine.ts` | The artifact's numerology engine: Chaldean name numbers, compatibility score, Lo Shu grid, Kua, Personal Year, and the spelling-correction search. The code is the artifact's own, with types added. |
| `name-content.ts` | The artifact's interpretation library (meanings, remedies, strengths). Edit freely. |
| `name.ts` | Validates input and returns the render-ready `NameResult`. |

The pages live in `src/app/_design/`: `*NumberPage.jsx` (site header, hero, footer), `*Result.jsx` (the result views) and
`numerology.css` (the artifacts' numerology styles, scoped under `.nmx` and shared by both pages).

## Rules (same as the artifacts)

- Mobile: 10 digits, a leading `+91`, `91` or `0` is stripped. Pair classes come from the 72 ordered digit pairs; zeros are
  skipped when pairing neighbours. Verdict levels: `keep`, `keepcare`, `recommended`, `definite`.
- Name: Chaldean values for the name, Vedic planetary friendship for compatibility, Lo Shu grid from the full date, Kua from
  the solar year. Personal Year uses the current year in India time.
- Names use A-Z only; other characters are ignored, as in the artifacts.
- Nothing is stored server-side. Corrected spellings and better endings stay on the server: the result carries only what the
  page shows (bullet masks, or the last three digits of a number), as in the artifacts.

## Differences from the artifacts

- The paid-report buttons go to the site's own report pages (`/report/mobile-number`, `/report/name-numerology`). The
  artifacts' standalone ₹299 / ₹899 Razorpay offers are not used: the site prices its reports in `src/lib/products.ts`
  (Mobile ₹249 / ₹499 / ₹1,499, Name ₹399 / ₹1,499 / ₹5,199 / ₹25,999).

## Verified against

- Mobile: 637,691 identical comparisons with the artifact's engine, and word-for-word identical page text on 400 random inputs.
- Name: 109,033 identical comparisons with the artifact's engine (names of 1 to 3 words, dates from 1900, all genders, Kua
  edge dates, the correction search), and identical page text on 300 random inputs covering every score band.
- Both: the only text that differs from the artifacts is the call-to-action wording described above.
