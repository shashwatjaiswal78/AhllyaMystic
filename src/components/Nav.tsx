"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/consult", label: "Consultations" },
  { href: "/kundli", label: "Free Kundli" },
  { href: "/#free", label: "Free Calculators" },
  { href: "/#reports", label: "Reports" },
  { href: "/courses", label: "Courses" },
  { href: "/horoscope", label: "Horoscope" },
  { href: "/#blog", label: "Blogs" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white text-am-maroon text-sm font-semibold text-center py-2.5 px-4 border-b border-am-cream-border-soft">
        <a href="/masterclass" className="text-am-maroon no-underline">
          Live 2-day Manifestation Masterclass. Dates announced soon. Register for ₹99 →
        </a>
      </div>

      <header className="sticky top-0 z-50 bg-am-plum-deep/94 backdrop-blur-md border-b border-white/[0.08]">
        <nav
          aria-label="Main"
          className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between gap-4"
        >
          <Link href="/" aria-label="Ahllya Mystic home" className="block shrink-0">
            <Image
              src="/images/f0424906cf2ed307d839fd952ac77981.png"
              alt="Ahllya Mystic"
              width={180}
              height={48}
              className="h-10 sm:h-12 w-auto block"
              priority
            />
          </Link>

          <div className="hidden min-[1121px]:flex items-center gap-6 text-[15px] font-medium">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-white no-underline hover:opacity-75">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://wa.me/919129237566"
              aria-label="Chat on WhatsApp"
              className="hidden sm:flex items-center justify-center w-11 h-11 rounded-full border border-white/30 text-white"
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />
                <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2z" />
              </svg>
            </a>
            <a
              href="/consult"
              className="inline-flex items-center min-h-11 px-5 sm:px-5 rounded-full border-2 border-am-gold text-white font-bold text-sm sm:text-[15px] no-underline whitespace-nowrap"
            >
              Book a consultation
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-controls="am-drawer"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="min-[1121px]:hidden flex items-center justify-center w-11 h-11 rounded-full border border-white/30 bg-transparent text-white cursor-pointer"
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M10 17h10" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-100">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="am-fade absolute inset-0 w-full h-full p-0 border-0 bg-black/60 cursor-pointer"
          />
          <div
            id="am-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="am-slide absolute top-0 right-0 bottom-0 w-[min(330px,86vw)] overflow-y-auto text-white shadow-[-24px_0_48px_rgba(0,0,0,0.4)]"
            style={{ background: "linear-gradient(180deg, #2E003E 0%, #4A0A66 55%, #6C1594 100%)" }}
          >
            <div className="am-stars" aria-hidden="true" />
            <div className="relative p-5 pb-8 flex flex-col min-h-full box-border">
              <div className="flex items-center justify-between mb-5">
                <Image src="/images/f0424906cf2ed307d839fd952ac77981.png" alt="Ahllya Mystic" width={160} height={44} className="h-11 w-auto block" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-11 h-11 rounded-full border border-white/30 bg-transparent text-white cursor-pointer"
                >
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between min-h-14 border-b border-white/[0.14] text-white no-underline font-serif-display text-[22px]"
                >
                  {l.label}
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </a>
              ))}
              <div className="mt-7 grid gap-3">
                <a href="/consult" onClick={() => setOpen(false)} className="flex items-center justify-center min-h-13 rounded-full border-2 border-am-gold text-white font-bold no-underline">
                  Book a consultation
                </a>
                <a href="https://wa.me/919129237566" className="flex items-center justify-center gap-2 min-h-13 rounded-full border border-white/35 text-white font-semibold no-underline">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />
                  </svg>
                  WhatsApp us
                </a>
              </div>
              <p className="font-devanagari text-[17px] text-am-lavender text-center mt-auto pt-8">
                ज्योतिष · अंक शास्त्र · वास्तु
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
