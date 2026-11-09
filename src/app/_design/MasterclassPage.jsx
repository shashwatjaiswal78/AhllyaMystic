"use client";
/* eslint-disable */
// Generated from the design file Masterclass.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { HoroscopeMenu, HoroscopeMobileMenu, CalculatorsMenu, CalculatorsMobileMenu, ReportsMenu, ReportsMobileMenu } from "./HoroscopeMenu";
import { sx, hole } from "./sx";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState, maskDate, maskTime, maskTimeHM, maskPart } from "./wire";

class MasterclassPage extends React.Component {
  constructor(props) { super(props); this.state = Object.assign({ menuOpen: false }, props && props.initialState); }
  renderVals() { return { menuOpen: !!this.state.menuOpen, menuExpanded: this.state.menuOpen ? 'true' : 'false', openMenu: () => this.setState({ menuOpen: true }), closeMenu: () => this.setState({ menuOpen: false }) }; }
}

MasterclassPage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="Masterclass" style={{ display: "contents" }}>
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
              <a href={"/panchang"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Panchang"}
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
                  <a href={"/panchang"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                    {"Panchang"}
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
        <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #1E0029 0%, #2E003E 40%, #4A0A66 75%, #6C1594 100%)", color: "#FFFFFF"}}>
          <div className={"am-stars"} aria-hidden={"true"} />
          <div className={"am-stars2"} aria-hidden={"true"} />
          <span className={"am-shoot"} aria-hidden={"true"} style={{top: "90px", left: "58%"}} />
          <img loading={"lazy"} decoding={"async"} className={"am-spin"} src={"/images/c78c760843b4d5a96c8f408f537e3799.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", right: "-200px", top: "-160px", width: "620px", height: "620px", opacity: "0.16", pointerEvents: "none"}} />
          <div style={{position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "22px 24px 88px"}}>
            <nav aria-label={"Breadcrumb"} style={{fontSize: "13px", color: "#CDB8DA", marginBottom: "40px"}}>
              <a href={"/"} style={{color: "#CDB8DA", textDecoration: "none"}}>
                {"Home"}
              </a>
              <span aria-hidden={"true"} style={{margin: "0 8px"}}>
                {"/"}
              </span>
              <a href={"/courses"} style={{color: "#CDB8DA", textDecoration: "none"}}>
                {"Courses"}
              </a>
              <span aria-hidden={"true"} style={{margin: "0 8px"}}>
                {"/"}
              </span>
              <span style={{color: "#FFFFFF", fontWeight: "600"}}>
                {"Manifestation Masterclass"}
              </span>
            </nav>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px"}}>
              <div className={"am-center-mobile"} style={{flex: "1.3 1 480px", minWidth: "0"}}>
                <p style={{margin: "0 0 16px", display: "flex", flexWrap: "wrap", gap: "8px"}} className={"am-hero-flex"}>
                  <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#921A11", background: "#FCCE07", padding: "5px 12px", borderRadius: "999px"}}>
                    {"Live 2-day masterclass"}
                  </span>
                  <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#FFFFFF", background: "rgba(255,255,255,0.12)", padding: "5px 12px", borderRadius: "999px"}}>
                    {"Online"}
                  </span>
                </p>
                <p style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontSize: "clamp(17.5px, 1.7vw, 21px)", color: "#FCCE07"}}>
                  {"Manifestation Masterclass"}
                </p>
                <h1 style={{margin: "0 0 18px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(28.5px, 3.57vw, 45px)", lineHeight: "1.1"}}>
                  {"Doing everything right, but still not manifesting results?"}
                </h1>
                <p style={{margin: "0 0 28px", fontSize: "16px", color: "#EADFF2", maxWidth: "580px"}}>
                  {"Your personal manifestation blueprint, in two live evenings with Maneswita. Learn why manifestations fail, how to let go, and a simple daily habit that makes it work."}
                </p>
                <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(160px, 100%), 1fr))", gap: "10px", maxWidth: "620px"}}>
                  <div style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "14px", padding: "12px 14px"}}>
                    <p style={{margin: "0", fontSize: "12px", color: "#CDB8DA"}}>
                      {"When"}
                    </p>
                    <p style={{margin: "2px 0 0", fontWeight: "700"}}>
                      {"Next dates soon"}
                    </p>
                  </div>
                  <div style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "14px", padding: "12px 14px"}}>
                    <p style={{margin: "0", fontSize: "12px", color: "#CDB8DA"}}>
                      {"Time"}
                    </p>
                    <p style={{margin: "2px 0 0", fontWeight: "700"}}>
                      {"7 pm onwards"}
                    </p>
                  </div>
                  <div style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "14px", padding: "12px 14px"}}>
                    <p style={{margin: "0", fontSize: "12px", color: "#CDB8DA"}}>
                      {"Length"}
                    </p>
                    <p style={{margin: "2px 0 0", fontWeight: "700"}}>
                      {"2 live evenings"}
                    </p>
                  </div>
                </div>
              </div>
              <div style={{flex: "1 1 380px", minWidth: "0", maxWidth: "460px", margin: "0 auto"}}>
                <img loading={"lazy"} decoding={"async"} src={"/images/f51fdba3c3c077276fab777f3ecab46d.jpg"} alt={"Manifestation Masterclass with Maneswita"} style={{position: "relative", zIndex: "1", width: "92%", margin: "0 auto -28px", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: "18px", display: "block", boxShadow: "0 30px 60px -30px rgba(0,0,0,0.7)", border: "3px solid rgba(255,255,255,0.9)"}} />
                <div style={{background: "#FFFFFF", color: "#1E1830", borderRadius: "24px", padding: "28px", boxShadow: "0 40px 80px -40px rgba(0,0,0,0.6)", paddingTop: "44px"}}>
                  <p style={{margin: "0 0 4px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                    {"Commitment fee"}
                  </p>
                  <p style={{margin: "0 0 6px", display: "flex", alignItems: "baseline", gap: "10px"}}>
                    <span style={{fontSize: "17.5px", color: "#736B8A", textDecoration: "line-through"}}>
                      {"₹799"}
                    </span>
                    <span style={{fontFamily: "'Marcellus', serif", fontSize: "46.5px", lineHeight: "1"}}>
                      {"₹99"}
                    </span>
                  </p>
                  <p style={{margin: "0 0 20px", fontSize: "13px", color: "#5C5470"}}>
                    {"Both live sessions, plus the surprise bonus."}
                  </p>
                  <div style={{display: "grid", gap: "12px", marginBottom: "20px"}}>
                    <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                      {"Your name"}
                      <input type={"text"} placeholder={"Full name"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                    </label>
                    <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                      {"WhatsApp number"}
                      <input type={"tel"} placeholder={"+91"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                    </label>
                  </div>
                  <PayButton as="a" order={{ productId: 'masterclass-99' }} href={"#"} style={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "54px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "14.5px", textDecoration: "none"}}>
                    {"Register now at ₹99"}
                  </PayButton>
                  <p style={{margin: "12px 0 0", textAlign: "center", fontSize: "12px", color: "#5C5470"}}>
                    {"We send the session details on WhatsApp."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px"}}>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "32px 64px", alignItems: "start"}}>
            <div className={"am-center-mobile"}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Have you ever..."}
              </p>
              <h2 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15"}}>
                {"Wished for something with all your heart, and watched it slip away?"}
              </h2>
              <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470"}}>
                {"If any of these sound familiar, it is not you. Most people are never taught how manifestation actually works. In two evenings, this masterclass shows you."}
              </p>
            </div>
            <div style={{display: "grid", gap: "10px"}}>
              <div style={{display: "flex", gap: "14px", alignItems: "flex-start", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "16px 18px"}}>
                <span aria-hidden={"true"} style={{flex: "none", fontFamily: "'Marcellus', serif", fontSize: "22.5px", lineHeight: "1", color: "#921A11"}}>
                  {"?"}
                </span>
                <span style={{fontSize: "14.5px", lineHeight: "1.5"}}>
                  {"Tried to manifest money, but kept overspending instead?"}
                </span>
              </div>
              <div style={{display: "flex", gap: "14px", alignItems: "flex-start", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "16px 18px"}}>
                <span aria-hidden={"true"} style={{flex: "none", fontFamily: "'Marcellus', serif", fontSize: "22.5px", lineHeight: "1", color: "#921A11"}}>
                  {"?"}
                </span>
                <span style={{fontSize: "14.5px", lineHeight: "1.5"}}>
                  {"Visualised the dream job, and still faced rejection?"}
                </span>
              </div>
              <div style={{display: "flex", gap: "14px", alignItems: "flex-start", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "16px 18px"}}>
                <span aria-hidden={"true"} style={{flex: "none", fontFamily: "'Marcellus', serif", fontSize: "22.5px", lineHeight: "1", color: "#921A11"}}>
                  {"?"}
                </span>
                <span style={{fontSize: "14.5px", lineHeight: "1.5"}}>
                  {"Wished for love, only to see a relationship fall apart?"}
                </span>
              </div>
              <div style={{display: "flex", gap: "14px", alignItems: "flex-start", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "16px 18px"}}>
                <span aria-hidden={"true"} style={{flex: "none", fontFamily: "'Marcellus', serif", fontSize: "22.5px", lineHeight: "1", color: "#921A11"}}>
                  {"?"}
                </span>
                <span style={{fontSize: "14.5px", lineHeight: "1.5"}}>
                  {"Planned the perfect trip, and watched it get postponed again?"}
                </span>
              </div>
              <div style={{display: "flex", gap: "14px", alignItems: "flex-start", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "16px 18px"}}>
                <span aria-hidden={"true"} style={{flex: "none", fontFamily: "'Marcellus', serif", fontSize: "22.5px", lineHeight: "1", color: "#921A11"}}>
                  {"?"}
                </span>
                <span style={{fontSize: "14.5px", lineHeight: "1.5"}}>
                  {"Practised gratitude every day, with little changing?"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{background: "#F4EDE1"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "32px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"What you will learn"}
              </p>
              <h2 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15"}}>
                {"Over two live evenings."}
              </h2>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gap: "16px"}}>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "999px", background: "#F3E8F7", color: "#6C1594", fontWeight: "700", marginBottom: "12px"}}>
                  {"1"}
                </span>
                <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "19px", lineHeight: "1.2"}}>
                  {"The right way to manifest"}
                </p>
                <p style={{margin: "0", fontSize: "13.5px", color: "#5C5470", lineHeight: "1.6"}}>
                  {"What actually works, and the small mistakes that quietly block results."}
                </p>
              </div>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "999px", background: "#F3E8F7", color: "#6C1594", fontWeight: "700", marginBottom: "12px"}}>
                  {"2"}
                </span>
                <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "19px", lineHeight: "1.2"}}>
                  {"Letting go"}
                </p>
                <p style={{margin: "0", fontSize: "13.5px", color: "#5C5470", lineHeight: "1.6"}}>
                  {"How to stop obsessing over the outcome, so it can arrive."}
                </p>
              </div>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "999px", background: "#F3E8F7", color: "#6C1594", fontWeight: "700", marginBottom: "12px"}}>
                  {"3"}
                </span>
                <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "19px", lineHeight: "1.2"}}>
                  {"Why manifestations fail"}
                </p>
                <p style={{margin: "0", fontSize: "13.5px", color: "#5C5470", lineHeight: "1.6"}}>
                  {"The most common reasons, and how to fix each one."}
                </p>
              </div>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "999px", background: "#F3E8F7", color: "#6C1594", fontWeight: "700", marginBottom: "12px"}}>
                  {"4"}
                </span>
                <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "19px", lineHeight: "1.2"}}>
                  {"The mind and the world"}
                </p>
                <p style={{margin: "0", fontSize: "13.5px", color: "#5C5470", lineHeight: "1.6"}}>
                  {"Experiments that explore how the mind affects things outside the body."}
                </p>
              </div>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "999px", background: "#F3E8F7", color: "#6C1594", fontWeight: "700", marginBottom: "12px"}}>
                  {"5"}
                </span>
                <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "19px", lineHeight: "1.2"}}>
                  {"The language of the Universe"}
                </p>
                <p style={{margin: "0", fontSize: "13.5px", color: "#5C5470", lineHeight: "1.6"}}>
                  {"How to ask clearly for what you want."}
                </p>
              </div>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "999px", background: "#F3E8F7", color: "#6C1594", fontWeight: "700", marginBottom: "12px"}}>
                  {"6"}
                </span>
                <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "19px", lineHeight: "1.2"}}>
                  {"Aligned goals"}
                </p>
                <p style={{margin: "0", fontSize: "13.5px", color: "#5C5470", lineHeight: "1.6"}}>
                  {"Setting goals that fit who you are and where you are headed."}
                </p>
              </div>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "999px", background: "#F3E8F7", color: "#6C1594", fontWeight: "700", marginBottom: "12px"}}>
                  {"7"}
                </span>
                <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "19px", lineHeight: "1.2"}}>
                  {"A daily habit"}
                </p>
                <p style={{margin: "0", fontSize: "13.5px", color: "#5C5470", lineHeight: "1.6"}}>
                  {"Building a simple routine of consistent manifestation."}
                </p>
              </div>
              <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(150deg, #921A11 0%, #6C1594 100%)", color: "#FFFFFF", borderRadius: "22px", padding: "22px 24px"}}>
                <div className={"am-stars"} aria-hidden={"true"} />
                <span style={{position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", marginBottom: "12px"}}>
                  <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M20 12v9H4v-9M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"} />
                  </svg>
                </span>
                <p style={{position: "relative", margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                  {"A surprise bonus"}
                </p>
                <p style={{position: "relative", margin: "0", fontSize: "13.5px", color: "#F4EAF9", lineHeight: "1.6"}}>
                  {"Revealed only to those who attend, live."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px 40px"}}>
          <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(120deg, #2E003E 0%, #6C1594 100%)", borderRadius: "28px", padding: "clamp(28px, 5vw, 56px)"}}>
            <div className={"am-stars"} aria-hidden={"true"} />
            <div style={{position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "32px 56px", alignItems: "center"}}>
              <div>
                <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
                  {"Who should attend"}
                </p>
                <h2 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15", color: "#FFFFFF"}}>
                  {"This masterclass is for you if..."}
                </h2>
                <PayButton as="a" order={{ productId: 'masterclass-99' }} href={"#"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "54px", padding: "0 30px", marginTop: "8px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
                  {"Register now at ₹99"}
                </PayButton>
              </div>
              <div style={{display: "grid", gap: "18px"}}>
                <div style={{display: "flex", gap: "14px", alignItems: "flex-start"}}>
                  <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                    <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.9"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9 9l6 6M15 9l-6 6"} />
                    </svg>
                  </span>
                  <p style={{margin: "10px 0 0", fontSize: "14.5px", lineHeight: "1.5", color: "#FFFFFF"}}>
                    {"You have tried manifesting, but it has not worked for you."}
                  </p>
                </div>
                <div style={{display: "flex", gap: "14px", alignItems: "flex-start"}}>
                  <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                    <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.9"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z"} />
                    </svg>
                  </span>
                  <p style={{margin: "10px 0 0", fontSize: "14.5px", lineHeight: "1.5", color: "#FFFFFF"}}>
                    {"You want more money, love, health or happiness."}
                  </p>
                </div>
                <div style={{display: "flex", gap: "14px", alignItems: "flex-start"}}>
                  <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                    <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.9"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M4 6h16M4 12h10M4 18h7"} />
                    </svg>
                  </span>
                  <p style={{margin: "10px 0 0", fontSize: "14.5px", lineHeight: "1.5", color: "#FFFFFF"}}>
                    {"You want a simple, practical way to manifest, without jargon."}
                  </p>
                </div>
                <div style={{display: "flex", gap: "14px", alignItems: "flex-start"}}>
                  <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                    <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.9"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 3h6M10 3v6L4 19a1 1 0 0 0 .9 1.5h14.2A1 1 0 0 0 20 19l-6-10V3"} />
                    </svg>
                  </span>
                  <p style={{margin: "10px 0 0", fontSize: "14.5px", lineHeight: "1.5", color: "#FFFFFF"}}>
                    {"You are curious how manifestation and science connect."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{maxWidth: "860px", margin: "0 auto", padding: "72px 24px 96px"}}>
          <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700", textAlign: "center"}}>
            {"Questions"}
          </p>
          <h2 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15", textAlign: "center", marginBottom: "28px"}}>
            {"About the masterclass"}
          </h2>
          <div style={{display: "grid", gap: "10px"}}>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"Is the masterclass live?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"Yes. It runs live online over two evenings, from 7 pm onwards. Each new batch is announced on this page and on WhatsApp."}
              </p>
            </details>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"Why is it only ₹99?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"The ₹99 is a commitment fee. It keeps the group small and focused on people who will actually attend both days."}
              </p>
            </details>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"Who teaches the masterclass?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"Maneswita, co-founder of Ahllya Mystic."}
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
                  {"Panchang"}
                </a>
                <a href={"/panchang"} style={{color: "#EADFF2", textDecoration: "none"}}>
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

export default MasterclassPage;
