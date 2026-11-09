"use client";
/* eslint-disable */
// Generated from the design file Consult.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { sx, hole } from "./sx";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState, maskDate, maskTime, maskTimeHM, maskPart } from "./wire";

class ConsultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({ expert: 'man', mode: 'audio', sess: 'one', areas: ['career'], partner: false, lang: 'Hindi', days: [], slots: [], report: false }, props && props.initialState);
  }
  renderVals() {
    var PRICE = { man: { one: 2301, two: 4101, three: 5001, all: 7201 }, san: { one: 4001, two: 6301, three: 7601, all: 11111 } };
    var LEN = { one: '20 min', two: '30 min', three: '45 min', all: '60 min' };
    var LIMIT = { one: 1, two: 2, three: 3, all: 6 };
    var SNAME = { one: 'One area', two: 'Two areas', three: 'Three areas', all: 'Complete' };
    var rs = (x) => '₹' + x.toLocaleString('en-IN');
    var st = this.state, mode = st.mode, sess = st.sess, ex = st.expert === 'san' ? 'san' : 'man', limit = LIMIT[sess];
    var modes = [['audio', 'Audio call'], ['video', 'Video call']].map((m) => ({ label: m[1], sel: mode === m[0], notSel: mode !== m[0], pick: () => this.setState({ mode: m[0] }) }));
    var EXPERTS = [
      { id: 'man', level: 'Expert', name: 'Maneswita', role: 'Vedic, KP and Numerology', photo: '/images/cd60cc55788c423c9c66a30e5201d374.jpg' },
      { id: 'san', level: 'Senior Expert', name: 'Ahalya Sangeeta', role: 'Vedic, KP, Numerology and Vastu', photo: '/images/4799fee4da0ba25da44abe8ca0aebfec.jpg' }
    ];
    var experts = EXPERTS.map((e) => ({ level: e.level, name: e.name, role: e.role, photo: e.photo, from: 'From ' + rs(PRICE[e.id].one), sel: ex === e.id, notSel: ex !== e.id, pick: () => this.setState({ expert: e.id }) }));
    var exName = ex === 'san' ? 'Ahalya Sangeeta' : 'Maneswita';
    var sessions = [
      { id: 'one', desc: 'A focused session on the area that matters most right now.' },
      { id: 'two', desc: 'Two questions that sit side by side, like career and money.' },
      { id: 'three', desc: 'A broader reading that connects the different parts of your life, with dasha timing.' },
      { id: 'all', desc: 'Every area of your life and any number of questions.' }
    ].map((x) => ({ name: SNAME[x.id], desc: x.desc, price: rs(PRICE[ex][x.id]), length: LEN[x.id] + ' call', sel: sess === x.id, notSel: sess !== x.id,
      pick: () => this.setState({ sess: x.id, areas: (this.state.areas || []).slice(0, LIMIT[x.id]) }) }));
    var AREAS = [{"id": "love", "name": "Love and marriage", "note": "Compatibility, marriage timing", "icon": "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"}, {"id": "career", "name": "Career and business", "note": "Job, business, right time to switch", "icon": "M4 8h16v11H4zM9 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M4 13h16"}, {"id": "money", "name": "Money and growth", "note": "Income, savings, financial blocks", "icon": "M4 19h16M6 15l4-4 3 3 5-6M15 8h3v3"}, {"id": "health", "name": "Health and wellbeing", "note": "Phases that need extra care", "icon": "M3 12h4l2-5 4 10 2-5h6"}, {"id": "study", "name": "Education", "note": "Stream, exams, studying abroad", "icon": "M3 9l9-4 9 4-9 4-9-4zM7 11v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4"}, {"id": "family", "name": "Child and family", "note": "Family planning, child’s nature", "icon": "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M17 11a2.5 2.5 0 1 0 0-5M21 20a5 5 0 0 0-4-4.9"}];
    var chosen = st.areas || [];
    var toggleArea = (id) => {
      var cur = (this.state.areas || []).slice(), at = cur.indexOf(id);
      if (at >= 0) cur.splice(at, 1);
      else if (cur.length < limit) cur.push(id);
      else if (limit === 1) cur = [id];
      else { cur.shift(); cur.push(id); }
      this.setState({ areas: cur });
    };
    var areas = AREAS.map((a) => ({ name: a.name, note: a.note, icon: a.icon, sel: chosen.indexOf(a.id) >= 0, notSel: chosen.indexOf(a.id) < 0, toggle: () => toggleArea(a.id) }));
    var areaHint = sess === 'one' ? 'Pick one area to focus on.' : sess === 'all' ? 'Every area is covered. Tap the ones you most want to talk about, so we can prepare for them.' : 'Pick ' + (limit === 2 ? 'two' : 'three') + ' areas (' + chosen.length + ' of ' + limit + ' chosen).';
    var langs = ['Hindi', 'English'].map((x) => ({ label: x, sel: st.lang === x, notSel: st.lang !== x, pick: () => this.setState({ lang: x }) }));
    var showPartner = chosen.indexOf('love') >= 0;
    // Bookable days: consultations happen 7 to 10 days after payment, so offer days 7 to 14.
    var WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], MO = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var base = new Date(this.state.__now || 0); base.setHours(12, 0, 0, 0);
    var pickedDays = st.days || [];
    var toggleDay = (k) => {
      var cur = (this.state.days || []).slice(), at = cur.indexOf(k);
      if (at >= 0) cur.splice(at, 1); else if (cur.length < 3) cur.push(k); else { cur.shift(); cur.push(k); }
      this.setState({ days: cur });
    };
    var days = [];
    for (var i = 7; i <= 14 && this.state.__now; i++) {
      var dt = new Date(base.getTime() + i * 864e5), key = dt.toISOString().slice(0, 10);
      days.push({ key: key, wd: WD[dt.getDay()], day: dt.getDate(), mon: MO[dt.getMonth()], label: WD[dt.getDay()] + ' ' + dt.getDate() + ' ' + MO[dt.getMonth()],
        sel: pickedDays.indexOf(key) >= 0, notSel: pickedDays.indexOf(key) < 0 });
    }
    days.forEach((d) => { var k = d.key; d.toggle = () => toggleDay(k); });
    var SLOTS = [['m', 'Morning', '11 am to 1 pm'], ['a', 'Afternoon', '1 pm to 4 pm'], ['e', 'Evening', '4 pm to 7 pm']];
    var pickedSlots = st.slots || [];
    var toggleSlot = (k) => { var cur = (this.state.slots || []).slice(), at = cur.indexOf(k); if (at >= 0) cur.splice(at, 1); else cur.push(k); this.setState({ slots: cur }); };
    var slots = SLOTS.map((s) => ({ name: s[1], range: s[2], sel: pickedSlots.indexOf(s[0]) >= 0, notSel: pickedSlots.indexOf(s[0]) < 0, toggle: () => toggleSlot(s[0]) }));
    var sessPrice = PRICE[ex][sess], hasReport = !!st.report;
    var subtotal = sessPrice + (hasReport ? 999 : 0), saving = hasReport ? Math.round(999 * 0.1) : 0;
    var nameOf = (id) => (AREAS.filter((a) => a.id === id)[0] || {}).name;
    var dayLabels = days.filter((d) => d.sel).map((d) => d.label);
    return {
      modes: modes, experts: experts, sessions: sessions, areas: areas, areaHint: areaHint, langs: langs,
      showPartner: showPartner, hasPartner: showPartner && !!st.partner, noPartner: !st.partner,
      togglePartner: () => this.setState({ partner: !this.state.partner }),
      days: days, dayCount: pickedDays.length, slots: slots,
      hasReport: hasReport, noReport: !hasReport, toggleReport: () => this.setState({ report: !this.state.report }),
      sessName: SNAME[sess], sessPrice: rs(sessPrice), sessLength: LEN[sess], exName: exName, modeLabel: mode === 'audio' ? 'Audio call' : 'Video call',
      areaList: chosen.length ? chosen.map(nameOf).join(', ') : 'Not chosen yet',
      dayList: dayLabels.length ? dayLabels.join(', ') : 'Not chosen yet',
      slotList: pickedSlots.length ? SLOTS.filter((s) => pickedSlots.indexOf(s[0]) >= 0).map((s) => s[1]).join(', ') : 'Any time',
      saving: rs(saving), total: rs(subtotal - saving)
    };
  }
}

ConsultPage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="Consult" style={{ display: "contents" }}>
      <div style={{fontFamily: "'Manrope', system-ui, sans-serif", color: "#1E1830", background: "#FBF7F0", fontSize: "14.5px", lineHeight: "1.6"}}>
        <header style={{background: "linear-gradient(90deg, #2E003E 0%, #4A0A66 100%)", borderBottom: "1px solid rgba(255,255,255,0.08)"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px"}}>
            <a href={"/"} aria-label={"Ahllya Mystic home"} style={{display: "block"}}>
              <img src={"/images/f0424906cf2ed307d839fd952ac77981.png"} alt={"Ahllya Mystic"} style={{height: "44px", width: "auto", display: "block"}} />
            </a>
            <span style={{display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600", color: "#EADFF2"}}>
              <svg aria-hidden={"true"} width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <rect x={"5"} y={"11"} width={"14"} height={"10"} rx={"2"} />
                <path d={"M8 11V8a4 4 0 0 1 8 0v3"} />
              </svg>
              {"Secure checkout"}
            </span>
          </div>
        </header>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "28px 24px 28px"}}>
          <a href={"/"} style={{display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13.5px", fontWeight: "600", textDecoration: "none", marginBottom: "22px"}}>
            <svg aria-hidden={"true"} width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
              <path d={"M15 6l-6 6 6 6"} />
            </svg>
            {"Back to home"}
          </a>
          <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px"}}>
            <div>
              <p style={{margin: "0 0 8px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"One-on-one consultation"}
              </p>
              <h1 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(27px, 3.23vw, 38.5px)", lineHeight: "1.12"}}>
                {"Book a consultation"}
              </h1>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "14px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "999px", padding: "6px 18px 6px 6px"}}>
              <img src={"/images/26c9dadb7f4b6a08ec59999c3d9e9332.jpg"} alt={""} style={{width: "52px", height: "52px", borderRadius: "999px", objectFit: "cover"}} />
              <div>
                <p style={{margin: "0", fontWeight: "700", fontSize: "13.5px"}}>
                  {"You will speak with our experts"}
                </p>
                <p style={{margin: "0", fontSize: "12px", color: "#5C5470"}}>
                  {"Maneswita and Ahalya Sangeeta · Astrology, Numerology and Vastu"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 24px 88px"}}>
          <div className={"am-book"} style={{display: "grid", gridTemplateColumns: "minmax(0, 1.55fr) minmax(0, 1fr)", gap: "28px", alignItems: "start"}}>
            <div style={{display: "grid", gap: "20px"}}>
              <section style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "clamp(22px, 3vw, 32px)", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px"}}>
                  <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "999px", background: "linear-gradient(135deg, #2E003E, #6C1594)", color: "#FFFFFF", fontFamily: "'Marcellus', serif", fontSize: "15px"}}>
                    {"1"}
                  </span>
                  <h2 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(19px, 2.04vw, 23px)"}}>
                    {"Choose your expert and plan"}
                  </h2>
                </div>
                <p style={{margin: "0 0 10px", fontSize: "13px", fontWeight: "600"}}>
                  {"Who would you like to speak with?"}
                </p>
                <div role={"radiogroup"} aria-label={"Expert"} style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "12px", marginBottom: "22px"}}>
                  {(v.experts || []).map((e, $index) => (
                    <React.Fragment key={$index}>
                      {e?.sel ? (
                        <>
                          <button type={"button"} role={"radio"} aria-checked={"true"} onClick={e?.pick} style={{display: "flex", alignItems: "center", gap: "16px", textAlign: "left", padding: "16px 18px", borderRadius: "18px", border: "2px solid #6C1594", background: "#F3E8F7", font: "inherit", color: "#1E1830", cursor: "pointer"}}>
                            <img src={e?.photo} alt={""} style={{flex: "none", width: "76px", height: "76px", borderRadius: "999px", objectFit: "cover", border: "3px solid #FFFFFF", boxShadow: "0 0 0 1.5px #CBB154"}} />
                            <span style={{display: "grid", gap: "3px"}}>
                              <span style={{fontSize: "11.5px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#921A11"}}>
                                {hole(e?.level)}
                              </span>
                              <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px", color: "#2E003E", lineHeight: "1.15"}}>
                                {hole(e?.name)}
                              </span>
                              <span style={{fontSize: "12.5px", color: "#5C5470"}}>
                                {hole(e?.role)}
                              </span>
                              <span style={{fontSize: "12px", fontWeight: "700", color: "#6C1594"}}>
                                {hole(e?.from)}
                              </span>
                            </span>
                          </button>
                        </>
                      ) : null}
                      {e?.notSel ? (
                        <>
                          <button type={"button"} role={"radio"} aria-checked={"false"} onClick={e?.pick} style={{display: "flex", alignItems: "center", gap: "16px", textAlign: "left", padding: "16px 18px", borderRadius: "18px", border: "1px solid #E8DFD0", background: "#FFFFFF", font: "inherit", color: "#1E1830", cursor: "pointer"}}>
                            <img src={e?.photo} alt={""} style={{flex: "none", width: "76px", height: "76px", borderRadius: "999px", objectFit: "cover", border: "3px solid #FFFFFF", boxShadow: "0 0 0 1.5px #CBB154"}} />
                            <span style={{display: "grid", gap: "3px"}}>
                              <span style={{fontSize: "11.5px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#921A11"}}>
                                {hole(e?.level)}
                              </span>
                              <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px", color: "#2E003E", lineHeight: "1.15"}}>
                                {hole(e?.name)}
                              </span>
                              <span style={{fontSize: "12.5px", color: "#5C5470"}}>
                                {hole(e?.role)}
                              </span>
                              <span style={{fontSize: "12px", fontWeight: "700", color: "#6C1594"}}>
                                {hole(e?.from)}
                              </span>
                            </span>
                          </button>
                        </>
                      ) : null}
                    </React.Fragment>
                  ))}
                </div>
                <p style={{margin: "0 0 10px", fontSize: "13px", fontWeight: "600"}}>
                  {"How much would you like to cover?"}
                </p>
                <div role={"radiogroup"} aria-label={"Plan"} style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "12px", marginBottom: "20px"}}>
                  {(v.sessions || []).map((x, $index) => (
                    <React.Fragment key={$index}>
                      {x?.sel ? (
                        <>
                          <button type={"button"} role={"radio"} aria-checked={"true"} onClick={x?.pick} style={{position: "relative", display: "grid", gap: "6px", alignContent: "start", textAlign: "left", padding: "18px 20px", borderRadius: "18px", border: "2px solid #6C1594", background: "#F3E8F7", font: "inherit", color: "#1E1830", cursor: "pointer"}}>
                            <span style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "10px"}}>
                              <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px", color: "#2E003E"}}>
                                {hole(x?.name)}
                              </span>
                              <span style={{fontFamily: "'Marcellus', serif", fontSize: "20px"}}>
                                {hole(x?.price)}
                              </span>
                            </span>
                            <span style={{fontSize: "13px", color: "#3D0752"}}>
                              {hole(x?.desc)}
                            </span>
                            <span style={{fontSize: "12px", fontWeight: "700", color: "#6C1594"}}>
                              {hole(x?.length)}
                            </span>
                          </button>
                        </>
                      ) : null}
                      {x?.notSel ? (
                        <>
                          <button type={"button"} role={"radio"} aria-checked={"false"} onClick={x?.pick} style={{position: "relative", display: "grid", gap: "6px", alignContent: "start", textAlign: "left", padding: "18px 20px", borderRadius: "18px", border: "1px solid #E8DFD0", background: "#FFFFFF", font: "inherit", color: "#1E1830", cursor: "pointer"}}>
                            <span style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "10px"}}>
                              <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px", color: "#2E003E"}}>
                                {hole(x?.name)}
                              </span>
                              <span style={{fontFamily: "'Marcellus', serif", fontSize: "20px"}}>
                                {hole(x?.price)}
                              </span>
                            </span>
                            <span style={{fontSize: "13px", color: "#5C5470"}}>
                              {hole(x?.desc)}
                            </span>
                            <span style={{fontSize: "12px", fontWeight: "700", color: "#5C5470"}}>
                              {hole(x?.length)}
                            </span>
                          </button>
                        </>
                      ) : null}
                    </React.Fragment>
                  ))}
                </div>
                <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600"}}>
                    {"How would you like to talk?"}
                  </span>
                  <div role={"radiogroup"} aria-label={"Call type"} style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                    {(v.modes || []).map((g, $index) => (
                      <React.Fragment key={$index}>
                        {g?.sel ? (
                          <>
                            <button type={"button"} role={"radio"} aria-checked={"true"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#F3E8F7", color: "#6C1594", font: "inherit", fontWeight: "700", cursor: "pointer"}}>
                              {hole(g?.label)}
                            </button>
                          </>
                        ) : null}
                        {g?.notSel ? (
                          <>
                            <button type={"button"} role={"radio"} aria-checked={"false"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontWeight: "600", cursor: "pointer"}}>
                              {hole(g?.label)}
                            </button>
                          </>
                        ) : null}
                      </React.Fragment>
                    ))}
                  </div>
                  <span style={{fontSize: "12px", color: "#5C5470"}}>
                    {"Same price for both."}
                  </span>
                </div>
              </section>
              <section style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "clamp(22px, 3vw, 32px)", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px"}}>
                  <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "999px", background: "linear-gradient(135deg, #2E003E, #6C1594)", color: "#FFFFFF", fontFamily: "'Marcellus', serif", fontSize: "15px"}}>
                    {"2"}
                  </span>
                  <h2 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(19px, 2.04vw, 23px)"}}>
                    {"Choose your areas"}
                  </h2>
                </div>
                <p style={{margin: "0 0 18px 46px", fontSize: "13px", color: "#5C5470"}}>
                  {hole(v.areaHint)}
                </p>
                <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(230px, 100%), 1fr))", gap: "10px"}}>
                  {(v.areas || []).map((a, $index) => (
                    <React.Fragment key={$index}>
                      {a?.sel ? (
                        <>
                          <button type={"button"} role={"checkbox"} aria-checked={"true"} onClick={a?.toggle} style={{display: "flex", alignItems: "center", gap: "12px", textAlign: "left", padding: "14px", borderRadius: "14px", border: "1.5px solid #6C1594", background: "#F3E8F7", font: "inherit", cursor: "pointer"}}>
                            <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "999px", background: "#6C1594", color: "#FFFFFF"}}>
                              <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.9"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                <path d={a?.icon} />
                              </svg>
                            </span>
                            <span>
                              <span style={{display: "block", fontWeight: "700", color: "#2E003E"}}>
                                {hole(a?.name)}
                              </span>
                              <span style={{display: "block", fontSize: "12px", color: "#3D0752"}}>
                                {hole(a?.note)}
                              </span>
                            </span>
                          </button>
                        </>
                      ) : null}
                      {a?.notSel ? (
                        <>
                          <button type={"button"} role={"checkbox"} aria-checked={"false"} onClick={a?.toggle} style={{display: "flex", alignItems: "center", gap: "12px", textAlign: "left", padding: "14px", borderRadius: "14px", border: "1px solid #E8DFD0", background: "#FFFFFF", font: "inherit", cursor: "pointer"}}>
                            <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                              <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.9"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                <path d={a?.icon} />
                              </svg>
                            </span>
                            <span>
                              <span style={{display: "block", fontWeight: "700", color: "#1E1830"}}>
                                {hole(a?.name)}
                              </span>
                              <span style={{display: "block", fontSize: "12px", color: "#5C5470"}}>
                                {hole(a?.note)}
                              </span>
                            </span>
                          </button>
                        </>
                      ) : null}
                    </React.Fragment>
                  ))}
                </div>
                <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600", marginTop: "18px"}}>
                  {"What would you like to ask? "}
                  <span style={{fontWeight: "400", color: "#5C5470"}}>
                    {"(optional)"}
                  </span>
                  <textarea rows={"3"} placeholder={"Share your main questions so we can study your chart for them before the call."} style={{padding: "12px 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9", resize: "vertical"}} />
                </label>
              </section>
              <section style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "clamp(22px, 3vw, 32px)", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px"}}>
                  <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "999px", background: "linear-gradient(135deg, #2E003E, #6C1594)", color: "#FFFFFF", fontFamily: "'Marcellus', serif", fontSize: "15px"}}>
                    {"3"}
                  </span>
                  <h2 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(19px, 2.04vw, 23px)"}}>
                    {"Your birth details"}
                  </h2>
                </div>
                <p style={{margin: "0 0 18px 46px", fontSize: "13px", color: "#5C5470"}}>
                  {"We study your chart before the call, so please enter these exactly as on your birth record."}
                </p>
                <div style={{display: "grid", gap: "16px"}}>
                  <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                    <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                      {"First name"}
                      <input type={"text"} placeholder={"First name"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                    </label>
                    <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                      {"Last name"}
                      <input type={"text"} placeholder={"Last name"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                    </label>
                  </div>
                  <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                    <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                      {"Date of birth"}
                      <input type={"text"} placeholder={"DD / MM / YYYY"} inputMode={"numeric"} autoComplete={"off"} onInput={maskDate} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                    </label>
                    <div style={{display: "grid", gap: "6px"}}>
                      <span style={{fontSize: "13px", fontWeight: "600"}}>
                        {"Time of birth"}
                      </span>
                      <div style={{display: "flex", alignItems: "center", gap: "6px"}}>
                        <input type={"text"} aria-label={"Hours"} placeholder={"HH"} inputMode={"numeric"} maxLength={2} onInput={maskPart} style={{width: "64px", textAlign: "center", minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                        <span style={{color: "#5C5470"}}>
                          {":"}
                        </span>
                        <input type={"text"} aria-label={"Minutes"} placeholder={"MM"} inputMode={"numeric"} maxLength={2} onInput={maskPart} style={{width: "64px", textAlign: "center", minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                        <span style={{color: "#5C5470"}}>
                          {":"}
                        </span>
                        <input type={"text"} aria-label={"Seconds"} placeholder={"SS"} inputMode={"numeric"} maxLength={2} onInput={maskPart} style={{width: "64px", textAlign: "center", minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                      </div>
                    </div>
                  </div>
                  <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                    {"Place of birth"}
                    <input type={"text"} placeholder={"Start typing your town or city"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                  </label>
                  <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                    <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                      {"WhatsApp number"}
                      <input type={"tel"} placeholder={"+91"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                    </label>
                    <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                      {"Email"}
                      <input type={"email"} placeholder={"you@example.com"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                    </label>
                  </div>
                  <div style={{display: "grid", gap: "8px"}}>
                    <span style={{fontSize: "13px", fontWeight: "600"}}>
                      {"Language for the call"}
                    </span>
                    <div role={"radiogroup"} aria-label={"Language"} style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                      {(v.langs || []).map((g, $index) => (
                        <React.Fragment key={$index}>
                          {g?.sel ? (
                            <>
                              <button type={"button"} role={"radio"} aria-checked={"true"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#F3E8F7", color: "#6C1594", font: "inherit", fontWeight: "700", cursor: "pointer"}}>
                                {hole(g?.label)}
                              </button>
                            </>
                          ) : null}
                          {g?.notSel ? (
                            <>
                              <button type={"button"} role={"radio"} aria-checked={"false"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontWeight: "600", cursor: "pointer"}}>
                                {hole(g?.label)}
                              </button>
                            </>
                          ) : null}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  {v.showPartner ? (
                    <>
                      <div style={{borderTop: "1px solid #EFE6D8", paddingTop: "16px", display: "grid", gap: "14px"}}>
                        {v.noPartner ? (
                          <>
                            <button type={"button"} onClick={v.togglePartner} style={{justifySelf: "start", display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "1.5px dashed #6C1594", background: "#FFFFFF", color: "#6C1594", font: "inherit", fontWeight: "700", cursor: "pointer"}}>
                              {"+ Add your partner’s birth details (optional)"}
                            </button>
                            <p style={{margin: "0", fontSize: "12px", color: "#5C5470"}}>
                              {"For love and marriage questions, your partner’s chart lets us check compatibility too."}
                            </p>
                          </>
                        ) : null}
                        {v.hasPartner ? (
                          <>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px"}}>
                              <span style={{fontFamily: "'Marcellus', serif", fontSize: "17.5px"}}>
                                {"Partner’s birth details"}
                              </span>
                              <button type={"button"} onClick={v.togglePartner} style={{border: "0", background: "none", color: "#921A11", font: "inherit", fontWeight: "700", cursor: "pointer"}}>
                                {"Remove"}
                              </button>
                            </div>
                            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                              <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                                {"First name"}
                                <input type={"text"} placeholder={"First name"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                              </label>
                              <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                                {"Last name"}
                                <input type={"text"} placeholder={"Last name"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                              </label>
                            </div>
                            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                              <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                                {"Date of birth"}
                                <input type={"text"} placeholder={"DD / MM / YYYY"} inputMode={"numeric"} autoComplete={"off"} onInput={maskDate} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                              </label>
                              <div style={{display: "grid", gap: "6px"}}>
                                <span style={{fontSize: "13px", fontWeight: "600"}}>
                                  {"Time of birth"}
                                </span>
                                <div style={{display: "flex", alignItems: "center", gap: "6px"}}>
                                  <input type={"text"} aria-label={"Hours"} placeholder={"HH"} inputMode={"numeric"} maxLength={2} onInput={maskPart} style={{width: "64px", textAlign: "center", minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                                  <span style={{color: "#5C5470"}}>
                                    {":"}
                                  </span>
                                  <input type={"text"} aria-label={"Minutes"} placeholder={"MM"} inputMode={"numeric"} maxLength={2} onInput={maskPart} style={{width: "64px", textAlign: "center", minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                                  <span style={{color: "#5C5470"}}>
                                    {":"}
                                  </span>
                                  <input type={"text"} aria-label={"Seconds"} placeholder={"SS"} inputMode={"numeric"} maxLength={2} onInput={maskPart} style={{width: "64px", textAlign: "center", minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                                </div>
                              </div>
                            </div>
                            <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                              {"Place of birth"}
                              <input type={"text"} placeholder={"Start typing your town or city"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                            </label>
                          </>
                        ) : null}
                      </div>
                    </>
                  ) : null}
                </div>
              </section>
              <section style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "clamp(22px, 3vw, 32px)", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px"}}>
                  <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "999px", background: "linear-gradient(135deg, #2E003E, #6C1594)", color: "#FFFFFF", fontFamily: "'Marcellus', serif", fontSize: "15px"}}>
                    {"4"}
                  </span>
                  <h2 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(19px, 2.04vw, 23px)"}}>
                    {"Your preferred time"}
                  </h2>
                </div>
                <p style={{margin: "0 0 18px 46px", fontSize: "13px", color: "#5C5470"}}>
                  {"Consultations take place 7 to 10 days after booking, so we can study your chart first. Pick up to three days and the times that suit you, and we call you within 24 hours of payment to confirm your name, birth details and slot."}
                </p>
                <p style={{margin: "0 0 10px", fontSize: "13px", fontWeight: "600"}}>
                  {"Days "}
                  <span style={{fontWeight: "400", color: "#5C5470"}}>
                    {"("}
                    {hole(v.dayCount)}
                    {" of 3 chosen)"}
                  </span>
                </p>
                <div style={{display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "6px", marginBottom: "18px"}}>
                  {(v.days || []).map((d, $index) => (
                    <React.Fragment key={$index}>
                      {d?.sel ? (
                        <>
                          <button type={"button"} aria-pressed={"true"} onClick={d?.toggle} style={{flex: "none", width: "74px", padding: "10px 0", borderRadius: "14px", border: "1.5px solid #6C1594", background: "#6C1594", color: "#FFFFFF", font: "inherit", cursor: "pointer", textAlign: "center"}}>
                            <span style={{display: "block", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em"}}>
                              {hole(d?.wd)}
                            </span>
                            <span style={{display: "block", fontFamily: "'Marcellus', serif", fontSize: "21px", lineHeight: "1.2"}}>
                              {hole(d?.day)}
                            </span>
                            <span style={{display: "block", fontSize: "12px"}}>
                              {hole(d?.mon)}
                            </span>
                          </button>
                        </>
                      ) : null}
                      {d?.notSel ? (
                        <>
                          <button type={"button"} aria-pressed={"false"} onClick={d?.toggle} style={{flex: "none", width: "74px", padding: "10px 0", borderRadius: "14px", border: "1px solid #E8DFD0", background: "#FFFFFF", color: "#1E1830", font: "inherit", cursor: "pointer", textAlign: "center"}}>
                            <span style={{display: "block", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "#5C5470"}}>
                              {hole(d?.wd)}
                            </span>
                            <span style={{display: "block", fontFamily: "'Marcellus', serif", fontSize: "21px", lineHeight: "1.2"}}>
                              {hole(d?.day)}
                            </span>
                            <span style={{display: "block", fontSize: "12px", color: "#5C5470"}}>
                              {hole(d?.mon)}
                            </span>
                          </button>
                        </>
                      ) : null}
                    </React.Fragment>
                  ))}
                </div>
                <p style={{margin: "0 0 10px", fontSize: "13px", fontWeight: "600"}}>
                  {"Times"}
                </p>
                <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(160px, 100%), 1fr))", gap: "10px"}}>
                  {(v.slots || []).map((t, $index) => (
                    <React.Fragment key={$index}>
                      {t?.sel ? (
                        <>
                          <button type={"button"} aria-pressed={"true"} onClick={t?.toggle} style={{padding: "12px 14px", borderRadius: "14px", border: "1.5px solid #6C1594", background: "#F3E8F7", font: "inherit", textAlign: "left", cursor: "pointer"}}>
                            <span style={{display: "block", fontWeight: "700", color: "#2E003E"}}>
                              {hole(t?.name)}
                            </span>
                            <span style={{display: "block", fontSize: "12px", color: "#3D0752"}}>
                              {hole(t?.range)}
                            </span>
                          </button>
                        </>
                      ) : null}
                      {t?.notSel ? (
                        <>
                          <button type={"button"} aria-pressed={"false"} onClick={t?.toggle} style={{padding: "12px 14px", borderRadius: "14px", border: "1px solid #E8DFD0", background: "#FFFFFF", font: "inherit", textAlign: "left", cursor: "pointer"}}>
                            <span style={{display: "block", fontWeight: "700", color: "#1E1830"}}>
                              {hole(t?.name)}
                            </span>
                            <span style={{display: "block", fontSize: "12px", color: "#5C5470"}}>
                              {hole(t?.range)}
                            </span>
                          </button>
                        </>
                      ) : null}
                    </React.Fragment>
                  ))}
                </div>
              </section>
              <section style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "clamp(22px, 3vw, 32px)", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap", marginBottom: "6px"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                    {"Add a written report"}
                  </span>
                  <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", color: "#FFFFFF", background: "#921A11", padding: "4px 10px", borderRadius: "999px"}}>
                    {"10% OFF THE REPORT"}
                  </span>
                </div>
                <p style={{margin: "0 0 14px", fontSize: "13px", color: "#5C5470"}}>
                  {"Add the Personalised Kundli Report along with your consultation and get 10% off the report. Your report arrives in 5 to 7 working days, so you can keep and revisit your reading."}
                </p>
                {v.noReport ? (
                  <>
                    <button type={"button"} role={"checkbox"} aria-checked={"false"} onClick={v.toggleReport} style={{display: "flex", alignItems: "center", gap: "14px", width: "100%", textAlign: "left", padding: "16px 18px", borderRadius: "16px", border: "1.5px dashed #C9B3D6", background: "#FFFFFF", font: "inherit", cursor: "pointer"}}>
                      <span style={{flex: "none", width: "22px", height: "22px", boxSizing: "border-box", borderRadius: "6px", border: "1.5px solid #B9AEC6"}} />
                      <span style={{flex: "1"}}>
                        <span style={{display: "block", fontWeight: "700", color: "#1E1830"}}>
                          {"Add the Personalised Kundli Report"}
                        </span>
                        <span style={{display: "block", fontSize: "13px", color: "#5C5470"}}>
                          <span style={{textDecoration: "line-through"}}>
                            {"₹1,998"}
                          </span>
                          {" ₹999, then 10% off with your consultation"}
                        </span>
                      </span>
                    </button>
                  </>
                ) : null}
                {v.hasReport ? (
                  <>
                    <button type={"button"} role={"checkbox"} aria-checked={"true"} onClick={v.toggleReport} style={{display: "flex", alignItems: "center", gap: "14px", width: "100%", textAlign: "left", padding: "16px 18px", borderRadius: "16px", border: "1.5px solid #6C1594", background: "#F3E8F7", font: "inherit", cursor: "pointer"}}>
                      <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", borderRadius: "6px", background: "#6C1594", color: "#FFFFFF"}}>
                        <svg aria-hidden={"true"} width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                          <path d={"M5 12l5 5 9-10"} />
                        </svg>
                      </span>
                      <span style={{flex: "1"}}>
                        <span style={{display: "block", fontWeight: "700", color: "#2E003E"}}>
                          {"Report added: 10% off the report"}
                        </span>
                        <span style={{display: "block", fontSize: "13px", color: "#3D0752"}}>
                          {"Includes two questions of your choice, which we will ask you about on WhatsApp."}
                        </span>
                      </span>
                    </button>
                  </>
                ) : null}
              </section>
            </div>
            <aside className={"am-book-aside"} style={{position: "sticky", top: "24px", display: "grid", gap: "14px"}}>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "clamp(22px, 3vw, 32px)", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0 0 16px", fontFamily: "'Marcellus', serif", fontSize: "20px"}}>
                  {"Your booking"}
                </p>
                <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "13.5px", marginBottom: "4px"}}>
                  <span style={{fontWeight: "700"}}>
                    {hole(v.sessName)}
                    {" consultation"}
                  </span>
                  <span>
                    {hole(v.sessPrice)}
                  </span>
                </div>
                <p style={{margin: "0 0 14px", fontSize: "12px", color: "#5C5470"}}>
                  {"With "}
                  {hole(v.exName)}
                  {" · "}
                  {hole(v.modeLabel)}
                  {" · "}
                  {hole(v.sessLength)}
                </p>
                <div style={{display: "grid", gap: "6px", padding: "12px 14px", borderRadius: "12px", background: "#FBF7F0", marginBottom: "14px", fontSize: "13px"}}>
                  <p style={{margin: "0", display: "flex", justifyContent: "space-between", gap: "10px"}}>
                    <span style={{color: "#5C5470"}}>
                      {"Areas"}
                    </span>
                    <span style={{fontWeight: "600", textAlign: "right"}}>
                      {hole(v.areaList)}
                    </span>
                  </p>
                  <p style={{margin: "0", display: "flex", justifyContent: "space-between", gap: "10px"}}>
                    <span style={{color: "#5C5470"}}>
                      {"Preferred days"}
                    </span>
                    <span style={{fontWeight: "600", textAlign: "right"}}>
                      {hole(v.dayList)}
                    </span>
                  </p>
                  <p style={{margin: "0", display: "flex", justifyContent: "space-between", gap: "10px"}}>
                    <span style={{color: "#5C5470"}}>
                      {"Times"}
                    </span>
                    <span style={{fontWeight: "600", textAlign: "right"}}>
                      {hole(v.slotList)}
                    </span>
                  </p>
                </div>
                {v.hasReport ? (
                  <>
                    <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "13.5px", marginBottom: "10px"}}>
                      <span>
                        {"Personalised Kundli Report"}
                      </span>
                      <span>
                        {"₹999"}
                      </span>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "13.5px", color: "#921A11", fontWeight: "700", marginBottom: "14px"}}>
                      <span>
                        {"Report discount (10%)"}
                      </span>
                      <span>
                        {"−"}
                        {hole(v.saving)}
                      </span>
                    </div>
                  </>
                ) : null}
                <div style={{height: "1px", background: "#EFE6D8", marginBottom: "14px"}} />
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "20px"}}>
                  <span style={{fontWeight: "700"}}>
                    {"Total"}
                  </span>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "27px"}}>
                    {hole(v.total)}
                  </span>
                </div>
                <PayButton as="a" order={{ productId: consultProduct(this.state) }} href={"#"} style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "54px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "14.5px", textDecoration: "none"}}>
                  <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <rect x={"5"} y={"11"} width={"14"} height={"10"} rx={"2"} />
                    <path d={"M8 11V8a4 4 0 0 1 8 0v3"} />
                  </svg>
                  {"Pay "}
                  {hole(v.total)}
                  {" securely"}
                </PayButton>
                <p style={{margin: "12px 0 0", textAlign: "center", fontSize: "12px", color: "#5C5470"}}>
                  {"UPI, cards and net banking via Razorpay"}
                </p>
                <p style={{margin: "6px 0 0", textAlign: "center", fontSize: "10.5px", color: "#736B8A"}}>
                  {"Payments are non-refundable, except for delays from our side."}
                </p>
              </div>
              <div style={{background: "#F3E8F7", borderRadius: "18px", padding: "18px 20px", display: "grid", gap: "10px", fontSize: "13px", color: "#3D0752"}}>
                <p style={{margin: "0", display: "flex", gap: "10px"}}>
                  <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "2px"}}>
                    <path d={"M5 12l5 5 9-10"} />
                  </svg>
                  {"We call you within 24 hours of payment to confirm your name, birth details and slot."}
                </p>
                <p style={{margin: "0", display: "flex", gap: "10px"}}>
                  <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "2px"}}>
                    <path d={"M5 12l5 5 9-10"} />
                  </svg>
                  {"Your chart is studied before the call."}
                </p>
                <p style={{margin: "0", display: "flex", gap: "10px"}}>
                  <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "2px"}}>
                    <path d={"M5 12l5 5 9-10"} />
                  </svg>
                  {"Need a different time? Just message us on WhatsApp."}
                </p>
              </div>
            </aside>
          </div>
        </div>
        <footer style={{borderTop: "1px solid #E8DFD0", background: "#FFFFFF"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", fontSize: "13px", color: "#5C5470"}}>
            <span>
              {"Need help? "}
              <a href={"https://wa.me/919129237566"} style={{fontWeight: "700"}}>
                {"WhatsApp us at +91 91292 37566"}
              </a>
            </span>
            <span style={{display: "flex", flexWrap: "wrap", gap: "18px"}}>
              <a href={"/policies/privacy"} style={{color: "#5C5470"}}>
                {"Privacy policy"}
              </a>
              <a href={"/policies/refunds"} style={{color: "#5C5470"}}>
                {"Refund policy"}
              </a>
              <a href={"/policies/delivery"} style={{color: "#5C5470"}}>
                {"Delivery policy"}
              </a>
              <a href={"/policies/terms"} style={{color: "#5C5470"}}>
                {"Terms"}
              </a>
              <span>
                {"© 2026 Ahllya Mystic"}
              </span>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

ConsultPage.prototype.componentDidMount = function componentDidMount() {
  // Plan cards on the home page link here with ?expert=man|san&sess=one|two|three|all.
  var q = readUrlState(['expert', 'sess']);
  var pick = { __now: Date.now() };
  if (q.expert === 'man' || q.expert === 'san') pick.expert = q.expert;
  if (['one', 'two', 'three', 'all'].indexOf(q.sess) >= 0) pick.sess = q.sess;
  this.setState(pick);
};

export default ConsultPage;
