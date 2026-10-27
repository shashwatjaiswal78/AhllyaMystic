export interface FaqItem {
  q: string;
  a: string;
}

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details
          key={item.q}
          className="bg-white border border-am-cream-border rounded-2xl px-6"
        >
          <summary className="flex justify-between items-center gap-4 min-h-[64px] font-bold">
            {item.q}
            <span className="faq-plus flex-none text-2xl text-am-maroon transition-transform" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="m-0 mb-6 text-am-ink-soft">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
