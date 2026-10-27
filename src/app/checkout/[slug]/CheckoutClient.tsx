"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import RazorpayCheckoutButton from "@/components/RazorpayCheckoutButton";
import { useSearchParams } from "next/navigation";

// Checkout product configurations - one page handles all checkout types
const CHECKOUT_CONFIGS: Record<string, {
  name: string; pages: string; mrp: string; price: number; saving: string; productId: string;
  hasQuestions: boolean; hasConsultUpsell: boolean;
}> = {
  kundli: { name: 'Personalised Kundli Report', pages: '32 pages', mrp: '₹1,998', price: 999, saving: '₹999', productId: 'report-kundli', hasQuestions: true, hasConsultUpsell: true },
  varshphal: { name: 'Varshphal 2027 Report', pages: '24 pages', mrp: '₹1,478', price: 739, saving: '₹739', productId: 'report-varshphal', hasQuestions: false, hasConsultUpsell: true },
  'lal-kitab': { name: 'Lal Kitab Report', pages: '28 pages', mrp: '₹1,998', price: 999, saving: '₹999', productId: 'report-lal-kitab', hasQuestions: true, hasConsultUpsell: true },
  milan: { name: 'Couple Kundli Milan', pages: '40 pages', mrp: '₹6,798', price: 3399, saving: '₹3,399', productId: 'report-milan', hasQuestions: false, hasConsultUpsell: true },
  numerology: { name: 'Name Numerology Report', pages: '16 pages', mrp: '₹798', price: 399, saving: '₹399', productId: 'report-name', hasQuestions: false, hasConsultUpsell: false },
};

const QUESTION_BANK = [
  { title: 'Career', items: ['When will I get a stable job or promotion?', 'Is a job or business better for me?', 'When can I change my job?'] },
  { title: 'Money', items: ['When will my finances improve?', 'Will I own a house?'] },
  { title: 'Marriage and family', items: ['When will I get married?', 'Love or arranged marriage?', 'What will my married life be like?', 'Will I have children?'] },
  { title: 'Health', items: ['What health areas should I take care of?'] },
  { title: 'Education and travel', items: ['Should I pursue further studies?', 'Will I settle or work abroad?'] },
];

const CALL_MODES = {
  man: { label: 'Maneswita · Expert', price: 2301 },
  san: { label: 'Ahalya Sangeeta · Senior Expert', price: 4001 },
};

function rs(x: number) { return '₹' + x.toLocaleString('en-IN'); }

export default function CheckoutClient({ params }: { params: Promise<{ slug: string }> }) {
  const searchParams = useSearchParams();
  const [slug, setSlug] = useState<string>('kundli');

  useEffect(() => {
    params.then(p => setSlug(p.slug));
  }, [params]);

  // Get product override from query string (for mobile-number which uses numerology checkout)
  const productOverride = searchParams.get('product') || '';

  const cfg = CHECKOUT_CONFIGS[slug] || CHECKOUT_CONFIGS.kundli;
  const productId = productOverride || cfg.productId;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [tob, setTob] = useState('');
  const [timeUnknown, setTimeUnknown] = useState(false);
  const [pob, setPob] = useState('');
  const [gender, setGender] = useState('Female');
  const [lang, setLang] = useState('English');
  const [picks, setPicks] = useState<string[]>([]);
  const [customQ, setCustomQ] = useState('');
  const [hasCall, setHasCall] = useState(false);
  const [callMode, setCallMode] = useState<'man' | 'san'>('man');

  const togglePick = (t: string) => {
    setPicks(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  };

  const extra = Math.max(0, picks.length - 2);
  const callPrice = hasCall ? CALL_MODES[callMode].price : 0;
  const subtotal = cfg.price + extra * 159 + callPrice;
  const bundleSaving = hasCall ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - bundleSaving;

  const customer = { name, phone, email };
  const formFilled = !!name && !!phone && !!dob && !!pob;

  return (
    <>
      <div className="bg-am-plum-deep">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <a href="/" aria-label="Ahllya Mystic home">
            <Image src="/images/f0424906cf2ed307d839fd952ac77981.png" alt="Ahllya Mystic" width={160} height={44} className="h-11 w-auto block" />
          </a>
          <a href="https://wa.me/919129237566" className="text-sm text-white/70 no-underline">
            Need help? <strong className="text-white">WhatsApp us</strong>
          </a>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-8 pb-20">
        <div className="mb-6">
          <a href={`/report/${slug}`} className="text-[14px] text-am-ink-soft no-underline flex items-center gap-1.5">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            Back to {cfg.name}
          </a>
        </div>
        <div className="grid gap-8 items-start am-order" style={{ gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)' }}>
          {/* FORM */}
          <form className="bg-white border border-am-cream-border rounded-[22px] p-[clamp(20px,4vw,36px)] outline outline-[#EFE6D8] outline-offset-[-9px] grid gap-8">
            <div>
              <p className="m-0 mb-5 font-serif-display text-[26px]">Your details</p>
              <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))' }}>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Full name <input type="text" required value={name} onChange={e => setName(e.target.value)}
                    placeholder="As on your Aadhaar" className="min-h-12 px-3.5 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9]" />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  WhatsApp number <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)}
                    placeholder="+91" className="min-h-12 px-3.5 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9]" />
                </label>
              </div>
              <label className="grid gap-1.5 text-sm font-semibold mt-4">
                Email address (for PDF delivery)
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com" className="min-h-12 px-3.5 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9]" />
              </label>
            </div>

            <div>
              <p className="m-0 mb-4 font-serif-display text-[22px]">Birth details</p>
              <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))' }}>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Date of birth <input type="date" required value={dob} onChange={e => setDob(e.target.value)}
                    className="min-h-12 px-3.5 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9]" />
                </label>
                <div className="grid gap-1.5">
                  <label className="text-sm font-semibold flex items-center justify-between gap-2">
                    Time of birth
                    <button type="button" onClick={() => setTimeUnknown(t => !t)}
                      className="text-xs font-semibold text-am-purple bg-transparent border-0 cursor-pointer p-0">
                      {timeUnknown ? 'I know my time' : "I don't know my time"}
                    </button>
                  </label>
                  {!timeUnknown && (
                    <input type="time" value={tob} onChange={e => setTob(e.target.value)}
                      className="min-h-12 px-3.5 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9]" />
                  )}
                  {timeUnknown && (
                    <div className="min-h-12 px-3.5 flex items-center border border-[#D9CEBD] rounded-xl bg-[#FFFDF9] text-[15px] text-am-ink-soft">Birth time not known</div>
                  )}
                </div>
              </div>
              <label className="grid gap-1.5 text-sm font-semibold mt-4">
                Place of birth
                <input type="text" required value={pob} onChange={e => setPob(e.target.value)}
                  placeholder="City, State, Country" className="min-h-12 px-3.5 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9]" />
              </label>
              <div className="mt-4">
                <span className="text-sm font-semibold block mb-2">Gender</span>
                <div className="flex flex-wrap gap-2">
                  {['Female', 'Male', 'Other'].map(g => (
                    <button key={g} type="button" onClick={() => setGender(g)}
                      className={`min-h-[40px] px-4 rounded-full text-sm cursor-pointer border ${gender === g ? 'border-am-purple bg-[#F3E8F7] text-am-purple font-bold' : 'border-[#D9CEBD] bg-white text-am-ink font-semibold'}`}>
                      {g}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-semibold block mb-2">Report language</span>
                <div className="flex flex-wrap gap-2">
                  {['English', 'Hindi'].map(l => (
                    <button key={l} type="button" onClick={() => setLang(l)}
                      className={`min-h-[40px] px-4 rounded-full text-sm cursor-pointer border ${lang === l ? 'border-am-purple bg-[#F3E8F7] text-am-purple font-bold' : 'border-[#D9CEBD] bg-white text-am-ink font-semibold'}`}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {cfg.hasQuestions && (
              <div>
                <div className="flex items-center justify-between gap-3 mb-1">
                  <p className="m-0 font-serif-display text-[22px]">Your two questions</p>
                  <span className="text-[13px] font-bold text-am-purple">{picks.length <= 2 ? `${picks.length} of 2 included` : `2 included + ${extra} extra`}</span>
                </div>
                <p className="m-0 mb-4 text-[14px] text-am-ink-soft">Choose from the bank below, or write your own. 2 included free, extra questions ₹159 each.</p>
                {QUESTION_BANK.map(group => (
                  <div key={group.title} className="mb-4">
                    <p className="m-0 mb-2 text-[13px] font-bold text-am-ink-soft uppercase tracking-wider">{group.title}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map(q => (
                        <button key={q} type="button" onClick={() => togglePick(q)}
                          className={`min-h-[40px] px-3.5 rounded-full text-sm cursor-pointer border ${picks.includes(q) ? 'border-am-purple bg-[#F3E8F7] text-am-purple font-bold' : 'border-[#D9CEBD] bg-white text-am-ink font-semibold'}`}>
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <label className="grid gap-1.5 text-sm font-semibold mt-2">
                  Or write your own question
                  <textarea rows={2} value={customQ} onChange={e => setCustomQ(e.target.value)}
                    placeholder="For example: should I move abroad for work in the next two years?"
                    className="p-3 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9] resize-y" />
                </label>
              </div>
            )}

            {cfg.hasConsultUpsell && (
              <div className="mt-2 border-t border-[#EFE6D8] pt-5">
                <div className="flex justify-between items-baseline gap-3 flex-wrap mb-3">
                  <p className="m-0 font-serif-display text-[22px]">Add a consultation call</p>
                  <span className="text-[11px] font-bold tracking-widest text-white bg-am-maroon px-2.5 py-1 rounded-full uppercase">Save 10% on order</span>
                </div>
                <p className="m-0 mb-3.5 text-[14px] text-am-ink-soft">Add a call with your report and get an extra 10% off the total bundle.</p>
                {!hasCall ? (
                  <button type="button" onClick={() => setHasCall(true)}
                    className="flex items-center gap-3.5 w-full text-left p-[16px_18px] rounded-2xl border-[1.5px] border-dashed border-[#C9B3D6] bg-white cursor-pointer font-inherit">
                    <span className="flex-none w-5.5 h-5.5 border-[1.5px] border-[#B9AEC6] rounded-[6px] box-border" />
                    <span className="flex-1">
                      <span className="block font-bold text-am-ink">Add a consultation call to my report</span>
                      <span className="block text-sm text-am-ink-soft">A 20 minute call on one area, from ₹2,301, then 10% off everything</span>
                    </span>
                  </button>
                ) : (
                  <div className="rounded-2xl border-[1.5px] border-am-purple bg-[#F3E8F7] p-[16px_18px] grid gap-3.5">
                    <button type="button" onClick={() => setHasCall(false)}
                      className="flex items-center gap-3.5 w-full text-left border-0 bg-transparent cursor-pointer font-inherit p-0">
                      <span className="flex-none flex items-center justify-center w-5.5 h-5.5 rounded-[6px] bg-am-purple text-white">
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10"/></svg>
                      </span>
                      <span className="flex-1 font-bold text-am-plum-deep">Consultation added: extra 10% off the total bundle</span>
                    </button>
                    <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px,100%), 1fr))' }}>
                      {(Object.entries(CALL_MODES) as ['man' | 'san', { label: string; price: number }][]).map(([k, m]) => (
                        <button key={k} type="button" onClick={() => setCallMode(k)}
                          className={`text-left p-[12px_14px] rounded-xl cursor-pointer font-inherit border ${callMode === k ? 'border-[1.5px] border-am-purple bg-white' : 'border-[#D9CEBD] bg-white'}`}>
                          <span className={`block font-bold ${callMode === k ? 'text-am-purple' : 'text-am-ink'}`}>{m.label}</span>
                          <span className="block text-sm text-am-ink-soft">{rs(m.price)}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </form>

          {/* ORDER SUMMARY */}
          <aside className="am-order-aside sticky top-6 grid gap-3.5">
            <div className="bg-white border border-am-cream-border rounded-[22px] p-6 outline outline-[#EFE6D8] outline-offset-[-9px]">
              <p className="m-0 mb-4 font-serif-display text-[23px]">Order summary</p>
              <div className="flex gap-3.5 items-center mb-4 pb-4 border-b border-[#EFE6D8]">
                <div aria-hidden="true" className="flex-none relative overflow-hidden w-16 h-20 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(160deg, #2E003E 0%, #6C1594 100%)' }}>
                  <Image src="/images/9f12ecbbc1351b2a79d2c5c2543824a3.png" alt="" width={48} height={48} />
                </div>
                <div className="min-w-0">
                  <p className="m-0 font-bold">{cfg.name}</p>
                  <p className="m-0 mt-0.5 text-[13px] text-am-ink-soft">{cfg.pages} · {lang} · PDF on email and WhatsApp</p>
                </div>
              </div>
              <div className="flex justify-between gap-3 text-[15px] mb-2.5"><span>Report price</span><span>{cfg.mrp}</span></div>
              <div className="flex justify-between gap-3 text-[15px] text-am-purple font-semibold mb-2.5"><span>Discount (50% off)</span><span>−{cfg.saving}</span></div>
              {cfg.hasQuestions && <div className="flex justify-between gap-3 text-[15px] mb-2.5"><span>2 personal questions</span><span>Included</span></div>}
              {extra > 0 && <div className="flex justify-between gap-3 text-[15px] mb-2.5"><span>Extra questions ({extra} × ₹159)</span><span>{rs(extra * 159)}</span></div>}
              {hasCall && (
                <>
                  <div className="flex justify-between gap-3 text-[15px] mb-2.5"><span>Call with {CALL_MODES[callMode].label.split(' · ')[0]} (20 min)</span><span>{rs(CALL_MODES[callMode].price)}</span></div>
                  <div className="flex justify-between gap-3 text-[15px] text-am-maroon font-bold mb-4"><span>Bundle discount (10%)</span><span>−{rs(bundleSaving)}</span></div>
                </>
              )}
              <div className="h-px bg-[#EFE6D8] mb-4" />
              <div className="flex justify-between items-baseline gap-3 mb-5">
                <span className="font-bold">Total</span>
                <span className="font-serif-display text-[32px]">{rs(total)}</span>
              </div>
              <RazorpayCheckoutButton
                productId={productId}
                customer={customer}
                label={`Pay ${rs(total)} securely`}
                disabled={!formFilled}
                className="w-full flex items-center justify-center gap-2 min-h-[54px] rounded-full bg-am-gold text-am-maroon font-bold text-base disabled:opacity-60 disabled:cursor-not-allowed"
              />
              <p className="m-0 mt-3 text-center text-[13px] text-am-ink-soft">UPI, cards and net banking via Razorpay</p>
              <p className="m-0 mt-1.5 text-center text-[10.5px] text-am-ink-faint">Payments are non-refundable, except for delays from our side.</p>
            </div>
            <div className="bg-[#F3E8F7] rounded-[18px] p-[18px_20px] grid gap-2.5 text-sm text-[#3D0752]">
              {[
                'We call you within 24 hours of payment to confirm your name and birth details, so your analysis is accurate.',
                `Your report arrives in ${cfg.pages.includes('10') ? '3 to 5' : '5 to 7'} working days.`,
                'Your birth details stay private and are never shared.',
              ].map((t, i) => (
                <p key={i} className="m-0 flex gap-2.5">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6C1594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-none mt-0.5"><path d="M5 12l5 5 9-10"/></svg>
                  {t}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* CHECKOUT FOOTER */}
      <footer className="border-t border-am-cream-border bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-sm text-am-ink-soft">
          <span>Need help? <a href="https://wa.me/919129237566" className="font-bold text-am-ink no-underline">WhatsApp us at +91 91292 37566</a></span>
          <span className="flex flex-wrap gap-4">
            <a href="/policies/privacy" className="text-am-ink-soft no-underline">Privacy policy</a>
            <a href="/policies/refunds" className="text-am-ink-soft no-underline">Refund policy</a>
            <a href="/policies/delivery" className="text-am-ink-soft no-underline">Delivery policy</a>
            <a href="/policies/terms" className="text-am-ink-soft no-underline">Terms</a>
            <span>© 2026 Ahllya Mystic</span>
          </span>
        </div>
      </footer>
    </>
  );
}
