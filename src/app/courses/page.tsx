"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const COURSES = [
  { hindi: 'अंक शास्त्र', title: 'Numerology Foundation', desc: 'Birth, destiny and name numbers from the ground up, so you can read any name or date yourself.', learns: ['Your core numbers', 'Name numbers and corrections', 'Lucky dates and mobile numbers'] },
  { hindi: 'ज्योतिष', title: 'Astrology Foundation', desc: 'Houses, planets and signs, step by step, until you can read a chart on your own.', learns: ['The 12 houses and 9 planets', 'Signs, nakshatras and dashas', 'Reading a chart from start to finish'] },
  { hindi: 'विवाह', title: 'Decoding Marriage and Compatibility', desc: 'How to read compatibility, timing and doshas for marriage.', learns: ['Kundli Milan beyond the score', 'Manglik and other doshas', 'Timing of marriage'] },
];

const TOPICS = ['Numerology', 'Astrology', 'Marriage and compatibility', 'Manifestation'];

const FAQS = [
  { q: 'When do the courses start?', a: 'Our Numerology, Astrology and Marriage courses are being prepared now. Leave your details below and we will message you first when enrolment opens.' },
  { q: 'Do I need any prior knowledge?', a: 'No. Our courses are made for beginners and enthusiasts, and go step by step.' },
  { q: 'Who teaches the courses?', a: 'Ahalya Sangeeta, founder of Ahllya Mystic.' },
  { q: 'Are the courses live or recorded?', a: 'The format for each course will be shared when enrolment opens. Leave your details and we will tell you first.' },
];

export default function CoursesPage() {
  const [picks, setPicks] = useState<string[]>(['Numerology', 'Manifestation']);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const toggle = (t: string) => setPicks(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);

  const handleNotify = async () => {
    if (!name || !phone) return;
    setSending(true);
    try {
      await fetch('/api/courses/interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, topics: picks }),
      });
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Nav />
      <div className="bg-[#FBF7F0]">
        {/* Announcement bar */}
        <div className="bg-white border-b border-[#EADFD3] text-center text-[14px] font-semibold text-am-maroon py-2.5 px-4">
          <a href="/masterclass" className="text-am-maroon no-underline">Live 2-day Manifestation Masterclass. Dates announced soon. Register for ₹99 →</a>
        </div>

        {/* Hero */}
        <div id="courses" className="max-w-[1200px] mx-auto px-6 py-[22px] pb-14">
          <nav aria-label="Breadcrumb" className="text-[14px] text-am-ink-soft mb-9">
            <a href="/" className="text-am-ink-soft no-underline">Home</a>
            <span aria-hidden="true" className="mx-2">/</span>
            <span className="text-am-ink font-semibold">Courses</span>
          </nav>
          <div className="mb-8">
            <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">Our courses</p>
            <h1 className="m-0 mb-3.5 font-serif-display font-normal text-[clamp(34px,4.2vw,52px)] leading-[1.1]">Why wonder about life when you can learn to read it?</h1>
            <p className="m-0 text-[16px] text-am-ink-soft max-w-[680px]">Online courses in astrology and numerology, taught step by step for beginners and enthusiasts, by Ahalya Sangeeta. Enrolment opens soon.</p>
          </div>
          <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))' }}>
            {COURSES.map(c => (
              <div key={c.title} className="am-lift flex flex-col overflow-hidden bg-white border border-[#E8DFD0] rounded-[22px] outline outline-1 outline-[#EFE6D8] outline-offset-[-9px]">
                <div className="w-full aspect-video bg-gradient-to-br from-am-plum-deep to-am-purple flex items-center justify-center" aria-hidden="true">
                  <Image src="/images/9f12ecbbc1351b2a79d2c5c2543824a3.png" alt="" width={80} height={80} className="opacity-40" />
                </div>
                <div className="flex flex-col flex-1 p-[24px_26px_26px]">
                  <div className="flex items-center justify-between gap-2.5 mb-3.5">
                    <span className="font-serif-devanagari text-[20px] text-am-maroon">{c.hindi}</span>
                    <span className="text-[12px] font-bold tracking-[0.06em] uppercase text-am-purple bg-[#F3E8F7] px-2.5 py-1 rounded-full">Coming soon</span>
                  </div>
                  <p className="m-0 mb-2 font-serif-display text-[25px] leading-[1.2]">{c.title}</p>
                  <p className="m-0 mb-4 text-[15px] text-am-ink-soft leading-[1.6]">{c.desc}</p>
                  <div className="flex-1 border-t border-[#EFE6D8] pt-3.5 mb-4.5">
                    <p className="m-0 mb-2.5 text-[12px] tracking-[0.1em] uppercase font-bold text-am-ink-faint">You will learn</p>
                    {c.learns.map(l => (
                      <p key={l} className="m-0 mb-2 flex gap-2.5 text-[15px]">
                        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6C1594" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="flex-none mt-0.5"><path d="M5 12l5 5 9-10" /></svg>
                        {l}
                      </p>
                    ))}
                  </div>
                  <p className="m-0 mb-3.5 text-[13px] text-am-ink-soft">Online · With Ahalya Sangeeta · For beginners</p>
                  <a href="#notify" className="flex items-center justify-center min-h-[50px] rounded-full border-[1.5px] border-am-purple text-am-purple font-bold no-underline">Notify me</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Masterclass promo */}
        <div className="max-w-[1200px] mx-auto px-6 py-14 pt-14">
          <div className="relative overflow-hidden text-white rounded-[28px] p-[clamp(24px,4vw,44px)] flex flex-wrap items-center gap-7 gap-y-11" style={{ background: 'linear-gradient(120deg, #2E003E 0%, #6C1594 100%)' }}>
            <div className="am-stars absolute inset-0 pointer-events-none" aria-hidden="true" />
            <div className="relative flex-1 basis-[360px] min-w-0 rounded-[18px] overflow-hidden aspect-video flex items-center justify-center bg-white/10">
              <Image src="/images/9f12ecbbc1351b2a79d2c5c2543824a3.png" alt="Manifestation Masterclass" width={120} height={120} className="opacity-60" />
            </div>
            <div className="relative flex-1 basis-[360px] min-w-0">
              <p className="m-0 mb-3"><span className="text-[12px] font-bold tracking-[0.06em] uppercase text-am-maroon bg-am-gold px-3 py-1 rounded-full">Live 2-day masterclass</span></p>
              <p className="m-0 mb-2.5 font-serif-display text-[clamp(26px,2.8vw,36px)] leading-[1.2]">Manifestation Masterclass</p>
              <p className="m-0 mb-5 text-[#EADFF2]">Your personal manifestation blueprint, in two live evenings with Maneswita. 7 pm onwards, next dates announced soon.</p>
              <div className="flex flex-wrap items-center gap-3.5">
                <span className="flex items-baseline gap-2">
                  <span className="text-[16px] text-[#CDB8DA] line-through">₹799</span>
                  <span className="font-serif-display text-[34px] leading-none">₹99</span>
                </span>
                <a href="/masterclass" className="inline-flex items-center justify-center min-h-[52px] px-7 rounded-full bg-am-gold text-am-maroon font-bold no-underline">See the masterclass</a>
              </div>
            </div>
          </div>
        </div>

        {/* Notify me */}
        <div id="notify" className="max-w-[1200px] mx-auto px-6 pb-10">
          <div className="bg-white border border-[#E8DFD0] rounded-[22px] outline outline-1 outline-[#EFE6D8] outline-offset-[-9px] p-[clamp(24px,4vw,40px)] grid gap-7" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', alignItems: 'center' }}>
            <div>
              <p className="m-0 mb-2 font-serif-display text-[clamp(26px,2.8vw,34px)] leading-[1.2]">Be the first to know.</p>
              <p className="m-0 text-[16px] text-am-ink-soft">Tell us what you would like to learn. We will message you on WhatsApp when enrolment opens, and when the next masterclass dates are out.</p>
            </div>
            {submitted ? (
              <div className="flex items-center gap-3 p-5 rounded-2xl bg-[#F3E8F7] text-am-purple font-semibold">
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg>
                We will notify you on WhatsApp!
              </div>
            ) : (
              <div className="grid gap-3.5">
                <div className="grid gap-2">
                  <span className="text-[14px] font-semibold">I am interested in</span>
                  <div className="flex flex-wrap gap-2">
                    {TOPICS.map(t => (
                      <button key={t} type="button" onClick={() => toggle(t)} aria-pressed={picks.includes(t)}
                        className={`min-h-[44px] px-4 rounded-full text-[15px] cursor-pointer border font-inherit ${picks.includes(t) ? 'border-[1.5px] border-am-purple bg-[#F3E8F7] text-am-purple font-bold' : 'border border-[#D9CEBD] bg-white text-am-ink font-semibold'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))' }}>
                  <label className="grid gap-1.5 text-[14px] font-semibold">
                    Name
                    <input type="text" placeholder="Full name" value={name} onChange={e => setName(e.target.value)}
                      className="min-h-[48px] px-3.5 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9]" />
                  </label>
                  <label className="grid gap-1.5 text-[14px] font-semibold">
                    WhatsApp number
                    <input type="tel" placeholder="+91" value={phone} onChange={e => setPhone(e.target.value)}
                      className="min-h-[48px] px-3.5 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9]" />
                  </label>
                </div>
                <button type="button" onClick={handleNotify} disabled={!name || !phone || sending}
                  className="inline-flex items-center justify-center gap-2 min-h-[52px] rounded-full bg-am-gold text-am-maroon font-bold cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed border-0">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2z" /></svg>
                  {sending ? 'Sending…' : 'Notify me on WhatsApp'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-[860px] mx-auto px-6 py-[72px] pb-24">
          <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold text-center">Questions</p>
          <h2 className="m-0 mb-7 font-serif-display font-normal text-[clamp(30px,3.4vw,42px)] leading-[1.15] text-center">About our courses</h2>
          <div className="grid gap-2.5">
            {FAQS.map(f => (
              <details key={f.q} className="bg-white border border-[#E8DFD0] rounded-2xl px-5">
                <summary className="flex items-center justify-between gap-4 min-h-[60px] font-bold cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="flex-none text-[22px] text-am-maroon transition-transform duration-200 [[open]_&]:rotate-45">+</span>
                </summary>
                <p className="m-0 mb-4.5 text-am-ink-soft leading-[1.65]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-[1200px] mx-auto px-6 pb-24">
          <div className="relative overflow-hidden text-white rounded-[28px]" style={{ background: 'linear-gradient(120deg, #2E003E 0%, #6C1594 100%)' }}>
            <div className="am-stars absolute inset-0 pointer-events-none" aria-hidden="true" />
            <Image src="/images/9f12ecbbc1351b2a79d2c5c2543824a3.png" alt="" aria-hidden width={460} height={460} className="am-spin absolute -right-40 -top-[150px] opacity-20 pointer-events-none" />
            <div className="relative p-[clamp(32px,5vw,64px)] flex flex-wrap items-center justify-between gap-7">
              <div className="flex-1 basis-full min-w-0">
                <h2 className="m-0 mb-3 font-serif-display font-normal text-[clamp(26px,2.8vw,38px)] leading-[1.2] text-white">Let the stars guide you, the numbers support you,<br className="hidden lg:block" /> and your name carry you toward your true path.</h2>
                <p className="m-0 text-[#EADFF2]">Not sure where to start? Message us on WhatsApp and we will point you to the right reading.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="/contact" className="inline-flex items-center justify-center min-h-[52px] min-w-[240px] px-7 rounded-full bg-am-gold text-am-maroon font-bold no-underline">Book a consultation</a>
                <a href="https://wa.me/919129237566" className="inline-flex items-center justify-center gap-2 min-h-[52px] min-w-[240px] px-7 rounded-full border border-white/45 text-white font-bold no-underline">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" /></svg>
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
