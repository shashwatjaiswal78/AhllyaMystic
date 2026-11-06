# Free Kundli engine

Server-side engine behind the "Free Kundli" tab on the home page and the `/kundli` result page.

```
Home form (KundliForm.jsx) ──▶ GET  /api/kundli/places?q=   place suggestions
                          └──▶ POST /api/kundli             { name, gender, dob, tob, place } ──▶ KundliResult
                                                              │
                                  sessionStorage "ahllya:kundli" ──▶ /kundli (KundliPage.jsx)
```

| File | What it does |
| --- | --- |
| `engine.ts` | Sidereal Lahiri chart, whole-sign houses, planet states, Vimshottari dasha (all levels), Manglik / Kaal Sarp / Sade Sati. A line-for-line port of the "Janam Kundali Calculator" Artifact. |
| `places.ts` | Ranked birth-place search over the offline city list and gazetteer, with an online top-up (Photon, then Open-Meteo). Time zones come from `tz-lookup`. |
| `panchang.ts` | Tithi, karana, yoga, vara (sunrise-based), varna, vashya, yoni, gana, nadi. Not in the artifact, added for the `/kundli` design. |
| `kundli.ts` | Validates input and returns the fully formatted `KundliResult` the page displays. |
| `traits.ts` | Weekday / tithi / karana / yoga trait text for the "Your birth panchang" cards. Edit freely. |
| `data/` | Offline places (`cities`, `gazetteer-*`, generated from the artifact) and `interpretations.ts` (placement meanings). |

## Conventions (same as the artifact)

- Sidereal zodiac, true Lahiri ayanamsa, whole-sign houses, mean Rahu node.
- Vimshottari year is 365.25 days (`DASHA_YEAR_DAYS` in `engine.ts`). Change it there if you calibrate against other software.
- Birth time is local time at the birth place; historical DST comes from `Intl`.
- Details are used for the calculation and dropped. Nothing is stored server-side.

## Verified against

- The artifact's own engine: identical output (planets, houses, dasha sub-periods) on 8 births across zones, DST and 1901-2026.
- `tz-lookup` and place search: identical to the artifact's embedded copy.
- Tithi: 400/400 random moments match `Astronomy.MoonPhase`.
- The design's sample chart (Riya, 14 Feb 1996, Lucknow): every value on `/kundli` matches.

## Not built yet

- Sending the Kundli to the WhatsApp number from the form.
- "Download free PDF" on `/kundli`.
- Manual latitude/longitude entry for villages that are not in the place list.
