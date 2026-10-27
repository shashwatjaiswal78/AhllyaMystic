"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import RazorpayCheckoutButton from "@/components/RazorpayCheckoutButton";

type Expert = 'man' | 'san';
type Plan = 'one' | 'two' | 'three' | 'all';
type Mode = 'audio' | 'video';
type Lang = 'Hindi' | 'English';
type Slot = 'm' | 'a' | 'e';

const PRICE: Record<Expert, Record<Plan, number>> = {
  man: { one: 2301, two: 4101, three: 5001, all: 7201 },
  san: { one: 4001, two: 6301, three: 7601, all: 11111 },
};
const LEN: Record<Plan, string> = { one: '20 min', two: '30 min', three: '45 min', all: '60 min' };
const LIMIT: Record<Plan, number> = { one: 1, two: 2, three: 3, all: 6 };
const SNAME: Record<Plan, string> = { one: 'One area', two: 'Two areas', three: 'Three areas', all: 'Complete' };

const EXPERTS = [
  { id: 'man' as Expert, level: 'Expert', name: 'Maneswita', role: 'Vedic, KP and Numerology' },
  { id: 'san' as Expert, level: 'Senior Expert', name: 'Ahalya Sangeeta', role: 'Vedic, KP, Numerology and Vastu' },
];
const AREAS = [
  { id: 'love', name: 'Love and marriage', note: 'Compatibility, marriage timing', icon: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z' },
  { id: 'career', name: 'Career and business', note: 'Job, business, right time to switch', icon: 'M4 8h16v11H4zM9 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M4 13h16' },
  { id: 'money', name: 'Money and growth', note: 'Income, savings, financial blocks', icon: 'M4 19h16M6 15l4-4 3 3 5-6M15 8h3v3' },
  { id: 'health', name: 'Health and wellbeing', note: 'Phases that need extra care', icon: 'M3 12h4l2-5 4 10 2-5h6' },
  { id: 'study', name: 'Education', note: 'Stream, exams, studying abroad', icon: 'M3 9l9-4 9 4-9 4-9-4zM7 11v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4' },
  { id: 'family', name: 'Child and family', note: 'Family planning, child\'s nature', icon: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M17 11a2.5 2.5 0 1 0 0-5M21 20a5 5 0 0 0-4-4.9' },
];
const SLOTS: [Slot, string, string][] = [['m', 'Morning', '11 am to 1 pm'], ['a', 'Afternoon', '1 pm to 4 pm'], ['e', 'Evening', '4 pm to 7 pm']];
const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MO = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function rs(x: number) { return '₹' + x.toLocaleString('en-IN'); }

function getProductId(expert: Expert, plan: Plan, report: boolean): string {
  const base = expert === 'san'
    ? `consult-senior-${plan === 'all' ? 'complete' : plan === 'one' ? 'one-area' : plan === 'two' ? 'two-areas' : 'three-areas'}`
    : `consult-${plan === 'all' ? 'complete' : plan === 'one' ? 'one-area' : plan === 'two' ? 'two-areas' : 'three-areas'}`;
  return report ? `${base}+report` : base;
}

export default function ConsultPage() {
  const [expert, setExpert] = useState<Expert>('man');
  const [plan, setPlan] = useState<Plan>('one');
  const [mode, setMode] = useState<Mode>('audio');
  const [areas, setAreas] = useState<string[]>(['career']);
  const [lang, setLang] = useState<Lang>('Hindi');
  const [question, setQuestion] = useState('');
  const [report, setReport] = useState(false);
  const [partner, setPartner] = useState(false);

  // Personal details
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [dob, setDob] = useState('');
  const [tob, setTob] = useState('');
  const [pob, setPob] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Days/slots
  const [days, setDays] = useState<string[]>([]);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [bookingDays, setBookingDays] = useState<{ key: string; wd: string; day: number; mon: string; label: string }[]>([]);

  useEffect(() => {
    const base = new Date(); base.setHours(12, 0, 0, 0);
    setBookingDays(Array.from({ length: 8 }, (_, i) => {
      const dt = new Date(base.getTime() + (i + 7) * 864e5);
      return { key: dt.toISOString().slice(0, 10), wd: WD[dt.getDay()], day: dt.getDate(), mon: MO[dt.getMonth()], label: `${WD[dt.getDay()]} ${dt.getDate()} ${MO[dt.getMonth()]}` };
    }));
  }, []);

  const limit = LIMIT[plan];
  const sessPrice = PRICE[expert][plan];
  const reportDiscount = report ? Math.round(999 * 0.1) : 0;
  const subtotal = sessPrice + (report ? 999 : 0);
  const total = subtotal - reportDiscount;
  const productId = getProductId(expert, plan, report);
  const showPartner = areas.includes('love');

  const toggleArea = (id: string) => {
    setAreas(prev => {
      const at = prev.indexOf(id);
      if (at >= 0) return prev.filter(x => x !== id);
      if (prev.length >= limit) return limit === 1 ? [id] : [...prev.slice(1), id];
      return [...prev, id];
    });
  };

  const toggleDay = (k: string) => {
    setDays(prev => {
      const at = prev.indexOf(k);
      if (at >= 0) return prev.filter(x => x !== k);
      if (prev.length >= 3) return [...prev.slice(1), k];
      return [...prev, k];
    });
  };

  const toggleSlot = (k: Slot) => setSlots(prev => prev.includes(k) ? prev.filter(x => x !== k) : [...prev, k]);

  const formFilled = !!fname && !!phone && !!dob && !!pob;
  const areaHint = plan === 'one' ? 'Pick one area to focus on.' : plan === 'all' ? 'Every area is covered. Tap the ones you most want to talk about.' : `Pick ${limit === 2 ? 'two' : 'three'} areas (${areas.length} of ${limit} chosen).`;
  const areaList = areas.length ? areas.map(id => AREAS.find(a => a.id === id)?.name ?? id).join(', ') : 'Not chosen yet';
  const dayList = bookingDays.filter(d => days.includes(d.key)).map(d => d.label).join(', ') || 'Not chosen yet';
  const slotList = slots.length ? SLOTS.filter(s => slots.includes(s[0])).map(s => s[1]).join(', ') : 'Any time';

  const Step = ({ n, label }: { n: number; label: string }) => (
    <div className="flex items-center gap-3 mb-4.5">
      <span className="flex-none flex items-center justify-center w-[34px] h-[34px] rounded-full text-white font-serif-display text-[17px]" style={{ background: 'linear-gradient(135deg, #2E003E, #6C1594)' }}>{n}</span>
      <h2 className="m-0 font-serif-display font-normal text-[clamp(22px,2.4vw,27px)]">{label}</h2>
    </div>
  );

  const card = 'bg-white border border-[#E8DFD0] rounded-[22px] p-[clamp(22px,3vw,32px)] outline outline-1 outline-[#EFE6D8] outline-offset-[-9px]';
  const pill = (sel: boolean) => `min-h-[44px] px-5 rounded-full border cursor-pointer font-inherit text-[15px] ${sel ? 'border-[1.5px] border-am-purple bg-[#F3E8F7] text-am-purple font-bold' : 'border-[#D9CEBD] bg-white text-am-ink font-semibold'}`;
  const inp = 'min-h-[48px] px-3.5 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9]';

  return (
    <>
      <Nav />
      <div className="bg-[#FBF7F0]">
        <div className="max-w-[1200px] mx-auto px-6 py-7">
          <a href="/" className="inline-flex items-center gap-1.5 text-[15px] font-semibold no-underline mb-5.5 text-am-ink">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
            Back to home
          </a>
          <div className="flex flex-wrap items-center justify-between gap-5 mb-7">
            <div>
              <p className="m-0 mb-2 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">One-on-one consultation</p>
              <h1 className="m-0 font-serif-display font-normal text-[clamp(32px,3.8vw,46px)] leading-[1.12]">Book a consultation</h1>
            </div>
            <div className="flex items-center gap-3.5 bg-white border border-[#E8DFD0] rounded-full py-1.5 pl-1.5 pr-4.5">
              <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-am-plum-deep to-am-purple flex-none" aria-hidden="true" />
              <div>
                <p className="m-0 font-bold text-[15px]">You will speak with our experts</p>
                <p className="m-0 text-[13px] text-am-ink-soft">Maneswita and Ahalya Sangeeta · Astrology, Numerology and Vastu</p>
              </div>
            </div>
          </div>
          <div className="grid gap-7 items-start am-book" style={{ gridTemplateColumns: 'minmax(0, 1.55fr) minmax(0, 1fr)' }}>
            <div className="grid gap-5">
              {/* Step 1: Expert + Plan */}
              <section className={card}>
                <Step n={1} label="Choose your expert and plan" />
                <p className="m-0 mb-2.5 text-[14px] font-semibold">Who would you like to speak with?</p>
                <div className="grid gap-3 mb-5.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))' }}>
                  {EXPERTS.map(e => (
                    <button key={e.id} type="button" role="radio" aria-checked={expert === e.id} onClick={() => setExpert(e.id)}
                      className={`flex items-center gap-4 text-left p-[16px_18px] rounded-[18px] cursor-pointer font-inherit border ${expert === e.id ? 'border-[2px] border-am-purple bg-[#F3E8F7]' : 'border border-[#E8DFD0] bg-white'}`}>
                      <div className="flex-none w-[76px] h-[76px] rounded-full bg-gradient-to-br from-am-plum-deep to-am-purple" aria-hidden="true" />
                      <span className="grid gap-[3px]">
                        <span className="text-[11.5px] font-bold tracking-[0.08em] uppercase text-am-maroon">{e.level}</span>
                        <span className="font-serif-display text-[22px] text-am-plum-deep leading-[1.15]">{e.name}</span>
                        <span className="text-[13.5px] text-am-ink-soft">{e.role}</span>
                        <span className="text-[13px] font-bold text-am-purple">From {rs(PRICE[e.id].one)}</span>
                      </span>
                    </button>
                  ))}
                </div>
                <p className="m-0 mb-2.5 text-[14px] font-semibold">How much would you like to cover?</p>
                <div className="grid gap-3 mb-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))' }}>
                  {(['one', 'two', 'three', 'all'] as Plan[]).map(p => {
                    const descs: Record<Plan, string> = {
                      one: 'A focused session on the area that matters most right now.',
                      two: 'Two questions that sit side by side, like career and money.',
                      three: 'A broader reading that connects the different parts of your life, with dasha timing.',
                      all: 'Every area of your life and any number of questions.',
                    };
                    return (
                      <button key={p} type="button" role="radio" aria-checked={plan === p}
                        onClick={() => { setPlan(p); setAreas(prev => prev.slice(0, LIMIT[p])); }}
                        className={`grid gap-1.5 items-start text-left p-[18px_20px] rounded-[18px] cursor-pointer font-inherit border ${plan === p ? 'border-[2px] border-am-purple bg-[#F3E8F7]' : 'border border-[#E8DFD0] bg-white'}`}>
                        <span className="flex justify-between items-baseline gap-2.5">
                          <span className={`font-serif-display text-[22px] ${plan === p ? 'text-am-plum-deep' : 'text-am-plum-deep'}`}>{SNAME[p]}</span>
                          <span className="font-serif-display text-[23px]">{rs(PRICE[expert][p])}</span>
                        </span>
                        <span className={`text-[14px] ${plan === p ? 'text-[#3D0752]' : 'text-am-ink-soft'}`}>{descs[p]}</span>
                        <span className={`text-[13px] font-bold ${plan === p ? 'text-am-purple' : 'text-am-ink-soft'}`}>{LEN[p]} call</span>
                      </button>
                    );
                  })}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[14px] font-semibold">How would you like to talk?</span>
                  <div className="flex gap-2">
                    {(['audio', 'video'] as Mode[]).map(m => (
                      <button key={m} type="button" role="radio" aria-checked={mode === m} onClick={() => setMode(m)} className={pill(mode === m)}>{m === 'audio' ? 'Audio call' : 'Video call'}</button>
                    ))}
                  </div>
                  <span className="text-[13px] text-am-ink-soft">Same price for both.</span>
                </div>
              </section>

              {/* Step 2: Areas */}
              <section className={card}>
                <Step n={2} label="Choose your areas" />
                <p className="m-0 -mt-2 mb-4.5 text-[14px] text-am-ink-soft">{areaHint}</p>
                <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(230px, 100%), 1fr))' }}>
                  {AREAS.map(a => {
                    const sel = areas.includes(a.id);
                    return (
                      <button key={a.id} type="button" role="checkbox" aria-checked={sel} onClick={() => toggleArea(a.id)}
                        className={`flex items-center gap-3 text-left p-3.5 rounded-[14px] cursor-pointer font-inherit border ${sel ? 'border-[1.5px] border-am-purple bg-[#F3E8F7]' : 'border border-[#E8DFD0] bg-white'}`}>
                        <span className={`flex-none flex items-center justify-center w-10 h-10 rounded-full ${sel ? 'bg-am-purple text-white' : 'bg-am-gold text-am-maroon'}`}>
                          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d={a.icon} /></svg>
                        </span>
                        <span>
                          <span className={`block font-bold ${sel ? 'text-am-plum-deep' : 'text-am-ink'}`}>{a.name}</span>
                          <span className={`block text-[13px] ${sel ? 'text-[#3D0752]' : 'text-am-ink-soft'}`}>{a.note}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
                <label className="grid gap-1.5 text-[14px] font-semibold mt-4.5">
                  What would you like to ask? <span className="font-normal text-am-ink-soft">(optional)</span>
                  <textarea rows={3} placeholder="Share your main questions so we can study your chart for them before the call." value={question} onChange={e => setQuestion(e.target.value)}
                    className="p-3 border border-[#D9CEBD] rounded-xl font-normal text-base bg-[#FFFDF9] resize-y" />
                </label>
              </section>

              {/* Step 3: Birth details */}
              <section className={card}>
                <Step n={3} label="Your birth details" />
                <p className="m-0 -mt-2 mb-4.5 text-[14px] text-am-ink-soft">We study your chart before the call, so please enter these exactly as on your birth record.</p>
                <div className="grid gap-4">
                  <div className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))' }}>
                    <label className="grid gap-1.5 text-[14px] font-semibold">First name<input type="text" placeholder="First name" value={fname} onChange={e => setFname(e.target.value)} className={inp} /></label>
                    <label className="grid gap-1.5 text-[14px] font-semibold">Last name<input type="text" placeholder="Last name" value={lname} onChange={e => setLname(e.target.value)} className={inp} /></label>
                  </div>
                  <div className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))' }}>
                    <label className="grid gap-1.5 text-[14px] font-semibold">Date of birth<input type="date" required value={dob} onChange={e => setDob(e.target.value)} className={inp} /></label>
                    <label className="grid gap-1.5 text-[14px] font-semibold">Time of birth<input type="time" value={tob} onChange={e => setTob(e.target.value)} className={inp} /></label>
                  </div>
                  <label className="grid gap-1.5 text-[14px] font-semibold">Place of birth<input type="text" placeholder="Town or city" value={pob} onChange={e => setPob(e.target.value)} className={inp} /></label>
                  <div className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))' }}>
                    <label className="grid gap-1.5 text-[14px] font-semibold">WhatsApp number<input type="tel" placeholder="+91" value={phone} onChange={e => setPhone(e.target.value)} className={inp} /></label>
                    <label className="grid gap-1.5 text-[14px] font-semibold">Email<input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} className={inp} /></label>
                  </div>
                  <div className="grid gap-2">
                    <span className="text-[14px] font-semibold">Language for the call</span>
                    <div className="flex gap-2">
                      {(['Hindi', 'English'] as Lang[]).map(l => (
                        <button key={l} type="button" role="radio" aria-checked={lang === l} onClick={() => setLang(l)} className={pill(lang === l)}>{l}</button>
                      ))}
                    </div>
                  </div>
                  {showPartner && (
                    <div className="border-t border-[#EFE6D8] pt-4 grid gap-3.5">
                      {!partner ? (
                        <>
                          <button type="button" onClick={() => setPartner(true)}
                            className="justify-self-start inline-flex items-center gap-2 min-h-[44px] px-4.5 rounded-full border-[1.5px] border-dashed border-am-purple bg-white text-am-purple font-bold cursor-pointer font-inherit">
                            + Add your partner's birth details (optional)
                          </button>
                          <p className="m-0 text-[13px] text-am-ink-soft">For love and marriage questions, your partner's chart lets us check compatibility too.</p>
                        </>
                      ) : (
                        <div className="grid gap-3.5">
                          <div className="flex justify-between items-center gap-3">
                            <span className="font-serif-display text-[20px]">Partner's birth details</span>
                            <button type="button" onClick={() => setPartner(false)} className="border-0 bg-none text-am-maroon font-bold cursor-pointer font-inherit">Remove</button>
                          </div>
                          <div className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))' }}>
                            <label className="grid gap-1.5 text-[14px] font-semibold">First name<input type="text" placeholder="First name" className={inp} /></label>
                            <label className="grid gap-1.5 text-[14px] font-semibold">Last name<input type="text" placeholder="Last name" className={inp} /></label>
                          </div>
                          <div className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))' }}>
                            <label className="grid gap-1.5 text-[14px] font-semibold">Date of birth<input type="date" className={inp} /></label>
                            <label className="grid gap-1.5 text-[14px] font-semibold">Time of birth<input type="time" className={inp} /></label>
                          </div>
                          <label className="grid gap-1.5 text-[14px] font-semibold">Place of birth<input type="text" placeholder="Town or city" className={inp} /></label>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </section>

              {/* Step 4: Preferred time */}
              <section className={card}>
                <Step n={4} label="Your preferred time" />
                <p className="m-0 -mt-2 mb-4.5 text-[14px] text-am-ink-soft">Consultations take place 7 to 10 days after booking, so we can study your chart first. Pick up to three days and the times that suit you.</p>
                <p className="m-0 mb-2.5 text-[14px] font-semibold">Days <span className="font-normal text-am-ink-soft">({days.length} of 3 chosen)</span></p>
                <div className="flex gap-2 overflow-x-auto pb-1.5 mb-4.5">
                  {bookingDays.map(d => {
                    const sel = days.includes(d.key);
                    return (
                      <button key={d.key} type="button" aria-pressed={sel} onClick={() => toggleDay(d.key)}
                        className={`flex-none w-[74px] py-2.5 rounded-[14px] cursor-pointer font-inherit text-center border ${sel ? 'border-[1.5px] border-am-purple bg-am-purple text-white' : 'border border-[#E8DFD0] bg-white text-am-ink'}`}>
                        <span className={`block text-[12px] font-bold uppercase tracking-[0.06em] ${sel ? 'text-white' : 'text-am-ink-soft'}`}>{d.wd}</span>
                        <span className="block font-serif-display text-[24px] leading-[1.2]">{d.day}</span>
                        <span className={`block text-[12px] ${sel ? 'text-white' : 'text-am-ink-soft'}`}>{d.mon}</span>
                      </button>
                    );
                  })}
                </div>
                <p className="m-0 mb-2.5 text-[14px] font-semibold">Times</p>
                <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))' }}>
                  {SLOTS.map(([k, name, range]) => {
                    const sel = slots.includes(k);
                    return (
                      <button key={k} type="button" aria-pressed={sel} onClick={() => toggleSlot(k)}
                        className={`p-[12px_14px] rounded-[14px] cursor-pointer font-inherit text-left border ${sel ? 'border-[1.5px] border-am-purple bg-[#F3E8F7]' : 'border border-[#E8DFD0] bg-white'}`}>
                        <span className={`block font-bold ${sel ? 'text-am-plum-deep' : 'text-am-ink'}`}>{name}</span>
                        <span className={`block text-[13px] ${sel ? 'text-[#3D0752]' : 'text-am-ink-soft'}`}>{range}</span>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Add report upsell */}
              <section className={card}>
                <div className="flex justify-between items-baseline gap-3 flex-wrap mb-1.5">
                  <span className="font-serif-display text-[22px]">Add a written report</span>
                  <span className="text-[12px] font-bold tracking-[0.06em] text-white bg-am-maroon px-2.5 py-1 rounded-full uppercase">10% OFF THE REPORT</span>
                </div>
                <p className="m-0 mb-3.5 text-[14px] text-am-ink-soft">Add the Personalised Kundli Report along with your consultation and get 10% off the report. Your report arrives in 5 to 7 working days.</p>
                {!report ? (
                  <button type="button" role="checkbox" aria-checked={false} onClick={() => setReport(true)}
                    className="flex items-center gap-3.5 w-full text-left p-[16px_18px] rounded-2xl border-[1.5px] border-dashed border-[#C9B3D6] bg-white cursor-pointer font-inherit">
                    <span className="flex-none w-5.5 h-5.5 border-[1.5px] border-[#B9AEC6] rounded-[6px] box-border" />
                    <span className="flex-1">
                      <span className="block font-bold text-am-ink">Add the Personalised Kundli Report</span>
                      <span className="block text-[14px] text-am-ink-soft"><span className="line-through">₹1,998</span> ₹999, then 10% off with your consultation</span>
                    </span>
                  </button>
                ) : (
                  <button type="button" role="checkbox" aria-checked={true} onClick={() => setReport(false)}
                    className="flex items-center gap-3.5 w-full text-left p-[16px_18px] rounded-2xl border-[1.5px] border-am-purple bg-[#F3E8F7] cursor-pointer font-inherit">
                    <span className="flex-none flex items-center justify-center w-5.5 h-5.5 rounded-[6px] bg-am-purple text-white">
                      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg>
                    </span>
                    <span className="flex-1">
                      <span className="block font-bold text-am-plum-deep">Report added: 10% off the report</span>
                      <span className="block text-[14px] text-[#3D0752]">Includes two questions of your choice, which we will ask you about on WhatsApp.</span>
                    </span>
                  </button>
                )}
              </section>
            </div>

            {/* Booking summary */}
            <aside className="am-book-aside sticky top-6 grid gap-3.5">
              <div className={card}>
                <p className="m-0 mb-4 font-serif-display text-[23px]">Your booking</p>
                <div className="flex justify-between gap-3 text-[15px] mb-1"><span className="font-bold">{SNAME[plan]} consultation</span><span>{rs(sessPrice)}</span></div>
                <p className="m-0 mb-3.5 text-[13px] text-am-ink-soft">With {expert === 'san' ? 'Ahalya Sangeeta' : 'Maneswita'} · {mode === 'audio' ? 'Audio call' : 'Video call'} · {LEN[plan]}</p>
                <div className="grid gap-1.5 p-[12px_14px] rounded-xl bg-[#FBF7F0] mb-3.5 text-[14px]">
                  <p className="m-0 flex justify-between gap-2.5"><span className="text-am-ink-soft">Areas</span><span className="font-semibold text-right">{areaList}</span></p>
                  <p className="m-0 flex justify-between gap-2.5"><span className="text-am-ink-soft">Preferred days</span><span className="font-semibold text-right">{dayList}</span></p>
                  <p className="m-0 flex justify-between gap-2.5"><span className="text-am-ink-soft">Times</span><span className="font-semibold text-right">{slotList}</span></p>
                </div>
                {report && (
                  <>
                    <div className="flex justify-between gap-3 text-[15px] mb-2.5"><span>Personalised Kundli Report</span><span>₹999</span></div>
                    <div className="flex justify-between gap-3 text-[15px] text-am-maroon font-bold mb-3.5"><span>Report discount (10%)</span><span>−{rs(reportDiscount)}</span></div>
                  </>
                )}
                <div className="h-px bg-[#EFE6D8] mb-3.5" />
                <div className="flex justify-between items-baseline gap-3 mb-5">
                  <span className="font-bold">Total</span>
                  <span className="font-serif-display text-[32px]">{rs(total)}</span>
                </div>
                <RazorpayCheckoutButton
                  productId={productId}
                  customer={{ name: `${fname} ${lname}`.trim(), phone, email }}
                  label={`Pay ${rs(total)} securely`}
                  disabled={!formFilled}
                  className="w-full flex items-center justify-center gap-2 min-h-[54px] rounded-full bg-am-gold text-am-maroon font-bold text-base disabled:opacity-60 disabled:cursor-not-allowed"
                />
                <p className="m-0 mt-3 text-center text-[13px] text-am-ink-soft">UPI, cards and net banking via Razorpay</p>
                <p className="m-0 mt-1.5 text-center text-[10.5px] text-am-ink-faint">Payments are non-refundable, except for delays from our side.</p>
              </div>
              <div className="bg-[#F3E8F7] rounded-[18px] p-[18px_20px] grid gap-2.5 text-[14px] text-[#3D0752]">
                {[
                  'We call you within 24 hours of payment to confirm your name, birth details and slot.',
                  'Your chart is studied before the call.',
                  'Need a different time? Just message us on WhatsApp.',
                ].map(t => (
                  <p key={t} className="m-0 flex gap-2.5">
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6C1594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-none mt-0.5"><path d="M5 12l5 5 9-10" /></svg>
                    {t}
                  </p>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Checkout footer */}
      <footer className="border-t border-[#E8DFD0] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-[14px] text-am-ink-soft">
          <span>Need help? <a href="https://wa.me/919129237566" className="font-bold text-am-ink no-underline">WhatsApp us at +91 91292 37566</a></span>
          <span className="flex flex-wrap gap-4">
            <a href="/policies/privacy" className="text-am-ink-soft no-underline">Privacy policy</a>
            <a href="/policies/refunds" className="text-am-ink-soft no-underline">Refund policy</a>
            <a href="/policies/delivery" className="text-am-ink-soft no-underline">Delivery policy</a>
            <a href="/policies/terms" className="text-am-ink-soft no-underline">Terms</a>
            <span>© 2026 Ahllya Mystic</span>
          </span>
        </div>
      </footer>
    </>
  );
}
