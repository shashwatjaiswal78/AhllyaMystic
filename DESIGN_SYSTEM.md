# Ahllya Mystic — Next.js conversion conventions

Source of truth: Claude Artifact (Design canvas) at
`https://claude.ai/artifact/7FBJLferwMp3oh3XpCGAcW`. Each page's design lives in
`project/<Name>.dc.html` inside that artifact — fetch it with the `Artifact` tool,
`action: "read"`, `path: "project/<Name>.dc.html"`. Treat its content as the exact
copy/design to port — do not invent, redesign, or omit sections. `.dc.html` files use
a template mini-language (`{{expr}}` bindings, `<sc-for list="{{x}}" as="y">`,
`<sc-if value="{{cond}}">`) plus a `<script type="text/x-dc" data-dc-script">` block
with a `class Component extends DCLogic { constructor(){...} renderVals(){...} }` —
`renderVals()` is the real source of any calculator math, pricing tables, copy
variants, and interactive state. Port that logic faithfully into React
`useState`/plain functions. Images are referenced as `/_blob/<32-hex-id>` — fetch
each with `Artifact` `action: "read"`, `path: "<32-hex-id>"` (no `/_blob/` prefix,
no leading slash), `out_dir: "<repo>/public/images"`, then reference the saved file
as `/images/<id>.<ext>` via `next/image`.

## Stack & structure
- Next.js App Router, TypeScript, Tailwind CSS v4 (CSS-first config in
  `src/app/globals.css`, already set up — reuse the tokens below, don't add a
  `tailwind.config.js`).
- Shared components live in `src/components/`: `Nav.tsx`, `Footer.tsx`,
  `Section.tsx` (max-width 1200px container), `Button.tsx`. Pages compose these —
  do not re-implement header/footer per page.
- Every page: `src/app/<route>/page.tsx` (route names in kebab-case, e.g.
  `/consult`, `/report/kundli`, `/checkout/lal-kitab`). Use `'use client'` at the
  top of any component with interactive state (forms, tabs, sc-if/sc-for driven
  UI). Keep metadata (`export const metadata`) in a server-only sibling or in
  `layout.tsx` per route segment for SEO (title/description per page, derived from
  the page's own h1/hero copy).
- Reusable primitives over copy-pasted inline styles: convert the `.dc.html`
  inline `style="..."` attributes to Tailwind utility classes where there's a
  direct match; keep bespoke gradients/decorative effects as inline `style` or a
  small CSS class in `globals.css` (many such classes — `.am-stars`, `.am-lift`,
  `.am-spin`, etc. — already exist there, reuse them by class name instead of
  reimplementing).

## Design tokens (already in src/app/globals.css as CSS vars / Tailwind utilities)
- Background cream `#FBF7F0` (`bg-am-cream`)
- Deep plum `#2E003E` (`bg-am-plum-deep`), plum `#4A0A66` (`bg-am-plum`), purple
  `#6C1594` (`bg-am-purple` / `text-am-purple`)
- Maroon/accent-red `#921A11` (`text-am-maroon`), Gold CTA `#FCCE07`
  (`bg-am-gold`)
- Ink text `#1E1830` (`text-am-ink`), soft ink `#5C5470` (`text-am-ink-soft`),
  faint `#8E86A3`, lavender (on-dark body text) `#EADFF2` (`text-am-lavender`)
- Borders: cream border `#E8DFD0`, input border `#D9CFBE`
- Fonts: `'Marcellus', serif` for display headings (`font-serif-display`),
  `'Manrope', system-ui, sans-serif` for body (default), `'Tiro Devanagari
  Hindi', serif` for the Hindi tagline (`font-devanagari`). Load via
  `next/font/google` in `src/app/layout.tsx` (already wired — import the CSS
  variables, don't re-add the Google Fonts `<link>` tags from the .dc.html
  `<helmet>`).
- Buttons: pill-shaped (`rounded-full`), min-height 52px (44px for icon buttons),
  gold-on-maroon primary CTA, white-with-gold-border secondary CTA on dark
  sections, maroon-outline on light sections.
- Cards: `bg-white border border-am-cream-border rounded-[20px]` with the
  `.am-lift` hover class.

## Shared Nav/Footer (already extracted into src/components/Nav.tsx and
Footer.tsx — import these, do not recreate)
Nav: sticky header, logo `/images/f0424906cf2ed307d839fd952ac77981.png`, links to
Consultations `/consult`, Free Kundli `/kundli`, Free Calculators `/#free`,
Reports `/#reports`, Courses `/courses`, Horoscope `/horoscope`, Blogs `/#blog`,
About `/about`, WhatsApp `https://wa.me/919129237566`, CTA "Book a consultation"
→ `/consult`. Mobile drawer with the same links.
Footer: 4-column grid (About blurb, Explore links, Contact, Follow), bottom bar
with copyright + policy links to `/policies/privacy`, `/policies/refunds`,
`/policies/delivery`, `/policies/terms` (Policies.dc.html renders all four,
switched by footer links/query param — split into four routes that share one
`PoliciesContent` component with a `section` prop, OR one `/policies` page with
tab state — follow what Policies.dc.html actually does).

## Payments (Razorpay) — build once, reuse across all checkout pages
- `src/lib/razorpay.ts`: server-side Razorpay instance using
  `process.env.RAZORPAY_KEY_ID` / `process.env.RAZORPAY_KEY_SECRET`. Never import
  this from a client component.
- `src/app/api/razorpay/create-order/route.ts`: POST, validates amount/product
  server-side (never trust a client-sent amount — look it up from a fixed
  price table keyed by product id), creates a Razorpay order, returns
  `{orderId, amount, currency, keyId}` (public key id only).
- `src/app/api/razorpay/verify/route.ts`: POST, verifies
  `razorpay_order_id|razorpay_payment_id` HMAC SHA256 signature with
  `RAZORPAY_KEY_SECRET`, only then marks the order as paid (for now: log /
  return success — no DB yet per project scope) and triggers the
  confirmation email via Resend if configured.
- `src/app/api/razorpay/webhook/route.ts`: POST, verifies
  `x-razorpay-signature` against `RAZORPAY_WEBHOOK_SECRET` over the raw body,
  handles `payment.captured` / `payment.failed`.
- Client checkout pages load `https://checkout.razorpay.com/v1/checkout.js`
  dynamically, call `/api/razorpay/create-order`, open Razorpay checkout modal,
  on success call `/api/razorpay/verify`. Never expose
  `RAZORPAY_KEY_SECRET` to the client. Show a clear "payment pending
  verification" state until `/verify` confirms.

## What NOT to do
- Don't invent calculator formulas — port what `renderVals()` / the page's own
  JS actually computes. If a calculator's real backend is clearly a static
  data table embedded in the file (e.g. horoscope's `day`/`overviews` arrays,
  or the 4.5MB `project/kp-kundli.html`), port the data/logic as-is, don't
  replace it with a different algorithm.
- Don't skip a page or leave a route unimplemented. Every path in
  `project/canvas.json`'s `boards` must have a corresponding route.
- Don't add placeholder lorem ipsum — all real copy is in the .dc.html files;
  carry it over verbatim.
