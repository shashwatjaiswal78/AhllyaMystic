"use client";
/* eslint-disable */
// Generated from the design file LalKitabCheckout.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { sx, hole } from "./sx";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState, maskDate, maskTime, maskTimeHM, maskPart } from "./wire";

class CheckoutLalKitabPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({ gender: 'Female', timeUnknown: false, picks: [], lang: 'English', call: false, callMode: 'man' }, props && props.initialState);
  }
  renderVals() {
    // Filled from the report the visitor came from.
    var r = { name: 'Lal Kitab Report', back: 'Lal Kitab Report', mrp: '₹1,998', price: '₹999', saving: '₹999', pages: 'PDF report' };
    var g = this.state.gender;
    var genders = ['Female', 'Male', 'Other'].map((x) => ({ label: x, sel: g === x, notSel: g !== x, pick: () => this.setState({ gender: x }) }));
    var lg = this.state.lang;
    var langs = ['English', 'Hindi'].map((x) => ({ label: x, sel: lg === x, notSel: lg !== x, pick: () => this.setState({ lang: x }) }));
    var picks = this.state.picks || [];
    var bank = [
      { title: 'Repeating problems', items: ['Why do the same problems keep coming back?', 'Which planet is troubling me the most?'] },
      { title: 'Career and money', items: ['When will my career settle?', 'Why is money not staying with me?', 'Is business or a job better for me?'] },
      { title: 'Marriage and family', items: ['Why is my marriage getting delayed?', 'How can I bring peace at home?'] },
      { title: 'Health', items: ['Which remedy will help my health?'] },
      { title: 'Remedies', items: ['Which remedy should I start first?', 'What should I never donate?'] }
    ];
    var toggle = (t) => {
      var cur = (this.state.picks || []).slice();
      var at = cur.indexOf(t);
      if (at >= 0) cur.splice(at, 1); else cur.push(t);
      this.setState({ picks: cur });
    };
    var qGroups = bank.map((gr) => ({ title: gr.title, items: gr.items.map((t) => ({ text: t, sel: picks.indexOf(t) >= 0, notSel: picks.indexOf(t) < 0, toggle: () => toggle(t) })) }));
    var nSlots = Math.max(2, picks.length);
    var slots = Array.from({ length: nSlots }, (_, i) => ({ num: i + 1, text: (picks[i] || '') + (i >= 2 && picks[i] ? '  (+₹159)' : ''), filled: !!picks[i], empty: !picks[i], remove: () => toggle(picks[i]) }));
    var extra = Math.max(0, picks.length - 2);
    var rs = (x) => '₹' + x.toLocaleString('en-IN');
    var CALL = { man: { label: 'Maneswita · Expert', who: 'Maneswita', price: 2301 }, san: { label: 'Ahalya Sangeeta · Senior Expert', who: 'Ahalya Sangeeta', price: 4001 } };
    var hasCall = !!this.state.call, cm = CALL[this.state.callMode] ? this.state.callMode : 'man';
    var callModes = ['man', 'san'].map((k) => ({ label: CALL[k].label, price: rs(CALL[k].price), sel: cm === k, notSel: cm !== k, pick: () => this.setState({ callMode: k }) }));
    var subtotal = 999 + extra * 159 + (hasCall ? CALL[cm].price : 0);
    var saving = hasCall ? Math.round(subtotal * 0.1) : 0;
    var unknown = !!this.state.timeUnknown;
    return {
      r: r, genders: genders, langs: langs, langLabel: lg + ' edition',
      qGroups: qGroups, slots: slots, qCount: picks.length, extraCount: extra, extraPrice: rs(extra * 159), total: rs(subtotal - saving),
      hasCall: hasCall, noCall: !hasCall, callModes: callModes, callLabel: 'Call with ' + CALL[cm].who + ' (20 min)', callPrice: rs(CALL[cm].price), bundleSaving: rs(saving),
      toggleCall: () => this.setState({ call: !this.state.call }),
      qStatus: picks.length <= 2 ? picks.length + ' of 2 included' : '2 included + ' + extra + ' extra',
      timeUnknown: unknown, timeKnown: !unknown, timeUnknownAria: unknown ? 'true' : 'false',
      toggleTime: () => this.setState({ timeUnknown: !this.state.timeUnknown })
    };
  }
}

CheckoutLalKitabPage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="LalKitabCheckout" style={{ display: "contents" }}>
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
          <a href={"/report/lal-kitab"} style={{display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13.5px", fontWeight: "600", textDecoration: "none", marginBottom: "22px"}}>
            <svg aria-hidden={"true"} width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
              <path d={"M15 6l-6 6 6 6"} />
            </svg>
            {"Back to "}
            {hole(v.r?.back)}
          </a>
          <div style={{display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px"}}>
            <h1 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 3.06vw, 37px)", lineHeight: "1.15"}}>
              {"Order your report"}
            </h1>
            <ol aria-label={"Checkout steps"} style={{margin: "0", padding: "0", listStyle: "none", display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", fontWeight: "600"}}>
              <li style={{display: "flex", alignItems: "center", gap: "8px", color: "#6C1594"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "26px", height: "26px", borderRadius: "999px", background: "#6C1594", color: "#FFFFFF", fontSize: "12px"}}>
                  {"1"}
                </span>
                {"Your details"}
              </li>
              <li aria-hidden={"true"} style={{width: "28px", height: "1px", background: "#D9CEBD"}} />
              <li style={{display: "flex", alignItems: "center", gap: "8px", color: "#736B8A"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "26px", height: "26px", borderRadius: "999px", border: "1.5px solid #C9B3D6", fontSize: "12px"}}>
                  {"2"}
                </span>
                {"Payment"}
              </li>
            </ol>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 24px 88px"}}>
          <div className={"am-order"} style={{display: "grid", gridTemplateColumns: "minmax(0, 1.55fr) minmax(0, 1fr)", gap: "28px", alignItems: "start"}}>
            <form style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "clamp(22px, 3vw, 36px)", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
              <p style={{margin: "0 0 8px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Step 1 of 2"}
              </p>
              <h2 style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(24px, 2.55vw, 30px)", lineHeight: "1.2"}}>
                {"Your birth details"}
              </h2>
              <p style={{margin: "0 0 26px", fontSize: "13.5px", color: "#5C5470"}}>
                {"Enter the details exactly as on your birth record. We read your chart from these, so accuracy matters."}
              </p>
              <div style={{display: "grid", gap: "18px"}}>
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
                <div style={{display: "grid", gap: "8px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600"}}>
                    {"Gender"}
                  </span>
                  <div role={"radiogroup"} aria-label={"Gender"} style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                    {(v.genders || []).map((g, $index) => (
                      <React.Fragment key={$index}>
                        {g?.sel ? (
                          <>
                            <button type={"button"} role={"radio"} aria-checked={"true"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 22px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#F3E8F7", color: "#6C1594", font: "inherit", fontWeight: "700", cursor: "pointer"}}>
                              {hole(g?.label)}
                            </button>
                          </>
                        ) : null}
                        {g?.notSel ? (
                          <>
                            <button type={"button"} role={"radio"} aria-checked={"false"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 22px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontWeight: "600", cursor: "pointer"}}>
                              {hole(g?.label)}
                            </button>
                          </>
                        ) : null}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                  {"Date of birth"}
                  <input type={"text"} placeholder={"DD / MM / YYYY"} inputMode={"numeric"} autoComplete={"off"} onInput={maskDate} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                </label>
                <div style={{display: "grid", gap: "8px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600"}}>
                    {"Time of birth"}
                  </span>
                  {v.timeKnown ? (
                    <>
                      <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                        <input type={"text"} aria-label={"Hours"} placeholder={"HH"} inputMode={"numeric"} maxLength={2} onInput={maskPart} style={{width: "72px", minHeight: "48px", padding: "0 12px", textAlign: "center", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", background: "#FFFDF9"}} />
                        <span style={{color: "#5C5470"}}>
                          {":"}
                        </span>
                        <input type={"text"} aria-label={"Minutes"} placeholder={"MM"} inputMode={"numeric"} maxLength={2} onInput={maskPart} style={{width: "72px", minHeight: "48px", padding: "0 12px", textAlign: "center", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", background: "#FFFDF9"}} />
                        <span style={{color: "#5C5470"}}>
                          {":"}
                        </span>
                        <input type={"text"} aria-label={"Seconds"} placeholder={"SS"} inputMode={"numeric"} maxLength={2} onInput={maskPart} style={{width: "72px", minHeight: "48px", padding: "0 12px", textAlign: "center", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", background: "#FFFDF9"}} />
                        <span style={{fontSize: "12px", color: "#5C5470", marginLeft: "4px"}}>
                          {"24-hour"}
                        </span>
                      </div>
                    </>
                  ) : null}
                  <button type={"button"} role={"checkbox"} aria-checked={v.timeUnknownAria} onClick={v.toggleTime} style={{display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "start", padding: "4px 0", border: "0", background: "none", font: "inherit", fontSize: "13px", color: "#1E1830", cursor: "pointer"}}>
                    {v.timeUnknown ? (
                      <>
                        <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "6px", background: "#6C1594", color: "#FFFFFF"}}>
                          <svg aria-hidden={"true"} width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                            <path d={"M5 12l5 5 9-10"} />
                          </svg>
                        </span>
                      </>
                    ) : null}
                    {v.timeKnown ? (
                      <>
                        <span style={{width: "20px", height: "20px", boxSizing: "border-box", borderRadius: "6px", border: "1.5px solid #B9AEC6", background: "#FFFFFF"}} />
                      </>
                    ) : null}
                    {"\nI don’t know my exact birth time\n"}
                  </button>
                  {v.timeUnknown ? (
                    <>
                      <p style={{margin: "0", background: "#F3E8F7", borderRadius: "12px", padding: "12px 14px", fontSize: "13px", lineHeight: "1.5", color: "#3D0752"}}>
                        {"We can still prepare your report from your date and place of birth. Your lagna and house positions depend on the exact time, so predictions tied to them will be less precise. If you know a rough time, such as morning or evening, add it in the note below."}
                      </p>
                    </>
                  ) : null}
                </div>
                <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                  {"Place of birth"}
                  <input type={"text"} placeholder={"Start typing your town or city"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                </label>
                <div style={{display: "grid", gap: "8px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600"}}>
                    {"Report language"}
                  </span>
                  <div role={"radiogroup"} aria-label={"Report language"} style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                    {(v.langs || []).map((g, $index) => (
                      <React.Fragment key={$index}>
                        {g?.sel ? (
                          <>
                            <button type={"button"} role={"radio"} aria-checked={"true"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 22px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#F3E8F7", color: "#6C1594", font: "inherit", fontWeight: "700", cursor: "pointer"}}>
                              {hole(g?.label)}
                            </button>
                          </>
                        ) : null}
                        {g?.notSel ? (
                          <>
                            <button type={"button"} role={"radio"} aria-checked={"false"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 22px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontWeight: "600", cursor: "pointer"}}>
                              {hole(g?.label)}
                            </button>
                          </>
                        ) : null}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div style={{height: "1px", background: "#EFE6D8", margin: "4px 0"}} />
                <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                  <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                    {"Email"}
                    <input type={"email"} placeholder={"you@example.com"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                  </label>
                  <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600"}}>
                    {"WhatsApp number"}
                    <input type={"tel"} placeholder={"+91"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                  </label>
                </div>
                <p style={{margin: "-8px 0 0", fontSize: "12px", color: "#5C5470"}}>
                  {"Your report will be sent to both."}
                </p>
                <div style={{height: "1px", background: "#EFE6D8", margin: "4px 0"}} />
                <div style={{display: "grid", gap: "10px"}}>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap"}}>
                    <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                      {"Your questions"}
                    </span>
                    <span style={{fontSize: "12px", fontWeight: "700", color: "#6C1594"}}>
                      {hole(v.qStatus)}
                    </span>
                  </div>
                  <p style={{margin: "0", fontSize: "13px", color: "#5C5470"}}>
                    {"Two questions are included. Each is answered on its own page with the Lal Kitab reason behind it and a simple remedy. Want more? Add as many as you like at ₹159 each. Want more? Add as many as you like at ₹159 each."}
                  </p>
                  <div style={{display: "grid", gap: "8px"}}>
                    {(v.slots || []).map((q, $index) => (
                      <React.Fragment key={$index}>
                        {q?.filled ? (
                          <>
                            <div style={{display: "flex", alignItems: "center", gap: "12px", background: "#F3E8F7", border: "1.5px solid #6C1594", borderRadius: "12px", padding: "10px 12px"}}>
                              <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "999px", background: "#6C1594", color: "#FFFFFF", fontWeight: "700", fontSize: "13px"}}>
                                {hole(q?.num)}
                              </span>
                              <span style={{flex: "1", fontSize: "13.5px", fontWeight: "600", color: "#2E003E"}}>
                                {hole(q?.text)}
                              </span>
                              <button type={"button"} onClick={q?.remove} aria-label={"Remove question"} style={{flex: "none", width: "32px", height: "32px", borderRadius: "999px", border: "1px solid #C9B3D6", background: "#FFFFFF", color: "#6C1594", cursor: "pointer", font: "inherit", fontSize: "14.5px", lineHeight: "1"}}>
                                {"×"}
                              </button>
                            </div>
                          </>
                        ) : null}
                        {q?.empty ? (
                          <>
                            <div style={{display: "flex", alignItems: "center", gap: "12px", border: "1.5px dashed #D9CEBD", borderRadius: "12px", padding: "10px 12px", color: "#736B8A"}}>
                              <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "999px", border: "1.5px dashed #C9B3D6", fontWeight: "700", fontSize: "13px"}}>
                                {hole(q?.num)}
                              </span>
                              <span style={{fontSize: "13.5px"}}>
                                {"Pick a question below or write your own"}
                              </span>
                            </div>
                          </>
                        ) : null}
                      </React.Fragment>
                    ))}
                  </div>
                  <div style={{display: "grid", gap: "14px", marginTop: "4px"}}>
                    {(v.qGroups || []).map((grp, $index) => (
                      <React.Fragment key={$index}>
                        <div>
                          <p style={{margin: "0 0 8px", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: "700", color: "#921A11"}}>
                            {hole(grp?.title)}
                          </p>
                          <div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                            {(grp?.items || []).map((it, $index) => (
                              <React.Fragment key={$index}>
                                {it?.sel ? (
                                  <>
                                    <button type={"button"} onClick={it?.toggle} aria-pressed={"true"} style={{textAlign: "left", padding: "8px 14px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#6C1594", color: "#FFFFFF", font: "inherit", fontSize: "13px", fontWeight: "600", cursor: "pointer"}}>
                                      {hole(it?.text)}
                                    </button>
                                  </>
                                ) : null}
                                {it?.notSel ? (
                                  <>
                                    <button type={"button"} onClick={it?.toggle} aria-pressed={"false"} style={{textAlign: "left", padding: "8px 14px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontSize: "13px", cursor: "pointer"}}>
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
                  <label style={{display: "grid", gap: "6px", fontSize: "13px", fontWeight: "600", marginTop: "4px"}}>
                    {"Or write your own question"}
                    <textarea rows={"2"} placeholder={"For example: should I move abroad for work in the next two years?"} style={{padding: "12px 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9", resize: "vertical"}} />
                  </label>
                </div>
              </div>
              <div style={{marginTop: "22px", borderTop: "1px solid #EFE6D8", paddingTop: "22px"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap", marginBottom: "6px"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                    {"Add a consultation call"}
                  </span>
                  <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", color: "#FFFFFF", background: "#921A11", padding: "4px 10px", borderRadius: "999px"}}>
                    {"SAVE 10% ON YOUR ORDER"}
                  </span>
                </div>
                <p style={{margin: "0 0 14px", fontSize: "13px", color: "#5C5470"}}>
                  {"Add a consultation call along with your report now and get an extra 10% off the total bundle. We will fix your consultation time on WhatsApp once your report is delivered."}
                </p>
                {v.noCall ? (
                  <>
                    <button type={"button"} role={"checkbox"} aria-checked={"false"} onClick={v.toggleCall} style={{display: "flex", alignItems: "center", gap: "14px", width: "100%", textAlign: "left", padding: "16px 18px", borderRadius: "16px", border: "1.5px dashed #C9B3D6", background: "#FFFFFF", font: "inherit", cursor: "pointer"}}>
                      <span style={{flex: "none", width: "22px", height: "22px", boxSizing: "border-box", borderRadius: "6px", border: "1.5px solid #B9AEC6"}} />
                      <span style={{flex: "1"}}>
                        <span style={{display: "block", fontWeight: "700", color: "#1E1830"}}>
                          {"Add a consultation call to my report"}
                        </span>
                        <span style={{display: "block", fontSize: "13px", color: "#5C5470"}}>
                          {"A 20 minute call on one area, from ₹2,301, then 10% off everything"}
                        </span>
                      </span>
                    </button>
                  </>
                ) : null}
                {v.hasCall ? (
                  <>
                    <div style={{borderRadius: "16px", border: "1.5px solid #6C1594", background: "#F3E8F7", padding: "16px 18px", display: "grid", gap: "14px"}}>
                      <button type={"button"} role={"checkbox"} aria-checked={"true"} onClick={v.toggleCall} style={{display: "flex", alignItems: "center", gap: "14px", width: "100%", textAlign: "left", padding: "0", border: "0", background: "none", font: "inherit", cursor: "pointer"}}>
                        <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", borderRadius: "6px", background: "#6C1594", color: "#FFFFFF"}}>
                          <svg aria-hidden={"true"} width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                            <path d={"M5 12l5 5 9-10"} />
                          </svg>
                        </span>
                        <span style={{flex: "1", fontWeight: "700", color: "#2E003E"}}>
                          {"Consultation added: extra 10% off the total bundle"}
                        </span>
                      </button>
                      <p style={{margin: "0", fontSize: "13px", color: "#3D0752"}}>
                        {"Choose who you would like to speak with. The call is 20 minutes on one area of your life, by audio or video."}
                      </p>
                      <div role={"radiogroup"} aria-label={"Expert"} style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))", gap: "10px"}}>
                        {(v.callModes || []).map((c, $index) => (
                          <React.Fragment key={$index}>
                            {c?.sel ? (
                              <>
                                <button type={"button"} role={"radio"} aria-checked={"true"} onClick={c?.pick} style={{textAlign: "left", padding: "12px 14px", borderRadius: "12px", border: "1.5px solid #6C1594", background: "#FFFFFF", font: "inherit", cursor: "pointer"}}>
                                  <span style={{display: "block", fontWeight: "700", color: "#6C1594"}}>
                                    {hole(c?.label)}
                                  </span>
                                  <span style={{display: "block", fontSize: "13px", color: "#5C5470"}}>
                                    {hole(c?.price)}
                                  </span>
                                </button>
                              </>
                            ) : null}
                            {c?.notSel ? (
                              <>
                                <button type={"button"} role={"radio"} aria-checked={"false"} onClick={c?.pick} style={{textAlign: "left", padding: "12px 14px", borderRadius: "12px", border: "1px solid #D9CEBD", background: "#FFFFFF", font: "inherit", cursor: "pointer"}}>
                                  <span style={{display: "block", fontWeight: "600", color: "#1E1830"}}>
                                    {hole(c?.label)}
                                  </span>
                                  <span style={{display: "block", fontSize: "13px", color: "#5C5470"}}>
                                    {hole(c?.price)}
                                  </span>
                                </button>
                              </>
                            ) : null}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </form>
            <aside className={"am-order-aside"} style={{position: "sticky", top: "24px", display: "grid", gap: "14px"}}>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "26px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0 0 16px", fontFamily: "'Marcellus', serif", fontSize: "20px"}}>
                  {"Order summary"}
                </p>
                <div style={{display: "flex", gap: "14px", alignItems: "center", marginBottom: "18px", paddingBottom: "18px", borderBottom: "1px solid #EFE6D8"}}>
                  <div aria-hidden={"true"} style={{flex: "none", position: "relative", overflow: "hidden", width: "64px", height: "80px", borderRadius: "8px", background: "linear-gradient(160deg, #2E003E 0%, #6C1594 100%)", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <img src={"/images/9f12ecbbc1351b2a79d2c5c2543824a3.png"} alt={""} style={{width: "48px", height: "48px"}} />
                  </div>
                  <div style={{minWidth: "0"}}>
                    <p style={{margin: "0", fontWeight: "700"}}>
                      {hole(v.r?.name)}
                    </p>
                    <p style={{margin: "2px 0 0", fontSize: "12px", color: "#5C5470"}}>
                      {hole(v.r?.pages)}
                      {" · "}
                      {hole(v.langLabel)}
                      {" · PDF on email and WhatsApp"}
                    </p>
                  </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "13.5px", marginBottom: "10px"}}>
                  <span>
                    {"Report price"}
                  </span>
                  <span>
                    {hole(v.r?.mrp)}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "13.5px", color: "#6C1594", fontWeight: "600", marginBottom: "10px"}}>
                  <span>
                    {"Discount (50% off)"}
                  </span>
                  <span>
                    {"−"}
                    {hole(v.r?.saving)}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "13.5px", marginBottom: "10px"}}>
                  <span>
                    {"2 personal questions"}
                  </span>
                  <span>
                    {"Included"}
                  </span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "13.5px", marginBottom: "10px"}}>
                  <span>
                    {"Extra questions ("}
                    {hole(v.extraCount)}
                    {" × ₹159)"}
                  </span>
                  <span>
                    {hole(v.extraPrice)}
                  </span>
                </div>
                {v.hasCall ? (
                  <>
                    <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "13.5px", marginBottom: "10px"}}>
                      <span>
                        {hole(v.callLabel)}
                      </span>
                      <span>
                        {hole(v.callPrice)}
                      </span>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "13.5px", color: "#921A11", fontWeight: "700", marginBottom: "16px"}}>
                      <span>
                        {"Bundle discount (10%)"}
                      </span>
                      <span>
                        {"−"}
                        {hole(v.bundleSaving)}
                      </span>
                    </div>
                  </>
                ) : null}
                <div style={{height: "1px", background: "#EFE6D8", marginBottom: "16px"}} />
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "20px"}}>
                  <span style={{fontWeight: "700"}}>
                    {"Total"}
                  </span>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "27px"}}>
                    {hole(v.total)}
                  </span>
                </div>
                <PayButton as="a" order={{ productId: 'report-lal-kitab', extraQuestions: Math.max(0, (this.state.picks || []).length - 2), call: (this.state.call ? (this.state.callMode === 'san' ? 'san' : 'man') : null) }} href={"#"} style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "54px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "14.5px", textDecoration: "none"}}>
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
                  {"We call you within 24 hours of payment to confirm your name and birth details, so your analysis is accurate."}
                </p>
                <p style={{margin: "0", display: "flex", gap: "10px"}}>
                  <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "2px"}}>
                    <path d={"M5 12l5 5 9-10"} />
                  </svg>
                  {"Your report arrives in 5 to 7 working days."}
                </p>
                <p style={{margin: "0", display: "flex", gap: "10px"}}>
                  <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "2px"}}>
                    <path d={"M5 12l5 5 9-10"} />
                  </svg>
                  {"Your birth details stay private and are never shared."}
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

export default CheckoutLalKitabPage;
