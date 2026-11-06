"use client";
// Result of the free mobile number check: how the total is worked out, what it does, the combinations inside the
// number, the verdict, and the report offer. A React port of the Mobile Number artifact's result view. Everything
// shown was worked out on the server (/api/mobile-number); this file only draws it.
import React from "react";
import "./numerology.css";

const TONE = { bad: "var(--vermilion)", care: "var(--brass)", good: "var(--teal)" };
const REPORT_HREF = "/report/mobile-number";

function Section({ title, kicker, children }) {
  return (
    <section className="sec">
      <div className="sec-h"><h2>{title}</h2><span>{kicker}</span></div>
      {children}
    </section>
  );
}

function Buttons({ whatsapp }) {
  return (
    <div style={{ width: "min(300px,100%)", display: "grid", gap: "10px" }}>
      <a className="go" href={REPORT_HREF} style={{ width: "100%" }}>See report options</a>
      <a className="go alt" href={whatsapp} target="_blank" rel="noopener" style={{ width: "100%", textAlign: "center" }}>Ask on WhatsApp</a>
    </div>
  );
}

export default function MobileResult({ R }) {
  const rep = R.report;
  return (
    <div className="nmx">
      <main className="wrap gut">
        <div id="out">
          <Section title="Your total" kicker="How we got there">
            <div className="tblwrap">
              <table className="ntbl">
                <thead><tr><th>Step</th><th style={{ textAlign: "right" }}>Value</th><th>Working</th></tr></thead>
                <tbody>
                  {R.totalSection.rows.map((r) => (r.kind === "step" ? (
                    <tr key={r.title}>
                      <td className="k"><b>{r.title}</b><span>{r.text}</span></td>
                      <td className="big">{r.value}</td>
                      <td className="w">{r.working}</td>
                    </tr>
                  ) : (
                    <tr key={r.title}>
                      <td className="k"><b>{r.title}</b><span>{r.text}</span></td>
                      <td><span className={"tag " + r.tag} style={{ whiteSpace: "nowrap" }}>{r.label}</span></td>
                      <td />
                    </tr>
                  )))}
                </tbody>
              </table>
            </div>
            <p className="cnote">{R.totalSection.note}</p>
          </Section>

          <Section title="What this number does to you" kicker="Health, career, love and money">
            <div className="tblwrap">
              <table className="ntbl">
                <thead><tr><th>Area</th><th>What to expect</th></tr></thead>
                <tbody>{R.effects.rows.map(([area, text]) => <tr key={area}><td className="k"><b>{area}</b></td><td>{text}</td></tr>)}</tbody>
              </table>
            </div>
            <p className="cnote">{R.effects.frame}</p>
          </Section>

          <Section title="Inside your number" kicker="The combinations">
            <div className="art"><p>{R.inside.text}</p></div>
            {R.inside.note ? <p className="cnote">The full report names each combination and what it means for you.</p> : null}
          </Section>

          <Section title="Final verdict" kicker={R.number}>
            <div className="card verdict">
              <div className="vscore" style={{ fontSize: 42, color: TONE[R.verdict.tone] }}>{R.verdict.action}</div>
              <div className="vtext"><h3>{R.verdict.title}</h3><p>{R.verdict.text}</p></div>
            </div>
            <ul className="whylist" style={{ margin: "16px 4px 0", paddingLeft: 20, lineHeight: 1.7 }}>
              {R.verdict.why.map((w, i) => <li key={i}>{w}</li>)}
            </ul>
          </Section>

          <Section title="Your report" kicker={rep.kicker}>
            <div className="card offer">
              <div><h3>{rep.head}</h3><p style={{ margin: 0 }}>{rep.lead}</p></div>
              <ul>{rep.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            </div>
            {rep.gate ? (
              <div className="locked" style={{ marginTop: 16 }}>
                <div className="blurred" aria-hidden="true">
                  <div className="tblwrap">
                    <table className="ntbl opts">
                      <thead><tr><th>Number ending</th><th>Total</th><th>Bad combinations</th></tr></thead>
                      <tbody>
                        {rep.gate.fresh
                          ? [0, 1, 2, 3].map((i) => <tr key={i}><td className="nm">{"••••••••••"} <s>designed for you</s></td><td className="w">{"• → •"}</td><td className="sc">{"•"}</td></tr>)
                          : rep.gate.rows.map((o, i) => (
                            <tr key={i}>
                              <td className="nm">{"•••••••"} {o.ending}<s>{o.changed}</s></td>
                              <td className="w">{o.sum} → {o.total}</td>
                              <td className="sc">{o.bad}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="gate"><b>{rep.gate.title}</b><p>{rep.gate.sub}</p><Buttons whatsapp={rep.whatsapp} /></div>
              </div>
            ) : (
              <div style={{ marginTop: 16, display: "flex", justifyContent: "center" }}><Buttons whatsapp={rep.whatsapp} /></div>
            )}
          </Section>
        </div>
      </main>
    </div>
  );
}
