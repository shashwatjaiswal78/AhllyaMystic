"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type Expert = "man" | "san";
type Tool = "kundli" | "kp" | "name" | "mobile";

const RASHI_SIGNS = [
  { hi: "मेष", en: "Aries", planet: "Mars", img: "/images/5a0f65dfaa71ef2c506dc1054947c5ff.png" },
  { hi: "वृषभ", en: "Taurus", planet: "Venus", img: "/images/ac8af94238978a3e94d9c66080d26ddb.png" },
  { hi: "मिथुन", en: "Gemini", planet: "Mercury", img: "/images/c1ecdc04c510562fdc5aab383261862b.png" },
  { hi: "कर्क", en: "Cancer", planet: "Moon", img: "/images/1bc09452b30f9800803f58118330e4f6.png" },
  { hi: "सिंह", en: "Leo", planet: "Sun", img: "/images/d09914f3b4274dc9bfc8af1deb71a1f0.png" },
  { hi: "कन्या", en: "Virgo", planet: "Mercury", img: "/images/9578bc47ab6e5fe1f6f50da2361155b1.png" },
  { hi: "तुला", en: "Libra", planet: "Venus", img: "/images/7943e80f8844d74d2b2ae5af9b8f064b.png" },
  { hi: "वृश्चिक", en: "Scorpio", planet: "Mars", img: "/images/1a65871926eb0ac98d213af25887658a.png" },
  { hi: "धनु", en: "Sagittarius", planet: "Jupiter", img: "/images/361b47e8acf0bbccc84b6d4f54a15fde.png" },
  { hi: "मकर", en: "Capricorn", planet: "Saturn", img: "/images/6cf3444efe7515212067918671d3c45e.png" },
  { hi: "कुंभ", en: "Aquarius", planet: "Saturn", img: "/images/ceaf4ebd9cd0c16b845146a5d128ca34.png" },
  { hi: "मीन", en: "Pisces", planet: "Jupiter", img: "/images/9e65e00dea31321e5cf5ec94179adfa0.png" },
] as const;

const BEEJ: Record<string, { en: string; hi: string }> = {
  Sun: { en: "Om Hraam Hreem Hraum Sah Suryaya Namah", hi: "ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः" },
  Moon: { en: "Om Shraam Shreem Shraum Sah Chandraya Namah", hi: "ॐ श्रां श्रीं श्रौं सः चन्द्राय नमः" },
  Mars: { en: "Om Kraam Kreem Kraum Sah Bhaumaya Namah", hi: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः" },
  Mercury: { en: "Om Braam Breem Braum Sah Budhaya Namah", hi: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः" },
  Jupiter: { en: "Om Graam Greem Graum Sah Gurave Namah", hi: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः" },
  Venus: { en: "Om Draam Dreem Draum Sah Shukraya Namah", hi: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः" },
  Saturn: { en: "Om Praam Preem Praum Sah Shanaischaraya Namah", hi: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः" },
  Rahu: { en: "Om Bhraam Bhreem Bhraum Sah Rahave Namah", hi: "ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः" },
  Ketu: { en: "Om Sraam Sreem Sraum Sah Ketave Namah", hi: "ॐ स्रां स्रीं स्रौं सः केतवे नमः" },
};

// Real output of the shared astrology module for 24 October 2026 (New Delhi sunrise):
// [love, career and finance, health, overall, lucky number, lucky colour, strengthen, calm, why]
const DAY: [number, number, number, number, number, string, string, string, string][] = [
  [35, 35, 35, 35, 3, "Yellow", "Jupiter", "Saturn", "Saturn is in the 12th house from Aries, the first phase of Sade Sati."],
  [60, 75, 90, 75, 8, "Blue", "Saturn", "Ketu", "Ketu is in the 4th house from Taurus."],
  [85, 75, 55, 70, 6, "White", "Venus", "Saturn", "Saturn is in the 10th house from Gemini."],
  [55, 45, 35, 45, 5, "Green", "Mercury", "Rahu", "Rahu is in the 8th house from Cancer."],
  [50, 45, 45, 45, 1, "Orange", "Sun", "Moon", "The Moon is in the 8th house from Leo (Chandrashtama)."],
  [90, 80, 70, 80, 5, "Green", "Mercury", "Ketu", "Ketu is in the 12th house from Virgo."],
  [75, 65, 60, 65, 6, "White", "Venus", "", ""],
  [60, 50, 35, 50, 3, "Yellow", "Jupiter", "Rahu", "Rahu is in the 4th house from Scorpio."],
  [55, 50, 45, 50, 3, "Yellow", "Jupiter", "Saturn", "Saturn is in the 4th house from Sagittarius, Kantaka Shani dhaiya."],
  [60, 90, 75, 80, 8, "Blue", "Saturn", "Ketu", "Ketu is in the 8th house from Capricorn."],
  [60, 40, 45, 45, 6, "White", "Venus", "Saturn", "Saturn is in the 2nd house from Aquarius, the last phase of Sade Sati."],
  [80, 75, 50, 70, 3, "Yellow", "Jupiter", "Saturn", "Saturn is over Pisces, the peak of Sade Sati."],
];
const OVERVIEWS = [
  "A steady, grounded day. Small, patient steps will bring more progress than big leaps, so finish what you have already started.",
  "Energy runs high today. A good day to begin something new, speak your mind kindly and take the first step on a plan you have been delaying.",
  "Pause before you react. Listening more than you speak will help you see a situation clearly and avoid needless friction.",
  "A warm, hopeful day. Support may come from an unexpected person, so stay open to help and remember to say thank you.",
];
const LOVES = [
  "Gentle words go a long way with your partner today.",
  "A good day to plan time together and talk about the future.",
  "Avoid old arguments and give each other a little space.",
  "If you are single, a friendly conversation could turn into something more.",
];
const CAREERS = [
  "Focus on one important task and see it through.",
  "A good day for meetings and sharing new ideas.",
  "Review money matters carefully before committing to anything.",
  "Work you put in earlier begins to show results.",
];
const HEALTHS = [
  "Drink plenty of water and try to sleep early.",
  "A short walk will clear your mind and lift your mood.",
  "Rest your eyes from screens and mind your posture.",
  "Light, home-cooked food will keep your energy steady.",
];
const MOOD_SETS = [
  ["Calm", "Focused", "Patient"],
  ["Energetic", "Bold", "Optimistic"],
  ["Reflective", "Careful", "Thoughtful"],
  ["Hopeful", "Warm", "Grateful"],
];

const CLARITY_CARDS = [
  {
    title: "Love and marriage",
    desc: "Compatibility, delays in marriage, and whether this relationship is right for you.",
    icon: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />,
  },
  {
    title: "Career and business",
    desc: "Job or business, the right time to switch, invest or expand.",
    icon: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
      </>
    ),
  },
  {
    title: "Money and growth",
    desc: "Where the blocks in your finances come from and what to do about them.",
    icon: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </>
    ),
  },
  {
    title: "Health and wellbeing",
    desc: "Understanding the phases in your chart that ask for extra care and balance.",
    icon: (
      <>
        <path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15" />
        <path d="M5 19l8-8" />
      </>
    ),
  },
  {
    title: "Education",
    desc: "The right stream, exam timing and plans to study abroad.",
    icon: (
      <>
        <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
        <path d="M4 19V5M9 7h6" />
      </>
    ),
  },
  {
    title: "Child and family",
    desc: "Family planning, your child's nature and talents, and naming.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="10" r="2" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.2 1.3-4 3-4s3 1.8 3 4" />
      </>
    ),
  },
];

const REPORTS = [
  { badge: "Most popular", name: "Personalised Kundli Report", desc: "Career, money, health, love and marriage predictions, your dasha timeline, doshas and easy to follow remedies.", was: "₹1,998", now: "₹999", href: "/report/kundli" },
  { badge: "New", name: "Varshphal 2027", desc: "Your next 12 months, month by month: the year's main focus, key phases and simple remedies.", was: "₹1,478", now: "₹739", href: "/report/varshphal" },
  { badge: null, name: "Couple Kundli Milan", desc: "Gun Milan, Mangal Dosha check and an honest view of long-term compatibility before marriage.", was: "₹6,798", now: "₹3,399", href: "/report/milan" },
  { badge: null, name: "Lal Kitab Report", desc: "Lal Kitab predictions with simple remedies you can follow at home, no complex rituals.", was: "₹1,998", now: "₹999", href: "/report/lal-kitab" },
  { badge: null, name: "Name Numerology Report", desc: "For yourself, a newborn or a business. Align the name you carry with your numbers.", was: "₹798", now: "₹399", href: "/report/name-numerology" },
  { badge: null, name: "Mobile Number Report", desc: "Check whether your mobile number supports you, with lucky combinations to choose from.", was: "₹498", now: "₹249", href: "/report/mobile-number" },
];

const COURSES = [
  { hi: "अंक शास्त्र", title: "Numerology Foundation", desc: "Birth, destiny and name numbers from the ground up.", img: "/images/f096e04a039d9feb59de98d1d02de7f1.jpg", alt: "Numerology Foundation Course with Ahalya Sangeeta" },
  { hi: "ज्योतिष", title: "Astrology Foundation", desc: "Houses, planets and signs, step by step, to read a chart on your own.", img: "/images/ea15b3e1780bbd6844ecaa33bda0c926.jpg", alt: "Astrology Foundation Course with Ahalya Sangeeta" },
  { hi: "विवाह", title: "Decoding Marriage and Compatibility", desc: "How to read compatibility, timing and doshas for marriage.", img: "/images/6da4179d5dfa9489ed3e3e39f8aa92bd.jpg", alt: "Decoding Marriage and Compatibility course with Ahalya Sangeeta" },
];

const TESTIMONIALS = [
  { name: "Arushi B.", loc: "Delhi", tag: "Mobile Number Report", quote: "I never thought my phone number could matter, but the report explained everything so simply. I switched to one of the suggested numbers and it just feels right. Thank you!" },
  { name: "Tikesh Negi", loc: "Haldwani", tag: "Name and Mobile Reports", quote: "Got both my name and mobile number reports done. They explained clearly why my current spelling wasn't supporting me and suggested a small, easy change. Very detailed, and patient with all my questions." },
  { name: "Gaurav Jha", loc: "Lucknow", tag: "Personalised Kundli", quote: "The Kundli report was far more detailed than I expected, and you can tell someone actually studied my chart. The remedies are practical and easy to follow. Highly recommend." },
];

const FAQS = [
  { q: "Are readings done by a person or by software?", a: "By us, personally. Every report and consultation is prepared by Ahalya Sangeeta and Maneswita after studying your chart. Only our free tools, like the free Kundli, are calculated automatically." },
  { q: "When and how will I receive my report?", a: "As a PDF on both email and WhatsApp, within 5 to 7 working days of payment." },
  { q: "How soon will my consultation happen?", a: "We call you within 24 hours to confirm your birth details and booking and schedule the call within 7 to 10 days, at a time that suits you." },
  { q: "What if I cannot follow a remedy exactly?", a: "That is fine. Tell us, and we will suggest an alternative that still suits your chart. Consistency matters more than perfection." },
  { q: "Will my birth details stay private?", a: "Yes. Your details are used only to prepare your reading and are never shared." },
];

function Check({ color = "#921A11" }: { color?: string }) {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: 2 }}>
      <path d="M5 12l4 4 10-10" />
    </svg>
  );
}

export default function Home() {
  const [expert, setExpert] = useState<Expert>("man");
  const [tool, setTool] = useState<Tool>("kundli");
  const [sign, setSign] = useState(0);
  const [moonForm, setMoonForm] = useState({ dob: "", tob: "", pob: "", wa: "" });
  const [todayDate, setTodayDate] = useState("");
  useEffect(() => {
    setTodayDate(new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" }));
  }, []);

  const isMan = expert === "man";
  const CP = isMan
    ? ["₹2,301", "₹4,101", "₹5,001", "₹7,201", "₹3,101"]
    : ["₹4,001", "₹6,301", "₹7,601", "₹11,111", "₹5,100"];
  const plans = [
    { name: "One area", blurb: "A focused session on the area that matters most right now.", price: CP[0], mins: "20 min", i1: "Pick any one: career, love, money, health, education or child", i2: "Your chart studied before the call", i3: "Simple, practical remedies", cta: "Book one area" },
    { name: "Two areas", blurb: "For two questions that sit side by side, like career and money.", price: CP[1], mins: "30 min", i1: "Pick any two areas of your life", i2: "How the two connect in your chart", i3: "Remedies for both areas", cta: "Book two areas" },
    { name: "Three areas", blurb: "A broader reading that connects the different parts of your life.", price: CP[2], mins: "45 min", i1: "Pick any three areas of your life", i2: "Timing guidance from your dasha periods", i3: "Personalised remedies for each area", cta: "Book three areas" },
  ];
  const fullPrice = CP[3];
  const diwaliPrice = CP[4];

  const cur = useMemo(() => {
    const s = RASHI_SIGNS[sign];
    const dv = DAY[sign];
    const [love, career, health, overall, num, colour, strongPlanet, calmPlanet, calmWhy] = dv;
    const strong = BEEJ[strongPlanet];
    const calm = calmPlanet ? BEEJ[calmPlanet] : null;
    const k = sign % 4;
    return {
      en: s.en,
      hi: s.hi,
      img: s.img,
      planet: s.planet,
      num,
      colour,
      strongPlanet,
      strongEn: strong.en,
      strongHi: strong.hi,
      hasCalm: !!calm,
      calmPlanet,
      calmEn: calm?.en ?? "",
      calmHi: calm?.hi ?? "",
      calmWhy,
      overall: `${overall}%`,
      bars: [
        { label: "Love", pct: love },
        { label: "Career and finance", pct: career },
        { label: "Health", pct: health },
      ],
      moods: MOOD_SETS[k],
      overview: OVERVIEWS[k],
      love: LOVES[(k + 1) % 4],
      career: CAREERS[(k + 2) % 4],
      health: HEALTHS[(k + 3) % 4],
    };
  }, [sign]);


  const toolDescs: Record<Tool, string> = {
    kundli: "Check your chart for free before buying a report. If a dosha or placement needs attention, our Personalised Kundli Report explains it, with remedies.",
    kp: "KP is known for precise timing of events. See your chart for free, and if your question needs deeper guidance, a consultation gives you exact answers.",
    name: "Not every name needs changing. Check for free if yours supports your birth number, and get a spelling correction only if it doesn't.",
    mobile: "Check for free if your mobile number works in your favour. Only if it doesn't, our report suggests lucky combinations to choose from.",
  };
  const toolLabels: Record<Tool, string> = { kundli: "Free Kundli", kp: "KP Kundli", name: "Name number", mobile: "Mobile number" };
  const toolHrefs: Record<Tool, string> = { kundli: "/kundli", kp: "/kp-kundli", name: "/name-numerology", mobile: "/mobile-number" };

  return (
    <div className="text-am-ink bg-am-cream">
      <Nav />

      {/* HERO */}
      <div className="relative overflow-hidden text-white" style={{ background: "linear-gradient(180deg, #2E003E 0%, #3D0752 45%, #6C1594 100%)" }}>
        <div className="am-stars" aria-hidden="true" />
        <div className="am-stars2" aria-hidden="true" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="am-hero-row flex flex-wrap items-center">
            <div className="am-hero-copy flex-[1.5_1_520px] min-w-0">
              <p className="mb-3.5">
                <span className="inline-block px-[18px] pt-[3px] pb-[5px] rounded-full bg-[#FBF1EE] font-devanagari text-xl leading-relaxed text-am-maroon">
                  ज्योतिष · अंक शास्त्र · वास्तु
                </span>
              </p>
              <p className="mb-5 text-[13px] tracking-[0.14em] uppercase text-am-lavender font-semibold">
                Vedic astrology · KP astrology · Numerology · Vastu
              </p>
              <h1 className="font-serif-display font-normal mb-[22px]" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.08, letterSpacing: "-0.01em" }}>
                Clarity on love,
                <br />
                career and money.
              </h1>
              <p className="am-hero-sub mb-8 text-am-lavender">
                One-on-one consultations and hand-prepared reports by experts, never generated by software.
              </p>
              <div className="am-hero-flex flex flex-wrap gap-3.5 mb-10">
                <Link href="/consult" className="inline-flex items-center justify-center gap-2.5 min-h-[52px] min-w-[248px] box-border px-7 rounded-full bg-am-gold text-am-maroon font-bold text-base no-underline shadow-[0_10px_30px_-10px_rgba(252,206,7,0.55)]">
                  Book a consultation
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </Link>
                <Link href="/kundli" className="inline-flex items-center justify-center min-h-[52px] min-w-[248px] box-border px-7 rounded-full border border-white/45 text-white font-bold text-base no-underline">
                  Get your free Kundli
                </Link>
              </div>
              <div className="am-hero-flex flex flex-wrap gap-x-7 gap-y-3 text-sm text-am-lavender">
                {["Hand-prepared, not auto-generated", "Audio or video calls", "Pay securely by UPI or card", "100% reliable", "100% confidential"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l4 4 10-10" /></svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-[1_1_440px] min-w-0 flex justify-center pb-[110px]">
              <div className="relative w-[min(600px,100%)] aspect-square">
                <div className="am-halo absolute inset-[8%] rounded-full" aria-hidden="true" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.30) 0%, rgba(234,223,242,0.12) 45%, rgba(255,255,255,0) 72%)" }} />
                <Image src="/images/9f12ecbbc1351b2a79d2c5c2543824a3.png" alt="" aria-hidden="true" fill className="am-spin-zodiac absolute inset-0 opacity-95" />
                <div className="absolute" style={{ top: "17%", left: "17%", width: "66%", height: "66%" }}>
                  <Image src="/images/be669e4f4ef64c09b37d47c940f4daa1.png" alt="Maneswita and Ahalya Sangeeta, founders of Ahllya Mystic" fill className="block" style={{ filter: "drop-shadow(0 24px 30px rgba(20,0,28,0.45))" }} />
                </div>
                <div className="am-float absolute left-0 right-0 mx-auto w-fit text-center rounded-2xl border border-white/20 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] px-[18px] py-3.5" style={{ bottom: "-4%", background: "linear-gradient(135deg, rgba(46,0,62,0.92) 0%, rgba(108,21,148,0.92) 100%)", maxWidth: "calc(100% - 16px)" }}>
                  <p className="font-serif-display text-lg text-white m-0">Maneswita and Ahalya Sangeeta</p>
                  <p className="am-nowrap text-[13px] text-am-lavender mt-0.5 leading-relaxed">Vedic, KP Astrology, Numerology &amp; Vastu Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg aria-hidden="true" viewBox="0 0 1440 70" preserveAspectRatio="none" className="absolute left-0 -bottom-px w-full h-[70px] block z-[2]">
          <path d="M0 0Q720 70 1440 0V70H0Z" fill="#FBF7F0" />
        </svg>
      </div>

      {/* WHERE DO YOU NEED CLARITY */}
      <div className="relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(146,26,17,0.06), rgba(146,26,17,0) 50%), #FBF7F0" }}>
        <Image src="/images/139dc9f8771bafe47e83ebdfd8f024a6.png" alt="" aria-hidden="true" width={560} height={560} className="am-spin-rev absolute pointer-events-none opacity-[0.14]" style={{ top: -110, right: -170 }} />
        <div className="max-w-[1200px] mx-auto px-6 py-[88px] relative">
          <div className="am-center-mobile mb-11">
            <p className="mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">Where do you need clarity?</p>
            <h2 className="font-serif-display font-normal mb-3" style={{ fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: 1.15 }}>
              <span className="am-nowrap">Find answers for the areas that matter most.</span>
            </h2>
            <p className="m-0 text-base text-am-ink-soft">
              <span className="am-nowrap-lg">Whether you&rsquo;re navigating love, health, career, or finances, we&rsquo;re here to support you with compassion and clarity.</span>
              <br className="am-br-desk" />{" "}
              <span className="am-nowrap-lg">Our remedies are simple, our approach personal, and our goal is your peace.</span>
            </p>
          </div>

          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))" }}>
            {CLARITY_CARDS.map((c) => (
              <Link key={c.title} href="/consult" className="am-lift flex gap-[18px] p-[26px] bg-white border border-am-cream-border rounded-[20px] no-underline text-am-ink">
                <span className="flex-none flex items-center justify-center w-[50px] h-[50px] rounded-full bg-am-gold text-am-maroon shadow-[0_0_0_4px_#FFFFFF,0_0_0_5px_rgba(252,206,7,0.55)]">
                  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                </span>
                <span className="block">
                  <span className="block font-serif-display text-xl mb-1">{c.title}</span>
                  <span className="block text-[15px] text-am-ink-soft">{c.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CONSULTATIONS */}
      <div id="consult" className="relative overflow-hidden text-white" style={{ background: "radial-gradient(ellipse at 18% 22%, rgba(108,21,148,0.65) 0%, rgba(108,21,148,0) 50%), radial-gradient(ellipse at 88% 78%, rgba(146,26,17,0.30) 0%, rgba(146,26,17,0) 45%), radial-gradient(ellipse at 70% 8%, rgba(74,10,102,0.7) 0%, rgba(74,10,102,0) 55%), linear-gradient(180deg, #16001F 0%, #2E003E 50%, #16001F 100%)" }}>
        <div className="am-stars" aria-hidden="true" />
        <div className="am-stars2" aria-hidden="true" />
        <Image src="/images/610ce06ea07e7a2d1d36f4d88029f8db.png" alt="" aria-hidden="true" width={640} height={640} className="am-spin-zodiac absolute opacity-[0.22]" style={{ left: -220, bottom: -240 }} />
        <Image src="/images/610ce06ea07e7a2d1d36f4d88029f8db.png" alt="" aria-hidden="true" width={440} height={440} className="am-spin-rev absolute opacity-[0.12]" style={{ right: -170, top: -170 }} />
        <span className="am-shoot" aria-hidden="true" style={{ top: "8%", left: "78%" }} />
        <span className="am-shoot" aria-hidden="true" style={{ top: "30%", left: "30%", animationDelay: "4.5s" }} />
        <span className="am-shoot" aria-hidden="true" style={{ top: "4%", left: "52%", animationDelay: "8s" }} />
        <div className="max-w-[1200px] mx-auto px-6 pt-14 pb-[52px] relative">
          <div className="text-center mx-auto mb-7">
            <h2 className="font-serif-display font-normal mb-3 text-white" style={{ fontSize: "clamp(30px, 2.9vw, 40px)", lineHeight: 1.15 }}>
              Sometimes all you need is the right person to listen.
            </h2>
            <p className="m-0 text-am-lavender text-[17px]">Tell us what&rsquo;s on your mind, and we&rsquo;ll help you find the way forward.</p>
          </div>

          <div role="group" aria-label="Choose your expert" className="flex justify-center mb-[30px]">
            <div className="inline-flex flex-wrap justify-center p-[5px] bg-white/[0.08] border border-white/[0.28] rounded-full gap-1 backdrop-blur-[6px]">
              <button type="button" aria-pressed={isMan} onClick={() => setExpert("man")} className={`font-sans text-[15px] font-bold min-h-11 px-[22px] border-0 rounded-full cursor-pointer ${isMan ? "bg-white text-am-plum-deep" : "bg-transparent text-am-lavender"}`}>
                Expert
              </button>
              <button type="button" aria-pressed={!isMan} onClick={() => setExpert("san")} className={`font-sans text-[15px] font-bold min-h-11 px-[22px] border-0 rounded-full cursor-pointer ${!isMan ? "bg-white text-am-plum-deep" : "bg-transparent text-am-lavender"}`}>
                Senior Expert
              </button>
            </div>
          </div>

          <div className="grid gap-5 max-w-[1160px] mx-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))" }}>
            {plans.map((pl) => (
              <div key={pl.name} className="am-lift bg-white text-am-ink border border-[#E2D7C4] rounded-[24px] p-6 flex flex-col gap-3.5 outline outline-1 outline-[#EFE6D8] outline-offset-[-9px] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)]">
                <div>
                  <p className="font-serif-display text-[25px] mb-1 m-0">{pl.name}</p>
                  <p className="m-0 text-[14.5px] text-am-ink-soft">{pl.blurb}</p>
                </div>
                <p className="m-0 flex items-baseline gap-2 flex-wrap">
                  <span className="font-serif-display text-[38px] leading-none">{pl.price}</span>
                  <span className="text-sm text-am-ink-soft">{pl.mins} call</span>
                </p>
                <ul className="m-0 p-0 list-none grid gap-2.5 text-[14.5px]">
                  <li className="flex gap-2.5"><Check /> {pl.i1}</li>
                  <li className="flex gap-2.5"><Check /> {pl.i2}</li>
                  <li className="flex gap-2.5"><Check /> {pl.i3}</li>
                </ul>
                <Link href="/consult" className="mt-auto flex items-center justify-center min-h-[52px] rounded-full bg-white border-2 border-am-gold text-am-maroon font-bold no-underline">
                  {pl.cta}
                </Link>
              </div>
            ))}

            <div className="am-lift relative overflow-visible text-white border border-white/30 rounded-[24px] p-6 flex flex-col gap-3.5 shadow-[0_0_70px_-12px_rgba(108,21,148,0.9),0_30px_70px_-30px_rgba(0,0,0,0.7)]" style={{ background: "linear-gradient(160deg, #6C1594 0%, #2E003E 100%)" }}>
              <div className="am-stars opacity-70 rounded-[24px]" aria-hidden="true" />
              <span className="absolute -top-[13px] left-1/2 -translate-x-1/2 whitespace-nowrap z-[2] bg-white text-am-maroon text-xs font-bold tracking-[0.06em] uppercase px-3.5 py-[5px] rounded-full shadow-[0_6px_16px_-6px_rgba(0,0,0,0.5)]">
                Most complete
              </span>
              <div className="relative">
                <p className="font-serif-display text-[25px] text-white mb-1 m-0">Complete</p>
                <p className="m-0 text-[14.5px] text-am-lavender">Your whole chart, every area, and as many questions as you have.</p>
              </div>
              <p className="relative m-0 flex items-baseline gap-2 flex-wrap">
                <span className="font-serif-display text-[38px] leading-none text-white">{fullPrice}</span>
                <span className="text-sm text-am-lavender">60 min call</span>
              </p>
              <ul className="relative m-0 p-0 list-none grid gap-2.5 text-[14.5px] text-white">
                <li className="flex gap-2.5"><Check color="#FFFFFF" /> All areas of life, any number of questions</li>
                <li className="flex gap-2.5"><Check color="#FFFFFF" /> Timing for the years ahead from your dasha periods</li>
                <li className="flex gap-2.5"><Check color="#FFFFFF" /> Personalised remedies for every area</li>
              </ul>
              <Link href="/consult" className="relative mt-auto flex items-center justify-center min-h-[52px] rounded-full bg-am-gold text-am-maroon font-bold no-underline">
                Book complete call
              </Link>
            </div>
          </div>

          <p className="mt-[22px] mx-auto max-w-[760px] text-center text-[14.5px] text-white">
            <span className="inline-block bg-am-maroon text-white text-xs font-bold tracking-[0.06em] uppercase px-2.5 py-1 rounded-full mr-2">Diwali offer</span>
            Complete consultation for {diwaliPrice} instead of {fullPrice}, till 8 November.{" "}
            <Link href="/consult" className="text-am-gold font-bold">See the offer</Link>
          </p>

          <ol className="list-none mt-8 mx-auto p-0 max-w-[980px] items-start grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))" }}>
            {[
              { n: "01", t: "Choose your call", d: "Your expert, and one, two, three or all areas." },
              { n: "02", t: "Pay securely", d: "UPI, card or netbanking." },
              { n: "03", t: "Share your birth details", d: "Date, time and place of birth." },
              { n: "04", t: "Pick your slot", d: "We call you within 24 hours to confirm your birth details." },
            ].map((s) => (
              <li key={s.n} className="grid gap-1.5 content-start">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/55 bg-white/[0.06] font-serif-display text-[15px] text-white">{s.n}</span>
                <span className="font-bold">{s.t}</span>
                <span className="text-sm text-am-lavender">{s.d}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* FREE TOOLS */}
      <div id="free" className="max-w-[1200px] mx-auto px-6 pt-[72px]">
        <div className="relative overflow-hidden text-white rounded-[28px]" style={{ background: "linear-gradient(135deg, #6C1594 0%, #4A0A66 50%, #2E003E 100%)" }}>
          <div className="am-stars" aria-hidden="true" />
          <Image src="/images/9d2168b8cba50907515a4814ec827ca1.png" alt="" aria-hidden="true" width={540} height={540} className="am-spin absolute pointer-events-none opacity-[0.18]" style={{ left: -190, bottom: -230 }} />
          <div className="relative p-7 md:p-14 flex flex-wrap gap-10 items-center">
            <div className="flex-[1_1_380px] min-w-0">
              <p className="mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-gold font-bold">Free, in under a minute</p>
              <h2 className="font-serif-display font-normal mb-6 text-white" style={{ fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: 1.15 }}>
                Try our free tools before you book anything.
              </h2>
              <div className="border-l-2 border-white/35 pl-4">
                <p className="font-serif-display text-[22px] text-white mb-1.5 m-0">{toolLabels[tool]}</p>
                <p className="m-0 text-am-lavender">{toolDescs[tool]}</p>
              </div>
            </div>
            <div className="flex-[1_1_460px] min-w-0 bg-white text-am-ink rounded-[20px] px-6 pt-[22px] pb-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
              <div className="am-tabs grid grid-cols-4 gap-1.5 p-[5px] bg-[#F4EDE1] rounded-[14px] mb-5" role="tablist" aria-label="Free tools">
                {(["kundli", "kp", "name", "mobile"] as Tool[]).map((t) => (
                  <button
                    key={t}
                    type="button"
                    role="tab"
                    aria-selected={tool === t}
                    onClick={() => setTool(t)}
                    className={`font-sans text-[13px] font-bold min-h-11 px-1.5 border-0 rounded-[10px] cursor-pointer ${tool === t ? "bg-white text-am-plum-deep shadow-[0_4px_12px_-6px_rgba(46,0,62,0.35)]" : "bg-transparent text-am-ink-soft"}`}
                  >
                    {toolLabels[t]}
                  </button>
                ))}
              </div>

              <form
                className="grid grid-cols-2 gap-3.5"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = toolHrefs[tool];
                }}
              >
                <label className="grid gap-1.5 text-sm font-semibold">
                  Full name
                  <input type="text" placeholder="First and last name" autoComplete="name" className="font-sans font-normal min-h-12 px-3.5 border border-am-input-border rounded-xl bg-am-cream text-am-ink min-w-0" />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Gender
                  <select className="font-sans font-normal min-h-12 px-3.5 border border-am-input-border rounded-xl bg-am-cream text-am-ink min-w-0 cursor-pointer">
                    <option value="" disabled>Select</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                </label>
                {tool === "name" && (
                  <p className="col-span-2 -mt-1.5 m-0 text-xs text-am-ink-faint">Enter the spelling exactly as written in your official documents, such as your Aadhaar or passport.</p>
                )}
                {tool === "mobile" && (
                  <label className="col-span-2 grid gap-1.5 text-sm font-semibold">
                    Mobile number to check
                    <input type="tel" placeholder="10-digit mobile number" className="font-sans font-normal min-h-12 px-3.5 border border-am-input-border rounded-xl bg-am-cream text-am-ink" />
                  </label>
                )}
                <label className="grid gap-1.5 text-sm font-semibold">
                  Actual date of birth
                  <input type="text" placeholder="DD / MM / YYYY" className="font-sans font-normal min-h-12 px-3.5 border border-am-input-border rounded-xl bg-am-cream text-am-ink" />
                </label>
                {(tool === "kundli" || tool === "kp") && (
                  <label className="grid gap-1.5 text-sm font-semibold">
                    {tool === "kp" ? "Exact time of birth" : "Time of birth"}
                    <input type="text" placeholder="HH : MM : SS" className="font-sans font-normal min-h-12 px-3.5 border border-am-input-border rounded-xl bg-am-cream text-am-ink" />
                  </label>
                )}
                {(tool === "kundli" || tool === "kp") && (
                  <label className="grid gap-1.5 text-sm font-semibold">
                    Place of birth
                    <input type="text" placeholder="City, State" className="font-sans font-normal min-h-12 px-3.5 border border-am-input-border rounded-xl bg-am-cream text-am-ink min-w-0" />
                  </label>
                )}
                <label className="grid gap-1.5 text-sm font-semibold col-span-2 sm:col-span-1">
                  <span>WhatsApp number <span className="font-normal text-am-ink-faint">(optional)</span></span>
                  <input type="tel" placeholder="To get your result there" className="font-sans font-normal min-h-12 px-3.5 border border-am-input-border rounded-xl bg-am-cream text-am-ink min-w-0" />
                </label>
                <button type="submit" className="col-span-2 font-sans font-bold min-h-[52px] border-0 rounded-full bg-am-gold text-am-maroon cursor-pointer">
                  {tool === "kundli" && "Generate my free Kundli"}
                  {tool === "kp" && "Generate my free KP Kundli"}
                  {tool === "name" && "Check my name number"}
                  {tool === "mobile" && "Check my mobile number"}
                </button>
                <p className="col-span-2 m-0 text-[13px] text-am-ink-soft text-center">
                  {tool === "kundli" && <>Want the full picture? See the <Link href="/report/kundli">Personalised Kundli Report</Link>.</>}
                  {tool === "kp" && <>Want precise timing for a decision? <Link href="/consult">Book a consultation</Link>.</>}
                  {tool === "name" && <>Want a name that truly supports you? See the <Link href="/report/name-numerology">Name Numerology Report</Link>.</>}
                  {tool === "mobile" && <>Want lucky number combinations for you? See the <Link href="/report/mobile-number">Mobile Number Report</Link>.</>}
                </p>
              </form>

              <p className="mt-4 px-3.5 py-2.5 rounded-xl bg-[#F3E8F7] text-[13px] leading-relaxed text-am-plum-deep text-center">
                If the date of birth on your documents is different from your real one, please enter your <strong>actual date of birth</strong>. Accurate results depend on it.
              </p>
              <p className="mt-2.5 text-xs text-am-ink-faint text-center">Your details stay private and are never shared.</p>
            </div>
          </div>
        </div>
      </div>

      {/* REPORTS */}
      <div id="reports" className="relative overflow-hidden bg-am-cream">
        <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-24 relative">
          <div className="am-center-mobile mb-11">
            <p className="mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">Written reports</p>
            <h2 className="font-serif-display font-normal mb-3" style={{ fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: 1.15 }}>
              <span className="am-nowrap">A reading you can keep and return to.</span>
            </h2>
            <p className="m-0 text-[15px] text-am-ink-soft">Each report is personally prepared by our experts and sent to you as a PDF on email and WhatsApp within 5 to 7 working days.</p>
          </div>

          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))" }}>
            {REPORTS.map((r) => (
              <div key={r.name} className="am-lift relative bg-white border border-am-cream-border rounded-[20px] p-[30px] flex flex-col gap-3.5 outline outline-1 outline-[#EFE6D8] outline-offset-[-9px]">
                {r.badge && (
                  <span className="absolute -top-[13px] left-[26px] text-xs font-bold tracking-[0.06em] uppercase text-white bg-am-maroon px-3 py-[5px] rounded-full shadow-[0_6px_14px_-6px_rgba(146,26,17,0.6)]">
                    {r.badge}
                  </span>
                )}
                <p className="font-serif-display text-[23px] m-0">{r.name}</p>
                <p className="m-0 text-[15px] text-am-ink-soft">{r.desc}</p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-2.5">
                  <span className="flex flex-col gap-0.5">
                    <span className="flex items-baseline gap-1.5">
                      <span className="text-[15px] text-am-ink-soft line-through">{r.was}</span>
                      <span className="font-serif-display text-[26px]">{r.now}</span>
                    </span>
                    <span className="self-start mt-1 text-xs font-bold tracking-[0.06em] text-white bg-am-purple px-2.5 py-0.5 rounded-md">50% OFF</span>
                  </span>
                  <Link href={r.href} className="inline-flex items-center min-h-11 px-5 rounded-full bg-am-gold text-am-maroon font-bold text-[15px] no-underline">
                    Order now
                  </Link>
                </div>
              </div>
            ))}

            <div className="am-lift col-span-full relative bg-white border border-am-cream-border rounded-[20px] px-[30px] py-[26px] flex flex-wrap items-center justify-between gap-y-3.5 gap-x-8 outline outline-1 outline-[#EFE6D8] outline-offset-[-9px]">
              <div className="flex-[1_1_360px] min-w-0">
                <p className="mb-1.5 font-serif-display text-[23px] m-0">Rudraksha and gemstones</p>
                <p className="m-0 text-[15px] text-am-ink-soft">Natural, energised stones and rudraksha, recommended only after we have seen your chart.</p>
              </div>
              <Link href="/contact" className="inline-flex items-center min-h-11 px-5 rounded-full bg-am-gold text-am-maroon font-bold text-[15px] no-underline">
                Buy now
              </Link>
            </div>
          </div>

          <p className="mt-7 text-center text-[15px]"><Link href="/report/kundli">See a sample page from a Kundli report →</Link></p>
        </div>
      </div>

      {/* WHY HAND-PREPARED */}
      <div className="relative overflow-hidden text-white" style={{ background: "linear-gradient(120deg, #2E003E 0%, #4A0A66 55%, #6C1594 100%)" }}>
        <div className="am-stars" aria-hidden="true" />
        <div className="am-stars2" aria-hidden="true" />
        <Image src="/images/e9e66e432da62be0b75896cf7ef0608e.png" alt="" aria-hidden="true" width={460} height={460} className="am-orbit absolute pointer-events-none opacity-30" style={{ right: -40, top: 20 }} />
        <div className="max-w-[1200px] mx-auto px-6 py-[104px] relative">
          <div className="mb-[52px]">
            <p className="mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-gold font-bold">Why it takes us 5 to 7 days</p>
            <h2 className="font-serif-display font-normal text-white" style={{ fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1.25 }}>
              <span className="am-nowrap-lg">Instant reports are generated by software.</span>
              <br />
              <span className="am-nowrap-lg">Ours are prepared by experts who carefully study your chart.</span>
            </h2>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))" }}>
            {[
              { t: "Read, not generated", d: "Every Kundli is analysed house by house before a single line is written." },
              { t: "Personalised remedies", d: "Practical, easy to follow remedies that fit your everyday life." },
              { t: "Support after your report", d: "Unsure about something in your report? Send us one or two questions and we’ll clarify." },
            ].map((b) => (
              <div key={b.t} className="border-t border-white/40 pt-[22px]">
                <p className="font-serif-display text-[22px] text-white mb-2 m-0">{b.t}</p>
                <p className="m-0 text-am-lavender text-[15px]">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COURSES + WEBINAR */}
      <div id="courses" className="relative overflow-hidden bg-am-cream border-t border-b border-am-cream-border">
        <div className="max-w-[1200px] mx-auto px-6 py-24 relative">
          <div className="flex flex-wrap justify-between items-end gap-x-10 gap-y-4 mb-9">
            <div className="max-w-[620px]">
              <p className="mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">Learn with us</p>
              <h2 className="font-serif-display font-normal m-0" style={{ fontSize: "clamp(32px, 3.6vw, 44px)", lineHeight: 1.15 }}>
                Why wonder about life when you can learn to read it?
              </h2>
            </div>
            <Link href="/courses" className="font-bold">View all courses →</Link>
          </div>

          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))" }}>
            {COURSES.map((c) => (
              <div key={c.title} className="am-lift bg-white border border-[#E2D7C4] rounded-[20px] overflow-hidden flex flex-col">
                <div className="relative w-full aspect-video">
                  <Image src={c.img} alt={c.alt} fill className="object-cover" />
                </div>
                <div className="flex-1 px-[26px] pt-[22px] pb-[26px] flex flex-col gap-2.5">
                  <span className="font-devanagari text-xl text-am-maroon leading-none">{c.hi}</span>
                  <p className="font-serif-display text-[23px] m-0">{c.title}</p>
                  <p className="m-0 text-[15px] text-am-ink-soft">{c.desc}</p>
                  <div className="mt-auto pt-2.5 flex items-center justify-between gap-3">
                    <span className="text-xs font-bold tracking-[0.06em] uppercase text-am-maroon bg-[#F8E8E6] px-2.5 py-[5px] rounded-full">Coming soon</span>
                    <a href="https://wa.me/919129237566" className="inline-flex items-center min-h-11 px-[18px] rounded-full border-[1.5px] border-am-purple text-am-purple font-bold text-[15px] no-underline">Notify me</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div id="webinar" className="flex flex-wrap bg-[#FFFDF9] text-am-ink border-[1.5px] border-am-purple rounded-[28px] overflow-hidden mt-[72px] relative outline outline-1 outline-[#D9C6E3] outline-offset-[-10px] shadow-[0_30px_60px_-40px_rgba(46,0,62,0.35)]">
            <div className="flex-[1_1_500px] min-w-0 relative p-5 md:p-9 flex items-center">
              <div className="relative w-full aspect-video rounded-[18px] overflow-hidden shadow-[0_24px_48px_-26px_rgba(46,0,62,0.55)]">
                <Image src="/images/f51fdba3c3c077276fab777f3ecab46d.jpg" alt="Manifestation Masterclass with Maneswita" fill className="object-cover" />
              </div>
            </div>
            <div className="flex-[1_1_400px] min-w-0 p-5 md:px-12 md:py-11 flex flex-col justify-center gap-3.5 relative">
              <p className="m-0 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">Live 2-day webinar · Dates announced soon</p>
              <h2 className="font-serif-display font-normal m-0" style={{ fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1.15, color: "#2E003E" }}>Manifestation Masterclass</h2>
              <p className="m-0 text-am-ink-soft">Your personal manifestation blueprint, in two live sessions with Maneswita.</p>
              <ul className="m-0 p-0 list-none grid gap-2 text-[15px]">
                {["Master the art of manifesting", "Attract with ease and confidence", "Simple and powerful methods", "Turn dreams into daily reality"].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 14 14" style={{ flex: "none", marginTop: 4 }}><path d="M7 1L13 7L7 13L1 7Z" fill="none" stroke="#6C1594" strokeWidth="1.4" /></svg>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-4 mt-2">
                <p className="m-0 flex items-baseline gap-2.5">
                  <span className="font-serif-display text-[40px] leading-none" style={{ color: "#2E003E" }}>₹99</span>
                  <span className="text-lg text-am-ink-soft line-through">₹799</span>
                </p>
                <Link href="/masterclass" className="inline-flex items-center min-h-[52px] px-7 rounded-full bg-am-gold text-am-maroon font-bold no-underline">Notify me</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HOROSCOPE + MOON SIGN */}
      <div className="relative overflow-hidden text-white" style={{ background: "radial-gradient(ellipse at 18% 22%, rgba(108,21,148,0.65) 0%, rgba(108,21,148,0) 50%), radial-gradient(ellipse at 88% 78%, rgba(146,26,17,0.30) 0%, rgba(146,26,17,0) 45%), radial-gradient(ellipse at 70% 8%, rgba(74,10,102,0.7) 0%, rgba(74,10,102,0) 55%), linear-gradient(180deg, #16001F 0%, #2E003E 50%, #16001F 100%)" }}>
        <div className="am-stars" aria-hidden="true" />
        <div className="am-stars2" aria-hidden="true" />
        <Image src="/images/610ce06ea07e7a2d1d36f4d88029f8db.png" alt="" aria-hidden="true" width={640} height={640} className="am-spin-zodiac absolute opacity-[0.18]" style={{ right: -220, top: -200 }} />
        <Image src="/images/610ce06ea07e7a2d1d36f4d88029f8db.png" alt="" aria-hidden="true" width={440} height={440} className="am-spin-rev absolute opacity-[0.12]" style={{ left: -170, bottom: -170 }} />
        <span className="am-shoot" aria-hidden="true" style={{ top: "6%", left: "72%" }} />
        <span className="am-shoot" aria-hidden="true" style={{ top: "26%", left: "22%", animationDelay: "3.5s" }} />
        <span className="am-shoot" aria-hidden="true" style={{ top: "3%", left: "46%", animationDelay: "7s" }} />
        <span className="am-shoot" aria-hidden="true" style={{ top: "48%", left: "84%", animationDelay: "10s" }} />
        <div className="relative max-w-[1200px] mx-auto px-6 py-[88px]">
          <div id="rashi" className="text-center" style={{ scrollMarginTop: 90 }}>
            <p className="mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-gold font-bold">Today&rsquo;s horoscope</p>
            <h2 className="font-serif-display font-normal mb-2 text-white" style={{ fontSize: "clamp(30px, 3.4vw, 40px)", lineHeight: 1.15 }}>What do the stars hold for you today?</h2>
            <p className="mb-9 text-[15px] text-am-lavender">{todayDate}</p>

            <form
              className="max-w-[980px] mx-auto -mt-3 mb-12 text-am-ink bg-white border border-am-cream-border rounded-[20px] px-6 py-[22px] outline outline-1 outline-[#EFE6D8] outline-offset-[-9px] text-left shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "/horoscope";
              }}
            >
              <p className="mb-3.5 text-[15px] text-am-ink-soft text-center"><strong className="text-am-ink">Don&rsquo;t know your moon sign?</strong> Find it free in a few seconds, then pick your rashi below.</p>
              <div className="grid gap-3 items-end" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(160px, 100%), 1fr))" }}>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Actual date of birth
                  <input type="text" placeholder="DD / MM / YYYY" value={moonForm.dob} onChange={(e) => setMoonForm((f) => ({ ...f, dob: e.target.value }))} className="font-sans font-normal min-h-12 px-3.5 border border-am-input-border rounded-xl bg-am-cream text-am-ink min-w-0" />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Time of birth
                  <input type="text" placeholder="HH : MM : SS" value={moonForm.tob} onChange={(e) => setMoonForm((f) => ({ ...f, tob: e.target.value }))} className="font-sans font-normal min-h-12 px-3.5 border border-am-input-border rounded-xl bg-am-cream text-am-ink min-w-0" />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Place of birth
                  <input type="text" placeholder="City, State" value={moonForm.pob} onChange={(e) => setMoonForm((f) => ({ ...f, pob: e.target.value }))} className="font-sans font-normal min-h-12 px-3.5 border border-am-input-border rounded-xl bg-am-cream text-am-ink min-w-0" />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  <span>WhatsApp <span className="font-normal text-am-ink-faint">(optional)</span></span>
                  <input type="tel" placeholder="To get your result" value={moonForm.wa} onChange={(e) => setMoonForm((f) => ({ ...f, wa: e.target.value }))} className="font-sans font-normal min-h-12 px-3.5 border border-am-input-border rounded-xl bg-am-cream text-am-ink min-w-0" />
                </label>
                <button type="submit" className="font-sans font-bold min-h-12 px-[18px] border-0 rounded-full bg-am-gold text-am-maroon cursor-pointer">Find my moon sign</button>
              </div>
              <p className="mt-3 text-xs text-am-ink-faint text-center">Please use your actual date of birth, even if your documents show a different one.</p>
            </form>

            <div className="am-signs flex gap-1.5 overflow-x-auto px-0.5 pt-1 pb-4 mx-auto mb-6" role="tablist" aria-label="Choose your rashi" style={{ scrollSnapType: "x mandatory" }}>
              {RASHI_SIGNS.map((r, i) => {
                const selected = i === sign;
                return (
                  <button
                    key={r.en}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setSign(i)}
                    className="am-rashi flex-[1_0_84px] flex flex-col items-center gap-2 py-1 border-0 bg-none cursor-pointer font-sans text-white"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <span className="relative flex items-center justify-center w-20 h-20">
                      <svg className="am-seal absolute inset-0 w-full h-full" aria-hidden="true" viewBox="0 0 116 116" fill="none" stroke={selected ? "#FCCE07" : "#FFFFFF"} strokeOpacity={selected ? 1 : 0.4} strokeWidth={selected ? 2 : 1}>
                        <circle cx="58" cy="58" r="56" strokeDasharray={selected ? "4 4" : "2 5"} />
                        <path d="M58 0V8M58 108V116M0 58H8M108 58H116" strokeOpacity="0.6" />
                      </svg>
                      <span className="block w-16 h-16 rounded-full" style={{ background: selected ? "#F3E8F7" : "#FFFFFF", boxShadow: selected ? "0 0 0 3px rgba(108,21,148,0.18), 0 12px 24px -10px rgba(46,0,62,0.55)" : "0 10px 22px -12px rgba(46,0,62,0.45)" }}>
                        <Image className="am-rashi-img" src={r.img} alt="" width={64} height={64} style={{ transition: "transform 0.4s ease" }} />
                      </span>
                    </span>
                    <span className="font-serif-display text-[15px] leading-[1.15]" style={{ color: selected ? "#FCCE07" : "#FFFFFF" }}>{r.en}</span>
                    <span className="font-devanagari text-sm leading-tight -mt-1" style={{ color: "#CBB154" }}>{r.hi}</span>
                  </button>
                );
              })}
            </div>

            <div className="am-horo text-am-ink grid gap-5 text-left" style={{ gridTemplateColumns: "minmax(0, 360px) minmax(0, 1fr)" }}>
              <div className="bg-white border border-am-cream-border rounded-[20px] p-6 outline outline-1 outline-[#EFE6D8] outline-offset-[-9px] flex flex-col gap-[18px]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-serif-display text-[32px] leading-[1.1] m-0">{cur.en}</p>
                    <p className="mt-1.5 m-0 text-sm text-am-ink-soft"><span className="font-devanagari text-[17px] text-am-maroon">{cur.hi}</span> · Ruled by {cur.planet}</p>
                  </div>
                  <Image src={cur.img} alt="" width={64} height={64} className="flex-none rounded-full shadow-[0_10px_22px_-12px_rgba(46,0,62,0.45)]" />
                </div>
                <div className="grid gap-3">
                  {cur.bars.map((b) => (
                    <div key={b.label} className="grid gap-1.5">
                      <div className="flex justify-between text-sm font-semibold"><span>{b.label}</span><span className="text-am-purple">{b.pct}%</span></div>
                      <progress className="am-bar" max={100} value={b.pct} aria-label={b.label} />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2.5 text-center">
                  <div className="bg-[#F3E8F7] rounded-[14px] px-1.5 py-3">
                    <p className="m-0 text-[11px] tracking-[0.08em] uppercase text-am-ink-soft font-bold">Overall</p>
                    <p className="mt-1 m-0 font-serif-display text-2xl text-am-purple">{cur.overall}</p>
                  </div>
                  <div className="bg-am-cream border border-[#EFE6D8] rounded-[14px] px-1.5 py-3">
                    <p className="m-0 text-[11px] tracking-[0.08em] uppercase text-am-ink-soft font-bold">Lucky number</p>
                    <p className="mt-1 m-0 font-serif-display text-2xl">{cur.num}</p>
                  </div>
                  <div className="bg-am-cream border border-[#EFE6D8] rounded-[14px] px-1.5 py-3">
                    <p className="m-0 text-[11px] tracking-[0.08em] uppercase text-am-ink-soft font-bold">Lucky colour</p>
                    <p className="mt-1 m-0 font-serif-display text-[22px]">{cur.colour}</p>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-[13px] font-bold text-am-ink">Today&rsquo;s mood</p>
                  <div className="flex flex-wrap gap-2">
                    {cur.moods.map((m) => (
                      <span key={m} className="text-[13px] font-semibold text-am-maroon bg-am-gold px-3 py-[5px] rounded-full">{m}</span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-2.5">
                  <div className="text-white rounded-[14px] px-4 py-3.5 text-center" style={{ background: "linear-gradient(135deg, #2E003E, #6C1594)" }}>
                    <p className="m-0 text-[11px] tracking-[0.12em] uppercase text-am-gold font-bold">Mantra to strengthen · {cur.strongPlanet}</p>
                    <p className="font-devanagari mt-2 m-0 text-[19px] leading-relaxed">{cur.strongHi}</p>
                    <p className="font-serif-display mt-0.5 m-0 text-base leading-snug text-am-lavender">{cur.strongEn}</p>
                  </div>
                  {cur.hasCalm ? (
                    <div className="bg-[#F8E8E6] border border-[#EED3CF] rounded-[14px] px-4 py-3.5 text-center text-am-ink">
                      <p className="m-0 text-[11px] tracking-[0.12em] uppercase text-am-maroon font-bold">Mantra to calm · {cur.calmPlanet}</p>
                      <p className="font-devanagari mt-2 m-0 text-[19px] leading-relaxed text-am-maroon">{cur.calmHi}</p>
                      <p className="font-serif-display mt-0.5 m-0 text-base leading-snug">{cur.calmEn}</p>
                      <p className="mt-2 m-0 text-[13px] leading-relaxed text-am-ink-soft">{cur.calmWhy}</p>
                    </div>
                  ) : (
                    <div className="bg-[#F8E8E6] border border-[#EED3CF] rounded-[14px] px-4 py-3.5 text-center text-am-ink">
                      <p className="m-0 text-[11px] tracking-[0.12em] uppercase text-am-maroon font-bold">Mantra to calm</p>
                      <p className="mt-1.5 m-0 text-sm leading-relaxed text-am-ink-soft">No planet is troubling {cur.en} today, so no calming mantra is needed.</p>
                    </div>
                  )}
                  <p className="mt-0.5 m-0 text-[12.5px] leading-relaxed text-am-ink-soft text-center">Chant each mantra 108 times. These are based on your moon sign. Your own chart may call for a different remedy.</p>
                </div>
              </div>

              <div className="bg-white border border-am-cream-border rounded-[20px] p-7 outline outline-1 outline-[#EFE6D8] outline-offset-[-9px] flex flex-col gap-5">
                <div>
                  <p className="mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">Today&rsquo;s overview</p>
                  <p className="font-serif-display m-0" style={{ fontSize: "clamp(19px, 1.8vw, 23px)", lineHeight: 1.45 }}>{cur.overview}</p>
                </div>
                <div className="h-px bg-[#EFE6D8]" />
                <div className="grid gap-[18px]">
                  {[
                    { t: "Love and relationships", d: cur.love, icon: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /> },
                    { t: "Career and finance", d: cur.career, icon: (<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></>) },
                    { t: "Health and wellbeing", d: cur.health, icon: (<><path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15" /><path d="M5 19l8-8" /></>) },
                  ].map((row) => (
                    <div key={row.t} className="flex gap-3.5">
                      <span className="flex-none flex items-center justify-center w-[42px] h-[42px] rounded-full bg-am-gold text-am-maroon">
                        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{row.icon}</svg>
                      </span>
                      <div>
                        <p className="mb-0.5 m-0 font-bold">{row.t}</p>
                        <p className="m-0 text-[15px] text-am-ink-soft">{row.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-x-5 gap-y-3 pt-1.5">
                  <Link href="/horoscope" className="font-bold">Read the full {cur.en} horoscope →</Link>
                  <Link href="/consult" className="inline-flex items-center min-h-11 px-5 rounded-full bg-am-gold text-am-maroon font-bold text-[15px] no-underline">Get a personal reading</Link>
                </div>
              </div>
            </div>
            <p className="mt-[18px] mx-auto max-w-[720px] text-[13px]" style={{ color: "#CDB8DA" }}>Daily horoscopes are general readings for each moon sign. For guidance based on your own chart, book a personal consultation.</p>
          </div>
        </div>
      </div>

      {/* BLOG */}
      <div id="blog" className="bg-white border-t border-b border-[#EFE6D8]">
        <div className="max-w-[1200px] mx-auto px-6 py-[88px]">
          <div className="flex flex-wrap justify-between items-end gap-x-10 gap-y-4 mb-9">
            <div className="max-w-[620px]">
              <p className="mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">From our journal</p>
              <h2 className="font-serif-display font-normal mb-2.5" style={{ fontSize: "clamp(32px, 3.6vw, 44px)", lineHeight: 1.15 }}>Read, learn, and understand yourself better.</h2>
              <p className="m-0 text-base text-am-ink-soft">Simple articles on astrology, numerology and Vastu, written by Maneswita.</p>
            </div>
            <span className="font-bold text-am-ink-faint">More articles coming soon</span>
          </div>
          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))" }}>
            {[
              { tag: "Astrology", read: "6 min read", title: "Sade Sati: what it really means, and why it is not something to fear", desc: "Saturn’s seven and a half years have a scary reputation. Here is what actually changes, and how to use the phase well.", grad: ["#2E003E", "#6C1594"] },
              { tag: "Numerology", read: "5 min read", title: "Should you change the spelling of your name? How we decide", desc: "A name correction is not about luck. We check how your name number agrees with your birth numbers first.", grad: ["#4A0A66", "#921A11"] },
              { tag: "Vastu", read: "4 min read", title: "Five simple Vastu fixes for your home before Diwali", desc: "No walls broken, no big spends. Small changes room by room that bring the energy of your home back into balance.", grad: ["#B6A377", "#6C1594"] },
            ].map((b, idx) => (
              <div key={b.title} className="am-lift bg-white border border-[#E2D7C4] rounded-[20px] overflow-hidden flex flex-col no-underline text-am-ink">
                <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${b.tag} illustration`} className="block w-full aspect-video">
                  <defs><linearGradient id={`bg${idx}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={b.grad[0]} /><stop offset="1" stopColor={b.grad[1]} /></linearGradient></defs>
                  <rect width="320" height="180" fill={`url(#bg${idx})`} />
                </svg>
                <div className="flex-1 px-6 pt-5 pb-6 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between gap-2.5">
                    <span className="text-xs font-bold tracking-[0.08em] uppercase text-am-purple bg-[#F3E8F7] px-2.5 py-[5px] rounded-full">{b.tag}</span>
                    <span className="text-[13px] text-am-ink-faint">{b.read}</span>
                  </div>
                  <p className="font-serif-display text-[22px] leading-[1.25] m-0">{b.title}</p>
                  <p className="m-0 text-[15px] leading-relaxed text-am-ink-soft">{b.desc}</p>
                  <div className="mt-auto pt-2.5 flex items-center justify-between gap-3 border-t border-[#EFE6D8]">
                    <span className="text-[13px] text-am-ink-soft">By Maneswita</span>
                    <span className="font-bold text-am-maroon text-sm">Coming soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOUNDERS */}
      <div id="founders" className="relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 15% 40%, rgba(146,26,17,0.06), rgba(146,26,17,0) 50%), #FBF7F0" }}>
        <Image src="/images/c6d61635ad545b54bcdda486c37c816a.png" alt="" aria-hidden="true" width={420} height={420} className="am-spin-rev absolute pointer-events-none opacity-40" style={{ right: -150, top: -120 }} />
        <div className="max-w-[1200px] mx-auto px-6 py-[104px] relative">
          <div className="flex flex-wrap gap-16 items-center">
            <div className="flex-[1_1_420px] min-w-0 relative p-[18px]">
              <div aria-hidden="true" className="absolute inset-0 border border-am-maroon opacity-40" style={{ borderRadius: "260px 260px 28px 28px" }} />
              <div className="relative w-full aspect-[4/5] overflow-hidden" style={{ borderRadius: "240px 240px 20px 20px" }}>
                <Image src="/images/26c9dadb7f4b6a08ec59999c3d9e9332.jpg" alt="Maneswita and Ahalya Sangeeta, founders of Ahllya Mystic" fill className="object-cover" style={{ objectPosition: "center 35%" }} />
              </div>
            </div>
            <div className="flex-[1.6_1_460px] min-w-0">
              <p className="mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">Who reads your chart</p>
              <h2 className="font-serif-display font-normal mb-[18px]" style={{ fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1.2 }}>
                A mother and daughter,<br /><span className="am-nowrap">reading every chart together.</span>
              </h2>
              <p className="mb-8 text-am-ink-soft">We follow the path of Chanakya, Aryabhatta and Brahmagupta, who trusted the science of the stars. Astrology does not control your destiny. It reveals it, so you can walk it with awareness.</p>
              <div className="grid gap-4">
                <div className="bg-white border border-am-cream-border rounded-2xl px-6 py-[22px] outline outline-1 outline-[#EFE6D8] outline-offset-[-8px]">
                  <p className="font-serif-display text-[22px] m-0">Ahalya Sangeeta</p>
                  <p className="mt-0.5 mb-2.5 text-sm text-am-maroon font-semibold">Founder</p>
                  <p className="m-0 text-[15px] text-am-ink-soft"><span className="am-nowrap">Vedic and KP astrology, numerology and Vastu.</span><br />6 years of practice.</p>
                </div>
                <div className="bg-white border border-am-cream-border rounded-2xl px-6 py-[22px] outline outline-1 outline-[#EFE6D8] outline-offset-[-8px]">
                  <p className="font-serif-display text-[22px] m-0">Maneswita</p>
                  <p className="mt-0.5 mb-2.5 text-sm text-am-maroon font-semibold">Co-founder</p>
                  <p className="m-0 text-[15px] text-am-ink-soft"><span className="am-nowrap">Vedic and KP astrology and numerology.</span><br />5 years of practice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div id="stories" className="relative overflow-hidden border-t border-am-cream-border" style={{ background: "radial-gradient(ellipse at 85% 10%, rgba(108,21,148,0.06), rgba(108,21,148,0) 50%), #FFFDF9" }}>
        <Image src="/images/139dc9f8771bafe47e83ebdfd8f024a6.png" alt="" aria-hidden="true" width={440} height={440} className="am-spin absolute pointer-events-none opacity-[0.12]" style={{ left: -140, bottom: -160 }} />
        <div className="max-w-[1200px] mx-auto px-6 pt-[88px] pb-24 relative">
          <div className="text-center mx-auto mb-11">
            <p className="mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">Client stories</p>
            <h2 className="font-serif-display font-normal m-0" style={{ fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: 1.15 }}><span className="am-nowrap">Words from those we have guided.</span></h2>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))" }}>
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="am-lift m-0 bg-white border border-am-cream-border rounded-[20px] p-6 flex flex-col gap-4 outline outline-1 outline-[#EFE6D8] outline-offset-[-9px]">
                <figcaption className="flex items-center gap-3">
                  <span className="flex-1 min-w-0">
                    <span className="block font-bold">{t.name}</span>
                    <span className="block text-[13px] text-am-ink-soft">{t.loc}</span>
                  </span>
                  <span className="flex-none text-xs font-bold text-am-maroon bg-am-gold px-2.5 py-1 rounded-full">{t.tag}</span>
                </figcaption>
                <blockquote className="m-0 relative bg-[#F3E8F7] rounded-tl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl px-4 pt-3.5 pb-7 text-[15px] leading-relaxed text-am-ink">
                  {t.quote}
                </blockquote>
              </figure>
            ))}
          </div>
          <p className="mt-9 text-center text-[15px] text-am-ink-soft">
            Have we guided you? <a href="https://wa.me/919129237566" className="font-bold">Share your experience on WhatsApp →</a>
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="relative overflow-hidden">
        <div className="max-w-[860px] mx-auto px-6 py-24 relative">
          <p className="mb-2.5 text-center text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">Questions</p>
          <h2 className="font-serif-display font-normal mb-10 text-center" style={{ fontSize: "clamp(32px, 3.6vw, 44px)", lineHeight: 1.15 }}>Before you book</h2>
          <div className="grid gap-3">
            {FAQS.map((f) => (
              <details key={f.q} className="bg-white border border-am-cream-border rounded-2xl px-6">
                <summary className="flex justify-between items-center gap-4 min-h-16 font-bold">
                  {f.q}
                  <span className="faq-plus flex-none text-2xl text-am-maroon transition-transform" aria-hidden="true">+</span>
                </summary>
                <p className="mb-[22px] m-0 text-am-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="max-w-[1200px] mx-auto px-6 pb-24">
        <div className="relative overflow-hidden text-white rounded-[28px]" style={{ background: "linear-gradient(120deg, #2E003E 0%, #6C1594 100%)" }}>
          <div className="am-stars" aria-hidden="true" />
          <Image src="/images/c78c760843b4d5a96c8f408f537e3799.png" alt="" aria-hidden="true" width={460} height={460} className="am-spin absolute pointer-events-none opacity-20" style={{ right: -160, top: -150 }} />
          <div className="relative p-8 md:p-16 flex flex-wrap items-center justify-between gap-7">
            <div className="flex-[1_1_100%] min-w-0">
              <h2 className="font-serif-display font-normal mb-3 text-white" style={{ fontSize: "clamp(26px, 2.8vw, 38px)", lineHeight: 1.2 }}>
                <span className="am-nowrap-lg">Let the stars guide you, the numbers support you,</span>
                <br className="am-br-desk" />{" "}
                <span className="am-nowrap-lg">and your name carry you toward your true path.</span>
              </h2>
              <p className="m-0 text-am-lavender">Not sure where to start? Message us on WhatsApp and we will point you to the right reading.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/consult" className="inline-flex items-center justify-center min-h-[52px] min-w-[240px] box-border px-7 rounded-full bg-am-gold text-am-maroon font-bold no-underline">Book a consultation</Link>
              <a href="https://wa.me/919129237566" className="inline-flex items-center justify-center gap-2 min-h-[52px] min-w-[240px] box-border px-7 rounded-full border border-white/45 text-white font-bold no-underline">
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" /></svg>
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
