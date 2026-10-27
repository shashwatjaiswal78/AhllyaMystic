import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { REPORTS } from "@/lib/reportData";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = REPORTS[slug];
  if (!r) return {};
  return { title: r.name, description: r.lede };
}

export async function generateStaticParams() {
  return Object.keys(REPORTS).map(slug => ({ slug }));
}

const QUESTION_BANK = [
  { title: 'Career', items: ['When will I get a stable job or promotion?', 'Is a job or business better for me?', 'When can I change my job?'] },
  { title: 'Money', items: ['When will my finances improve?', 'Will I own a house?'] },
  { title: 'Marriage and family', items: ['When will I get married?', 'Love or arranged marriage?', 'What will my married life be like?', 'Will I have children?'] },
  { title: 'Health', items: ['What health areas should I take care of?'] },
  { title: 'Education and travel', items: ['Should I pursue further studies?', 'Will I settle or work abroad?'] },
];

export default async function ReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = REPORTS[slug];
  if (!r) notFound();

  const AUDIENCES = [
    { icon: 'M3 9l9-4 9 4-9 4-9-4zM7 11v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4', title: 'Students', text: 'Unsure what to study or which career suits you best.' },
    { icon: 'M4 8h16v11H4zM9 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M4 13h16', title: 'Job seekers', text: 'Looking for stability, a better role or success in competitive exams.' },
    { icon: 'M4 19h16M6 15l4-4 3 3 5-6M15 8h3v3', title: 'Business owners', text: 'Planning the right time to invest, expand or change direction.' },
    { icon: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z', title: 'Couples', text: 'Seeking clarity on marriage timing or harmony in your relationship.' },
    { icon: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M17 11a2.5 2.5 0 1 0 0-5M21 20a5 5 0 0 0-4-4.9', title: 'Parents', text: "Wanting to understand your child's nature, talents and path." },
    { icon: 'M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z', title: 'Spiritual seekers', text: 'Exploring your life purpose, karmic lessons and inner growth.' },
  ];

  const STEPS = [
    { num: '1', title: 'Share your details', text: 'Enter your birth details, then pay securely.' },
    { num: '2', title: 'We confirm', text: 'We call you within 24 hours to confirm your name and birth details.' },
    { num: '3', title: 'We study your chart', text: 'Our experts prepare your report personally.' },
    { num: '4', title: 'Receive your report', text: `Your PDF arrives on email and WhatsApp in ${r.deliveryDays} working days.` },
  ];

  return (
    <>
      <Nav />

      {/* HERO */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(120deg, #2E003E 0%, #4A0A66 55%, #6C1594 100%)' }}>
        <div className="am-stars" aria-hidden="true" />
        <div className="am-stars2" aria-hidden="true" />
        <div className="max-w-[1200px] mx-auto px-6 py-16 relative">
          <nav aria-label="Breadcrumb" className="text-sm text-am-lavender/70 mb-6">
            <a href="/" className="text-am-lavender/70 no-underline">Home</a>
            <span aria-hidden="true" className="mx-2">/</span>
            <a href="/#reports" className="text-am-lavender/70 no-underline">Reports</a>
            <span aria-hidden="true" className="mx-2">/</span>
            <span className="text-white">{r.name}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex-1 min-w-0" style={{ flexBasis: '400px' }}>
              {r.tag && <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-am-gold text-am-maroon">{r.tag}</span>}
              <p className="m-0 mb-2 text-[13px] tracking-[0.14em] uppercase text-am-gold font-bold">Report</p>
              <h1 className="m-0 mb-3 font-serif-display font-normal text-[clamp(34px,4vw,54px)] leading-[1.1] text-white">{r.name}</h1>
              <p className="m-0 mb-1 font-devanagari text-[17px] text-am-lavender">{r.hindi}</p>
              <p className="m-0 mt-4 mb-8 text-[17px] text-am-lavender leading-[1.6]">{r.lede}</p>
              <div className="flex items-center flex-wrap gap-4">
                <span className="flex items-baseline gap-2">
                  <span className="text-base text-am-lavender line-through">{r.mrp}</span>
                  <span className="font-serif-display text-[38px] leading-none text-white">{r.price}</span>
                </span>
                <a href={`/checkout/${r.checkoutSlug}?product=${r.productId}`}
                  className="inline-flex items-center justify-center min-h-[52px] min-w-[180px] px-7 rounded-full bg-am-gold text-am-maroon font-bold text-base no-underline">
                  Order now
                </a>
              </div>
              <div className="flex flex-wrap gap-5 mt-6">
                {[
                  { icon: 'M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', text: `Ready in ${r.deliveryDays} working days` },
                  { icon: 'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z', text: 'PDF on email and WhatsApp' },
                  { icon: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0', text: 'Prepared by Ahalya Sangeeta and Maneswita' },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-[14px] text-am-lavender">
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-none">
                      <path d={f.icon} />
                    </svg>
                    {f.text}
                  </div>
                ))}
              </div>
            </div>
            <div aria-hidden="true" className="flex-none hidden lg:block">
              <Image src="/images/9f12ecbbc1351b2a79d2c5c2543824a3.png" alt="" width={320} height={320} className="am-float opacity-90" />
            </div>
          </div>
        </div>
      </div>

      {/* WHAT'S IN THE REPORT */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="text-center mb-11">
          <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">What's inside</p>
          <h2 className="m-0 font-serif-display font-normal text-[clamp(30px,3.4vw,42px)] leading-[1.15]">Everything in your report</h2>
        </div>
        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))' }}>
          {r.chapters.map(c => (
            <div key={c.num} className="bg-white border border-am-cream-border rounded-[18px] p-[22px_24px] outline outline-[#EFE6D8] outline-offset-[-8px]">
              <div className="flex items-center justify-center w-[44px] h-[44px] rounded-full mb-4 text-white font-serif-display text-xl"
                style={{ background: 'linear-gradient(135deg, #2E003E, #6C1594)' }}>
                {c.num}
              </div>
              <p className="m-0 mb-1.5 font-serif-display text-[20px]">{c.title}</p>
              <p className="m-0 text-[14px] text-am-ink-soft leading-[1.55]">{c.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="text-center mb-11">
          <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">How it works</p>
          <h2 className="m-0 font-serif-display font-normal text-[clamp(30px,3.6vw,44px)] leading-[1.15]">From your details to your report.</h2>
        </div>
        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(230px, 100%), 1fr))' }}>
          {STEPS.map(s => (
            <div key={s.num} className="relative bg-white border border-am-cream-border rounded-[18px] p-[26px_22px] outline outline-[#EFE6D8] outline-offset-[-8px]">
              <span className="flex items-center justify-center w-11 h-11 rounded-full mb-4 text-white font-serif-display text-xl"
                style={{ background: 'linear-gradient(135deg, #2E003E, #6C1594)' }}>
                {s.num}
              </span>
              <p className="m-0 mb-1.5 font-serif-display text-[21px]">{s.title}</p>
              <p className="m-0 text-[15px] text-am-ink-soft">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ORDER CTA */}
      <div className="max-w-[1200px] mx-auto px-6 pb-24">
        <div className="flex flex-wrap items-center justify-between gap-5 bg-white border border-am-cream-border rounded-[22px] p-[clamp(20px,4vw,32px)] outline outline-[#EFE6D8] outline-offset-[-9px]">
          <div className="flex-1 min-w-0" style={{ flexBasis: '420px' }}>
            <p className="m-0 mb-1.5 font-serif-display text-[clamp(24px,2.6vw,32px)] leading-[1.2]">Ready to order your report?</p>
            <p className="m-0 text-base text-am-ink-soft">It takes about two minutes: your birth details and a secure payment.</p>
          </div>
          <div className="flex items-center flex-wrap gap-4">
            <span className="flex items-baseline gap-2">
              <span className="text-base text-am-ink-soft line-through">{r.mrp}</span>
              <span className="font-serif-display text-[34px] leading-none">{r.price}</span>
            </span>
            <a href={`/checkout/${r.checkoutSlug}?product=${r.productId}`}
              className="inline-flex items-center justify-center min-h-[54px] min-w-[200px] px-7 rounded-full bg-am-gold text-am-maroon font-bold text-base no-underline">
              Order now
            </a>
          </div>
        </div>
      </div>

      {/* WHY HAND-PREPARED */}
      <div className="relative overflow-hidden text-white" style={{ background: 'linear-gradient(120deg, #2E003E 0%, #4A0A66 55%, #6C1594 100%)' }}>
        <div className="am-stars" aria-hidden="true" />
        <div className="am-stars2" aria-hidden="true" />
        <div className="max-w-[1200px] mx-auto px-6 py-24 relative">
          <div className="mb-12">
            <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-gold font-bold">Why it takes us {r.deliveryDays} days</p>
            <h2 className="m-0 font-serif-display font-normal text-[clamp(28px,3vw,38px)] leading-[1.25] text-white">
              <span className="whitespace-nowrap">Instant reports are generated by software.</span><br />
              <span className="whitespace-nowrap">Ours are prepared by experts who carefully study your chart.</span>
            </h2>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))' }}>
            {[
              { title: 'Read, not generated', text: 'Every chart is analysed house by house before a single line is written.' },
              { title: 'Personalised remedies', text: 'Practical, easy to follow remedies that fit your everyday life.' },
              { title: 'Support after your report', text: "Unsure about something? Send us one or two questions and we'll clarify." },
            ].map((i, k) => (
              <div key={k} className="border-t border-white/40 pt-5">
                <p className="m-0 mb-2 font-serif-display text-[22px] text-white">{i.title}</p>
                <p className="m-0 text-[15px] text-am-lavender">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="relative overflow-hidden bg-[#FFFDF9] border-t border-am-cream-border">
        <div className="max-w-[860px] mx-auto px-6 py-20 text-center">
          <p className="m-0 mb-4 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">From a client</p>
          <blockquote className="m-0 font-serif-display text-[clamp(22px,2.4vw,30px)] leading-[1.45] text-am-ink">
            "The Kundli report was far more detailed than I expected, and you can tell someone actually studied my chart. The remedies are practical and easy to follow. Highly recommend."
          </blockquote>
          <p className="m-0 mt-5 text-[15px]"><strong>Gaurav Jha</strong><span className="text-am-ink-soft"> · Lucknow</span></p>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-am-cream border-t border-am-cream-border">
        <div className="max-w-[860px] mx-auto px-6 py-20">
          <p className="m-0 mb-2.5 text-center text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">Questions</p>
          <h2 className="m-0 mb-10 text-center font-serif-display font-normal text-[clamp(32px,3.6vw,44px)] leading-[1.15]">About this report</h2>
          <div className="grid gap-3">
            {r.faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-am-cream-border rounded-2xl px-6">
                <summary className="flex justify-between items-center gap-4 min-h-16 font-bold">
                  {faq.q}
                  <span className="faq-plus flex-none text-2xl text-am-maroon" style={{ transition: 'transform 0.2s' }}>+</span>
                </summary>
                <p className="m-0 mb-5 text-am-ink-soft">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* OTHER REPORTS */}
      <div className="max-w-[1200px] mx-auto px-6 pb-24">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-7 pt-16">
          <div>
            <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">More reports</p>
            <h2 className="m-0 font-serif-display font-normal text-[clamp(28px,3vw,38px)] leading-[1.15]">Often ordered together</h2>
          </div>
          <a href="/#reports" className="font-bold no-underline text-am-purple">See all reports →</a>
        </div>
        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))' }}>
          {r.others.map(o => (
            <div key={o.slug} className="am-lift bg-white border border-am-cream-border rounded-[20px] p-7 flex flex-col gap-3 outline outline-[#EFE6D8] outline-offset-[-9px]">
              <p className="m-0 font-serif-display text-[23px]">{o.name}</p>
              <p className="m-0 text-[15px] text-am-ink-soft">{o.text}</p>
              <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                <span className="flex items-baseline gap-1.5">
                  <span className="text-[15px] text-am-ink-soft line-through">{o.mrp}</span>
                  <span className="font-serif-display text-[26px]">{o.price}</span>
                </span>
                <a href={`/report/${o.slug}`} className="inline-flex items-center min-h-11 px-5 rounded-full border-[1.5px] border-am-purple text-am-purple font-bold text-[15px] no-underline">
                  View report
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="max-w-[1200px] mx-auto px-6 pb-24">
        <div className="relative overflow-hidden text-white rounded-[28px]" style={{ background: 'linear-gradient(120deg, #2E003E 0%, #6C1594 100%)' }}>
          <div className="am-stars" aria-hidden="true" />
          <div className="relative p-[clamp(32px,5vw,64px)] flex flex-wrap items-center justify-between gap-7">
            <div className="flex-1 min-w-0">
              <h2 className="m-0 mb-3 font-serif-display font-normal text-[clamp(26px,2.8vw,38px)] leading-[1.2] text-white">
                Let the stars guide you, the numbers support you,<br className="hidden lg:block" /> and your name carry you toward your true path.
              </h2>
              <p className="m-0 text-am-lavender">Not sure where to start? Message us on WhatsApp and we will point you to the right reading.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/consult" className="inline-flex items-center justify-center min-h-[52px] min-w-[240px] px-7 rounded-full bg-am-gold text-am-maroon font-bold no-underline">Book a consultation</a>
              <a href="https://wa.me/919129237566" className="inline-flex items-center justify-center gap-2 min-h-[52px] min-w-[240px] px-7 rounded-full border border-white/45 text-white font-bold no-underline">
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" /></svg>
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
