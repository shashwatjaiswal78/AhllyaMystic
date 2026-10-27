"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RazorpayCheckoutButton from "@/components/RazorpayCheckoutButton";

const LEARNS = [
  { n: 1, title: 'The right way to manifest', desc: 'What actually works, and the small mistakes that quietly block results.' },
  { n: 2, title: 'Letting go', desc: 'How to stop obsessing over the outcome, so it can arrive.' },
  { n: 3, title: 'Why manifestations fail', desc: 'The most common reasons, and how to fix each one.' },
  { n: 4, title: 'The mind and the world', desc: 'Experiments that explore how the mind affects things outside the body.' },
  { n: 5, title: 'The language of the Universe', desc: 'How to ask clearly for what you want.' },
  { n: 6, title: 'Aligned goals', desc: 'Setting goals that fit who you are and where you are headed.' },
  { n: 7, title: 'A daily habit', desc: 'Building a simple routine of consistent manifestation.' },
];

const PAIN_POINTS = [
  'Tried to manifest money, but kept overspending instead?',
  'Visualised the dream job, and still faced rejection?',
  'Wished for love, only to see a relationship fall apart?',
  'Planned the perfect trip, and watched it get postponed again?',
  'Practised gratitude every day, with little changing?',
];

const FAQS = [
  { q: 'Is the masterclass live?', a: 'Yes. It runs live online over two evenings, from 7 pm onwards. Each new batch is announced on this page and on WhatsApp.' },
  { q: 'Why is it only ₹99?', a: 'The ₹99 is a commitment fee. It keeps the group small and focused on people who will actually attend both days.' },
  { q: 'Who teaches the masterclass?', a: 'Maneswita, co-founder of Ahllya Mystic.' },
];

export default function MasterclassPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <>
      <Nav />
      <div>
        {/* HERO */}
        <div className="relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #1E0029 0%, #2E003E 40%, #4A0A66 75%, #6C1594 100%)' }}>
          <div className="am-stars absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="am-stars2 absolute inset-0 pointer-events-none" aria-hidden="true" />
          <span className="am-shoot absolute pointer-events-none" aria-hidden="true" style={{ top: 90, left: '58%' }} />
          <Image src="/images/9f12ecbbc1351b2a79d2c5c2543824a3.png" alt="" aria-hidden width={620} height={620} className="am-spin absolute -right-[200px] -top-[160px] opacity-[0.16] pointer-events-none" />
          <div className="relative max-w-[1200px] mx-auto px-6 py-[22px] pb-[88px]">
            <nav aria-label="Breadcrumb" className="text-[14px] text-[#CDB8DA] mb-10">
              <a href="/" className="text-[#CDB8DA] no-underline">Home</a>
              <span aria-hidden="true" className="mx-2">/</span>
              <a href="/courses" className="text-[#CDB8DA] no-underline">Courses</a>
              <span aria-hidden="true" className="mx-2">/</span>
              <span className="text-white font-semibold">Manifestation Masterclass</span>
            </nav>
            <div className="flex flex-wrap items-center gap-12">
              <div className="flex-[1.3_1_480px] min-w-0">
                <p className="m-0 mb-4 flex flex-wrap gap-2">
                  <span className="text-[12px] font-bold tracking-[0.06em] uppercase text-am-maroon bg-am-gold px-3 py-1 rounded-full">Live 2-day masterclass</span>
                  <span className="text-[12px] font-bold tracking-[0.06em] uppercase text-white bg-white/[0.12] px-3 py-1 rounded-full">Online</span>
                </p>
                <p className="m-0 mb-2.5 font-serif-display text-[clamp(20px,2vw,24px)] text-am-gold">Manifestation Masterclass</p>
                <h1 className="m-0 mb-4.5 font-serif-display font-normal text-[clamp(34px,4.2vw,54px)] leading-[1.1]">Doing everything right, but still not manifesting results?</h1>
                <p className="m-0 mb-7 text-[18px] text-[#EADFF2] max-w-[580px]">Your personal manifestation blueprint, in two live evenings with Maneswita. Learn why manifestations fail, how to let go, and a simple daily habit that makes it work.</p>
                <div className="grid gap-2.5 max-w-[620px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))' }}>
                  {[{ label: 'When', val: 'Next dates soon' }, { label: 'Time', val: '7 pm onwards' }, { label: 'Length', val: '2 live evenings' }].map(d => (
                    <div key={d.label} className="bg-white/[0.08] border border-white/[0.18] rounded-[14px] p-[12px_14px]">
                      <p className="m-0 text-[12px] text-[#CDB8DA]">{d.label}</p>
                      <p className="m-0.5 mt-0.5 font-bold">{d.val}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Registration card */}
              <div className="flex-1 basis-[380px] min-w-0 max-w-[460px] mx-auto">
                <div className="relative z-10 w-[92%] mx-auto -mb-7 aspect-video flex items-center justify-center rounded-[18px] overflow-hidden" style={{ background: 'linear-gradient(120deg, #4A0A66, #6C1594)', boxShadow: '0 30px 60px -30px rgba(0,0,0,0.7)', border: '3px solid rgba(255,255,255,0.9)' }}>
                  <Image src="/images/9f12ecbbc1351b2a79d2c5c2543824a3.png" alt="Manifestation Masterclass with Maneswita" width={120} height={120} className="opacity-60" />
                </div>
                <div className="bg-white text-am-ink rounded-[24px] pt-[44px] p-7 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]">
                  <p className="m-0 mb-1 text-[13px] tracking-[0.12em] uppercase text-am-maroon font-bold">Commitment fee</p>
                  <p className="m-0 mb-1.5 flex items-baseline gap-2.5">
                    <span className="text-[20px] text-am-ink-faint line-through">₹799</span>
                    <span className="font-serif-display text-[56px] leading-none">₹99</span>
                  </p>
                  <p className="m-0 mb-5 text-[14px] text-am-ink-soft">Both live sessions, plus the surprise bonus.</p>
                  <div className="grid gap-3 mb-5">
                    <label className="grid gap-1.5 text-[14px] font-semibold">
                      Your name
                      <input type="text" placeholder="Full name" value={name} onChange={e => setName(e.target.value)}
                        className="min-h-[48px] px-3.5 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9]" />
                    </label>
                    <label className="grid gap-1.5 text-[14px] font-semibold">
                      WhatsApp number
                      <input type="tel" placeholder="+91" value={phone} onChange={e => setPhone(e.target.value)}
                        className="min-h-[48px] px-3.5 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9]" />
                    </label>
                  </div>
                  <RazorpayCheckoutButton
                    productId="masterclass-99"
                    customer={{ name, phone, email: '' }}
                    label="Register now at ₹99"
                    disabled={!name || !phone}
                    className="w-full flex items-center justify-center min-h-[54px] rounded-full bg-am-gold text-am-maroon font-bold text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                  <p className="m-0 mt-3 text-center text-[13px] text-am-ink-soft">We send the session details on WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HAVE YOU EVER */}
        <div className="max-w-[1200px] mx-auto px-6 py-[88px]">
          <div className="grid gap-8 gap-x-16 items-start" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))' }}>
            <div>
              <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">Have you ever...</p>
              <h2 className="m-0 mb-3.5 font-serif-display font-normal text-[clamp(30px,3.4vw,42px)] leading-[1.15]">Wished for something with all your heart, and watched it slip away?</h2>
              <p className="m-0 text-[16px] text-am-ink-soft">If any of these sound familiar, it is not you. Most people are never taught how manifestation actually works. In two evenings, this masterclass shows you.</p>
            </div>
            <div className="grid gap-2.5">
              {PAIN_POINTS.map(p => (
                <div key={p} className="flex gap-3.5 items-start bg-white border border-[#E8DFD0] rounded-2xl p-[16px_18px]">
                  <span aria-hidden="true" className="flex-none font-serif-display text-[26px] leading-none text-am-maroon">?</span>
                  <span className="text-[16px] leading-[1.5]">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHAT YOU WILL LEARN */}
        <div className="bg-[#F4EDE1]">
          <div className="max-w-[1200px] mx-auto px-6 py-[88px]">
            <div className="mb-8">
              <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">What you will learn</p>
              <h2 className="m-0 font-serif-display font-normal text-[clamp(30px,3.4vw,42px)] leading-[1.15]">Over two live evenings.</h2>
            </div>
            <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))' }}>
              {LEARNS.map(l => (
                <div key={l.n} className="am-lift bg-white border border-[#E8DFD0] rounded-[22px] outline outline-1 outline-[#EFE6D8] outline-offset-[-9px] p-[22px_24px]">
                  <span className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#F3E8F7] text-am-purple font-bold mb-3">{l.n}</span>
                  <p className="m-0 mb-1.5 font-serif-display text-[22px] leading-[1.2]">{l.title}</p>
                  <p className="m-0 text-[15px] text-am-ink-soft leading-[1.6]">{l.desc}</p>
                </div>
              ))}
              {/* Surprise bonus */}
              <div className="relative overflow-hidden text-white rounded-[22px] p-[22px_24px]" style={{ background: 'linear-gradient(150deg, #921A11 0%, #6C1594 100%)' }}>
                <div className="am-stars absolute inset-0 pointer-events-none" aria-hidden="true" />
                <span className="relative inline-flex items-center justify-center w-[34px] h-[34px] rounded-full bg-am-gold text-am-maroon mb-3">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12v9H4v-9M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>
                </span>
                <p className="relative m-0 mb-1.5 font-serif-display text-[22px]">A surprise bonus</p>
                <p className="relative m-0 text-[15px] text-[#F4EAF9] leading-[1.6]">Revealed only to those who attend, live.</p>
              </div>
            </div>
          </div>
        </div>

        {/* WHO SHOULD ATTEND */}
        <div className="max-w-[1200px] mx-auto px-6 py-[88px] pb-10">
          <div className="relative overflow-hidden rounded-[28px] p-[clamp(28px,5vw,56px)]" style={{ background: 'linear-gradient(120deg, #2E003E 0%, #6C1594 100%)' }}>
            <div className="am-stars absolute inset-0 pointer-events-none" aria-hidden="true" />
            <div className="relative grid gap-8 gap-x-14 items-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))' }}>
              <div>
                <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-gold font-bold">Who should attend</p>
                <h2 className="m-0 mb-3.5 font-serif-display font-normal text-[clamp(30px,3.4vw,42px)] leading-[1.15] text-white">This masterclass is for you if...</h2>
                <a href="#" className="inline-flex items-center justify-center min-h-[54px] px-7.5 mt-2 rounded-full bg-am-gold text-am-maroon font-bold no-underline">Register now at ₹99</a>
              </div>
              <div className="grid gap-4.5">
                {[
                  { icon: <><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9 9l6 6M15 9l-6 6" /></>, text: 'You have tried manifesting, but it has not worked for you.' },
                  { icon: <><path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z" /></>, text: 'You want more money, love, health or happiness.' },
                  { icon: <><path d="M4 6h16M4 12h10M4 18h7" /></>, text: 'You want a simple, practical way to manifest, without jargon.' },
                  { icon: <><path d="M9 3h6M10 3v6L4 19a1 1 0 0 0 .9 1.5h14.2A1 1 0 0 0 20 19l-6-10V3" /></>, text: 'You are curious how manifestation and science connect.' },
                ].map(row => (
                  <div key={row.text} className="flex gap-3.5 items-start">
                    <span className="flex-none flex items-center justify-center w-11 h-11 rounded-full bg-am-gold text-am-maroon">
                      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{row.icon}</svg>
                    </span>
                    <p className="mt-2.5 m-0 text-[16px] leading-[1.5] text-white">{row.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-[860px] mx-auto px-6 py-[72px] pb-24">
          <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold text-center">Questions</p>
          <h2 className="m-0 mb-7 font-serif-display font-normal text-[clamp(30px,3.4vw,42px)] leading-[1.15] text-center">About the masterclass</h2>
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
