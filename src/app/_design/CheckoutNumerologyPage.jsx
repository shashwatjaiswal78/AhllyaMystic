"use client";
/* eslint-disable */
// Generated from the design file NumCheckout.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { sx, hole } from "./sx";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState } from "./wire";

class CheckoutNumerologyPage extends React.Component {
  constructor(props) {
    super(props);
    // pkg is set from the "Order now" button the visitor clicked.
    this.state = Object.assign({ kind: 'self', pkg: 'n3', gender: 'Female', babyGender: 'Girl', focus: ['Career', 'Money'], docs: 'social', styles: ['Traditional'], stage: 'old', use: 'Personal', lang: 'English', callLang: 'Hindi', callMode: 'Audio', slot: '4 to 7 pm' }, props && props.initialState);
  }
  renderVals() {
    var rs = (x) => '₹' + x.toLocaleString('en-IN');
    var P = {
      self: [
        { id: 'n1', name: 'Name Numerology Report', price: 399, mrp: 798, format: 'Report only', call: 0, gets: ['Your name number and what it means', 'How it agrees with your birth numbers', 'A clear verdict: keep it or correct it'] },
        { id: 'n2', name: 'Name Consultancy and Report', price: 1499, format: 'Report + 15 min call', call: 15, gets: ['Everything in the report', 'First correction suggestions', '15 minute call to talk it through'] },
        { id: 'n3', name: 'Name Analysis and Correction', price: 5199, mrp: 11999, format: 'Report + 30 min call', call: 30, corr: true, gets: ['Full analysis of your current name', 'Several corrected spellings to choose from', 'Signature guidance', '30 minute call'] },
        { id: 'n4', name: 'Premium Name Correction', price: 25999, format: 'Report + 45 min call', call: 45, corr: true, gets: ['Everything in Correction', 'Sound and vibration check of each option', 'Follow-up support while you switch', '45 minute call'] }
      ],
      baby: [
        { id: 'b1', name: 'Baby Name Consultancy and Report', price: 1499, format: 'Report + 15 min call', call: 15, gets: ['How your child’s name suits their birth numbers', 'First suggestions if it needs work', '15 minute call'] },
        { id: 'b2', name: 'New Born Baby Name Design', price: 5199, format: 'Names + consultation', call: 30, design: true, gets: ['A shortlist of names designed for your baby', 'Meaning and number of each name', 'Call to choose the final name'] },
        { id: 'b3', name: 'Baby Name Analysis and Correction', price: 5199, mrp: 11999, format: 'Report + 30 min call', call: 30, corr: true, gets: ['Full analysis of the current name', 'Corrected spellings to choose from', '30 minute call'] },
        { id: 'b4', name: 'Premium Baby Name Correction', price: 25999, format: 'Report + 45 min call', call: 45, corr: true, gets: ['Everything in Correction', 'Sound and vibration check of each option', '45 minute call'] }
      ],
      biz: [
        { id: 'z1', name: 'Business Name Consultancy and Report', price: 5199, format: 'Report + 30 min call', call: 30, gets: ['Your business name number and its effect', 'How it agrees with the owner’s numbers', '30 minute call'] },
        { id: 'z2', name: 'Business Name Analysis and Correction', price: 25999, mrp: 33999, format: 'Report + 30 min call', call: 30, corr: true, gets: ['Everything in Consultancy', 'Corrected or new names to choose from', 'Guidance for logo, tagline and launch date'] }
      ],
      mob: [
        { id: 'm1', name: 'Mobile Number Check', price: 249, mrp: 498, format: 'Report only', call: 0, gets: ['Your number’s total and what it means', 'A clear verdict: keep it or change it'] },
        { id: 'm2', name: 'Mobile Number Report', price: 499, format: 'Report only', call: 0, gets: ['Everything in the Check', 'Full reading of the number', 'Lucky wallpaper and colour'] },
        { id: 'm3', name: 'Advance Report and Consultancy', price: 1499, format: 'Report + consultation', call: 15, adv: true, gets: ['Everything in the Report', 'A new number designed for your goals', 'Consultation call'] }
      ]
    };
    var KINDS = [{ id: 'self', label: 'Your name', back: 'Name Numerology', glyph: 'Aa' }, { id: 'baby', label: 'Baby name', back: 'Name Numerology', glyph: 'Aa' }, { id: 'biz', label: 'Business', back: 'Name Numerology', glyph: 'Aa' }, { id: 'mob', label: 'Mobile', back: 'Mobile Numerology', glyph: '9' }];
    var kind = this.state.kind, list = P[kind];
    var c = list.filter((p) => p.id === this.state.pkg)[0] || list[0];
    var kinds = KINDS.map((k) => ({ label: k.label, sel: k.id === kind, notSel: k.id !== kind, pick: () => { var l = P[k.id]; var d = l.filter((p) => p.corr || p.design || p.mrp)[0] || l[0]; this.setState({ kind: k.id, pkg: d.id }); } }));
    var pkgs = list.map((p) => ({ name: p.name, format: p.format, price: rs(p.price), mrp: p.mrp ? rs(p.mrp) : '', hasMrp: !!p.mrp, sel: p.id === c.id, notSel: p.id !== c.id, pick: () => this.setState({ pkg: p.id }) }));
    var one = (key, opts) => opts.map((x) => ({ label: x, sel: this.state[key] === x, notSel: this.state[key] !== x, pick: () => { var o = {}; o[key] = x; this.setState(o); } }));
    var many = (key, opts, max) => opts.map((x) => { var cur = this.state[key] || []; var on = cur.indexOf(x) >= 0; return { label: x, sel: on, notSel: !on, pick: () => { var n = cur.slice(); if (on) n.splice(n.indexOf(x), 1); else { n.push(x); if (max && n.length > max) n.shift(); } var o = {}; o[key] = n; this.setState(o); } }; });
    var docOpts = [{ id: 'social', label: 'Spelling I can use socially' }, { id: 'docs', label: 'Ready to update my documents too' }].map((d) => ({ label: d.label, sel: this.state.docs === d.id, notSel: this.state.docs !== d.id, pick: () => this.setState({ docs: d.id }) }));
    var stages = [{ id: 'new', label: 'Choosing a name for a new business' }, { id: 'old', label: 'Already running' }].map((d) => ({ label: d.label, sel: this.state.stage === d.id, notSel: this.state.stage !== d.id, pick: () => this.setState({ stage: d.id }) }));
    var T = {
      self: ['Your details', 'Tell us about you', 'We read your name against your date of birth, so both need to be exact.'],
      baby: ['Your child', c.design ? 'Tell us about your baby' : 'Tell us about your child', 'A child’s name is read against their own birth date, with the family name in mind.'],
      biz: ['Your business', 'Tell us about the business', 'We read the business name together with the owner’s numbers.'],
      mob: ['Your number', 'Tell us about the number', 'We read the number together with the date of birth of the person who uses it.']
    }[kind];
    var hasCall = c.call > 0;
    var meta = KINDS.filter((k) => k.id === kind)[0];
    return {
      __pkgId: c.id,
      backTo: meta.back, glyph: meta.glyph,
      kinds: kinds, pkgs: pkgs,
      cur: { name: c.name, format: c.format, price: rs(c.price), mrp: c.mrp ? rs(c.mrp) : '', hasMrp: !!c.mrp, saving: c.mrp ? rs(c.mrp - c.price) : '', gets: c.gets },
      isSelf: kind === 'self', isBaby: kind === 'baby', isBiz: kind === 'biz', isMob: kind === 'mob',
      isCorr: !!c.corr, isDesign: !!c.design, notDesign: !c.design, isAdvance: !!c.adv,
      bizNew: this.state.stage === 'new', bizOld: this.state.stage !== 'new',
      detailsEyebrow: T[0], detailsTitle: T[1], detailsSub: T[2],
      genders: one('gender', ['Female', 'Male', 'Other']), babyGenders: one('babyGender', ['Girl', 'Boy', 'Not born yet']),
      focus: many('focus', ['Career', 'Money', 'Relationships', 'Health', 'Peace of mind'], 2),
      styles: many('styles', ['Traditional', 'Modern', 'Devotional', 'Short and easy'], 0),
      docOpts: docOpts, stages: stages, uses: one('use', ['Personal', 'Business', 'Both']),
      langs: one('lang', ['English', 'Hindi']), langLabel: this.state.lang + ' edition',
      hasCall: hasCall, callLen: c.call + ' minute',
      callLangs: one('callLang', ['Hindi', 'English']), callModes: one('callMode', ['Audio', 'Video']), slots: one('slot', ['11 am to 1 pm', '1 to 4 pm', '4 to 7 pm']),
      deliveryLine: hasCall ? 'Your report arrives in 5 to 7 working days, and we fix your call time on WhatsApp.' : 'Your report arrives as a PDF in 5 to 7 working days.'
    };
  }
}

CheckoutNumerologyPage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="NumCheckout" style={{ display: "contents" }}>
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
          <a href={(v.isMob ? '/report/mobile-number' : '/report/name-numerology')} style={{display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "15px", fontWeight: "600", textDecoration: "none", marginBottom: "22px"}}>
            <svg aria-hidden={"true"} width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
              <path d={"M15 6l-6 6 6 6"} />
            </svg>
            {"Back to "}
            {hole(v.backTo)}
          </a>
          <div style={{display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px"}}>
            <h1 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15"}}>
              {"Complete your order"}
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
                  {"What are we reading?"}
                </h2>
                <p style={{margin: "0 0 22px", fontSize: "15px", color: "#5C5470"}}>
                  {"You can switch packages here. The form below changes to ask only what we need."}
                </p>
                <div style={{display: "grid", gap: "14px"}}>
                  <div role={"tablist"} aria-label={"Numerology for"} className={"am-tabs"} style={{display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "6px", background: "#F3EDE3", padding: "6px", borderRadius: "16px"}}>
                    {(v.kinds || []).map((k, $index) => (
                      <React.Fragment key={$index}>
                        {k?.sel ? (
                          <>
                            <button type={"button"} role={"tab"} aria-selected={"true"} onClick={k?.pick} style={{minHeight: "44px", padding: "0 10px", borderRadius: "12px", border: "0", background: "#FFFFFF", color: "#2E003E", font: "inherit", fontSize: "15px", fontWeight: "700", boxShadow: "0 6px 16px -10px rgba(46,0,62,.5)", cursor: "pointer"}}>
                              {hole(k?.label)}
                            </button>
                          </>
                        ) : null}
                        {k?.notSel ? (
                          <>
                            <button type={"button"} role={"tab"} aria-selected={"false"} onClick={k?.pick} style={{minHeight: "44px", padding: "0 10px", borderRadius: "12px", border: "0", background: "transparent", color: "#5C5470", font: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}>
                              {hole(k?.label)}
                            </button>
                          </>
                        ) : null}
                      </React.Fragment>
                    ))}
                  </div>
                  <div role={"radiogroup"} aria-label={"Package"} style={{display: "grid", gap: "8px"}}>
                    {(v.pkgs || []).map((p, $index) => (
                      <React.Fragment key={$index}>
                        {p?.sel ? (
                          <>
                            <button type={"button"} role={"radio"} aria-checked={"true"} onClick={p?.pick} style={{display: "flex", alignItems: "center", gap: "14px", width: "100%", textAlign: "left", padding: "14px 16px", borderRadius: "14px", border: "1.5px solid #6C1594", background: "#F3E8F7", font: "inherit", cursor: "pointer"}}>
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
                                <span style={{display: "block", fontFamily: "'Marcellus', serif", fontSize: "20px", color: "#2E003E"}}>
                                  {hole(p?.price)}
                                </span>
                              </span>
                            </button>
                          </>
                        ) : null}
                        {p?.notSel ? (
                          <>
                            <button type={"button"} role={"radio"} aria-checked={"false"} onClick={p?.pick} style={{display: "flex", alignItems: "center", gap: "14px", width: "100%", textAlign: "left", padding: "14px 16px", borderRadius: "14px", border: "1px solid #D9CEBD", background: "#FFFFFF", font: "inherit", cursor: "pointer"}}>
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
                                <span style={{display: "block", fontFamily: "'Marcellus', serif", fontSize: "20px", color: "#1E1830"}}>
                                  {hole(p?.price)}
                                </span>
                              </span>
                            </button>
                          </>
                        ) : null}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </section>
              <section style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "clamp(22px, 3vw, 36px)", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0 0 8px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                  {"Step 2 · "}
                  {hole(v.detailsEyebrow)}
                </p>
                <h2 style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(26px, 2.6vw, 32px)", lineHeight: "1.2"}}>
                  {hole(v.detailsTitle)}
                </h2>
                <p style={{margin: "0 0 22px", fontSize: "15px", color: "#5C5470"}}>
                  {hole(v.detailsSub)}
                </p>
                {v.isSelf ? (
                  <>
                    <div style={{display: "grid", gap: "18px"}}>
                      <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                        {"Full name as on your documents"}
                        <span style={{fontSize: "13px", fontWeight: "400", color: "#5C5470"}}>
                          {"Every letter counts in numerology, so please type it exactly."}
                        </span>
                        <input type={"text"} placeholder={"As on Aadhaar, PAN or passport"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                      </label>
                      <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                        {"Name you use day to day (optional)"}
                        <span style={{fontSize: "13px", fontWeight: "400", color: "#5C5470"}}>
                          {"Only if it differs from your documents, such as on social media or at work."}
                        </span>
                        <input type={"text"} placeholder={"For example, a short name or a different spelling"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                      </label>
                      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                        <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                          {"Date of birth"}
                          <input type={"text"} placeholder={"DD / MM / YYYY"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                        </label>
                        <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                          {"Place of birth"}
                          <input type={"text"} placeholder={"Town or city"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                        </label>
                      </div>
                      <div style={{display: "grid", gap: "8px"}}>
                        <span style={{fontSize: "14px", fontWeight: "600", display: "grid", gap: "2px"}}>
                          {"Gender"}
                        </span>
                        <div role={"radiogroup"} aria-label={"Gender"} style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                          {(v.genders || []).map((g, $index) => (
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
                          {"What would you like your name to support most?"}
                          <span style={{fontSize: "13px", fontWeight: "400", color: "#5C5470"}}>
                            {"Pick up to two. We weigh suggestions toward these."}
                          </span>
                        </span>
                        <div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                          {(v.focus || []).map((g, $index) => (
                            <React.Fragment key={$index}>
                              {g?.sel ? (
                                <>
                                  <button type={"button"} aria-pressed={"true"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#F3E8F7", color: "#6C1594", font: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer"}}>
                                    {hole(g?.label)}
                                  </button>
                                </>
                              ) : null}
                              {g?.notSel ? (
                                <>
                                  <button type={"button"} aria-pressed={"false"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}>
                                    {hole(g?.label)}
                                  </button>
                                </>
                              ) : null}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                      {v.isCorr ? (
                        <>
                          <div style={{display: "grid", gap: "8px"}}>
                            <span style={{fontSize: "14px", fontWeight: "600", display: "grid", gap: "2px"}}>
                              {"How far are you willing to change your name?"}
                              <span style={{fontSize: "13px", fontWeight: "400", color: "#5C5470"}}>
                                {"This helps us suggest corrections you will actually use."}
                              </span>
                            </span>
                            <div role={"radiogroup"} aria-label={"How far are you willing to change your name?"} style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                              {(v.docOpts || []).map((g, $index) => (
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
                        </>
                      ) : null}
                    </div>
                  </>
                ) : null}
                {v.isBaby ? (
                  <>
                    <div style={{display: "grid", gap: "18px"}}>
                      {v.isDesign ? (
                        <>
                          <p style={{margin: "0", background: "#F3E8F7", borderRadius: "12px", padding: "12px 14px", fontSize: "14px", lineHeight: "1.5", color: "#3D0752"}}>
                            {"Share whatever you know so far. If your baby is not born yet, leave the birth details blank and send them on WhatsApp after the birth. We start work once we have them."}
                          </p>
                        </>
                      ) : null}
                      {v.notDesign ? (
                        <>
                          <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                            {"Child’s current full name"}
                            <input type={"text"} placeholder={"As on the birth certificate or school records"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                          </label>
                        </>
                      ) : null}
                      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                        <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                          {"Child’s date of birth"}
                          <input type={"text"} placeholder={"DD / MM / YYYY"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                        </label>
                        <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                          {"Time of birth (optional)"}
                          <input type={"text"} placeholder={"HH : MM, 24-hour"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                        </label>
                      </div>
                      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                        <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                          {"Place of birth"}
                          <input type={"text"} placeholder={"Town or city"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                        </label>
                        <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                          {"Family name or surname"}
                          <input type={"text"} placeholder={"The surname the child will use"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                        </label>
                      </div>
                      <div style={{display: "grid", gap: "8px"}}>
                        <span style={{fontSize: "14px", fontWeight: "600", display: "grid", gap: "2px"}}>
                          {"Child’s gender"}
                        </span>
                        <div role={"radiogroup"} aria-label={"Child’s gender"} style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                          {(v.babyGenders || []).map((g, $index) => (
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
                      {v.isDesign ? (
                        <>
                          <div style={{display: "grid", gap: "18px"}}>
                            <div style={{display: "grid", gap: "8px"}}>
                              <span style={{fontSize: "14px", fontWeight: "600", display: "grid", gap: "2px"}}>
                                {"What kind of name are you looking for?"}
                              </span>
                              <div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                                {(v.styles || []).map((g, $index) => (
                                  <React.Fragment key={$index}>
                                    {g?.sel ? (
                                      <>
                                        <button type={"button"} aria-pressed={"true"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#F3E8F7", color: "#6C1594", font: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer"}}>
                                          {hole(g?.label)}
                                        </button>
                                      </>
                                    ) : null}
                                    {g?.notSel ? (
                                      <>
                                        <button type={"button"} aria-pressed={"false"} onClick={g?.pick} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}>
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
                                {"Starting letters you prefer (optional)"}
                                <input type={"text"} placeholder={"For example, A, Sh or the rashi letters"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                              </label>
                              <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                                {"Names you are already considering (optional)"}
                                <input type={"text"} placeholder={"Separate with commas"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                              </label>
                            </div>
                          </div>
                        </>
                      ) : null}
                      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                        <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                          {"Mother’s full name"}
                          <input type={"text"} placeholder={"Full name"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                        </label>
                        <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                          {"Father’s full name"}
                          <input type={"text"} placeholder={"Full name"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                        </label>
                      </div>
                    </div>
                  </>
                ) : null}
                {v.isBiz ? (
                  <>
                    <div style={{display: "grid", gap: "18px"}}>
                      <div style={{display: "grid", gap: "8px"}}>
                        <span style={{fontSize: "14px", fontWeight: "600", display: "grid", gap: "2px"}}>
                          {"Where is your business today?"}
                        </span>
                        <div role={"radiogroup"} aria-label={"Where is your business today?"} style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
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
                      {v.bizNew ? (
                        <>
                          <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                            {"Names you are considering"}
                            <span style={{fontSize: "13px", fontWeight: "400", color: "#5C5470"}}>
                              {"We check each one on the call."}
                            </span>
                            <textarea rows={"3"} placeholder={"Write each name on its own line, spelled exactly as you would register it"} style={{padding: "12px 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9", resize: "vertical"}} />
                          </label>
                        </>
                      ) : null}
                      {v.bizOld ? (
                        <>
                          <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                            {"Registered business name"}
                            <input type={"text"} placeholder={"Exactly as on your registration or GST certificate"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                          </label>
                        </>
                      ) : null}
                      {v.bizOld ? (
                        <>
                          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                            <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                              {"Brand name customers see (optional)"}
                              <input type={"text"} placeholder={"If different from the registered name"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                            </label>
                            <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                              {"Date the business started"}
                              <input type={"text"} placeholder={"DD / MM / YYYY"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                            </label>
                          </div>
                        </>
                      ) : null}
                      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                        <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                          {"What does your business do?"}
                          <input type={"text"} placeholder={"For example, a café or a clothing label"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                        </label>
                        <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                          {"City"}
                          <input type={"text"} placeholder={"Where you operate"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                        </label>
                      </div>
                      <div>
                        <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                          {"Owner details"}
                        </p>
                        <p style={{margin: "2px 0 0", fontSize: "14px", color: "#5C5470"}}>
                          {"A business name works best when it agrees with the owner’s own numbers."}
                        </p>
                      </div>
                      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                        <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                          {"Owner’s full name"}
                          <input type={"text"} placeholder={"As on documents"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                        </label>
                        <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                          {"Owner’s date of birth"}
                          <input type={"text"} placeholder={"DD / MM / YYYY"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                        </label>
                      </div>
                      <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                        {"Partners, if any (optional)"}
                        <input type={"text"} placeholder={"Names and dates of birth of partners"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                      </label>
                    </div>
                  </>
                ) : null}
                {v.isMob ? (
                  <>
                    <div style={{display: "grid", gap: "18px"}}>
                      <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                        {"Mobile number to check"}
                        <span style={{fontSize: "13px", fontWeight: "400", color: "#5C5470"}}>
                          {"The number you want us to read. It can be different from your WhatsApp number below."}
                        </span>
                        <input type={"tel"} placeholder={"+91"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                      </label>
                      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                        <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                          {"Full name of the person who uses it"}
                          <input type={"text"} placeholder={"As on documents"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                        </label>
                        <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                          {"Date of birth"}
                          <input type={"text"} placeholder={"DD / MM / YYYY"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                        </label>
                      </div>
                      <div style={{display: "grid", gap: "8px"}}>
                        <span style={{fontSize: "14px", fontWeight: "600", display: "grid", gap: "2px"}}>
                          {"What is this number mostly used for?"}
                        </span>
                        <div role={"radiogroup"} aria-label={"What is this number mostly used for?"} style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                          {(v.uses || []).map((g, $index) => (
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
                      {v.isAdvance ? (
                        <>
                          <p style={{margin: "0", background: "#F3E8F7", borderRadius: "12px", padding: "12px 14px", fontSize: "14px", lineHeight: "1.5", color: "#3D0752"}}>
                            {"With the Advance plan we also design a new number around your goals. You choose it from your operator’s available numbers and we check each option before you buy it."}
                          </p>
                        </>
                      ) : null}
                    </div>
                  </>
                ) : null}
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
                    <textarea rows={"2"} placeholder={"For example, a name change you are already planning, or a deadline like a naming ceremony or launch date"} style={{padding: "12px 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9", resize: "vertical"}} />
                  </label>
                </div>
                {v.hasCall ? (
                  <>
                    <div style={{marginTop: "22px", borderTop: "1px solid #EFE6D8", paddingTop: "22px"}}>
                      <div style={{display: "grid", gap: "18px"}}>
                        <div>
                          <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                            {"Your consultation call"}
                          </p>
                          <p style={{margin: "2px 0 0", fontSize: "14px", color: "#5C5470"}}>
                            {"Your package includes a "}
                            {hole(v.callLen)}
                            {" call with Ahalya Sangeeta or Maneswita. We fix the exact time with you on WhatsApp once your analysis is ready."}
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
                  <div aria-hidden={"true"} style={{flex: "none", width: "64px", height: "80px", borderRadius: "8px", background: "linear-gradient(160deg, #2E003E 0%, #6C1594 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Marcellus', serif", fontSize: "30px", color: "#FCCE07"}}>
                    {hole(v.glyph)}
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
                        {"Package price"}
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
                <PayButton as="a" order={{ productId: 'num-' + v.__pkgId }} href={"#"} style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "54px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "16px", textDecoration: "none"}}>
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
                  {"Your details stay private and are never shared."}
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

CheckoutNumerologyPage.prototype.componentDidMount = function componentDidMount() {
  var q = readUrlState(['kind', 'pkg']); if (q.kind || q.pkg) this.setState(q);
};

export default CheckoutNumerologyPage;
