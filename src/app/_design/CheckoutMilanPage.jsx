"use client";
/* eslint-disable */
// Generated from the design file MilanCheckout.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { sx, hole } from "./sx";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState, maskDate, maskTime, maskTimeHM, maskPart } from "./wire";

class CheckoutMilanPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({ pkg: 'report', g1: 'Female', g2: 'Male', stage: 'Planning to marry', lang: 'English', callLang: 'Hindi', callMode: 'Audio', slot: '4 to 7 pm' }, props && props.initialState);
  }
  renderVals() {
    var P = [
      { id: 'report', name: 'Couple Kundli Milan Report', price: '₹3,399', mrp: '₹6,798', hasMrp: true, saving: '₹3,399', format: 'Written report', gets: ['Both personal kundlis and planet details', 'Horoscope compatibility and Guna Milan', 'Love, money, children and marriage stability', 'Doshas and remedies'] },
      { id: 'call', name: 'Couple Kundli Milan Report and Consultation', price: '₹6,199', mrp: '', hasMrp: false, saving: '', format: 'Report + consultation call', gets: ['Everything in the report', 'A consultation call to talk it through', 'Help choosing and doing your remedies'] }
    ];
    var c = P.filter((p) => p.id === this.state.pkg)[0] || P[0];
    var one = (key, opts) => opts.map((x) => ({ label: x, sel: this.state[key] === x, notSel: this.state[key] !== x, pick: () => { var o = {}; o[key] = x; this.setState(o); } }));
    var hasCall = c.id === 'call';
    return {
      pkgs: P.map((p) => ({ name: p.name, format: p.format, price: p.price, mrp: p.mrp, hasMrp: p.hasMrp, sel: p.id === c.id, notSel: p.id !== c.id, pick: () => this.setState({ pkg: p.id }) })),
      cur: c,
      g1: one('g1', ['Female', 'Male']), g2: one('g2', ['Female', 'Male']),
      stages: one('stage', ['Just exploring', 'Planning to marry', 'Already married']),
      langs: one('lang', ['English', 'Hindi']), langLabel: this.state.lang + ' edition',
      hasCall: hasCall, callLangs: one('callLang', ['Hindi', 'English']), callModes: one('callMode', ['Audio', 'Video']), slots: one('slot', ['11 am to 1 pm', '1 to 4 pm', '4 to 7 pm']),
      deliveryLine: hasCall ? 'Your report arrives in 5 to 7 working days, and we fix your call time on WhatsApp.' : 'Your report arrives as a PDF in 5 to 7 working days.'
    };
  }
}

CheckoutMilanPage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="MilanCheckout" style={{ display: "contents" }}>
      <div style={{fontFamily: "'Manrope', system-ui, sans-serif", color: "#1E1830", background: "#FBF7F0", fontSize: "16px", lineHeight: "1.6"}}>
        <header style={{background: "linear-gradient(90deg, #2E003E 0%, #4A0A66 100%)", borderBottom: "1px solid rgba(255,255,255,0.08)"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px"}}>
            <a href={"/"} aria-label={"Ahllya Mystic home"} style={{display: "block"}}>
              <img src={"/images/f0424906cf2ed307d839fd952ac77981.png"} alt={"Ahllya Mystic"} style={{height: "44px", width: "auto", display: "block"}} />
            </a>
            <span style={{display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#EADFF2"}}>
              <svg aria-hidden={"true"} width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <rect x={"5"} y={"11"} width={"14"} height={"10"} rx={"2"} />
                <path d={"M8 11V8a4 4 0 0 1 8 0v3"} />
              </svg>
              {"Secure checkout"}
            </span>
          </div>
        </header>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "28px 24px 28px"}}>
          <a href={"/report/milan"} style={{display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "15px", fontWeight: "600", textDecoration: "none", marginBottom: "22px"}}>
            <svg aria-hidden={"true"} width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
              <path d={"M15 6l-6 6 6 6"} />
            </svg>
            {"Back to Couple Kundli Milan"}
          </a>
          <div style={{display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px"}}>
            <h1 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15"}}>
              {"Order your Kundli Milan"}
            </h1>
            <ol aria-label={"Checkout steps"} style={{margin: "0", padding: "0", listStyle: "none", display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "600"}}>
              <li style={{display: "flex", alignItems: "center", gap: "8px", color: "#6C1594"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "26px", height: "26px", borderRadius: "999px", background: "#6C1594", color: "#FFFFFF", fontSize: "13px"}}>
                  {"1"}
                </span>
                {"Your details"}
              </li>
              <li aria-hidden={"true"} style={{width: "28px", height: "1px", background: "#D9CEBD"}} />
              <li style={{display: "flex", alignItems: "center", gap: "8px", color: "#736B8A"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "26px", height: "26px", borderRadius: "999px", border: "1.5px solid #C9B3D6", fontSize: "13px"}}>
                  {"2"}
                </span>
                {"Payment"}
              </li>
            </ol>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 24px 88px"}}>
          <div className={"am-order"} style={{display: "grid", gridTemplateColumns: "minmax(0, 1.55fr) minmax(0, 1fr)", gap: "28px", alignItems: "start"}}>
            <form style={{display: "grid", gap: "20px"}}>
              <section style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "clamp(22px, 3vw, 36px)", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0 0 8px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                  {"Step 1 · Your package"}
                </p>
                <h2 style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(26px, 2.6vw, 32px)", lineHeight: "1.2"}}>
                  {"How would you like your match read?"}
                </h2>
                <p style={{margin: "0 0 22px", fontSize: "15px", color: "#5C5470"}}>
                  {"Your charts may show compatibility, but a consultation deepens the insight."}
                </p>
                <div role={"radiogroup"} aria-label={"Package"} style={{display: "grid", gap: "8px"}}>
                  {(v.pkgs || []).map((p, $index) => (
                    <React.Fragment key={$index}>
                      {p?.sel ? (
                        <>
                          <button type={"button"} role={"radio"} aria-checked={"true"} onClick={p?.pick} style={{display: "flex", alignItems: "center", gap: "14px", width: "100%", textAlign: "left", padding: "16px 18px", borderRadius: "14px", border: "1.5px solid #6C1594", background: "#F3E8F7", font: "inherit", cursor: "pointer"}}>
                            <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", borderRadius: "999px", background: "#6C1594"}}>
                              <span style={{width: "8px", height: "8px", borderRadius: "999px", background: "#FFFFFF"}} />
                            </span>
                            <span style={{flex: "1", minWidth: "0"}}>
                              <span style={{display: "block", fontWeight: "700", color: "#2E003E"}}>
                                {hole(p?.name)}
                              </span>
                              <span style={{display: "block", fontSize: "14px", color: "#5C5470"}}>
                                {hole(p?.format)}
                              </span>
                            </span>
                            <span style={{flex: "none", textAlign: "right"}}>
                              {p?.hasMrp ? (
                                <>
                                  <span style={{display: "block", fontSize: "13px", color: "#736B8A", textDecoration: "line-through"}}>
                                    {hole(p?.mrp)}
                                  </span>
                                </>
                              ) : null}
                              <span style={{display: "block", fontFamily: "'Marcellus', serif", fontSize: "22px", color: "#2E003E"}}>
                                {hole(p?.price)}
                              </span>
                            </span>
                          </button>
                        </>
                      ) : null}
                      {p?.notSel ? (
                        <>
                          <button type={"button"} role={"radio"} aria-checked={"false"} onClick={p?.pick} style={{display: "flex", alignItems: "center", gap: "14px", width: "100%", textAlign: "left", padding: "16px 18px", borderRadius: "14px", border: "1px solid #D9CEBD", background: "#FFFFFF", font: "inherit", cursor: "pointer"}}>
                            <span style={{flex: "none", width: "22px", height: "22px", boxSizing: "border-box", borderRadius: "999px", border: "1.5px solid #B9AEC6"}} />
                            <span style={{flex: "1", minWidth: "0"}}>
                              <span style={{display: "block", fontWeight: "600", color: "#1E1830"}}>
                                {hole(p?.name)}
                              </span>
                              <span style={{display: "block", fontSize: "14px", color: "#5C5470"}}>
                                {hole(p?.format)}
                              </span>
                            </span>
                            <span style={{flex: "none", textAlign: "right"}}>
                              {p?.hasMrp ? (
                                <>
                                  <span style={{display: "block", fontSize: "13px", color: "#736B8A", textDecoration: "line-through"}}>
                                    {hole(p?.mrp)}
                                  </span>
                                </>
                              ) : null}
                              <span style={{display: "block", fontFamily: "'Marcellus', serif", fontSize: "22px", color: "#1E1830"}}>
                                {hole(p?.price)}
                              </span>
                            </span>
                          </button>
                        </>
                      ) : null}
                    </React.Fragment>
                  ))}
                </div>
              </section>
              <section style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "clamp(22px, 3vw, 36px)", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0 0 8px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                  {"Step 2 · Birth details"}
                </p>
                <h2 style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(26px, 2.6vw, 32px)", lineHeight: "1.2"}}>
                  {"Tell us about both of you"}
                </h2>
                <p style={{margin: "0 0 22px", fontSize: "15px", color: "#5C5470"}}>
                  {"Enter each person’s details exactly as on their birth record. We read both charts from these, so accuracy matters."}
                </p>
                <div style={{display: "grid", gap: "16px"}}>
                  <div style={{display: "grid", gap: "16px", background: "#FBF7F0", border: "1px solid #EFE6D8", borderRadius: "18px", padding: "20px"}}>
                    <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                      <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "999px", background: "#6C1594", color: "#FFFFFF", fontWeight: "700"}}>
                        {"1"}
                      </span>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                        {"Partner one"}
                      </span>
                    </div>
                    <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                      <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                        {"First name"}
                        <input type={"text"} placeholder={"First name"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                      </label>
                      <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                        {"Last name"}
                        <input type={"text"} placeholder={"Last name"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                      </label>
                    </div>
                    <div style={{display: "grid", gap: "8px"}}>
                      <span style={{fontSize: "14px", fontWeight: "600", display: "grid", gap: "2px"}}>
                        {"Gender"}
                      </span>
                      <div role={"radiogroup"} aria-label={"Gender"} style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                        {(v.g1 || []).map((g, $index) => (
                          <React.Fragment key={$index}>
                            {g?.sel ? (
                              <>
                                <button type={"button"} role={"radio"} aria-checked={"true"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#F3E8F7", color: "#6C1594", font: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer"}}>
                                  {hole(g?.label)}
                                </button>
                              </>
                            ) : null}
                            {g?.notSel ? (
                              <>
                                <button type={"button"} role={"radio"} aria-checked={"false"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}>
                                  {hole(g?.label)}
                                </button>
                              </>
                            ) : null}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                      <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                        {"Date of birth"}
                        <input type={"text"} placeholder={"DD / MM / YYYY"} inputMode={"numeric"} autoComplete={"off"} onInput={maskDate} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                      </label>
                      <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                        {"Time of birth"}
                        <input type={"text"} placeholder={"HH : MM, 24-hour"} inputMode={"numeric"} autoComplete={"off"} onInput={maskTimeHM} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                      </label>
                    </div>
                    <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                      {"Place of birth"}
                      <input type={"text"} placeholder={"Start typing the town or city"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                    </label>
                  </div>
                  <div style={{display: "grid", gap: "16px", background: "#FBF7F0", border: "1px solid #EFE6D8", borderRadius: "18px", padding: "20px"}}>
                    <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                      <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "999px", background: "#6C1594", color: "#FFFFFF", fontWeight: "700"}}>
                        {"2"}
                      </span>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                        {"Partner two"}
                      </span>
                    </div>
                    <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                      <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                        {"First name"}
                        <input type={"text"} placeholder={"First name"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                      </label>
                      <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                        {"Last name"}
                        <input type={"text"} placeholder={"Last name"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                      </label>
                    </div>
                    <div style={{display: "grid", gap: "8px"}}>
                      <span style={{fontSize: "14px", fontWeight: "600", display: "grid", gap: "2px"}}>
                        {"Gender"}
                      </span>
                      <div role={"radiogroup"} aria-label={"Gender"} style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                        {(v.g2 || []).map((g, $index) => (
                          <React.Fragment key={$index}>
                            {g?.sel ? (
                              <>
                                <button type={"button"} role={"radio"} aria-checked={"true"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#F3E8F7", color: "#6C1594", font: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer"}}>
                                  {hole(g?.label)}
                                </button>
                              </>
                            ) : null}
                            {g?.notSel ? (
                              <>
                                <button type={"button"} role={"radio"} aria-checked={"false"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}>
                                  {hole(g?.label)}
                                </button>
                              </>
                            ) : null}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                      <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                        {"Date of birth"}
                        <input type={"text"} placeholder={"DD / MM / YYYY"} inputMode={"numeric"} autoComplete={"off"} onInput={maskDate} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                      </label>
                      <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                        {"Time of birth"}
                        <input type={"text"} placeholder={"HH : MM, 24-hour"} inputMode={"numeric"} autoComplete={"off"} onInput={maskTimeHM} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                      </label>
                    </div>
                    <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                      {"Place of birth"}
                      <input type={"text"} placeholder={"Start typing the town or city"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                    </label>
                  </div>
                  <p style={{margin: "0", background: "#F3E8F7", borderRadius: "12px", padding: "12px 14px", fontSize: "14px", lineHeight: "1.5", color: "#3D0752"}}>
                    {"Don’t know an exact birth time? Add what you know, such as morning or evening, in the note below. We can still prepare the report, but house-based readings will be less precise."}
                  </p>
                  <div style={{display: "grid", gap: "8px"}}>
                    <span style={{fontSize: "14px", fontWeight: "600", display: "grid", gap: "2px"}}>
                      {"Where are you in your journey?"}
                      <span style={{fontSize: "13px", fontWeight: "400", color: "#5C5470"}}>
                        {"This helps us focus the reading. It stays private."}
                      </span>
                    </span>
                    <div role={"radiogroup"} aria-label={"Where are you in your journey?"} style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                      {(v.stages || []).map((g, $index) => (
                        <React.Fragment key={$index}>
                          {g?.sel ? (
                            <>
                              <button type={"button"} role={"radio"} aria-checked={"true"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#F3E8F7", color: "#6C1594", font: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer"}}>
                                {hole(g?.label)}
                              </button>
                            </>
                          ) : null}
                          {g?.notSel ? (
                            <>
                              <button type={"button"} role={"radio"} aria-checked={"false"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}>
                                {hole(g?.label)}
                              </button>
                            </>
                          ) : null}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <section style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "clamp(22px, 3vw, 36px)", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0 0 8px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                  {"Step 3 · Delivery"}
                </p>
                <h2 style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(26px, 2.6vw, 32px)", lineHeight: "1.2"}}>
                  {"Where should we send it?"}
                </h2>
                <p style={{margin: "0 0 22px", fontSize: "15px", color: "#5C5470"}}>
                  {"We call you within 24 hours of payment to confirm your name and birth details, so your analysis is accurate."}
                </p>
                <div style={{display: "grid", gap: "18px"}}>
                  <div style={{display: "grid", gap: "8px"}}>
                    <span style={{fontSize: "14px", fontWeight: "600", display: "grid", gap: "2px"}}>
                      {"Report language"}
                    </span>
                    <div role={"radiogroup"} aria-label={"Report language"} style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                      {(v.langs || []).map((g, $index) => (
                        <React.Fragment key={$index}>
                          {g?.sel ? (
                            <>
                              <button type={"button"} role={"radio"} aria-checked={"true"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#F3E8F7", color: "#6C1594", font: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer"}}>
                                {hole(g?.label)}
                              </button>
                            </>
                          ) : null}
                          {g?.notSel ? (
                            <>
                              <button type={"button"} role={"radio"} aria-checked={"false"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}>
                                {hole(g?.label)}
                              </button>
                            </>
                          ) : null}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                    <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                      {"Email"}
                      <input type={"email"} placeholder={"you@example.com"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                    </label>
                    <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                      {"WhatsApp number"}
                      <input type={"tel"} placeholder={"+91"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                    </label>
                  </div>
                  <p style={{margin: "-8px 0 0", fontSize: "13px", color: "#5C5470"}}>
                    {"Your report and updates will be sent to both."}
                  </p>
                  <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                    {"Anything else we should know? (optional)"}
                    <textarea rows={"2"} placeholder={"For example, a wedding date already in mind, or a concern a family astrologer raised"} style={{padding: "12px 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9", resize: "vertical"}} />
                  </label>
                </div>
                {v.hasCall ? (
                  <>
                    <div style={{marginTop: "22px", borderTop: "1px solid #EFE6D8", paddingTop: "22px", display: "grid", gap: "18px"}}>
                      <div>
                        <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                          {"Your consultation call"}
                        </p>
                        <p style={{margin: "2px 0 0", fontSize: "14px", color: "#5C5470"}}>
                          {"A call with Ahalya Sangeeta or Maneswita, for one or both of you. We fix the exact time with you on WhatsApp once your report is ready."}
                        </p>
                      </div>
                      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                        <div style={{display: "grid", gap: "8px"}}>
                          <span style={{fontSize: "14px", fontWeight: "600", display: "grid", gap: "2px"}}>
                            {"Call language"}
                          </span>
                          <div role={"radiogroup"} aria-label={"Call language"} style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                            {(v.callLangs || []).map((g, $index) => (
                              <React.Fragment key={$index}>
                                {g?.sel ? (
                                  <>
                                    <button type={"button"} role={"radio"} aria-checked={"true"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#F3E8F7", color: "#6C1594", font: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer"}}>
                                      {hole(g?.label)}
                                    </button>
                                  </>
                                ) : null}
                                {g?.notSel ? (
                                  <>
                                    <button type={"button"} role={"radio"} aria-checked={"false"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}>
                                      {hole(g?.label)}
                                    </button>
                                  </>
                                ) : null}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                        <div style={{display: "grid", gap: "8px"}}>
                          <span style={{fontSize: "14px", fontWeight: "600", display: "grid", gap: "2px"}}>
                            {"Call type"}
                          </span>
                          <div role={"radiogroup"} aria-label={"Call type"} style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                            {(v.callModes || []).map((g, $index) => (
                              <React.Fragment key={$index}>
                                {g?.sel ? (
                                  <>
                                    <button type={"button"} role={"radio"} aria-checked={"true"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#F3E8F7", color: "#6C1594", font: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer"}}>
                                      {hole(g?.label)}
                                    </button>
                                  </>
                                ) : null}
                                {g?.notSel ? (
                                  <>
                                    <button type={"button"} role={"radio"} aria-checked={"false"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}>
                                      {hole(g?.label)}
                                    </button>
                                  </>
                                ) : null}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div style={{display: "grid", gap: "8px"}}>
                        <span style={{fontSize: "14px", fontWeight: "600", display: "grid", gap: "2px"}}>
                          {"Best time for your call"}
                        </span>
                        <div role={"radiogroup"} aria-label={"Best time for your call"} style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                          {(v.slots || []).map((g, $index) => (
                            <React.Fragment key={$index}>
                              {g?.sel ? (
                                <>
                                  <button type={"button"} role={"radio"} aria-checked={"true"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#F3E8F7", color: "#6C1594", font: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer"}}>
                                    {hole(g?.label)}
                                  </button>
                                </>
                              ) : null}
                              {g?.notSel ? (
                                <>
                                  <button type={"button"} role={"radio"} aria-checked={"false"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}>
                                    {hole(g?.label)}
                                  </button>
                                </>
                              ) : null}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </section>
            </form>
            <aside className={"am-order-aside"} style={{position: "sticky", top: "24px", display: "grid", gap: "14px"}}>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "26px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0 0 16px", fontFamily: "'Marcellus', serif", fontSize: "23px"}}>
                  {"Order summary"}
                </p>
                <div style={{display: "flex", gap: "14px", alignItems: "center", marginBottom: "18px", paddingBottom: "18px", borderBottom: "1px solid #EFE6D8"}}>
                  <div aria-hidden={"true"} style={{flex: "none", width: "64px", height: "80px", borderRadius: "8px", background: "linear-gradient(160deg, #2E003E 0%, #6C1594 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FCCE07"}}>
                    <svg width={"30"} height={"30"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M12 21s-7-4.4-9.3-9A5.4 5.4 0 0 1 12 6.6 5.4 5.4 0 0 1 21.3 12C19 16.6 12 21 12 21z"} />
                    </svg>
                  </div>
                  <div style={{minWidth: "0"}}>
                    <p style={{margin: "0", fontWeight: "700"}}>
                      {hole(v.cur?.name)}
                    </p>
                    <p style={{margin: "2px 0 0", fontSize: "13px", color: "#5C5470"}}>
                      {hole(v.cur?.format)}
                      {" · "}
                      {hole(v.langLabel)}
                    </p>
                  </div>
                </div>
                <div style={{display: "grid", gap: "8px", marginBottom: "18px", paddingBottom: "18px", borderBottom: "1px solid #EFE6D8"}}>
                  {(v.cur?.gets || []).map((i, $index) => (
                    <React.Fragment key={$index}>
                      <p style={{margin: "0", display: "flex", gap: "10px", fontSize: "14px", color: "#3D0752"}}>
                        <span style={{flex: "none", color: "#6C1594", marginTop: "3px"}}>
                          <svg aria-hidden={"true"} width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                            <path d={"M5 12l5 5 9-10"} />
                          </svg>
                        </span>
                        {hole(i)}
                      </p>
                    </React.Fragment>
                  ))}
                </div>
                {v.cur?.hasMrp ? (
                  <>
                    <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "15px", marginBottom: "10px"}}>
                      <span>
                        {"Report price"}
                      </span>
                      <span>
                        {hole(v.cur?.mrp)}
                      </span>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "15px", color: "#6C1594", fontWeight: "600", marginBottom: "16px"}}>
                      <span>
                        {"Launch discount"}
                      </span>
                      <span>
                        {"−"}
                        {hole(v.cur?.saving)}
                      </span>
                    </div>
                    <div style={{height: "1px", background: "#EFE6D8", marginBottom: "16px"}} />
                  </>
                ) : null}
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "20px"}}>
                  <span style={{fontWeight: "700"}}>
                    {"Total"}
                  </span>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "32px"}}>
                    {hole(v.cur?.price)}
                  </span>
                </div>
                <PayButton as="a" order={{ productId: this.state.pkg === 'call' ? 'report-milan-call' : 'report-milan' }} href={"#"} style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "54px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "16px", textDecoration: "none"}}>
                  <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <rect x={"5"} y={"11"} width={"14"} height={"10"} rx={"2"} />
                    <path d={"M8 11V8a4 4 0 0 1 8 0v3"} />
                  </svg>
                  {"Pay "}
                  {hole(v.cur?.price)}
                  {" securely"}
                </PayButton>
                <p style={{margin: "12px 0 0", textAlign: "center", fontSize: "13px", color: "#5C5470"}}>
                  {"UPI, cards and net banking via Razorpay"}
                </p>
                <p style={{margin: "6px 0 0", textAlign: "center", fontSize: "10.5px", color: "#736B8A"}}>
                  {"Payments are non-refundable, except for delays from our side."}
                </p>
              </div>
              <div style={{background: "#F3E8F7", borderRadius: "18px", padding: "18px 20px", display: "grid", gap: "10px", fontSize: "14px", color: "#3D0752"}}>
                <p style={{margin: "0", display: "flex", gap: "10px"}}>
                  <span style={{flex: "none", color: "#6C1594", marginTop: "3px"}}>
                    <svg aria-hidden={"true"} width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M5 12l5 5 9-10"} />
                    </svg>
                  </span>
                  {"Prepared personally by Ahalya Sangeeta and Maneswita."}
                </p>
                <p style={{margin: "0", display: "flex", gap: "10px"}}>
                  <span style={{flex: "none", color: "#6C1594", marginTop: "3px"}}>
                    <svg aria-hidden={"true"} width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M5 12l5 5 9-10"} />
                    </svg>
                  </span>
                  {hole(v.deliveryLine)}
                </p>
                <p style={{margin: "0", display: "flex", gap: "10px"}}>
                  <span style={{flex: "none", color: "#6C1594", marginTop: "3px"}}>
                    <svg aria-hidden={"true"} width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M5 12l5 5 9-10"} />
                    </svg>
                  </span>
                  {"Both sets of birth details stay private and are never shared."}
                </p>
              </div>
            </aside>
          </div>
        </div>
        <footer style={{borderTop: "1px solid #E8DFD0", background: "#FFFFFF"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", fontSize: "14px", color: "#5C5470"}}>
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

CheckoutMilanPage.prototype.componentDidMount = function componentDidMount() {
  var q = readUrlState(['pkg']); if (q.pkg === 'call' || q.pkg === 'report') this.setState(q);
};

export default CheckoutMilanPage;
