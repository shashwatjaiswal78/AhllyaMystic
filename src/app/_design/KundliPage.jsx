"use client";
/* eslint-disable */
// Generated from the design file Kundli.dc.html by scripts/design/dc2jsx.py, then wired to the Kundli engine by hand:
// the result blocks below read the chart returned by /api/kundli (see componentDidMount and render). Re-apply if regenerated.
import React from "react";
import { HoroscopeMenu, HoroscopeMobileMenu, CalculatorsMenu, CalculatorsMobileMenu, ReportsMenu, ReportsMobileMenu, PanchangMenu, PanchangMobileMenu } from "./HoroscopeMenu";
import { sx, hole } from "./sx";
import NorthChart from "./KundliChart";
import { KUNDLI_KEY } from "./KundliForm";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState, maskDate, maskTime, maskTimeHM, maskPart } from "./wire";

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

KundliPage.prototype.componentDidMount = function componentDidMount() {
  // The home page form stores the chart it got from /api/kundli. Without one there is nothing to show, so go back to the form.
  let data = null;
  try { data = JSON.parse(sessionStorage.getItem(KUNDLI_KEY) || "null"); } catch (e) { data = null; }
  if (!data || data.v !== 1 || !Array.isArray(data.dasha) || !data.dasha.length) { window.location.replace("/kundli?edit=1"); return; }
  // The page grows once the chart is in, which can leave the visitor part-way down (the site scrolls smoothly).
  // Show the top, with the name and headline first, as soon as the result is drawn.
  const top = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  top();
  this.setState({ data: data }, () => { top(); requestAnimationFrame(top); });
};

KundliPage.prototype.render = function render() {
  const v = this.renderVals() || {};
  const R = this.state.data || null;
  // Running mahadasha and antardasha as of today (clamped to the dasha span for charts cast for a future date).
  let curM = null, curA = null;
  if (R) {
    const t = Math.min(Math.max(Date.now(), R.dasha[0].start), R.dasha[R.dasha.length - 1].end - 1);
    curM = R.dasha.find((m) => t >= m.start && t < m.end) || R.dasha[0];
    curA = curM.antar.find((a) => t >= a.start && t < a.end) || curM.antar[0];
  }
  return (
    <div data-design-page="Kundli" style={{ display: "contents" }}>
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
        <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #2E003E 0%, #3D0752 50%, #6C1594 100%)", color: "#FFFFFF"}}>
          <div className={"am-stars"} aria-hidden={"true"} />
          <div className={"am-stars2"} aria-hidden={"true"} />
          <img loading={"lazy"} decoding={"async"} className={"am-spin"} src={"/images/9f12ecbbc1351b2a79d2c5c2543824a3.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", right: "-180px", top: "-120px", width: "620px", height: "620px", opacity: "0.12", pointerEvents: "none"}} />
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "28px 24px 72px", position: "relative"}}>
            <nav aria-label={"Breadcrumb"} style={{fontSize: "13px", color: "#EADFF2", marginBottom: "36px"}}>
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
              <p style={{margin: "0 0 12px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
                {"Your free Kundli"}
              </p>
              <h1 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(28.5px, 3.74vw, 46.5px)", lineHeight: "1.1"}}>
                {R ? R.firstName + ", here is your Kundli." : "Preparing your Kundli…"}
              </h1>
              <p style={{margin: "0 0 32px", fontSize: "15px", color: "#EADFF2"}}>
                {R ? R.headline + " " : ""}
                <a href={"/kundli?edit=1"} style={{marginLeft: "10px", color: "#FFFFFF", fontWeight: "700"}}>
                  {"Edit details"}
                </a>
              </p>
            </div>
            {R ? (<>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "16px", marginBottom: "28px"}}>
              {(R ? R.tiles : []).map((t) => (
                <div key={t.key} style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "18px", padding: "18px 20px"}}>
                  <p style={{margin: "0", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#EADFF2", fontWeight: "700"}}>
                    {t.label}
                  </p>
                  <p style={{margin: "6px 0 0", display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap"}}>
                    <span style={{fontFamily: "'Marcellus', serif", fontSize: "25.5px", lineHeight: "1.1"}}>
                      {t.en}
                    </span>
                    <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "17.5px", color: "#FCCE07"}}>
                      {t.hi}
                    </span>
                  </p>
                  <p style={{margin: "6px 0 0", fontSize: "13px", color: "#EADFF2"}}>
                    {t.sub}
                  </p>
                </div>
              ))}
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
                  <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "18.5px"}}>
                    {"Your free Kundli PDF"}
                  </p>
                  <p style={{margin: "2px 0 0", fontSize: "13px", color: "#5C5470"}}>
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
            </>) : null}
          </div>
        </div>
        {R ? (
        <div className={"am-subnav"} style={{position: "sticky", top: "72px", zIndex: "40", background: "rgba(251,247,240,0.96)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", borderBottom: "1px solid #E8DFD0"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", gap: "28px", overflowX: "auto", whiteSpace: "nowrap"}}>
            <a href={"#profile"} style={{display: "inline-flex", alignItems: "center", minHeight: "54px", fontSize: "13.5px", fontWeight: "600", color: "#1E1830", textDecoration: "none"}}>
              {"Birth profile"}
            </a>
            <a href={"#charts"} style={{display: "inline-flex", alignItems: "center", minHeight: "54px", fontSize: "13.5px", fontWeight: "600", color: "#1E1830", textDecoration: "none"}}>
              {"Charts"}
            </a>
            <a href={"#planets"} style={{display: "inline-flex", alignItems: "center", minHeight: "54px", fontSize: "13.5px", fontWeight: "600", color: "#1E1830", textDecoration: "none"}}>
              {"Planets"}
            </a>
            <a href={"#doshas"} style={{display: "inline-flex", alignItems: "center", minHeight: "54px", fontSize: "13.5px", fontWeight: "600", color: "#1E1830", textDecoration: "none"}}>
              {"Doshas"}
            </a>
            <a href={"#dasha"} style={{display: "inline-flex", alignItems: "center", minHeight: "54px", fontSize: "13.5px", fontWeight: "600", color: "#1E1830", textDecoration: "none"}}>
              {"Dasha"}
            </a>
            <a href={"#nature"} style={{display: "inline-flex", alignItems: "center", minHeight: "54px", fontSize: "13.5px", fontWeight: "600", color: "#1E1830", textDecoration: "none"}}>
              {"Your nature"}
            </a>
            <a href={"#ask"} style={{display: "inline-flex", alignItems: "center", minHeight: "54px", fontSize: "13.5px", fontWeight: "600", color: "#921A11", textDecoration: "none"}}>
              {"Ask our experts"}
            </a>
          </div>
        </div>
        ) : null}
        <div>
          {R ? (<>
          <div id={"profile"} style={{maxWidth: "1200px", margin: "0 auto", padding: "72px 24px 24px"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "32px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Birth profile"}
              </p>
              <h2 style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(24px, 2.72vw, 33.5px)", lineHeight: "1.15"}}>
                {"The basics of your chart."}
              </h2>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "20px"}}>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "24px 26px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                  {"Birth details"}
                </p>
                <p style={{margin: "0 0 8px", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "13.5px", color: "#921A11"}}>
                  {"जन्म विवरण"}
                </p>
                {(R ? R.details : []).map(([k, val], i) => (
                  <div key={i} style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "13.5px"}}>
                    <span style={{color: "#5C5470"}}>
                      {k}
                    </span>
                    <span style={{fontWeight: "700", textAlign: "right"}}>
                      {val}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "24px 26px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                  {"Panchang and Avkahada"}
                </p>
                <p style={{margin: "0 0 8px", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "13.5px", color: "#921A11"}}>
                  {"पंचांग और अवकहड़ा चक्र"}
                </p>
                {(R ? R.panchang : []).map(([k, val], i) => (
                  <div key={i} style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #EFE6D8", fontSize: "13.5px"}}>
                    <span style={{color: "#5C5470"}}>
                      {k}
                    </span>
                    <span style={{fontWeight: "700", textAlign: "right"}}>
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id={"charts"} style={{maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 24px"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "32px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Your charts"}
              </p>
              <h2 style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(24px, 2.72vw, 33.5px)", lineHeight: "1.15"}}>
                {"Lagna and Navamsa charts."}
              </h2>
              <p style={{margin: "0 auto", fontSize: "14.5px", color: "#5C5470", maxWidth: "720px", marginLeft: "0"}}>
                {"North Indian style. The top centre box is your first house, and houses run anticlockwise. Red numbers are signs, from 1 for Aries to 12 for Pisces."}
              </p>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "24px"}}>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "22px"}}>
                <p style={{margin: "0 0 14px", display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                    {"Lagna chart (D1)"}
                  </span>
                  <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", color: "#921A11"}}>
                    {"लग्न कुंडली"}
                  </span>
                </p>
                <NorthChart label={"Lagna chart"} houses={R ? R.d1 : []} />
              </div>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "22px"}}>
                <p style={{margin: "0 0 14px", display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                    {"Navamsa chart (D9)"}
                  </span>
                  <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", color: "#921A11"}}>
                    {"नवांश कुंडली"}
                  </span>
                </p>
                <NorthChart label={"Navamsa chart"} houses={R ? R.d9 : []} />
              </div>
            </div>
            <div style={{marginTop: "20px", background: "#F3E8F7", borderRadius: "18px", padding: "20px 24px"}}>
              <p style={{margin: "0 0 10px", fontWeight: "700", color: "#3D0752"}}>
                {"Placements that stand out"}
              </p>
              <ul style={{margin: "0", paddingLeft: "20px", color: "#3D0752", fontSize: "13.5px"}}>
                {(R ? R.stand : []).map((t, i) => (
                  <li key={i} style={{marginBottom: "8px"}}>
                    {t}
                  </li>
                ))}
              </ul>
              <p style={{margin: "8px 0 0", fontSize: "13px", color: "#5C5470"}}>
                {"What these mean for your life is explained in the Personalised Kundli Report."}
              </p>
            </div>
          </div>
          <div id={"planets"} style={{maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 24px"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "32px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Planet positions"}
              </p>
              <h2 style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(24px, 2.72vw, 33.5px)", lineHeight: "1.15"}}>
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
                  {(R ? R.planets : []).map((p, i) => (
                    <tr key={p.name}>
                      <td style={{padding: "11px 14px", fontSize: "13.5px", borderBottom: "1px solid #EFE6D8", background: i % 2 ? "#FBF7F0" : "#FFFFFF", whiteSpace: "nowrap", fontWeight: "700"}}>
                        {p.name}
                      </td>
                      <td style={{padding: "11px 14px", fontSize: "13.5px", borderBottom: "1px solid #EFE6D8", background: i % 2 ? "#FBF7F0" : "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                        {p.sign}
                      </td>
                      <td style={{padding: "11px 14px", fontSize: "13.5px", borderBottom: "1px solid #EFE6D8", background: i % 2 ? "#FBF7F0" : "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                        {p.deg}
                      </td>
                      <td style={{padding: "11px 14px", fontSize: "13.5px", borderBottom: "1px solid #EFE6D8", background: i % 2 ? "#FBF7F0" : "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                        {p.nak}
                      </td>
                      <td style={{padding: "11px 14px", fontSize: "13.5px", borderBottom: "1px solid #EFE6D8", background: i % 2 ? "#FBF7F0" : "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                        {p.nakLord}
                      </td>
                      <td style={{padding: "11px 14px", fontSize: "13.5px", borderBottom: "1px solid #EFE6D8", background: i % 2 ? "#FBF7F0" : "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                        {String(p.house)}
                      </td>
                      <td style={{padding: "11px 14px", fontSize: "13.5px", borderBottom: "1px solid #EFE6D8", background: i % 2 ? "#FBF7F0" : "#FFFFFF", whiteSpace: "nowrap", fontWeight: "400"}}>
                        {p.strength}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{margin: "12px 0 0", fontSize: "13px", color: "#5C5470"}}>
              {"Sidereal zodiac, Lahiri ayanamsa, whole sign houses. Rahu and Ketu always move in reverse, so they are not marked retrograde."}
            </p>
          </div>
          <div id={"doshas"} style={{maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 24px"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "32px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Dosha check"}
              </p>
              <h2 style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(24px, 2.72vw, 33.5px)", lineHeight: "1.15"}}>
                {"Three doshas, checked automatically."}
              </h2>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "20px"}}>
              {(R ? R.doshas : []).map((dz) => (
                              <div key={dz.key} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderTop: "4px solid " + (dz.present ? "#921A11" : "#1F7A4C"), borderRadius: "18px", padding: "22px"}}>
                                <p style={{margin: "0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px"}}>
                                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                                    {dz.title}
                                  </span>
                                  <span style={{fontSize: "12px", fontWeight: "700", color: dz.present ? "#921A11" : "#1F7A4C", background: dz.present ? "#F8E8E6" : "#EAF5EE", padding: "4px 12px", borderRadius: "999px"}}>
                                    {dz.label}
                                  </span>
                                </p>
                                <p style={{margin: "2px 0 12px", fontFamily: "'Tiro Devanagari Hindi', serif", color: "#921A11"}}>
                                  {dz.hi}
                                </p>
                                <p style={{margin: "0 0 8px", fontSize: "13.5px"}}>
                                  <b>
                                    {"In your chart:"}
                                  </b>
                                  {" " + dz.chart}
                                </p>
                                <p style={{margin: "0", fontSize: "13.5px", color: "#5C5470"}}>
                                  {dz.note}
                                </p>
                                {dz.remedy ? (
                <a href={"#ask"} style={{display: "inline-flex", marginTop: "14px", fontWeight: "700"}}>
                                  {"Get remedies in your report →"}
                                </a>
                ) : null}
                              </div>
              ))}
            </div>
          </div>
          <div id={"dasha"} style={{maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 24px"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "32px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Vimshottari dasha"}
              </p>
              <h2 style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(24px, 2.72vw, 33.5px)", lineHeight: "1.15"}}>
                {"The planetary periods of your life."}
              </h2>
            </div>
            <div style={{display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "20px"}}>
              <span style={{fontSize: "13.5px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "999px", padding: "8px 16px"}}>
                {"Mahadasha: "}
                <b>
                  {curM ? curM.lord : ""}
                </b>
                {curM ? " · " + curM.range : ""}
              </span>
              <span style={{fontSize: "13.5px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "999px", padding: "8px 16px"}}>
                {"Antardasha: "}
                <b>
                  {curA ? curA.lord : ""}
                </b>
                {curA ? " · " + curA.short : ""}
              </span>
            </div>
            <div style={{display: "flex", border: "1px solid #E8DFD0", borderRadius: "14px", overflow: "hidden", marginBottom: "24px", overflowX: "auto"}}>
              {(R ? R.dasha : []).map((m) => (
                <div key={m.lord} style={{flex: m.years + " 1 0", minWidth: "0", padding: "10px 6px", textAlign: "center", background: m === curM ? "#6C1594" : "#FFFFFF", color: m === curM ? "#FFFFFF" : "#1E1830", borderRight: "1px solid #E8DFD0"}}>
                  <p style={{margin: "0", fontWeight: "700", fontSize: "13px", overflow: "hidden", textOverflow: "ellipsis"}}>
                    {m.lord}
                  </p>
                  <p style={{margin: "2px 0 0", fontSize: "12px", opacity: "0.8"}}>
                    {String(m.startYear)}
                  </p>
                </div>
              ))}
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "20px", alignItems: "start"}}>
              <div style={{border: "1px solid #E8DFD0", borderRadius: "16px", overflow: "hidden"}}>
                <p style={{margin: "0", padding: "14px 16px", background: "#4A0A66", color: "#FFFFFF", fontWeight: "700"}}>
                  {"Antardashas within " + (curM ? curM.lord : "")}
                </p>
                {(curM ? curM.antar : []).map((a) => {
                  const isNow = a === curA;
                  return (
                                    <div key={a.name} style={{display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", padding: "12px 16px", borderBottom: "1px solid #EFE6D8", background: isNow ? "#F3E8F7" : "#FFFFFF", fontSize: "13.5px"}}>
                                      <span style={{fontWeight: isNow ? "700" : "500"}}>
                                        {a.name + " "}
                                        {isNow ? (
                    <span style={{marginLeft: "8px", fontSize: "12px", fontWeight: "700", color: "#FFFFFF", background: "#921A11", padding: "2px 8px", borderRadius: "999px"}}>
                                          {"Now"}
                                        </span>
                    ) : null}
                                      </span>
                                      <span style={{color: "#5C5470"}}>
                                        {a.range}
                                      </span>
                                    </div>
                  );
                })}
              </div>
              <div style={{background: "linear-gradient(135deg, #2E003E, #6C1594)", color: "#FFFFFF", borderRadius: "20px", padding: "26px", position: "relative", overflow: "hidden"}}>
                <div className={"am-stars"} aria-hidden={"true"} />
                <p style={{position: "relative", margin: "0 0 8px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
                  {"What does " + (curM && curA ? curM.lord + "–" + curA.lord : "this period") + " mean for you?"}
                </p>
                <p style={{position: "relative", margin: "0 0 18px", fontFamily: "'Marcellus', serif", fontSize: "21px", lineHeight: "1.3"}}>
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
                <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                  {"Your birth panchang"}
                </p>
                <h2 style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(24px, 2.72vw, 33.5px)", lineHeight: "1.15"}}>
                  {"What the day you were born says about you."}
                </h2>
                <p style={{margin: "0 auto", fontSize: "14.5px", color: "#5C5470", maxWidth: "720px", marginLeft: "0"}}>
                  {"General traits for your weekday, nakshatra, tithi, karana and yoga. They describe tendencies shared by everyone born under them, not a reading of your full chart."}
                </p>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "18px"}}>
                {(R ? R.nature : []).map((nt) => (
                  <div key={nt.title} style={{background: "#FBF7F0", border: "1px solid #EFE6D8", borderRadius: "18px", padding: "22px 24px"}}>
                    <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                      {nt.title}
                    </p>
                    <p style={{margin: "0 0 12px", paddingLeft: "12px", borderLeft: "3px solid #921A11", fontSize: "13px", fontWeight: "700", color: "#921A11"}}>
                      {nt.basis}
                    </p>
                    <p style={{margin: "0", fontSize: "13.5px", color: "#3B3350"}}>
                      {nt.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </>) : null}
          <div id={"ask"} style={{position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at 100% 0%, rgba(108,21,148,0.08), rgba(108,21,148,0) 55%), #F4EDE1"}}>
            <div style={{maxWidth: "1200px", margin: "0 auto", padding: "80px 24px 88px"}}>
              <div className={"am-center-mobile"} style={{marginBottom: "36px"}}>
                <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                  {"Ask our experts"}
                </p>
                <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 3.06vw, 37px)", lineHeight: "1.15"}}>
                  {"Want answers, not just a chart?"}
                </h2>
                <p style={{margin: "0", fontSize: "15px", color: "#5C5470", maxWidth: "760px"}}>
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
                          <span style={{fontFamily: "'Marcellus', serif", fontSize: "18.5px"}}>
                            {hole(grp?.title)}
                          </span>
                        </p>
                        <div style={{display: "grid", gap: "8px"}}>
                          {(grp?.items || []).map((it, $index) => (
                            <React.Fragment key={$index}>
                              {it?.sel ? (
                                <>
                                  <button type={"button"} role={"checkbox"} aria-checked={"true"} onClick={it?.toggle} style={{display: "flex", alignItems: "center", gap: "12px", width: "100%", textAlign: "left", padding: "12px 14px", borderRadius: "14px", border: "1.5px solid #6C1594", background: "#F3E8F7", font: "inherit", fontSize: "13.5px", fontWeight: "600", color: "#2E003E", cursor: "pointer"}}>
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
                                  <button type={"button"} role={"checkbox"} aria-checked={"false"} onClick={it?.toggle} style={{display: "flex", alignItems: "center", gap: "12px", width: "100%", textAlign: "left", padding: "12px 14px", borderRadius: "14px", border: "1px solid #E8DFD0", background: "#FFFFFF", font: "inherit", fontSize: "13.5px", color: "#1E1830", cursor: "pointer"}}>
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
                    <p style={{margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: "20px"}}>
                      {"Personalised Kundli Report"}
                    </p>
                    <p style={{margin: "0 0 18px", fontSize: "13px", color: "#5C5470"}}>
                      {"32-page report prepared by Ahalya Sangeeta and Maneswita, in English or Hindi."}
                    </p>
                    <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "13.5px", marginBottom: "8px"}}>
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
                    <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "13.5px", marginBottom: "8px"}}>
                      <span>
                        {"Questions selected"}
                      </span>
                      <span>
                        {hole(v.qCount)}
                      </span>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "13.5px", marginBottom: "14px"}}>
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
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "27px"}}>
                        {hole(v.total)}
                      </span>
                    </div>
                    <a href={"/checkout/kundli"} style={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "54px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "14.5px", textDecoration: "none"}}>
                      {"Continue to order"}
                    </a>
                    <p style={{margin: "12px 0 0", textAlign: "center", fontSize: "12px", color: "#5C5470"}}>
                      {hole(v.hint)}
                    </p>
                  </div>
                  <div style={{background: "#F3E8F7", borderRadius: "18px", padding: "16px 18px", fontSize: "13px", color: "#3D0752"}}>
                    {"Your birth details are already filled in, so ordering takes under a minute."}
                  </div>
                </aside>
              </div>
            </div>
          </div>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "80px 24px 32px"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "28px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Other ways we can help"}
              </p>
              <h2 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(24px, 2.55vw, 32px)"}}>
                {"Prefer to talk, or plan your year?"}
              </h2>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "20px"}}>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "20px"}}>
                  {"Consultation"}
                </p>
                <p style={{margin: "0", fontSize: "13.5px", color: "#5C5470"}}>
                  {"Talk to our experts one-on-one about your chart, on an audio or video call."}
                </p>
                <div style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "8px"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "21px"}}>
                    {"From ₹2,301"}
                  </span>
                  <a href={"/consultation"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", textDecoration: "none"}}>
                    {"Book a call"}
                  </a>
                </div>
              </div>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "20px"}}>
                  {"Varshphal 2027"}
                </p>
                <p style={{margin: "0", fontSize: "13.5px", color: "#5C5470"}}>
                  {"Your next 12 months, month by month: the year’s main focus, key phases and simple remedies."}
                </p>
                <div style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "8px"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "21px"}}>
                    {"₹739"}
                  </span>
                  <a href={"/report/varshphal"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", textDecoration: "none"}}>
                    {"View report"}
                  </a>
                </div>
              </div>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "20px"}}>
                  {"Couple Kundli Milan"}
                </p>
                <p style={{margin: "0", fontSize: "13.5px", color: "#5C5470"}}>
                  {"Gun Milan, Mangal Dosha check and an honest view of long-term compatibility before marriage."}
                </p>
                <div style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "8px"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "21px"}}>
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
                <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "800", fontSize: "14.5px"}}>
                  {hole(v.qCount)}
                </span>
                <div style={{minWidth: "0"}}>
                  <p style={{margin: "0", fontWeight: "700"}}>
                    {hole(v.barTitle)}
                  </p>
                  <p style={{margin: "0", fontSize: "12px", color: "#EADFF2"}}>
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

export default KundliPage;
