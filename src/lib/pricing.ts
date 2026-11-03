import { PRODUCTS, isValidProductId, type ProductId } from "./products";

// Add-ons offered on the report checkouts. Totals are always rebuilt here from these
// tables; the amount a browser shows is never trusted.
const EXTRA_QUESTION_RUPEES = 159;
const MAX_EXTRA_QUESTIONS = 10;
const CALLS = {
  man: { rupees: 2301, label: "20 min call with Maneswita" },
  san: { rupees: 4001, label: "20 min call with Ahalya Sangeeta" },
} as const;
const CALL_BUNDLE_DISCOUNT = 0.1;

const QUESTION_PRODUCTS: ReadonlySet<ProductId> = new Set(["report-kundli", "report-lal-kitab"]);
const CALL_PRODUCTS: ReadonlySet<ProductId> = new Set(["report-kundli", "report-lal-kitab", "report-varshphal"]);

export interface OrderRequest {
  productId?: unknown;
  extraQuestions?: unknown;
  call?: unknown;
}

export type PricedOrder =
  | { ok: true; productId: ProductId; name: string; amountPaise: number; extraQuestions: number; call: keyof typeof CALLS | null }
  | { ok: false; error: string };

export function priceOrder(req: OrderRequest): PricedOrder {
  const { productId } = req;
  if (typeof productId !== "string" || !isValidProductId(productId)) {
    return { ok: false, error: "Invalid product." };
  }

  const extra = req.extraQuestions ?? 0;
  if (typeof extra !== "number" || !Number.isInteger(extra) || extra < 0 || extra > MAX_EXTRA_QUESTIONS) {
    return { ok: false, error: "Invalid number of questions." };
  }
  if (extra > 0 && !QUESTION_PRODUCTS.has(productId)) {
    return { ok: false, error: "Extra questions are not available for this product." };
  }

  const call = req.call === "man" || req.call === "san" ? req.call : null;
  if (req.call != null && call === null) {
    return { ok: false, error: "Invalid call option." };
  }
  if (call && !CALL_PRODUCTS.has(productId)) {
    return { ok: false, error: "A call cannot be added to this product." };
  }

  const product = PRODUCTS[productId];
  const subtotal = product.amountPaise / 100 + extra * EXTRA_QUESTION_RUPEES + (call ? CALLS[call].rupees : 0);
  const saving = call ? Math.round(subtotal * CALL_BUNDLE_DISCOUNT) : 0;

  const parts: string[] = [product.name];
  if (extra) parts.push(`${extra} extra question${extra > 1 ? "s" : ""}`);
  if (call) parts.push(CALLS[call].label);

  return { ok: true, productId, name: parts.join(" + "), amountPaise: (subtotal - saving) * 100, extraQuestions: extra, call };
}
