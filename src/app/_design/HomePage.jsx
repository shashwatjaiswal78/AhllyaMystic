"use client";
/* eslint-disable */
// Generated from the design file Main.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { sx, hole } from "./sx";
import KundliForm from "./KundliForm";
import MobileForm from "./MobileForm";
import NameForm from "./NameForm";
import MoonForm from "./MoonForm";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState, maskDate, maskTime, maskTimeHM, maskPart } from "./wire";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({ expert: 'man', menuOpen: false, tool: 'kundli', sign: 0 }, props && props.initialState);
  }
  renderVals() {
    var signs = [
      { hi: 'मेष', en: 'Aries', planet: 'Mars', img: '/images/5a0f65dfaa71ef2c506dc1054947c5ff.png' },
      { hi: 'वृषभ', en: 'Taurus', planet: 'Venus', img: '/images/ac8af94238978a3e94d9c66080d26ddb.png' },
      { hi: 'मिथुन', en: 'Gemini', planet: 'Mercury', img: '/images/c1ecdc04c510562fdc5aab383261862b.png' },
      { hi: 'कर्क', en: 'Cancer', planet: 'Moon', img: '/images/1bc09452b30f9800803f58118330e4f6.png' },
      { hi: 'सिंह', en: 'Leo', planet: 'Sun', img: '/images/d09914f3b4274dc9bfc8af1deb71a1f0.png' },
      { hi: 'कन्या', en: 'Virgo', planet: 'Mercury', img: '/images/9578bc47ab6e5fe1f6f50da2361155b1.png' },
      { hi: 'तुला', en: 'Libra', planet: 'Venus', img: '/images/7943e80f8844d74d2b2ae5af9b8f064b.png' },
      { hi: 'वृश्चिक', en: 'Scorpio', planet: 'Mars', img: '/images/1a65871926eb0ac98d213af25887658a.png' },
      { hi: 'धनु', en: 'Sagittarius', planet: 'Jupiter', img: '/images/361b47e8acf0bbccc84b6d4f54a15fde.png' },
      { hi: 'मकर', en: 'Capricorn', planet: 'Saturn', img: '/images/6cf3444efe7515212067918671d3c45e.png' },
      { hi: 'कुंभ', en: 'Aquarius', planet: 'Saturn', img: '/images/ceaf4ebd9cd0c16b845146a5d128ca34.png' },
      { hi: 'मीन', en: 'Pisces', planet: 'Jupiter', img: '/images/9e65e00dea31321e5cf5ec94179adfa0.png' }
    ];
    var beej = {
      Sun: { en: 'Om Hraam Hreem Hraum Sah Suryaya Namah', hi: 'ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः' },
      Moon: { en: 'Om Shraam Shreem Shraum Sah Chandraya Namah', hi: 'ॐ श्रां श्रीं श्रौं सः चन्द्राय नमः' },
      Mars: { en: 'Om Kraam Kreem Kraum Sah Bhaumaya Namah', hi: 'ॐ क्रां क्रीं क्रौं सः भौमाय नमः' },
      Mercury: { en: 'Om Braam Breem Braum Sah Budhaya Namah', hi: 'ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः' },
      Jupiter: { en: 'Om Graam Greem Graum Sah Gurave Namah', hi: 'ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः' },
      Venus: { en: 'Om Draam Dreem Draum Sah Shukraya Namah', hi: 'ॐ द्रां द्रीं द्रौं सः शुक्राय नमः' },
      Saturn: { en: 'Om Praam Preem Praum Sah Shanaischaraya Namah', hi: 'ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः' },
      Rahu: { en: 'Om Bhraam Bhreem Bhraum Sah Rahave Namah', hi: 'ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः' },
      Ketu: { en: 'Om Sraam Sreem Sraum Sah Ketave Namah', hi: 'ॐ स्रां स्रीं स्रौं सः केतवे नमः' }
    };
    // Fallback only. The live values come from src/lib/horoscope/engine.ts through the `data` prop.
    // [love, career and finance, health, overall, lucky number, lucky colour, strengthen, calm, why]
    var day = [
      [35, 35, 35, 35, 3, 'Yellow', 'Jupiter', 'Saturn', 'Saturn is in the 12th house from Aries, the first phase of Sade Sati.'],
      [60, 75, 90, 75, 8, 'Blue', 'Saturn', 'Ketu', 'Ketu is in the 4th house from Taurus.'],
      [85, 75, 55, 70, 6, 'White', 'Venus', 'Saturn', 'Saturn is in the 10th house from Gemini.'],
      [55, 45, 35, 45, 5, 'Green', 'Mercury', 'Rahu', 'Rahu is in the 8th house from Cancer.'],
      [50, 45, 45, 45, 1, 'Orange', 'Sun', 'Moon', 'The Moon is in the 8th house from Leo (Chandrashtama).'],
      [90, 80, 70, 80, 5, 'Green', 'Mercury', 'Ketu', 'Ketu is in the 12th house from Virgo.'],
      [75, 65, 60, 65, 6, 'White', 'Venus', '', ''],
      [60, 50, 35, 50, 3, 'Yellow', 'Jupiter', 'Rahu', 'Rahu is in the 4th house from Scorpio.'],
      [55, 50, 45, 50, 3, 'Yellow', 'Jupiter', 'Saturn', 'Saturn is in the 4th house from Sagittarius, Kantaka Shani dhaiya.'],
      [60, 90, 75, 80, 8, 'Blue', 'Saturn', 'Ketu', 'Ketu is in the 8th house from Capricorn.'],
      [60, 40, 45, 45, 6, 'White', 'Venus', 'Saturn', 'Saturn is in the 2nd house from Aquarius, the last phase of Sade Sati.'],
      [80, 75, 50, 70, 3, 'Yellow', 'Jupiter', 'Saturn', 'Saturn is over Pisces, the peak of Sade Sati.']
    ];
    var overviews = [
      'A steady, grounded day. Small, patient steps will bring more progress than big leaps, so finish what you have already started.',
      'Energy runs high today. A good day to begin something new, speak your mind kindly and take the first step on a plan you have been delaying.',
      'Pause before you react. Listening more than you speak will help you see a situation clearly and avoid needless friction.',
      'A warm, hopeful day. Support may come from an unexpected person, so stay open to help and remember to say thank you.'
    ];
    var loves = ['Gentle words go a long way with your partner today.', 'A good day to plan time together and talk about the future.', 'Avoid old arguments and give each other a little space.', 'If you are single, a friendly conversation could turn into something more.'];
    var careers = ['Focus on one important task and see it through.', 'A good day for meetings and sharing new ideas.', 'Review money matters carefully before committing to anything.', 'Work you put in earlier begins to show results.'];
    var healths = ['Drink plenty of water and try to sleep early.', 'A short walk will clear your mind and lift your mood.', 'Rest your eyes from screens and mind your posture.', 'Light, home-cooked food will keep your energy steady.'];
    var moodSets = [['Calm', 'Focused', 'Patient'], ['Energetic', 'Bold', 'Optimistic'], ['Reflective', 'Careful', 'Thoughtful'], ['Hopeful', 'Warm', 'Grateful']];
    var si = this.state.sign || 0;
    var s = signs[si];
    var hd = this.props.data && this.props.data.days.today.signs[si];
    var dv = hd ? [hd.scores.love, Math.round((hd.scores.career + hd.scores.money) / 10) * 5, hd.scores.health, hd.scores.overall, hd.lucky.num, hd.lucky.col, hd.lucky.g, hd.calm ? hd.calm.g : '', hd.calm ? hd.calm.whyEn : ''] : day[si];
    var love = dv[0], career = dv[1], health = dv[2];
    var strong = beej[dv[6]], calm = dv[7] ? beej[dv[7]] : null;
    var k = si % 4;
    if (hd) { moodSets = [['Hopeful', 'Energetic', 'Optimistic'], ['Calm', 'Focused', 'Patient'], ['Reflective', 'Careful', 'Thoughtful']]; k = hd.band; }
    var cur = {
      en: s.en, hi: s.hi, img: s.img, planet: s.planet, slug: s.en.toLowerCase(),
      num: dv[4], colour: dv[5],
      strongPlanet: dv[6], strongEn: strong.en, strongHi: strong.hi,
      hasCalm: !!calm, noCalm: !calm, calmPlanet: dv[7],
      calmEn: calm ? calm.en : '', calmHi: calm ? calm.hi : '', calmWhy: dv[8],
      overall: dv[3] + '%',
      bars: [
        { label: 'Love', pct: love, pctLabel: love + '%' },
        { label: 'Career and finance', pct: career, pctLabel: career + '%' },
        { label: 'Health', pct: health, pctLabel: health + '%' }
      ],
      moods: moodSets[k].map((w) => ({ word: w })),
      overview: hd ? hd.whyEn[0] : overviews[k], love: hd ? hd.areas[0].textEn : loves[(k + 1) % 4], career: hd ? hd.areas[1].textEn : careers[(k + 2) % 4], health: hd ? hd.areas[3].textEn : healths[(k + 3) % 4]
    };
    var rashis = signs.map((x, i) => ({
      hi: x.hi, en: x.en, img: x.img,
      sel: i === si, notSel: i !== si,
      pick: () => this.setState({ sign: i })
    }));
    var todayDate = this.props.data ? this.props.data.days.today.dateEn : this.state.__now ? new Date(this.state.__now).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : '';
    var isMan = this.state.expert !== 'san';
    var CP = isMan ? ['₹2,301', '₹4,101', '₹5,001', '₹7,201', '₹3,101'] : ['₹4,001', '₹6,301', '₹7,601', '₹11,111', '₹5,100'];
    var plans = [
      { name: 'One area', blurb: 'A focused session on the area that matters most right now.', price: CP[0], mins: '20 min', i1: 'Pick any one: career, love, money, health, education or child', i2: 'Your chart studied before the call', i3: 'Simple, practical remedies', cta: 'Book one area', href: '/consult?expert=' + (isMan ? 'man' : 'san') + '&sess=one' },
      { name: 'Two areas', blurb: 'For two questions that sit side by side, like career and money.', price: CP[1], mins: '30 min', i1: 'Pick any two areas of your life', i2: 'How the two connect in your chart', i3: 'Remedies for both areas', cta: 'Book two areas', href: '/consult?expert=' + (isMan ? 'man' : 'san') + '&sess=two' },
      { name: 'Three areas', blurb: 'A broader reading that connects the different parts of your life.', price: CP[2], mins: '45 min', i1: 'Pick any three areas of your life', i2: 'Timing guidance from your dasha periods', i3: 'Personalised remedies for each area', cta: 'Book three areas', href: '/consult?expert=' + (isMan ? 'man' : 'san') + '&sess=three' }
    ];
    var menuOpen = !!this.state.menuOpen;
    var tool = this.state.tool || 'kundli';
    var defs = [
      { id: 'kundli', label: 'Free Kundli' },
      { id: 'kp', label: 'KP Kundli' },
      { id: 'name', label: 'Name number' },
      { id: 'mobile', label: 'Mobile number' }
    ];
    var tools = defs.map((d) => ({
      label: d.label,
      sel: tool === d.id,
      notSel: tool !== d.id,
      pick: () => this.setState({ tool: d.id })
    }));
    var descs = {
      kundli: 'Check your chart for free before buying a report. If a dosha or placement needs attention, our Personalised Kundli Report explains it, with remedies.',
      kp: 'KP is known for precise timing of events. See your chart for free, and if your question needs deeper guidance, a consultation gives you exact answers.',
      name: 'Not every name needs changing. Check for free if yours supports your birth number, and get a spelling correction only if it doesn’t.',
      mobile: 'Check for free if your mobile number works in your favour. Only if it doesn’t, our report suggests lucky combinations to choose from.'
    };
    return {
      tools: tools,
      toolDesc: descs[tool],
      toolLabel: (defs.filter((d) => d.id === tool)[0] || defs[0]).label,
      isKundli: tool === 'kundli',
      isKp: tool === 'kp',
      isName: tool === 'name',
      isMobile: tool === 'mobile',
      isMoon: tool === 'moon',
      menuOpen: menuOpen,
      menuExpanded: menuOpen ? 'true' : 'false',
      openMenu: () => this.setState({ menuOpen: true }),
      closeMenu: () => this.setState({ menuOpen: false }),
      pickMan: () => this.setState({ expert: 'man' }),
      pickSan: () => this.setState({ expert: 'san' }),
      isMan: isMan, isSan: !isMan, completeHref: '/consult?expert=' + (isMan ? 'man' : 'san') + '&sess=all',
      plans: plans, fullPrice: CP[3], diwaliPrice: CP[4],
      rashis: rashis,
      onMoon: (i) => this.setState({ sign: i }),
      cur: cur,
      todayDate: todayDate
    };
  }
}

HomePage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="Main" style={{ display: "contents" }}>
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
              <a href={"/#consult"} style={{color: "#FFFFFF", textDecoration: "none"}}>
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
                  <a href={"/#consult"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
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
        <div style={{background: "linear-gradient(180deg, #2E003E 0%, #3D0752 45%, #6C1594 100%)", color: "#FFFFFF", position: "relative", overflow: "hidden"}}>
          <div className={"am-stars"} aria-hidden={"true"} />
          <div className={"am-stars2"} aria-hidden={"true"} />
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: "1"}}>
            <div className={"am-hero-row"} style={{display: "flex", flexWrap: "wrap", alignItems: "center"}}>
              <div className={"am-hero-copy"} style={{flex: "1.5 1 520px", minWidth: "0"}}>
                <p style={{margin: "0 0 14px"}}>
                  <span style={{display: "inline-block", padding: "5px 18px 3px", borderRadius: "999px", background: "#FBF1EE", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "20px", lineHeight: "1.5", color: "#921A11"}}>
                    {"ज्योतिष · अंक शास्त्र · वास्तु"}
                  </span>
                </p>
                <p style={{margin: "0 0 20px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#EADFF2", fontWeight: "600"}}>
                  {"Vedic astrology · KP astrology · Numerology · Vastu"}
                </p>
                <h1 style={{margin: "0 0 22px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.08", letterSpacing: "-0.01em", color: "#FFFFFF"}}>
                  {"Clarity on love,"}
                  <br />
                  {"career and money."}
                </h1>
                <p className={"am-hero-sub"} style={{margin: "0 0 32px", color: "#EADFF2"}}>
                  {"One-on-one consultations and hand-prepared reports by experts, never generated by software."}
                </p>
                <div className={"am-hero-flex"} style={{display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "40px"}}>
                  <a href={"/consult"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", minHeight: "52px", minWidth: "248px", boxSizing: "border-box", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "16px", textDecoration: "none", boxShadow: "0 10px 30px -10px rgba(252,206,7,0.55)"}}>
                    {"Book a consultation "}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M5 12h14M13 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/kundli"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", minWidth: "248px", boxSizing: "border-box", padding: "0 28px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.45)", color: "#FFFFFF", fontWeight: "700", fontSize: "16px", textDecoration: "none"}}>
                    {"Get your free Kundli"}
                  </a>
                </div>
                <div className={"am-hero-flex"} style={{display: "flex", flexWrap: "wrap", gap: "12px 28px", fontSize: "14px", color: "#EADFF2"}}>
                  <span style={{display: "inline-flex", alignItems: "center", gap: "8px"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M5 12l4 4 10-10"} />
                    </svg>
                    {"Hand-prepared, not auto-generated"}
                  </span>
                  <span style={{display: "inline-flex", alignItems: "center", gap: "8px"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M5 12l4 4 10-10"} />
                    </svg>
                    {"Audio or video calls"}
                  </span>
                  <span style={{display: "inline-flex", alignItems: "center", gap: "8px"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M5 12l4 4 10-10"} />
                    </svg>
                    {"Pay securely by UPI or card"}
                  </span>
                  <span style={{display: "inline-flex", alignItems: "center", gap: "8px"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M5 12l4 4 10-10"} />
                    </svg>
                    {"100% reliable"}
                  </span>
                  <span style={{display: "inline-flex", alignItems: "center", gap: "8px"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M5 12l4 4 10-10"} />
                    </svg>
                    {"100% confidential"}
                  </span>
                </div>
              </div>
              <div style={{flex: "1 1 440px", minWidth: "0", display: "flex", justifyContent: "center", paddingBottom: "110px"}}>
                <div style={{position: "relative", width: "min(600px, 100%)", aspectRatio: "1 / 1"}}>
                  <div className={"am-halo"} aria-hidden={"true"} style={{position: "absolute", inset: "8%", borderRadius: "999px", background: "radial-gradient(circle, rgba(255,255,255,0.30) 0%, rgba(234,223,242,0.12) 45%, rgba(255,255,255,0) 72%)"}} />
                  <img className={"am-spin-zodiac"} src={"/images/9f12ecbbc1351b2a79d2c5c2543824a3.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", opacity: "0.95"}} />
                  <div style={{position: "absolute", top: "17%", left: "17%", width: "66%", height: "66%"}}>
                    <img src={"/images/be669e4f4ef64c09b37d47c940f4daa1.png"} alt={"Maneswita and Ahalya Sangeeta, founders of Ahllya Mystic"} style={{width: "100%", height: "100%", display: "block", filter: "drop-shadow(0 24px 30px rgba(20,0,28,0.45))"}} />
                  </div>
                  <div className={"am-float"} style={{position: "absolute", left: "0", right: "0", margin: "0 auto", width: "fit-content", bottom: "-4%", background: "linear-gradient(135deg, rgba(46,0,62,0.92) 0%, rgba(108,21,148,0.92) 100%)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: "16px", padding: "14px 18px", maxWidth: "calc(100% - 16px)", boxSizing: "border-box", textAlign: "center", boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)"}}>
                    <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "18px", color: "#FFFFFF"}}>
                      {"Maneswita and Ahalya Sangeeta"}
                    </p>
                    <p className={"am-nowrap"} style={{margin: "2px 0 0", fontSize: "13px", color: "#EADFF2", lineHeight: "1.45"}}>
                      {"Vedic, KP Astrology, Numerology & Vastu Expert"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg aria-hidden={"true"} viewBox={"0 0 1440 70"} preserveAspectRatio={"none"} style={{position: "absolute", left: "0", bottom: "-1px", width: "100%", height: "70px", display: "block", zIndex: "2"}}>
            <path d={"M0 0Q720 70 1440 0V70H0Z"} fill={"#FBF7F0"} />
          </svg>
        </div>
        <div style={{position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at 0% 100%, rgba(146,26,17,0.06), rgba(146,26,17,0) 50%), #FBF7F0"}}>
          <img className={"am-spin-rev"} src={"/images/139dc9f8771bafe47e83ebdfd8f024a6.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", top: "-110px", right: "-170px", width: "560px", height: "560px", opacity: "0.14", pointerEvents: "none"}} />
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px 88px", position: "relative"}}>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 40px", marginBottom: "44px"}}>
              <div className={"am-center-mobile"} style={{width: "100%"}}>
                <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                  {"Where do you need clarity?"}
                </p>
                <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15"}}>
                  <span className={"am-nowrap"}>
                    {"Find answers for the areas that matter most."}
                  </span>
                </h2>
                <p style={{margin: "0", fontSize: "16px", color: "#5C5470"}}>
                  <span className={"am-nowrap-lg"}>
                    {"Whether you’re navigating love, health, career, or finances, we’re here to support you with compassion and clarity."}
                  </span>
                  <br className={"am-br-desk"} />
                  {" "}
                  <span className={"am-nowrap-lg"}>
                    {"Our remedies are simple, our approach personal, and our goal is your peace."}
                  </span>
                </p>
              </div>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "20px"}}>
              <a href={"#consult"} className={"am-lift"} style={{display: "flex", gap: "18px", padding: "26px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", textDecoration: "none", color: "#1E1830"}}>
                <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", boxShadow: "0 0 0 4px #FFFFFF, 0 0 0 5px rgba(252,206,7,0.55)"}}>
                  <svg aria-hidden={"true"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"} />
                  </svg>
                </span>
                <span style={{display: "block"}}>
                  <span style={{display: "block", fontFamily: "'Marcellus', serif", fontSize: "21px", marginBottom: "4px"}}>
                    {"Love and marriage"}
                  </span>
                  <span style={{display: "block", fontSize: "15px", color: "#5C5470"}}>
                    {"Compatibility, delays in marriage, and whether this relationship is right for you."}
                  </span>
                </span>
              </a>
              <a href={"#consult"} className={"am-lift"} style={{display: "flex", gap: "18px", padding: "26px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", textDecoration: "none", color: "#1E1830"}}>
                <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", boxShadow: "0 0 0 4px #FFFFFF, 0 0 0 5px rgba(252,206,7,0.55)"}}>
                  <svg aria-hidden={"true"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <rect x={"3"} y={"7"} width={"18"} height={"13"} rx={"2"} />
                    <path d={"M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"} />
                  </svg>
                </span>
                <span style={{display: "block"}}>
                  <span style={{display: "block", fontFamily: "'Marcellus', serif", fontSize: "21px", marginBottom: "4px"}}>
                    {"Career and business"}
                  </span>
                  <span style={{display: "block", fontSize: "15px", color: "#5C5470"}}>
                    {"Job or business, the right time to switch, invest or expand."}
                  </span>
                </span>
              </a>
              <a href={"#consult"} className={"am-lift"} style={{display: "flex", gap: "18px", padding: "26px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", textDecoration: "none", color: "#1E1830"}}>
                <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", boxShadow: "0 0 0 4px #FFFFFF, 0 0 0 5px rgba(252,206,7,0.55)"}}>
                  <svg aria-hidden={"true"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <ellipse cx={"12"} cy={"6"} rx={"7"} ry={"3"} />
                    <path d={"M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"} />
                  </svg>
                </span>
                <span style={{display: "block"}}>
                  <span style={{display: "block", fontFamily: "'Marcellus', serif", fontSize: "21px", marginBottom: "4px"}}>
                    {"Money and growth"}
                  </span>
                  <span style={{display: "block", fontSize: "15px", color: "#5C5470"}}>
                    {"Where the blocks in your finances come from and what to do about them."}
                  </span>
                </span>
              </a>
              <a href={"#consult"} className={"am-lift"} style={{display: "flex", gap: "18px", padding: "26px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", textDecoration: "none", color: "#1E1830"}}>
                <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", boxShadow: "0 0 0 4px #FFFFFF, 0 0 0 5px rgba(252,206,7,0.55)"}}>
                  <svg aria-hidden={"true"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M5 19c0-8 6-14 15-14 0 9-6 15-14 15"} />
                    <path d={"M5 19l8-8"} />
                  </svg>
                </span>
                <span style={{display: "block"}}>
                  <span style={{display: "block", fontFamily: "'Marcellus', serif", fontSize: "21px", marginBottom: "4px"}}>
                    {"Health and wellbeing"}
                  </span>
                  <span style={{display: "block", fontSize: "15px", color: "#5C5470"}}>
                    {"Understanding the phases in your chart that ask for extra care and balance."}
                  </span>
                </span>
              </a>
              <a href={"#consult"} className={"am-lift"} style={{display: "flex", gap: "18px", padding: "26px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", textDecoration: "none", color: "#1E1830"}}>
                <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", boxShadow: "0 0 0 4px #FFFFFF, 0 0 0 5px rgba(252,206,7,0.55)"}}>
                  <svg aria-hidden={"true"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"} />
                    <path d={"M4 19V5M9 7h6"} />
                  </svg>
                </span>
                <span style={{display: "block"}}>
                  <span style={{display: "block", fontFamily: "'Marcellus', serif", fontSize: "21px", marginBottom: "4px"}}>
                    {"Education"}
                  </span>
                  <span style={{display: "block", fontSize: "15px", color: "#5C5470"}}>
                    {"The right stream, exam timing and plans to study abroad."}
                  </span>
                </span>
              </a>
              <a href={"#consult"} className={"am-lift"} style={{display: "flex", gap: "18px", padding: "26px", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", textDecoration: "none", color: "#1E1830"}}>
                <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", boxShadow: "0 0 0 4px #FFFFFF, 0 0 0 5px rgba(252,206,7,0.55)"}}>
                  <svg aria-hidden={"true"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <circle cx={"9"} cy={"8"} r={"3"} />
                    <circle cx={"17"} cy={"10"} r={"2"} />
                    <path d={"M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.2 1.3-4 3-4s3 1.8 3 4"} />
                  </svg>
                </span>
                <span style={{display: "block"}}>
                  <span style={{display: "block", fontFamily: "'Marcellus', serif", fontSize: "21px", marginBottom: "4px"}}>
                    {"Child and family"}
                  </span>
                  <span style={{display: "block", fontSize: "15px", color: "#5C5470"}}>
                    {"Family planning, your child's nature and talents, and naming."}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div id={"consult"} style={{position: "relative", overflow: "hidden", color: "#FFFFFF", background: "radial-gradient(ellipse at 18% 22%, rgba(108,21,148,0.65) 0%, rgba(108,21,148,0) 50%), radial-gradient(ellipse at 88% 78%, rgba(146,26,17,0.30) 0%, rgba(146,26,17,0) 45%), radial-gradient(ellipse at 70% 8%, rgba(74,10,102,0.7) 0%, rgba(74,10,102,0) 55%), linear-gradient(180deg, #16001F 0%, #2E003E 50%, #16001F 100%)"}}>
          <div className={"am-stars"} aria-hidden={"true"} />
          <div className={"am-stars2"} aria-hidden={"true"} />
          <img className={"am-spin-zodiac"} src={"/images/610ce06ea07e7a2d1d36f4d88029f8db.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", left: "-220px", bottom: "-240px", width: "640px", height: "640px", opacity: "0.22"}} />
          <img className={"am-spin-rev"} src={"/images/610ce06ea07e7a2d1d36f4d88029f8db.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", right: "-170px", top: "-170px", width: "440px", height: "440px", opacity: "0.12"}} />
          <div aria-hidden={"true"} style={{position: "absolute", top: "12%", left: "40%", width: "520px", height: "520px", borderRadius: "999px", background: "radial-gradient(circle, rgba(234,223,242,0.10) 0%, rgba(234,223,242,0) 65%)", pointerEvents: "none"}} />
          <span className={"am-shoot"} aria-hidden={"true"} style={{top: "8%", left: "78%"}} />
          <span className={"am-shoot"} aria-hidden={"true"} style={{top: "30%", left: "30%", animationDelay: "4.5s"}} />
          <span className={"am-shoot"} aria-hidden={"true"} style={{top: "4%", left: "52%", animationDelay: "8s"}} />
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "56px 24px 52px", position: "relative"}}>
            <div style={{textAlign: "center", margin: "0 auto 28px"}}>
              <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(30px, 2.9vw, 40px)", lineHeight: "1.15", color: "#FFFFFF"}}>
                {"Sometimes all you need is the right person to listen."}
              </h2>
              <p style={{margin: "0", color: "#EADFF2", fontSize: "17px"}}>
                {"Tell us what’s on your mind, and we’ll help you find the way forward."}
              </p>
            </div>
            <div role={"group"} aria-label={"Choose your expert"} style={{display: "flex", justifyContent: "center", marginBottom: "30px"}}>
              <div style={{display: "inline-flex", flexWrap: "wrap", justifyContent: "center", padding: "5px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.28)", borderRadius: "999px", gap: "4px", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)"}}>
                {v.isMan ? (
                  <>
                    <button type={"button"} aria-pressed={"true"} onClick={v.pickMan} style={{font: "inherit", fontSize: "15px", fontWeight: "700", minHeight: "44px", padding: "0 22px", border: "0", borderRadius: "999px", cursor: "pointer", background: "#FFFFFF", color: "#2E003E"}}>
                      {"Expert"}
                    </button>
                    <button type={"button"} aria-pressed={"false"} onClick={v.pickSan} style={{font: "inherit", fontSize: "15px", fontWeight: "700", minHeight: "44px", padding: "0 22px", border: "0", borderRadius: "999px", cursor: "pointer", background: "transparent", color: "#EADFF2"}}>
                      {"Senior Expert"}
                    </button>
                  </>
                ) : null}
                {v.isSan ? (
                  <>
                    <button type={"button"} aria-pressed={"false"} onClick={v.pickMan} style={{font: "inherit", fontSize: "15px", fontWeight: "700", minHeight: "44px", padding: "0 22px", border: "0", borderRadius: "999px", cursor: "pointer", background: "transparent", color: "#EADFF2"}}>
                      {"Expert"}
                    </button>
                    <button type={"button"} aria-pressed={"true"} onClick={v.pickSan} style={{font: "inherit", fontSize: "15px", fontWeight: "700", minHeight: "44px", padding: "0 22px", border: "0", borderRadius: "999px", cursor: "pointer", background: "#FFFFFF", color: "#2E003E"}}>
                      {"Senior Expert"}
                    </button>
                  </>
                ) : null}
              </div>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "20px", maxWidth: "1160px", margin: "0 auto"}}>
              {(v.plans || []).map((pl, $index) => (
                <React.Fragment key={$index}>
                  <div className={"am-lift"} style={{background: "#FFFFFF", color: "#1E1830", border: "1px solid #E2D7C4", borderRadius: "24px", padding: "24px 24px", display: "flex", flexDirection: "column", gap: "14px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", boxShadow: "0 30px 70px -30px rgba(0,0,0,0.7)"}}>
                    <div>
                      <p style={{margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: "25px"}}>
                        {hole(pl?.name)}
                      </p>
                      <p style={{margin: "0", fontSize: "14.5px", color: "#5C5470"}}>
                        {hole(pl?.blurb)}
                      </p>
                    </div>
                    <p style={{margin: "0", display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap"}}>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "38px", lineHeight: "1"}}>
                        {hole(pl?.price)}
                      </span>
                      <span style={{fontSize: "14px", color: "#5C5470"}}>
                        {hole(pl?.mins)}
                        {" call"}
                      </span>
                    </p>
                    <ul style={{margin: "0", padding: "0", listStyle: "none", display: "grid", gap: "10px", fontSize: "14.5px"}}>
                      <li style={{display: "flex", gap: "10px"}}>
                        <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "2px"}}>
                          <path d={"M5 12l4 4 10-10"} />
                        </svg>
                        {hole(pl?.i1)}
                      </li>
                      <li style={{display: "flex", gap: "10px"}}>
                        <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "2px"}}>
                          <path d={"M5 12l4 4 10-10"} />
                        </svg>
                        {hole(pl?.i2)}
                      </li>
                      <li style={{display: "flex", gap: "10px"}}>
                        <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "2px"}}>
                          <path d={"M5 12l4 4 10-10"} />
                        </svg>
                        {hole(pl?.i3)}
                      </li>
                    </ul>
                    <a href={pl?.href} style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "52px", borderRadius: "999px", background: "#FFFFFF", border: "2px solid #FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
                      {hole(pl?.cta)}
                    </a>
                  </div>
                </React.Fragment>
              ))}
              <div className={"am-lift"} style={{position: "relative", overflow: "visible", background: "linear-gradient(160deg, #6C1594 0%, #2E003E 100%)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "24px", padding: "24px 24px", display: "flex", flexDirection: "column", gap: "14px", boxShadow: "0 0 70px -12px rgba(108,21,148,0.9), 0 30px 70px -30px rgba(0,0,0,0.7)"}}>
                <div className={"am-stars"} aria-hidden={"true"} style={{opacity: "0.7", borderRadius: "24px"}} />
                <span style={{position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap", zIndex: "2", background: "#FFFFFF", color: "#921A11", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", padding: "5px 14px", borderRadius: "999px", boxShadow: "0 6px 16px -6px rgba(0,0,0,0.5)"}}>
                  {"Most complete"}
                </span>
                <div style={{position: "relative"}}>
                  <p style={{margin: "0 0 4px", fontFamily: "'Marcellus', serif", fontSize: "25px", color: "#FFFFFF"}}>
                    {"Complete"}
                  </p>
                  <p style={{margin: "0", fontSize: "14.5px", color: "#EADFF2"}}>
                    {"Your whole chart, every area, and as many questions as you have."}
                  </p>
                </div>
                <p style={{position: "relative", margin: "0", display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap"}}>
                  <span style={{fontFamily: "'Marcellus', serif", fontSize: "38px", lineHeight: "1", color: "#FFFFFF"}}>
                    {hole(v.fullPrice)}
                  </span>
                  <span style={{fontSize: "14px", color: "#EADFF2"}}>
                    {"60 min call"}
                  </span>
                </p>
                <ul style={{position: "relative", margin: "0", padding: "0", listStyle: "none", display: "grid", gap: "10px", fontSize: "14.5px", color: "#FFFFFF"}}>
                  <li style={{display: "flex", gap: "10px"}}>
                    <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "2px"}}>
                      <path d={"M5 12l4 4 10-10"} />
                    </svg>
                    {"All areas of life, any number of questions"}
                  </li>
                  <li style={{display: "flex", gap: "10px"}}>
                    <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "2px"}}>
                      <path d={"M5 12l4 4 10-10"} />
                    </svg>
                    {"Timing for the years ahead from your dasha periods"}
                  </li>
                  <li style={{display: "flex", gap: "10px"}}>
                    <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "2px"}}>
                      <path d={"M5 12l4 4 10-10"} />
                    </svg>
                    {"Personalised remedies for every area"}
                  </li>
                </ul>
                <a href={v.completeHref} style={{position: "relative", marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "52px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
                  {"Book complete call"}
                </a>
              </div>
            </div>
            <p style={{margin: "22px auto 0", maxWidth: "760px", textAlign: "center", fontSize: "14.5px", color: "#FFFFFF"}}>
              <span style={{display: "inline-block", background: "#921A11", color: "#FFFFFF", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "999px", marginRight: "8px"}}>
                {"Diwali offer"}
              </span>
              {"Complete consultation for "}
              {hole(v.diwaliPrice)}
              {" instead of "}
              {hole(v.fullPrice)}
              {", till 8 November. "}
              <a href={"/consult"} style={{color: "#FCCE07", fontWeight: "700"}}>
                {"See the offer"}
              </a>
            </p>
            <ol style={{listStyle: "none", margin: "32px auto 0", padding: "0", maxWidth: "980px", alignItems: "start", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "24px"}}>
              <li style={{display: "grid", gap: "6px", alignContent: "start"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.06)", fontFamily: "'Marcellus', serif", fontSize: "15px", color: "#FFFFFF"}}>
                  {"01"}
                </span>
                <span style={{fontWeight: "700"}}>
                  {"Choose your call"}
                </span>
                <span style={{fontSize: "14px", color: "#EADFF2"}}>
                  {"Your expert, and one, two, three or all areas."}
                </span>
              </li>
              <li style={{display: "grid", gap: "6px", alignContent: "start"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.06)", fontFamily: "'Marcellus', serif", fontSize: "15px", color: "#FFFFFF"}}>
                  {"02"}
                </span>
                <span style={{fontWeight: "700"}}>
                  {"Pay securely"}
                </span>
                <span style={{fontSize: "14px", color: "#EADFF2"}}>
                  {"UPI, card or netbanking."}
                </span>
              </li>
              <li style={{display: "grid", gap: "6px", alignContent: "start"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.06)", fontFamily: "'Marcellus', serif", fontSize: "15px", color: "#FFFFFF"}}>
                  {"03"}
                </span>
                <span style={{fontWeight: "700"}}>
                  {"Share your birth details"}
                </span>
                <span style={{fontSize: "14px", color: "#EADFF2"}}>
                  {"Date, time and place of birth."}
                </span>
              </li>
              <li style={{display: "grid", gap: "6px", alignContent: "start"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.06)", fontFamily: "'Marcellus', serif", fontSize: "15px", color: "#FFFFFF"}}>
                  {"04"}
                </span>
                <span style={{fontWeight: "700"}}>
                  {"Pick your slot"}
                </span>
                <span style={{fontSize: "14px", color: "#EADFF2"}}>
                  {"We call you within 24 hours to confirm your birth details."}
                </span>
              </li>
            </ol>
          </div>
        </div>
        <div id={"free"} style={{maxWidth: "1200px", margin: "0 auto", padding: "72px 24px 0"}}>
          <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #6C1594 0%, #4A0A66 50%, #2E003E 100%)", color: "#FFFFFF", borderRadius: "28px"}}>
            <div className={"am-stars"} aria-hidden={"true"} />
            <img className={"am-spin"} src={"/images/9d2168b8cba50907515a4814ec827ca1.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", left: "-190px", bottom: "-230px", width: "540px", height: "540px", opacity: "0.18", pointerEvents: "none"}} />
            <div style={{position: "relative", padding: "clamp(28px, 4vw, 56px)", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center"}}>
              <div style={{flex: "1 1 380px", minWidth: "0"}}>
                <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
                  {"Free, in under a minute"}
                </p>
                <h2 style={{margin: "0 0 24px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.15", color: "#FFFFFF"}}>
                  {"Try our free tools before you book anything."}
                </h2>
                <div style={{borderLeft: "2px solid rgba(255,255,255,0.35)", paddingLeft: "16px"}}>
                  <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "22px", color: "#FFFFFF"}}>
                    {hole(v.toolLabel)}
                  </p>
                  <p style={{margin: "0", color: "#EADFF2"}}>
                    {hole(v.toolDesc)}
                  </p>
                </div>
              </div>
              <div style={{flex: "1 1 460px", minWidth: "0", background: "#FFFFFF", color: "#1E1830", borderRadius: "20px", padding: "22px 24px 24px", boxShadow: "0 30px 60px -30px rgba(0,0,0,0.5)"}}>
                <div className={"am-tabs"} role={"tablist"} aria-label={"Free tools"} style={{display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "6px", padding: "5px", background: "#F4EDE1", borderRadius: "14px", marginBottom: "20px"}}>
                  {(v.tools || []).map((t, $index) => (
                    <React.Fragment key={$index}>
                      {t?.sel ? (
                        <>
                          <button type={"button"} role={"tab"} aria-selected={"true"} onClick={t?.pick} style={{font: "inherit", fontSize: "13px", fontWeight: "700", minHeight: "44px", padding: "0 6px", border: "0", borderRadius: "10px", cursor: "pointer", background: "#FFFFFF", color: "#2E003E", boxShadow: "0 4px 12px -6px rgba(46,0,62,0.35)"}}>
                            {hole(t?.label)}
                          </button>
                        </>
                      ) : null}
                      {t?.notSel ? (
                        <>
                          <button type={"button"} role={"tab"} aria-selected={"false"} onClick={t?.pick} style={{font: "inherit", fontSize: "13px", fontWeight: "700", minHeight: "44px", padding: "0 6px", border: "0", borderRadius: "10px", cursor: "pointer", background: "transparent", color: "#5C5470"}}>
                            {hole(t?.label)}
                          </button>
                        </>
                      ) : null}
                    </React.Fragment>
                  ))}
                </div>
                {v.isKundli ? (
                  <>
                    <KundliForm />
                  </>
                ) : null}
                {v.isKp ? (
                  <>
                    <KundliForm kind="kp" />
                  </>
                ) : null}
                {v.isName ? (
                  <>
                    <NameForm />
                  </>
                ) : null}
                {v.isMobile ? (
                  <>
                    <MobileForm />
                  </>
                ) : null}
                <p style={{margin: "16px 0 0", padding: "10px 14px", borderRadius: "12px", background: "#F3E8F7", fontSize: "13px", lineHeight: "1.5", color: "#2E003E", textAlign: "center"}}>
                  {"If the date of birth on your documents is different from your real one, please enter your "}
                  <strong>
                    {"actual date of birth"}
                  </strong>
                  {". Accurate results depend on it."}
                </p>
                <p style={{margin: "10px 0 0", fontSize: "12px", color: "#736B8A", textAlign: "center"}}>
                  {"Your details stay private and are never shared."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id={"reports"} style={{position: "relative", overflow: "hidden", background: "#FBF7F0"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 96px", position: "relative"}}>
            <div className={"am-center-mobile"} style={{marginBottom: "44px"}}>
              <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Written reports"}
              </p>
              <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15"}}>
                <span className={"am-nowrap"}>
                  {"A reading you can keep and return to."}
                </span>
              </h2>
              <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                {"Each report is personally prepared by our experts and sent to you as a PDF on email and WhatsApp within 5 to 7 working days."}
              </p>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "20px"}}>
              <div className={"am-lift"} style={{position: "relative", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <span style={{position: "absolute", top: "-13px", left: "26px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#FFFFFF", background: "#921A11", padding: "5px 12px", borderRadius: "999px", boxShadow: "0 6px 14px -6px rgba(146,26,17,0.6)"}}>
                  {"Most popular"}
                </span>
                <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "23px"}}>
                  {"Personalised Kundli Report"}
                </p>
                <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                  {"Career, money, health, love and marriage predictions, your dasha timeline, doshas and easy to follow remedies."}
                </p>
                <div style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "10px"}}>
                  <span style={{display: "flex", flexDirection: "column", gap: "2px"}}>
                    <span style={{display: "flex", alignItems: "baseline", gap: "6px"}}>
                      <span style={{fontSize: "15px", color: "#5C5470", textDecoration: "line-through"}}>
                        {"₹1,998"}
                      </span>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "26px"}}>
                        {"₹999"}
                      </span>
                    </span>
                    <span style={{alignSelf: "flex-start", marginTop: "4px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", color: "#FFFFFF", background: "#6C1594", padding: "3px 10px", borderRadius: "6px"}}>
                      {"50% OFF"}
                    </span>
                  </span>
                  <a href={"/report/kundli"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "15px", textDecoration: "none"}}>
                    {"Order now"}
                  </a>
                </div>
              </div>
              <div className={"am-lift"} style={{position: "relative", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <span style={{position: "absolute", top: "-13px", left: "26px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#FFFFFF", background: "#921A11", padding: "5px 12px", borderRadius: "999px", boxShadow: "0 6px 14px -6px rgba(146,26,17,0.6)"}}>
                  {"New"}
                </span>
                <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "23px"}}>
                  {"Varshphal 2027"}
                </p>
                <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                  {"Your next 12 months, month by month: the year’s main focus, key phases and simple remedies."}
                </p>
                <div style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "10px"}}>
                  <span style={{display: "flex", flexDirection: "column", gap: "2px"}}>
                    <span style={{display: "flex", alignItems: "baseline", gap: "6px"}}>
                      <span style={{fontSize: "15px", color: "#5C5470", textDecoration: "line-through"}}>
                        {"₹1,478"}
                      </span>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "26px"}}>
                        {"₹739"}
                      </span>
                    </span>
                    <span style={{alignSelf: "flex-start", marginTop: "4px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", color: "#FFFFFF", background: "#6C1594", padding: "3px 10px", borderRadius: "6px"}}>
                      {"50% OFF"}
                    </span>
                  </span>
                  <a href={"/report/varshphal"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "15px", textDecoration: "none"}}>
                    {"Order now"}
                  </a>
                </div>
              </div>
              <div className={"am-lift"} style={{position: "relative", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "23px"}}>
                  {"Couple Kundli Milan"}
                </p>
                <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                  {"Gun Milan, Mangal Dosha check and an honest view of long-term compatibility before marriage."}
                </p>
                <div style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "10px"}}>
                  <span style={{display: "flex", flexDirection: "column", gap: "2px"}}>
                    <span style={{display: "flex", alignItems: "baseline", gap: "6px"}}>
                      <span style={{fontSize: "15px", color: "#5C5470", textDecoration: "line-through"}}>
                        {"₹6,798"}
                      </span>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "26px"}}>
                        {"₹3,399"}
                      </span>
                    </span>
                    <span style={{alignSelf: "flex-start", marginTop: "4px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", color: "#FFFFFF", background: "#6C1594", padding: "3px 10px", borderRadius: "6px"}}>
                      {"50% OFF"}
                    </span>
                  </span>
                  <a href={"/report/milan"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "15px", textDecoration: "none"}}>
                    {"Order now"}
                  </a>
                </div>
              </div>
              <div className={"am-lift"} style={{position: "relative", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "23px"}}>
                  {"Lal Kitab Report"}
                </p>
                <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                  {"Lal Kitab predictions with simple remedies you can follow at home, no complex rituals."}
                </p>
                <div style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "10px"}}>
                  <span style={{display: "flex", flexDirection: "column", gap: "2px"}}>
                    <span style={{display: "flex", alignItems: "baseline", gap: "6px"}}>
                      <span style={{fontSize: "15px", color: "#5C5470", textDecoration: "line-through"}}>
                        {"₹1,998"}
                      </span>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "26px"}}>
                        {"₹999"}
                      </span>
                    </span>
                    <span style={{alignSelf: "flex-start", marginTop: "4px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", color: "#FFFFFF", background: "#6C1594", padding: "3px 10px", borderRadius: "6px"}}>
                      {"50% OFF"}
                    </span>
                  </span>
                  <a href={"/report/lal-kitab"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "15px", textDecoration: "none"}}>
                    {"Order now"}
                  </a>
                </div>
              </div>
              <div className={"am-lift"} style={{position: "relative", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "23px"}}>
                  {"Name Numerology Report"}
                </p>
                <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                  {"For yourself, a newborn or a business. Align the name you carry with your numbers."}
                </p>
                <div style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "10px"}}>
                  <span style={{display: "flex", flexDirection: "column", gap: "2px"}}>
                    <span style={{display: "flex", alignItems: "baseline", gap: "6px"}}>
                      <span style={{fontSize: "15px", color: "#5C5470", textDecoration: "line-through"}}>
                        {"₹798"}
                      </span>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "26px"}}>
                        {"₹399"}
                      </span>
                    </span>
                    <span style={{alignSelf: "flex-start", marginTop: "4px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", color: "#FFFFFF", background: "#6C1594", padding: "3px 10px", borderRadius: "6px"}}>
                      {"50% OFF"}
                    </span>
                  </span>
                  <a href={"/report/name-numerology"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "15px", textDecoration: "none"}}>
                    {"Order now"}
                  </a>
                </div>
              </div>
              <div className={"am-lift"} style={{position: "relative", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "23px"}}>
                  {"Mobile Number Report"}
                </p>
                <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                  {"Check whether your mobile number supports you, with lucky combinations to choose from."}
                </p>
                <div style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "10px"}}>
                  <span style={{display: "flex", flexDirection: "column", gap: "2px"}}>
                    <span style={{display: "flex", alignItems: "baseline", gap: "6px"}}>
                      <span style={{fontSize: "15px", color: "#5C5470", textDecoration: "line-through"}}>
                        {"₹498"}
                      </span>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "26px"}}>
                        {"₹249"}
                      </span>
                    </span>
                    <span style={{alignSelf: "flex-start", marginTop: "4px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", color: "#FFFFFF", background: "#6C1594", padding: "3px 10px", borderRadius: "6px"}}>
                      {"50% OFF"}
                    </span>
                  </span>
                  <a href={"/report/mobile-number"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "15px", textDecoration: "none"}}>
                    {"Order now"}
                  </a>
                </div>
              </div>
              <div className={"am-lift"} style={{gridColumn: "1 / -1", position: "relative", background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "26px 30px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "14px 32px", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
                <div style={{flex: "1 1 360px", minWidth: "0"}}>
                  <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "23px"}}>
                    {"Rudraksha and gemstones"}
                  </p>
                  <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                    {"Natural, energised stones and rudraksha, recommended only after we have seen your chart."}
                  </p>
                </div>
                <div style={{position: "relative", display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                  <a href={"/contact"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "15px", textDecoration: "none"}}>
                    {"Buy now"}
                  </a>
                </div>
              </div>
            </div>
            <p style={{margin: "28px 0 0", textAlign: "center", fontSize: "15px"}}>
              <a href={"/report/kundli"}>
                {"See a sample page from a Kundli report →"}
              </a>
            </p>
          </div>
        </div>
        <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(120deg, #2E003E 0%, #4A0A66 55%, #6C1594 100%)", color: "#FFFFFF"}}>
          <div className={"am-stars"} aria-hidden={"true"} />
          <div className={"am-stars2"} aria-hidden={"true"} />
          <img className={"am-orbit"} src={"/images/e9e66e432da62be0b75896cf7ef0608e.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", right: "-40px", top: "20px", width: "460px", height: "460px", opacity: "0.3", pointerEvents: "none"}} />
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "104px 24px", position: "relative"}}>
            <div style={{marginBottom: "52px"}}>
              <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
                {"Why it takes us 5 to 7 days"}
              </p>
              <h2 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(28px, 3vw, 38px)", lineHeight: "1.25", color: "#FFFFFF"}}>
                <span className={"am-nowrap-lg"}>
                  {"Instant reports are generated by software."}
                </span>
                <br />
                <span className={"am-nowrap-lg"}>
                  {"Ours are prepared by experts who carefully study your chart."}
                </span>
              </h2>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "24px"}}>
              <div style={{borderTop: "1px solid rgba(255,255,255,0.4)", paddingTop: "22px"}}>
                <p style={{margin: "0 0 8px", fontFamily: "'Marcellus', serif", fontSize: "22px", color: "#FFFFFF"}}>
                  {"Read, not generated"}
                </p>
                <p style={{margin: "0", color: "#EADFF2", fontSize: "15px"}}>
                  {"Every Kundli is analysed house by house before a single line is written."}
                </p>
              </div>
              <div style={{borderTop: "1px solid rgba(255,255,255,0.4)", paddingTop: "22px"}}>
                <p style={{margin: "0 0 8px", fontFamily: "'Marcellus', serif", fontSize: "22px", color: "#FFFFFF"}}>
                  {"Personalised remedies"}
                </p>
                <p style={{margin: "0", color: "#EADFF2", fontSize: "15px"}}>
                  {"Practical, easy to follow remedies that fit your everyday life."}
                </p>
              </div>
              <div style={{borderTop: "1px solid rgba(255,255,255,0.4)", paddingTop: "22px"}}>
                <p style={{margin: "0 0 8px", fontFamily: "'Marcellus', serif", fontSize: "22px", color: "#FFFFFF"}}>
                  {"Support after your report"}
                </p>
                <p style={{margin: "0", color: "#EADFF2", fontSize: "15px"}}>
                  {"Unsure about something in your report? Send us one or two questions and we’ll clarify."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id={"courses"} style={{position: "relative", overflow: "hidden", background: "#FBF7F0", borderTop: "1px solid #E8DFD0", borderBottom: "1px solid #E8DFD0"}}>
          <div className={"am-solar"} aria-hidden={"true"} style={{left: "50%", top: "50%", width: "1200px", height: "1200px", margin: "-600px 0 0 -600px"}}>
            <span className={"am-sun"} />
            <span className={"am-ring am-rev"} style={{width: "190px", height: "190px", margin: "-95px 0 0 -95px", animationDuration: "20s"}}>
              <span className={"am-planet"} style={{width: "12px", height: "12px", top: "-6px", left: "calc(50% - 6px)"}} />
            </span>
            <span className={"am-ring am-rev"} style={{width: "360px", height: "360px", margin: "-180px 0 0 -180px", animationDuration: "34s", borderStyle: "dashed"}}>
              <span className={"am-planet"} style={{width: "16px", height: "16px", top: "-8px", left: "calc(50% - 8px)"}} />
            </span>
            <span className={"am-ring am-rev"} style={{width: "550px", height: "550px", margin: "-275px 0 0 -275px", animationDuration: "52s"}}>
              <span className={"am-planet"} style={{width: "14px", height: "14px", top: "-7px", left: "calc(50% - 7px)"}} />
            </span>
            <span className={"am-ring am-rev"} style={{width: "740px", height: "740px", margin: "-370px 0 0 -370px", animationDuration: "80s", borderStyle: "dashed"}}>
              <span className={"am-planet"} style={{width: "26px", height: "26px", top: "-13px", left: "calc(50% - 13px)"}}>
                <span className={"am-saturn"} />
              </span>
            </span>
            <span className={"am-ring am-rev"} style={{width: "950px", height: "950px", margin: "-475px 0 0 -475px", animationDuration: "115s"}}>
              <span className={"am-planet"} style={{width: "15px", height: "15px", top: "-7.5px", left: "calc(50% - 7.5px)"}} />
            </span>
            <span className={"am-ring am-rev"} style={{width: "1180px", height: "1180px", margin: "-590px 0 0 -590px", animationDuration: "160s", borderStyle: "dashed"}}>
              <span className={"am-planet"} style={{width: "12px", height: "12px", top: "-6px", left: "calc(50% - 6px)"}} />
            </span>
          </div>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "96px 24px", position: "relative"}}>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 40px", marginBottom: "36px"}}>
              <div style={{maxWidth: "620px"}}>
                <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                  {"Learn with us"}
                </p>
                <h2 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(32px, 3.6vw, 44px)", lineHeight: "1.15"}}>
                  {"Why wonder about life when you can learn to read it?"}
                </h2>
              </div>
              <a href={"/courses"} style={{fontWeight: "700"}}>
                {"View all courses →"}
              </a>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "20px"}}>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E2D7C4", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column"}}>
                <img src={"/images/f096e04a039d9feb59de98d1d02de7f1.jpg"} alt={"Numerology Foundation Course with Ahalya Sangeeta"} style={{width: "100%", aspectRatio: "16 / 9", objectFit: "cover", display: "block"}} />
                <div style={{flex: "1", padding: "22px 26px 26px", display: "flex", flexDirection: "column", gap: "10px"}}>
                  <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "20px", color: "#921A11", lineHeight: "1"}}>
                    {"अंक शास्त्र"}
                  </span>
                  <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "23px"}}>
                    {"Numerology Foundation"}
                  </p>
                  <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                    {"Birth, destiny and name numbers from the ground up."}
                  </p>
                  <div style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "10px"}}>
                    <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#921A11", background: "#F8E8E6", padding: "5px 10px", borderRadius: "999px"}}>
                      {"Coming soon"}
                    </span>
                    <a href={"https://wa.me/919129237566"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", fontSize: "15px", textDecoration: "none"}}>
                      {"Notify me"}
                    </a>
                  </div>
                </div>
              </div>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E2D7C4", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column"}}>
                <img src={"/images/ea15b3e1780bbd6844ecaa33bda0c926.jpg"} alt={"Astrology Foundation Course with Ahalya Sangeeta"} style={{width: "100%", aspectRatio: "16 / 9", objectFit: "cover", display: "block"}} />
                <div style={{flex: "1", padding: "22px 26px 26px", display: "flex", flexDirection: "column", gap: "10px"}}>
                  <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "20px", color: "#921A11", lineHeight: "1"}}>
                    {"ज्योतिष"}
                  </span>
                  <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "23px"}}>
                    {"Astrology Foundation"}
                  </p>
                  <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                    {"Houses, planets and signs, step by step, to read a chart on your own."}
                  </p>
                  <div style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "10px"}}>
                    <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#921A11", background: "#F8E8E6", padding: "5px 10px", borderRadius: "999px"}}>
                      {"Coming soon"}
                    </span>
                    <a href={"https://wa.me/919129237566"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", fontSize: "15px", textDecoration: "none"}}>
                      {"Notify me"}
                    </a>
                  </div>
                </div>
              </div>
              <div className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E2D7C4", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column"}}>
                <img src={"/images/6da4179d5dfa9489ed3e3e39f8aa92bd.jpg"} alt={"Decoding Marriage and Compatibility course with Ahalya Sangeeta"} style={{width: "100%", aspectRatio: "16 / 9", objectFit: "cover", display: "block"}} />
                <div style={{flex: "1", padding: "22px 26px 26px", display: "flex", flexDirection: "column", gap: "10px"}}>
                  <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "20px", color: "#921A11", lineHeight: "1"}}>
                    {"विवाह"}
                  </span>
                  <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "23px"}}>
                    {"Decoding Marriage and Compatibility"}
                  </p>
                  <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                    {"How to read compatibility, timing and doshas for marriage."}
                  </p>
                  <div style={{marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "10px"}}>
                    <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#921A11", background: "#F8E8E6", padding: "5px 10px", borderRadius: "999px"}}>
                      {"Coming soon"}
                    </span>
                    <a href={"https://wa.me/919129237566"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "1.5px solid #6C1594", color: "#6C1594", fontWeight: "700", fontSize: "15px", textDecoration: "none"}}>
                      {"Notify me"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id={"webinar"} style={{display: "flex", flexWrap: "wrap", background: "#FFFDF9", color: "#1E1830", border: "1.5px solid #6C1594", borderRadius: "28px", overflow: "hidden", marginTop: "72px", position: "relative", outline: "1px solid #D9C6E3", outlineOffset: "-10px", boxShadow: "0 30px 60px -40px rgba(46,0,62,0.35)"}}>
              <div style={{flex: "1 1 500px", minWidth: "0", position: "relative", padding: "clamp(20px, 3vw, 36px)", display: "flex", alignItems: "center"}}>
                <img src={"/images/f51fdba3c3c077276fab777f3ecab46d.jpg"} alt={"Manifestation Masterclass with Maneswita"} style={{width: "100%", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: "18px", display: "block", boxShadow: "0 24px 48px -26px rgba(46,0,62,0.55)"}} />
              </div>
              <div style={{flex: "1 1 400px", minWidth: "0", padding: "clamp(20px, 3vw, 36px) clamp(24px, 4vw, 48px) clamp(28px, 4vw, 44px) clamp(20px, 2vw, 12px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px", position: "relative"}}>
                <p style={{margin: "0", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                  {"Live 2-day webinar · Dates announced soon"}
                </p>
                <h2 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(28px, 3vw, 38px)", lineHeight: "1.15", color: "#2E003E"}}>
                  {"Manifestation Masterclass"}
                </h2>
                <p style={{margin: "0", color: "#5C5470"}}>
                  {"Your personal manifestation blueprint, in two live sessions with Maneswita."}
                </p>
                <ul style={{margin: "0", padding: "0", listStyle: "none", display: "grid", gap: "8px", fontSize: "15px", color: "#1E1830"}}>
                  <li style={{display: "flex", gap: "10px"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 14 14"} style={{flex: "none", marginTop: "4px"}}>
                      <path d={"M7 1L13 7L7 13L1 7Z"} fill={"none"} stroke={"#6C1594"} strokeWidth={"1.4"} />
                    </svg>
                    {"Master the art of manifesting"}
                  </li>
                  <li style={{display: "flex", gap: "10px"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 14 14"} style={{flex: "none", marginTop: "4px"}}>
                      <path d={"M7 1L13 7L7 13L1 7Z"} fill={"none"} stroke={"#6C1594"} strokeWidth={"1.4"} />
                    </svg>
                    {"Attract with ease and confidence"}
                  </li>
                  <li style={{display: "flex", gap: "10px"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 14 14"} style={{flex: "none", marginTop: "4px"}}>
                      <path d={"M7 1L13 7L7 13L1 7Z"} fill={"none"} stroke={"#6C1594"} strokeWidth={"1.4"} />
                    </svg>
                    {"Simple and powerful methods"}
                  </li>
                  <li style={{display: "flex", gap: "10px"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 14 14"} style={{flex: "none", marginTop: "4px"}}>
                      <path d={"M7 1L13 7L7 13L1 7Z"} fill={"none"} stroke={"#6C1594"} strokeWidth={"1.4"} />
                    </svg>
                    {"Turn dreams into daily reality"}
                  </li>
                </ul>
                <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 20px", marginTop: "8px"}}>
                  <p style={{margin: "0", display: "flex", alignItems: "baseline", gap: "10px"}}>
                    <span style={{fontFamily: "'Marcellus', serif", fontSize: "40px", lineHeight: "1", color: "#2E003E"}}>
                      {"₹99"}
                    </span>
                    <span style={{fontSize: "18px", color: "#5C5470", textDecoration: "line-through"}}>
                      {"₹799"}
                    </span>
                  </p>
                  <a href={"/masterclass"} style={{display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
                    {"Notify me"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{position: "relative", overflow: "hidden", color: "#FFFFFF", position: "relative", overflow: "hidden", color: "#FFFFFF", background: "radial-gradient(ellipse at 18% 22%, rgba(108,21,148,0.65) 0%, rgba(108,21,148,0) 50%), radial-gradient(ellipse at 88% 78%, rgba(146,26,17,0.30) 0%, rgba(146,26,17,0) 45%), radial-gradient(ellipse at 70% 8%, rgba(74,10,102,0.7) 0%, rgba(74,10,102,0) 55%), linear-gradient(180deg, #16001F 0%, #2E003E 50%, #16001F 100%)"}}>
          <div className={"am-stars"} aria-hidden={"true"} />
          <div className={"am-stars2"} aria-hidden={"true"} />
          <img className={"am-spin-zodiac"} src={"/images/610ce06ea07e7a2d1d36f4d88029f8db.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", right: "-220px", top: "-200px", width: "640px", height: "640px", opacity: "0.18"}} />
          <img className={"am-spin-rev"} src={"/images/610ce06ea07e7a2d1d36f4d88029f8db.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", left: "-170px", bottom: "-170px", width: "440px", height: "440px", opacity: "0.12"}} />
          <span className={"am-shoot"} aria-hidden={"true"} style={{top: "6%", left: "72%"}} />
          <span className={"am-shoot"} aria-hidden={"true"} style={{top: "26%", left: "22%", animationDelay: "3.5s"}} />
          <span className={"am-shoot"} aria-hidden={"true"} style={{top: "3%", left: "46%", animationDelay: "7s"}} />
          <span className={"am-shoot"} aria-hidden={"true"} style={{top: "48%", left: "84%", animationDelay: "10s"}} />
          <div style={{position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "88px 24px"}}>
            <div id={"rashi"} style={{textAlign: "center", scrollMarginTop: "90px"}}>
              <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
                {"Today’s horoscope"}
              </p>
              <h2 style={{margin: "0 0 8px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(30px, 3.4vw, 40px)", lineHeight: "1.15", color: "#FFFFFF"}}>
                {"What do the stars hold for you today?"}
              </h2>
              <p style={{margin: "0 0 36px", fontSize: "15px", color: "#EADFF2"}}>
                {hole(v.todayDate)}
              </p>
              <MoonForm onFound={v.onMoon} />
              <div className={"am-signs"} role={"tablist"} aria-label={"Choose your rashi"} style={{display: "flex", gap: "6px", overflowX: "auto", padding: "4px 2px 16px", margin: "0 auto 24px", scrollSnapType: "x mandatory"}}>
                {(v.rashis || []).map((r, $index) => (
                  <React.Fragment key={$index}>
                    {r?.sel ? (
                      <>
                        <button type={"button"} role={"tab"} aria-selected={"true"} onClick={r?.pick} className={"am-rashi"} style={{flex: "1 0 84px", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", padding: "4px 0", border: "0", background: "none", cursor: "pointer", font: "inherit", color: "#FFFFFF"}}>
                          <span style={{position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "80px", height: "80px"}}>
                            <svg className={"am-seal"} aria-hidden={"true"} viewBox={"0 0 116 116"} style={{position: "absolute", inset: "0", width: "100%", height: "100%"}} fill={"none"} stroke={"#FCCE07"} strokeOpacity={"1"} strokeWidth={"2"}>
                              <circle cx={"58"} cy={"58"} r={"56"} strokeDasharray={"4 4"} />
                              <path d={"M58 0V8M58 108V116M0 58H8M108 58H116"} strokeOpacity={"0.6"} />
                            </svg>
                            <span style={{display: "block", width: "64px", height: "64px", borderRadius: "999px", background: "#F3E8F7", boxShadow: "0 0 0 3px rgba(108,21,148,0.18), 0 12px 24px -10px rgba(46,0,62,0.55)"}}>
                              <img className={"am-rashi-img"} src={r?.img} alt={""} style={{width: "100%", height: "100%", display: "block", transition: "transform 0.4s ease"}} />
                            </span>
                          </span>
                          <span style={{fontFamily: "'Marcellus', serif", fontSize: "15px", lineHeight: "1.15", color: "#FCCE07"}}>
                            {hole(r?.en)}
                          </span>
                          <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "14px", lineHeight: "1.1", color: "#CBB154", marginTop: "-4px"}}>
                            {hole(r?.hi)}
                          </span>
                        </button>
                      </>
                    ) : null}
                    {r?.notSel ? (
                      <>
                        <button type={"button"} role={"tab"} aria-selected={"false"} onClick={r?.pick} className={"am-rashi"} style={{flex: "1 0 84px", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", padding: "4px 0", border: "0", background: "none", cursor: "pointer", font: "inherit", color: "#FFFFFF"}}>
                          <span style={{position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "80px", height: "80px"}}>
                            <svg className={"am-seal"} aria-hidden={"true"} viewBox={"0 0 116 116"} style={{position: "absolute", inset: "0", width: "100%", height: "100%"}} fill={"none"} stroke={"#FFFFFF"} strokeOpacity={"0.4"} strokeWidth={"1"}>
                              <circle cx={"58"} cy={"58"} r={"56"} strokeDasharray={"2 5"} />
                              <path d={"M58 0V8M58 108V116M0 58H8M108 58H116"} strokeOpacity={"0.6"} />
                            </svg>
                            <span style={{display: "block", width: "64px", height: "64px", borderRadius: "999px", background: "#FFFFFF", boxShadow: "0 10px 22px -12px rgba(46,0,62,0.45)"}}>
                              <img className={"am-rashi-img"} src={r?.img} alt={""} style={{width: "100%", height: "100%", display: "block", transition: "transform 0.4s ease"}} />
                            </span>
                          </span>
                          <span style={{fontFamily: "'Marcellus', serif", fontSize: "15px", lineHeight: "1.15"}}>
                            {hole(r?.en)}
                          </span>
                          <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "14px", lineHeight: "1.1", color: "#CBB154", marginTop: "-4px"}}>
                            {hole(r?.hi)}
                          </span>
                        </button>
                      </>
                    ) : null}
                  </React.Fragment>
                ))}
              </div>
              <div className={"am-horo"} style={{color: "#1E1830", display: "grid", gridTemplateColumns: "minmax(0, 360px) minmax(0, 1fr)", gap: "20px", textAlign: "left"}}>
                <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "24px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px"}}>
                    <div>
                      <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "32px", lineHeight: "1.1"}}>
                        {hole(v.cur?.en)}
                      </p>
                      <p style={{margin: "6px 0 0", fontSize: "14px", color: "#5C5470"}}>
                        <span style={{fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "17px", color: "#921A11"}}>
                          {hole(v.cur?.hi)}
                        </span>
                        {" · Ruled by "}
                        {hole(v.cur?.planet)}
                      </p>
                    </div>
                    <img src={v.cur?.img} alt={""} style={{flex: "none", width: "64px", height: "64px", borderRadius: "999px", background: "#FFFFFF", boxShadow: "0 10px 22px -12px rgba(46,0,62,0.45)"}} />
                  </div>
                  <div style={{display: "grid", gap: "12px"}}>
                    {(v.cur?.bars || []).map((b, $index) => (
                      <React.Fragment key={$index}>
                        <div style={{display: "grid", gap: "6px"}}>
                          <div style={{display: "flex", justifyContent: "space-between", fontSize: "14px", fontWeight: "600"}}>
                            <span>
                              {hole(b?.label)}
                            </span>
                            <span style={{color: "#6C1594"}}>
                              {hole(b?.pctLabel)}
                            </span>
                          </div>
                          <progress className={"am-bar"} max={"100"} value={b?.pct} aria-label={b?.label} />
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                  <div style={{display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px", textAlign: "center"}}>
                    <div style={{background: "#F3E8F7", borderRadius: "14px", padding: "12px 6px"}}>
                      <p style={{margin: "0", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5C5470", fontWeight: "700"}}>
                        {"Overall"}
                      </p>
                      <p style={{margin: "4px 0 0", fontFamily: "'Marcellus', serif", fontSize: "24px", color: "#6C1594"}}>
                        {hole(v.cur?.overall)}
                      </p>
                    </div>
                    <div style={{background: "#FBF7F0", border: "1px solid #EFE6D8", borderRadius: "14px", padding: "12px 6px"}}>
                      <p style={{margin: "0", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5C5470", fontWeight: "700"}}>
                        {"Lucky number"}
                      </p>
                      <p style={{margin: "4px 0 0", fontFamily: "'Marcellus', serif", fontSize: "24px"}}>
                        {hole(v.cur?.num)}
                      </p>
                    </div>
                    <div style={{background: "#FBF7F0", border: "1px solid #EFE6D8", borderRadius: "14px", padding: "12px 6px"}}>
                      <p style={{margin: "0", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5C5470", fontWeight: "700"}}>
                        {"Lucky colour"}
                      </p>
                      <p style={{margin: "4px 0 0", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                        {hole(v.cur?.colour)}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p style={{margin: "0 0 8px", fontSize: "13px", fontWeight: "700", color: "#1E1830"}}>
                      {"Today’s mood"}
                    </p>
                    <div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                      {(v.cur?.moods || []).map((m, $index) => (
                        <React.Fragment key={$index}>
                          <span style={{fontSize: "13px", fontWeight: "600", color: "#921A11", background: "#FCCE07", padding: "5px 12px", borderRadius: "999px"}}>
                            {hole(m?.word)}
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div style={{display: "grid", gap: "10px"}}>
                    <div style={{background: "linear-gradient(135deg, #2E003E, #6C1594)", color: "#FFFFFF", borderRadius: "14px", padding: "14px 16px", textAlign: "center"}}>
                      <p style={{margin: "0", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
                        {"Mantra to strengthen · "}
                        {hole(v.cur?.strongPlanet)}
                      </p>
                      <p style={{margin: "8px 0 0", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "19px", lineHeight: "1.4"}}>
                        {hole(v.cur?.strongHi)}
                      </p>
                      <p style={{margin: "2px 0 0", fontFamily: "'Marcellus', serif", fontSize: "16px", lineHeight: "1.35", color: "#EADFF2"}}>
                        {hole(v.cur?.strongEn)}
                      </p>
                    </div>
                    {v.cur?.hasCalm ? (
                      <>
                        <div style={{background: "#F8E8E6", border: "1px solid #EED3CF", borderRadius: "14px", padding: "14px 16px", textAlign: "center", color: "#1E1830"}}>
                          <p style={{margin: "0", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                            {"Mantra to calm · "}
                            {hole(v.cur?.calmPlanet)}
                          </p>
                          <p style={{margin: "8px 0 0", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "19px", lineHeight: "1.4", color: "#921A11"}}>
                            {hole(v.cur?.calmHi)}
                          </p>
                          <p style={{margin: "2px 0 0", fontFamily: "'Marcellus', serif", fontSize: "16px", lineHeight: "1.35"}}>
                            {hole(v.cur?.calmEn)}
                          </p>
                          <p style={{margin: "8px 0 0", fontSize: "13px", lineHeight: "1.45", color: "#5C5470"}}>
                            {hole(v.cur?.calmWhy)}
                          </p>
                        </div>
                      </>
                    ) : null}
                    {v.cur?.noCalm ? (
                      <>
                        <div style={{background: "#F8E8E6", border: "1px solid #EED3CF", borderRadius: "14px", padding: "14px 16px", textAlign: "center", color: "#1E1830"}}>
                          <p style={{margin: "0", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                            {"Mantra to calm"}
                          </p>
                          <p style={{margin: "6px 0 0", fontSize: "14px", lineHeight: "1.45", color: "#5C5470"}}>
                            {"No planet is troubling "}
                            {hole(v.cur?.en)}
                            {" today, so no calming mantra is needed."}
                          </p>
                        </div>
                      </>
                    ) : null}
                    <p style={{margin: "2px 0 0", fontSize: "12.5px", lineHeight: "1.5", color: "#5C5470", textAlign: "center"}}>
                      {"Chant each mantra 108 times. These are based on your moon sign. Your own chart may call for a different remedy."}
                    </p>
                  </div>
                </div>
                <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "20px", padding: "28px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", display: "flex", flexDirection: "column", gap: "20px"}}>
                  <div>
                    <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                      {"Today’s overview"}
                    </p>
                    <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "clamp(19px, 1.8vw, 23px)", lineHeight: "1.45"}}>
                      {hole(v.cur?.overview)}
                    </p>
                  </div>
                  <div style={{height: "1px", background: "#EFE6D8"}} />
                  <div style={{display: "grid", gap: "18px"}}>
                    <div style={{display: "flex", gap: "14px"}}>
                      <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                        <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                          <path d={"M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"} />
                        </svg>
                      </span>
                      <div>
                        <p style={{margin: "0 0 2px", fontWeight: "700"}}>
                          {"Love and relationships"}
                        </p>
                        <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                          {hole(v.cur?.love)}
                        </p>
                      </div>
                    </div>
                    <div style={{display: "flex", gap: "14px"}}>
                      <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                        <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                          <rect x={"3"} y={"7"} width={"18"} height={"13"} rx={"2"} />
                          <path d={"M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"} />
                        </svg>
                      </span>
                      <div>
                        <p style={{margin: "0 0 2px", fontWeight: "700"}}>
                          {"Career and finance"}
                        </p>
                        <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                          {hole(v.cur?.career)}
                        </p>
                      </div>
                    </div>
                    <div style={{display: "flex", gap: "14px"}}>
                      <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                        <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                          <path d={"M5 19c0-8 6-14 15-14 0 9-6 15-14 15"} />
                          <path d={"M5 19l8-8"} />
                        </svg>
                      </span>
                      <div>
                        <p style={{margin: "0 0 2px", fontWeight: "700"}}>
                          {"Health and wellbeing"}
                        </p>
                        <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                          {hole(v.cur?.health)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div style={{marginTop: "auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 20px", paddingTop: "6px"}}>
                    <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 18px"}}>
                      <a href={"/horoscope/" + v.cur?.slug} style={{fontWeight: "700"}}>
                        {"Read the full "}
                        {hole(v.cur?.en)}
                        {" horoscope →"}
                      </a>
                      <span style={{display: "inline-flex", flexWrap: "wrap", gap: "4px 14px", fontSize: "14px"}}>
                        <a href={"/horoscope/" + v.cur?.slug + "/weekly"}>{"Weekly"}</a>
                        <a href={"/horoscope/" + v.cur?.slug + "/monthly"}>{"Monthly"}</a>
                        <a href={"/horoscope/" + v.cur?.slug + "/2027"}>{"2027"}</a>
                      </span>
                    </div>
                    <a href={"/consult"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "15px", textDecoration: "none"}}>
                      {"Get a personal reading"}
                    </a>
                  </div>
                </div>
              </div>
              <p style={{margin: "18px auto 0", maxWidth: "720px", fontSize: "13px", color: "#CDB8DA"}}>
                {"Daily horoscopes are general readings for each moon sign. For guidance based on your own chart, book a personal consultation."}
              </p>
            </div>
          </div>
        </div>
        <div id={"blog"} style={{background: "#FFFFFF", borderTop: "1px solid #EFE6D8", borderBottom: "1px solid #EFE6D8"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px"}}>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 40px", marginBottom: "36px"}}>
              <div style={{maxWidth: "620px"}}>
                <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                  {"From our journal"}
                </p>
                <h2 style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(32px, 3.6vw, 44px)", lineHeight: "1.15"}}>
                  {"Read, learn, and understand yourself better."}
                </h2>
                <p style={{margin: "0", fontSize: "16px", color: "#5C5470"}}>
                  {"Simple articles on astrology, numerology and Vastu, written by Maneswita."}
                </p>
              </div>
              <a href={"/#blog"} style={{fontWeight: "700"}}>
                {"Read all articles →"}
              </a>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "20px"}}>
              <a href={"#"} className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E2D7C4", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column", textDecoration: "none", color: "#1E1830"}}>
                <svg viewBox={"0 0 320 180"} preserveAspectRatio={"xMidYMid slice"} role={"img"} aria-label={"Saturn illustration"} style={{display: "block", width: "100%", aspectRatio: "16 / 9"}}>
                  <defs>
                    <linearGradient id={"bgA"} x1={"0"} y1={"0"} x2={"1"} y2={"1"}>
                      <stop offset={"0"} stopColor={"#2E003E"} />
                      <stop offset={"1"} stopColor={"#6C1594"} />
                    </linearGradient>
                  </defs>
                  <rect width={"320"} height={"180"} fill={"url(#bgA)"} />
                  <circle cx={"24"} cy={"22"} r={"1.2"} fill={"#FFFFFF"} opacity={"0.9"} />
                  <circle cx={"70"} cy={"140"} r={"0.9"} fill={"#FFFFFF"} opacity={"0.6"} />
                  <circle cx={"120"} cy={"30"} r={"1.4"} fill={"#FFFFFF"} opacity={"0.8"} />
                  <circle cx={"286"} cy={"40"} r={"1"} fill={"#FFFFFF"} opacity={"0.7"} />
                  <circle cx={"250"} cy={"150"} r={"1.2"} fill={"#FFFFFF"} opacity={"0.8"} />
                  <circle cx={"300"} cy={"110"} r={"0.8"} fill={"#FFFFFF"} opacity={"0.6"} />
                  <circle cx={"40"} cy={"90"} r={"0.8"} fill={"#FFFFFF"} opacity={"0.5"} />
                  <circle cx={"200"} cy={"20"} r={"1"} fill={"#FFFFFF"} opacity={"0.7"} />
                  <circle cx={"160"} cy={"90"} r={"34"} fill={"none"} stroke={"#CBB154"} strokeWidth={"2"} />
                  <circle cx={"160"} cy={"90"} r={"34"} fill={"#CBB154"} opacity={"0.18"} />
                  <ellipse cx={"160"} cy={"92"} rx={"66"} ry={"16"} fill={"none"} stroke={"#FCCE07"} strokeWidth={"2"} transform={"rotate(-14 160 92)"} />
                  <circle cx={"160"} cy={"90"} r={"58"} fill={"none"} stroke={"#FFFFFF"} strokeOpacity={"0.15"} strokeDasharray={"3 5"} />
                </svg>
                <div style={{flex: "1", padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: "10px"}}>
                  <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px"}}>
                    <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6C1594", background: "#F3E8F7", padding: "5px 10px", borderRadius: "999px"}}>
                      {"Astrology"}
                    </span>
                    <span style={{fontSize: "13px", color: "#736B8A"}}>
                      {"6 min read"}
                    </span>
                  </div>
                  <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "22px", lineHeight: "1.25"}}>
                    {"Sade Sati: what it really means, and why it is not something to fear"}
                  </p>
                  <p style={{margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#5C5470"}}>
                    {"Saturn’s seven and a half years have a scary reputation. Here is what actually changes, and how to use the phase well."}
                  </p>
                  <div style={{marginTop: "auto", paddingTop: "10px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", borderTop: "1px solid #EFE6D8"}}>
                    <span style={{fontSize: "13px", color: "#5C5470"}}>
                      {"By Maneswita"}
                    </span>
                    <span style={{fontWeight: "700", color: "#921A11", fontSize: "14px"}}>
                      {"Read article →"}
                    </span>
                  </div>
                </div>
              </a>
              <a href={"#"} className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E2D7C4", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column", textDecoration: "none", color: "#1E1830"}}>
                <svg viewBox={"0 0 320 180"} preserveAspectRatio={"xMidYMid slice"} role={"img"} aria-label={"Numbers grid illustration"} style={{display: "block", width: "100%", aspectRatio: "16 / 9"}}>
                  <defs>
                    <linearGradient id={"bgN"} x1={"0"} y1={"0"} x2={"1"} y2={"1"}>
                      <stop offset={"0"} stopColor={"#4A0A66"} />
                      <stop offset={"1"} stopColor={"#921A11"} />
                    </linearGradient>
                  </defs>
                  <rect width={"320"} height={"180"} fill={"url(#bgN)"} />
                  <g stroke={"#CBB154"} strokeOpacity={"0.45"}>
                    <line x1={"106"} y1={"10"} x2={"106"} y2={"170"} />
                    <line x1={"214"} y1={"10"} x2={"214"} y2={"170"} />
                    <line x1={"10"} y1={"64"} x2={"310"} y2={"64"} />
                    <line x1={"10"} y1={"116"} x2={"310"} y2={"116"} />
                  </g>
                  <text x={"52"} y={"48"} textAnchor={"middle"} fontFamily={"Marcellus, serif"} fontSize={"34"} fill={"#FFFFFF"} opacity={"0.28"}>
                    {"1"}
                  </text>
                  <text x={"160"} y={"48"} textAnchor={"middle"} fontFamily={"Marcellus, serif"} fontSize={"34"} fill={"#FFFFFF"} opacity={"0.28"}>
                    {"2"}
                  </text>
                  <text x={"268"} y={"48"} textAnchor={"middle"} fontFamily={"Marcellus, serif"} fontSize={"34"} fill={"#FFFFFF"} opacity={"0.28"}>
                    {"3"}
                  </text>
                  <text x={"52"} y={"100"} textAnchor={"middle"} fontFamily={"Marcellus, serif"} fontSize={"34"} fill={"#FFFFFF"} opacity={"0.28"}>
                    {"4"}
                  </text>
                  <text x={"160"} y={"100"} textAnchor={"middle"} fontFamily={"Marcellus, serif"} fontSize={"34"} fill={"#FCCE07"} opacity={"1"}>
                    {"5"}
                  </text>
                  <text x={"268"} y={"100"} textAnchor={"middle"} fontFamily={"Marcellus, serif"} fontSize={"34"} fill={"#FFFFFF"} opacity={"0.28"}>
                    {"6"}
                  </text>
                  <text x={"52"} y={"152"} textAnchor={"middle"} fontFamily={"Marcellus, serif"} fontSize={"34"} fill={"#FFFFFF"} opacity={"0.28"}>
                    {"7"}
                  </text>
                  <text x={"160"} y={"152"} textAnchor={"middle"} fontFamily={"Marcellus, serif"} fontSize={"34"} fill={"#FFFFFF"} opacity={"0.28"}>
                    {"8"}
                  </text>
                  <text x={"268"} y={"152"} textAnchor={"middle"} fontFamily={"Marcellus, serif"} fontSize={"34"} fill={"#FFFFFF"} opacity={"0.28"}>
                    {"9"}
                  </text>
                  <circle cx={"160"} cy={"80"} r={"26"} fill={"none"} stroke={"#FCCE07"} strokeWidth={"1.6"} />
                </svg>
                <div style={{flex: "1", padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: "10px"}}>
                  <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px"}}>
                    <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6C1594", background: "#F3E8F7", padding: "5px 10px", borderRadius: "999px"}}>
                      {"Numerology"}
                    </span>
                    <span style={{fontSize: "13px", color: "#736B8A"}}>
                      {"5 min read"}
                    </span>
                  </div>
                  <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "22px", lineHeight: "1.25"}}>
                    {"Should you change the spelling of your name? How we decide"}
                  </p>
                  <p style={{margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#5C5470"}}>
                    {"A name correction is not about luck. We check how your name number agrees with your birth numbers first."}
                  </p>
                  <div style={{marginTop: "auto", paddingTop: "10px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", borderTop: "1px solid #EFE6D8"}}>
                    <span style={{fontSize: "13px", color: "#5C5470"}}>
                      {"By Maneswita"}
                    </span>
                    <span style={{fontWeight: "700", color: "#921A11", fontSize: "14px"}}>
                      {"Read article →"}
                    </span>
                  </div>
                </div>
              </a>
              <a href={"#"} className={"am-lift"} style={{background: "#FFFFFF", border: "1px solid #E2D7C4", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column", textDecoration: "none", color: "#1E1830"}}>
                <svg viewBox={"0 0 320 180"} preserveAspectRatio={"xMidYMid slice"} role={"img"} aria-label={"Home floor plan with Vastu grid"} style={{display: "block", width: "100%", aspectRatio: "16 / 9"}}>
                  <defs>
                    <linearGradient id={"bgV"} x1={"0"} y1={"0"} x2={"1"} y2={"1"}>
                      <stop offset={"0"} stopColor={"#B6A377"} />
                      <stop offset={"1"} stopColor={"#6C1594"} />
                    </linearGradient>
                  </defs>
                  <rect width={"320"} height={"180"} fill={"url(#bgV)"} />
                  <rect x={"110"} y={"40"} width={"100"} height={"100"} fill={"#FFFFFF"} fillOpacity={"0.12"} stroke={"#FFFFFF"} strokeWidth={"2"} />
                  <g stroke={"#FFFFFF"} strokeOpacity={"0.55"}>
                    <line x1={"143.3"} y1={"40"} x2={"143.3"} y2={"140"} />
                    <line x1={"176.6"} y1={"40"} x2={"176.6"} y2={"140"} />
                    <line x1={"110"} y1={"73.3"} x2={"210"} y2={"73.3"} />
                    <line x1={"110"} y1={"106.6"} x2={"210"} y2={"106.6"} />
                  </g>
                  <rect x={"143.3"} y={"73.3"} width={"33.3"} height={"33.3"} fill={"#FCCE07"} fillOpacity={"0.85"} />
                  <path d={"M110 40 L160 14 L210 40"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2"} />
                </svg>
                <div style={{flex: "1", padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: "10px"}}>
                  <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px"}}>
                    <span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6C1594", background: "#F3E8F7", padding: "5px 10px", borderRadius: "999px"}}>
                      {"Vastu"}
                    </span>
                    <span style={{fontSize: "13px", color: "#736B8A"}}>
                      {"4 min read"}
                    </span>
                  </div>
                  <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "22px", lineHeight: "1.25"}}>
                    {"Five simple Vastu fixes for your home before Diwali"}
                  </p>
                  <p style={{margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#5C5470"}}>
                    {"No walls broken, no big spends. Small changes room by room that bring the energy of your home back into balance."}
                  </p>
                  <div style={{marginTop: "auto", paddingTop: "10px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", borderTop: "1px solid #EFE6D8"}}>
                    <span style={{fontSize: "13px", color: "#5C5470"}}>
                      {"By Maneswita"}
                    </span>
                    <span style={{fontWeight: "700", color: "#921A11", fontSize: "14px"}}>
                      {"Read article →"}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id={"founders"} style={{position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at 15% 40%, rgba(146,26,17,0.06), rgba(146,26,17,0) 50%), #FBF7F0"}}>
          <img className={"am-spin-rev"} src={"/images/c6d61635ad545b54bcdda486c37c816a.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", right: "-150px", top: "-120px", width: "420px", height: "420px", opacity: "0.4", pointerEvents: "none"}} />
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "104px 24px", position: "relative"}}>
            <div style={{display: "flex", flexWrap: "wrap", gap: "64px", alignItems: "center"}}>
              <div style={{flex: "1 1 420px", minWidth: "0", position: "relative", padding: "18px"}}>
                <div aria-hidden={"true"} style={{position: "absolute", inset: "0", border: "1px solid #921A11", opacity: "0.4", borderRadius: "260px 260px 28px 28px"}} />
                <img src={"/images/26c9dadb7f4b6a08ec59999c3d9e9332.jpg"} alt={"Maneswita and Ahalya Sangeeta, founders of Ahllya Mystic"} style={{position: "relative", width: "100%", aspectRatio: "4 / 5", objectFit: "cover", objectPosition: "center 35%", borderRadius: "240px 240px 20px 20px", display: "block"}} />
              </div>
              <div style={{flex: "1.6 1 460px", minWidth: "0"}}>
                <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                  {"Who reads your chart"}
                </p>
                <h2 style={{margin: "0 0 18px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(28px, 3vw, 38px)", lineHeight: "1.2"}}>
                  {"A mother and daughter,"}
                  <br />
                  <span className={"am-nowrap"}>
                    {"reading every chart together."}
                  </span>
                </h2>
                <p style={{margin: "0 0 32px", color: "#5C5470"}}>
                  {"We follow the path of Chanakya, Aryabhatta and Brahmagupta, who trusted the science of the stars. Astrology does not control your destiny. It reveals it, so you can walk it with awareness."}
                </p>
                <div style={{display: "grid", gap: "16px"}}>
                  <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "18px", padding: "22px 24px", outline: "1px solid #EFE6D8", outlineOffset: "-8px"}}>
                    <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                      {"Ahalya Sangeeta"}
                    </p>
                    <p style={{margin: "2px 0 10px", fontSize: "14px", color: "#921A11", fontWeight: "600"}}>
                      {"Founder"}
                    </p>
                    <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                      <span className={"am-nowrap"}>
                        {"Vedic and KP astrology, numerology and Vastu."}
                      </span>
                      <br />
                      {"6 years of practice."}
                    </p>
                  </div>
                  <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "18px", padding: "22px 24px", outline: "1px solid #EFE6D8", outlineOffset: "-8px"}}>
                    <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                      {"Maneswita"}
                    </p>
                    <p style={{margin: "2px 0 10px", fontSize: "14px", color: "#921A11", fontWeight: "600"}}>
                      {"Co-founder"}
                    </p>
                    <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
                      <span className={"am-nowrap"}>
                        {"Vedic and KP astrology and numerology."}
                      </span>
                      <br />
                      {"5 years of practice."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id={"stories"} style={{position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at 85% 10%, rgba(108,21,148,0.06), rgba(108,21,148,0) 50%), #FFFDF9", borderTop: "1px solid #E8DFD0"}}>
          <img className={"am-spin"} src={"/images/139dc9f8771bafe47e83ebdfd8f024a6.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", left: "-140px", bottom: "-160px", width: "440px", height: "440px", opacity: "0.12", pointerEvents: "none"}} />
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px 96px", position: "relative"}}>
            <div style={{textAlign: "center", margin: "0 auto 44px"}}>
              <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Client stories"}
              </p>
              <h2 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15"}}>
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
                    <span style={{display: "block", fontSize: "13px", color: "#5C5470"}}>
                      {"Delhi"}
                    </span>
                  </span>
                  <span style={{flex: "none", fontSize: "12px", fontWeight: "700", color: "#921A11", background: "#FCCE07", padding: "4px 10px", borderRadius: "999px"}}>
                    {"Mobile Number Report"}
                  </span>
                </figcaption>
                <blockquote style={{margin: "0", position: "relative", background: "#F3E8F7", borderRadius: "4px 16px 16px 16px", padding: "14px 16px 28px", fontSize: "15px", lineHeight: "1.6", color: "#1E1830"}}>
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
                    <span style={{display: "block", fontSize: "13px", color: "#5C5470"}}>
                      {"Haldwani"}
                    </span>
                  </span>
                  <span style={{flex: "none", fontSize: "12px", fontWeight: "700", color: "#921A11", background: "#FCCE07", padding: "4px 10px", borderRadius: "999px"}}>
                    {"Name and Mobile Reports"}
                  </span>
                </figcaption>
                <blockquote style={{margin: "0", position: "relative", background: "#F3E8F7", borderRadius: "4px 16px 16px 16px", padding: "14px 16px 28px", fontSize: "15px", lineHeight: "1.6", color: "#1E1830"}}>
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
                    <span style={{display: "block", fontSize: "13px", color: "#5C5470"}}>
                      {"Lucknow"}
                    </span>
                  </span>
                  <span style={{flex: "none", fontSize: "12px", fontWeight: "700", color: "#921A11", background: "#FCCE07", padding: "4px 10px", borderRadius: "999px"}}>
                    {"Personalised Kundli"}
                  </span>
                </figcaption>
                <blockquote style={{margin: "0", position: "relative", background: "#F3E8F7", borderRadius: "4px 16px 16px 16px", padding: "14px 16px 28px", fontSize: "15px", lineHeight: "1.6", color: "#1E1830"}}>
                  {"The Kundli report was far more detailed than I expected, and you can tell someone actually studied my chart. The remedies are practical and easy to follow. Highly recommend."}
                  <span style={{position: "absolute", right: "12px", bottom: "7px", display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: "#6C1594"}}>
                    <svg aria-hidden={"true"} width={"16"} height={"10"} viewBox={"0 0 16 10"} fill={"none"} stroke={"#6C1594"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M1 5.5l3 3L10 1.5M6.5 8.5L14 1.5"} />
                    </svg>
                  </span>
                </blockquote>
              </figure>
            </div>
            <p style={{margin: "36px 0 0", textAlign: "center", fontSize: "15px", color: "#5C5470"}}>
              {"Have we guided you? "}
              <a href={"https://wa.me/919129237566"} style={{fontWeight: "700"}}>
                {"Share your experience on WhatsApp →"}
              </a>
            </p>
          </div>
        </div>
        <div style={{position: "relative", overflow: "hidden"}}>
          <div style={{maxWidth: "860px", margin: "0 auto", padding: "96px 24px", position: "relative"}}>
            <p style={{margin: "0 0 10px", textAlign: "center", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
              {"Questions"}
            </p>
            <h2 style={{margin: "0 0 40px", textAlign: "center", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(32px, 3.6vw, 44px)", lineHeight: "1.15"}}>
              {"Before you book"}
            </h2>
            <div style={{display: "grid", gap: "12px"}}>
              <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 24px"}}>
                <summary style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", minHeight: "64px", fontWeight: "700"}}>
                  {"Are readings done by a person or by software?"}
                  <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "24px", color: "#921A11", transition: "transform 0.2s"}}>
                    {"+"}
                  </span>
                </summary>
                <p style={{margin: "0 0 22px", color: "#5C5470"}}>
                  {"By us, personally. Every report and consultation is prepared by Ahalya Sangeeta and Maneswita after studying your chart. Only our free tools, like the free Kundli, are calculated automatically."}
                </p>
              </details>
              <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 24px"}}>
                <summary style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", minHeight: "64px", fontWeight: "700"}}>
                  {"When and how will I receive my report?"}
                  <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "24px", color: "#921A11", transition: "transform 0.2s"}}>
                    {"+"}
                  </span>
                </summary>
                <p style={{margin: "0 0 22px", color: "#5C5470"}}>
                  {"As a PDF on both email and WhatsApp, within 5 to 7 working days of payment."}
                </p>
              </details>
              <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 24px"}}>
                <summary style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", minHeight: "64px", fontWeight: "700"}}>
                  {"How soon will my consultation happen?"}
                  <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "24px", color: "#921A11", transition: "transform 0.2s"}}>
                    {"+"}
                  </span>
                </summary>
                <p style={{margin: "0 0 22px", color: "#5C5470"}}>
                  {"We call you within 24 hours to confirm your birth details and booking and schedule the call within 7 to 10 days, at a time that suits you."}
                </p>
              </details>
              <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 24px"}}>
                <summary style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", minHeight: "64px", fontWeight: "700"}}>
                  {"What if I cannot follow a remedy exactly?"}
                  <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "24px", color: "#921A11", transition: "transform 0.2s"}}>
                    {"+"}
                  </span>
                </summary>
                <p style={{margin: "0 0 22px", color: "#5C5470"}}>
                  {"That is fine. Tell us, and we will suggest an alternative that still suits your chart. Consistency matters more than perfection."}
                </p>
              </details>
              <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 24px"}}>
                <summary style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", minHeight: "64px", fontWeight: "700"}}>
                  {"Will my birth details stay private?"}
                  <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "24px", color: "#921A11", transition: "transform 0.2s"}}>
                    {"+"}
                  </span>
                </summary>
                <p style={{margin: "0 0 22px", color: "#5C5470"}}>
                  {"Yes. Your details are used only to prepare your reading and are never shared."}
                </p>
              </details>
            </div>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 24px 96px"}}>
          <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(120deg, #2E003E 0%, #6C1594 100%)", color: "#FFFFFF", borderRadius: "28px"}}>
            <div className={"am-stars"} aria-hidden={"true"} />
            <img className={"am-spin"} src={"/images/c78c760843b4d5a96c8f408f537e3799.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", right: "-160px", top: "-150px", width: "460px", height: "460px", opacity: "0.2", pointerEvents: "none"}} />
            <div style={{position: "relative", padding: "clamp(32px, 5vw, 64px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "28px"}}>
              <div style={{flex: "1 1 100%", minWidth: "0"}}>
                <h2 style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(26px, 2.8vw, 38px)", lineHeight: "1.2", color: "#FFFFFF"}}>
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

HomePage.prototype.componentDidMount = function componentDidMount() {
  // "/?tool=kp#free" (the Edit details link on the result pages) opens the matching tab of the free tools.
  var q = readUrlState(['tool']);
  var next = { __now: Date.now() };
  if (['kundli', 'kp', 'name', 'mobile'].indexOf(q.tool) >= 0) next.tool = q.tool;
  this.setState(next);
};

export default HomePage;
