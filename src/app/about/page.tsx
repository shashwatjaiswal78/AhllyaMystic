import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Ahllya Mystic",
  description:
    "Ahllya Mystic is a mother and daughter practice run by Ahalya Sangeeta and Maneswita, reading Vedic and KP astrology, numerology and Vastu with honesty and heart for six years.",
};

const OFFERS = [
  {
    title: "Kundli readings",
    body: "Your complete birth chart, Varshphal for the year ahead, and Lal Kitab remedies.",
    cta: "View reports →",
  },
  {
    title: "Numerology",
    body: "Name correction, baby names, business names and lucky mobile numbers.",
    cta: "Explore numerology →",
  },
  {
    title: "Kundli Milan",
    body: "Both charts read in full before marriage, with doshas and remedies.",
    cta: "Check compatibility →",
  },
  {
    title: "Consultations",
    body: "Talk to us directly on an audio or video call, in Hindi or English.",
    cta: "Book a call →",
  },
  {
    title: "Courses",
    body: "Learn astrology, numerology and manifestation from us.",
    cta: "See courses →",
  },
  {
    title: "Free tools",
    body: "Your free Kundli, Moon sign and daily horoscope.",
    cta: "Try them free →",
  },
];

const HOW_WE_WORK = [
  {
    title: "Read by us, not by software",
    body: "Every report and consultation is prepared by Ahalya Sangeeta and Maneswita after studying your chart. Only our free tools are calculated automatically.",
    icon: (
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0" />
    ),
  },
  {
    title: "Honest, never fear-based",
    body: "We tell you what your chart shows, gently and clearly. No scare stories, and no pressure to buy expensive rituals.",
    icon: <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />,
  },
  {
    title: "Remedies you can actually do",
    body: "Mantras, small daily habits, the right spelling or number. Practical steps that fit into ordinary life.",
    icon: <path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6" />,
  },
  {
    title: "Support that continues",
    body: "Questions after your report? Message us on WhatsApp. We see our work as ongoing guidance, not one-off predictions.",
    icon: <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />,
  },
];

const NUMBERS = [
  { big: "6 years", small: "of practice" },
  { big: "4", small: "disciplines: Vedic, KP, numerology, Vastu" },
  { big: "2", small: "languages: Hindi and English" },
  { big: "7 days", small: "a week, 11 am to 7 pm" },
];

const TESTIMONIALS = [
  {
    name: "Arushi B.",
    city: "Delhi",
    tag: "Mobile Number Report",
    quote:
      "I never thought my phone number could matter, but the report explained everything so simply. I switched to one of the suggested numbers and it just feels right. Thank you!",
  },
  {
    name: "Tikesh Negi",
    city: "Haldwani",
    tag: "Name and Mobile Reports",
    quote:
      "Got both my name and mobile number reports done. They explained clearly why my current spelling wasn't supporting me and suggested a small, easy change. Very detailed, and patient with all my questions.",
  },
  {
    name: "Gaurav Jha",
    city: "Lucknow",
    tag: "Personalised Kundli",
    quote:
      "The Kundli report was far more detailed than I expected, and you can tell someone actually studied my chart. The remedies are practical and easy to follow. Highly recommend.",
  },
];

const FAQS = [
  {
    q: "Who will read my chart?",
    a: "Ahalya Sangeeta and Maneswita, personally. Every paid report and consultation is prepared by one or both of us after studying your chart.",
  },
  {
    q: "What do you offer?",
    a: "Kundli reports, Lal Kitab, Varshphal, Kundli Milan, name and mobile numerology, consultations and courses, in Hindi or English.",
  },
  {
    q: "Is astrology a superstition?",
    a: "We see astrology and numerology as ancient systems built on careful observation and calculation. We use them for self-awareness and guidance, to help you make choices with more clarity.",
  },
  {
    q: "Can anyone benefit?",
    a: "Anyone looking for clarity about a decision, a phase of life or a pattern that keeps repeating. You do not need to believe in anything to start. Just come with an open mind.",
  },
  {
    q: "How do I get started?",
    a: "Try our free Kundli first, or message us on WhatsApp and tell us what is on your mind. We will point you to the right reading.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <Nav />

      {/* ABOUT HERO */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 100% 0%, rgba(108,21,148,0.10), rgba(108,21,148,0) 50%), radial-gradient(ellipse at 0% 100%, rgba(146,26,17,0.06), rgba(146,26,17,0) 45%), #FBF7F0",
        }}
      >
        <Image
          src="/images/c6d61635ad545b54bcdda486c37c816a.png"
          alt=""
          aria-hidden="true"
          width={460}
          height={460}
          className="am-spin-rev absolute -right-[170px] -top-[140px] w-[460px] h-[460px] opacity-35 pointer-events-none"
        />
        <div className="max-w-[1200px] mx-auto px-6 pt-6 pb-24 relative">
          <nav aria-label="Breadcrumb" className="text-sm text-am-ink-soft mb-10">
            <a href="/" className="text-am-ink-soft no-underline">Home</a>
            <span aria-hidden="true" className="mx-2">/</span>
            <span className="text-am-ink font-semibold">About us</span>
          </nav>
          <div className="flex flex-wrap items-center gap-14">
            <div className="am-center-mobile flex-[1.2_1_460px] min-w-0">
              <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">
                About Ahllya Mystic
              </p>
              <h1 className="font-serif-display font-normal m-0 mb-4.5 text-[clamp(36px,4.4vw,56px)] leading-[1.08]">
                A mother and daughter,
                <br />
                reading the stars with care.
              </h1>
              <p className="m-0 mb-7 text-lg text-am-ink-soft max-w-[560px]">
                Modern guidance through ancient wisdom. We are Ahalya Sangeeta and
                Maneswita, and for six years we have helped people understand their
                charts, their names and their numbers, with honesty and heart.
              </p>
              <div className="am-hero-flex flex flex-wrap gap-3">
                <a
                  href="/consult"
                  className="inline-flex items-center justify-center min-h-[54px] min-w-[220px] px-7 rounded-full bg-am-gold text-am-maroon font-bold text-base no-underline"
                >
                  Book a consultation
                </a>
                <a
                  href="#founders"
                  className="inline-flex items-center justify-center min-h-[54px] min-w-[min(200px,100%)] px-7 rounded-full border-[1.5px] border-am-purple text-am-purple font-bold text-base no-underline"
                >
                  Meet us
                </a>
              </div>
            </div>
            <div className="flex-[1_1_380px] min-w-0 relative p-4.5 max-w-[480px] mx-auto">
              <div
                aria-hidden="true"
                className="absolute inset-0 border border-am-maroon opacity-40"
                style={{ borderRadius: "260px 260px 28px 28px" }}
              />
              <Image
                src="/images/26c9dadb7f4b6a08ec59999c3d9e9332.jpg"
                alt="Maneswita and Ahalya Sangeeta, founders of Ahllya Mystic"
                width={480}
                height={600}
                className="relative w-full aspect-[4/5] object-cover block"
                style={{ objectPosition: "center 35%", borderRadius: "240px 240px 20px 20px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-10">
        <div
          className="grid gap-10 items-start"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", columnGap: "64px" }}
        >
          <div className="am-center-mobile">
            <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">
              Our story
            </p>
            <h2 className="font-serif-display font-normal m-0 mb-3.5 text-[clamp(30px,3.4vw,42px)] leading-[1.15]">
              It began at home, with a shared love for the stars.
            </h2>
          </div>
          <div className="grid gap-4 text-[17px] leading-[1.75] text-[#3A3350]">
            <p className="m-0">
              Ahllya Mystic is a mother and daughter practice. We started it to
              share our passion for astrology, numerology and Vastu, and to make
              this knowledge accessible, relatable and truly useful in everyday
              life.
            </p>
            <p className="m-0">
              For us, a chart is not a verdict. It is a map of the energies you
              were born with, and knowing it helps you move through life with
              more awareness. Our work is to read that map carefully, explain it
              simply, and suggest remedies that remove the blocks between you and
              peace, clarity and growth.
            </p>
            <p className="m-0">
              We read every chart ourselves, and many of them together. That is
              slower than software, and we think it is worth it.
            </p>
          </div>
        </div>
      </div>

      {/* QUOTE */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-24">
        <figure
          className="relative overflow-hidden m-0 text-white rounded-[28px] text-center"
          style={{
            background: "linear-gradient(120deg, #2E003E 0%, #6C1594 100%)",
            padding: "clamp(36px, 6vw, 72px)",
          }}
        >
          <div className="am-stars" aria-hidden="true" />
          <p
            aria-hidden="true"
            className="font-serif-display relative m-0 mb-1.5 text-am-gold"
            style={{ fontSize: 72, lineHeight: 0.6 }}
          >
            &ldquo;
          </p>
          <blockquote className="font-serif-display relative m-0 mx-auto max-w-[820px] text-[clamp(26px,3.2vw,40px)] leading-[1.3]">
            If it&rsquo;s good, then it can be made better. If it&rsquo;s bad,
            then it can be made easier.
          </blockquote>
          <figcaption className="relative mt-5 text-sm text-am-lavender">
            The belief behind every reading we do
          </figcaption>
        </figure>
      </div>

      {/* FOUNDERS */}
      <div id="founders" className="bg-[#F4EDE1]">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="am-center-mobile mb-9">
            <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">
              Meet the founders
            </p>
            <h2 className="font-serif-display font-normal m-0 mb-3.5 text-[clamp(30px,3.4vw,42px)] leading-[1.15]">
              The two people who will read your chart.
            </h2>
            <p className="m-0 text-base text-am-ink-soft max-w-[680px]">
              We follow the path of Chanakya, Aryabhatta and Brahmagupta, who
              trusted the science of the stars. Astrology does not control your
              destiny. It reveals it, so you can walk it with awareness.
            </p>
          </div>
          <div
            className="grid gap-5"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))" }}
          >
            <div className="am-lift bg-white border border-am-cream-border rounded-[22px] outline outline-1 outline-[#EFE6D8] [outline-offset:-9px] p-7">
              <div className="flex items-center gap-4 mb-4.5">
                <span
                  aria-hidden="true"
                  className="shrink-0 flex items-center justify-center w-18 h-18 rounded-full font-serif-display text-[26px] text-am-gold"
                  style={{
                    width: 72,
                    height: 72,
                    background: "linear-gradient(150deg, #2E003E, #6C1594)",
                    boxShadow: "0 0 0 4px #FFFFFF, 0 0 0 5px #E8DFD0",
                  }}
                >
                  AS
                </span>
                <div>
                  <p className="font-serif-display m-0 text-[28px] leading-[1.15]">Ahalya Sangeeta</p>
                  <p className="m-0 mt-0.5 text-sm text-am-maroon font-semibold">Founder</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Vedic astrology", "KP astrology", "Numerology", "Vastu"].map((t) => (
                  <span key={t} className="text-[13px] font-semibold text-[#3D0752] bg-[#F3E8F7] px-3 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <p className="m-0 text-base leading-[1.7] text-[#3A3350]">
                Ahalya Sangeeta reads Kundlis, names, numbers and homes, across
                Vedic and KP astrology, numerology and Vastu. She has six years of
                practice, and prepares every report and consultation herself or
                together with Maneswita.
              </p>
            </div>

            <div className="am-lift bg-white border border-am-cream-border rounded-[22px] outline outline-1 outline-[#EFE6D8] [outline-offset:-9px] p-7">
              <div className="flex items-center gap-4 mb-4.5">
                <span
                  aria-hidden="true"
                  className="shrink-0 flex items-center justify-center font-serif-display text-[26px] text-am-gold rounded-full"
                  style={{
                    width: 72,
                    height: 72,
                    background: "linear-gradient(150deg, #2E003E, #6C1594)",
                    boxShadow: "0 0 0 4px #FFFFFF, 0 0 0 5px #E8DFD0",
                  }}
                >
                  M
                </span>
                <div>
                  <p className="font-serif-display m-0 text-[28px] leading-[1.15]">Maneswita</p>
                  <p className="m-0 mt-0.5 text-sm text-am-maroon font-semibold">Co-founder</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Vedic astrology", "KP astrology", "Numerology"].map((t) => (
                  <span key={t} className="text-[13px] font-semibold text-[#3D0752] bg-[#F3E8F7] px-3 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <p className="m-0 text-base leading-[1.7] text-[#3A3350]">
                Maneswita works alongside her mother across Vedic and KP astrology
                and numerology, with five years of practice. Many readings are
                prepared by the two of them together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NUMBERS */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(90deg, #2E003E 0%, #4A0A66 100%)" }}>
        <div className="am-stars" aria-hidden="true" />
        <div
          className="relative max-w-[1200px] mx-auto px-6 py-14 grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))" }}
        >
          {NUMBERS.map((n) => (
            <div key={n.small} className="text-center px-3 py-2">
              <p className="font-serif-display m-0 text-[clamp(34px,4vw,46px)] leading-none text-white">{n.big}</p>
              <p className="m-0 mt-2 text-sm text-am-lavender">{n.small}</p>
            </div>
          ))}
        </div>
      </div>

      {/* HOW WE WORK */}
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div
          className="grid gap-10 items-start"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", columnGap: "64px" }}
        >
          <div className="am-center-mobile">
            <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">
              How we work
            </p>
            <h2 className="font-serif-display font-normal m-0 mb-3.5 text-[clamp(30px,3.4vw,42px)] leading-[1.15]">
              Guidance that is personal, honest and easy to follow.
            </h2>
            <p className="m-0 text-base text-am-ink-soft">
              We treat astrology, numerology and name vibrations as tools for
              self-awareness and spiritual alignment, not just prediction. Every
              person&rsquo;s mindset, energy and goals are different, so every
              reading is too.
            </p>
          </div>
          <div className="grid gap-7">
            {HOW_WE_WORK.map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <span className="shrink-0 flex items-center justify-center w-[46px] h-[46px] rounded-full bg-am-gold text-am-maroon">
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </span>
                <div>
                  <p className="font-serif-display m-0 mb-1 text-[22px]">{item.title}</p>
                  <p className="m-0 text-[15px] leading-[1.65] text-am-ink-soft">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT WE OFFER */}
      <div className="max-w-[1200px] mx-auto px-6 pb-24">
        <div className="am-center-mobile mb-7">
          <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">
            What we offer
          </p>
          <h2 className="font-serif-display font-normal m-0 mb-3.5 text-[clamp(30px,3.4vw,42px)] leading-[1.15]">
            Where we can help.
          </h2>
        </div>
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))" }}>
          {OFFERS.map((o) => (
            <a
              key={o.title}
              href="/"
              className="am-lift flex flex-col gap-1.5 no-underline text-am-ink bg-white border border-am-cream-border rounded-[22px] outline outline-1 outline-[#EFE6D8] [outline-offset:-9px] px-6 py-5.5"
            >
              <span className="font-serif-display text-[22px]">{o.title}</span>
              <span className="text-[15px] text-am-ink-soft flex-1">{o.body}</span>
              <span className="mt-2 text-sm font-bold text-am-purple">{o.cta}</span>
            </a>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div
        id="stories"
        className="relative overflow-hidden border-t border-am-cream-border"
        style={{ background: "radial-gradient(ellipse at 85% 10%, rgba(108,21,148,0.06), rgba(108,21,148,0) 50%), #FFFDF9" }}
      >
        <Image
          src="/images/139dc9f8771bafe47e83ebdfd8f024a6.png"
          alt=""
          aria-hidden="true"
          width={440}
          height={440}
          className="am-spin absolute -left-[140px] -bottom-[160px] w-[440px] h-[440px] opacity-10 pointer-events-none"
        />
        <div className="max-w-[1200px] mx-auto px-6 pt-22 pb-24 relative">
          <div className="text-center mx-auto mb-11">
            <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">
              Client stories
            </p>
            <h2 className="font-serif-display font-normal m-0 text-[clamp(30px,3.6vw,44px)] leading-[1.15]">
              <span className="am-nowrap">Words from those we have guided.</span>
            </h2>
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))" }}>
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="am-lift m-0 bg-white border border-am-cream-border rounded-[20px] p-6 flex flex-col gap-4 outline outline-1 outline-[#EFE6D8] [outline-offset:-9px]"
              >
                <figcaption className="flex items-center gap-3">
                  <span className="flex-1 min-w-0">
                    <span className="block font-bold">{t.name}</span>
                    <span className="block text-[13px] text-am-ink-soft">{t.city}</span>
                  </span>
                  <span className="shrink-0 text-xs font-bold text-am-maroon bg-am-gold px-2.5 py-1 rounded-full">
                    {t.tag}
                  </span>
                </figcaption>
                <blockquote
                  className="m-0 relative bg-[#F3E8F7] text-[15px] leading-[1.6] text-am-ink px-4 pt-3.5 pb-7"
                  style={{ borderRadius: "4px 16px 16px 16px" }}
                >
                  {t.quote}
                </blockquote>
              </figure>
            ))}
          </div>

          <p className="mt-9 text-center text-[15px] text-am-ink-soft">
            Have we guided you?{" "}
            <a href="https://wa.me/919129237566" className="font-bold">
              Share your experience on WhatsApp →
            </a>
          </p>
        </div>
      </div>

      {/* ABOUT FAQ */}
      <div className="max-w-[860px] mx-auto px-6 pt-22 pb-24">
        <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold text-center">
          Questions
        </p>
        <h2 className="font-serif-display font-normal m-0 mb-7 text-[clamp(30px,3.4vw,42px)] leading-[1.15] text-center">
          Getting to know us
        </h2>
        <div className="grid gap-2.5">
          {FAQS.map((f) => (
            <details key={f.q} className="bg-white border border-am-cream-border rounded-2xl px-5">
              <summary className="flex items-center justify-between gap-4 min-h-[60px] font-bold">
                {f.q}
                <span className="faq-plus shrink-0 text-xl text-am-maroon transition-transform">+</span>
              </summary>
              <p className="m-0 mb-4.5 text-am-ink-soft leading-[1.65]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="max-w-[1200px] mx-auto px-6 pb-24">
        <div
          className="relative overflow-hidden text-white rounded-[28px]"
          style={{ background: "linear-gradient(120deg, #2E003E 0%, #6C1594 100%)" }}
        >
          <div className="am-stars" aria-hidden="true" />
          <Image
            src="/images/c78c760843b4d5a96c8f408f537e3799.png"
            alt=""
            aria-hidden="true"
            width={460}
            height={460}
            className="am-spin absolute -right-[160px] -top-[150px] w-[460px] h-[460px] opacity-20 pointer-events-none"
          />
          <div
            className="relative flex flex-wrap items-center justify-between gap-7"
            style={{ padding: "clamp(32px, 5vw, 64px)" }}
          >
            <div className="flex-[1_1_100%] min-w-0">
              <h2 className="font-serif-display font-normal m-0 mb-3 text-[clamp(26px,2.8vw,38px)] leading-[1.2] text-white">
                <span className="am-nowrap-lg">
                  Let the stars guide you, the numbers support you,
                </span>
                <br className="am-br-desk" />{" "}
                <span className="am-nowrap-lg">
                  and your name carry you toward your true path.
                </span>
              </h2>
              <p className="m-0 text-am-lavender">
                Not sure where to start? Message us on WhatsApp and we will point
                you to the right reading.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/consult"
                className="inline-flex items-center justify-center min-h-13 min-w-[240px] box-border px-7 rounded-full bg-am-gold text-am-maroon font-bold no-underline"
              >
                Book a consultation
              </a>
              <a
                href="https://wa.me/919129237566"
                className="inline-flex items-center justify-center gap-2 min-h-13 min-w-[240px] box-border px-7 rounded-full border border-white/45 text-white font-bold no-underline"
              >
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />
                </svg>
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
