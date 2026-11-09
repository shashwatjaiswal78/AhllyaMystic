"use client";
/* eslint-disable */
// Generated from the design file LalKitab.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { HoroscopeMenu, HoroscopeMobileMenu, CalculatorsMenu, CalculatorsMobileMenu, ReportsMenu, ReportsMobileMenu } from "./HoroscopeMenu";
import { sx, hole } from "./sx";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState, maskDate, maskTime, maskTimeHM, maskPart } from "./wire";

class ReportLalKitabPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({ menuOpen: false, gender: 'Female', timeUnknown: false, picks: [] }, props && props.initialState);
  }
  renderVals() {
    // One report's content. The same page template is reused for every report by swapping this object.
    var r = {
      name: 'Lal Kitab Report',
      hindi: 'लाल किताब',
      tag: 'Simple remedies',
      lede: 'Find the root cause of problems that keep repeating, with your planets read the Lal Kitab way, what not to donate, year-by-year guidance and simple remedies you can do at home.',
      mrp: '₹1,998', price: '₹999', saving: '₹999'
    };
    var facts = [
      { icon: 'M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', text: 'Ready in 5 to 7 working days' },
      { icon: 'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z', text: 'PDF on email and WhatsApp' },
      { icon: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0', text: 'Prepared by Ahalya Sangeeta and Maneswita' },
      { icon: 'M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6', text: 'Remedies with exact steps and durations' }
    ];
    var chapters = [
      { title: 'Your Lal Kitab charts', text: 'Your Lagna kundli and Lal Kitab kundli, with your rashi, lagna and nakshatra.' },
      { title: 'The key planets of your chart', text: 'The planets of your birth day, your birth time and your fortune, and the overall strength of your chart.' },
      { title: 'Condition of each planet', text: 'Which planets are auspicious (shubh) for you and which are troubled (ashubh), planet by planet.' },
      { title: 'Dosha check', text: 'Manglik, Kaal Sarp and Gandmool dosha, checked in your chart.' },
      { title: 'Ishta Dev and lucky day', text: 'The deity you can worship and the day of the week that is auspicious for you.' },
      { title: 'What not to donate', text: 'The items you should never give away, based on your planets. A Lal Kitab speciality most people never hear about.' },
      { title: 'Your nature and life', text: 'Readings based on your lagna, rashi and nakshatra.' },
      { title: 'Career by planet', text: 'The kinds of work your strongest planets support, and where you are likely to succeed.' },
      { title: 'Lal Kitab planetary periods', text: 'Lal Kitab’s own 35-year cycle of planetary periods, with what each period brings and its remedies.' },
      { title: 'Lal Kitab Varshphal', text: 'Year-by-year Lal Kitab charts for the coming years, with the sub-periods within each year.' },
      { title: 'Your remedies (upay)', text: 'Numbered remedies with exact steps and how long to follow each, often 27 or 43 days in a row.' },
      { title: 'Rules for doing remedies', text: 'One remedy at a time, between sunrise and sunset, without skipping a day, and the other precautions to follow.' }
    ].map((c, i) => ({ num: i + 1, title: c.title, text: c.text }));
    var samples = [];
    var steps = [
      { title: 'Share your details', text: 'Enter your birth details and pay securely.' },
      { title: 'We confirm', text: 'We call you within 24 hours of payment to confirm your name and birth details, so your analysis is accurate.' },
      { title: 'We study your chart', text: 'Our experts read your chart by Lal Kitab rules and choose your remedies.' },
      { title: 'Receive your report', text: 'Your PDF arrives on email and WhatsApp in 5 to 7 working days.' }
    ].map((s, i) => ({ num: i + 1, title: s.title, text: s.text }));
    var audiences = [
      { icon: 'M4 4v6h6M20 20v-6h-6M5 15a7 7 0 0 0 12.6 2M19 9A7 7 0 0 0 6.4 7', title: 'Facing repeated problems', text: 'The same setbacks keep returning in work, money, health or relationships.' },
      { icon: 'M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6', title: 'Looking for simple remedies', text: 'You want practical fixes you can do at home, not costly rituals.' },
      { icon: 'M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', title: 'Facing delays', text: 'Marriage, a job, a house or a promotion keeps getting delayed.' },
      { icon: 'M4 6h16M4 12h10M4 18h7', title: 'New to astrology', text: 'You find traditional astrology complex and want plain, clear guidance.' },
      { icon: 'M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z', title: 'Spiritual seekers and learners', text: 'You want to understand Lal Kitab and how its remedies work.' },
      { icon: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.5 8.5l-2 5-5 2 2-5z', title: 'Anyone seeking direction', text: 'You want clarity about what lies ahead and how to prepare.' }
    ];
    var asks = ['Why do the same problems keep coming back?', 'Which planets are troubled in my chart?', 'What should I never donate?', 'What simple remedy can I do at home?', 'Which kind of work suits me?'].map((t) => ({ text: t }));
    var gains = ['The root cause of your problems', 'Remedies with household items', 'What not to donate', 'Clear rules for each remedy'].map((t) => ({ text: t }));
    var faqs = [
      { q: 'What is Lal Kitab?', a: 'Lal Kitab is a set of Urdu texts from the 1940s, attributed to Pandit Roop Chand Joshi. It combines astrology with palmistry and is known for simple, low-cost remedies.' },
      { q: 'How is it different from a Kundli report?', a: 'A Kundli report gives a complete reading of your life and its timing. A Lal Kitab report focuses on the root causes of recurring problems and on practical remedies to fix them.' },
      { q: 'Is the report personalised?', a: 'Yes. It is prepared from your own birth details by Ahalya Sangeeta and Maneswita. Nothing is generated by software.' },
      { q: 'How long do the remedies take?', a: 'Most remedies are followed for a set number of days in a row, often 27 or 43, and your report gives the duration for each one. Remedies work gradually, and consistency matters more than speed.' },
      { q: 'Can I ask my own questions?', a: 'Yes. Two questions are included. Each is answered on its own page with the Lal Kitab reason behind it and a simple remedy. You can add more at ₹159 each at checkout.' },
      { q: 'Which language is the report in?', a: 'Hindi or English, whichever you choose at checkout.' },
      { q: 'Do I need my exact birth time?', a: 'Yes, as close as possible. Your house positions depend on it, and Lal Kitab remedies are chosen by house.' },
      { q: 'When will I receive it?', a: 'As a PDF on email and WhatsApp, within 5 to 7 working days of payment.' },
      { q: 'Will my details stay private?', a: 'Yes. Your birth details are used only to prepare your report and are never shared.' }
    ];
    var others = [
      { name: 'Personalised Kundli Report', text: 'Your complete birth chart reading: career, money, health, marriage, your next 3 years and remedies.', mrp: '₹1,998', price: '₹999' },
      { name: 'Varshphal 2027', text: 'Your next 12 months, month by month: the year’s main focus, key phases and simple remedies.', mrp: '₹1,478', price: '₹739' },
      { name: 'Couple Kundli Milan', text: 'Gun Milan, Mangal Dosha check and an honest view of long-term compatibility before marriage.', mrp: '₹6,798', price: '₹3,399' }
    ];
    var kundliPoints = ['Vedic (Parashari) birth chart with signs, houses and nakshatras', 'Complete reading of every life area', 'Your dasha periods and the timing of events', 'Remedies such as mantras, daan and gemstone advice'].map((t) => ({ text: t }));
    var lalPoints = ['Lal Kitab chart, where each sign holds a fixed house', 'Focus on the root cause of problems that keep repeating', 'Karmic debts (rinn) and troubled planets', 'What not to donate, and remedies for a set number of days'].map((t) => ({ text: t }));
    var g = this.state.gender;
    var genders = ['Female', 'Male', 'Other'].map((x) => ({ label: x, sel: g === x, notSel: g !== x, pick: () => this.setState({ gender: x }) }));
    var picks = this.state.picks || [];
    var bank = [
      { title: 'Career', items: ['When will I get a stable job or promotion?', 'Is a job or business better for me?', 'When can I change my job?'] },
      { title: 'Money', items: ['When will my finances improve?', 'Will I own a house?'] },
      { title: 'Marriage and family', items: ['When will I get married?', 'Love or arranged marriage?', 'What will my married life be like?', 'Will I have children?'] },
      { title: 'Health', items: ['What health areas should I take care of?'] },
      { title: 'Education and travel', items: ['Should I pursue further studies?', 'Will I settle or work abroad?'] }
    ];
    var toggle = (t) => {
      var cur = (this.state.picks || []).slice();
      var at = cur.indexOf(t);
      if (at >= 0) cur.splice(at, 1); else cur.push(t);
      this.setState({ picks: cur });
    };
    var qGroups = bank.map((g) => ({ title: g.title, items: g.items.map((t) => ({ text: t, sel: picks.indexOf(t) >= 0, notSel: picks.indexOf(t) < 0, toggle: () => toggle(t) })) }));
    var nSlots = Math.max(2, picks.length);
    var slots = Array.from({ length: nSlots }, (_, i) => ({ num: i + 1, text: (picks[i] || '') + (i >= 2 && picks[i] ? '  (+₹159)' : ''), filled: !!picks[i], empty: !picks[i], remove: () => toggle(picks[i]) }));
    var extra = Math.max(0, picks.length - 2);
    var rs = (x) => '₹' + x.toLocaleString('en-IN');
    var unknown = !!this.state.timeUnknown;
    var menuOpen = !!this.state.menuOpen;
    return {
      audiences: audiences, asks: asks, gains: gains, kundliPoints: kundliPoints, lalPoints: lalPoints,
      r: r, facts: facts, chapters: chapters, samples: samples, steps: steps, faqs: faqs, others: others,
      genders: genders, qGroups: qGroups, slots: slots, qCount: picks.length, extraCount: extra, extraPrice: rs(extra * 159), total: rs(999 + extra * 159),
      qStatus: picks.length <= 2 ? picks.length + ' of 2 included' : '2 included + ' + extra + ' extra',
      timeUnknown: unknown, timeKnown: !unknown, timeUnknownAria: unknown ? 'true' : 'false',
      toggleTime: () => this.setState({ timeUnknown: !this.state.timeUnknown }),
      menuOpen: menuOpen,
      menuExpanded: menuOpen ? 'true' : 'false',
      openMenu: () => this.setState({ menuOpen: true }),
      closeMenu: () => this.setState({ menuOpen: false })
    };
  }
}

ReportLalKitabPage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="LalKitab" style={{ display: "contents" }}>
      <div style={{fontFamily: "'Manrope', system-ui, sans-serif", color: "#1E1830", background: "#FBF7F0", fontSize: "14.5px", lineHeight: "1.6"}}>
        <div style={{background: "#FFFFFF", color: "#921A11", fontSize: "13px", fontWeight: "600", textAlign: "center", padding: "10px 16px", borderBottom: "1px solid #EADFD3"}}>
          <a href={"/masterclass"} style={{color: "#921A11", textDecoration: "none"}}>
            {"Live 2-day Manifestation Masterclass. Dates announced soon. Register for ₹99 →"}
          </a>
        </div>
        <header style={{position: "sticky", top: "0", zIndex: "50", background: "rgba(46,0,62,0.94)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,255,255,0.08)"}}>
          <nav aria-label={"Main"} style={{maxWidth: "1200px", margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px"}}>
            <a href={"/"} aria-label={"Ahllya Mystic home"} style={{display: "block", flex: "none"}}>
              <img className={"am-navlogo"} src={"/images/f0424906cf2ed307d839fd952ac77981.png"} alt={"Ahllya Mystic"} style={{height: "48px", width: "auto", display: "block"}} />
            </a>
            <div className={"am-navlinks"} style={{alignItems: "center", gap: "30px", fontSize: "13.5px", fontWeight: "500"}}>
              <a href={"/#consult"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Consultations"}
              </a>
              <a href={"/kundli"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Free Kundli"}
              </a>
              <CalculatorsMenu />
              <ReportsMenu />
              <a href={"/courses"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Courses"}
              </a>
              <HoroscopeMenu />
              <a href={"/#blog"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Blogs"}
              </a>
              <a href={"/about"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"About"}
              </a>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
              <a href={"https://wa.me/919129237566"} className={"am-navwa"} aria-label={"Chat on WhatsApp"} style={{display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF"}}>
                <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <path d={"M4 20l1.3-3.9A8 8 0 1 1 8 19z"} />
                  <path d={"M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2z"} />
                </svg>
              </a>
              <a href={"/consult"} className={"am-navcta"} style={{alignItems: "center", minHeight: "44px", padding: "0 22px", borderRadius: "999px", border: "2px solid #FCCE07", color: "#FFFFFF", fontWeight: "700", fontSize: "13.5px", textDecoration: "none"}}>
                {"Book a consultation"}
              </a>
              <button type={"button"} className={"am-burger"} aria-label={"Open menu"} aria-controls={"am-drawer"} aria-expanded={v.menuExpanded} onClick={v.openMenu} style={{alignItems: "center", justifyContent: "center", width: "44px", height: "44px", padding: "0", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.3)", background: "transparent", color: "#FFFFFF", cursor: "pointer"}}>
                <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"}>
                  <path d={"M4 7h16M4 12h16M10 17h10"} />
                </svg>
              </button>
            </div>
          </nav>
        </header>
        {v.menuOpen ? (
          <>
            <div style={{position: "fixed", inset: "0", zIndex: "100"}}>
              <button type={"button"} className={"am-fade"} aria-label={"Close menu"} onClick={v.closeMenu} style={{position: "absolute", inset: "0", width: "100%", height: "100%", padding: "0", border: "0", background: "rgba(20,0,28,0.6)", cursor: "pointer"}} />
              <div id={"am-drawer"} className={"am-slide"} role={"dialog"} aria-modal={"true"} aria-label={"Menu"} style={{position: "absolute", top: "0", right: "0", bottom: "0", width: "min(330px, 86vw)", overflowY: "auto", background: "linear-gradient(180deg, #2E003E 0%, #4A0A66 55%, #6C1594 100%)", color: "#FFFFFF", boxShadow: "-24px 0 48px rgba(0,0,0,0.4)"}}>
                <div className={"am-stars"} aria-hidden={"true"} />
                <div style={{position: "relative", padding: "18px 22px 32px", display: "flex", flexDirection: "column", minHeight: "100%", boxSizing: "border-box"}}>
                  <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px"}}>
                    <img src={"/images/f0424906cf2ed307d839fd952ac77981.png"} alt={"Ahllya Mystic"} style={{height: "44px", width: "auto", display: "block"}} />
                    <button type={"button"} aria-label={"Close menu"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", padding: "0", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.3)", background: "transparent", color: "#FFFFFF", cursor: "pointer"}}>
                      <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"}>
                        <path d={"M6 6l12 12M18 6L6 18"} />
                      </svg>
                    </button>
                  </div>
                  <div aria-hidden={"true"} style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px"}}>
                    <svg width={"12"} height={"12"} viewBox={"0 0 14 14"}>
                      <path d={"M7 0L14 7L7 14L0 7Z"} fill={"#FFFFFF"} />
                    </svg>
                    <span style={{flex: "1", height: "1px", background: "rgba(255,255,255,0.3)"}} />
                  </div>
                  <a href={"/#consult"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                    {"Consultations"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/kundli"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                    {"Free Kundli"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <CalculatorsMobileMenu onNavigate={v.closeMenu} />
                  <ReportsMobileMenu onNavigate={v.closeMenu} />
                  <a href={"/courses"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                    {"Courses"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <HoroscopeMobileMenu onNavigate={v.closeMenu} />
                  <a href={"/#blog"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                    {"Blogs"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/about"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                    {"About"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <div style={{marginTop: "28px", display: "grid", gap: "12px"}}>
                    <a href={"/consult"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "52px", borderRadius: "999px", border: "2px solid #FCCE07", color: "#FFFFFF", fontWeight: "700", textDecoration: "none"}}>
                      {"Book a consultation"}
                    </a>
                    <a href={"https://wa.me/919129237566"} style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "52px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.35)", color: "#FFFFFF", fontWeight: "600", textDecoration: "none"}}>
                      <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                        <path d={"M4 20l1.3-3.9A8 8 0 1 1 8 19z"} />
                      </svg>
                      {"WhatsApp us"}
                    </a>
                  </div>
                  <p style={{margin: "auto 0 0", paddingTop: "32px", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "15px", color: "#EADFF2", textAlign: "center"}}>
                    {"ज्योतिष · अंक शास्त्र · वास्तु"}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <div style={{position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at 100% 0%, rgba(108,21,148,0.08), rgba(108,21,148,0) 50%), radial-gradient(ellipse at 0% 100%, rgba(146,26,17,0.05), rgba(146,26,17,0) 45%), #FBF7F0"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "22px 24px 88px", position: "relative"}}>
            <nav aria-label={"Breadcrumb"} style={{fontSize: "13px", color: "#5C5470", marginBottom: "36px"}}>
              <a href={"/"} style={{color: "#5C5470", textDecoration: "none"}}>
                {"Home"}
              </a>
              <span aria-hidden={"true"} style={{margin: "0 8px"}}>
                {"/"}
              </span>
              <a href={"/#reports"} style={{color: "#5C5470", textDecoration: "none"}}>
                {"Reports"}
              </a>
              <span aria-hidden={"true"} style={{margin: "0 8px"}}>
                {"/"}
              </span>
              <span style={{color: "#1E1830", fontWeight: "600"}}>
                {hole(v.r?.name)}
              </span>
            </nav>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px"}}>
              <div style={{flex: "1 1 400px", minWidth: "0", display: "flex", justifyContent: "center"}}>
                <div style={{position: "relative", width: "min(100%, 420px)", aspectRatio: "4 / 5"}}>
                  <div aria-hidden={"true"} style={{position: "absolute", inset: "22px -18px -18px 22px", borderRadius: "18px", background: "#FFFFFF", border: "1px solid #E8DFD0", transform: "rotate(4deg)"}} />
                  <div aria-hidden={"true"} style={{position: "absolute", inset: "11px -9px -9px 11px", borderRadius: "18px", background: "#FFFFFF", border: "1px solid #E8DFD0", transform: "rotate(2deg)"}} />
                  <div style={{position: "absolute", inset: "0", borderRadius: "18px", overflow: "hidden", background: "linear-gradient(160deg, #2E003E 0%, #4A0A66 55%, #6C1594 100%)", color: "#FFFFFF", boxShadow: "0 30px 60px -30px rgba(46,0,62,0.6)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "34px 28px"}}>
                    <div className={"am-stars"} aria-hidden={"true"} />
                    <img src={"/images/f0424906cf2ed307d839fd952ac77981.png"} alt={""} style={{position: "relative", height: "46px", width: "auto"}} />
                    <div style={{position: "relative", width: "62%", aspectRatio: "1 / 1", margin: "26px 0 22px"}}>
                      <img className={"am-spin-zodiac"} src={"/images/9f12ecbbc1351b2a79d2c5c2543824a3.png"} alt={""} style={{width: "100%", height: "100%", display: "block", opacity: "0.95"}} />
                    </div>
                    <p style={{position: "relative", margin: "0", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "16px", color: "#EADFF2"}}>
                      {hole(v.r?.hindi)}
                    </p>
                    <p style={{position: "relative", margin: "4px 0 0", fontFamily: "'Marcellus', serif", fontSize: "23px", lineHeight: "1.2"}}>
                      {hole(v.r?.name)}
                    </p>
                    <p style={{position: "relative", margin: "auto 0 0", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#EADFF2"}}>
                      {"Prepared for "}
                      <span style={{color: "#FFFFFF", fontWeight: "700"}}>
                        {"your name"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={"am-center-mobile"} style={{flex: "1.15 1 460px", minWidth: "0"}}>
                <p style={{margin: "0 0 14px", display: "flex", flexWrap: "wrap", gap: "8px"}} className={"am-hero-flex"}>
                  <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#FFFFFF", background: "#921A11", padding: "5px 12px", borderRadius: "999px"}}>
                    {hole(v.r?.tag)}
                  </span>
                  <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#6C1594", background: "#F3E8F7", padding: "5px 12px", borderRadius: "999px"}}>
                    {"Written report · PDF"}
                  </span>
                </p>
                <h1 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(28.5px, 3.57vw, 43.5px)", lineHeight: "1.1"}}>
                  {hole(v.r?.name)}
                </h1>
                <p style={{margin: "0 0 24px", fontSize: "16px", color: "#5C5470", maxWidth: "560px"}}>
                  {hole(v.r?.lede)}
                </p>
                <div className={"am-hero-flex"} style={{display: "flex", alignItems: "center", flexWrap: "wrap", gap: "10px 14px", marginBottom: "26px"}}>
                  <span style={{fontSize: "16px", color: "#5C5470", textDecoration: "line-through"}}>
                    {hole(v.r?.mrp)}
                  </span>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "33.5px", lineHeight: "1"}}>
                    {hole(v.r?.price)}
                  </span>
                  <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", color: "#FFFFFF", background: "#6C1594", padding: "4px 12px", borderRadius: "6px"}}>
                    {"50% OFF"}
                  </span>
                </div>
                <div className={"am-hero-flex"} style={{display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "30px"}}>
                  <a href={"/checkout/lal-kitab"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "54px", minWidth: "220px", boxSizing: "border-box", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "14.5px", textDecoration: "none"}}>
                    {"Order now"}
                  </a>
                  <a href={"https://wa.me/919129237566"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "54px", minWidth: "220px", boxSizing: "border-box", padding: "0 28px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", fontSize: "14.5px", textDecoration: "none"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M4 20l1.3-3.9A8 8 0 1 1 8 19z"} />
                    </svg>
                    {"Ask a question"}
                  </a>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: "12px", textAlign: "left"}}>
                  {(v.facts || []).map((f, $index) => (
                    <React.Fragment key={$index}>
                      <div style={{display: "flex", alignItems: "center", gap: "12px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "14px", padding: "12px 14px"}}>
                        <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "38px", height: "38px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                          <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.9"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                            <path d={f?.icon} />
                          </svg>
                        </span>
                        <span style={{fontSize: "13px", lineHeight: "1.4", fontWeight: "600"}}>
                          {hole(f?.text)}
                        </span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px"}}>
          <div className={"am-center-mobile"} style={{marginBottom: "36px"}}>
            <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
              {"Who it is for"}
            </p>
            <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 3.06vw, 37px)", lineHeight: "1.15"}}>
              {"For anyone who wants simple, practical remedies."}
            </h2>
            <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470", maxWidth: "680px"}}>
              {"Lal Kitab, the “red book”, is a set of Urdu texts from the 1940s attributed to Pandit Roop Chand Joshi. It combines astrology with palmistry and is known for finding the root cause of recurring problems and fixing them with everyday household remedies."}
            </p>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "16px", marginBottom: "28px"}}>
            {(v.audiences || []).map((a, $index) => (
              <React.Fragment key={$index}>
                <div className={"am-lift"} style={{display: "flex", gap: "14px", alignItems: "flex-start", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "18px", padding: "20px"}}>
                  <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                    <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={a?.icon} />
                    </svg>
                  </span>
                  <div>
                    <p style={{margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: "17.5px"}}>
                      {hole(a?.title)}
                    </p>
                    <p style={{margin: "0", fontSize: "13.5px", color: "#5C5470"}}>
                      {hole(a?.text)}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "stretch"}}>
            <div style={{flex: "1.4 1 460px", minWidth: "0", background: "#F3E8F7", borderRadius: "20px", padding: "24px 26px"}}>
              <p style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontSize: "19px", color: "#2E003E"}}>
                {"It helps you answer"}
              </p>
              <div style={{display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "14px"}}>
                {(v.asks || []).map((q, $index) => (
                  <React.Fragment key={$index}>
                    <span style={{fontSize: "13px", fontWeight: "600", color: "#3D0752", background: "#FFFFFF", border: "1px solid #DCC8E8", padding: "8px 14px", borderRadius: "999px"}}>
                      {hole(q?.text)}
                    </span>
                  </React.Fragment>
                ))}
              </div>
              <p style={{margin: "0", fontSize: "13px", color: "#5C5470"}}>
                {"Every problem area comes with a simple remedy you can do at home."}
              </p>
            </div>
            <div style={{flex: "1 1 320px", minWidth: "0", background: "linear-gradient(135deg, #2E003E, #6C1594)", color: "#FFFFFF", borderRadius: "20px", padding: "24px 26px", position: "relative", overflow: "hidden"}}>
              <div className={"am-stars"} aria-hidden={"true"} />
              <p style={{position: "relative", margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                {"What you gain"}
              </p>
              <div style={{position: "relative", display: "grid", gap: "10px"}}>
                {(v.gains || []).map((g, $index) => (
                  <React.Fragment key={$index}>
                    <p style={{margin: "0", display: "flex", gap: "10px", alignItems: "center", fontSize: "13.5px"}}>
                      <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FCCE07"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none"}}>
                        <path d={"M5 12l5 5 9-10"} />
                      </svg>
                      {hole(g?.text)}
                    </p>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={{background: "#FFFFFF", borderTop: "1px solid #E8DFD0", borderBottom: "1px solid #E8DFD0"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "92px 24px"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "40px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"What is inside"}
              </p>
              <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 3.06vw, 37px)", lineHeight: "1.15"}}>
                {"Everything your chart says, in plain words."}
              </h2>
              <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470", maxWidth: "680px"}}>
                {"Each section is written for you after we study your chart, so you get clear answers and not generic text."}
              </p>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "16px"}}>
              {(v.chapters || []).map((c, $index) => (
                <React.Fragment key={$index}>
                  <div className={"am-lift"} style={{background: "#FBF7F0", border: "1px solid #EFE6D8", borderRadius: "18px", padding: "22px 22px 24px"}}>
                    <p style={{margin: "0 0 12px", display: "flex", alignItems: "center", gap: "12px"}}>
                      <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "999px", background: "#F3E8F7", color: "#6C1594", fontFamily: "'Marcellus', serif", fontSize: "14.5px"}}>
                        {hole(c?.num)}
                      </span>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "18.5px", lineHeight: "1.25"}}>
                        {hole(c?.title)}
                      </span>
                    </p>
                    <p style={{margin: "0", fontSize: "13.5px", lineHeight: "1.55", color: "#5C5470"}}>
                      {hole(c?.text)}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div style={{position: "relative", overflow: "hidden", background: "#F4EDE1"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "32px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Lal Kitab or Kundli?"}
              </p>
              <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15"}}>
                {"How this report is different."}
              </h2>
              <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470", maxWidth: "700px"}}>
                {"Both are read from your birth details, but they answer different needs. Many of our clients take both."}
              </p>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "20px"}}>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "26px 28px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0 0 2px", fontFamily: "'Marcellus', serif", fontSize: "21px"}}>
                  {"Personalised Kundli Report"}
                </p>
                <p style={{margin: "0 0 16px", fontFamily: "'Tiro Devanagari Hindi', serif", color: "#921A11"}}>
                  {"व्यक्तिगत कुंडली"}
                </p>
                {(v.kundliPoints || []).map((k, $index) => (
                  <React.Fragment key={$index}>
                    <p style={{margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                      <span style={{flex: "none", width: "8px", height: "8px", marginTop: "8px", borderRadius: "999px", background: "#6C1594"}} />
                      {hole(k?.text)}
                    </p>
                  </React.Fragment>
                ))}
                <p style={{margin: "16px 0 0", paddingTop: "14px", borderTop: "1px solid #EFE6D8", fontSize: "13.5px"}}>
                  <b>
                    {"Choose it if"}
                  </b>
                  {" you want a complete picture of your life and its timing."}
                </p>
              </div>
              <div style={{background: "linear-gradient(135deg, #2E003E, #6C1594)", color: "#FFFFFF", borderRadius: "22px", padding: "26px 28px", position: "relative", overflow: "hidden"}}>
                <div className={"am-stars"} aria-hidden={"true"} />
                <p style={{position: "relative", margin: "0 0 2px", fontFamily: "'Marcellus', serif", fontSize: "21px"}}>
                  {"Lal Kitab Report"}
                </p>
                <p style={{position: "relative", margin: "0 0 16px", fontFamily: "'Tiro Devanagari Hindi', serif", color: "#FCCE07"}}>
                  {"लाल किताब"}
                </p>
                <div style={{position: "relative"}}>
                  {(v.lalPoints || []).map((k, $index) => (
                    <React.Fragment key={$index}>
                      <p style={{margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                        <span style={{flex: "none", width: "8px", height: "8px", marginTop: "8px", borderRadius: "999px", background: "#FCCE07"}} />
                        {hole(k?.text)}
                      </p>
                    </React.Fragment>
                  ))}
                </div>
                <p style={{position: "relative", margin: "16px 0 0", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.2)", fontSize: "13.5px"}}>
                  <b>
                    {"Choose it if"}
                  </b>
                  {" the same problems keep coming back and you want practical fixes."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "92px 24px 40px"}}>
          <div style={{textAlign: "center", marginBottom: "44px"}}>
            <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
              {"How it works"}
            </p>
            <h2 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 3.06vw, 37px)", lineHeight: "1.15"}}>
              {"From your details to your report."}
            </h2>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(230px, 100%), 1fr))", gap: "20px"}}>
            {(v.steps || []).map((s, $index) => (
              <React.Fragment key={$index}>
                <div style={{position: "relative", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "18px", padding: "26px 22px", outline: "1px solid #EFE6D8", outlineOffset: "-8px"}}>
                  <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "999px", background: "linear-gradient(135deg, #2E003E, #6C1594)", color: "#FFFFFF", fontFamily: "'Marcellus', serif", fontSize: "17.5px", marginBottom: "16px"}}>
                    {hole(s?.num)}
                  </span>
                  <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "18.5px"}}>
                    {hole(s?.title)}
                  </p>
                  <p style={{margin: "0", fontSize: "13.5px", color: "#5C5470"}}>
                    {hole(s?.text)}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "40px 24px 96px"}}>
          <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px 32px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "clamp(20px, 4vw, 32px)", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
            <div className={"am-center-mobile"} style={{flex: "1 1 420px", minWidth: "0"}}>
              <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "clamp(21px, 2.21vw, 27px)", lineHeight: "1.2"}}>
                {"Ready to order your report?"}
              </p>
              <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470"}}>
                {"It takes about two minutes: your birth details, two questions and a secure payment."}
              </p>
              <p style={{margin: "10px 0 0", fontSize: "13px", fontWeight: "700", color: "#921A11"}}>
                {"Add a call with our experts at checkout and get 10% off your whole order."}
              </p>
            </div>
            <div className={"am-hero-flex"} style={{display: "flex", alignItems: "center", flexWrap: "wrap", gap: "14px 20px"}}>
              <span style={{display: "flex", alignItems: "baseline", gap: "8px"}}>
                <span style={{fontSize: "14.5px", color: "#5C5470", textDecoration: "line-through"}}>
                  {hole(v.r?.mrp)}
                </span>
                <span style={{fontFamily: "'Marcellus', serif", fontSize: "28.5px", lineHeight: "1"}}>
                  {hole(v.r?.price)}
                </span>
              </span>
              <a href={"/checkout/lal-kitab"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "54px", minWidth: "min(200px, 100%)", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "14.5px", textDecoration: "none"}}>
                {"Order now"}
              </a>
            </div>
          </div>
        </div>
        <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(120deg, #2E003E 0%, #4A0A66 55%, #6C1594 100%)", color: "#FFFFFF"}}>
          <div className={"am-stars"} aria-hidden={"true"} />
          <div className={"am-stars2"} aria-hidden={"true"} />
          <img className={"am-orbit"} src={"/images/e9e66e432da62be0b75896cf7ef0608e.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", right: "-40px", top: "20px", width: "460px", height: "460px", opacity: "0.3", pointerEvents: "none"}} />
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "104px 24px", position: "relative"}}>
            <div style={{marginBottom: "52px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
                {"Why it takes us 5 to 7 days"}
              </p>
              <h2 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(24px, 2.55vw, 32px)", lineHeight: "1.25", color: "#FFFFFF"}}>
                <span className={"am-nowrap-lg"}>
                  {"Instant reports are generated by software."}
                </span>
                <br />
                <span className={"am-nowrap-lg"}>
                  {"Ours are prepared by experts who carefully study your chart."}
                </span>
              </h2>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "24px"}}>
              <div style={{borderTop: "1px solid rgba(255,255,255,0.4)", paddingTop: "22px"}}>
                <p style={{margin: "0 0 8px", fontFamily: "'Marcellus', serif", fontSize: "19px", color: "#FFFFFF"}}>
                  {"Read, not generated"}
                </p>
                <p style={{margin: "0", color: "#EADFF2", fontSize: "13.5px"}}>
                  {"Every Kundli is analysed house by house before a single line is written."}
                </p>
              </div>
              <div style={{borderTop: "1px solid rgba(255,255,255,0.4)", paddingTop: "22px"}}>
                <p style={{margin: "0 0 8px", fontFamily: "'Marcellus', serif", fontSize: "19px", color: "#FFFFFF"}}>
                  {"Personalised remedies"}
                </p>
                <p style={{margin: "0", color: "#EADFF2", fontSize: "13.5px"}}>
                  {"Practical, easy to follow remedies that fit your everyday life."}
                </p>
              </div>
              <div style={{borderTop: "1px solid rgba(255,255,255,0.4)", paddingTop: "22px"}}>
                <p style={{margin: "0 0 8px", fontFamily: "'Marcellus', serif", fontSize: "19px", color: "#FFFFFF"}}>
                  {"Support after your report"}
                </p>
                <p style={{margin: "0", color: "#EADFF2", fontSize: "13.5px"}}>
                  {"Unsure about something in your report? Send us one or two questions and we’ll clarify."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{background: "#FBF7F0", borderTop: "1px solid #E8DFD0"}}>
          <div style={{maxWidth: "860px", margin: "0 auto", padding: "92px 24px"}}>
            <p style={{margin: "0 0 10px", textAlign: "center", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
              {"Questions"}
            </p>
            <h2 style={{margin: "0 0 40px", textAlign: "center", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(27px, 3.06vw, 37px)", lineHeight: "1.15"}}>
              {"About Lal Kitab"}
            </h2>
            <div style={{display: "grid", gap: "12px"}}>
              {(v.faqs || []).map((q, $index) => (
                <React.Fragment key={$index}>
                  <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 24px"}}>
                    <summary style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", minHeight: "64px", fontWeight: "700"}}>
                      {hole(q?.q)}
                      <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "21px", color: "#921A11", transition: "transform 0.2s"}}>
                        {"+"}
                      </span>
                    </summary>
                    <p style={{margin: "0 0 22px", color: "#5C5470"}}>
                      {hole(q?.a)}
                    </p>
                  </details>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 24px 92px"}}>
          <div className={"am-center-mobile"} style={{display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "12px", marginBottom: "28px"}}>
            <div>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"More reports"}
              </p>
              <h2 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(24px, 2.55vw, 32px)", lineHeight: "1.15"}}>
                {"Often ordered together"}
              </h2>
            </div>
            <a href={"/#reports"} style={{fontWeight: "700"}}>
              {"See all reports →"}
            </a>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "20px"}}>
            {(v.others || []).map((o, $index) => (
              <React.Fragment key={$index}>
                <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                  <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "20px"}}>
                    {hole(o?.name)}
                  </p>
                  <p style={{margin: "0", fontSize: "13.5px", color: "#5C5470"}}>
                    {hole(o?.text)}
                  </p>
                  <div style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "8px"}}>
                    <span style={{display: "flex", alignItems: "baseline", gap: "6px"}}>
                      <span style={{fontSize: "13.5px", color: "#5C5470", textDecoration: "line-through"}}>
                        {hole(o?.mrp)}
                      </span>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "22.5px"}}>
                        {hole(o?.price)}
                      </span>
                    </span>
                    <a href={reportHref(o?.name)} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", fontSize: "13.5px", textDecoration: "none"}}>
                      {"View report"}
                    </a>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 24px 96px"}}>
          <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(120deg, #2E003E 0%, #6C1594 100%)", color: "#FFFFFF", borderRadius: "28px"}}>
            <div className={"am-stars"} aria-hidden={"true"} />
            <img className={"am-spin"} src={"/images/c78c760843b4d5a96c8f408f537e3799.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", right: "-160px", top: "-150px", width: "460px", height: "460px", opacity: "0.2", pointerEvents: "none"}} />
            <div style={{position: "relative", padding: "clamp(32px, 5vw, 64px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "28px"}}>
              <div style={{flex: "1 1 100%", minWidth: "0"}}>
                <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(22.5px, 2.38vw, 32px)", lineHeight: "1.2", color: "#FFFFFF"}}>
                  <span className={"am-nowrap-lg"}>
                    {"Let the stars guide you, the numbers support you,"}
                  </span>
                  <br className={"am-br-desk"} />
                  {" "}
                  <span className={"am-nowrap-lg"}>
                    {"and your name carry you toward your true path."}
                  </span>
                </h2>
                <p style={{margin: "0", color: "#EADFF2"}}>
                  {"Not sure where to start? Message us on WhatsApp and we will point you to the right reading."}
                </p>
              </div>
              <div style={{display: "flex", flexWrap: "wrap", gap: "12px"}}>
                <a href={"/consult"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", minWidth: "240px", boxSizing: "border-box", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
                  {"Book a consultation"}
                </a>
                <a href={"https://wa.me/919129237566"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "52px", minWidth: "240px", boxSizing: "border-box", padding: "0 28px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.45)", color: "#FFFFFF", fontWeight: "700", textDecoration: "none"}}>
                  <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M4 20l1.3-3.9A8 8 0 1 1 8 19z"} />
                  </svg>
                  {"WhatsApp us"}
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer style={{position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #4A0A66 0%, #2E003E 70%)", color: "#EADFF2", fontSize: "13.5px"}}>
          <div className={"am-stars2"} aria-hidden={"true"} style={{opacity: "0.6"}} />
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 32px", position: "relative"}}>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "40px", marginBottom: "48px"}}>
              <div>
                <img src={"/images/f0424906cf2ed307d839fd952ac77981.png"} alt={"Ahllya Mystic"} style={{height: "60px", width: "auto", display: "block", marginBottom: "16px"}} />
                <p style={{margin: "0"}}>
                  {"Astrology, numerology, Vastu and manifestation, read with care."}
                </p>
              </div>
              <div style={{display: "grid", gap: "10px", alignContent: "start"}}>
                <p style={{margin: "0 0 4px", fontWeight: "700", color: "#FFFFFF"}}>
                  {"Explore"}
                </p>
                <a href={"/#consult"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Consultations"}
                </a>
                <a href={"/#reports"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Reports"}
                </a>
                <a href={"/courses"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Courses"}
                </a>
                <a href={"/kundli"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Free Kundli"}
                </a>
              </div>
              <div style={{display: "grid", gap: "10px", alignContent: "start"}}>
                <p style={{margin: "0 0 4px", fontWeight: "700", color: "#FFFFFF"}}>
                  {"Contact"}
                </p>
                <a href={"https://wa.me/919129237566"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"+91 91292 37566 (WhatsApp)"}
                </a>
                <a href={"mailto:ahllyamystic@gmail.com"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"ahllyamystic@gmail.com"}
                </a>
                <span>
                  {"Mon to Sun, 11am to 7pm"}
                </span>
              </div>
              <div style={{display: "grid", gap: "10px", alignContent: "start"}}>
                <p style={{margin: "0 0 4px", fontWeight: "700", color: "#FFFFFF"}}>
                  {"Follow"}
                </p>
                <a href={"https://www.instagram.com/ahllyamystic"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Instagram"}
                </a>
                <a href={"https://www.youtube.com/@AhllyaMystic"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"YouTube"}
                </a>
                <a href={"https://www.facebook.com/ahllyamystic"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Facebook"}
                </a>
              </div>
            </div>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: "24px", fontSize: "13px"}}>
              <span>
                {"© 2026 Ahllya Mystic. All rights reserved."}
              </span>
              <span style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
                <a href={"/policies/privacy"} style={{color: "#EADFF2"}}>
                  {"Privacy policy"}
                </a>
                <a href={"/policies/refunds"} style={{color: "#EADFF2"}}>
                  {"Refund policy"}
                </a>
                <a href={"/policies/delivery"} style={{color: "#EADFF2"}}>
                  {"Delivery policy"}
                </a>
                <a href={"/policies/terms"} style={{color: "#EADFF2"}}>
                  {"Terms"}
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ReportLalKitabPage;
