"use client";
/* eslint-disable */
// Generated from the design file Milan.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { HoroscopeMenu, HoroscopeMobileMenu, CalculatorsMenu, CalculatorsMobileMenu, ReportsMenu, ReportsMobileMenu } from "./HoroscopeMenu";
import { sx, hole } from "./sx";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState, maskDate, maskTime, maskTimeHM, maskPart } from "./wire";

class ReportMilanPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({ menuOpen: false, gender: 'Female', timeUnknown: false, picks: [] }, props && props.initialState);
  }
  renderVals() {
    // One report's content. The same page template is reused for every report by swapping this object.
    var r = {
      name: 'Couple Kundli Milan',
      hindi: 'कुंडली मिलान',
      tag: 'Before you say yes',
      lede: 'Both your charts read side by side: compatibility, love life, money, children and the stability of your marriage, with any dosha found and the remedies for it.',
      mrp: '₹6,798', price: '₹3,399', callPrice: '₹6,199'
    };
    var facts = [
      { icon: 'M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', text: 'Ready in 5 to 7 working days' },
      { icon: 'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z', text: 'PDF on email and WhatsApp' },
      { icon: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0', text: 'Prepared by Ahalya Sangeeta and Maneswita' },
      { icon: 'M12 21s-7-4.4-9.3-9A5.4 5.4 0 0 1 12 6.6 5.4 5.4 0 0 1 21.3 12C19 16.6 12 21 12 21z', text: 'Both charts read in full, not just the score' }
    ];
    var chapters = [
      { title: 'Personal Kundli of you and your partner', text: 'Both birth charts, each with its rashi, lagna and nakshatra.' },
      { title: 'Planet details', text: 'Where every planet sits in each chart, and how strong it is.' },
      { title: 'Horoscope compatibility', text: 'How your two charts agree, including your Guna Milan score and what it really means.' },
      { title: 'Moral and financial security', text: 'Values, trust and the security each of you brings to the marriage.' },
      { title: 'Personality and future', text: 'How each of you thinks and acts, and where your lives are heading.' },
      { title: 'Happiness and love life', text: 'Affection, understanding and the emotional bond between you.' },
      { title: 'About children', text: 'What your charts show about children and family life.' },
      { title: 'Financial stability', text: 'Money, earnings and how your fortunes combine.' },
      { title: 'Marriage stability', text: 'How steady and long-lasting the marriage is likely to be.' },
      { title: 'Prosperity and daily life', text: 'Home, routine and how comfortably you live together day to day.' },
      { title: 'Dosha identification and remedies', text: 'Doshas such as Manglik checked in both charts, with remedies for any that are present.' },
      { title: 'Long-lasting love remedies', text: 'Simple remedies to strengthen your bond, plus anything else that could cause problems after marriage.' }
    ].map((c, i) => ({ num: i + 1, title: c.title, text: c.text }));
    var samples = [];
    var steps = [
      { title: 'Share both sets of details', text: 'Enter your birth details and your partner’s, and pay securely.' },
      { title: 'We confirm', text: 'We call you within 24 hours of payment to confirm your name and birth details, so your analysis is accurate.' },
      { title: 'We study both charts', text: 'Our experts read each chart on its own, then side by side.' },
      { title: 'Receive your report', text: 'Your PDF arrives on email and WhatsApp in 5 to 7 working days.' }
    ].map((s, i) => ({ num: i + 1, title: s.title, text: s.text }));
    var audiences = [
      { icon: 'M12 21s-7-4.4-9.3-9A5.4 5.4 0 0 1 12 6.6 5.4 5.4 0 0 1 21.3 12C19 16.6 12 21 12 21z', title: 'Couples in love', text: 'You have found each other and want your families to say yes with confidence.' },
      { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8', title: 'Families arranging a match', text: 'You want to check a proposal properly before taking it further.' },
      { icon: 'M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z', title: 'Worried about a dosha', text: 'Someone has mentioned Manglik dosha or a low score and you want a clear answer.' },
      { icon: 'M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', title: 'Fixing a wedding date', text: 'You are ready to go ahead and want the match checked first.' },
      { icon: 'M4 6h16M4 12h10M4 18h7', title: 'Confused by free reports', text: 'An online score left you with more questions than answers.' },
      { icon: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.5 8.5l-2 5-5 2 2-5z', title: 'Already married', text: 'You want to understand each other better and strengthen your bond.' }
    ];
    var asks = ['Are we a good match for marriage?', 'Is there Manglik dosha in either chart?', 'What does our Guna Milan score really mean?', 'Will our marriage be stable?', 'What remedies can help us?'].map((t) => ({ text: t }));
    var gains = ['Both charts read in full', 'An honest view of compatibility', 'Doshas checked, with remedies', 'Guidance on love, money and children'].map((t) => ({ text: t }));
    var faqs = [
      { q: 'What is Kundli Milan?', a: 'Kundli Milan, or horoscope matching, compares the birth charts of two people to see how well they suit each other for marriage. It is a long-standing part of Vedic astrology.' },
      { q: 'What is Guna Milan?', a: 'Guna Milan scores a match out of 36 points across eight areas called kootas, using both partners’ Moon signs and nakshatras. It is a useful start, but it looks only at the Moon, so we read both full charts too.' },
      { q: 'Our score is low. Should we worry?', a: 'Not on its own. A score is one part of the picture. Many low-scoring matches are balanced by the rest of the charts, and many doshas have remedies. Your report explains what your result means for you.' },
      { q: 'What is Manglik dosha?', a: 'Manglik dosha is formed by Mars in certain houses of the chart. We check it in both charts, and also whether it is cancelled or balanced by the partner’s chart, before giving remedies.' },
      { q: 'What details do we need?', a: 'The date, time and place of birth of both partners. The more exact the birth times, the more precise the reading.' },
      { q: 'What does the consultation add?', a: 'A call with Ahalya Sangeeta or Maneswita to talk through your report, ask questions and understand the remedies. We fix the time with you on WhatsApp once the report is ready.' },
      { q: 'Which language is the report in?', a: 'Hindi or English, whichever you choose at checkout.' },
      { q: 'Will our details stay private?', a: 'Yes. Your birth details are used only to prepare your report and are never shared.' }
    ];
    var others = [
      { name: 'Personalised Kundli Report', text: 'Your complete birth chart reading: career, money, health, marriage, your next 3 years and remedies.', mrp: '₹1,998', price: '₹999' },
      { name: 'Varshphal 2027', text: 'Your next 12 months, month by month: the year’s main focus, key phases and simple remedies.', mrp: '₹1,478', price: '₹739' },
      { name: 'Lal Kitab Report', text: 'The root cause of problems that keep repeating, what not to donate and simple remedies you can do at home.', mrp: '₹1,998', price: '₹999' }
    ];
    var gunaPoints = ['A score out of 36 points', 'Based only on the Moon sign and nakshatra of each partner', 'Gives a number, not the reasons behind it', 'Says little about money, children or timing'].map((t) => ({ text: t }));
    var kootas = [['Varna', 1], ['Vashya', 2], ['Tara', 3], ['Yoni', 4], ['Graha Maitri', 5], ['Gana', 6], ['Bhakoot', 7], ['Nadi', 8]].map((k) => ({ name: k[0], pts: k[1] }));
    var milanPoints = ['Your Guna Milan score, explained in plain words', 'Both full charts read on their own, then side by side', 'Love life, money, children and marriage stability', 'Manglik and other doshas checked in both charts', 'Remedies for anything that needs care'].map((t) => ({ text: t }));
    var packs = [
      { name: 'Couple Kundli Milan Report', best: 'Your complete matching report, ready to read together.', price: '₹3,399', mrp: '₹6,798', hasMrp: true, format: 'Written report', cool: true, hot: false, items: ['Both personal kundlis and planet details', 'Horoscope compatibility and Guna Milan', 'Love, money, children and marriage stability', 'Doshas and remedies'] },
      { name: 'Report and Consultation', best: 'Your report, then a call to talk it all through together.', price: '₹6,199', format: 'Report + consultation call', mrp: '', hasMrp: false, tag: 'Deeper insight', cool: false, hot: true, items: ['Everything in the report', 'A call with Ahalya Sangeeta or Maneswita', 'Ask about anything in your report', 'Help choosing and doing your remedies', 'Call time fixed with you on WhatsApp'] }
    ];
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
      audiences: audiences, asks: asks, gains: gains, gunaPoints: gunaPoints, kootas: kootas, milanPoints: milanPoints, packs: packs,
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

ReportMilanPage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="Milan" style={{ display: "contents" }}>
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
              <a href={"/consultation"} style={{color: "#FFFFFF", textDecoration: "none"}}>
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
              <a href={"/consultation"} className={"am-navcta"} style={{alignItems: "center", minHeight: "44px", padding: "0 22px", borderRadius: "999px", border: "2px solid #FCCE07", color: "#FFFFFF", fontWeight: "700", fontSize: "13.5px", textDecoration: "none"}}>
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
                  <a href={"/consultation"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
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
                    <a href={"/consultation"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "52px", borderRadius: "999px", border: "2px solid #FCCE07", color: "#FFFFFF", fontWeight: "700", textDecoration: "none"}}>
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
                        {"both of you"}
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
                    {"For both partners"}
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
                  <span style={{fontSize: "13.5px", color: "#5C5470"}}>
                    {"or "}
                    {hole(v.r?.callPrice)}
                    {" with a consultation call"}
                  </span>
                </div>
                <div className={"am-hero-flex"} style={{display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "30px"}}>
                  <a href={"/checkout/milan"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "54px", minWidth: "220px", boxSizing: "border-box", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "14.5px", textDecoration: "none"}}>
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
              {"For couples thinking about the next step."}
            </h2>
            <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470", maxWidth: "680px"}}>
              {"Kundli Milan compares the birth charts of two people to see how well they suit each other for marriage. Whether yours is a love match or an arranged one, it helps you go ahead with clarity, and with remedies ready for anything that needs care."}
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
                {"Every concern we find comes with a remedy."}
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
                {"Everything your charts say, in plain words."}
              </h2>
              <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470", maxWidth: "680px"}}>
                {"Each section is written for the two of you after we study both charts, so you get clear answers and not generic text."}
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
                {"Beyond the score"}
              </p>
              <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15"}}>
                {"We don’t stop at Guna Milan."}
              </h2>
              <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470", maxWidth: "700px"}}>
                {"Most free matching tools give you a score out of 36 and nothing more. A good score does not guarantee a happy marriage, and a low one is not always a reason to say no. That is why we read both charts in full."}
              </p>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "20px"}}>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "26px 28px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0 0 2px", fontFamily: "'Marcellus', serif", fontSize: "21px"}}>
                  {"Guna Milan on its own"}
                </p>
                <p style={{margin: "0 0 16px", fontFamily: "'Tiro Devanagari Hindi', serif", color: "#921A11"}}>
                  {"गुण मिलान"}
                </p>
                {(v.gunaPoints || []).map((k, $index) => (
                  <React.Fragment key={$index}>
                    <p style={{margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                      <span style={{flex: "none", width: "8px", height: "8px", marginTop: "8px", borderRadius: "999px", background: "#6C1594"}} />
                      {hole(k?.text)}
                    </p>
                  </React.Fragment>
                ))}
                <div style={{display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px", paddingTop: "14px", borderTop: "1px solid #EFE6D8"}}>
                  {(v.kootas || []).map((k, $index) => (
                    <React.Fragment key={$index}>
                      <span style={{fontSize: "12px", fontWeight: "600", color: "#3D0752", background: "#F3E8F7", padding: "4px 10px", borderRadius: "999px"}}>
                        {hole(k?.name)}
                        {" · "}
                        {hole(k?.pts)}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div style={{background: "linear-gradient(135deg, #2E003E, #6C1594)", color: "#FFFFFF", borderRadius: "22px", padding: "26px 28px", position: "relative", overflow: "hidden"}}>
                <div className={"am-stars"} aria-hidden={"true"} />
                <p style={{position: "relative", margin: "0 0 2px", fontFamily: "'Marcellus', serif", fontSize: "21px"}}>
                  {"Our Kundli Milan"}
                </p>
                <p style={{position: "relative", margin: "0 0 16px", fontFamily: "'Tiro Devanagari Hindi', serif", color: "#FCCE07"}}>
                  {"कुंडली मिलान"}
                </p>
                <div style={{position: "relative"}}>
                  {(v.milanPoints || []).map((k, $index) => (
                    <React.Fragment key={$index}>
                      <p style={{margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                        <span style={{flex: "none", width: "8px", height: "8px", marginTop: "8px", borderRadius: "999px", background: "#FCCE07"}} />
                        {hole(k?.text)}
                      </p>
                    </React.Fragment>
                  ))}
                </div>
                <p style={{position: "relative", margin: "16px 0 0", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.2)", fontSize: "13.5px"}}>
                  {"Prepared personally by Ahalya Sangeeta and Maneswita, never by software."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px 24px"}}>
          <div style={{textAlign: "center", marginBottom: "32px"}}>
            <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
              {"Choose your path together"}
            </p>
            <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15"}}>
              {"Two ways to get your match read."}
            </h2>
            <p style={{margin: "0 auto", fontSize: "14.5px", color: "#5C5470", maxWidth: "620px"}}>
              {"Your charts may show compatibility, but a consultation deepens the insight."}
            </p>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "20px", maxWidth: "920px", margin: "0 auto"}}>
            {(v.packs || []).map((p, $index) => (
              <React.Fragment key={$index}>
                {p?.cool ? (
                  <>
                    <div className={"am-lift"} style={{display: "flex", flexDirection: "column", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "28px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                      <p style={{margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: "22.5px", lineHeight: "1.2"}}>
                        {hole(p?.name)}
                      </p>
                      <p style={{margin: "0 0 18px", fontSize: "13.5px", color: "#5C5470"}}>
                        {hole(p?.best)}
                      </p>
                      <p style={{margin: "0 0 4px", display: "flex", alignItems: "baseline", gap: "8px"}}>
                        {p?.hasMrp ? (
                          <>
                            <span style={{fontSize: "14.5px", color: "#736B8A", textDecoration: "line-through"}}>
                              {hole(p?.mrp)}
                            </span>
                          </>
                        ) : null}
                        <span style={{fontFamily: "'Marcellus', serif", fontSize: "33.5px", lineHeight: "1"}}>
                          {hole(p?.price)}
                        </span>
                      </p>
                      <p style={{margin: "0 0 20px"}}>
                        <span style={{fontSize: "12px", fontWeight: "700", color: "#6C1594", background: "#F3E8F7", padding: "4px 10px", borderRadius: "999px"}}>
                          {hole(p?.format)}
                        </span>
                      </p>
                      <div style={{flex: "1", borderTop: "1px solid #EFE6D8", paddingTop: "16px", marginBottom: "22px"}}>
                        {(p?.items || []).map((i, $index) => (
                          <React.Fragment key={$index}>
                            <p style={{margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                              <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                                <path d={"M5 12l5 5 9-10"} />
                              </svg>
                              {hole(i)}
                            </p>
                          </React.Fragment>
                        ))}
                      </div>
                      <a href={`/checkout/milan?pkg=${String(p?.name).includes('Consultation') ? 'call' : 'report'}`} style={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "52px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", textDecoration: "none"}}>
                        {"Order now"}
                      </a>
                    </div>
                  </>
                ) : null}
                {p?.hot ? (
                  <>
                    <div className={"am-lift"} style={{position: "relative", display: "flex", flexDirection: "column", background: "linear-gradient(160deg, #2E003E 0%, #6C1594 100%)", color: "#FFFFFF", borderRadius: "22px", padding: "28px", overflow: "hidden"}}>
                      <div className={"am-stars"} aria-hidden={"true"} />
                      <span style={{position: "absolute", top: "22px", right: "22px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#921A11", background: "#FCCE07", padding: "5px 12px", borderRadius: "999px"}}>
                        {hole(p?.tag)}
                      </span>
                      <p style={{position: "relative", margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: "22.5px", lineHeight: "1.2", paddingRight: "110px"}}>
                        {hole(p?.name)}
                      </p>
                      <p style={{position: "relative", margin: "0 0 18px", fontSize: "13.5px", color: "#EADFF2"}}>
                        {hole(p?.best)}
                      </p>
                      <p style={{position: "relative", margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: "33.5px", lineHeight: "1"}}>
                        {hole(p?.price)}
                      </p>
                      <p style={{position: "relative", margin: "0 0 20px"}}>
                        <span style={{fontSize: "12px", fontWeight: "700", color: "#2E003E", background: "#EADFF2", padding: "4px 10px", borderRadius: "999px"}}>
                          {hole(p?.format)}
                        </span>
                      </p>
                      <div style={{position: "relative", flex: "1", borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "16px", marginBottom: "22px"}}>
                        {(p?.items || []).map((i, $index) => (
                          <React.Fragment key={$index}>
                            <p style={{margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                              <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FCCE07"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                                <path d={"M5 12l5 5 9-10"} />
                              </svg>
                              {hole(i)}
                            </p>
                          </React.Fragment>
                        ))}
                      </div>
                      <a href={`/checkout/milan?pkg=${String(p?.name).includes('Consultation') ? 'call' : 'report'}`} style={{position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "52px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
                        {"Order now"}
                      </a>
                    </div>
                  </>
                ) : null}
              </React.Fragment>
            ))}
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
                {"It takes about two minutes: both sets of birth details and a secure payment."}
              </p>
              <p style={{margin: "10px 0 0", fontSize: "13px", fontWeight: "700", color: "#921A11"}}>
                {"Want to talk it through? Choose the report with a consultation call for "}
                {hole(v.r?.callPrice)}
                {"."}
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
              <a href={"/checkout/milan"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "54px", minWidth: "min(200px, 100%)", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "14.5px", textDecoration: "none"}}>
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
              {"About Kundli Milan"}
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
                <a href={"/consultation"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", minWidth: "240px", boxSizing: "border-box", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
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
                <a href={"/consultation"} style={{color: "#EADFF2", textDecoration: "none"}}>
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

export default ReportMilanPage;
