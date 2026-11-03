"use client";
/* eslint-disable */
// Generated from the design file Kundli.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { sx, hole } from "./sx";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState } from "./wire";

class KundliPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({ menuOpen: false, picks: [] }, props && props.initialState);
  }
  renderVals() {
    var groups = [{"title": "Love, marriage and family", "icon": "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z", "items": ["When will I get married?", "Will I have a love or an arranged marriage?", "What will my married life be like?", "Will I have children?"]}, {"title": "Career", "icon": "M4 8h16v11H4zM9 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M4 13h16", "items": ["When will I get a stable job or a promotion?", "Is a job or a business better for me?", "When can I change my job?"]}, {"title": "Money and property", "icon": "M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z", "items": ["When will my finances improve?", "Will I own a house?"]}, {"title": "Health", "icon": "M3 12h4l2-5 4 10 2-5h6", "items": ["Which health areas should I take care of?"]}, {"title": "Education and travel", "icon": "M3 9l9-4 9 4-9 4-9-4zM7 11v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4", "items": ["Should I pursue further studies?", "Will I settle or work abroad?"]}, {"title": "Doshas and remedies", "icon": "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18", "items": ["How serious is my Manglik dosha, and how do I reduce it?", "Does Kaal Sarp dosha affect me, and what should I do?", "Which gemstone suits me, if any?"]}];
    var picks = this.state.picks || [];
    var toggle = (t) => {
      var cur = (this.state.picks || []).slice();
      var at = cur.indexOf(t);
      if (at >= 0) cur.splice(at, 1); else cur.push(t);
      this.setState({ picks: cur });
    };
    var qGroups = groups.map((g) => ({
      title: g.title, icon: g.icon,
      items: g.items.map((t) => ({ text: t, sel: picks.indexOf(t) >= 0, notSel: picks.indexOf(t) < 0, toggle: () => toggle(t) }))
    }));
    var n = picks.length, extra = Math.max(0, n - 2), total = 999 + extra * 159;
    var rs = (x) => '₹' + x.toLocaleString('en-IN');
    var hint = n === 0 ? 'Pick up to two questions at no extra cost.' : n === 1 ? 'You can add one more question at no extra cost.' : n === 2 ? 'Both included questions chosen. Extra questions are ₹159 each.' : extra + ' extra ' + (extra === 1 ? 'question' : 'questions') + ' added.';
    var menuOpen = !!this.state.menuOpen;
    return {
      qGroups: qGroups, qCount: n, extraCount: extra, extraPrice: rs(extra * 159), total: rs(total), hint: hint,
      barTitle: n === 0 ? 'Personalised Kundli Report' : n + (n === 1 ? ' question' : ' questions') + ' selected',
      menuOpen: menuOpen, menuExpanded: menuOpen ? 'true' : 'false',
      openMenu: () => this.setState({ menuOpen: true }), closeMenu: () => this.setState({ menuOpen: false })
    };
  }
}

KundliPage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="Kundli" style={{ display: "contents" }}>
      <div style={{fontFamily: "'Manrope', system-ui, sans-serif", color: "#1E1830", background: "#FBF7F0", fontSize: "16px", lineHeight: "1.6"}}>
        <div style={{background: "#FFFFFF", color: "#921A11", fontSize: "14px", fontWeight: "600", textAlign: "center", padding: "10px 16px", borderBottom: "1px solid #EADFD3"}}>
          <a href={"/masterclass"} style={{color: "#921A11", textDecoration: "none"}}>
            {"Live 2-day Manifestation Masterclass. Dates announced soon. Register for ₹99 →"}
          </a>
        </div>
        <header style={{position: "sticky", top: "0", zIndex: "50", background: "rgba(46,0,62,0.94)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,255,255,0.08)"}}>
          <nav aria-label={"Main"} style={{maxWidth: "1200px", margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px"}}>
            <a href={"/"} aria-label={"Ahllya Mystic home"} style={{display: "block", flex: "none"}}>
              <img className={"am-navlogo"} src={"/images/f0424906cf2ed307d839fd952ac77981.png"} alt={"Ahllya Mystic"} style={{height: "48px", width: "auto", display: "block"}} />
            </a>
            <div className={"am-navlinks"} style={{alignItems: "center", gap: "30px", fontSize: "15px", fontWeight: "500"}}>
              <a href={"/consult"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Consultations"}
              </a>
              <a href={"/kundli"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Free Kundli"}
              </a>
              <a href={"/#free"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Free Calculators"}
              </a>
              <a href={"/#reports"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Reports"}
              </a>
              <a href={"/courses"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Courses"}
              </a>
              <a href={"/horoscope"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Horoscope"}
              </a>
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
              <a href={"/consult"} className={"am-navcta"} style={{alignItems: "center", minHeight: "44px", padding: "0 22px", borderRadius: "999px", border: "2px solid #FCCE07", color: "#FFFFFF", fontWeight: "700", fontSize: "15px", textDecoration: "none"}}>
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
                  <a href={"/consult"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Consultations"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/kundli"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Free Kundli"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/#free"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Free Calculators"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/#reports"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Reports"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/courses"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Courses"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/horoscope"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Horoscope"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/#blog"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Blogs"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/about"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
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
                  <p style={{margin: "auto 0 0", paddingTop: "32px", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "17px", color: "#EADFF2", textAlign: "center"}}>
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
          <img className={"am-spin"} src={"/images/9f12ecbbc1351b2a79d2c5c2543824a3.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", right: "-180px", top: "-120px", width: "620px", height: "620px", opacity: "0.12", pointerEvents: "none"}} />
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "28px 24px 72px", position: "relative"}}>
            <nav aria-label={"Breadcrumb"} style={{fontSize: "14px", color: "#EADFF2", marginBottom: "36px"}}>
              <a href={"/"} style={{color: "#EADFF2", textDecoration: "none"}}>
                {"Home"}
              </a>
              <span aria-hidden={"true"} style={{margin: "0 8px"}}>
                {"/"}
              </span>
              <span style={{color: "#FFFFFF", fontWeight: "600"}}>
                {"Free Kundli"}
              </span>
            </nav>
            <div className={"am-center-mobile"}>
              <p style={{margin: "0 0 12px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
                {"Your free Kundli"}
              </p>
              <h1 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(34px, 4.4vw, 56px)", lineHeight: "1.1"}}>
                {"Riya, here is your Kundli."}
              </h1>
              <p style={{margin: "0 0 32px", fontSize: "17px", color: "#EADFF2"}}>
                {"Wednesday, 14 February 1996 · 9:30 am · Lucknow, Uttar Pradesh "}
                <a href={"/#free"} style={{marginLeft: "10px", color: "#FFFFFF", fontWeight: "700"}}>
                  {"Edit details"}
                </a>
              </p>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "16px", marginBottom: "28px"}}>
              <div style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "18px", padding: "18px 20px"}}>
                <p style={{margin: "0", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#EADFF2", fontWeight: "700"}}>
                  {"Lagna (ascendant)"}
                </p>
                <p style={{margin: "6px 0 0", display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "30px", lineHeight: "1.1"}}>
                    {"Pisces"}
                  </span>
                  <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "20px", color: "#FCCE07"}}>
                    {"मीन"}
                  </span>
                </p>
                <p style={{margin: "6px 0 0", fontSize: "14px", color: "#EADFF2"}}>
                  {"Meena lagna, ruled by Jupiter"}
                </p>
              </div>
              <div style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "18px", padding: "18px 20px"}}>
                <p style={{margin: "0", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#EADFF2", fontWeight: "700"}}>
                  {"Moon sign (rashi)"}
                </p>
                <p style={{margin: "6px 0 0", display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "30px", lineHeight: "1.1"}}>
                    {"Scorpio"}
                  </span>
                  <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "20px", color: "#FCCE07"}}>
                    {"वृश्चिक"}
                  </span>
                </p>
                <p style={{margin: "6px 0 0", fontSize: "14px", color: "#EADFF2"}}>
                  {"Vrischika rashi, ruled by Mars"}
                </p>
              </div>
              <div style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "18px", padding: "18px 20px"}}>
                <p style={{margin: "0", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#EADFF2", fontWeight: "700"}}>
                  {"Nakshatra"}
                </p>
                <p style={{margin: "6px 0 0", display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "30px", lineHeight: "1.1"}}>
                    {"Jyeshtha"}
                  </span>
                  <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "20px", color: "#FCCE07"}}>
                    {"ज्येष्ठा"}
                  </span>
                </p>
                <p style={{margin: "6px 0 0", fontSize: "14px", color: "#EADFF2"}}>
                  {"Pada 3, ruled by Mercury"}
                </p>
              </div>
            </div>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "18px 28px", background: "#FFFFFF", color: "#1E1830", borderRadius: "20px", padding: "20px 24px"}}>
              <div style={{display: "flex", alignItems: "center", gap: "16px", flex: "1 1 380px", minWidth: "0"}}>
                <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "52px", height: "52px", borderRadius: "14px", background: "#FCCE07", color: "#921A11"}}>
                  <svg aria-hidden={"true"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.9"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"} />
                    <path d={"M14 3v5h5M12 12v6M9 15l3 3 3-3"} />
                  </svg>
                </span>
                <div>
                  <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "21px"}}>
                    {"Your free Kundli PDF"}
                  </p>
                  <p style={{margin: "2px 0 0", fontSize: "14px", color: "#5C5470"}}>
                    {"Charts, planet positions, dasha periods and dosha checks in one file. Calculated instantly by software."}
                  </p>
                </div>
              </div>
              <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
                <a href={"#"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "50px", padding: "0 24px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
                  {"Download free PDF"}
                </a>
                <a href={"https://wa.me/919129237566"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "50px", padding: "0 22px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", textDecoration: "none"}}>
                  <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M4 20l1.3-3.9A8 8 0 1 1 8 19z"} />
                  </svg>
                  {"Send to WhatsApp"}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={"am-subnav"} style={{position: "sticky", top: "72px", zIndex: "40", background: "rgba(251,247,240,0.96)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", borderBottom: "1px solid #E8DFD0"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", gap: "28px", overflowX: "auto", whiteSpace: "nowrap"}}>
            <a href={"#profile"} style={{display: "inline-flex", alignItems: "center", minHeight: "54px", fontSize: "15px", fontWeight: "600", color: "#1E1830", textDecoration: "none"}}>
              {"Birth profile"}
            </a>
            <a href={"#charts"} style={{display: "inline-flex", alignItems: "center", minHeight: "54px", fontSize: "15px", fontWeight: "600", color: "#1E1830", textDecoration: "none"}}>
              {"Charts"}
            </a>
            <a href={"#planets"} style={{display: "inline-flex", alignItems: "center", minHeight: "54px", fontSize: "15px", fontWeight: "600", color: "#1E1830", textDecoration: "none"}}>
              {"Planets"}
            </a>
            <a href={"#doshas"} style={{display: "inline-flex", alignItems: "center", minHeight: "54px", fontSize: "15px", fontWeight: "600", color: "#1E1830", textDecoration: "none"}}>
              {"Doshas"}
            </a>
            <a href={"#dasha"} style={{display: "inline-flex", alignItems: "center", minHeight: "54px", fontSize: "15px", fontWeight: "600", color: "#1E1830", textDecoration: "none"}}>
              {"Dasha"}
            </a>
            <a href={"#nature"} style={{display: "inline-flex", alignItems: "center", minHeight: "54px", fontSize: "15px", fontWeight: "600", color: "#1E1830", textDecoration: "none"}}>
              {"Your nature"}
            </a>
            <a href={"#ask"} style={{display: "inline-flex", alignItems: "center", minHeight: "54px", fontSize: "15px", fontWeight: "600", color: "#921A11", textDecoration: "none"}}>
              {"Ask our experts"}
            </a>
          </div>
        </div>
        <div>
          <div id={"profile"} style={{maxWidth: "1200px", margin: "0 auto", padding: "72px 24px 24px"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "32px"}}>
              <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Birth profile"}
              </p>
              <h2 style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: "1.15"}}>
                {"The basics of your chart."}
              </h2>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "20px"}}>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "24px 26px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                  {"Birth details"}
                </p>
                <p style={{margin: "0 0 8px", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "15px", color: "#921A11"}}>
                  {"जन्म विवरण"}
                </p>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Name"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"Riya Sharma"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Gender"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"Female"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Date of birth"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"14 February 1996"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Day"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"Wednesday"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Time of birth"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"9:30:00 am"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Place"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"Lucknow, Uttar Pradesh"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Latitude, longitude"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"26°51′ N, 80°57′ E"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Time zone"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"IST, UTC+05:30"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Ayanamsa"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"Lahiri 23°48′18″"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Sunrise and sunset"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"06:44 and 17:57"}
                  </span>
                </div>
              </div>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "24px 26px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                  {"Panchang and Avkahada"}
                </p>
                <p style={{margin: "0 0 8px", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "15px", color: "#921A11"}}>
                  {"पंचांग और अवकहड़ा चक्र"}
                </p>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Tithi"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"Krishna Dashami"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Vara"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"Budhavara"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Nakshatra"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"Jyeshtha, pada 3"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Yoga"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"Harshana"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Karana"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"Vanija"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Varna"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"Brahmin"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Vashya"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"Keeta"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Yoni"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"Mriga (deer)"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Gana"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"Rakshasa"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "15px"}}>
                  <span style={{color: "#5C5470"}}>
                    {"Nadi"}
                  </span>
                  <span style={{fontWeight: "700", textAlign: "right"}}>
                    {"Adi"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id={"charts"} style={{maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 24px"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "32px"}}>
              <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Your charts"}
              </p>
              <h2 style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: "1.15"}}>
                {"Lagna and Navamsa charts."}
              </h2>
              <p style={{margin: "0 auto", fontSize: "16px", color: "#5C5470", maxWidth: "720px", marginLeft: "0"}}>
                {"North Indian style. The top centre box is your first house, and houses run anticlockwise. Red numbers are signs, from 1 for Aries to 12 for Pisces."}
              </p>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "24px"}}>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "22px"}}>
                <p style={{margin: "0 0 14px", display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Lagna chart (D1)"}
                  </span>
                  <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", color: "#921A11"}}>
                    {"लग्न कुंडली"}
                  </span>
                </p>
                <svg viewBox={"0 0 360 360"} role={"img"} aria-label={"Lagna chart"} style={{display: "block", width: "100%", height: "auto", background: "#FFFFFF", borderRadius: "12px"}}>
                  <rect x={"1"} y={"1"} width={"358"} height={"358"} rx={"10"} fill={"#FFFFFF"} stroke={"#6C1594"} strokeWidth={"2"} />
                  <path d={"M4 4L356 356M356 4L4 356"} stroke={"#D6C3E2"} strokeWidth={"1.2"} />
                  <path d={"M180.0 3L357 180.0L180.0 357L3 180.0Z"} fill={"none"} stroke={"#D6C3E2"} strokeWidth={"1.2"} />
                  <text x={"180.0"} y={"52.6"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"12"}
                  </text>
                  <text x={"180.0"} y={"96.0"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#921A11"}>
                    {"Asc"}
                    <tspan fontSize={"9"} fill={"#8A7F98"} dy={"-5"}>
                      {"26°"}
                    </tspan>
                  </text>
                  <text x={"180.0"} y={"113.0"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Ve"}
                    <tspan fontSize={"9"} fill={"#8A7F98"} dy={"-5"}>
                      {"12°"}
                    </tspan>
                  </text>
                  <text x={"180.0"} y={"130.0"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Ke"}
                    <tspan fontSize={"9"} fill={"#8A7F98"} dy={"-5"}>
                      {"26°"}
                    </tspan>
                  </text>
                  <text x={"55.8"} y={"27.4"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"1"}
                  </text>
                  <text x={"23.4"} y={"59.8"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"2"}
                  </text>
                  <text x={"48.6"} y={"184.0"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"3"}
                  </text>
                  <text x={"23.4"} y={"308.2"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"4"}
                  </text>
                  <text x={"55.8"} y={"340.6"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"5"}
                  </text>
                  <text x={"180.0"} y={"315.4"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"6"}
                  </text>
                  <text x={"180.0"} y={"257.0"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Ra"}
                    <tspan fontSize={"9"} fill={"#8A7F98"} dy={"-5"}>
                      {"26°"}
                    </tspan>
                  </text>
                  <text x={"304.2"} y={"340.6"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"7"}
                  </text>
                  <text x={"336.6"} y={"308.2"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"8"}
                  </text>
                  <text x={"313.2"} y={"267.8"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Mo"}
                    <tspan fontSize={"9"} fill={"#8A7F98"} dy={"-5"}>
                      {"24°"}
                    </tspan>
                  </text>
                  <text x={"311.4"} y={"184.0"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"9"}
                  </text>
                  <text x={"252.0"} y={"185.0"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Ju"}
                    <tspan fontSize={"9"} fill={"#8A7F98"} dy={"-5"}>
                      {"15°"}
                    </tspan>
                  </text>
                  <text x={"336.6"} y={"59.8"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"10"}
                  </text>
                  <text x={"313.2"} y={"102.2"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Me"}
                    <tspan fontSize={"9"} fill={"#8A7F98"} dy={"-5"}>
                      {"5°"}
                    </tspan>
                  </text>
                  <text x={"304.2"} y={"27.4"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"11"}
                  </text>
                  <text x={"262.8"} y={"34.8"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Su"}
                    <tspan fontSize={"9"} fill={"#8A7F98"} dy={"-5"}>
                      {"0°"}
                    </tspan>
                  </text>
                  <text x={"262.8"} y={"51.8"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Ma"}
                    <tspan fontSize={"9"} fill={"#8A7F98"} dy={"-5"}>
                      {"5°"}
                    </tspan>
                  </text>
                  <text x={"262.8"} y={"68.8"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Sa"}
                    <tspan fontSize={"9"} fill={"#8A7F98"} dy={"-5"}>
                      {"29°"}
                    </tspan>
                  </text>
                </svg>
              </div>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "22px"}}>
                <p style={{margin: "0 0 14px", display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Navamsa chart (D9)"}
                  </span>
                  <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", color: "#921A11"}}>
                    {"नवांश कुंडली"}
                  </span>
                </p>
                <svg viewBox={"0 0 360 360"} role={"img"} aria-label={"Navamsa chart"} style={{display: "block", width: "100%", height: "auto", background: "#FFFFFF", borderRadius: "12px"}}>
                  <rect x={"1"} y={"1"} width={"358"} height={"358"} rx={"10"} fill={"#FFFFFF"} stroke={"#6C1594"} strokeWidth={"2"} />
                  <path d={"M4 4L356 356M356 4L4 356"} stroke={"#D6C3E2"} strokeWidth={"1.2"} />
                  <path d={"M180.0 3L357 180.0L180.0 357L3 180.0Z"} fill={"none"} stroke={"#D6C3E2"} strokeWidth={"1.2"} />
                  <text x={"180.0"} y={"52.6"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"11"}
                  </text>
                  <text x={"180.0"} y={"87.5"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#921A11"}>
                    {"Asc"}
                  </text>
                  <text x={"180.0"} y={"104.5"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Mo"}
                  </text>
                  <text x={"180.0"} y={"121.5"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Me"}
                  </text>
                  <text x={"180.0"} y={"138.5"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Ke"}
                  </text>
                  <text x={"55.8"} y={"27.4"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"12"}
                  </text>
                  <text x={"23.4"} y={"59.8"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"1"}
                  </text>
                  <text x={"48.6"} y={"184.0"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"2"}
                  </text>
                  <text x={"23.4"} y={"308.2"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"3"}
                  </text>
                  <text x={"46.8"} y={"267.8"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Sa"}
                  </text>
                  <text x={"55.8"} y={"340.6"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"4"}
                  </text>
                  <text x={"180.0"} y={"315.4"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"5"}
                  </text>
                  <text x={"180.0"} y={"248.5"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Ju"}
                  </text>
                  <text x={"180.0"} y={"265.5"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Ra"}
                  </text>
                  <text x={"304.2"} y={"340.6"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"6"}
                  </text>
                  <text x={"336.6"} y={"308.2"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"7"}
                  </text>
                  <text x={"313.2"} y={"259.3"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Su"}
                  </text>
                  <text x={"313.2"} y={"276.3"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Ve"}
                  </text>
                  <text x={"311.4"} y={"184.0"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"8"}
                  </text>
                  <text x={"252.0"} y={"185.0"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"14"} fontWeight={"700"} fill={"#1E1830"}>
                    {"Ma"}
                  </text>
                  <text x={"336.6"} y={"59.8"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"9"}
                  </text>
                  <text x={"304.2"} y={"27.4"} textAnchor={"middle"} fontFamily={"Manrope, sans-serif"} fontSize={"12"} fill={"#921A11"}>
                    {"10"}
                  </text>
                </svg>
              </div>
            </div>
            <div style={{marginTop: "20px", background: "#F3E8F7", borderRadius: "18px", padding: "20px 24px"}}>
              <p style={{margin: "0 0 10px", fontWeight: "700", color: "#3D0752"}}>
                {"Placements that stand out"}
              </p>
              <ul style={{margin: "0", paddingLeft: "20px", color: "#3D0752", fontSize: "15px"}}>
                <li style={{marginBottom: "8px"}}>
                  {"Venus is exalted in your lagna (Pisces)."}
                </li>
                <li style={{marginBottom: "8px"}}>
                  {"The Moon is debilitated in Scorpio, in the 9th house."}
                </li>
                <li style={{marginBottom: "8px"}}>
                  {"Three planets sit in the 12th house: the Sun, Mars and Saturn. Mars is combust."}
                </li>
              </ul>
              <p style={{margin: "8px 0 0", fontSize: "14px", color: "#5C5470"}}>
                {"What these mean for your life is explained in the Personalised Kundli Report."}
              </p>
            </div>
          </div>
          <div id={"planets"} style={{maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 24px"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "32px"}}>
              <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Planet positions"}
              </p>
              <h2 style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: "1.15"}}>
                {"Where each planet was when you were born."}
              </h2>
            </div>
            <div style={{overflowX: "auto", border: "1px solid #E8DFD0", borderRadius: "16px", background: "#FFFFFF"}}>
              <table style={{width: "100%", borderCollapse: "collapse", minWidth: "760px"}}>
                <thead>
                  <tr>
                    <th style={{textAlign: "left", padding: "12px 14px", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFFFFF", background: "#4A0A66", whiteSpace: "nowrap"}}>
                      {"Planet"}
                    </th>
                    <th style={{textAlign: "left", padding: "12px 14px", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFFFFF", background: "#4A0A66", whiteSpace: "nowrap"}}>
                      {"Sign"}
                    </th>
                    <th style={{textAlign: "left", padding: "12px 14px", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFFFFF", background: "#4A0A66", whiteSpace: "nowrap"}}>
                      {"Degree"}
                    </th>
                    <th style={{textAlign: "left", padding: "12px 14px", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFFFFF", background: "#4A0A66", whiteSpace: "nowrap"}}>
                      {"Nakshatra, pada"}
                    </th>
                    <th style={{textAlign: "left", padding: "12px 14px", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFFFFF", background: "#4A0A66", whiteSpace: "nowrap"}}>
                      {"Nakshatra lord"}
                    </th>
                    <th style={{textAlign: "left", padding: "12px 14px", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFFFFF", background: "#4A0A66", whiteSpace: "nowrap"}}>
                      {"House"}
                    </th>
                    <th style={{textAlign: "left", padding: "12px 14px", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFFFFF", background: "#4A0A66", whiteSpace: "nowrap"}}>
                      {"Strength"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "700"}}>
                      {"Lagna"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Pisces"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"26°06'35\""}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Revati 3"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}} />
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"1"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}} />
                  </tr>
                  <tr>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "700"}}>
                      {"Sun"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Aquarius"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"0°56'02\""}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Dhanishta 3"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Mars"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"12"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}} />
                  </tr>
                  <tr>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "700"}}>
                      {"Moon"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Scorpio"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"24°26'16\""}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Jyeshtha 3"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Mercury"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"9"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Debilitated"}
                    </td>
                  </tr>
                  <tr>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "700"}}>
                      {"Mars"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Aquarius"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"5°08'46\""}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Dhanishta 4"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Mars"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"12"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Combust"}
                    </td>
                  </tr>
                  <tr>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "700"}}>
                      {"Mercury"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Capricorn"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"5°07'59\""}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Uttara Ashadha 3"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Sun"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"11"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}} />
                  </tr>
                  <tr>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "700"}}>
                      {"Jupiter"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Sagittarius"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"15°05'13\""}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Purva Ashadha 1"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Venus"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"10"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}} />
                  </tr>
                  <tr>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "700"}}>
                      {"Venus"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Pisces"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"12°10'03\""}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Uttara Bhadrapada 3"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Saturn"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"1"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Exalted"}
                    </td>
                  </tr>
                  <tr>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "700"}}>
                      {"Saturn"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Aquarius"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"29°43'41\""}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Purva Bhadrapada 3"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Jupiter"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"12"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}} />
                  </tr>
                  <tr>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "700"}}>
                      {"Rahu"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Virgo"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"26°17'41\""}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Chitra 1"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Mars"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"7"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}} />
                  </tr>
                  <tr>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "700"}}>
                      {"Ketu"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Pisces"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"26°17'41\""}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Revati 3"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"Mercury"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}}>
                      {"1"}
                    </td>
                    <td style={{padding: "11px 14px", fontSize: "15px", borderBottom: "1px solid #EFE6D8", background: "#FBF7F0", whiteSpace: "nowrap", fontWeight: "400"}} />
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{margin: "12px 0 0", fontSize: "14px", color: "#5C5470"}}>
              {"Sidereal zodiac, Lahiri ayanamsa, whole sign houses. Rahu and Ketu always move in reverse, so they are not marked retrograde."}
            </p>
          </div>
          <div id={"doshas"} style={{maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 24px"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "32px"}}>
              <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Dosha check"}
              </p>
              <h2 style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: "1.15"}}>
                {"Three doshas, checked automatically."}
              </h2>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "20px"}}>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderTop: "4px solid #921A11", borderRadius: "18px", padding: "22px"}}>
                <p style={{margin: "0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Manglik dosha"}
                  </span>
                  <span style={{fontSize: "13px", fontWeight: "700", color: "#921A11", background: "#F8E8E6", padding: "4px 12px", borderRadius: "999px"}}>
                    {"Present"}
                  </span>
                </p>
                <p style={{margin: "2px 0 12px", fontFamily: "'Tiro Devanagari Hindi', serif", color: "#921A11"}}>
                  {"मांगलिक दोष"}
                </p>
                <p style={{margin: "0 0 8px", fontSize: "15px"}}>
                  <b>
                    {"In your chart:"}
                  </b>
                  {" Mars is in the 12th house from your lagna and the 4th from your Moon."}
                </p>
                <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                  {"Manglik dosha is common and is often reduced or cancelled by other placements. Our experts check this before suggesting any remedy."}
                </p>
                <a href={"#ask"} style={{display: "inline-flex", marginTop: "14px", fontWeight: "700"}}>
                  {"Get remedies in your report →"}
                </a>
              </div>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderTop: "4px solid #921A11", borderRadius: "18px", padding: "22px"}}>
                <p style={{margin: "0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Kaal Sarp dosha"}
                  </span>
                  <span style={{fontSize: "13px", fontWeight: "700", color: "#921A11", background: "#F8E8E6", padding: "4px 12px", borderRadius: "999px"}}>
                    {"Present"}
                  </span>
                </p>
                <p style={{margin: "2px 0 12px", fontFamily: "'Tiro Devanagari Hindi', serif", color: "#921A11"}}>
                  {"काल सर्प दोष"}
                </p>
                <p style={{margin: "0 0 8px", fontSize: "15px"}}>
                  <b>
                    {"In your chart:"}
                  </b>
                  {" All seven planets sit on one side of the Rahu and Ketu axis."}
                </p>
                <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                  {"Its effect depends on the houses involved and on the strength of your other planets, so it needs a proper reading."}
                </p>
                <a href={"#ask"} style={{display: "inline-flex", marginTop: "14px", fontWeight: "700"}}>
                  {"Get remedies in your report →"}
                </a>
              </div>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderTop: "4px solid #1F7A4C", borderRadius: "18px", padding: "22px"}}>
                <p style={{margin: "0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Sade Sati"}
                  </span>
                  <span style={{fontSize: "13px", fontWeight: "700", color: "#1F7A4C", background: "#EAF5EE", padding: "4px 12px", borderRadius: "999px"}}>
                    {"Not running"}
                  </span>
                </p>
                <p style={{margin: "2px 0 12px", fontFamily: "'Tiro Devanagari Hindi', serif", color: "#921A11"}}>
                  {"साढ़े साती"}
                </p>
                <p style={{margin: "0 0 8px", fontSize: "15px"}}>
                  <b>
                    {"In your chart:"}
                  </b>
                  {" Saturn is transiting the 5th house from your Moon as of today."}
                </p>
                <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                  {"Sade Sati runs while Saturn passes the 12th, 1st and 2nd houses from your Moon. It is not affecting you now."}
                </p>
              </div>
            </div>
          </div>
          <div id={"dasha"} style={{maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 24px"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "32px"}}>
              <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Vimshottari dasha"}
              </p>
              <h2 style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: "1.15"}}>
                {"The planetary periods of your life."}
              </h2>
            </div>
            <div style={{display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "20px"}}>
              <span style={{fontSize: "15px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "999px", padding: "8px 16px"}}>
                {"Mahadasha: "}
                <b>
                  {"Venus"}
                </b>
                {" · Mar 2010 to Mar 2030"}
              </span>
              <span style={{fontSize: "15px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "999px", padding: "8px 16px"}}>
                {"Antardasha: "}
                <b>
                  {"Mercury"}
                </b>
                {" · Mar 2026 to Jan 2029"}
              </span>
            </div>
            <div style={{display: "flex", border: "1px solid #E8DFD0", borderRadius: "14px", overflow: "hidden", marginBottom: "24px", overflowX: "auto"}}>
              <div style={{flex: "7 1 0", minWidth: "0", padding: "10px 6px", textAlign: "center", background: "#FFFFFF", color: "#1E1830", borderRight: "1px solid #E8DFD0"}}>
                <p style={{margin: "0", fontWeight: "700", fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis"}}>
                  {"Mercury"}
                </p>
                <p style={{margin: "2px 0 0", fontSize: "12px", opacity: "0.8"}}>
                  {"1996"}
                </p>
              </div>
              <div style={{flex: "7 1 0", minWidth: "0", padding: "10px 6px", textAlign: "center", background: "#FFFFFF", color: "#1E1830", borderRight: "1px solid #E8DFD0"}}>
                <p style={{margin: "0", fontWeight: "700", fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis"}}>
                  {"Ketu"}
                </p>
                <p style={{margin: "2px 0 0", fontSize: "12px", opacity: "0.8"}}>
                  {"2003"}
                </p>
              </div>
              <div style={{flex: "20 1 0", minWidth: "0", padding: "10px 6px", textAlign: "center", background: "#6C1594", color: "#FFFFFF", borderRight: "1px solid #E8DFD0"}}>
                <p style={{margin: "0", fontWeight: "700", fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis"}}>
                  {"Venus"}
                </p>
                <p style={{margin: "2px 0 0", fontSize: "12px", opacity: "0.8"}}>
                  {"2010"}
                </p>
              </div>
              <div style={{flex: "6 1 0", minWidth: "0", padding: "10px 6px", textAlign: "center", background: "#FFFFFF", color: "#1E1830", borderRight: "1px solid #E8DFD0"}}>
                <p style={{margin: "0", fontWeight: "700", fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis"}}>
                  {"Sun"}
                </p>
                <p style={{margin: "2px 0 0", fontSize: "12px", opacity: "0.8"}}>
                  {"2030"}
                </p>
              </div>
              <div style={{flex: "10 1 0", minWidth: "0", padding: "10px 6px", textAlign: "center", background: "#FFFFFF", color: "#1E1830", borderRight: "1px solid #E8DFD0"}}>
                <p style={{margin: "0", fontWeight: "700", fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis"}}>
                  {"Moon"}
                </p>
                <p style={{margin: "2px 0 0", fontSize: "12px", opacity: "0.8"}}>
                  {"2036"}
                </p>
              </div>
              <div style={{flex: "7 1 0", minWidth: "0", padding: "10px 6px", textAlign: "center", background: "#FFFFFF", color: "#1E1830", borderRight: "1px solid #E8DFD0"}}>
                <p style={{margin: "0", fontWeight: "700", fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis"}}>
                  {"Mars"}
                </p>
                <p style={{margin: "2px 0 0", fontSize: "12px", opacity: "0.8"}}>
                  {"2046"}
                </p>
              </div>
              <div style={{flex: "18 1 0", minWidth: "0", padding: "10px 6px", textAlign: "center", background: "#FFFFFF", color: "#1E1830", borderRight: "1px solid #E8DFD0"}}>
                <p style={{margin: "0", fontWeight: "700", fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis"}}>
                  {"Rahu"}
                </p>
                <p style={{margin: "2px 0 0", fontSize: "12px", opacity: "0.8"}}>
                  {"2053"}
                </p>
              </div>
              <div style={{flex: "16 1 0", minWidth: "0", padding: "10px 6px", textAlign: "center", background: "#FFFFFF", color: "#1E1830", borderRight: "1px solid #E8DFD0"}}>
                <p style={{margin: "0", fontWeight: "700", fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis"}}>
                  {"Jupiter"}
                </p>
                <p style={{margin: "2px 0 0", fontSize: "12px", opacity: "0.8"}}>
                  {"2071"}
                </p>
              </div>
              <div style={{flex: "19 1 0", minWidth: "0", padding: "10px 6px", textAlign: "center", background: "#FFFFFF", color: "#1E1830", borderRight: "1px solid #E8DFD0"}}>
                <p style={{margin: "0", fontWeight: "700", fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis"}}>
                  {"Saturn"}
                </p>
                <p style={{margin: "2px 0 0", fontSize: "12px", opacity: "0.8"}}>
                  {"2087"}
                </p>
              </div>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "20px", alignItems: "start"}}>
              <div style={{border: "1px solid #E8DFD0", borderRadius: "16px", overflow: "hidden"}}>
                <p style={{margin: "0", padding: "14px 16px", background: "#4A0A66", color: "#FFFFFF", fontWeight: "700"}}>
                  {"Antardashas within Venus"}
                </p>
                <div style={{display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", padding: "12px 16px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", fontSize: "15px"}}>
                  <span style={{fontWeight: "500"}}>
                    {"Venus – Venus"}
                  </span>
                  <span style={{color: "#5C5470"}}>
                    {"19 Mar 2010 to 18 Jul 2013"}
                  </span>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", padding: "12px 16px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", fontSize: "15px"}}>
                  <span style={{fontWeight: "500"}}>
                    {"Venus – Sun"}
                  </span>
                  <span style={{color: "#5C5470"}}>
                    {"18 Jul 2013 to 18 Jul 2014"}
                  </span>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", padding: "12px 16px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", fontSize: "15px"}}>
                  <span style={{fontWeight: "500"}}>
                    {"Venus – Moon"}
                  </span>
                  <span style={{color: "#5C5470"}}>
                    {"18 Jul 2014 to 18 Mar 2016"}
                  </span>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", padding: "12px 16px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", fontSize: "15px"}}>
                  <span style={{fontWeight: "500"}}>
                    {"Venus – Mars"}
                  </span>
                  <span style={{color: "#5C5470"}}>
                    {"18 Mar 2016 to 18 May 2017"}
                  </span>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", padding: "12px 16px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", fontSize: "15px"}}>
                  <span style={{fontWeight: "500"}}>
                    {"Venus – Rahu"}
                  </span>
                  <span style={{color: "#5C5470"}}>
                    {"18 May 2017 to 18 May 2020"}
                  </span>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", padding: "12px 16px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", fontSize: "15px"}}>
                  <span style={{fontWeight: "500"}}>
                    {"Venus – Jupiter"}
                  </span>
                  <span style={{color: "#5C5470"}}>
                    {"18 May 2020 to 17 Jan 2023"}
                  </span>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", padding: "12px 16px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", fontSize: "15px"}}>
                  <span style={{fontWeight: "500"}}>
                    {"Venus – Saturn"}
                  </span>
                  <span style={{color: "#5C5470"}}>
                    {"17 Jan 2023 to 19 Mar 2026"}
                  </span>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", padding: "12px 16px", borderBottom: "1px solid #EFE6D8", background: "#F3E8F7", fontSize: "15px"}}>
                  <span style={{fontWeight: "700"}}>
                    {"Venus – Mercury "}
                    <span style={{marginLeft: "8px", fontSize: "12px", fontWeight: "700", color: "#FFFFFF", background: "#921A11", padding: "2px 8px", borderRadius: "999px"}}>
                      {"Now"}
                    </span>
                  </span>
                  <span style={{color: "#5C5470"}}>
                    {"19 Mar 2026 to 17 Jan 2029"}
                  </span>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", padding: "12px 16px", borderBottom: "1px solid #EFE6D8", background: "#FFFFFF", fontSize: "15px"}}>
                  <span style={{fontWeight: "500"}}>
                    {"Venus – Ketu"}
                  </span>
                  <span style={{color: "#5C5470"}}>
                    {"17 Jan 2029 to 19 Mar 2030"}
                  </span>
                </div>
              </div>
              <div style={{background: "linear-gradient(135deg, #2E003E, #6C1594)", color: "#FFFFFF", borderRadius: "20px", padding: "26px", position: "relative", overflow: "hidden"}}>
                <div className={"am-stars"} aria-hidden={"true"} />
                <p style={{position: "relative", margin: "0 0 8px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
                  {"What does Venus–Mercury mean for you?"}
                </p>
                <p style={{position: "relative", margin: "0 0 18px", fontFamily: "'Marcellus', serif", fontSize: "24px", lineHeight: "1.3"}}>
                  {"Your report reads your next three years period by period, with dates and what to do in each."}
                </p>
                <a href={"#ask"} style={{position: "relative", display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
                  {"See what is ahead"}
                </a>
              </div>
            </div>
          </div>
          <div id={"nature"} style={{background: "#FFFFFF", borderTop: "1px solid #E8DFD0", borderBottom: "1px solid #E8DFD0", marginTop: "64px"}}>
            <div style={{maxWidth: "1200px", margin: "0 auto", padding: "72px 24px"}}>
              <div className={"am-center-mobile"} style={{marginBottom: "32px"}}>
                <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                  {"Your birth panchang"}
                </p>
                <h2 style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: "1.15"}}>
                  {"What the day you were born says about you."}
                </h2>
                <p style={{margin: "0 auto", fontSize: "16px", color: "#5C5470", maxWidth: "720px", marginLeft: "0"}}>
                  {"General traits for your weekday, nakshatra, tithi, karana and yoga. They describe tendencies shared by everyone born under them, not a reading of your full chart."}
                </p>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "18px"}}>
                <div style={{background: "#FBF7F0", border: "1px solid #EFE6D8", borderRadius: "18px", padding: "22px 24px"}}>
                  <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Your basic nature"}
                  </p>
                  <p style={{margin: "0 0 12px", paddingLeft: "12px", borderLeft: "3px solid #921A11", fontSize: "14px", fontWeight: "700", color: "#921A11"}}>
                    {"Based on your weekday (Wednesday)"}
                  </p>
                  <p style={{margin: "0", fontSize: "15px", color: "#3B3350"}}>
                    {"Born on a Wednesday, the day of Mercury, you tend to be quick-witted, curious and good with words. You learn fast and enjoy conversation, ideas and anything that keeps your mind busy."}
                  </p>
                </div>
                <div style={{background: "#FBF7F0", border: "1px solid #EFE6D8", borderRadius: "18px", padding: "22px 24px"}}>
                  <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Your character"}
                  </p>
                  <p style={{margin: "0 0 12px", paddingLeft: "12px", borderLeft: "3px solid #921A11", fontSize: "14px", fontWeight: "700", color: "#921A11"}}>
                    {"Based on your nakshatra (Jyeshtha)"}
                  </p>
                  <p style={{margin: "0", fontSize: "15px", color: "#3B3350"}}>
                    {"Jyeshtha, the eldest star, gives a protective and responsible nature. You often take charge in difficult moments and people rely on you, though you may keep your own worries to yourself."}
                  </p>
                </div>
                <div style={{background: "#FBF7F0", border: "1px solid #EFE6D8", borderRadius: "18px", padding: "22px 24px"}}>
                  <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Your values"}
                  </p>
                  <p style={{margin: "0 0 12px", paddingLeft: "12px", borderLeft: "3px solid #921A11", fontSize: "14px", fontWeight: "700", color: "#921A11"}}>
                    {"Based on your tithi (Krishna Dashami)"}
                  </p>
                  <p style={{margin: "0", fontSize: "15px", color: "#3B3350"}}>
                    {"Dashami is a tithi of steady effort and duty. You like to finish what you begin, and you respect people who keep their word."}
                  </p>
                </div>
                <div style={{background: "#FBF7F0", border: "1px solid #EFE6D8", borderRadius: "18px", padding: "22px 24px"}}>
                  <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Your habits"}
                  </p>
                  <p style={{margin: "0 0 12px", paddingLeft: "12px", borderLeft: "3px solid #921A11", fontSize: "14px", fontWeight: "700", color: "#921A11"}}>
                    {"Based on your karana (Vanija)"}
                  </p>
                  <p style={{margin: "0", fontSize: "15px", color: "#3B3350"}}>
                    {"Vanija is the karana of trade. It brings a practical, business-minded streak and a habit of weighing the value of things before you commit."}
                  </p>
                </div>
                <div style={{background: "#FBF7F0", border: "1px solid #EFE6D8", borderRadius: "18px", padding: "22px 24px"}}>
                  <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Your interests"}
                  </p>
                  <p style={{margin: "0 0 12px", paddingLeft: "12px", borderLeft: "3px solid #921A11", fontSize: "14px", fontWeight: "700", color: "#921A11"}}>
                    {"Based on your yoga (Harshana)"}
                  </p>
                  <p style={{margin: "0", fontSize: "15px", color: "#3B3350"}}>
                    {"Harshana means joy. It points to a cheerful, optimistic temperament and a knack for lifting the mood of the people around you."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id={"ask"} style={{position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at 100% 0%, rgba(108,21,148,0.08), rgba(108,21,148,0) 55%), #F4EDE1"}}>
            <div style={{maxWidth: "1200px", margin: "0 auto", padding: "80px 24px 88px"}}>
              <div className={"am-center-mobile"} style={{marginBottom: "36px"}}>
                <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                  {"Ask our experts"}
                </p>
                <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15"}}>
                  {"Want answers, not just a chart?"}
                </h2>
                <p style={{margin: "0", fontSize: "17px", color: "#5C5470", maxWidth: "760px"}}>
                  {"Your chart shows where the planets are. Our experts tell you what it means for your life. Pick the questions you want answered in your Personalised Kundli Report: two are included, and each extra question is ₹159."}
                </p>
              </div>
              <div className={"am-ask"} style={{display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)", gap: "28px", alignItems: "start"}}>
                <div style={{display: "grid", gap: "16px"}}>
                  {(v.qGroups || []).map((grp, $index) => (
                    <React.Fragment key={$index}>
                      <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "20px 22px"}}>
                        <p style={{margin: "0 0 14px", display: "flex", alignItems: "center", gap: "12px"}}>
                          <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                            <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                              <path d={grp?.icon} />
                            </svg>
                          </span>
                          <span style={{fontFamily: "'Marcellus', serif", fontSize: "21px"}}>
                            {hole(grp?.title)}
                          </span>
                        </p>
                        <div style={{display: "grid", gap: "8px"}}>
                          {(grp?.items || []).map((it, $index) => (
                            <React.Fragment key={$index}>
                              {it?.sel ? (
                                <>
                                  <button type={"button"} role={"checkbox"} aria-checked={"true"} onClick={it?.toggle} style={{display: "flex", alignItems: "center", gap: "12px", width: "100%", textAlign: "left", padding: "12px 14px", borderRadius: "14px", border: "1.5px solid #6C1594", background: "#F3E8F7", font: "inherit", fontSize: "15px", fontWeight: "600", color: "#2E003E", cursor: "pointer"}}>
                                    <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", borderRadius: "6px", background: "#6C1594", color: "#FFFFFF"}}>
                                      <svg aria-hidden={"true"} width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                        <path d={"M5 12l5 5 9-10"} />
                                      </svg>
                                    </span>
                                    {hole(it?.text)}
                                  </button>
                                </>
                              ) : null}
                              {it?.notSel ? (
                                <>
                                  <button type={"button"} role={"checkbox"} aria-checked={"false"} onClick={it?.toggle} style={{display: "flex", alignItems: "center", gap: "12px", width: "100%", textAlign: "left", padding: "12px 14px", borderRadius: "14px", border: "1px solid #E8DFD0", background: "#FFFFFF", font: "inherit", fontSize: "15px", color: "#1E1830", cursor: "pointer"}}>
                                    <span style={{flex: "none", width: "22px", height: "22px", boxSizing: "border-box", borderRadius: "6px", border: "1.5px solid #B9AEC6", background: "#FFFFFF"}} />
                                    {hole(it?.text)}
                                  </button>
                                </>
                              ) : null}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <aside className={"am-ask-aside"} style={{position: "sticky", top: "150px", display: "grid", gap: "14px"}}>
                  <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "24px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                    <p style={{margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: "23px"}}>
                      {"Personalised Kundli Report"}
                    </p>
                    <p style={{margin: "0 0 18px", fontSize: "14px", color: "#5C5470"}}>
                      {"32-page report prepared by Ahalya Sangeeta and Maneswita, in English or Hindi."}
                    </p>
                    <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "15px", marginBottom: "8px"}}>
                      <span>
                        {"Report with 2 questions"}
                      </span>
                      <span>
                        <span style={{color: "#5C5470", textDecoration: "line-through", marginRight: "6px"}}>
                          {"₹1,998"}
                        </span>
                        {"₹999"}
                      </span>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "15px", marginBottom: "8px"}}>
                      <span>
                        {"Questions selected"}
                      </span>
                      <span>
                        {hole(v.qCount)}
                      </span>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "15px", marginBottom: "14px"}}>
                      <span>
                        {"Extra questions ("}
                        {hole(v.extraCount)}
                        {" × ₹159)"}
                      </span>
                      <span>
                        {hole(v.extraPrice)}
                      </span>
                    </div>
                    <div style={{height: "1px", background: "#EFE6D8", marginBottom: "14px"}} />
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "18px"}}>
                      <span style={{fontWeight: "700"}}>
                        {"Total"}
                      </span>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "32px"}}>
                        {hole(v.total)}
                      </span>
                    </div>
                    <a href={"/checkout/kundli"} style={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "54px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "16px", textDecoration: "none"}}>
                      {"Continue to order"}
                    </a>
                    <p style={{margin: "12px 0 0", textAlign: "center", fontSize: "13px", color: "#5C5470"}}>
                      {hole(v.hint)}
                    </p>
                  </div>
                  <div style={{background: "#F3E8F7", borderRadius: "18px", padding: "16px 18px", fontSize: "14px", color: "#3D0752"}}>
                    {"Your birth details are already filled in, so ordering takes under a minute."}
                  </div>
                </aside>
              </div>
            </div>
          </div>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "80px 24px 32px"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "28px"}}>
              <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Other ways we can help"}
              </p>
              <h2 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(28px, 3vw, 38px)"}}>
                {"Prefer to talk, or plan your year?"}
              </h2>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "20px"}}>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "23px"}}>
                  {"Consultation"}
                </p>
                <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                  {"Talk to our experts one-on-one about your chart, on an audio or video call."}
                </p>
                <div style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "8px"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "24px"}}>
                    {"From ₹2,301"}
                  </span>
                  <a href={"/consult"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", textDecoration: "none"}}>
                    {"Book a call"}
                  </a>
                </div>
              </div>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "23px"}}>
                  {"Varshphal 2027"}
                </p>
                <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                  {"Your next 12 months, month by month: the year’s main focus, key phases and simple remedies."}
                </p>
                <div style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "8px"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "24px"}}>
                    {"₹739"}
                  </span>
                  <a href={"/report/varshphal"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", textDecoration: "none"}}>
                    {"View report"}
                  </a>
                </div>
              </div>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "23px"}}>
                  {"Couple Kundli Milan"}
                </p>
                <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                  {"Gun Milan, Mangal Dosha check and an honest view of long-term compatibility before marriage."}
                </p>
                <div style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "8px"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "24px"}}>
                    {"₹3,399"}
                  </span>
                  <a href={"/report/milan"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", textDecoration: "none"}}>
                    {"View report"}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{position: "sticky", bottom: "0", zIndex: "30", background: "rgba(46,0,62,0.96)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", color: "#FFFFFF", borderTop: "1px solid rgba(255,255,255,0.12)"}}>
            <div style={{maxWidth: "1200px", margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", flexWrap: "wrap"}}>
              <div style={{display: "flex", alignItems: "center", gap: "14px", minWidth: "0"}}>
                <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "800", fontSize: "16px"}}>
                  {hole(v.qCount)}
                </span>
                <div style={{minWidth: "0"}}>
                  <p style={{margin: "0", fontWeight: "700"}}>
                    {hole(v.barTitle)}
                  </p>
                  <p style={{margin: "0", fontSize: "13px", color: "#EADFF2"}}>
                    {"2 questions included · ₹159 for each extra"}
                  </p>
                </div>
              </div>
              <a href={"/checkout/kundli"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "48px", padding: "0 24px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
                {"Get my report · "}
                {hole(v.total)}
              </a>
            </div>
          </div>
        </div>
        <footer style={{position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #4A0A66 0%, #2E003E 70%)", color: "#EADFF2", fontSize: "15px"}}>
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
                <a href={"/consult"} style={{color: "#EADFF2", textDecoration: "none"}}>
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
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: "24px", fontSize: "14px"}}>
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

export default KundliPage;
