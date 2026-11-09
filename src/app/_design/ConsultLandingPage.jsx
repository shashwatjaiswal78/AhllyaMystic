"use client";
/* eslint-disable */
// Generated from the design file ConsultLanding.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { sx, hole } from "./sx";
import OfferCountdown from "./OfferCountdown";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState, maskDate, maskTime, maskTimeHM, maskPart } from "./wire";

class ConsultLandingPage extends React.Component {
  renderVals() { return {}; }
}

ConsultLandingPage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="ConsultLanding" style={{ display: "contents" }}>
      <div style={{fontFamily: "'Manrope', system-ui, sans-serif", color: "#1E1830", background: "#FBF7F0", fontSize: "14.5px", lineHeight: "1.6"}}>
        <header style={{background: "linear-gradient(90deg, #2E003E 0%, #4A0A66 100%)", borderBottom: "1px solid rgba(255,255,255,0.08)"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px"}}>
            <a href={"/"} aria-label={"Ahllya Mystic home"} style={{display: "block"}}>
              <img src={"/images/f0424906cf2ed307d839fd952ac77981.png"} alt={"Ahllya Mystic"} style={{height: "44px", width: "auto", display: "block"}} />
            </a>
            <a href={"https://wa.me/919129237566"} style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "42px", padding: "0 18px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.4)", color: "#FFFFFF", fontSize: "13px", fontWeight: "700", textDecoration: "none"}}>
              <svg aria-hidden={"true"} width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <path d={"M4 20l1.3-3.9A8 8 0 1 1 8 19z"} />
              </svg>
              {"WhatsApp karein"}
            </a>
          </div>
        </header>
        <div style={{position: "sticky", top: "0", zIndex: "30", background: "#921A11", color: "#FFFFFF", boxShadow: "0 8px 20px -12px rgba(0,0,0,0.55)"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "10px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "10px 20px", textAlign: "center"}}>
            <span style={{fontWeight: "700"}}>
              {"Festive offer sirf 30 November tak"}
            </span>
            <OfferCountdown />
            <a href={"#plans"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "44px", padding: "0 22px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "13.5px", textDecoration: "none", whiteSpace: "nowrap"}}>
              {"Book an expert"}
            </a>
          </div>
        </div>
        <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #1E0029 0%, #2E003E 40%, #4A0A66 75%, #6C1594 100%)", color: "#FFFFFF"}}>
          <div className={"am-stars"} aria-hidden={"true"} />
          <div className={"am-stars2"} aria-hidden={"true"} />
          <img className={"am-spin"} src={"/images/c78c760843b4d5a96c8f408f537e3799.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", left: "-220px", bottom: "-260px", width: "620px", height: "620px", opacity: "0.12", pointerEvents: "none"}} />
          <div style={{position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 72px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px"}}>
            <div className={"am-center-mobile"} style={{flex: "1.25 1 480px", minWidth: "0"}}>
              <p style={{margin: "0 0 14px", fontSize: "16px", fontWeight: "700", color: "#FCCE07"}}>
                {"Shaadi? Career? Paisa?"}
              </p>
              <h1 style={{margin: "0 0 18px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(30px, 3.74vw, 46.5px)", lineHeight: "1.08"}}>
                {"Jo bhi sawaal hai, uska seedha jawaab aapki kundli se 45 mins mein."}
              </h1>
              <p style={{margin: "0 0 26px", fontSize: "16px", color: "#EADFF2", maxWidth: "580px"}}>
                {"Ahllya Mystic ki expert team aapki kundli dekhkar batayegi kya hoga, kab hoga aur kya upay karein. Saare areas, jitne chahe sawaal."}
              </p>
              <div className={"am-hero-flex"} style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 22px", marginBottom: "28px"}}>
                <a href={"#plans"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "56px", padding: "0 30px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "14.5px", textDecoration: "none"}}>
                  {"Haan, mujhe expert se baat karni hai"}
                </a>
                <span style={{fontSize: "13.5px", color: "#EADFF2"}}>
                  {"Sirf "}
                  <b style={{color: "#FFFFFF", fontSize: "17.5px"}}>
                    {"₹3,101"}
                  </b>
                  {" se shuru"}
                </span>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(150px, 100%), 1fr))", gap: "10px", maxWidth: "620px"}}>
                <div style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "14px", padding: "12px 14px"}}>
                  <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "21px", lineHeight: "1.1"}}>
                    {"45 minutes"}
                  </p>
                  <p style={{margin: "2px 0 0", fontSize: "12px", color: "#CDB8DA"}}>
                    {"ek call mein sab kuch"}
                  </p>
                </div>
                <div style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "14px", padding: "12px 14px"}}>
                  <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "21px", lineHeight: "1.1"}}>
                    {"6+ years"}
                  </p>
                  <p style={{margin: "2px 0 0", fontSize: "12px", color: "#CDB8DA"}}>
                    {"experience"}
                  </p>
                </div>
                <div style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "14px", padding: "12px 14px"}}>
                  <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "21px", lineHeight: "1.1"}}>
                    {"Ghar baithe"}
                  </p>
                  <p style={{margin: "2px 0 0", fontSize: "12px", color: "#CDB8DA"}}>
                    {"na travel, na line"}
                  </p>
                </div>
              </div>
            </div>
            <div style={{flex: "1 1 360px", minWidth: "0", maxWidth: "440px", margin: "0 auto", position: "relative", padding: "16px"}}>
              <div aria-hidden={"true"} style={{position: "absolute", inset: "0", border: "1px solid #FCCE07", opacity: "0.5", borderRadius: "240px 240px 26px 26px"}} />
              <img src={"/images/26c9dadb7f4b6a08ec59999c3d9e9332.jpg"} alt={"Maneswita aur Ahalya Sangeeta, Ahllya Mystic"} style={{position: "relative", width: "100%", aspectRatio: "4 / 5", objectFit: "cover", objectPosition: "center 35%", borderRadius: "220px 220px 18px 18px", display: "block"}} />
              <div style={{position: "absolute", left: "-6px", bottom: "34px", background: "#FFFFFF", color: "#1E1830", borderRadius: "14px", padding: "10px 14px", boxShadow: "0 20px 40px -20px rgba(0,0,0,0.6)"}}>
                <p style={{margin: "0", fontWeight: "700"}}>
                  {"Maneswita aur Ahalya Sangeeta"}
                </p>
                <p style={{margin: "0", fontSize: "12px", color: "#5C5470"}}>
                  {"Astrology, Numerology and Vastu Expert"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{overflow: "hidden", background: "linear-gradient(90deg, #B6A377 0%, #CBB154 50%, #B6A377 100%)", color: "#2E003E", padding: "12px 0", fontSize: "13.5px"}}>
          <div className={"am-marquee"}>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"45 minutes ki 1:1 call"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"Koi bhi sawaal, kitne bhi sawaal"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"Vedic aur KP astrology"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"Numerology"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"Vastu"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"Hindi ya English"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"Audio ya video"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"Darr nahi, saral upay"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"6 saal ka anubhav"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"45 minutes ki 1:1 call"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"Koi bhi sawaal, kitne bhi sawaal"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"Vedic aur KP astrology"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"Numerology"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"Vastu"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"Hindi ya English"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"Audio ya video"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"Darr nahi, saral upay"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
            <span style={{display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: "700"}}>
              {"6 saal ka anubhav"}
              <span aria-hidden={"true"} style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}>
                {"|"}
              </span>
            </span>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px 40px"}}>
          <div className={"am-center-mobile"} style={{marginBottom: "30px"}}>
            <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
              {"Sach bataun?"}
            </p>
            <h2 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15"}}>
              {"Zyadatar log galat jagah se jawaab dhoondhte hain."}
            </h2>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "16px"}}>
            <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px", display: "flex", gap: "14px", alignItems: "flex-start"}}>
              <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "999px", background: "#F8E8E6"}}>
                <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                  <path d={"M6 6l12 12M18 6L6 18"} />
                </svg>
              </span>
              <p style={{margin: "0", fontSize: "14.5px", lineHeight: "1.6", color: "#3A3350"}}>
                {"YouTube par apni rashi ka rashifal dekhte hain, jo laakhon logon ke liye ek jaisa hota hai."}
              </p>
            </div>
            <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px", display: "flex", gap: "14px", alignItems: "flex-start"}}>
              <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "999px", background: "#F8E8E6"}}>
                <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                  <path d={"M6 6l12 12M18 6L6 18"} />
                </svg>
              </span>
              <p style={{margin: "0", fontSize: "14.5px", lineHeight: "1.6", color: "#3A3350"}}>
                {"Kisi ne bola “ye pooja karwa lo”, bina ye dekhe ki aapki kundli kya keh rahi hai."}
              </p>
            </div>
            <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px", display: "flex", gap: "14px", alignItems: "flex-start"}}>
              <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "999px", background: "#F8E8E6"}}>
                <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                  <path d={"M6 6l12 12M18 6L6 18"} />
                </svg>
              </span>
              <p style={{margin: "0", fontSize: "14.5px", lineHeight: "1.6", color: "#3A3350"}}>
                {"Mehnge stone aur upay khareed lete hain, aur phir bhi sawaal wahi ka wahi rehta hai."}
              </p>
            </div>
          </div>
          <p className={"am-nowrap-lg"} style={{margin: "28px 0 0", fontFamily: "'Marcellus', serif", fontSize: "clamp(17px, 1.53vw, 20px)", lineHeight: "1.35", color: "#2E003E"}}>
            {"Aapka sawaal aapki kundli se juda hai. Uska jawaab bhi aapki kundli dekhkar hi milna chahiye."}
          </p>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "40px 24px 88px"}}>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "20px"}}>
            <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "28px"}}>
              <p style={{margin: "0 0 16px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: "700", color: "#5C5470"}}>
                {"Purana tareeka"}
              </p>
              <p style={{margin: "0 0 12px", display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5470"}}>
                <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                  <path d={"M6 6l12 12M18 6L6 18"} />
                </svg>
                {"Sabke liye ek jaisa rashifal"}
              </p>
              <p style={{margin: "0 0 12px", display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5470"}}>
                <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                  <path d={"M6 6l12 12M18 6L6 18"} />
                </svg>
                {"Bina wajah mehngi pooja"}
              </p>
              <p style={{margin: "0 0 12px", display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5470"}}>
                <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                  <path d={"M6 6l12 12M18 6L6 18"} />
                </svg>
                {"Upay ke liye alag se paisa"}
              </p>
              <p style={{margin: "0 0 12px", display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5470"}}>
                <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#921A11"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                  <path d={"M6 6l12 12M18 6L6 18"} />
                </svg>
                {"Jawaab adhoora, confusion poora"}
              </p>
            </div>
            <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #2E003E, #6C1594)", color: "#FFFFFF", borderRadius: "22px", padding: "28px"}}>
              <div className={"am-stars"} aria-hidden={"true"} />
              <p style={{position: "relative", margin: "0 0 16px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: "700", color: "#FCCE07"}}>
                {"Ahllya Mystic ka tareeka"}
              </p>
              <p style={{position: "relative", margin: "0 0 12px", display: "flex", gap: "10px", fontSize: "14.5px"}}>
                <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FCCE07"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                  <path d={"M5 12l5 5 9-10"} />
                </svg>
                {"Aapki apni kundli, 45 minutes"}
              </p>
              <p style={{position: "relative", margin: "0 0 12px", display: "flex", gap: "10px", fontSize: "14.5px"}}>
                <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FCCE07"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                  <path d={"M5 12l5 5 9-10"} />
                </svg>
                {"Experts se seedhi baat"}
              </p>
              <p style={{position: "relative", margin: "0 0 12px", display: "flex", gap: "10px", fontSize: "14.5px"}}>
                <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FCCE07"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                  <path d={"M5 12l5 5 9-10"} />
                </svg>
                {"Practical upay, kundli ke hisaab se"}
              </p>
              <p style={{position: "relative", margin: "0 0 12px", display: "flex", gap: "10px", fontSize: "14.5px"}}>
                <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FCCE07"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                  <path d={"M5 12l5 5 9-10"} />
                </svg>
                {"Har sawaal ka seedha, saaf jawaab"}
              </p>
            </div>
          </div>
        </div>
        <div id={"plans"} style={{background: "#F4EDE1"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px"}}>
            <div style={{textAlign: "center", marginBottom: "32px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Aapko kya milega"}
              </p>
              <h2 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15"}}>
                {"Apna expert chuniye."}
              </h2>
              <p style={{margin: "0 auto", fontSize: "14.5px", color: "#5C5470", maxWidth: "640px"}}>
                {"Dono consultation 45 minutes ke hain. Saare areas cover hote hain, aur aap jitne chahe sawaal pooch sakte hain. Fark sirf itna hai ki aap kis expert se baat karna chahte hain."}
              </p>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "20px", maxWidth: "980px", margin: "0 auto"}}>
              <div className={"am-lift"} style={{position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", background: "linear-gradient(160deg, #2E003E 0%, #6C1594 100%)", color: "#FFFFFF", borderRadius: "22px", padding: "28px"}}>
                <div className={"am-stars"} aria-hidden={"true"} />
                <div style={{position: "relative", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "22px", marginBottom: "22px"}}>
                  <img src={"/images/4799fee4da0ba25da44abe8ca0aebfec.jpg"} alt={"Ahalya Sangeeta"} style={{flex: "none", width: "168px", height: "168px", borderRadius: "999px", objectFit: "cover", objectPosition: "center 25%", display: "block", boxShadow: "0 0 0 4px #FCCE07, 0 18px 34px -16px rgba(46,0,62,0.6)"}} />
                  <div style={{minWidth: "0"}}>
                    <span style={{display: "inline-block", marginBottom: "6px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#921A11", background: "#FCCE07", padding: "5px 12px", borderRadius: "999px"}}>
                      {"Senior Expert"}
                    </span>
                    <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "23px", lineHeight: "1.15"}}>
                      {"Ahalya Sangeeta"}
                    </p>
                    <p style={{margin: "4px 0 12px", fontSize: "13px", color: "#EADFF2"}}>
                      {"Vedic, KP, Numerology aur Vastu"}
                    </p>
                    <p style={{margin: "0 0 4px", display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "4px 10px"}}>
                      <span style={{fontSize: "16px", color: "#CDB8DA", textDecoration: "line-through"}}>
                        {"₹11,111"}
                      </span>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "35px", lineHeight: "1"}}>
                        {"₹5,100"}
                      </span>
                    </p>
                    <p style={{margin: "0 0 6px"}}>
                      <span style={{display: "inline-block", fontSize: "12px", fontWeight: "700", color: "#FFFFFF", background: "#921A11", padding: "3px 10px", borderRadius: "999px"}}>
                        {"Festive offer · ₹6,011 ki bachat"}
                      </span>
                    </p>
                    <p style={{margin: "0", fontSize: "12px", color: "#EADFF2"}}>
                      {"45 minutes · ek call mein sab kuch"}
                    </p>
                  </div>
                </div>
                <div style={{position: "relative", flex: "1", borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "16px", marginBottom: "20px"}}>
                  <p style={{position: "relative", margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px", color: "#FFFFFF"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FCCE07"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                      <path d={"M5 12l5 5 9-10"} />
                    </svg>
                    {"45 minutes ki 1:1 call"}
                  </p>
                  <p style={{position: "relative", margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px", color: "#FFFFFF"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FCCE07"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                      <path d={"M5 12l5 5 9-10"} />
                    </svg>
                    {"Saare areas: career, shaadi, paisa, sehat aur baaki"}
                  </p>
                  <p style={{position: "relative", margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px", color: "#FFFFFF"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FCCE07"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                      <path d={"M5 12l5 5 9-10"} />
                    </svg>
                    {"Jitne chahe utne sawaal"}
                  </p>
                  <p style={{position: "relative", margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px", color: "#FFFFFF"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FCCE07"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                      <path d={"M5 12l5 5 9-10"} />
                    </svg>
                    {"Aapki kundli pehle se padhi hui"}
                  </p>
                  <p style={{position: "relative", margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px", color: "#FFFFFF"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FCCE07"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                      <path d={"M5 12l5 5 9-10"} />
                    </svg>
                    {"Aapke liye saral upay"}
                  </p>
                  <p style={{position: "relative", margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px", color: "#FFFFFF"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FCCE07"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                      <path d={"M5 12l5 5 9-10"} />
                    </svg>
                    {"Audio ya video, Hindi ya English"}
                  </p>
                </div>
                <PayButton as="a" order={{ productId: 'consult-landing-senior' }} requireCustomer={false} href={"#"} style={{position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "56px", padding: "0 30px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "14.5px", textDecoration: "none", width: "100%", boxSizing: "border-box"}}>
                  {"Ahalya ji se baat karein"}
                </PayButton>
              </div>
              <div className={"am-lift"} style={{position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", background: "#FFFFFF", color: "#1E1830", border: "1px solid #E8DFD0", outline: "1px solid #EFE6D8", outlineOffset: "-9px", borderRadius: "22px", padding: "28px"}}>
                <div style={{position: "relative", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "22px", marginBottom: "22px"}}>
                  <img src={"/images/cd60cc55788c423c9c66a30e5201d374.jpg"} alt={"Maneswita"} style={{flex: "none", width: "168px", height: "168px", borderRadius: "999px", objectFit: "cover", objectPosition: "center 25%", display: "block", boxShadow: "0 0 0 4px #CBB154, 0 18px 34px -16px rgba(46,0,62,0.6)"}} />
                  <div style={{minWidth: "0"}}>
                    <span style={{display: "inline-block", marginBottom: "6px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#6C1594", background: "#F3E8F7", padding: "5px 12px", borderRadius: "999px"}}>
                      {"Expert"}
                    </span>
                    <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "23px", lineHeight: "1.15"}}>
                      {"Maneswita"}
                    </p>
                    <p style={{margin: "4px 0 12px", fontSize: "13px", color: "#5C5470"}}>
                      {"Vedic, KP aur Numerology"}
                    </p>
                    <p style={{margin: "0 0 4px", display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "4px 10px"}}>
                      <span style={{fontSize: "16px", color: "#736B8A", textDecoration: "line-through"}}>
                        {"₹7,201"}
                      </span>
                      <span style={{fontFamily: "'Marcellus', serif", fontSize: "35px", lineHeight: "1"}}>
                        {"₹3,101"}
                      </span>
                    </p>
                    <p style={{margin: "0 0 6px"}}>
                      <span style={{display: "inline-block", fontSize: "12px", fontWeight: "700", color: "#FFFFFF", background: "#921A11", padding: "3px 10px", borderRadius: "999px"}}>
                        {"Festive offer · ₹4,100 ki bachat"}
                      </span>
                    </p>
                    <p style={{margin: "0", fontSize: "12px", color: "#5C5470"}}>
                      {"45 minutes · ek call mein sab kuch"}
                    </p>
                  </div>
                </div>
                <div style={{position: "relative", flex: "1", borderTop: "1px solid #EFE6D8", paddingTop: "16px", marginBottom: "20px"}}>
                  <p style={{position: "relative", margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px", color: "#1E1830"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                      <path d={"M5 12l5 5 9-10"} />
                    </svg>
                    {"45 minutes ki 1:1 call"}
                  </p>
                  <p style={{position: "relative", margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px", color: "#1E1830"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                      <path d={"M5 12l5 5 9-10"} />
                    </svg>
                    {"Saare areas: career, shaadi, paisa, sehat aur baaki"}
                  </p>
                  <p style={{position: "relative", margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px", color: "#1E1830"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                      <path d={"M5 12l5 5 9-10"} />
                    </svg>
                    {"Jitne chahe utne sawaal"}
                  </p>
                  <p style={{position: "relative", margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px", color: "#1E1830"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                      <path d={"M5 12l5 5 9-10"} />
                    </svg>
                    {"Aapki kundli pehle se padhi hui"}
                  </p>
                  <p style={{position: "relative", margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px", color: "#1E1830"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                      <path d={"M5 12l5 5 9-10"} />
                    </svg>
                    {"Aapke liye saral upay"}
                  </p>
                  <p style={{position: "relative", margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "13.5px", color: "#1E1830"}}>
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6C1594"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{flex: "none", marginTop: "3px"}}>
                      <path d={"M5 12l5 5 9-10"} />
                    </svg>
                    {"Audio ya video, Hindi ya English"}
                  </p>
                </div>
                <PayButton as="a" order={{ productId: 'consult-landing-expert' }} requireCustomer={false} href={"#"} style={{position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "56px", padding: "0 30px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "14.5px", textDecoration: "none", width: "100%", boxSizing: "border-box"}}>
                  {"Maneswita ji se baat karein"}
                </PayButton>
              </div>
            </div>
            <p style={{margin: "20px 0 0", textAlign: "center", fontSize: "13.5px", color: "#5C5470"}}>
              {"Likhit report bhi chahiye? Booking ke time koi bhi report jodiye aur us report par "}
              <b style={{color: "#921A11"}}>
                {"10% off"}
              </b>
              {" paaiye."}
            </p>
          </div>
        </div>
        <div style={{background: "#FFFFFF", borderTop: "1px solid #EFE6D8", borderBottom: "1px solid #EFE6D8"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "64px 24px", textAlign: "center"}}>
            <p style={{margin: "0 0 16px", fontFamily: "'Marcellus', serif", fontSize: "21px"}}>
              {"Jo bhi mann mein hai, poochiye"}
            </p>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px"}}>
              <span style={{fontSize: "13.5px", fontWeight: "600", color: "#3D0752", background: "#FFFFFF", border: "1px solid #E8DFD0", padding: "9px 16px", borderRadius: "999px"}}>
                {"Career aur naukri"}
              </span>
              <span style={{fontSize: "13.5px", fontWeight: "600", color: "#3D0752", background: "#FFFFFF", border: "1px solid #E8DFD0", padding: "9px 16px", borderRadius: "999px"}}>
                {"Shaadi"}
              </span>
              <span style={{fontSize: "13.5px", fontWeight: "600", color: "#3D0752", background: "#FFFFFF", border: "1px solid #E8DFD0", padding: "9px 16px", borderRadius: "999px"}}>
                {"Paisa aur business"}
              </span>
              <span style={{fontSize: "13.5px", fontWeight: "600", color: "#3D0752", background: "#FFFFFF", border: "1px solid #E8DFD0", padding: "9px 16px", borderRadius: "999px"}}>
                {"Ghar ka Vastu"}
              </span>
              <span style={{fontSize: "13.5px", fontWeight: "600", color: "#3D0752", background: "#FFFFFF", border: "1px solid #E8DFD0", padding: "9px 16px", borderRadius: "999px"}}>
                {"Santaan"}
              </span>
              <span style={{fontSize: "13.5px", fontWeight: "600", color: "#3D0752", background: "#FFFFFF", border: "1px solid #E8DFD0", padding: "9px 16px", borderRadius: "999px"}}>
                {"Sehat"}
              </span>
              <span style={{fontSize: "13.5px", fontWeight: "600", color: "#3D0752", background: "#FFFFFF", border: "1px solid #E8DFD0", padding: "9px 16px", borderRadius: "999px"}}>
                {"Videsh mein settle"}
              </span>
              <span style={{fontSize: "13.5px", fontWeight: "600", color: "#3D0752", background: "#FFFFFF", border: "1px solid #E8DFD0", padding: "9px 16px", borderRadius: "999px"}}>
                {"Padhai"}
              </span>
              <span style={{fontSize: "13.5px", fontWeight: "600", color: "#3D0752", background: "#FFFFFF", border: "1px solid #E8DFD0", padding: "9px 16px", borderRadius: "999px"}}>
                {"Kundli Milan"}
              </span>
              <span style={{fontSize: "13.5px", fontWeight: "600", color: "#3D0752", background: "#FFFFFF", border: "1px solid #E8DFD0", padding: "9px 16px", borderRadius: "999px"}}>
                {"Dosh aur upay"}
              </span>
              <span style={{fontSize: "13.5px", fontWeight: "600", color: "#3D0752", background: "#FFFFFF", border: "1px solid #E8DFD0", padding: "9px 16px", borderRadius: "999px"}}>
                {"Naam numerology"}
              </span>
            </div>
          </div>
        </div>
        <div style={{background: "#F3E8F7"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "80px 24px"}}>
            <div style={{textAlign: "center", marginBottom: "32px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Kaise hota hai"}
              </p>
              <h2 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15"}}>
                {"Sirf 4 aasaan steps."}
              </h2>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "16px"}}>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "999px", background: "#4A0A66", color: "#FFFFFF", fontWeight: "700", marginBottom: "14px"}}>
                  {"1"}
                </span>
                <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "18.5px"}}>
                  {"Expert chuniye"}
                </p>
                <p style={{margin: "0", fontSize: "13.5px", lineHeight: "1.6", color: "#5C5470"}}>
                  {"Senior Expert ya Expert, jo aapko theek lage."}
                </p>
              </div>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "999px", background: "#4A0A66", color: "#FFFFFF", fontWeight: "700", marginBottom: "14px"}}>
                  {"2"}
                </span>
                <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "18.5px"}}>
                  {"Payment kijiye"}
                </p>
                <p style={{margin: "0", fontSize: "13.5px", lineHeight: "1.6", color: "#5C5470"}}>
                  {"Razorpay se surakshit payment: UPI, card ya net banking."}
                </p>
              </div>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "999px", background: "#4A0A66", color: "#FFFFFF", fontWeight: "700", marginBottom: "14px"}}>
                  {"3"}
                </span>
                <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "18.5px"}}>
                  {"Hum call karenge"}
                </p>
                <p style={{margin: "0", fontSize: "13.5px", lineHeight: "1.6", color: "#5C5470"}}>
                  {"24 ghante ke andar, aapki janm details confirm karne aur samay tay karne ke liye."}
                </p>
              </div>
              <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "999px", background: "#4A0A66", color: "#FFFFFF", fontWeight: "700", marginBottom: "14px"}}>
                  {"4"}
                </span>
                <p style={{margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "18.5px"}}>
                  {"Aapka consultation"}
                </p>
                <p style={{margin: "0", fontSize: "13.5px", lineHeight: "1.6", color: "#5C5470"}}>
                  {"WhatsApp par audio ya video call, 7 se 10 din mein, jab hum aapki kundli achhe se padh lein."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "80px 24px"}}>
          <div style={{textAlign: "center", marginBottom: "28px"}}>
            <h2 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15"}}>
              {"Ab aapke paas do raaste hain."}
            </h2>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "20px", maxWidth: "960px", margin: "0 auto"}}>
            <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "28px"}}>
              <p style={{margin: "0 0 8px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: "700", color: "#736B8A"}}>
                {"Raasta 1"}
              </p>
              <p style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontSize: "21px", color: "#5C5470"}}>
                {"Sochte rahiye"}
              </p>
              <p style={{margin: "0", fontSize: "14.5px", lineHeight: "1.6", color: "#5C5470"}}>
                {"Yeh page band kijiye, online jawaab dhoondhte rahiye, aur aise upay par paise lagate rahiye jo aapki kundli dekh kar nahi bataye gaye."}
              </p>
            </div>
            <div style={{position: "relative", overflow: "hidden", background: "#FFFFFF", border: "2px solid #6C1594", borderRadius: "22px", padding: "28px"}}>
              <p style={{margin: "0 0 8px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: "700", color: "#6C1594"}}>
                {"Raasta 2"}
              </p>
              <p style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontSize: "21px", color: "#2E003E"}}>
                {"Jawaab Paaiye"}
              </p>
              <p style={{margin: "0 0 18px", fontSize: "14.5px", lineHeight: "1.6", color: "#3A3350"}}>
                {"Aaj expert chuniye. Call book kijiye. 45 minutes mein apni kundli ke hisaab se saaf jawaab paaiye."}
              </p>
              <a href={"#plans"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "56px", padding: "0 30px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "14.5px", textDecoration: "none"}}>
                {"Main Raasta 2 chunta hoon"}
              </a>
            </div>
          </div>
        </div>
        <div style={{position: "relative", overflow: "hidden", background: "linear-gradient(120deg, #2E003E 0%, #6C1594 100%)", color: "#FFFFFF"}}>
          <div className={"am-stars"} aria-hidden={"true"} />
          <div style={{position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "88px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "28px 56px", alignItems: "center"}}>
            <div style={{position: "relative"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
                {"Vastu consultation · Festive offer"}
              </p>
              <p style={{margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontSize: "clamp(24px, 2.55vw, 32px)", lineHeight: "1.2"}}>
                {"Kya aapka ghar aapke saath hai, ya aapke khilaaf?"}
              </p>
              <p style={{margin: "0 0 18px", color: "#EADFF2", fontSize: "14.5px"}}>
                {"Is festive season mein ghar ki urja theek kijiye. Aapke ghar ke floor plan ke basis par Vastu consultation aur saral upay, bina deewar tode."}
              </p>
              <p style={{margin: "0", display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap"}}>
                <span style={{fontSize: "17.5px", color: "#CDB8DA", textDecoration: "line-through"}}>
                  {"₹9,999"}
                </span>
                <span style={{fontFamily: "'Marcellus', serif", fontSize: "40px", lineHeight: "1"}}>
                  {"₹3,300"}
                </span>
                <span style={{fontSize: "12px", fontWeight: "700", color: "#921A11", background: "#FCCE07", padding: "4px 10px", borderRadius: "999px"}}>
                  {"30 November tak"}
                </span>
              </p>
            </div>
            <div style={{position: "relative", display: "grid", gap: "12px"}}>
              <div style={{display: "flex", gap: "12px", alignItems: "flex-start", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: "14px", padding: "12px 14px"}}>
                <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "13px"}}>
                  {"1"}
                </span>
                <span style={{fontSize: "13.5px", lineHeight: "1.5"}}>
                  {"Apne ghar ka layout ya floor plan taiyaar kijiye"}
                </span>
              </div>
              <div style={{display: "flex", gap: "12px", alignItems: "flex-start", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: "14px", padding: "12px 14px"}}>
                <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "13px"}}>
                  {"2"}
                </span>
                <span style={{fontSize: "13.5px", lineHeight: "1.5"}}>
                  {"Us par Vastu gridding karwaiye aur humein bhejiye"}
                </span>
              </div>
              <div style={{display: "flex", gap: "12px", alignItems: "flex-start", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: "14px", padding: "12px 14px"}}>
                <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "13px"}}>
                  {"3"}
                </span>
                <span style={{fontSize: "13.5px", lineHeight: "1.5"}}>
                  {"Hum plan padh kar consultation dete hain, kamre ke hisaab se upay ke saath"}
                </span>
              </div>
              <p style={{margin: "2px 0 6px", fontSize: "12px", color: "#CDB8DA"}}>
                {"Abhi site visit nahi hota. Consultation aapke bheje gaye grid wale floor plan par hota hai."}
              </p>
              <PayButton as="a" order={{ productId: 'consult-landing-vastu' }} requireCustomer={false} href={"#"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "56px", padding: "0 30px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "14.5px", textDecoration: "none"}}>
                {"Vastu consultation book karein"}
              </PayButton>
            </div>
          </div>
        </div>
        <div style={{background: "#F4EDE1"}}>
          <div style={{maxWidth: "860px", margin: "0 auto", padding: "88px 24px"}}>
            <div style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "clamp(26px, 5vw, 52px)"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Humari taraf se ek baat"}
              </p>
              <p style={{margin: "0 0 18px", fontFamily: "'Marcellus', serif", fontSize: "clamp(22.5px, 2.55vw, 28.5px)", lineHeight: "1.25"}}>
                {"“Agar achha hai, toh aur behtar ho sakta hai. Agar bura hai, toh aasaan ho sakta hai.”"}
              </p>
              <div style={{display: "grid", gap: "14px", fontSize: "15px", lineHeight: "1.75", color: "#3A3350"}}>
                <p style={{margin: "0"}}>
                  {"Namaste. Hum hain Ahalya Sangeeta aur Maneswita. Pichhle 6 saal se hum Vedic aur KP jyotish, numerology aur Vastu se logon ki kundli padh rahe hain. Bahut se log humare paas wahi sawaal lekar aaye jo shayad aaj aapke mann mein hain."}
                </p>
                <p style={{margin: "0"}}>
                  {"Hum darr mein vishwas nahi karte. Hum aapko yeh nahi kahenge ki kuch bura hone wala hai aur phir mehngi pooja bechenge. Hum aapki kundli dhyaan se padhte hain, imaandaari se batate hain ki usmein kya hai, aur aise upay dete hain jo aap ghar par aaraam se kar sakein."}
                </p>
                <p style={{margin: "0"}}>
                  {"Agar koi sawaal aapko raat ko sone nahi deta, toh hum use aapke saath milkar dekhna chahenge."}
                </p>
              </div>
              <p style={{margin: "22px 0 22px", fontFamily: "'Marcellus', serif", fontSize: "19px", color: "#921A11"}}>
                {"Ahalya Sangeeta aur Maneswita"}
              </p>
              <a href={"#plans"} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "56px", padding: "0 30px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "14.5px", textDecoration: "none"}}>
                {"Mujhe apne sawaal ka jawaab chahiye"}
              </a>
            </div>
          </div>
        </div>
        <div id={"stories"} style={{position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at 85% 10%, rgba(108,21,148,0.06), rgba(108,21,148,0) 50%), #FFFDF9", borderTop: "1px solid #E8DFD0"}}>
          <img className={"am-spin"} src={"/images/139dc9f8771bafe47e83ebdfd8f024a6.png"} alt={""} aria-hidden={"true"} style={{position: "absolute", left: "-140px", bottom: "-160px", width: "440px", height: "440px", opacity: "0.12", pointerEvents: "none"}} />
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "88px 24px 96px", position: "relative"}}>
            <div style={{textAlign: "center", margin: "0 auto 44px"}}>
              <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
                {"Client stories"}
              </p>
              <h2 style={{margin: "0", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 3.06vw, 37px)", lineHeight: "1.15"}}>
                <span className={"am-nowrap"}>
                  {"Unki zubaani, jinhe humne guide kiya."}
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
              {"Humne aapko guide kiya hai? "}
              <a href={"https://wa.me/919129237566"} style={{fontWeight: "700"}}>
                {"Apna anubhav WhatsApp par bhejiye →"}
              </a>
            </p>
          </div>
        </div>
        <div style={{maxWidth: "860px", margin: "0 auto", padding: "80px 24px"}}>
          <p style={{margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700", textAlign: "center"}}>
            {"Aapke sawaal"}
          </p>
          <h2 style={{margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(25.5px, 2.89vw, 35px)", lineHeight: "1.15", textAlign: "center", marginBottom: "28px"}}>
            {"Booking se pehle"}
          </h2>
          <div style={{display: "grid", gap: "10px"}}>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"₹5,100 aur ₹3,101 wale consultation mein kya fark hai?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"Dono 45 minutes ke hain, saare areas cover hote hain, aur aap jitne chahe sawaal pooch sakte hain. ₹5,100 mein aapki baat Senior Expert Ahalya Sangeeta se hoti hai, aur ₹3,101 mein Expert Maneswita se."}
              </p>
            </details>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"Call kaise hoga?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"WhatsApp par audio ya video call, Hindi ya English mein. Payment ke 24 ghante ke andar hum aapko call karke details confirm karte hain aur samay tay karte hain."}
              </p>
            </details>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"Call 7 se 10 din baad kyun?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"Kyunki hum call se pehle aapki kundli achhe se padhte hain. Taaki call ka poora samay jawaab mein jaaye, calculation mein nahi."}
              </p>
            </details>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"Kya payment surakshit hai?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"Haan. Payment Razorpay se hota hai, aur aapke card ya bank ki koi detail humare paas nahi aati."}
              </p>
            </details>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"Kya main reschedule kar sakta hoon?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"Haan, ek baar free mein, agar aap call se kam se kam 24 ghante pehle bata dein. Payment refund nahi hota, sirf humari taraf se deri hone par."}
              </p>
            </details>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"Vastu consultation kaise hota hai? Kya aap ghar aayenge?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"Abhi site visit nahi hai. Aap apne ghar ka layout ya floor plan grid karwa ke humein bhejiye. Uske basis par hum consultation aur upay dete hain."}
              </p>
            </details>
            <details style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px"}}>
              <summary style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: "700"}}>
                {"Offer kab tak hai?"}
                <span className={"faq-plus"} aria-hidden={"true"} style={{flex: "none", fontSize: "19px", color: "#921A11", transition: "transform .2s"}}>
                  {"+"}
                </span>
              </summary>
              <p style={{margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65"}}>
                {"Festive offer 30 November 2026, raat 11:59 baje tak hai."}
              </p>
            </details>
          </div>
        </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 24px 72px"}}>
          <div style={{position: "relative", overflow: "hidden", textAlign: "center", background: "linear-gradient(120deg, #2E003E 0%, #6C1594 100%)", color: "#FFFFFF", borderRadius: "28px", padding: "clamp(32px, 5vw, 60px)"}}>
            <div className={"am-stars"} aria-hidden={"true"} />
            <p style={{position: "relative", margin: "0 0 10px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: "700"}}>
              {"Festive offer · 30 November 2026, raat 11:59 baje tak"}
            </p>
            <p style={{position: "relative", margin: "0 0 18px", fontFamily: "'Marcellus', serif", fontSize: "clamp(24px, 2.89vw, 35px)", lineHeight: "1.2"}}>
              {"Jawaab aapki kundli mein hai. Aaiye, saath mein padhte hain."}
            </p>
            <div style={{position: "relative", marginBottom: "24px"}}>
              <OfferCountdown />
            </div>
            <a href={"#plans"} style={{position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "56px", padding: "0 30px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", fontSize: "14.5px", textDecoration: "none"}}>
              {"Apna expert chuniye"}
            </a>
            <p style={{position: "relative", margin: "22px auto 0", maxWidth: "640px", fontSize: "13.5px", color: "#EADFF2"}}>
              <b style={{color: "#FFFFFF"}}>
                {"P.S."}
              </b>
              {" 45 minutes ki 1:1 call, saare areas, jitne chahe sawaal: Senior Expert Ahalya Sangeeta ke saath ₹5,100, ya Expert Maneswita ke saath ₹3,101. Aur 30 November tak Vastu consultation sirf ₹3,300 mein."}
            </p>
          </div>
        </div>
        <div className={"am-sticky"} style={{display: "none", position: "sticky", bottom: "0", zIndex: "20", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "12px 16px", background: "#2E003E", color: "#FFFFFF", boxShadow: "0 -10px 30px -10px rgba(0,0,0,0.5)"}}>
          <span style={{fontSize: "13px"}}>
            {"45 min call, "}
            <b style={{fontSize: "15px"}}>
              {"₹3,101"}
            </b>
            {" se"}
          </span>
          <a href={"#plans"} style={{display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: "700", textDecoration: "none"}}>
            {"Abhi book karein"}
          </a>
        </div>
        <footer style={{borderTop: "1px solid #E8DFD0", background: "#FFFFFF"}}>
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", fontSize: "13px", color: "#5C5470"}}>
            <span>
              {"Madad chahiye? "}
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

export default ConsultLandingPage;
