"use client";

import { useEffect, useState } from "react";
import RazorpayCheckoutButton from "@/components/RazorpayCheckoutButton";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const DEADLINE = new Date("2026-11-08T23:59:59+05:30");

function useCountdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    function tick() {
      const diff = Math.max(0, DEADLINE.getTime() - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ d, h, m, s });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function Countdown() {
  const { d, h, m, s } = useCountdown();
  const fmt = (n: number) => String(n).padStart(2, "0");
  return (
    <div style={{ display: "inline-flex", gap: "8px" }}>
      {[["Din", d], ["Ghante", h], ["Minute", m], ["Second", s]].map(([label, val]) => (
        <div key={label as string} style={{ minWidth: "58px", textAlign: "center", background: "rgba(255,255,255,0.12)", borderRadius: "10px", padding: "6px 4px" }}>
          <p style={{ margin: 0, fontFamily: "'Marcellus', serif", fontSize: "24px", lineHeight: "1.1", color: "#FFFFFF" }}>{fmt(val as number)}</p>
          <p style={{ margin: 0, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#EADFF2" }}>{label}</p>
        </div>
      ))}
    </div>
  );
}

interface BookingForm { name: string; phone: string; }

function ExpertCard({ expert, price, mrp, saving, productId, badge, badgeColor, cardStyle, checkColor }: {
  expert: string; price: string; mrp: string; saving: string; productId: string;
  badge: string; badgeColor: string; cardStyle: React.CSSProperties; checkColor: string;
}) {
  const [form, setForm] = useState<BookingForm>({ name: "", phone: "" });

  return (
    <div className="am-lift" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "22px", padding: "28px", ...cardStyle }}>
      {cardStyle.background?.toString().includes("003E") && (
        <div className="am-stars" aria-hidden="true" />
      )}
      <div style={{ position: "relative", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "22px", marginBottom: "22px" }}>
        <div style={{ minWidth: 0 }}>
          <span style={{ display: "inline-block", marginBottom: "6px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: badgeColor, background: badge, padding: "5px 12px", borderRadius: "999px" }}>{badge.includes("FCCE") ? "Senior Expert" : "Expert"}</span>
          <p style={{ margin: 0, fontFamily: "'Marcellus', serif", fontSize: "27px", lineHeight: "1.15" }}>{expert}</p>
          <p style={{ margin: "4px 0 12px", fontSize: "14px", color: cardStyle.color === "#FFFFFF" ? "#EADFF2" : "#5C5470" }}>Vedic, KP {expert === "Maneswita" ? "aur Numerology" : "Numerology aur Vastu"}</p>
          <p style={{ margin: "0 0 4px", display: "flex", alignItems: "baseline", flexWrap: "wrap" as const, gap: "4px 10px" }}>
            <span style={{ fontSize: "18px", color: cardStyle.color === "#FFFFFF" ? "#CDB8DA" : "#8E86A3", textDecoration: "line-through" }}>{mrp}</span>
            <span style={{ fontFamily: "'Marcellus', serif", fontSize: "42px", lineHeight: "1" }}>{price}</span>
          </p>
          <p style={{ margin: "0 0 6px" }}>
            <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, color: "#FFFFFF", background: "#921A11", padding: "3px 10px", borderRadius: "999px" }}>Diwali offer · {saving} ki bachat</span>
          </p>
          <p style={{ margin: 0, fontSize: "13px", color: cardStyle.color === "#FFFFFF" ? "#EADFF2" : "#5C5470" }}>45 minutes · ek call mein sab kuch</p>
        </div>
      </div>
      <div style={{ position: "relative", flex: 1, borderTop: `1px solid ${cardStyle.color === "#FFFFFF" ? "rgba(255,255,255,0.2)" : "#EFE6D8"}`, paddingTop: "16px", marginBottom: "20px" }}>
        {[
          "45 minutes ki 1:1 call",
          "Saare areas: career, shaadi, paisa, sehat aur baaki",
          "Jitne chahe utne sawaal",
          "Aapki kundli pehle se padhi hui",
          "Aapke liye saral upay",
          "Audio ya video, Hindi ya English",
        ].map((item) => (
          <p key={item} style={{ position: "relative", margin: "0 0 10px", display: "flex", gap: "10px", fontSize: "15px" }}>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={checkColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: "3px" }}><path d="M5 12l5 5 9-10" /></svg>
            {item}
          </p>
        ))}
      </div>
      <div style={{ display: "grid", gap: "12px", marginBottom: "12px" }}>
        <input
          type="text" placeholder="Aapka naam" value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          style={{ padding: "12px 16px", borderRadius: "12px", border: "1.5px solid #D9CEBD", fontSize: "15px", background: "#FFFFFF", color: "#1E1830", outline: "none" }}
        />
        <input
          type="tel" placeholder="WhatsApp number" value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
          style={{ padding: "12px 16px", borderRadius: "12px", border: "1.5px solid #D9CEBD", fontSize: "15px", background: "#FFFFFF", color: "#1E1830", outline: "none" }}
        />
      </div>
      <RazorpayCheckoutButton
        productId={productId}
        customer={{ name: form.name, phone: form.phone }}
        label={`${expert} ji se baat karein`}
        disabled={!form.name || !form.phone}
        className="am-pay-btn"
      />
    </div>
  );
}

export default function ConsultLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [vastuForm, setVastuForm] = useState({ name: "", phone: "" });

  return (
    <div style={{ fontFamily: "'Manrope', system-ui, sans-serif", color: "#1E1830", background: "#FBF7F0", fontSize: "16px", lineHeight: "1.6" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Manrope:wght@400;500;600;700&family=Tiro+Devanagari+Hindi&display=swap');
        .am-stars,.am-stars2{position:absolute;inset:0;pointer-events:none}
        .am-stars{background-image:radial-gradient(1.3px 1.3px at 18px 26px,rgba(255,255,255,.95),transparent),radial-gradient(1px 1px at 72px 140px,rgba(255,255,255,.7),transparent),radial-gradient(1.6px 1.6px at 130px 60px,rgba(255,255,255,.95),transparent);background-size:240px 240px;animation:am-twinkle 6s ease-in-out infinite}
        .am-stars2{background-image:radial-gradient(1px 1px at 50px 90px,rgba(255,255,255,.8),transparent),radial-gradient(1.4px 1.4px at 160px 30px,rgba(255,255,255,.9),transparent);background-size:370px 370px;animation:am-twinkle 9s ease-in-out infinite;animation-delay:-4s}
        @keyframes am-twinkle{0%,100%{opacity:.35}50%{opacity:1}}
        @keyframes am-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .am-marquee{display:flex;width:max-content;animation:am-marquee 40s linear infinite}
        .am-lift{transition:transform .3s ease,box-shadow .3s ease,border-color .3s ease}
        .am-lift:hover{transform:translateY(-4px);box-shadow:0 22px 44px -24px rgba(46,0,62,.45);border-color:#C9B3D6}
        .am-pay-btn{position:relative;display:flex;align-items:center;justify-content:center;min-height:56px;padding:0 30px;border-radius:999px;background:#FCCE07;color:#921A11;font-weight:700;font-size:16px;text-decoration:none;width:100%;box-sizing:border-box;border:0;cursor:pointer;font-family:inherit}
        .am-pay-btn:disabled{opacity:0.5;cursor:not-allowed}
        details summary{list-style:none;cursor:pointer}
        details summary::-webkit-details-marker{display:none}
        details[open] .faq-plus{transform:rotate(45deg)}
        @media(prefers-reduced-motion:reduce){.am-stars,.am-stars2,.am-marquee{animation:none}}
        @media(max-width:760px){.am-center-m{text-align:center}}
        input::placeholder{color:#8E86A3}
      `}</style>

      {/* Checkout header */}
      <header style={{ background: "linear-gradient(90deg, #2E003E 0%, #4A0A66 100%)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <a href="/" aria-label="Ahllya Mystic home" style={{ display: "block" }}>
            <span style={{ fontFamily: "'Marcellus', serif", fontSize: "22px", color: "#FFFFFF" }}>Ahllya Mystic</span>
          </a>
          <a href="https://wa.me/919129237566" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "42px", padding: "0 18px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.4)", color: "#FFFFFF", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2z" /></svg>
            WhatsApp karein
          </a>
        </div>
      </header>

      {/* Urgency bar */}
      <div style={{ position: "sticky", top: 0, zIndex: 30, background: "#921A11", color: "#FFFFFF", boxShadow: "0 8px 20px -12px rgba(0,0,0,0.55)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "10px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "10px 20px", textAlign: "center" }}>
          <span style={{ fontWeight: 700 }}>Diwali offer sirf 8 November tak</span>
          <Countdown />
          <a href="#plans" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "44px", padding: "0 22px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: 700, fontSize: "15px", textDecoration: "none", whiteSpace: "nowrap" }}>Book an expert</a>
        </div>
      </div>

      {/* Hero */}
      <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #1E0029 0%, #2E003E 40%, #4A0A66 75%, #6C1594 100%)", color: "#FFFFFF" }}>
        <div className="am-stars" aria-hidden="true" />
        <div className="am-stars2" aria-hidden="true" />
        <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 72px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px" }}>
          <div className="am-center-m" style={{ flex: "1.25 1 480px", minWidth: 0 }}>
            <p style={{ margin: "0 0 14px", fontSize: "18px", fontWeight: 700, color: "#FCCE07" }}>Shaadi? Career? Paisa?</p>
            <h1 style={{ margin: "0 0 18px", fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(36px, 4.4vw, 56px)", lineHeight: "1.08" }}>
              Jo bhi sawaal hai, uska seedha jawaab aapki kundli se 45 mins mein.
            </h1>
            <p style={{ margin: "0 0 26px", fontSize: "18px", color: "#EADFF2", maxWidth: "580px" }}>
              Ahllya Mystic ki expert team aapki kundli dekhkar batayegi kya hoga, kab hoga aur kya upay karein. Saare areas, jitne chahe sawaal.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 22px", marginBottom: "28px" }}>
              <a href="#plans" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "56px", padding: "0 30px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
                Haan, mujhe expert se baat karni hai
              </a>
              <span style={{ fontSize: "15px", color: "#EADFF2" }}>Sirf <b style={{ color: "#FFFFFF", fontSize: "20px" }}>₹3,101</b> se shuru</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(150px, 100%), 1fr))", gap: "10px", maxWidth: "620px" }}>
              {[["45 minutes", "ek call mein sab kuch"], ["6+ years", "experience"], ["Ghar baithe", "na travel, na line"]].map(([title, sub]) => (
                <div key={title} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "14px", padding: "12px 14px" }}>
                  <p style={{ margin: 0, fontFamily: "'Marcellus', serif", fontSize: "24px", lineHeight: "1.1" }}>{title}</p>
                  <p style={{ margin: "2px 0 0", fontSize: "13px", color: "#CDB8DA" }}>{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div style={{ overflow: "hidden", background: "linear-gradient(90deg, #B6A377 0%, #CBB154 50%, #B6A377 100%)", color: "#FFFFFF", textShadow: "0 1px 2px rgba(90,60,10,0.35)", padding: "12px 0", fontSize: "15px" }}>
        <div className="am-marquee">
          {["45 minutes ki 1:1 call", "Koi bhi sawaal, kitne bhi sawaal", "Vedic aur KP astrology", "Numerology", "Vastu", "Hindi ya English", "Audio ya video", "Darr nahi, saral upay", "6 saal ka anubhav"].concat(
            ["45 minutes ki 1:1 call", "Koi bhi sawaal, kitne bhi sawaal", "Vedic aur KP astrology", "Numerology", "Vastu", "Hindi ya English", "Audio ya video", "Darr nahi, saral upay", "6 saal ka anubhav"]
          ).map((t, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "14px", padding: "0 14px", whiteSpace: "nowrap", fontWeight: 700 }}>
              {t}<span aria-hidden="true" style={{ color: "#FFFFFF", opacity: 0.6, fontWeight: 400 }}>|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Sach bataun */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px 40px" }}>
        <div className="am-center-m" style={{ marginBottom: "30px" }}>
          <p style={{ margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 }}>Sach bataun?</p>
          <h2 style={{ margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.15" }}>Zyadatar log galat jagah se jawaab dhoondhte hain.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "16px" }}>
          {[
            "YouTube par apni rashi ka rashifal dekhte hain, jo laakhon logon ke liye ek jaisa hota hai.",
            "Kisi ne bola \"ye pooja karwa lo\", bina ye dekhe ki aapki kundli kya keh rahi hai.",
            "Mehnge stone aur upay khareed lete hain, aur phir bhi sawaal wahi ka wahi rehta hai.",
          ].map(text => (
            <div key={text} style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px 24px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <span style={{ flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "999px", background: "#F8E8E6" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#921A11" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </span>
              <p style={{ margin: 0, fontSize: "16px", lineHeight: "1.6", color: "#3A3350" }}>{text}</p>
            </div>
          ))}
        </div>
        <p style={{ margin: "28px 0 0", fontFamily: "'Marcellus', serif", fontSize: "clamp(19px, 1.8vw, 23px)", lineHeight: "1.35", color: "#2E003E" }}>
          Aapka sawaal aapki kundli se juda hai. Uska jawaab bhi aapki kundli dekhkar hi milna chahiye.
        </p>
      </div>

      {/* Purana vs Naya */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px 88px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "20px" }}>
          <div style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "28px" }}>
            <p style={{ margin: "0 0 16px", fontSize: "14px", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, color: "#5C5470" }}>Purana tareeka</p>
            {["Sabke liye ek jaisa rashifal", "Bina wajah mehngi pooja", "Upay ke liye alag se paisa", "Jawaab adhoora, confusion poora"].map(t => (
              <p key={t} style={{ margin: "0 0 12px", display: "flex", gap: "10px", fontSize: "16px", color: "#5C5470" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#921A11" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: "3px" }}><path d="M6 6l12 12M18 6L6 18" /></svg>
                {t}
              </p>
            ))}
          </div>
          <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #2E003E, #6C1594)", color: "#FFFFFF", borderRadius: "22px", padding: "28px" }}>
            <div className="am-stars" aria-hidden="true" />
            <p style={{ position: "relative", margin: "0 0 16px", fontSize: "14px", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, color: "#FCCE07" }}>Ahllya Mystic ka tareeka</p>
            {["Aapki apni kundli, 45 minutes", "Experts se seedhi baat", "Practical upay, kundli ke hisaab se", "Har sawaal ka seedha, saaf jawaab"].map(t => (
              <p key={t} style={{ position: "relative", margin: "0 0 12px", display: "flex", gap: "10px", fontSize: "16px" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FCCE07" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: "3px" }}><path d="M5 12l5 5 9-10" /></svg>
                {t}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Plans */}
      <div id="plans" style={{ background: "#F4EDE1" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <p style={{ margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 }}>Aapko kya milega</p>
            <h2 style={{ margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.15" }}>Apna expert chuniye.</h2>
            <p style={{ margin: "0 auto", fontSize: "16px", color: "#5C5470", maxWidth: "640px" }}>Dono consultation 45 minutes ke hain. Saare areas cover hote hain. Fark sirf itna hai ki aap kis expert se baat karna chahte hain.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "20px", maxWidth: "980px", margin: "0 auto" }}>
            <ExpertCard
              expert="Ahalya Sangeeta"
              price="₹5,100" mrp="₹11,111" saving="₹6,011"
              productId="consult-landing-senior"
              badge="#FCCE07" badgeColor="#921A11"
              cardStyle={{ background: "linear-gradient(160deg, #2E003E 0%, #6C1594 100%)", color: "#FFFFFF", border: "none" }}
              checkColor="#FCCE07"
            />
            <ExpertCard
              expert="Maneswita"
              price="₹3,101" mrp="₹7,201" saving="₹4,100"
              productId="consult-landing-expert"
              badge="#F3E8F7" badgeColor="#6C1594"
              cardStyle={{ background: "#FFFFFF", color: "#1E1830", border: "1px solid #E8DFD0", outline: "1px solid #EFE6D8", outlineOffset: "-9px" } as React.CSSProperties}
              checkColor="#6C1594"
            />
          </div>
          <p style={{ margin: "20px 0 0", textAlign: "center", fontSize: "15px", color: "#5C5470" }}>
            Likhit report bhi chahiye? Booking ke time koi bhi report jodiye aur us report par <b style={{ color: "#921A11" }}>10% off</b> paaiye.
          </p>
        </div>
      </div>

      {/* Topics */}
      <div style={{ background: "#FFFFFF", borderTop: "1px solid #EFE6D8", borderBottom: "1px solid #EFE6D8" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px", textAlign: "center" }}>
          <p style={{ margin: "0 0 16px", fontFamily: "'Marcellus', serif", fontSize: "24px" }}>Jo bhi mann mein hai, poochiye</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
            {["Career aur naukri", "Shaadi", "Paisa aur business", "Ghar ka Vastu", "Santaan", "Sehat", "Videsh mein settle", "Padhai", "Kundli Milan", "Dosh aur upay", "Naam numerology"].map(t => (
              <span key={t} style={{ fontSize: "15px", fontWeight: 600, color: "#3D0752", background: "#FFFFFF", border: "1px solid #E8DFD0", padding: "9px 16px", borderRadius: "999px" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div style={{ background: "#F3E8F7" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <p style={{ margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 }}>Kaise hota hai</p>
            <h2 style={{ margin: "0 0 14px", fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.15" }}>Sirf 4 aasaan steps.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "16px" }}>
            {[
              ["Expert chuniye", "Senior Expert ya Expert, jo aapko theek lage."],
              ["Payment kijiye", "Razorpay se surakshit payment: UPI, card ya net banking."],
              ["Hum call karenge", "24 ghante ke andar, aapki janm details confirm karne aur samay tay karne ke liye."],
              ["Aapka consultation", "WhatsApp par audio ya video call, 7 se 10 din mein, jab hum aapki kundli achhe se padh lein."],
            ].map(([title, text], i) => (
              <div key={title} style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "22px" }}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "999px", background: "#4A0A66", color: "#FFFFFF", fontWeight: 700, marginBottom: "14px" }}>{i + 1}</span>
                <p style={{ margin: "0 0 6px", fontFamily: "'Marcellus', serif", fontSize: "21px" }}>{title}</p>
                <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.6", color: "#5C5470" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vastu section */}
      <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(120deg, #2E003E 0%, #6C1594 100%)", color: "#FFFFFF" }}>
        <div className="am-stars" aria-hidden="true" />
        <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "88px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "28px 56px", alignItems: "center" }}>
          <div>
            <p style={{ margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: 700 }}>Vastu consultation · Diwali offer</p>
            <p style={{ margin: "0 0 12px", fontFamily: "'Marcellus', serif", fontSize: "clamp(28px, 3vw, 38px)", lineHeight: "1.2" }}>Kya aapka ghar aapke saath hai, ya aapke khilaaf?</p>
            <p style={{ margin: "0 0 18px", color: "#EADFF2", fontSize: "16px" }}>Diwali se pehle ghar ki urja theek kijiye. Floor plan ke basis par consultation aur saral upay, bina deewar tode.</p>
            <p style={{ margin: 0, display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "20px", color: "#CDB8DA", textDecoration: "line-through" }}>₹9,999</span>
              <span style={{ fontFamily: "'Marcellus', serif", fontSize: "48px", lineHeight: "1" }}>₹3,300</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#921A11", background: "#FCCE07", padding: "4px 10px", borderRadius: "999px" }}>8 November tak</span>
            </p>
          </div>
          <div style={{ display: "grid", gap: "12px" }}>
            {[
              "Apne ghar ka layout ya floor plan taiyaar kijiye",
              "Us par Vastu gridding karwaiye aur humein bhejiye",
              "Hum plan padh kar consultation dete hain, kamre ke hisaab se upay ke saath",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: "14px", padding: "12px 14px" }}>
                <span style={{ flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: 700, fontSize: "14px" }}>{i + 1}</span>
                <span style={{ fontSize: "15px", lineHeight: "1.5" }}>{t}</span>
              </div>
            ))}
            <p style={{ margin: "2px 0 6px", fontSize: "13px", color: "#CDB8DA" }}>Abhi site visit nahi hota. Consultation aapke bheje gaye grid wale floor plan par hota hai.</p>
            <div style={{ display: "grid", gap: "12px" }}>
              <input type="text" placeholder="Aapka naam" value={vastuForm.name} onChange={e => setVastuForm(f => ({ ...f, name: e.target.value }))} style={{ padding: "12px 16px", borderRadius: "12px", border: "1.5px solid rgba(255,255,255,0.3)", fontSize: "15px", background: "rgba(255,255,255,0.1)", color: "#FFFFFF", outline: "none" }} />
              <input type="tel" placeholder="WhatsApp number" value={vastuForm.phone} onChange={e => setVastuForm(f => ({ ...f, phone: e.target.value }))} style={{ padding: "12px 16px", borderRadius: "12px", border: "1.5px solid rgba(255,255,255,0.3)", fontSize: "15px", background: "rgba(255,255,255,0.1)", color: "#FFFFFF", outline: "none" }} />
              <RazorpayCheckoutButton
                productId="consult-landing-vastu"
                customer={{ name: vastuForm.name, phone: vastuForm.phone }}
                label="Vastu consultation book karein"
                disabled={!vastuForm.name || !vastuForm.phone}
                className="am-pay-btn"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Letter */}
      <div style={{ background: "#F4EDE1" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "88px 24px" }}>
          <div style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", outline: "1px solid #EFE6D8", outlineOffset: "-9px", padding: "clamp(26px, 5vw, 52px)" }}>
            <p style={{ margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700 }}>Humari taraf se ek baat</p>
            <p style={{ margin: "0 0 18px", fontFamily: "'Marcellus', serif", fontSize: "clamp(26px, 3vw, 34px)", lineHeight: "1.25" }}>&ldquo;Agar achha hai, toh aur behtar ho sakta hai. Agar bura hai, toh aasaan ho sakta hai.&rdquo;</p>
            <div style={{ display: "grid", gap: "14px", fontSize: "17px", lineHeight: "1.75", color: "#3A3350" }}>
              <p style={{ margin: 0 }}>Namaste. Hum hain Ahalya Sangeeta aur Maneswita. Pichhle 6 saal se hum Vedic aur KP jyotish, numerology aur Vastu se logon ki kundli padh rahe hain.</p>
              <p style={{ margin: 0 }}>Hum darr mein vishwas nahi karte. Hum aapki kundli dhyaan se padhte hain, imaandaari se batate hain ki usmein kya hai, aur aise upay dete hain jo aap ghar par aaraam se kar sakein.</p>
              <p style={{ margin: 0 }}>Agar koi sawaal aapko raat ko sone nahi deta, toh hum use aapke saath milkar dekhna chahenge.</p>
            </div>
            <p style={{ margin: "22px 0 22px", fontFamily: "'Marcellus', serif", fontSize: "22px", color: "#921A11" }}>Ahalya Sangeeta aur Maneswita</p>
            <a href="#plans" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "56px", padding: "0 30px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
              Mujhe apne sawaal ka jawaab chahiye
            </a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "80px 24px" }}>
        <p style={{ margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: 700, textAlign: "center" }}>Aapke sawaal</p>
        <h2 style={{ margin: "0 0 28px", fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.15", textAlign: "center" }}>Booking se pehle</h2>
        <div style={{ display: "grid", gap: "10px" }}>
          {[
            ["₹5,100 aur ₹3,101 wale consultation mein kya fark hai?", "Dono 45 minutes ke hain, saare areas cover hote hain, aur aap jitne chahe sawaal pooch sakte hain. ₹5,100 mein aapki baat Senior Expert Ahalya Sangeeta se hoti hai, aur ₹3,101 mein Expert Maneswita se."],
            ["Call kaise hoga?", "WhatsApp par audio ya video call, Hindi ya English mein. Payment ke 24 ghante ke andar hum aapko call karke details confirm karte hain aur samay tay karte hain."],
            ["Call 7 se 10 din baad kyun?", "Kyunki hum call se pehle aapki kundli achhe se padhte hain. Taaki call ka poora samay jawaab mein jaaye, calculation mein nahi."],
            ["Kya payment surakshit hai?", "Haan. Payment Razorpay se hota hai, aur aapke card ya bank ki koi detail humare paas nahi aati."],
            ["Kya main reschedule kar sakta hoon?", "Haan, ek baar free mein, agar aap call se kam se kam 24 ghante pehle bata dein. Payment refund nahi hota, sirf humari taraf se deri hone par."],
            ["Offer kab tak hai?", "Diwali offer 8 November 2026, raat 11:59 baje tak hai."],
          ].map(([q, a]) => (
            <details key={q} style={{ background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "16px", padding: "0 20px" }}>
              <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "60px", fontWeight: 700 }}>
                {q}<span className="faq-plus" aria-hidden="true" style={{ flex: "none", fontSize: "22px", color: "#921A11", transition: "transform .2s" }}>+</span>
              </summary>
              <p style={{ margin: "0 0 18px", color: "#5C5470", lineHeight: "1.65" }}>{a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 72px" }}>
        <div style={{ position: "relative", overflow: "hidden", textAlign: "center", background: "linear-gradient(120deg, #2E003E 0%, #6C1594 100%)", color: "#FFFFFF", borderRadius: "28px", padding: "clamp(32px, 5vw, 60px)" }}>
          <div className="am-stars" aria-hidden="true" />
          <p style={{ position: "relative", margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FCCE07", fontWeight: 700 }}>Diwali offer · 8 November 2026, raat 11:59 baje tak</p>
          <p style={{ position: "relative", margin: "0 0 18px", fontFamily: "'Marcellus', serif", fontSize: "clamp(28px, 3.4vw, 42px)", lineHeight: "1.2" }}>Jawaab aapki kundli mein hai. Aaiye, saath mein padhte hain.</p>
          <div style={{ position: "relative", marginBottom: "24px" }}>
            <Countdown />
          </div>
          <a href="#plans" style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "56px", padding: "0 30px", borderRadius: "999px", background: "#FCCE07", color: "#921A11", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
            Apna expert chuniye
          </a>
          <p style={{ position: "relative", margin: "22px auto 0", maxWidth: "640px", fontSize: "15px", color: "#EADFF2" }}>
            <b style={{ color: "#FFFFFF" }}>P.S.</b> 45 minutes ki 1:1 call, saare areas, jitne chahe sawaal: Senior Expert Ahalya Sangeeta ke saath ₹5,100, ya Expert Maneswita ke saath ₹3,101. Aur Diwali tak Vastu consultation sirf ₹3,300 mein.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
