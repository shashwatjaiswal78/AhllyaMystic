"use client";
/* eslint-disable */
// Generated from the design file About.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { HoroscopeMenu, HoroscopeMobileMenu, CalculatorsMenu, CalculatorsMobileMenu, ReportsMenu, ReportsMobileMenu, PanchangMenu, PanchangMobileMenu } from "./HoroscopeMenu";
import { sx, hole } from "./sx";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState, maskDate, maskTime, maskTimeHM, maskPart } from "./wire";

class AboutPage extends React.Component {
  constructor(props) { super(props); this.state = Object.assign({ menuOpen: false }, props && props.initialState); }
  renderVals() { return { menuOpen: !!this.state.menuOpen, menuExpanded: this.state.menuOpen ? 'true' : 'false', openMenu: () => this.setState({ menuOpen: true }), closeMenu: () => this.setState({ menuOpen: false }), }; }
}

AboutPage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="About" style={{ display: "contents" }}>
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
        <div style={{position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at 100% 0%, rgba(108,21,148,0.10), rgba(108,21,148,0) 50%), radial-gradient(ellipse at 0% 100%, rgba(146,26,17,0.06), rgba(146,26,17,0) 45%), #FBF7F0"}}>
          <img loading={"lazy"} decoding={"async"} className={"am-spin-rev"} src={"/images/c6d61635ad545b54bcdda486c37c816a.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", right: "-170px", top: "-140px", width: "460px", height: "460px", opacity: "0.35", pointerEvents: "none"}} />
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "22px 24px 96px", position: "relative"}}>
            <nav aria-label={"Breadcrumb"} style={{fontSize: "13px", color: "#5C5470", marginBottom: "40px"}}>
              <a href={"/"} style={{color: "#5C5470", textDecoration: "none"}}>
                {"Home"}
              </a>
              <span aria-hidden={"true"} style={{margin: "0 8px"}}>
                {"/"}
              </span>
              <span style={{color: "#1E1830", fontWeight: "600"}}>
                {"About us"}
              </span>
            </nav>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px"}}>
              <div className={"am-center-mobile"} style={{flex: "1.2 1 460px", minWidth: "0"}}>
                <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                  {"About Ahllya Mystic"}
                </p>
                <h1 style={{margin: "0 0 18px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(30px, 3.74vw, 46.5px)", lineHeight: "1.08"}}>
                  {"A mother and daughter,"}
                  <br />
                  {"reading the stars with care."}
                </h1>
                <p style={{margin: "0 0 28px", fontSize: "16px", color: "#5C5470", maxWidth: "560px"}}>
                  {"Modern guidance through ancient wisdom. We are Ahalya Sangeeta and Maneswita, and for six years we have helped people understand their charts, their names and their numbers, with honesty and heart."}
                </p>
                <div className={"am-hero-flex"} style={{display: "flex", flexWrap: "wrap", gap: "12px"}}>
                  <a href={"/consultation"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "54px", minWidth: "220px", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "14.5px", textDecoration: "none"}}>
                    {"Book a consultation"}
                  </a>
                  <a href={"/about"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "54px", minWidth: "min(200px, 100%)", padding: "0 28px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", fontSize: "14.5px", textDecoration: "none"}}>
                    {"Meet us"}
                  </a>
                </div>
              </div>
              <div style={{flex: "1 1 380px", minWidth: "0", position: "relative", padding: "18px", maxWidth: "480px", margin: "0 auto"}}>
                <div aria-hidden={"true"} style={{position: "absolute", inset: "0", border: "1px solid #921A11", opacity: "0.4", borderRadius: "260px 260px 28px 28px"}} />
                <img loading={"lazy"} decoding={"async"} src={"/images/26c9dadb7f4b6a08ec59999c3d9e9332.jpg"} alt={"Maneswita and Ahalya Sangeeta, founders of Ahllya Mystic"} style={{position: "relative", width: "100%", aspectRatio: "4 / 5", objectFit: "cover", objectPosition: "center 35%", borderRadius: "240px 240px 20px 20px", display: "block"}} />
              </div>
            </div>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "96px 24px 40px"}}>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "40px 64px", alignItems: "start"}}>
            <div className={"am-center-mobile"}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Our story"}
              </p>
              <h2 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15"}}>
                {"It began at home, with a shared love for the stars."}
              </h2>
            </div>
            <div style={{display: "grid", gap: "16px", fontSize: "15px", lineHeight: "1.75", color: "#3A3350"}}>
              <p style={{margin: "0"}}>
                {"Ahllya Mystic is a mother and daughter practice. We started it to share our passion for astrology, numerology and Vastu, and to make this knowledge accessible, relatable and truly useful in everyday life."}
              </p>
              <p style={{margin: "0"}}>
                {"For us, a chart is not a verdict. It is a map of the energies you were born with, and knowing it helps you move through life with more awareness. Our work is to read that map carefully, explain it simply, and suggest remedies that remove the blocks between you and peace, clarity and growth."}
              </p>
              <p style={{margin: "0"}}>
                {"We read every chart ourselves, and many of them together. That is slower than software, and we think it is worth it."}
              </p>
            </div>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "40px 24px 96px"}}>
          <figure style={{position: "relative", overflow: "hidden", margin: "0", background: "linear-gradient(120deg, #2E003E 0%, #6C1594 100%)", color: "#FFFFFF", borderRadius: "28px", padding: "clamp(36px, 6vw, 72px)", textAlign: "center"}}>
            <div className={"am-stars"} aria-hidden={"true"} />
            <p aria-hidden={"true"} style={{position: "relative", margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "59.5px", lineHeight: "0.6", color: "#FCCE07"}}>
              {"“"}
            </p>
            <blockquote style={{position: "relative", margin: "0 auto", maxWidth: "820px", fontFamily: "'Marcellus', serif", fontSize: "clamp(22.5px, 2.72vw, 33.5px)", lineHeight: "1.3"}}>
              {"If it’s good, then it can be made better. If it’s bad, then it can be made easier."}
            </blockquote>
            <figcaption style={{position: "relative", marginTop: "20px", fontSize: "13.5px", color: "#EADFF2"}}>
              {"The belief behind every reading we do"}
            </figcaption>
          </figure>
        </div>
        <div id={"founders"} style={{background: "#F4EDE1"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "96px 24px"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "36px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Meet the founders"}
              </p>
              <h2 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15"}}>
                {"The two people who will read your chart."}
              </h2>
              <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470", maxWidth: "680px"}}>
                {"We follow the path of Chanakya, Aryabhatta and Brahmagupta, who trusted the science of the stars. Astrology does not control your destiny. It reveals it, so you can walk it with awareness."}
              </p>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "20px"}}>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "28px"}}>
                <div style={{display: "flex", alignItems: "center", gap: "16px", marginBottom: "18px"}}>
                  <img src={"/images/4799fee4da0ba25da44abe8ca0aebfec.jpg"} alt={"Ahalya Sangeeta, founder of Ahllya Mystic"} loading={"lazy"} decoding={"async"} width={"84"} height={"84"} style={{flex: "none", width: "84px", height: "84px", borderRadius: "999px", objectFit: "cover", objectPosition: "center 25%", boxShadow: "0 0 0 3px #FCCE07"}} />
                  <div>
                    <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "24px", lineHeight: "1.15"}}>
                      {"Ahalya Sangeeta"}
                    </p>
                    <p style={{margin: "2px 0 0", fontSize: "13px", color: "#921A11", fontWeight: "600"}}>
                      {"Founder"}
                    </p>
                  </div>
                </div>
                <div style={{display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px"}}>
                  <span style={{fontSize: "12px", fontWeight: "600", color: "#3D0752", background: "#F3E8F7", padding: "5px 12px", borderRadius: "999px"}}>
                    {"Vedic astrology"}
                  </span>
                  <span style={{fontSize: "12px", fontWeight: "600", color: "#3D0752", background: "#F3E8F7", padding: "5px 12px", borderRadius: "999px"}}>
                    {"KP astrology"}
                  </span>
                  <span style={{fontSize: "12px", fontWeight: "600", color: "#3D0752", background: "#F3E8F7", padding: "5px 12px", borderRadius: "999px"}}>
                    {"Numerology"}
                  </span>
                  <span style={{fontSize: "12px", fontWeight: "600", color: "#3D0752", background: "#F3E8F7", padding: "5px 12px", borderRadius: "999px"}}>
                    {"Vastu"}
                  </span>
                </div>
                <p style={{margin: "0", fontSize: "14.5px", lineHeight: "1.7", color: "#3A3350"}}>
                  {"Ahalya Sangeeta reads Kundlis, names, numbers and homes, across Vedic and KP astrology, numerology and Vastu. She has six years of practice, and prepares every report and consultation herself or together with Maneswita."}
                </p>
              </div>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "28px"}}>
                <div style={{display: "flex", alignItems: "center", gap: "16px", marginBottom: "18px"}}>
                  <img src={"/images/cd60cc55788c423c9c66a30e5201d374.jpg"} alt={"Maneswita, co-founder of Ahllya Mystic"} loading={"lazy"} decoding={"async"} width={"84"} height={"84"} style={{flex: "none", width: "84px", height: "84px", borderRadius: "999px", objectFit: "cover", objectPosition: "center 25%", boxShadow: "0 0 0 3px #FCCE07"}} />
                  <div>
                    <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "24px", lineHeight: "1.15"}}>
                      {"Maneswita"}
                    </p>
                    <p style={{margin: "2px 0 0", fontSize: "13px", color: "#921A11", fontWeight: "600"}}>
                      {"Co-founder"}
                    </p>
                  </div>
                </div>
                <div style={{display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px"}}>
                  <span style={{fontSize: "12px", fontWeight: "600", color: "#3D0752", background: "#F3E8F7", padding: "5px 12px", borderRadius: "999px"}}>
                    {"Vedic astrology"}
                  </span>
                  <span style={{fontSize: "12px", fontWeight: "600", color: "#3D0752", background: "#F3E8F7", padding: "5px 12px", borderRadius: "999px"}}>
                    {"KP astrology"}
                  </span>
                  <span style={{fontSize: "12px", fontWeight: "600", color: "#3D0752", background: "#F3E8F7", padding: "5px 12px", borderRadius: "999px"}}>
                    {"Numerology"}
                  </span>
                </div>
                <p style={{margin: "0", fontSize: "14.5px", lineHeight: "1.7", color: "#3A3350"}}>
                  {"Maneswita works alongside her mother across Vedic and KP astrology and numerology, with five years of practice. Many readings are prepared by the two of them together."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(90deg, #2E003E 0%, #4A0A66 100%)"}}>
          <div className={"am-stars"} aria-hidden={"true"} />
          <div style={{position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "56px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "20px"}}>
            <div style={{textAlign: "center", padding: "8px 12px"}}>
              <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "clamp(28.5px, 3.4vw, 38.5px)", lineHeight: "1", color: "#FFFFFF"}}>
                {"6 years"}
              </p>
              <p style={{margin: "8px 0 0", fontSize: "13px", color: "#EADFF2"}}>
                {"of practice"}
              </p>
            </div>
            <div style={{textAlign: "center", padding: "8px 12px"}}>
              <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "clamp(28.5px, 3.4vw, 38.5px)", lineHeight: "1", color: "#FFFFFF"}}>
                {"4"}
              </p>
              <p style={{margin: "8px 0 0", fontSize: "13px", color: "#EADFF2"}}>
                {"disciplines: Vedic, KP, numerology, Vastu"}
              </p>
            </div>
            <div style={{textAlign: "center", padding: "8px 12px"}}>
              <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "clamp(28.5px, 3.4vw, 38.5px)", lineHeight: "1", color: "#FFFFFF"}}>
                {"2"}
              </p>
              <p style={{margin: "8px 0 0", fontSize: "13px", color: "#EADFF2"}}>
                {"languages: Hindi and English"}
              </p>
            </div>
            <div style={{textAlign: "center", padding: "8px 12px"}}>
              <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "clamp(28.5px, 3.4vw, 38.5px)", lineHeight: "1", color: "#FFFFFF"}}>
                {"7 days"}
              </p>
              <p style={{margin: "8px 0 0", fontSize: "13px", color: "#EADFF2"}}>
                {"a week, 11 am to 7 pm"}
              </p>
            </div>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "96px 24px"}}>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "40px 64px", alignItems: "start"}}>
            <div className={"am-center-mobile"}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"How we work"}
              </p>
              <h2 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15"}}>
                {"Guidance that is personal, honest and easy to follow."}
              </h2>
              <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470"}}>
                {"We treat astrology, numerology and name vibrations as tools for self-awareness and spiritual alignment, not just prediction. Every person’s mindset, energy and goals are different, so every reading is too."}
              </p>
            </div>
            <div style={{display: "grid", gap: "28px"}}>
              <div style={{display: "flex", gap: "16px", alignItems: "flex-start"}}>
                <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "46px", height: "46px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                  <svg aria-hidden={"true"} width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.9"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0"} />
                  </svg>
                </span>
                <div>
                  <p style={{margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                    {"Read by us, not by software"}
                  </p>
                  <p style={{margin: "0", fontSize: "13.5px", lineHeight: "1.65", color: "#5C5470"}}>
                    {"Every report and consultation is prepared by Ahalya Sangeeta and Maneswita after studying your chart. Only our free tools are calculated automatically."}
                  </p>
                </div>
              </div>
              <div style={{display: "flex", gap: "16px", alignItems: "flex-start"}}>
                <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "46px", height: "46px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                  <svg aria-hidden={"true"} width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.9"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"} />
                  </svg>
                </span>
                <div>
                  <p style={{margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                    {"Honest, never fear-based"}
                  </p>
                  <p style={{margin: "0", fontSize: "13.5px", lineHeight: "1.65", color: "#5C5470"}}>
                    {"We tell you what your chart shows, gently and clearly. No scare stories, and no pressure to buy expensive rituals."}
                  </p>
                </div>
              </div>
              <div style={{display: "flex", gap: "16px", alignItems: "flex-start"}}>
                <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "46px", height: "46px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                  <svg aria-hidden={"true"} width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.9"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6"} />
                  </svg>
                </span>
                <div>
                  <p style={{margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                    {"Remedies you can actually do"}
                  </p>
                  <p style={{margin: "0", fontSize: "13.5px", lineHeight: "1.65", color: "#5C5470"}}>
                    {"Mantras, small daily habits, the right spelling or number. Practical steps that fit into ordinary life."}
                  </p>
                </div>
              </div>
              <div style={{display: "flex", gap: "16px", alignItems: "flex-start"}}>
                <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "46px", height: "46px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                  <svg aria-hidden={"true"} width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.9"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M4 20l1.3-3.9A8 8 0 1 1 8 19z"} />
                  </svg>
                </span>
                <div>
                  <p style={{margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                    {"Support that continues"}
                  </p>
                  <p style={{margin: "0", fontSize: "13.5px", lineHeight: "1.65", color: "#5C5470"}}>
                    {"Questions after your report? Message us on WhatsApp. We see our work as ongoing guidance, not one-off predictions."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 24px 96px"}}>
          <div className={"am-center-mobile"} style={{marginBottom: "28px"}}>
            <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
              {"What we offer"}
            </p>
            <h2 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15"}}>
              {"Where we can help."}
            </h2>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "16px"}}>
            <a href={"/report/kundli"} className={"am-lift"} style={{display: "flex", flexDirection: "column", gap: "6px", textDecoration: "none", color: "#1E1830", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px"}}>
              <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                {"Kundli readings"}
              </span>
              <span style={{fontSize: "13.5px", color: "#5C5470", flex: "1"}}>
                {"Your complete birth chart, Varshphal for the year ahead, and Lal Kitab remedies."}
              </span>
              <span style={{marginTop: "8px", fontSize: "13px", fontWeight: "700", color: "#6C1594"}}>
                {"View reports →"}
              </span>
            </a>
            <a href={"/report/name-numerology"} className={"am-lift"} style={{display: "flex", flexDirection: "column", gap: "6px", textDecoration: "none", color: "#1E1830", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px"}}>
              <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                {"Numerology"}
              </span>
              <span style={{fontSize: "13.5px", color: "#5C5470", flex: "1"}}>
                {"Name correction, baby names, business names and lucky mobile numbers."}
              </span>
              <span style={{marginTop: "8px", fontSize: "13px", fontWeight: "700", color: "#6C1594"}}>
                {"Explore numerology →"}
              </span>
            </a>
            <a href={"/report/milan"} className={"am-lift"} style={{display: "flex", flexDirection: "column", gap: "6px", textDecoration: "none", color: "#1E1830", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px"}}>
              <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                {"Kundli Milan"}
              </span>
              <span style={{fontSize: "13.5px", color: "#5C5470", flex: "1"}}>
                {"Both charts read in full before marriage, with doshas and remedies."}
              </span>
              <span style={{marginTop: "8px", fontSize: "13px", fontWeight: "700", color: "#6C1594"}}>
                {"Check compatibility →"}
              </span>
            </a>
            <a href={"/consultation"} className={"am-lift"} style={{display: "flex", flexDirection: "column", gap: "6px", textDecoration: "none", color: "#1E1830", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px"}}>
              <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                {"Consultations"}
              </span>
              <span style={{fontSize: "13.5px", color: "#5C5470", flex: "1"}}>
                {"Talk to us directly on an audio or video call, in Hindi or English."}
              </span>
              <span style={{marginTop: "8px", fontSize: "13px", fontWeight: "700", color: "#6C1594"}}>
                {"Book a call →"}
              </span>
            </a>
            <a href={"/courses"} className={"am-lift"} style={{display: "flex", flexDirection: "column", gap: "6px", textDecoration: "none", color: "#1E1830", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px"}}>
              <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                {"Courses"}
              </span>
              <span style={{fontSize: "13.5px", color: "#5C5470", flex: "1"}}>
                {"Learn astrology, numerology and manifestation from us."}
              </span>
              <span style={{marginTop: "8px", fontSize: "13px", fontWeight: "700", color: "#6C1594"}}>
                {"See courses →"}
              </span>
            </a>
            <a href={"/#free"} className={"am-lift"} style={{display: "flex", flexDirection: "column", gap: "6px", textDecoration: "none", color: "#1E1830", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px"}}>
              <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                {"Free tools"}
              </span>
              <span style={{fontSize: "13.5px", color: "#5C5470", flex: "1"}}>
                {"Your free Kundli, Moon sign and daily horoscope."}
              </span>
              <span style={{marginTop: "8px", fontSize: "13px", fontWeight: "700", color: "#6C1594"}}>
                {"Try them free →"}
              </span>
            </a>
          </div>
        </div>
        <div id={"stories"} style={{position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at 85% 10%, rgba(108,21,148,0.06), rgba(108,21,148,0) 50%), #FFFDF9", borderTop: "1px solid #E8DFD0"}}>
          <img loading={"lazy"} decoding={"async"} className={"am-spin"} src={"/images/139dc9f8771bafe47e83ebdfd8f024a6.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", left: "-140px", bottom: "-160px", width: "440px", height: "440px", opacity: "0.12", pointerEvents: "none"}} />
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px 96px", position: "relative"}}>
            <div style={{textAlign: "center", margin: "0 auto 44px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Client stories"}
              </p>
              <h2 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 3.06vw, 37px)", lineHeight: "1.15"}}>
                <span className={"am-nowrap"}>
                  {"Words from those we have guided."}
                </span>
              </h2>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "24px"}}>
              <figure className={"am-lift"} style={{margin: "0", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "24px", display: "flex", flexDirection: "column", gap: "16px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <figcaption style={{display: "flex", alignItems: "center", gap: "12px"}}>
                  <span style={{flex: "1", minWidth: "0"}}>
                    <span style={{display: "block", fontWeight: "700"}}>
                      {"Arushi B."}
                    </span>
                    <span style={{display: "block", fontSize: "12px", color: "#5C5470"}}>
                      {"Delhi"}
                    </span>
                  </span>
                  <span style={{flex: "none", fontSize: "12px", fontWeight: "700", color: "#921A11", background: "#FCCE07", padding: "4px 10px", borderRadius: "999px"}}>
                    {"Mobile Number Report"}
                  </span>
                </figcaption>
                <blockquote style={{margin: "0", position: "relative", background: "#F3E8F7", borderRadius: "4px 16px 16px 16px", padding: "14px 16px 28px", fontSize: "13.5px", lineHeight: "1.6", color: "#1E1830"}}>
                  {"I never thought my phone number could matter, but the report explained everything so simply. I switched to one of the suggested numbers and it just feels right. Thank you!"}
                  <span style={{position: "absolute", right: "12px", bottom: "7px", display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: "#6C1594"}}>
                    <svg aria-hidden={"true"} width={"16"} height={"10"} viewBox={"0 0 16 10"} fill={"none"} stroke={"#6C1594"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M1 5.5l3 3L10 1.5M6.5 8.5L14 1.5"} />
                    </svg>
                  </span>
                </blockquote>
              </figure>
              <figure className={"am-lift"} style={{margin: "0", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "24px", display: "flex", flexDirection: "column", gap: "16px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <figcaption style={{display: "flex", alignItems: "center", gap: "12px"}}>
                  <span style={{flex: "1", minWidth: "0"}}>
                    <span style={{display: "block", fontWeight: "700"}}>
                      {"Tikesh Negi"}
                    </span>
                    <span style={{display: "block", fontSize: "12px", color: "#5C5470"}}>
                      {"Haldwani"}
                    </span>
                  </span>
                  <span style={{flex: "none", fontSize: "12px", fontWeight: "700", color: "#921A11", background: "#FCCE07", padding: "4px 10px", borderRadius: "999px"}}>
                    {"Name and Mobile Reports"}
                  </span>
                </figcaption>
                <blockquote style={{margin: "0", position: "relative", background: "#F3E8F7", borderRadius: "4px 16px 16px 16px", padding: "14px 16px 28px", fontSize: "13.5px", lineHeight: "1.6", color: "#1E1830"}}>
                  {"Got both my name and mobile number reports done. They explained clearly why my current spelling wasn’t supporting me and suggested a small, easy change. Very detailed, and patient with all my questions."}
                  <span style={{position: "absolute", right: "12px", bottom: "7px", display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: "#6C1594"}}>
                    <svg aria-hidden={"true"} width={"16"} height={"10"} viewBox={"0 0 16 10"} fill={"none"} stroke={"#6C1594"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M1 5.5l3 3L10 1.5M6.5 8.5L14 1.5"} />
                    </svg>
                  </span>
                </blockquote>
              </figure>
              <figure className={"am-lift"} style={{margin: "0", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "24px", display: "flex", flexDirection: "column", gap: "16px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <figcaption style={{display: "flex", alignItems: "center", gap: "12px"}}>
                  <span style={{flex: "1", minWidth: "0"}}>
                    <span style={{display: "block", fontWeight: "700"}}>
                      {"Gaurav Jha"}
                    </span>
                    <span style={{display: "block", fontSize: "12px", color: "#5C5470"}}>
                      {"Lucknow"}
                    </span>
                  </span>
                  <span style={{flex: "none", fontSize: "12px", fontWeight: "700", color: "#921A11", background: "#FCCE07", padding: "4px 10px", borderRadius: "999px"}}>
                    {"Personalised Kundli"}
                  </span>
                </figcaption>
                <blockquote style={{margin: "0", position: "relative", background: "#F3E8F7", borderRadius: "4px 16px 16px 16px", padding: "14px 16px 28px", fontSize: "13.5px", lineHeight: "1.6", color: "#1E1830"}}>
                  {"The Kundli report was far more detailed than I expected, and you can tell someone actually studied my chart. The remedies are practical and easy to follow. Highly recommend."}
                  <span style={{position: "absolute", right: "12px", bottom: "7px", display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: "#6C1594"}}>
                    <svg aria-hidden={"true"} width={"16"} height={"10"} viewBox={"0 0 16 10"} fill={"none"} stroke={"#6C1594"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M1 5.5l3 3L10 1.5M6.5 8.5L14 1.5"} />
                    </svg>
                  </span>
                </blockquote>
              </figure>
            </div>
            <p style={{margin: "36px 0 0", textAlign: "center", fontSize: "13.5px", color: "#5C5470"}}>
              {"Have we guided you? "}
              <a href={"https://wa.me/919129237566"} style={{fontWeight: "700"}}>
                {"Share your experience on WhatsApp →"}
              </a>
            </p>
          </div>
        </div>
        <div style={{maxWidth: "860px", margin: "0 auto", padding: "88px 24px 96px"}}>
          <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700", textAlign: "center"}}>
            {"Questions"}
          </p>
          <h2 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15", textAlign: "center", marginBottom: "28px"}}>
            {"Getting to know us"}
          </h2>
          <div style={{display: "grid", gap: "10px"}}>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"Who will read my chart?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"Ahalya Sangeeta and Maneswita, personally. Every paid report and consultation is prepared by one or both of us after studying your chart."}
              </p>
            </details>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"What do you offer?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"Kundli reports, Lal Kitab, Varshphal, Kundli Milan, name and mobile numerology, consultations and courses, in Hindi or English."}
              </p>
            </details>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"Is astrology a superstition?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"We see astrology and numerology as ancient systems built on careful observation and calculation. We use them for self-awareness and guidance, to help you make choices with more clarity."}
              </p>
            </details>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"Can anyone benefit?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"Anyone looking for clarity about a decision, a phase of life or a pattern that keeps repeating. You do not need to believe in anything to start. Just come with an open mind."}
              </p>
            </details>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"How do I get started?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"Try our free Kundli first, or message us on WhatsApp and tell us what is on your mind. We will point you to the right reading."}
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

export default AboutPage;
