"use client";
/* eslint-disable */
// Generated from the design file Courses.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { HoroscopeMenu, HoroscopeMobileMenu, CalculatorsMenu, CalculatorsMobileMenu, ReportsMenu, ReportsMobileMenu, PanchangMenu, PanchangMobileMenu } from "./HoroscopeMenu";
import { sx, hole } from "./sx";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState, maskDate, maskTime, maskTimeHM, maskPart } from "./wire";

class CoursesPage extends React.Component {
  constructor(props) { super(props); this.state = Object.assign({ menuOpen: false, picks: ['Numerology', 'Manifestation'] }, props && props.initialState); }
  renderVals() {
    var picks = this.state.picks || [];
    var topics = ['Numerology', 'Astrology', 'Marriage and compatibility', 'Manifestation'].map((t) => ({ label: t, sel: picks.indexOf(t) >= 0, notSel: picks.indexOf(t) < 0,
      pick: () => { var n = picks.slice(); var i = n.indexOf(t); if (i >= 0) n.splice(i, 1); else n.push(t); this.setState({ picks: n }); } }));
    return { topics: topics, menuOpen: !!this.state.menuOpen, menuExpanded: this.state.menuOpen ? 'true' : 'false', openMenu: () => this.setState({ menuOpen: true }), closeMenu: () => this.setState({ menuOpen: false }) };
  }
}

CoursesPage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="Courses" style={{ display: "contents" }}>
      <div style={{fontFamily: "'Manrope', system-ui, sans-serif", color: "#1E1830", background: "#FBF7F0", fontSize: "14.5px", lineHeight: "1.6"}}>
        <header style={{position: "sticky", top: "0", zIndex: "50", background: "rgba(46,0,62,0.94)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,255,255,0.08)"}}>
          <nav aria-label={"Main"} style={{maxWidth: "1200px", margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px"}}>
            <a href={"/"} aria-label={"Ahllya Mystic home"} style={{display: "block", flex: "none"}}>
              <img className={"am-navlogo"} src={"/images/f0424906cf2ed307d839fd952ac77981.png"} alt={"Ahllya Mystic"} style={{height: "48px", width: "auto", display: "block"}} />
            </a>
            <div className={"am-navlinks"} style={{alignItems: "center", gap: "30px", fontSize: "13.5px", fontWeight: "500"}}>
              <a href={"/"} className={"am-navsym"} aria-label={"Ahllya Mystic home"} tabIndex={-1}></a>
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
        <div style={{position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at 100% 0%, rgba(108,21,148,0.10), rgba(108,21,148,0) 50%), radial-gradient(ellipse at 0% 100%, rgba(146,26,17,0.05), rgba(146,26,17,0) 45%), #FBF7F0"}}>
          <div id={"courses"} style={{maxWidth: "1200px", margin: "0 auto", padding: "22px 24px 56px"}}>
            <nav aria-label={"Breadcrumb"} style={{fontSize: "13px", color: "#5C5470", marginBottom: "36px"}}>
              <a href={"/"} style={{color: "#5C5470", textDecoration: "none"}}>
                {"Home"}
              </a>
              <span aria-hidden={"true"} style={{margin: "0 8px"}}>
                {"/"}
              </span>
              <span style={{color: "#1E1830", fontWeight: "600"}}>
                {"Courses"}
              </span>
            </nav>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", marginBottom: "32px"}}>
              <div className={"am-center-mobile"} style={{minWidth: "0"}}>
                <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                  {"Our courses"}
                </p>
                <h1 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(28.5px, 3.57vw, 43.5px)", lineHeight: "1.1"}}>
                  {"Why wonder about life when you can learn to read it?"}
                </h1>
                <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470", maxWidth: "680px"}}>
                  {"Online courses in astrology and numerology, taught step by step for beginners and enthusiasts, by Ahalya Sangeeta. Enrolment opens soon."}
                </p>
              </div>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "20px"}}>
              <div className={"am-lift"} style={{display: "flex", flexDirection: "column", overflow: "hidden", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <img loading={"lazy"} decoding={"async"} src={"/images/f096e04a039d9feb59de98d1d02de7f1.jpg"} alt={"Numerology Foundation course with Ahalya Sangeeta"} style={{width: "100%", aspectRatio: "16 / 9", objectFit: "cover", display: "block"}} />
                <div style={{display: "flex", flexDirection: "column", flex: "1", padding: "24px 26px 26px"}}>
                  <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "14px"}}>
                    <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "17.5px", color: "#921A11"}}>
                      {"अंक शास्त्र"}
                    </span>
                    <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#6C1594", background: "#F3E8F7", padding: "4px 10px", borderRadius: "999px"}}>
                      {"Coming soon"}
                    </span>
                  </div>
                  <p style={{margin: "0 0 8px", fontFamily: "'Marcellus', serif", fontSize: "22px", lineHeight: "1.2"}}>
                    {"Numerology Foundation"}
                  </p>
                  <p style={{margin: "0 0 16px", fontSize: "13.5px", color: "#5C5470", lineHeight: "1.6"}}>
                    {"Birth, destiny and name numbers from the ground up, so you can read any name or date yourself."}
                  </p>
                  <div style={{flex: "1", borderTop: "1px solid #EFE6D8", paddingTop: "14px", marginBottom: "18px"}}>
                    <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: "700", color: "#736B8A"}}>
                      {"You will learn"}
                    </p>
                    <p style={{margin: "0 0 8px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                      <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                        <path d={"M5 12l5 5 9-10"} />
                      </svg>
                      {"Your core numbers"}
                    </p>
                    <p style={{margin: "0 0 8px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                      <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                        <path d={"M5 12l5 5 9-10"} />
                      </svg>
                      {"Name numbers and corrections"}
                    </p>
                    <p style={{margin: "0 0 8px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                      <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                        <path d={"M5 12l5 5 9-10"} />
                      </svg>
                      {"Lucky dates and mobile numbers"}
                    </p>
                  </div>
                  <p style={{margin: "0 0 14px", fontSize: "12px", color: "#5C5470"}}>
                    {"Online · With Ahalya Sangeeta · For beginners"}
                  </p>
                  <a href={"#notify"} style={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "50px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", textDecoration: "none"}}>
                    {"Notify me"}
                  </a>
                </div>
              </div>
              <div className={"am-lift"} style={{display: "flex", flexDirection: "column", overflow: "hidden", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <img loading={"lazy"} decoding={"async"} src={"/images/ea15b3e1780bbd6844ecaa33bda0c926.jpg"} alt={"Astrology Foundation course with Ahalya Sangeeta"} style={{width: "100%", aspectRatio: "16 / 9", objectFit: "cover", display: "block"}} />
                <div style={{display: "flex", flexDirection: "column", flex: "1", padding: "24px 26px 26px"}}>
                  <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "14px"}}>
                    <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "17.5px", color: "#921A11"}}>
                      {"ज्योतिष"}
                    </span>
                    <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#6C1594", background: "#F3E8F7", padding: "4px 10px", borderRadius: "999px"}}>
                      {"Coming soon"}
                    </span>
                  </div>
                  <p style={{margin: "0 0 8px", fontFamily: "'Marcellus', serif", fontSize: "22px", lineHeight: "1.2"}}>
                    {"Astrology Foundation"}
                  </p>
                  <p style={{margin: "0 0 16px", fontSize: "13.5px", color: "#5C5470", lineHeight: "1.6"}}>
                    {"Houses, planets and signs, step by step, until you can read a chart on your own."}
                  </p>
                  <div style={{flex: "1", borderTop: "1px solid #EFE6D8", paddingTop: "14px", marginBottom: "18px"}}>
                    <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: "700", color: "#736B8A"}}>
                      {"You will learn"}
                    </p>
                    <p style={{margin: "0 0 8px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                      <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                        <path d={"M5 12l5 5 9-10"} />
                      </svg>
                      {"The 12 houses and 9 planets"}
                    </p>
                    <p style={{margin: "0 0 8px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                      <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                        <path d={"M5 12l5 5 9-10"} />
                      </svg>
                      {"Signs, nakshatras and dashas"}
                    </p>
                    <p style={{margin: "0 0 8px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                      <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                        <path d={"M5 12l5 5 9-10"} />
                      </svg>
                      {"Reading a chart from start to finish"}
                    </p>
                  </div>
                  <p style={{margin: "0 0 14px", fontSize: "12px", color: "#5C5470"}}>
                    {"Online · With Ahalya Sangeeta · For beginners"}
                  </p>
                  <a href={"#notify"} style={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "50px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", textDecoration: "none"}}>
                    {"Notify me"}
                  </a>
                </div>
              </div>
              <div className={"am-lift"} style={{display: "flex", flexDirection: "column", overflow: "hidden", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <img loading={"lazy"} decoding={"async"} src={"/images/6da4179d5dfa9489ed3e3e39f8aa92bd.jpg"} alt={"Decoding Marriage and Compatibility course with Ahalya Sangeeta"} style={{width: "100%", aspectRatio: "16 / 9", objectFit: "cover", display: "block"}} />
                <div style={{display: "flex", flexDirection: "column", flex: "1", padding: "24px 26px 26px"}}>
                  <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "14px"}}>
                    <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "17.5px", color: "#921A11"}}>
                      {"विवाह"}
                    </span>
                    <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#6C1594", background: "#F3E8F7", padding: "4px 10px", borderRadius: "999px"}}>
                      {"Coming soon"}
                    </span>
                  </div>
                  <p style={{margin: "0 0 8px", fontFamily: "'Marcellus', serif", fontSize: "22px", lineHeight: "1.2"}}>
                    {"Decoding Marriage and Compatibility"}
                  </p>
                  <p style={{margin: "0 0 16px", fontSize: "13.5px", color: "#5C5470", lineHeight: "1.6"}}>
                    {"How to read compatibility, timing and doshas for marriage."}
                  </p>
                  <div style={{flex: "1", borderTop: "1px solid #EFE6D8", paddingTop: "14px", marginBottom: "18px"}}>
                    <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: "700", color: "#736B8A"}}>
                      {"You will learn"}
                    </p>
                    <p style={{margin: "0 0 8px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                      <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                        <path d={"M5 12l5 5 9-10"} />
                      </svg>
                      {"Kundli Milan beyond the score"}
                    </p>
                    <p style={{margin: "0 0 8px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                      <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                        <path d={"M5 12l5 5 9-10"} />
                      </svg>
                      {"Manglik and other doshas"}
                    </p>
                    <p style={{margin: "0 0 8px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                      <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                        <path d={"M5 12l5 5 9-10"} />
                      </svg>
                      {"Timing of marriage"}
                    </p>
                  </div>
                  <p style={{margin: "0 0 14px", fontSize: "12px", color: "#5C5470"}}>
                    {"Online · With Ahalya Sangeeta · For beginners"}
                  </p>
                  <a href={"#notify"} style={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "50px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", textDecoration: "none"}}>
                    {"Notify me"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "56px 24px 32px"}}>
          <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(120deg, #2E003E 0%, #6C1594 100%)", color: "#FFFFFF", borderRadius: "28px", padding: "clamp(24px, 4vw, 44px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "28px 44px"}}>
            <div className={"am-stars"} aria-hidden={"true"} />
            <img loading={"lazy"} decoding={"async"} src={"/images/f51fdba3c3c077276fab777f3ecab46d.jpg"} alt={"Manifestation Masterclass with Maneswita"} style={{position: "relative", flex: "1 1 340px", minWidth: "0", maxWidth: "480px", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: "18px", display: "block", boxShadow: "0 24px 48px -26px rgba(0,0,0,0.6)"}} />
            <div style={{position: "relative", flex: "1 1 360px", minWidth: "0"}}>
              <p style={{margin: "0 0 12px"}}>
                <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#921A11", background: "#FCCE07", padding: "5px 12px", borderRadius: "999px"}}>
                  {"Live 2-day masterclass"}
                </span>
              </p>
              <p style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontSize: "clamp(22.5px, 2.38vw, 30px)", lineHeight: "1.2"}}>
                {"Manifestation Masterclass"}
              </p>
              <p style={{margin: "0 0 20px", color: "#EADFF2"}}>
                {"Your personal manifestation blueprint, in two live evenings with Maneswita. 7 pm onwards, next dates announced soon."}
              </p>
              <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 20px"}}>
                <span style={{display: "flex", alignItems: "baseline", gap: "8px"}}>
                  <span style={{fontSize: "14.5px", color: "#CDB8DA", textDecoration: "line-through"}}>
                    {"₹799"}
                  </span>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "28.5px", lineHeight: "1"}}>
                    {"₹99"}
                  </span>
                </span>
                <a href={"/masterclass"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
                  {"See the masterclass"}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id={"notify"} style={{maxWidth: "1200px", margin: "0 auto", padding: "24px 24px 40px"}}>
          <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "clamp(24px, 4vw, 40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "28px 48px", alignItems: "center"}}>
            <div>
              <p style={{margin: "0 0 8px", fontFamily: "'Marcellus', serif", fontSize: "clamp(22.5px, 2.38vw, 28.5px)", lineHeight: "1.2"}}>
                {"Be the first to know."}
              </p>
              <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470"}}>
                {"Tell us what you would like to learn. We will message you on WhatsApp when enrolment opens, and when the next masterclass dates are out."}
              </p>
            </div>
            <form style={{display: "grid", gap: "14px"}}>
              <div style={{display: "grid", gap: "8px"}}>
                <span style={{fontSize: "13px", fontWeight: "600"}}>
                  {"I am interested in"}
                </span>
                <div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                  {(v.topics || []).map((t, $index) => (
                    <React.Fragment key={$index}>
                      {t?.sel ? (
                        <>
                          <button type={"button"} aria-pressed={"true"} onClick={t?.pick} style={{minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#F3E8F7", color: "#6C1594", font: "inherit", fontSize: "13.5px", fontWeight: "700", cursor: "pointer"}}>
                            {hole(t?.label)}
                          </button>
                        </>
                      ) : null}
                      {t?.notSel ? (
                        <>
                          <button type={"button"} aria-pressed={"false"} onClick={t?.pick} style={{minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontSize: "13.5px", fontWeight: "600", cursor: "pointer"}}>
                            {hole(t?.label)}
                          </button>
                        </>
                      ) : null}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))", gap: "12px"}}>
                <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                  {"Name"}
                  <input type={"text"} placeholder={"Full name"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                </label>
                <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                  {"WhatsApp number"}
                  <input type={"tel"} placeholder={"+91"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                </label>
              </div>
              <FormButton as="button" endpoint="/api/courses/interest" extra={{ topics: this.state.picks || [] }} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "52px", border: "0", borderRadius: "999px", background: "#FCCE07", color: "#921A11", font: "inherit", fontWeight: "700", cursor: "pointer"}}>
                <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <path d={"M4 20l1.3-3.9A8 8 0 1 1 8 19z"} />
                </svg>
                {"Notify me on WhatsApp"}
              </FormButton>
            </form>
          </div>
        </div>
        <div style={{maxWidth: "860px", margin: "0 auto", padding: "72px 24px 96px"}}>
          <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700", textAlign: "center"}}>
            {"Questions"}
          </p>
          <h2 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15", textAlign: "center", marginBottom: "28px"}}>
            {"About our courses"}
          </h2>
          <div style={{display: "grid", gap: "10px"}}>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"When do the courses start?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"Our Numerology, Astrology and Marriage courses are being prepared now. Leave your details below and we will message you first when enrolment opens."}
              </p>
            </details>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"Do I need any prior knowledge?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"No. Our courses are made for beginners and enthusiasts, and go step by step."}
              </p>
            </details>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"Who teaches the courses?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"Ahalya Sangeeta, founder of Ahllya Mystic."}
              </p>
            </details>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"Are the courses live or recorded?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"The format for each course will be shared when enrolment opens. Leave your details and we will tell you first."}
              </p>
            </details>
          </div>
        </div>
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
                <div style={{display: "grid", gap: "10px", alignContent: "start", marginTop: "24px"}}>
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
                  {"Reports"}
                </p>
                <a href={"/report/kundli"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Kundli report"}
                </a>
                <a href={"/report/varshphal"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Varshphal 2027 report"}
                </a>
                <a href={"/report/milan"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Kundli Milan report"}
                </a>
                <a href={"/report/lal-kitab"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Lal Kitab report"}
                </a>
                <a href={"/report/name-numerology"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Name numerology report"}
                </a>
                <a href={"/report/mobile-number"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Mobile number report"}
                </a>
              </div>
              <div style={{display: "grid", gap: "10px", alignContent: "start"}}>
                <p style={{margin: "0 0 4px", fontWeight: "700", color: "#FFFFFF"}}>
                  {"Guides"}
                </p>
                <a href={"/blog/sade-sati-what-it-really-means"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"What Sade Sati really means"}
                </a>
                <a href={"/blog/how-to-read-your-kundli-basics"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"How to read your Kundli"}
                </a>
                <a href={"/blog/kp-astrology-vs-vedic-astrology"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"KP vs Vedic astrology"}
                </a>
                <a href={"/blog/should-you-change-your-name-spelling"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Should you change your name spelling?"}
                </a>
                <a href={"/blog/mobile-number-numerology-how-to-choose"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Choosing a mobile number"}
                </a>
                <a href={"/blog/what-is-panchang-five-limbs"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"The five limbs of Panchang"}
                </a>
                <a href={"/blog/how-to-use-choghadiya-daily"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Using Choghadiya daily"}
                </a>
                <a href={"/blog/simple-vastu-fixes-for-your-home"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Simple Vastu fixes"}
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

export default CoursesPage;
