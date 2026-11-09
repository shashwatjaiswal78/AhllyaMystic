"use client";
/* eslint-disable */
// Generated from the design file Horoscope.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { HoroscopeMenu, HoroscopeMobileMenu, CalculatorsMenu, CalculatorsMobileMenu, ReportsMenu, ReportsMobileMenu } from "./HoroscopeMenu";
import { sx, hole } from "./sx";
import PeriodPanel from "./PeriodPanel";
import MoonForm from "./MoonForm";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState, maskDate, maskTime, maskTimeHM, maskPart } from "./wire";

// DATA is computed fresh each day by src/lib/horoscope/engine.ts and passed in as the `data` prop.
var LANG = {
  en: { home: 'Home', horoscope: 'Horoscope', eyebrow: 'Daily horoscope', overall: 'Overall', luckyNumber: 'Lucky number', luckyColour: 'Lucky colour',
    strengthen: 'Mantra to strengthen', calm: 'Mantra to calm', noCalm: 'No planet needs calming today.', mantraNote: 'Chant each mantra 108 times, ideally in the morning after a bath.',
    whyEyebrow: 'Why today looks this way', whyTitle: 'Today’s planets, in plain words', whySub: 'Every reading is calculated from the real positions of the planets at sunrise, counted from your Moon sign.',
    supportive: 'Helps', notSupportive: 'Challenging', retroNote: 'R means the planet is retrograde. Rahu and Ketu always move backwards.',
    ctaSub: 'Your own Kundli shows what today means for you, with your dasha, your houses and your timing.', ctaReport: 'Get your personalised Kundli', ctaFree: 'Find your Moon sign free',
    aboutEyebrow: 'Know your sign', strengths: 'Strengths', watch: 'Watch out for', faqTitle: 'About your daily horoscope',
    bands: ['Favourable day', 'Mixed day', 'Go carefully'], today: 'Today', tomorrow: 'Tomorrow', weekly: 'Weekly', monthly: 'Monthly', yearly: 'Yearly',
    faqs: [
      { q: 'Is this based on my Moon sign or Sun sign?', a: 'Your Moon sign (rashi), as in Vedic astrology. It is the sign the Moon was in when you were born, and it is often different from the Sun sign used in western astrology.' },
      { q: 'How is it calculated?', a: 'From the actual positions of the planets at sunrise in New Delhi, counted from your Moon sign. The scores come from how supportive each planet is for each part of life today.' },
      { q: 'I don’t know my Moon sign. How do I find it?', a: 'Use our free Kundli tool with your date, time and place of birth. It shows your Moon sign in a few seconds.' },
      { q: 'Is a daily horoscope enough to make decisions?', a: 'It is a general guide for everyone born under the same Moon sign. For a decision about your own life, your personal Kundli is far more accurate.' }
    ] },
  hi: { home: 'होम', horoscope: 'राशिफल', eyebrow: 'दैनिक राशिफल', overall: 'कुल मिलाकर', luckyNumber: 'शुभ अंक', luckyColour: 'शुभ रंग',
    strengthen: 'बल देने वाला मंत्र', calm: 'शांति मंत्र', noCalm: 'आज किसी ग्रह की शांति की ज़रूरत नहीं है।', mantraNote: 'हर मंत्र का 108 बार जाप करें, संभव हो तो सुबह स्नान के बाद।',
    whyEyebrow: 'आज ऐसा क्यों है', whyTitle: 'आज के ग्रह, आसान शब्दों में', whySub: 'हर राशिफल सूर्योदय के समय ग्रहों की वास्तविक स्थिति से, आपकी चंद्र राशि से गिनकर बनाया जाता है।',
    supportive: 'अनुकूल', notSupportive: 'चुनौती', retroNote: 'R का अर्थ है ग्रह वक्री है। राहु और केतु हमेशा वक्री चलते हैं।',
    ctaSub: 'आपकी अपनी कुंडली बताती है कि आज का दिन आपके लिए क्या है, आपकी दशा, भावों और समय के साथ।', ctaReport: 'अपनी व्यक्तिगत कुंडली बनवाएं', ctaFree: 'अपनी चंद्र राशि मुफ़्त जानें',
    aboutEyebrow: 'अपनी राशि को जानें', strengths: 'खूबियां', watch: 'ध्यान रखें', faqTitle: 'दैनिक राशिफल के बारे में',
    bands: ['शुभ दिन', 'मिला-जुला दिन', 'सावधानी का दिन'], today: 'आज', tomorrow: 'कल', weekly: 'साप्ताहिक', monthly: 'मासिक', yearly: 'वार्षिक',
    faqs: [
      { q: 'यह चंद्र राशि पर आधारित है या सूर्य राशि पर?', a: 'वैदिक ज्योतिष की तरह आपकी चंद्र राशि पर। यह वह राशि है जिसमें आपके जन्म के समय चंद्रमा था, और यह अक्सर पश्चिमी ज्योतिष की सूर्य राशि से अलग होती है।' },
      { q: 'इसकी गणना कैसे होती है?', a: 'नई दिल्ली में सूर्योदय के समय ग्रहों की वास्तविक स्थिति से, आपकी चंद्र राशि से गिनकर। अंक इस बात से तय होते हैं कि आज हर ग्रह जीवन के हर क्षेत्र के लिए कितना अनुकूल है।' },
      { q: 'मुझे अपनी चंद्र राशि नहीं पता। कैसे जानूं?', a: 'अपनी जन्म तिथि, समय और स्थान के साथ हमारा मुफ़्त कुंडली टूल इस्तेमाल करें। यह कुछ ही सेकंड में आपकी चंद्र राशि बता देता है।' },
      { q: 'क्या दैनिक राशिफल से निर्णय लेना काफ़ी है?', a: 'यह एक ही चंद्र राशि वाले सभी लोगों के लिए सामान्य मार्गदर्शन है। अपने जीवन के निर्णय के लिए आपकी व्यक्तिगत कुंडली कहीं ज़्यादा सटीक है।' }
    ] }
};
var ICONS = {"love": "M12 21s-7-4.4-9.3-9A5.4 5.4 0 0 1 12 6.6 5.4 5.4 0 0 1 21.3 12C19 16.6 12 21 12 21z", "career": "M4 7h16v12H4zM9 7V5h6v2", "money": "M12 3v18M17 7H9.5a3 3 0 0 0 0 6h5a3 3 0 0 1 0 6H6", "health": "M3 12h4l3-7 4 14 3-7h4"};
class HoroscopePage extends React.Component {
  constructor(props) {
    super(props);
    // sign comes from the URL, for example /horoscope/taurus
    this.state = Object.assign({ sign: 0, day: 'today', lang: 'en', menuOpen: false, picked: !!(props && props.initialState && props.initialState.sign != null), periods: props && props.period ? { [props.period.view + '|' + props.period.sign]: props.period } : {}, loadingKey: null, failedKey: null }, props && props.initialState);
    this.selectView = this.selectView.bind(this);
    this.selectSign = this.selectSign.bind(this);
  }
  slugOf(i) { return this.props.data.signs[i].en.toLowerCase(); }
  isDaily(day) { return day === 'today' || day === 'tomorrow'; }
  // Keeps the address bar in step with the view, so every view has its own shareable link.
  syncUrl(day, i) {
    try { window.history.replaceState(null, '', '/horoscope/' + this.slugOf(i) + (this.isDaily(day) ? '' : '/' + day)); } catch (e) {}
  }
  loadPeriod(day, i) {
    if (this.isDaily(day)) return;
    var slug = this.slugOf(i), key = day + '|' + slug;
    if (this.state.periods[key]) return;
    this.setState({ loadingKey: key, failedKey: null });
    fetch('/api/horoscope/period?view=' + day + '&sign=' + slug)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => this.setState((st) => ({ periods: Object.assign({}, st.periods, { [key]: d }), loadingKey: st.loadingKey === key ? null : st.loadingKey })))
      .catch(() => this.setState({ failedKey: key, loadingKey: null }));
  }
  selectView(day) {
    this.setState({ day: day, picked: true });
    this.syncUrl(day, this.state.sign);
    this.loadPeriod(day, this.state.sign);
  }
  remember(i) { try { localStorage.setItem('ahllya:sign', this.slugOf(i)); } catch (e) {} }
  selectSign(i) {
    this.remember(i);
    this.setState({ sign: i, picked: true });
    this.syncUrl(this.state.day, i);
    this.loadPeriod(this.state.day, i);
  }
  componentDidMount() {
    if (this.state.picked) this.remember(this.state.sign);
    this.loadPeriod(this.state.day, this.state.sign);
  }
  renderVals() {
    var hi = this.state.lang === 'hi', L = LANG[this.state.lang], si = this.state.sign;
    var daily = this.isDaily(this.state.day);
    var dd = this.props.data.days[daily ? this.state.day : 'today'], d = dd.signs[si], sg = this.props.data.signs[si];
    var pkey = this.state.day + '|' + sg.en.toLowerCase(), pdata = daily ? null : (this.state.periods[pkey] || null);
    var VIEW_LABEL = { weekly: [L.weekly, 'Weekly'], monthly: [L.monthly, 'Monthly'], yearly: [L.yearly, 'Yearly'], '2027': ['2027', '2027'] };
    var rashis = this.props.data.signs.map((s, i) => ({ en: s.en, hi: s.hi, img: s.img, sel: i === si, notSel: i !== si, pick: () => this.selectSign(i) }));
    var tab = (key, opts) => opts.map((o) => ({ label: o[1], sel: this.state[key] === o[0], notSel: this.state[key] !== o[0], pick: () => { var x = {}; x[key] = o[0]; this.setState(x); } }));
    var C = 2 * Math.PI * 52;
    var pageTitle = !daily ? (hi ? sg.hi + ' राशिफल ' + VIEW_LABEL[this.state.day][0] : sg.en + ' ' + (this.state.day === 'yearly' ? 'Yearly Horoscope' : /^\d+$/.test(this.state.day) ? 'Horoscope ' + this.state.day : VIEW_LABEL[this.state.day][1] + ' Horoscope')) : hi ? sg.hi + ' राशिफल ' + (this.state.day === 'today' ? 'आज' : 'कल') : sg.en + ' Horoscope ' + (this.state.day === 'today' ? 'Today' : 'Tomorrow');
    return {
      menuOpen: !!this.state.menuOpen, menuExpanded: this.state.menuOpen ? 'true' : 'false', openMenu: () => this.setState({ menuOpen: true }), closeMenu: () => this.setState({ menuOpen: false }),
      heroTitle: this.state.picked ? pageTitle : 'Daily Horoscope, Your Vedic Rashifal Insights',
      eyebrow: daily ? L.eyebrow : (hi ? 'राशिफल' : 'Horoscope'),
      signSlug: this.state.picked ? sg.en.toLowerCase() : undefined,
      L: L, langCode: this.state.lang, rashis: rashis, cur: sg,
      dayTabs: [['today', L.today], ['tomorrow', L.tomorrow], ['weekly', L.weekly], ['monthly', L.monthly], ['yearly', L.yearly], ['2027', '2027']].map((o) => ({ label: o[1], sel: this.state.day === o[0], notSel: this.state.day !== o[0], pick: () => this.selectView(o[0]) })),
      isDaily: daily, periodData: pdata, periodLoading: !daily && this.state.loadingKey === pkey, periodFailed: !daily && this.state.failedKey === pkey, curSign: { en: sg.en, hi: sg.hi, img: sg.img }, langTabs: tab('lang', [['en', 'English'], ['hi', 'हिंदी']]),
      title: pageTitle,
      sectionTitle: sg.en === undefined ? '' : (hi ? sg.hi : sg.en) + ' · ' + (daily ? (this.state.day === 'today' ? L.today : L.tomorrow) : VIEW_LABEL[this.state.day][0]),
      titleShort: hi ? sg.hi : sg.en,
      dateLine: !daily ? (pdata ? pdata.range : '') : hi ? dd.dateHi : dd.dateEn,
      signName: hi ? sg.hi : sg.en, signSub: hi ? 'स्वामी ' + sg.lordHi + ' · ' + sg.elHi + ' तत्व' : sg.hi + ' · Ruled by ' + sg.lord,
      day: d, ring: (C * d.overall / 100).toFixed(1) + ' ' + C.toFixed(1), bandLabel: L.bands[d.band],
      summary: hi ? d.whyHi[0] : d.whyEn[0],
      luckyColour: hi ? d.lucky.colHi : d.lucky.col,
      areas: d.areas.map((a) => ({ label: hi ? a.hi : a.en, score: a.score, text: hi ? a.textHi : a.textEn, icon: ICONS[a.id] })),
      luckyPlanet: hi ? d.lucky.gHi : d.lucky.g, luckyWhy: hi ? d.lucky.gHi + ' ' + d.lucky.whyHi + ' है।' : d.lucky.g + ' is ' + d.lucky.whyEn + '.',
      hasCalm: !!d.calm, noCalm: !d.calm, calmPlanet: d.calm ? (hi ? d.calm.gHi : d.calm.g) : '', calmWhy: d.calm ? (hi ? d.calm.whyHi : d.calm.whyEn) : '',
      why: hi ? d.whyHi : d.whyEn, panchang: hi ? dd.pancHi : dd.pancEn,
      muhuratTitle: hi ? 'आज के शुभ और अशुभ समय (नई दिल्ली)' : 'Good and avoid times today (New Delhi)',
      muhurat: (dd.muhurat || []).map((m) => ({ name: hi ? m.hi : m.en, time: m.time, note: hi ? m.noteHi : m.noteEn, good: m.good })),
      planets: d.planets.map((p) => ({ name: hi ? p.hi : p.en, r: p.retro ? ' R' : '', where: hi ? p.ordHi + ' भाव' : p.ordEn + ' house', good: p.good, bad: p.bad })),
      ctaTitle: hi ? 'यह राशिफल सभी ' + sg.hi + ' राशि वालों के लिए है। आपकी कुंडली सिर्फ़ आपकी है।' : 'This reading is for every ' + sg.en + ' Moon sign. Your chart is yours alone.',
      aboutTitle: hi ? sg.hi + ' राशि' : 'About ' + sg.en,
      facts: hi ? [{ k: 'स्वामी ग्रह', v: sg.lordHi }, { k: 'तत्व', v: sg.elHi }, { k: 'स्वभाव', v: sg.qHi }, { k: 'शुभ दिन', v: sg.dayHi }] : [{ k: 'Ruling planet', v: sg.lord }, { k: 'Element', v: sg.el }, { k: 'Nature', v: sg.q }, { k: 'Lucky day', v: sg.day }],
      strengths: hi ? sg.strHi : sg.str, challenges: hi ? sg.chHi : sg.ch,
      faqs: L.faqs
    };
  }
}

HoroscopePage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="Horoscope" style={{ display: "contents" }}>
      <div style={{fontFamily: "'Manrope', 'Noto Sans Devanagari', system-ui, sans-serif", color: "#1E1830", background: "#FBF7F0", fontSize: "14.5px", lineHeight: "1.6"}}>
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
              <a href={"/#consult"} style={{color: "#FFFFFF", textDecoration: "none"}}>
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
              <a href={"/consult"} className={"am-navcta"} style={{alignItems: "center", minHeight: "44px", padding: "0 22px", borderRadius: "999px", border: "2px solid #FCCE07", color: "#FFFFFF", fontWeight: "700", fontSize: "13.5px", textDecoration: "none"}}>
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
                  <a href={"/#consult"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
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
                  <a href={"/#blog"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "19px"}}>
                    {"Blogs"}
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
                  <p style={{margin: "auto 0 0", paddingTop: "32px", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "15px", color: "#EADFF2", textAlign: "center"}}>
                    {"ज्योतिष · अंक शास्त्र · वास्तु"}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <section aria-label={"Horoscope"} style={{position: "relative", overflow: "hidden", color: "#FFFFFF", background: "linear-gradient(180deg, #1B0026 0%, #2E003E 40%, #5A0F7C 100%)"}}>
          <div className={"am-stars"} aria-hidden={"true"} />
          <div className={"am-stars2"} aria-hidden={"true"} style={{opacity: "0.6"}} />
          <img className={"am-spin-zodiac"} src={"/images/610ce06ea07e7a2d1d36f4d88029f8db.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", left: "50%", top: "50%", width: "760px", height: "760px", marginLeft: "-380px", marginTop: "-300px", opacity: "0.22", pointerEvents: "none"}} />
          <span className={"am-shoot"} aria-hidden={"true"} style={{top: "20%", left: "62%", animationDelay: "2s"}} />
          <span className={"am-shoot"} aria-hidden={"true"} style={{top: "8%", left: "30%", animationDelay: "7s"}} />
          <div style={{position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "22px 24px 72px"}}>
            <nav aria-label={"Breadcrumb"} style={{fontSize: "13px", color: "#CDB8DA", marginBottom: "0"}}>
              <a href={"/"} style={{color: "#CDB8DA", textDecoration: "none"}}>
                {hole(v.L?.home)}
              </a>
              <span aria-hidden={"true"} style={{margin: "0 8px"}}>
                {"/"}
              </span>
              <a href={"/horoscope"} style={{color: "#CDB8DA", textDecoration: "none"}}>
                {hole(v.L?.horoscope)}
              </a>
              {v.signSlug ? (
              <>
              <span aria-hidden={"true"} style={{margin: "0 8px"}}>
                {"/"}
              </span>
              <span style={{color: "#FFFFFF", fontWeight: "600"}}>
                {hole(v.titleShort)}
              </span>
              </>
              ) : null}
            </nav>
            <div style={{textAlign: "center", maxWidth: "780px", margin: "36px auto 0"}}>
              <h1 style={{margin: "0 0 14px", fontFamily: "'Marcellus', 'Tiro Devanagari Hindi', serif", fontWeight: "400", fontSize: "clamp(28.5px, 4.25vw, 48px)", lineHeight: "1.1", color: "#FFFFFF"}}>
                {hole(v.heroTitle)}
              </h1>
              <p style={{margin: "0 auto 28px", maxWidth: "640px", fontSize: "15px", color: "#EADFF2"}}>
                {"Plan your day with clarity: auspicious timings, lucky numbers and colours, the hours that favour new work, and how love, career, money and health look for your sign."}
              </p>
              <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px"}}>
                <a href={"#rashi"} style={{display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 26px", borderRadius: "999px", background: "#FCCE07", color: "#2E003E", fontWeight: "700", textDecoration: "none"}}>
                  {"Explore Rashifal →"}
                </a>
                <a href={"https://wa.me/919129237566?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20my%20horoscope."} style={{display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 26px", borderRadius: "999px", border: "1.5px solid rgba(255,255,255,0.7)", color: "#FFFFFF", fontWeight: "700", textDecoration: "none"}}>
                  {"Get on WhatsApp"}
                </a>
              </div>
            </div>
          </div>
        </section>
        <div lang={v.langCode} style={{background: "radial-gradient(ellipse at 100% 0%, rgba(108,21,148,0.10), rgba(108,21,148,0) 50%), radial-gradient(ellipse at 0% 100%, rgba(146,26,17,0.05), rgba(146,26,17,0) 45%), #FBF7F0"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "36px 24px 8px", position: "relative"}}>
            <MoonForm onFound={this.selectSign} margin={"0 auto 28px"} />
            <div id={"rashi"} style={{scrollMarginTop: "90px"}}>
            <div className={"am-signs"} role={"tablist"} aria-label={"Choose your rashi"} style={{display: "flex", gap: "6px", overflowX: "auto", padding: "4px 2px 16px", margin: "0 auto", scrollSnapType: "x mandatory"}}>
              {(v.rashis || []).map((r, $index) => (
                <React.Fragment key={$index}>
                  {r?.sel ? (
                    <>
                      <button type={"button"} role={"tab"} aria-selected={"true"} onClick={r?.pick} className={"am-rashi"} style={{flex: "1 0 84px", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", padding: "4px 0", border: "0", background: "none", cursor: "pointer", font: "inherit", color: "#1E1830"}}>
                        <span style={{position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "80px", height: "80px"}}>
                          <svg className={"am-seal"} aria-hidden={"true"} viewBox={"0 0 116 116"} style={{position: "absolute", inset: "0", width: "100%", height: "100%"}} fill={"none"} stroke={"#921A11"} strokeOpacity={"1"} strokeWidth={"2"}>
                            <circle cx={"58"} cy={"58"} r={"56"} strokeDasharray={"4 4"} />
                            <path d={"M58 0V8M58 108V116M0 58H8M108 58H116"} strokeOpacity={"0.6"} />
                          </svg>
                          <span style={{display: "block", width: "64px", height: "64px", borderRadius: "999px", background: "#F3E8F7", boxShadow: "0 0 0 3px rgba(108,21,148,0.18), 0 12px 24px -10px rgba(46,0,62,0.55)"}}>
                            <img className={"am-rashi-img"} src={r?.img} alt={""} style={{width: "100%", height: "100%", display: "block", transition: "transform 0.4s ease"}} />
                          </span>
                        </span>
                        <span style={{fontFamily: "'Marcellus', serif", fontSize: "13.5px", lineHeight: "1.15", color: "#6C1594"}}>
                          {hole(r?.en)}
                        </span>
                        <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "13px", lineHeight: "1.1", color: "#921A11", marginTop: "-4px"}}>
                          {hole(r?.hi)}
                        </span>
                      </button>
                    </>
                  ) : null}
                  {r?.notSel ? (
                    <>
                      <button type={"button"} role={"tab"} aria-selected={"false"} onClick={r?.pick} className={"am-rashi"} style={{flex: "1 0 84px", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", padding: "4px 0", border: "0", background: "none", cursor: "pointer", font: "inherit", color: "#1E1830"}}>
                        <span style={{position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "80px", height: "80px"}}>
                          <svg className={"am-seal"} aria-hidden={"true"} viewBox={"0 0 116 116"} style={{position: "absolute", inset: "0", width: "100%", height: "100%"}} fill={"none"} stroke={"#6C1594"} strokeOpacity={"0.45"} strokeWidth={"1"}>
                            <circle cx={"58"} cy={"58"} r={"56"} strokeDasharray={"2 5"} />
                            <path d={"M58 0V8M58 108V116M0 58H8M108 58H116"} strokeOpacity={"0.6"} />
                          </svg>
                          <span style={{display: "block", width: "64px", height: "64px", borderRadius: "999px", background: "#FFFFFF", boxShadow: "0 10px 22px -12px rgba(46,0,62,0.45)"}}>
                            <img className={"am-rashi-img"} src={r?.img} alt={""} style={{width: "100%", height: "100%", display: "block", transition: "transform 0.4s ease"}} />
                          </span>
                        </span>
                        <span style={{fontFamily: "'Marcellus', serif", fontSize: "13.5px", lineHeight: "1.15"}}>
                          {hole(r?.en)}
                        </span>
                        <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "13px", lineHeight: "1.1", color: "#921A11", marginTop: "-4px"}}>
                          {hole(r?.hi)}
                        </span>
                      </button>
                    </>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", margin: "4px 0 0"}}>
                <div role={"tablist"} aria-label={"Day"} style={{display: "inline-flex", flexWrap: "wrap", gap: "4px", background: "#F3EDE3", padding: "4px", borderRadius: "24px"}}>
                  {(v.dayTabs || []).map((t, $index) => (
                    <React.Fragment key={$index}>
                      {t?.sel ? (
                        <>
                          <button type={"button"} role={"tab"} aria-selected={"true"} onClick={t?.pick} style={{minHeight: "40px", padding: "0 18px", borderRadius: "999px", border: "0", background: "#FFFFFF", color: "#2E003E", font: "inherit", fontSize: "13px", fontWeight: "700", boxShadow: "0 6px 14px -10px rgba(46,0,62,.55)", cursor: "pointer"}}>
                            {hole(t?.label)}
                          </button>
                        </>
                      ) : null}
                      {t?.notSel ? (
                        <>
                          <button type={"button"} role={"tab"} aria-selected={"false"} onClick={t?.pick} style={{minHeight: "40px", padding: "0 18px", borderRadius: "999px", border: "0", background: "transparent", color: "#5C5470", font: "inherit", fontSize: "13px", fontWeight: "600", cursor: "pointer"}}>
                            {hole(t?.label)}
                          </button>
                        </>
                      ) : null}
                    </React.Fragment>
                  ))}
                </div>
            </div>
          </div>
        </div>
        <div lang={v.langCode} style={{maxWidth: "1200px", margin: "0 auto", padding: "28px 24px 0"}}>
          <div style={{display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "14px 18px", marginBottom: "18px"}}>
            <div style={{minWidth: "0"}}>
              <h2 style={{margin: "0 0 4px", fontFamily: "'Marcellus', 'Tiro Devanagari Hindi', serif", fontWeight: "400", fontSize: "clamp(22.5px, 2.55vw, 30px)", lineHeight: "1.15"}}>
                {hole(v.sectionTitle)}
              </h2>
              <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470"}}>
                {hole(v.dateLine)}
              </p>
            </div>
            <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
                <div role={"tablist"} aria-label={"Language"} style={{display: "inline-flex", gap: "4px", background: "#F3EDE3", padding: "4px", borderRadius: "999px"}}>
                  {(v.langTabs || []).map((t, $index) => (
                    <React.Fragment key={$index}>
                      {t?.sel ? (
                        <>
                          <button type={"button"} role={"tab"} aria-selected={"true"} onClick={t?.pick} style={{minHeight: "40px", padding: "0 18px", borderRadius: "999px", border: "0", background: "#FFFFFF", color: "#2E003E", font: "inherit", fontSize: "13px", fontWeight: "700", boxShadow: "0 6px 14px -10px rgba(46,0,62,.55)", cursor: "pointer"}}>
                            {hole(t?.label)}
                          </button>
                        </>
                      ) : null}
                      {t?.notSel ? (
                        <>
                          <button type={"button"} role={"tab"} aria-selected={"false"} onClick={t?.pick} style={{minHeight: "40px", padding: "0 18px", borderRadius: "999px", border: "0", background: "transparent", color: "#5C5470", font: "inherit", fontSize: "13px", fontWeight: "600", cursor: "pointer"}}>
                            {hole(t?.label)}
                          </button>
                        </>
                      ) : null}
                    </React.Fragment>
                  ))}
                </div>
            </div>
          </div>
        </div>
        {v.isDaily ? (
        <>
        <div lang={v.langCode} style={{maxWidth: "1200px", margin: "0 auto", padding: "8px 24px 0"}}>
          <div className={"am-horo"} style={{display: "grid", gridTemplateColumns: "minmax(0, 380px) minmax(0, 1fr)", gap: "20px", alignItems: "start"}}>
            <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #2E003E 0%, #4A0A66 55%, #6C1594 100%)", color: "#FFFFFF", borderRadius: "22px", padding: "28px"}}>
              <div className={"am-stars"} aria-hidden={"true"} />
              <div style={{position: "relative", display: "flex", alignItems: "center", gap: "16px", marginBottom: "22px"}}>
                <img src={v.cur?.img} alt={""} style={{flex: "none", width: "72px", height: "72px", borderRadius: "999px", background: "#FFFFFF", boxShadow: "0 0 0 4px rgba(252,206,7,0.35)"}} />
                <div>
                  <p style={{margin: "0", fontFamily: "'Marcellus', 'Tiro Devanagari Hindi', serif", fontSize: "25.5px", lineHeight: "1.1"}}>
                    {hole(v.signName)}
                  </p>
                  <p style={{margin: "4px 0 0", fontSize: "13px", color: "#EADFF2"}}>
                    {hole(v.signSub)}
                  </p>
                </div>
              </div>
              <div style={{position: "relative", display: "flex", alignItems: "center", gap: "20px", padding: "18px 0", borderTop: "1px solid rgba(255,255,255,0.18)", borderBottom: "1px solid rgba(255,255,255,0.18)"}}>
                <div style={{position: "relative", flex: "none", width: "104px", height: "104px"}}>
                  <svg viewBox={"0 0 120 120"} aria-hidden={"true"} style={{width: "100%", height: "100%", transform: "rotate(-90deg)"}}>
                    <circle cx={"60"} cy={"60"} r={"52"} fill={"none"} stroke={"rgba(255,255,255,0.16)"} strokeWidth={"10"} />
                    <circle cx={"60"} cy={"60"} r={"52"} fill={"none"} stroke={"#FCCE07"} strokeWidth={"10"} strokeLinecap={"round"} strokeDasharray={v.ring} />
                  </svg>
                  <span style={{position: "absolute", inset: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <span style={{fontFamily: "'Marcellus', 'Tiro Devanagari Hindi', serif", fontSize: "27px", lineHeight: "1"}}>
                      {hole(v.day?.overall)}
                    </span>
                    <span style={{fontSize: "11px", color: "#EADFF2"}}>
                      {"/ 100"}
                    </span>
                  </span>
                </div>
                <div style={{minWidth: "0"}}>
                  <p style={{margin: "0 0 4px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
                    {hole(v.L?.overall)}
                  </p>
                  <p style={{margin: "0", fontFamily: "'Marcellus', 'Tiro Devanagari Hindi', serif", fontSize: "21px", lineHeight: "1.2"}}>
                    {hole(v.bandLabel)}
                  </p>
                </div>
              </div>
              <p style={{position: "relative", margin: "18px 0 0", fontSize: "13.5px", lineHeight: "1.65", color: "#F4EAF9"}}>
                {hole(v.summary)}
              </p>
              <div style={{position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "20px"}}>
                <div style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: "14px", padding: "12px 14px"}}>
                  <p style={{margin: "0", fontSize: "12px", color: "#EADFF2"}}>
                    {hole(v.L?.luckyNumber)}
                  </p>
                  <p style={{margin: "2px 0 0", fontFamily: "'Marcellus', 'Tiro Devanagari Hindi', serif", fontSize: "24px", lineHeight: "1.1"}}>
                    {hole(v.day?.lucky?.num)}
                  </p>
                </div>
                <div style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: "14px", padding: "12px 14px"}}>
                  <p style={{margin: "0", fontSize: "12px", color: "#EADFF2"}}>
                    {hole(v.L?.luckyColour)}
                  </p>
                  <p style={{margin: "6px 0 0", display: "flex", alignItems: "center", gap: "8px", fontWeight: "700"}}>
                    <svg width={"18"} height={"18"} aria-hidden={"true"}>
                      <circle cx={"9"} cy={"9"} r={"8"} fill={v.day?.lucky?.hex} stroke={"rgba(255,255,255,0.6)"} />
                    </svg>
                    {hole(v.luckyColour)}
                  </p>
                </div>
              </div>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "16px"}}>
              {(v.areas || []).map((a, $index) => (
                <React.Fragment key={$index}>
                  <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px"}}>
                    <div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px"}}>
                      <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "999px", background: "#F3E8F7", color: "#6C1594"}}>
                        <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.9"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                          <path d={a?.icon} />
                        </svg>
                      </span>
                      <span style={{flex: "1", fontFamily: "'Marcellus', 'Tiro Devanagari Hindi', serif", fontSize: "18.5px"}}>
                        {hole(a?.label)}
                      </span>
                      <span style={{fontWeight: "700", color: "#2E003E"}}>
                        {hole(a?.score)}
                        <span style={{fontWeight: "500", color: "#736B8A", fontSize: "12px"}}>
                          {" / 100"}
                        </span>
                      </span>
                    </div>
                    <progress className={"am-bar"} value={a?.score} max={"100"} aria-label={`${(a?.label) ?? ''} score`} style={{marginBottom: "14px"}} />
                    <p style={{margin: "0", fontSize: "13.5px", lineHeight: "1.65", color: "#3A3350"}}>
                      {hole(a?.text)}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div lang={v.langCode} style={{maxWidth: "1200px", margin: "0 auto", padding: "20px 24px 0"}}>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "16px"}}>
            <div style={{background: "#F3E8F7", borderRadius: "22px", padding: "24px 26px"}}>
              <p style={{margin: "0 0 4px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6C1594", fontWeight: "700"}}>
                {hole(v.L?.strengthen)}
                {" · "}
                {hole(v.luckyPlanet)}
              </p>
              <p style={{margin: "0 0 10px", fontSize: "13px", color: "#5C5470"}}>
                {hole(v.luckyWhy)}
              </p>
              <p style={{margin: "0", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "19px", color: "#2E003E"}}>
                {hole(v.day?.lucky?.mHi)}
              </p>
              <p style={{margin: "4px 0 0", fontSize: "13.5px", fontStyle: "italic", color: "#3D0752"}}>
                {hole(v.day?.lucky?.mEn)}
              </p>
            </div>
            {v.hasCalm ? (
              <>
                <div style={{background: "#FBEDEB", borderRadius: "22px", padding: "24px 26px"}}>
                  <p style={{margin: "0 0 4px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                    {hole(v.L?.calm)}
                    {" · "}
                    {hole(v.calmPlanet)}
                  </p>
                  <p style={{margin: "0 0 10px", fontSize: "13px", color: "#5C5470"}}>
                    {hole(v.calmWhy)}
                  </p>
                  <p style={{margin: "0", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "19px", color: "#5A0F0A"}}>
                    {hole(v.day?.calm?.mHi)}
                  </p>
                  <p style={{margin: "4px 0 0", fontSize: "13.5px", fontStyle: "italic", color: "#7A1A12"}}>
                    {hole(v.day?.calm?.mEn)}
                  </p>
                </div>
              </>
            ) : null}
            {v.noCalm ? (
              <>
                <div style={{background: "#FBEDEB", borderRadius: "22px", padding: "24px 26px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                  <p style={{margin: "0 0 4px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                    {hole(v.L?.calm)}
                  </p>
                  <p style={{margin: "0", fontFamily: "'Marcellus', 'Tiro Devanagari Hindi', serif", fontSize: "19px", color: "#5A0F0A"}}>
                    {hole(v.L?.noCalm)}
                  </p>
                </div>
              </>
            ) : null}
          </div>
          <p style={{margin: "12px 0 0", fontSize: "12px", color: "#5C5470"}}>
            {hole(v.L?.mantraNote)}
          </p>
        </div>
        <div lang={v.langCode} style={{maxWidth: "1200px", margin: "0 auto", padding: "72px 24px 0"}}>
          <div className={"am-center-mobile"} style={{marginBottom: "24px"}}>
            <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
              {hole(v.L?.whyEyebrow)}
            </p>
            <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', 'Tiro Devanagari Hindi', serif", fontWeight: "400", fontSize: "clamp(24px, 2.72vw, 33.5px)", lineHeight: "1.2"}}>
              {hole(v.L?.whyTitle)}
            </h2>
            <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470", maxWidth: "720px"}}>
              {hole(v.L?.whySub)}
            </p>
          </div>
          <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "24px 26px", marginBottom: "16px", display: "grid", gap: "12px"}}>
            {(v.why || []).map((w, $index) => (
              <React.Fragment key={$index}>
                <p style={{margin: "0", display: "flex", gap: "12px", fontSize: "13.5px", lineHeight: "1.6"}}>
                  <span style={{flex: "none", width: "8px", height: "8px", marginTop: "9px", borderRadius: "999px", background: "#6C1594"}} />
                  {hole(w)}
                </p>
              </React.Fragment>
            ))}
            <p style={{margin: "4px 0 0", paddingTop: "12px", borderTop: "1px solid #EFE6D8", fontSize: "13px", color: "#5C5470"}}>
              {hole(v.panchang)}
            </p>
            <div style={{paddingTop: "12px", borderTop: "1px solid #EFE6D8"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6C1594"}}>
                {hole(v.muhuratTitle)}
              </p>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: "10px"}}>
                {(v.muhurat || []).map((m, $index) => (
                  <div key={$index} style={{borderRadius: "14px", padding: "12px 14px", background: m.good ? "#F1F8EE" : "#FBF0EE", border: m.good ? "1px solid #CFE3C6" : "1px solid #EBCBC6"}}>
                    <div style={{fontWeight: "700", fontSize: "13.5px", color: m.good ? "#2C6B1F" : "#921A11"}}>{m.name}</div>
                    <div style={{fontSize: "13.5px", margin: "2px 0"}}>{m.time}</div>
                    <div style={{fontSize: "12px", color: "#5C5470"}}>{m.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(118px, 100%), 1fr))", gap: "10px"}}>
            {(v.planets || []).map((p, $index) => (
              <React.Fragment key={$index}>
                {p?.good ? (
                  <>
                    <div style={{background: "#FFFFFF", border: "1px solid #D7C6E6", borderRadius: "16px", padding: "14px", textAlign: "center"}}>
                      <p style={{margin: "0", fontFamily: "'Marcellus', 'Tiro Devanagari Hindi', serif", fontSize: "16px"}}>
                        {hole(p?.name)}
                        {hole(p?.r)}
                      </p>
                      <p style={{margin: "2px 0 8px", fontSize: "12px", color: "#5C5470"}}>
                        {hole(p?.where)}
                      </p>
                      <span style={{display: "inline-block", fontSize: "12px", fontWeight: "700", color: "#1F7A45", background: "#E5F4EA", padding: "3px 10px", borderRadius: "999px"}}>
                        {hole(v.L?.supportive)}
                      </span>
                    </div>
                  </>
                ) : null}
                {p?.bad ? (
                  <>
                    <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "14px", textAlign: "center"}}>
                      <p style={{margin: "0", fontFamily: "'Marcellus', 'Tiro Devanagari Hindi', serif", fontSize: "16px"}}>
                        {hole(p?.name)}
                        {hole(p?.r)}
                      </p>
                      <p style={{margin: "2px 0 8px", fontSize: "12px", color: "#5C5470"}}>
                        {hole(p?.where)}
                      </p>
                      <span style={{display: "inline-block", fontSize: "12px", fontWeight: "700", color: "#921A11", background: "#FBEDEB", padding: "3px 10px", borderRadius: "999px"}}>
                        {hole(v.L?.notSupportive)}
                      </span>
                    </div>
                  </>
                ) : null}
              </React.Fragment>
            ))}
          </div>
          <p style={{margin: "12px 0 0", fontSize: "12px", color: "#736B8A"}}>
            {hole(v.L?.retroNote)}
          </p>
        </div>
        </>
      ) : (
        <div lang={v.langCode} style={{maxWidth: "1200px", margin: "0 auto", padding: "8px 24px 0"}}>
          <PeriodPanel data={v.periodData} loading={v.periodLoading} failed={v.periodFailed} sign={v.curSign} />
        </div>
      )}
        <div lang={v.langCode} style={{maxWidth: "1200px", margin: "0 auto", padding: "72px 24px 0"}}>
          <div style={{position: "relative", overflow: "hidden", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "22px 32px", background: "linear-gradient(120deg, #2E003E 0%, #6C1594 100%)", color: "#FFFFFF", borderRadius: "24px", padding: "clamp(26px, 4vw, 40px)"}}>
            <div className={"am-stars"} aria-hidden={"true"} />
            <div style={{position: "relative", flex: "1 1 460px", minWidth: "0"}}>
              <p style={{margin: "0 0 8px", fontFamily: "'Marcellus', 'Tiro Devanagari Hindi', serif", fontSize: "clamp(21px, 2.21vw, 27px)", lineHeight: "1.2"}}>
                {hole(v.ctaTitle)}
              </p>
              <p style={{margin: "0", color: "#EADFF2", fontSize: "14.5px"}}>
                {hole(v.L?.ctaSub)}
              </p>
            </div>
            <div style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "12px"}}>
              <a href={"/report/kundli"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 26px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
                {hole(v.L?.ctaReport)}
              </a>
              <a href={"/kundli"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 26px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.45)", color: "#FFFFFF", fontWeight: "700", textDecoration: "none"}}>
                {hole(v.L?.ctaFree)}
              </a>
            </div>
          </div>
        </div>
        <div lang={v.langCode} style={{maxWidth: "1200px", margin: "0 auto", padding: "72px 24px 0"}}>
          <div className={"am-center-mobile"} style={{marginBottom: "24px"}}>
            <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
              {hole(v.L?.aboutEyebrow)}
            </p>
            <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', 'Tiro Devanagari Hindi', serif", fontWeight: "400", fontSize: "clamp(24px, 2.72vw, 33.5px)", lineHeight: "1.2"}}>
              {hole(v.aboutTitle)}
            </h2>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "16px"}}>
            <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px", display: "grid", gap: "12px"}}>
              {(v.facts || []).map((f, $index) => (
                <React.Fragment key={$index}>
                  <div style={{display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "13.5px", paddingBottom: "10px", borderBottom: "1px solid #EFE6D8"}}>
                    <span style={{color: "#5C5470"}}>
                      {hole(f?.k)}
                    </span>
                    <span style={{fontWeight: "700"}}>
                      {hole(f?.v)}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px"}}>
              <p style={{margin: "0 0 12px", fontFamily: "'Marcellus', 'Tiro Devanagari Hindi', serif", fontSize: "18.5px"}}>
                {hole(v.L?.strengths)}
              </p>
              {(v.strengths || []).map((t, $index) => (
                <React.Fragment key={$index}>
                  <p style={{margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                      <path d={"M5 12l5 5 9-10"} />
                    </svg>
                    {hole(t)}
                  </p>
                </React.Fragment>
              ))}
            </div>
            <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px"}}>
              <p style={{margin: "0 0 12px", fontFamily: "'Marcellus', 'Tiro Devanagari Hindi', serif", fontSize: "18.5px"}}>
                {hole(v.L?.watch)}
              </p>
              {(v.challenges || []).map((t, $index) => (
                <React.Fragment key={$index}>
                  <p style={{margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px"}}>
                    <span style={{flex: "none", width: "8px", height: "8px", marginTop: "8px", borderRadius: "999px", background: "#921A11"}} />
                    {hole(t)}
                  </p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div lang={v.langCode} style={{maxWidth: "860px", margin: "0 auto", padding: "72px 24px 88px"}}>
          <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', 'Tiro Devanagari Hindi', serif", fontWeight: "400", fontSize: "clamp(24px, 2.72vw, 33.5px)", lineHeight: "1.2", textAlign: "center", marginBottom: "28px"}}>
            {hole(v.L?.faqTitle)}
          </h2>
          <div style={{display: "grid", gap: "10px"}}>
            {(v.faqs || []).map((q, $index) => (
              <React.Fragment key={$index}>
                <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
                  <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                    {hole(q?.q)}
                    <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                      {"+"}
                    </span>
                  </summary>
                  <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                    {hole(q?.a)}
                  </p>
                </details>
              </React.Fragment>
            ))}
          </div>
        </div>
        {this.props.extras || null}
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 24px 96px"}}>
          <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(120deg, #2E003E 0%, #6C1594 100%)", color: "#FFFFFF", borderRadius: "28px"}}>
            <div className={"am-stars"} aria-hidden={"true"} />
            <img className={"am-spin"} src={"/images/c78c760843b4d5a96c8f408f537e3799.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", right: "-160px", top: "-150px", width: "460px", height: "460px", opacity: "0.2", pointerEvents: "none"}} />
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
                <a href={"/consult"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", minWidth: "240px", boxSizing: "border-box", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
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
                <a href={"/#consult"} style={{color: "#EADFF2", textDecoration: "none"}}>
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

export default HoroscopePage;
