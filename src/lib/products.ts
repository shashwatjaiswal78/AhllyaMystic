// Server-side source of truth for product pricing.
// Never trust a client-supplied amount — always look it up here by productId.
export const PRODUCTS = {
  "report-kundli": { name: "Personalised Kundli Report", amountPaise: 99900 },
  "report-varshphal": { name: "Varshphal 2027 Report", amountPaise: 73900 },
  "report-lal-kitab": { name: "Lal Kitab Report", amountPaise: 99900 },
  "report-milan": { name: "Couple Kundli Milan Report", amountPaise: 339900 },
  "report-milan-call": { name: "Couple Kundli Milan Report and Consultation", amountPaise: 619900 },
  "num-n1": { name: "Name Numerology Report", amountPaise: 39900 },
  "num-n2": { name: "Name Consultancy and Report", amountPaise: 149900 },
  "num-n3": { name: "Name Analysis and Correction", amountPaise: 519900 },
  "num-n4": { name: "Premium Name Correction", amountPaise: 2599900 },
  "num-b1": { name: "Baby Name Consultancy and Report", amountPaise: 149900 },
  "num-b2": { name: "New Born Baby Name Design", amountPaise: 519900 },
  "num-b3": { name: "Baby Name Analysis and Correction", amountPaise: 519900 },
  "num-b4": { name: "Premium Baby Name Correction", amountPaise: 2599900 },
  "num-z1": { name: "Business Name Consultancy and Report", amountPaise: 519900 },
  "num-z2": { name: "Business Name Analysis and Correction", amountPaise: 2599900 },
  "num-m1": { name: "Mobile Number Check", amountPaise: 24900 },
  "num-m2": { name: "Mobile Number Report", amountPaise: 49900 },
  "num-m3": { name: "Advance Report and Consultancy", amountPaise: 149900 },
  "report-name": { name: "Name Numerology Report", amountPaise: 39900 },
  "report-mobile": { name: "Mobile Number Report", amountPaise: 24900 },
  "consult-one-area": { name: "Consultation — One area (Expert)", amountPaise: 230100 },
  "consult-two-areas": { name: "Consultation — Two areas (Expert)", amountPaise: 410100 },
  "consult-three-areas": { name: "Consultation — Three areas (Expert)", amountPaise: 500100 },
  "consult-complete": { name: "Consultation — Complete (Expert)", amountPaise: 720100 },
  "consult-senior-one-area": { name: "Consultation — One area (Senior Expert)", amountPaise: 400100 },
  "consult-senior-two-areas": { name: "Consultation — Two areas (Senior Expert)", amountPaise: 630100 },
  "consult-senior-three-areas": { name: "Consultation — Three areas (Senior Expert)", amountPaise: 760100 },
  "consult-senior-complete": { name: "Consultation — Complete (Senior Expert)", amountPaise: 1111100 },
  "consult-landing-expert": { name: "Consultation with Maneswita — Festive offer", amountPaise: 310100 },
  "consult-landing-senior": { name: "Consultation with Ahalya Sangeeta — Festive offer", amountPaise: 510000 },
  "consult-landing-vastu": { name: "Vastu consultation — Festive offer", amountPaise: 330000 },
  "masterclass-99": { name: "Manifestation Masterclass — commitment fee", amountPaise: 9900 },
  // Consult + report bundles (report at 10% off = ₹899)
  "consult-one-area+report": { name: "Consultation One area + Report Bundle (Expert)", amountPaise: 320000 },
  "consult-two-areas+report": { name: "Consultation Two areas + Report Bundle (Expert)", amountPaise: 500000 },
  "consult-three-areas+report": { name: "Consultation Three areas + Report Bundle (Expert)", amountPaise: 590000 },
  "consult-complete+report": { name: "Consultation Complete + Report Bundle (Expert)", amountPaise: 810000 },
  "consult-senior-one-area+report": { name: "Consultation One area + Report Bundle (Senior Expert)", amountPaise: 490000 },
  "consult-senior-two-areas+report": { name: "Consultation Two areas + Report Bundle (Senior Expert)", amountPaise: 720000 },
  "consult-senior-three-areas+report": { name: "Consultation Three areas + Report Bundle (Senior Expert)", amountPaise: 850000 },
  "consult-senior-complete+report": { name: "Consultation Complete + Report Bundle (Senior Expert)", amountPaise: 1201000 },
} as const;

export type ProductId = keyof typeof PRODUCTS;

export function isValidProductId(id: string): id is ProductId {
  return Object.prototype.hasOwnProperty.call(PRODUCTS, id);
}
