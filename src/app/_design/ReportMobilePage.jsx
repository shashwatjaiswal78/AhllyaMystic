"use client";
/* eslint-disable */
// Generated from the design file Mobile.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { HoroscopeMenu, HoroscopeMobileMenu, CalculatorsMenu, CalculatorsMobileMenu, ReportsMenu, ReportsMobileMenu, PanchangMenu, PanchangMobileMenu } from "./HoroscopeMenu";
import { sx, hole } from "./sx";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState, maskDate, maskTime, maskTimeHM, maskPart } from "./wire";

class ReportMobilePage extends React.Component {
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
    var tiers = mk([
      { name: 'Mobile Number Check', best: 'A quick verdict on your current number.', price: 249, mrp: 498, format: 'Report only',
        items: ['Your number’s total and its ruling planet', 'Your Mulank and Bhagyank', 'Whether your number supports your birth numbers', 'A clear verdict on whether to change it'] },
      { name: 'Mobile Number Report', best: 'A full reading of how your number affects your life.', price: 499, format: 'Report only', tag: 'Most chosen', base: 'Everything in the Check, plus:',
        items: ['Impact on career, money, relationships and health', 'How well your number fits your life goals', 'Your lucky wallpaper', 'Your lucky phone colour or cover'] },
      { name: 'Advance Report and Consultancy', best: 'A new number designed around your goals.', price: 1499, format: 'Report + consultation', base: 'Everything in the Report, plus:',
        items: ['Suggested number patterns for your goals, such as growth, stability or peace', 'Lo Shu grid and Mulank–Bhagyank check of each suggestion', 'Tips for choosing digits that work in harmony', 'Consultation to help you pick a number'] }
    ]);
    var out = {
      tiers: tiers,
      audiences: [
        { icon: 'M7 3h7l4 4v14H7zM10 12h5v5h-5z', title: 'Buying a new SIM', text: 'Choose a number that suits you from the start.' },
        { icon: 'M4 9l1-5h14l1 5M4 9h16v11H4zM9 20v-6h6v6', title: 'Business owners', text: 'The number your customers call should work for your business.' },
        { icon: 'M4 4v6h6M20 20v-6h-6M5 15a7 7 0 0 0 12.6 2M19 9A7 7 0 0 0 6.4 7', title: 'Feeling stuck', text: 'Delays and blocks keep showing up, and you want to rule out your number.' },
        { icon: 'M7 3h10v18H7zM11 18h2', title: 'Switching numbers', text: 'Moving to a new number and want to get it right this time.' },
        { icon: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0', title: 'Curious about numerology', text: 'An easy, low-cost way to see how numerology reads you.' },
        { icon: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z', title: 'Families', text: 'Checking everyone’s numbers together.' }
      ],
      steps: [
        { title: 'Choose a package', text: 'A quick check, a full report, or a new number designed for you.' },
        { title: 'Share your details', text: 'Your mobile number, your name and your date of birth.' },
        { title: 'We analyse', text: 'Our experts read your number against your birth numbers.' },
        { title: 'Receive your report', text: 'Your PDF arrives on email and WhatsApp in 5 to 7 working days.' }
      ].map((s, i) => ({ num: i + 1, title: s.title, text: s.text })),
      faqs: [
        { q: 'Do I have to change my number?', a: 'Only if it does not support your birth numbers. Your report gives a clear verdict either way.' },
        { q: 'Can you get me a specific number?', a: 'We suggest the digit patterns that suit you. You then pick an available number from your operator. Custom combinations are quoted separately on WhatsApp.' },
        { q: 'Does this work for business numbers?', a: 'Yes. For a business number we read it against the owner’s date of birth.' },
        { q: 'Do I need my birth time?', a: 'No. Mobile numerology works from your date of birth and your number.' },
        { q: 'When will I receive my report?', a: 'As a PDF on email and WhatsApp, within 5 to 7 working days of payment.' },
        { q: 'Will my details stay private?', a: 'Yes. Your details are used only to prepare your report and are never shared.' }
      ]
    };
    var menuOpen = !!this.state.menuOpen;
    out.menuOpen = menuOpen; out.menuExpanded = menuOpen ? 'true' : 'false';
    out.openMenu = () => this.setState({ menuOpen: true }); out.closeMenu = () => this.setState({ menuOpen: false });
    return out;
  }
}

ReportMobilePage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="Mobile" style={{ display: "contents" }}>
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
              <PanchangMenu />
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
        <main id={"main"} style={{display: "contents"}}>
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
                  <PanchangMobileMenu onNavigate={v.closeMenu} />
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
                {"Mobile Number Numerology"}
              </span>
            </nav>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px"}}>
              <div className={"am-center-mobile"} style={{flex: "1.3 1 480px", minWidth: "0"}}>
                <p style={{margin: "0 0 14px"}}>
                  <span style={{display: "inline-block", padding: "5px 18px 3px", borderRadius: "999px", background: "#FBF1EE", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "17px", lineHeight: "1.5", color: "#921A11"}}>
                    {"मोबाइल अंक ज्योतिष"}
                  </span>
                </p>
                <p style={{margin: "0 0 12px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
                  {"Numerology"}
                </p>
                <h1 style={{margin: "0 0 16px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(30px, 3.91vw, 48px)", lineHeight: "1.08"}}>
                  {"Mobile Number Numerology"}
                </h1>
                <p style={{margin: "0 0 28px", fontSize: "16px", color: "#EADFF2", maxWidth: "560px"}}>
                  {"You use your phone number every day. Find out whether it works with your birth numbers, and if not, get a number designed for your goals."}
                </p>
                <div className={"am-hero-flex"} style={{display: "flex", flexWrap: "wrap", gap: "12px"}}>
                  <a href={"#packages"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "54px", minWidth: "220px", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
                    {"See packages"}
                  </a>
                  <a href={"/mobile-number"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "54px", minWidth: "220px", padding: "0 28px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.45)", color: "#FFFFFF", fontWeight: "700", textDecoration: "none"}}>
                    {"Check yours free"}
                  </a>
                </div>
              </div>
              <div style={{flex: "1 1 360px", minWidth: "0"}}>
                <div style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "22px", padding: "24px"}}>
                  <p style={{margin: "0 0 4px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
                    {"How a number is read"}
                  </p>
                  <p style={{margin: "0 0 16px", fontSize: "13px", color: "#EADFF2"}}>
                    {"Add all ten digits and reduce to a single number."}
                  </p>
                  <div style={{display: "flex", gap: "5px", flexWrap: "wrap", marginBottom: "14px"}}>
                    <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "40px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", fontFamily: "'Marcellus', serif", fontSize: "17.5px"}}>
                      {"9"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "40px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", fontFamily: "'Marcellus', serif", fontSize: "17.5px"}}>
                      {"8"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "40px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", fontFamily: "'Marcellus', serif", fontSize: "17.5px"}}>
                      {"7"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "40px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", fontFamily: "'Marcellus', serif", fontSize: "17.5px"}}>
                      {"6"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "40px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", fontFamily: "'Marcellus', serif", fontSize: "17.5px"}}>
                      {"5"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "40px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", fontFamily: "'Marcellus', serif", fontSize: "17.5px"}}>
                      {"4"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "40px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", fontFamily: "'Marcellus', serif", fontSize: "17.5px"}}>
                      {"3"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "40px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", fontFamily: "'Marcellus', serif", fontSize: "17.5px"}}>
                      {"2"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "40px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", fontFamily: "'Marcellus', serif", fontSize: "17.5px"}}>
                      {"1"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "40px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", fontFamily: "'Marcellus', serif", fontSize: "17.5px"}}>
                      {"0"}
                    </span>
                  </div>
                  <p style={{margin: "0 0 14px", fontSize: "13.5px"}}>
                    {"9+8+7+6+5+4+3+2+1+0 = 45 → 4+5 = "}
                    <span style={{fontFamily: "'Marcellus', serif", fontSize: "22.5px", color: "#FCCE07"}}>
                      {"9"}
                    </span>
                    {" "}
                    <span style={{color: "#EADFF2"}}>
                      {"· ruled by Mars"}
                    </span>
                  </p>
                  <div style={{display: "grid", gap: "8px", fontSize: "13px", color: "#EADFF2"}}>
                    <p style={{margin: "0", display: "flex", gap: "8px"}}>
                      <span style={{color: "#FCCE07", fontWeight: "700"}}>
                        {"1"}
                      </span>
                      {"Does the total suit your Mulank and Bhagyank?"}
                    </p>
                    <p style={{margin: "0", display: "flex", gap: "8px"}}>
                      <span style={{color: "#FCCE07", fontWeight: "700"}}>
                        {"2"}
                      </span>
                      {"Which digit pairs sit side by side, and what do they bring?"}
                    </p>
                    <p style={{margin: "0", display: "flex", gap: "8px"}}>
                      <span style={{color: "#FCCE07", fontWeight: "700"}}>
                        {"3"}
                      </span>
                      {"Which numbers are missing from your Lo Shu grid?"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id={"packages"} style={{background: "radial-gradient(ellipse at 100% 0%, rgba(108,21,148,0.07), rgba(108,21,148,0) 50%), #FBF7F0"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px"}}>
            <div style={{textAlign: "center", marginBottom: "40px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Choose your package"}
              </p>
              <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 3.06vw, 37px)", lineHeight: "1.15"}}>
                {"Check your number, or find a better one."}
              </h2>
              <p style={{margin: "0 auto", fontSize: "14.5px", color: "#5C5470", maxWidth: "640px"}}>
                {"Reports arrive as a PDF on email and WhatsApp within 5 to 7 working days."}
              </p>
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
              {"Want a specific digit pattern, like a number ending in your lucky digits? We quote for custom combinations on WhatsApp."}
            </p>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px 24px"}}>
          <div className={"am-center-mobile"} style={{marginBottom: "32px"}}>
            <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
              {"Who it is for"}
            </p>
            <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 3.06vw, 37px)", lineHeight: "1.15"}}>
              {"For anyone choosing or checking a number."}
            </h2>
            <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470", maxWidth: "680px"}}>
              {"Whether you are buying a new SIM, using a number for business or simply curious, a quick check tells you if your number supports you."}
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
              {"From your number to your report."}
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
              {"About mobile numerology"}
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
            <img loading={"lazy"} decoding={"async"} className={"am-spin"} src={"/images/c78c760843b4d5a96c8f408f537e3799.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", right: "-160px", top: "-150px", width: "460px", height: "460px", opacity: "0.2", pointerEvents: "none"}} />
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
        </main>
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
                <a href={"/horoscope"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Daily Horoscope"}
                </a>
                <a href={"/panchang"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Daily Panchang"}
                </a>
                <a href={"/choghadiya"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Daily Choghadiya"}
                </a>
                <a href={"/kp-kundli"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Free KP Kundli"}
                </a>
                <a href={"/name-number"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Free Name Numerology"}
                </a>
                <a href={"/mobile-number"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Free Mobile Number Numerology"}
                </a>
                <a href={"/blog"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Blog"}
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

export default ReportMobilePage;
