// The festive consultation offer. One end date is used by the offer page, the home page line and the server,
// so the offer cannot be bought after it ends even if someone keeps the link.
export const FESTIVE_OFFER_ENDS = Date.parse("2026-11-30T23:59:59+05:30"); // 30 November 2026, 11:59 pm IST

export const FESTIVE_PRODUCT_IDS: ReadonlySet<string> = new Set(["consult-landing-expert", "consult-landing-senior", "consult-landing-vastu"]);

export const festiveOfferEnded = (now: number = Date.now()) => now > FESTIVE_OFFER_ENDS;
