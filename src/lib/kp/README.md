# Free KP Kundli engine

Server-side engine behind the "KP Kundli" tab on the home page and the `/kp-kundli` result page.

```
Home form (KundliForm.jsx, kind="kp") ──▶ GET  /api/kundli/places?q=   place suggestions (shared with Free Kundli)
                                     └──▶ POST /api/kp               { name, gender, dob, tob, place } ──▶ KpResult
                                                                       │
                                  sessionStorage "ahllya:kp" ──▶ /kp-kundli (KpKundliPage.jsx ▸ KpDashboard.jsx)
                                                                       └──▶ POST /api/kp/ruling   live ruling planets, every 5 s
```

| File | What it does |
| --- | --- |
| `core.ts` | Pure KP maths, no astronomy: the 249-row sub-lord table, sub and sub-sub lookup, Vimshottari dasha (5 levels), significators, Nakshatra Nadi, ruling planets. The browser imports this for dasha drill-down and the reference table. |
| `engine.ts` | Server only: Krishnamurti ayanamsa, Placidus cusps, planet positions, lunar node (mean or true), day lord. A line-for-line port of the "KP Kundli Calculator" Artifact. |
| `build.ts` | Validates input (shares the rules of the Free Kundli form) and returns the `KpResult` the page draws. |
| `../kundli/places.ts` | Birth place search, identical in both artifacts, so it is shared. |

The page lives in `src/app/_design/`: `KpKundliPage.jsx` (site header, hero, footer), `KpDashboard.jsx` (a React port of the
artifact's result view) and `kp-dashboard.css` (the artifact's dashboard styles, scoped under `.kpx`).

## Conventions (same as the artifact)

- Krishnamurti ayanamsa, mean value without nutation, mean lunar node. `POST /api/kp` also accepts `node` and `ay`
  (`"mean"` or `"true"`) for the artifact's Advanced settings; the home form does not expose them.
- Placidus houses, so latitudes beyond about 66 degrees return a clear error.
- A dasha year is 365.25 days. Birth time is local time at the birth place.
- Horary charts are built into `computeChart` (`opts.horary`) but, as in the artifact, not exposed.
- Details are used for the calculation and dropped. Nothing is stored server-side.

## Verified against

- The artifact's own KP engine: 78,168 identical comparisons (10 births across zones and 64°N, all four node/ayanamsa
  modes, cusps, planets, dasha, significators, nadi, ruling planets, horary, 2,000 random sub-lord lookups).
- The artifact's calculator running in a browser vs this page for the same birth: every table, tile and both charts identical.
