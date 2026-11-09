"use client";
/* eslint-disable */
// Generated from the design file Name.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { HoroscopeMenu, HoroscopeMobileMenu, CalculatorsMenu, CalculatorsMobileMenu } from "./HoroscopeMenu";
import { sx, hole } from "./sx";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState, maskDate, maskTime, maskTimeHM, maskPart } from "./wire";

class ReportNamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({ menuOpen: false, tab: 'self' }, props && props.initialState);
  }
  renderVals() {
    var rs = (x) => '₹' + x.toLocaleString('en-IN');
    var mk = (list) => list.map((t, i) => ({
      name: t.name, best: t.best, price: rs(t.price), mrp: t.mrp ? rs(t.mrp) : '', hasMrp: !!t.mrp, format: t.format,
      base: t.base || '', hasBase: !!t.base, tag: t.tag || '', hot: !!t.tag, cool: !t.tag,
      items: t.items.map((x) => ({ text: x }))
    }));
    var self = mk([
      { name: 'Name Numerology Report', best: 'A quick, clear answer: does your name support you?', price: 399, mrp: 798, format: 'Report only',
        items: ['Your name number and compound number', 'Your Mulank and Bhagyank', 'Whether your name supports your birth numbers', 'Effects on career, money, relationships and health', 'A clear verdict on whether a correction is needed'] },
      { name: 'Name Consultancy and Report', best: 'Your analysis, with first suggestions and a short call.', price: 1499, format: 'Report + 15 min call', base: 'Everything in the report, plus:',
        items: ['Personal Year and Kua number', '1 to 2 alternative spellings', 'Education and best career fields', '15-minute consultation call'] },
      { name: 'Name Analysis and Correction', best: 'A full correction with several names to choose from.', price: 5199, mrp: 11999, format: 'Report + 30 min call', tag: 'Most chosen', base: 'Everything in Consultancy, plus:',
        items: ['Detailed numerology and personality profile', '3 to 4 new name or spelling options', 'Spelling and energy balance', 'Help choosing the most auspicious option', 'Consultation of up to 30 minutes'] },
      { name: 'Premium Name Correction', best: 'Numerology and sound together, for a name that is right in every way.', price: 25999, format: 'Report + 45 min call', base: 'Everything in Correction, plus:',
        items: ['Pronology (sound energy) analysis', 'Numerology, sound and vibration matched together', 'Phonetically balanced name options', 'Brand-new name design if needed', 'Consultation of up to 45 minutes'] }
    ]);
    var baby = mk([
      { name: 'Baby Name Consultancy and Report', best: 'Check how your child’s current name suits them.', price: 1499, format: 'Report + 15 min call',
        items: ['Your child’s name number, Mulank and Bhagyank', 'Whether the name supports their birth numbers', 'Their nature, talents and best study fields', '1 to 2 alternative spellings', '15-minute consultation call'] },
      { name: 'New Born Baby Name Design', best: 'A name chosen for your baby from day one.', price: 5199, format: 'Names + consultation', tag: 'For newborns',
        items: ['Names designed around your baby’s birth numbers', 'Options that fit your preferred starting letters', 'Meaning, sound and number checked together', 'Consultation to help you decide'] },
      { name: 'Baby Name Analysis and Correction', best: 'A full correction of your child’s existing name.', price: 5199, mrp: 11999, format: 'Report + 30 min call', base: 'Everything in Consultancy, plus:',
        items: ['Detailed profile of your child', '3 to 4 new name or spelling options', 'Spelling and energy balance', 'Consultation of up to 30 minutes'] },
      { name: 'Premium Baby Name Correction', best: 'Numerology and sound together, for a name that grows with your child.', price: 25999, format: 'Report + 45 min call', base: 'Everything in Correction, plus:',
        items: ['Pronology (sound energy) analysis', 'Phonetically balanced name options', 'Brand-new name design if needed', 'Guidance for long-term growth', 'Consultation of up to 45 minutes'] }
    ]);
    var biz = mk([
      { name: 'Business Name Consultancy and Report', best: 'Check whether your business name supports growth.', price: 5199, format: 'Report + 30 min call',
        items: ['Analysis of your current business name', 'Compatibility with the owner’s date of birth', 'Energy for finances, growth and brand', '1 to 2 validated name suggestions', '30-minute consultation call'] },
      { name: 'Business Name Analysis and Correction', best: 'A complete naming exercise for your brand.', price: 25999, mrp: 33999, format: 'Report + 30 min call', tag: 'Complete', base: 'Everything in Consultancy, plus:',
        items: ['4 to 5 revised name options', 'Fit with your industry and brand tone', 'Sound-based name suggestions', 'Personal and career number breakdown', 'Tips for a smooth name change'] }
    ]);
    var TAB = [
      { id: 'self', label: 'Your name', icon: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0', tiers: self, note: 'Not sure which to choose? Start with the ₹399 report. If your name needs correcting, it will tell you.' },
      { id: 'baby', label: 'Baby name', icon: 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM9 6.5h.01M15 6.5h.01M10 8.5c1 .8 3 .8 4 0M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6', tiers: baby, note: 'Just want to check your child’s current name? The ₹399 Name Numerology Report works for any name.' },
      { id: 'biz', label: 'Business name', icon: 'M4 19h16M6 15l4-4 3 3 5-6M15 8h3v3', tiers: biz, note: 'For a new brand, share a few names you like and we will check each one on the call.' }
    ];
    var tab = this.state.tab || 'self';
    var cur = TAB.filter((t) => t.id === tab)[0] || TAB[0];
    var out = {
      tabs: TAB.map((t) => ({ label: t.label, icon: t.icon, sel: t.id === cur.id, notSel: t.id !== cur.id, pick: () => this.setState({ tab: t.id }) })),
      tiers: cur.tiers, tabNote: cur.note,
      audiences: [
        { icon: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0', title: 'Feeling held back', text: 'Things take more effort than they should, and you want to know if your name is a factor.' },
        { icon: 'M4 20h4L19 9l-4-4L4 16zM14 6l4 4', title: 'Changing your name', text: 'After marriage, for a new career, or simply a new spelling you want to get right.' },
        { icon: 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM9 6.5h.01M15 6.5h.01M10 8.5c1 .8 3 .8 4 0M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6', title: 'New parents', text: 'Choosing a name for your newborn, or checking the one you have chosen.' },
        { icon: 'M4 19h16M6 15l4-4 3 3 5-6M15 8h3v3', title: 'Founders and businesses', text: 'Naming a startup, shop or brand, or checking an existing one.' },
        { icon: 'M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z', title: 'Artists and public figures', text: 'Choosing a stage, screen or professional name.' },
        { icon: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z', title: 'Families', text: 'Checking the names of everyone in the family together.' }
      ],
      steps: [
        { title: 'Choose a package', text: 'Pick the right package for your name, your child or your business.' },
        { title: 'Share your details', text: 'Your name exactly as on your documents, and your date of birth.' },
        { title: 'We analyse', text: 'Our experts check your name against your birth numbers.' },
        { title: 'Report and call', text: 'Your PDF arrives in 5 to 7 working days, and we fix your call on WhatsApp.' }
      ].map((s, i) => ({ num: i + 1, title: s.title, text: s.text })),
      faqs: [
        { q: 'Which numerology system do you use?', a: 'Chaldean numerology for names, together with your Mulank and Bhagyank from your date of birth.' },
        { q: 'Do I have to change my name on official documents?', a: 'Not always. Often a small spelling change in the name you use every day is enough. We will tell you whether a document change is worth it.' },
        { q: 'Do I need my birth time?', a: 'No, it is optional. Name numerology works from your name and date of birth.' },
        { q: 'What is the difference between the packages?', a: 'The ₹399 report tells you whether your name supports you. The higher packages add name suggestions, deeper analysis and a consultation call.' },
        { q: 'What if I do not like the suggested names?', a: 'Tell us on the call. We will explain the options and help you choose one you are comfortable with.' },
        { q: 'Will my details stay private?', a: 'Yes. Your details are used only to prepare your report and are never shared.' }
      ]
    };
    var menuOpen = !!this.state.menuOpen;
    out.menuOpen = menuOpen; out.menuExpanded = menuOpen ? 'true' : 'false';
    out.openMenu = () => this.setState({ menuOpen: true }); out.closeMenu = () => this.setState({ menuOpen: false });
    return out;
  }
}

ReportNamePage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="Name" style={{ display: "contents" }}>
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
              <a href={"/#reports"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Reports"}
              </a>
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
                  <a href={"/#reports"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                    {"Reports"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
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
        <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #2E003E 0%, #3D0752 50%, #6C1594 100%)", color: "#FFFFFF"}}>
          <div className={"am-stars"} aria-hidden={"true"} />
          <div className={"am-stars2"} aria-hidden={"true"} />
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "28px 24px 80px", position: "relative"}}>
            <nav aria-label={"Breadcrumb"} style={{fontSize: "13px", color: "#EADFF2", marginBottom: "40px"}}>
              <a href={"/"} style={{color: "#EADFF2", textDecoration: "none"}}>
                {"Home"}
              </a>
              <span aria-hidden={"true"} style={{margin: "0 8px"}}>
                {"/"}
              </span>
              <a href={"/#reports"} style={{color: "#EADFF2", textDecoration: "none"}}>
                {"Reports"}
              </a>
              <span aria-hidden={"true"} style={{margin: "0 8px"}}>
                {"/"}
              </span>
              <span style={{color: "#FFFFFF", fontWeight: "600"}}>
                {"Name Numerology"}
              </span>
            </nav>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px"}}>
              <div className={"am-center-mobile"} style={{flex: "1.3 1 480px", minWidth: "0"}}>
                <p style={{margin: "0 0 14px"}}>
                  <span style={{display: "inline-block", padding: "5px 18px 3px", borderRadius: "999px", background: "#FBF1EE", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "17px", lineHeight: "1.5", color: "#921A11"}}>
                    {"नामांक ज्योतिष"}
                  </span>
                </p>
                <p style={{margin: "0 0 12px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
                  {"Chaldean numerology"}
                </p>
                <h1 style={{margin: "0 0 16px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(30px, 3.91vw, 48px)", lineHeight: "1.08"}}>
                  {"Name Numerology"}
                </h1>
                <p style={{margin: "0 0 28px", fontSize: "16px", color: "#EADFF2", maxWidth: "560px"}}>
                  {"Find out whether your name supports your birth numbers, and if it does not, get a correction designed by our experts. For yourself, your child or your business."}
                </p>
                <div className={"am-hero-flex"} style={{display: "flex", flexWrap: "wrap", gap: "12px"}}>
                  <a href={"#packages"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "54px", minWidth: "220px", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
                    {"See packages"}
                  </a>
                  <a href={"/#free"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "54px", minWidth: "220px", padding: "0 28px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.45)", color: "#FFFFFF", fontWeight: "700", textDecoration: "none"}}>
                    {"Check yours free"}
                  </a>
                </div>
              </div>
              <div style={{flex: "1 1 360px", minWidth: "0"}}>
                <div style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "22px", padding: "24px"}}>
                  <p style={{margin: "0 0 4px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
                    {"How a name becomes a number"}
                  </p>
                  <p style={{margin: "0 0 16px", fontSize: "13px", color: "#EADFF2"}}>
                    {"Each letter carries a value in Chaldean numerology. Add them up to find the name number."}
                  </p>
                  <div style={{display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "14px"}}>
                    <span style={{display: "flex", flexDirection: "column", alignItems: "center", minWidth: "44px", padding: "8px 6px", borderRadius: "12px", background: "rgba(255,255,255,0.1)"}}>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px", lineHeight: "1"}}>
                        {"R"}
                      </span>
                      <span style={{fontSize: "12px", color: "#FCCE07", fontWeight: "700", marginTop: "4px"}}>
                        {"2"}
                      </span>
                    </span>
                    <span style={{display: "flex", flexDirection: "column", alignItems: "center", minWidth: "44px", padding: "8px 6px", borderRadius: "12px", background: "rgba(255,255,255,0.1)"}}>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px", lineHeight: "1"}}>
                        {"I"}
                      </span>
                      <span style={{fontSize: "12px", color: "#FCCE07", fontWeight: "700", marginTop: "4px"}}>
                        {"1"}
                      </span>
                    </span>
                    <span style={{display: "flex", flexDirection: "column", alignItems: "center", minWidth: "44px", padding: "8px 6px", borderRadius: "12px", background: "rgba(255,255,255,0.1)"}}>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px", lineHeight: "1"}}>
                        {"Y"}
                      </span>
                      <span style={{fontSize: "12px", color: "#FCCE07", fontWeight: "700", marginTop: "4px"}}>
                        {"1"}
                      </span>
                    </span>
                    <span style={{display: "flex", flexDirection: "column", alignItems: "center", minWidth: "44px", padding: "8px 6px", borderRadius: "12px", background: "rgba(255,255,255,0.1)"}}>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px", lineHeight: "1"}}>
                        {"A"}
                      </span>
                      <span style={{fontSize: "12px", color: "#FCCE07", fontWeight: "700", marginTop: "4px"}}>
                        {"1"}
                      </span>
                    </span>
                  </div>
                  <p style={{margin: "0 0 16px", fontSize: "13.5px"}}>
                    {"2 + 1 + 1 + 1 = "}
                    <span style={{fontFamily: "'Marcellus', serif", fontSize: "22.5px", color: "#FCCE07"}}>
                      {"5"}
                    </span>
                    {" "}
                    <span style={{color: "#EADFF2"}}>
                      {"· ruled by Mercury"}
                    </span>
                  </p>
                  <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px", fontSize: "12px"}}>
                    <span style={{padding: "6px 8px", borderRadius: "8px", background: "rgba(255,255,255,0.06)"}}>
                      <b style={{color: "#FCCE07"}}>
                        {"1"}
                      </b>
                      {" A I J Q Y"}
                    </span>
                    <span style={{padding: "6px 8px", borderRadius: "8px", background: "rgba(255,255,255,0.06)"}}>
                      <b style={{color: "#FCCE07"}}>
                        {"2"}
                      </b>
                      {" B K R"}
                    </span>
                    <span style={{padding: "6px 8px", borderRadius: "8px", background: "rgba(255,255,255,0.06)"}}>
                      <b style={{color: "#FCCE07"}}>
                        {"3"}
                      </b>
                      {" C G L S"}
                    </span>
                    <span style={{padding: "6px 8px", borderRadius: "8px", background: "rgba(255,255,255,0.06)"}}>
                      <b style={{color: "#FCCE07"}}>
                        {"4"}
                      </b>
                      {" D M T"}
                    </span>
                    <span style={{padding: "6px 8px", borderRadius: "8px", background: "rgba(255,255,255,0.06)"}}>
                      <b style={{color: "#FCCE07"}}>
                        {"5"}
                      </b>
                      {" E H N X"}
                    </span>
                    <span style={{padding: "6px 8px", borderRadius: "8px", background: "rgba(255,255,255,0.06)"}}>
                      <b style={{color: "#FCCE07"}}>
                        {"6"}
                      </b>
                      {" U V W"}
                    </span>
                    <span style={{padding: "6px 8px", borderRadius: "8px", background: "rgba(255,255,255,0.06)"}}>
                      <b style={{color: "#FCCE07"}}>
                        {"7"}
                      </b>
                      {" O Z"}
                    </span>
                    <span style={{padding: "6px 8px", borderRadius: "8px", background: "rgba(255,255,255,0.06)"}}>
                      <b style={{color: "#FCCE07"}}>
                        {"8"}
                      </b>
                      {" F P"}
                    </span>
                  </div>
                  <p style={{margin: "14px 0 0", fontSize: "12px", color: "#EADFF2"}}>
                    {"The full analysis also checks the compound number and how it fits your Mulank and Bhagyank."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px 24px"}}>
          <div className={"am-center-mobile"} style={{marginBottom: "32px"}}>
            <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
              {"Famous name changes"}
            </p>
            <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 3.06vw, 37px)", lineHeight: "1.15"}}>
              {"Celebrities who took the numerological plunge"}
            </h2>
            <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470", maxWidth: "700px"}}>
              {"A single letter added or dropped. These stars changed the spelling of their names, reportedly for numerological reasons."}
            </p>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(230px, 100%), 1fr))", gap: "16px", marginBottom: "22px"}}>
            <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "18px", padding: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-8px"}}>
              <p style={{margin: "0 0 4px", fontSize: "13px", color: "#736B8A", textDecoration: "line-through"}}>
                {"Ajay Devgan"}
              </p>
              <p style={{margin: "0 0 12px", display: "flex", alignItems: "flex-start", gap: "8px"}}>
                <svg style={{flex: "none", marginTop: "7px"}} aria-hidden={"true"} width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <path d={"M5 12h14M13 6l6 6-6 6"} />
                </svg>
                <span style={{fontFamily: "Marcellus, serif", fontSize: "20px", lineHeight: "1.25", color: "#2E003E"}}>
                  {"Ajay Devgn"}
                </span>
              </p>
              <p style={{margin: "0", paddingTop: "12px", borderTop: "1px solid #EFE6D8", fontSize: "13px", lineHeight: "1.6", color: "#5C5470"}}>
                {"Originally Ajay Devgan, but he dropped the “a” from his surname for numerological reasons. This small change coincided with his massive box-office hits and lasting Bollywood stardom."}
              </p>
            </div>
            <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "18px", padding: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-8px"}}>
              <p style={{margin: "0 0 4px", fontSize: "13px", color: "#736B8A", textDecoration: "line-through"}}>
                {"Rani Mukherjee"}
              </p>
              <p style={{margin: "0 0 12px", display: "flex", alignItems: "flex-start", gap: "8px"}}>
                <svg style={{flex: "none", marginTop: "7px"}} aria-hidden={"true"} width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <path d={"M5 12h14M13 6l6 6-6 6"} />
                </svg>
                <span style={{fontFamily: "Marcellus, serif", fontSize: "20px", lineHeight: "1.25", color: "#2E003E"}}>
                  {"Rani Mukerji"}
                </span>
              </p>
              <p style={{margin: "0", paddingTop: "12px", borderTop: "1px solid #EFE6D8", fontSize: "13px", lineHeight: "1.6", color: "#5C5470"}}>
                {"The actress modified her surname from “Mukherjee” to “Mukerji” to align with numerological beliefs. Her superstardom with films like “Black” and “Bunty Aur Babli” came soon after."}
              </p>
            </div>
            <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "18px", padding: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-8px"}}>
              <p style={{margin: "0 0 4px", fontSize: "13px", color: "#736B8A", textDecoration: "line-through"}}>
                {"Sunil Shetty"}
              </p>
              <p style={{margin: "0 0 12px", display: "flex", alignItems: "flex-start", gap: "8px"}}>
                <svg style={{flex: "none", marginTop: "7px"}} aria-hidden={"true"} width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <path d={"M5 12h14M13 6l6 6-6 6"} />
                </svg>
                <span style={{fontFamily: "Marcellus, serif", fontSize: "20px", lineHeight: "1.25", color: "#2E003E"}}>
                  {"Suniel Shetty"}
                </span>
              </p>
              <p style={{margin: "0", paddingTop: "12px", borderTop: "1px solid #EFE6D8", fontSize: "13px", lineHeight: "1.6", color: "#5C5470"}}>
                {"Suniel Shetty added an extra “e” to his first name, making it Suniel from Sunil. He changed his name as a numerological adjustment. After this change, he became known for his successful action and comedy films."}
              </p>
            </div>
            <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "18px", padding: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-8px"}}>
              <p style={{margin: "0 0 4px", fontSize: "13px", color: "#736B8A", textDecoration: "line-through"}}>
                {"Karishmaa Kapoor"}
              </p>
              <p style={{margin: "0 0 12px", display: "flex", alignItems: "flex-start", gap: "8px"}}>
                <svg style={{flex: "none", marginTop: "7px"}} aria-hidden={"true"} width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <path d={"M5 12h14M13 6l6 6-6 6"} />
                </svg>
                <span style={{fontFamily: "Marcellus, serif", fontSize: "20px", lineHeight: "1.25", color: "#2E003E"}}>
                  {"Karisma Kapoor"}
                </span>
              </p>
              <p style={{margin: "0", paddingTop: "12px", borderTop: "1px solid #EFE6D8", fontSize: "13px", lineHeight: "1.6", color: "#5C5470"}}>
                {"She altered the spelling of her name to “Karisma” from “Karishmaa” at the beginning of her career, reportedly for numerological reasons. The change worked well, and she became one of the leading stars of the 1990s."}
              </p>
            </div>
            <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "18px", padding: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-8px"}}>
              <p style={{margin: "0 0 4px", fontSize: "13px", color: "#736B8A", textDecoration: "line-through"}}>
                {"Jimmy Shergill"}
              </p>
              <p style={{margin: "0 0 12px", display: "flex", alignItems: "flex-start", gap: "8px"}}>
                <svg style={{flex: "none", marginTop: "7px"}} aria-hidden={"true"} width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <path d={"M5 12h14M13 6l6 6-6 6"} />
                </svg>
                <span style={{fontFamily: "Marcellus, serif", fontSize: "20px", lineHeight: "1.25", color: "#2E003E"}}>
                  {"Jimmy Sheirgill"}
                </span>
              </p>
              <p style={{margin: "0", paddingTop: "12px", borderTop: "1px solid #EFE6D8", fontSize: "13px", lineHeight: "1.6", color: "#5C5470"}}>
                {"Jimmy Sheirgill altered the spelling of his surname from “Shergill” to “Sheirgill” as per numerology. Since the change, he has delivered memorable performances in films like “Mohabbatein” and “Tanu Weds Manu”."}
              </p>
            </div>
            <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "18px", padding: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-8px"}}>
              <p style={{margin: "0 0 4px", fontSize: "13px", color: "#736B8A", textDecoration: "line-through"}}>
                {"Rajkumar Rao"}
              </p>
              <p style={{margin: "0 0 12px", display: "flex", alignItems: "flex-start", gap: "8px"}}>
                <svg style={{flex: "none", marginTop: "7px"}} aria-hidden={"true"} width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <path d={"M5 12h14M13 6l6 6-6 6"} />
                </svg>
                <span style={{fontFamily: "Marcellus, serif", fontSize: "20px", lineHeight: "1.25", color: "#2E003E"}}>
                  {"Rajkummar Rao"}
                </span>
              </p>
              <p style={{margin: "0", paddingTop: "12px", borderTop: "1px solid #EFE6D8", fontSize: "13px", lineHeight: "1.6", color: "#5C5470"}}>
                {"Rajkummar Rao modified his stage name, adding an extra “m” after numerological advice. The adjustment coincided with his rise as one of Bollywood’s most respected actors."}
              </p>
            </div>
            <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "18px", padding: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-8px"}}>
              <p style={{margin: "0 0 4px", fontSize: "13px", color: "#736B8A", textDecoration: "line-through"}}>
                {"Tushar Kapoor"}
              </p>
              <p style={{margin: "0 0 12px", display: "flex", alignItems: "flex-start", gap: "8px"}}>
                <svg style={{flex: "none", marginTop: "7px"}} aria-hidden={"true"} width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <path d={"M5 12h14M13 6l6 6-6 6"} />
                </svg>
                <span style={{fontFamily: "Marcellus, serif", fontSize: "20px", lineHeight: "1.25", color: "#2E003E"}}>
                  {"Tusshar Kapoor"}
                </span>
              </p>
              <p style={{margin: "0", paddingTop: "12px", borderTop: "1px solid #EFE6D8", fontSize: "13px", lineHeight: "1.6", color: "#5C5470"}}>
                {"Tusshar Kapoor added an extra “s” to his name after consulting a numerologist. While his acting career had ups and downs, the adjustment brought him recognition in comedies like the “Golmaal” series."}
              </p>
            </div>
            <div style={{background: "linear-gradient(160deg, #2E003E 0%, #6C1594 100%)", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "18px"}}>
              <div>
                <p style={{margin: "0 0 8px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#E9D7F2", fontWeight: "700"}}>
                  {"Your turn"}
                </p>
                <p style={{margin: "0", fontFamily: "Marcellus, serif", fontSize: "22.5px", lineHeight: "1.25", color: "#FFFFFF"}}>
                  {"Is your name working for you?"}
                </p>
                <p style={{margin: "10px 0 0", fontSize: "13px", lineHeight: "1.6", color: "#E9D7F2"}}>
                  {"Find out what your name number says, and whether one letter could change it."}
                </p>
              </div>
              <a href={"/#free"} style={{display: "block", textAlign: "center", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "13.5px", padding: "13px 18px", borderRadius: "999px", textDecoration: "none"}}>
                {"Check my name"}
              </a>
            </div>
          </div>
          <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "16px"}}>
            <span style={{fontSize: "13px", fontWeight: "700", marginRight: "4px"}}>
              {"Film and show titles too:"}
            </span>
            <span style={{fontFamily: "Marcellus, serif", fontSize: "14.5px", color: "#3D0752", background: "#F3E8F7", padding: "6px 14px", borderRadius: "999px"}}>
              {"Dabangg"}
            </span>
            <span style={{fontFamily: "Marcellus, serif", fontSize: "14.5px", color: "#3D0752", background: "#F3E8F7", padding: "6px 14px", borderRadius: "999px"}}>
              {"Simmba"}
            </span>
            <span style={{fontFamily: "Marcellus, serif", fontSize: "14.5px", color: "#3D0752", background: "#F3E8F7", padding: "6px 14px", borderRadius: "999px"}}>
              {"Bigg Boss"}
            </span>
            <span style={{fontFamily: "Marcellus, serif", fontSize: "14.5px", color: "#3D0752", background: "#F3E8F7", padding: "6px 14px", borderRadius: "999px"}}>
              {"Padmaavat"}
            </span>
            <span style={{fontFamily: "Marcellus, serif", fontSize: "14.5px", color: "#3D0752", background: "#F3E8F7", padding: "6px 14px", borderRadius: "999px"}}>
              {"Singh Is Kinng"}
            </span>
          </div>
          <p style={{margin: "0", fontSize: "12px", color: "#736B8A"}}>
            {"Publicly reported spelling changes, shown for illustration. These people are not clients of Ahllya Mystic and do not endorse our services."}
          </p>
        </div>
        <div id={"packages"} style={{background: "radial-gradient(ellipse at 100% 0%, rgba(108,21,148,0.07), rgba(108,21,148,0) 50%), #FBF7F0"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px"}}>
            <div style={{textAlign: "center", marginBottom: "28px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Choose your package"}
              </p>
              <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 3.06vw, 37px)", lineHeight: "1.15"}}>
                {"Whose name are we looking at?"}
              </h2>
              <p style={{margin: "0 auto", fontSize: "14.5px", color: "#5C5470", maxWidth: "640px"}}>
                {"Reports arrive as a PDF on email and WhatsApp within 5 to 7 working days. Consultation calls are scheduled on WhatsApp."}
              </p>
            </div>
            <div role={"tablist"} aria-label={"Name type"} style={{display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "8px", marginBottom: "40px"}}>
              {(v.tabs || []).map((g, $index) => (
                <React.Fragment key={$index}>
                  {g?.sel ? (
                    <>
                      <button type={"button"} role={"tab"} aria-selected={"true"} onClick={g?.pick} style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "48px", padding: "0 22px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#6C1594", color: "#FFFFFF", font: "inherit", fontWeight: "700", cursor: "pointer"}}>
                        <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                          <path d={g?.icon} />
                        </svg>
                        {hole(g?.label)}
                      </button>
                    </>
                  ) : null}
                  {g?.notSel ? (
                    <>
                      <button type={"button"} role={"tab"} aria-selected={"false"} onClick={g?.pick} style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "48px", padding: "0 22px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontWeight: "600", cursor: "pointer"}}>
                        <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                          <path d={g?.icon} />
                        </svg>
                        {hole(g?.label)}
                      </button>
                    </>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
            <div className={"am-tier-grid"}>
              {(v.tiers || []).map((t, $index) => (
                <React.Fragment key={$index}>
                  {t?.hot ? (
                    <>
                      <div className={"am-lift"} style={{position: "relative", display: "flex", flexDirection: "column", gap: "12px", background: "#FFFFFF", border: "2px solid #6C1594", boxShadow: "0 24px 48px -30px rgba(46,0,62,0.55)", borderRadius: "22px", padding: "26px 22px"}}>
                        <span style={{position: "absolute", top: "-13px", left: "22px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#FFFFFF", background: "#921A11", padding: "5px 12px", borderRadius: "999px"}}>
                          {hole(t?.tag)}
                        </span>
                        <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "19px", lineHeight: "1.25"}}>
                          {hole(t?.name)}
                        </p>
                        <p style={{margin: "0", fontSize: "13px", color: "#5C5470", minHeight: "42px"}}>
                          {hole(t?.best)}
                        </p>
                        <p style={{margin: "0", display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "8px"}}>
                          {t?.hasMrp ? (
                            <>
                              <span style={{fontSize: "13.5px", color: "#5C5470", textDecoration: "line-through"}}>
                                {hole(t?.mrp)}
                              </span>
                            </>
                          ) : null}
                          <span style={{fontFamily: "'Marcellus', serif", fontSize: "27px", lineHeight: "1"}}>
                            {hole(t?.price)}
                          </span>
                        </p>
                        <p style={{margin: "0", display: "flex", flexWrap: "wrap", gap: "6px"}}>
                          <span style={{fontSize: "12px", fontWeight: "700", color: "#3D0752", background: "#F3E8F7", padding: "4px 10px", borderRadius: "999px"}}>
                            {hole(t?.format)}
                          </span>
                        </p>
                        <div style={{height: "1px", background: "#EFE6D8", margin: "2px 0"}} />
                        {t?.hasBase ? (
                          <>
                            <p style={{margin: "0", fontSize: "12px", fontWeight: "700", color: "#921A11"}}>
                              {hole(t?.base)}
                            </p>
                          </>
                        ) : null}
                        <div style={{display: "grid", gap: "8px", fontSize: "13px", lineHeight: "1.5"}}>
                          {(t?.items || []).map((i, $index) => (
                            <React.Fragment key={$index}>
                              <p style={{margin: "0", display: "flex", gap: "8px"}}>
                                <svg aria-hidden={"true"} width={"17"} height={"17"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                                  <path d={"M5 12l5 5 9-10"} />
                                </svg>
                                <span>
                                  {hole(i?.text)}
                                </span>
                              </p>
                            </React.Fragment>
                          ))}
                        </div>
                        <a href={numCheckoutHref(t?.name)} style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "50px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
                          {"Order now"}
                        </a>
                      </div>
                    </>
                  ) : null}
                  {t?.cool ? (
                    <>
                      <div className={"am-lift"} style={{position: "relative", display: "flex", flexDirection: "column", gap: "12px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "26px 22px"}}>
                        <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "19px", lineHeight: "1.25"}}>
                          {hole(t?.name)}
                        </p>
                        <p style={{margin: "0", fontSize: "13px", color: "#5C5470", minHeight: "42px"}}>
                          {hole(t?.best)}
                        </p>
                        <p style={{margin: "0", display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "8px"}}>
                          {t?.hasMrp ? (
                            <>
                              <span style={{fontSize: "13.5px", color: "#5C5470", textDecoration: "line-through"}}>
                                {hole(t?.mrp)}
                              </span>
                            </>
                          ) : null}
                          <span style={{fontFamily: "'Marcellus', serif", fontSize: "27px", lineHeight: "1"}}>
                            {hole(t?.price)}
                          </span>
                        </p>
                        <p style={{margin: "0", display: "flex", flexWrap: "wrap", gap: "6px"}}>
                          <span style={{fontSize: "12px", fontWeight: "700", color: "#3D0752", background: "#F3E8F7", padding: "4px 10px", borderRadius: "999px"}}>
                            {hole(t?.format)}
                          </span>
                        </p>
                        <div style={{height: "1px", background: "#EFE6D8", margin: "2px 0"}} />
                        {t?.hasBase ? (
                          <>
                            <p style={{margin: "0", fontSize: "12px", fontWeight: "700", color: "#921A11"}}>
                              {hole(t?.base)}
                            </p>
                          </>
                        ) : null}
                        <div style={{display: "grid", gap: "8px", fontSize: "13px", lineHeight: "1.5"}}>
                          {(t?.items || []).map((i, $index) => (
                            <React.Fragment key={$index}>
                              <p style={{margin: "0", display: "flex", gap: "8px"}}>
                                <svg aria-hidden={"true"} width={"17"} height={"17"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                                  <path d={"M5 12l5 5 9-10"} />
                                </svg>
                                <span>
                                  {hole(i?.text)}
                                </span>
                              </p>
                            </React.Fragment>
                          ))}
                        </div>
                        <a href={numCheckoutHref(t?.name)} style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "50px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", textDecoration: "none"}}>
                          {"Order now"}
                        </a>
                      </div>
                    </>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
            <p style={{margin: "28px 0 0", textAlign: "center", fontSize: "13.5px", color: "#5C5470"}}>
              {hole(v.tabNote)}
            </p>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px 24px"}}>
          <div className={"am-center-mobile"} style={{marginBottom: "32px"}}>
            <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
              {"Who it is for"}
            </p>
            <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 3.06vw, 37px)", lineHeight: "1.15"}}>
              {"For anyone whose name matters."}
            </h2>
            <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470", maxWidth: "680px"}}>
              {"Your name is the word you hear most in life. Numerology checks whether its vibration works with your date of birth, and suggests small spelling changes when it does not."}
            </p>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "16px"}}>
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
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px"}}>
          <div style={{textAlign: "center", marginBottom: "40px"}}>
            <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
              {"How it works"}
            </p>
            <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 3.06vw, 37px)", lineHeight: "1.15"}}>
              {"From your name to your report."}
            </h2>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(230px, 100%), 1fr))", gap: "20px"}}>
            {(v.steps || []).map((s, $index) => (
              <React.Fragment key={$index}>
                <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "18px", padding: "26px 22px", outline: "1px solid #EFE6D8", outlineOffset: "-8px"}}>
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
        <div style={{background: "#FFFFFF", borderTop: "1px solid #E8DFD0"}}>
          <div style={{maxWidth: "860px", margin: "0 auto", padding: "88px 24px"}}>
            <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700", textAlign: "center"}}>
              {"Questions"}
            </p>
            <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 3.06vw, 37px)", lineHeight: "1.15", textAlign: "center", marginBottom: "36px"}}>
              {"About name numerology"}
            </h2>
            <div style={{display: "grid", gap: "12px"}}>
              {(v.faqs || []).map((q, $index) => (
                <React.Fragment key={$index}>
                  <details style={{background: "#FBF7F0", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 24px"}}>
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
        <div style={{height: "40px"}} />
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
                  {"Not sure which package suits you? Message us on WhatsApp and we will help you choose."}
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

export default ReportNamePage;
