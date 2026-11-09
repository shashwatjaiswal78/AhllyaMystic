"use client";
// Result of the free name number check: the name vibration score, core numbers, Lo Shu grid, how the name adds up,
// the corrected spellings (locked) and the report offer. A React port of the Name Numerology artifact's result view.
// Everything shown was worked out on the server (/api/name-number); this file only draws it.
import React from "react";
import "./numerology.css";

const TONE = { good: "var(--teal)", care: "var(--brass)", bad: "var(--vermilion)" };
const REPORT_HREF = "/report/name-numerology";

function Section({ title, kicker, children }) {
  return (
    <section className="sec">
      <div className="sec-h"><h2>{title}</h2><span>{kicker}</span></div>
      {children}
    </section>
  );
}

function NumberTable({ rows }) {
  return (
    <div className="tblwrap">
      <table className="ntbl">
        <thead><tr><th>Number</th><th style={{ textAlign: "right" }}>Value</th><th>Working</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.title}>
              <td className="k"><b>{r.title}</b><span>{r.text}</span></td>
              <td className="big">{r.value}</td>
              <td className="w">{r.working}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Buttons({ whatsapp }) {
  return (
    <div style={{ width: "min(300px,100%)", display: "grid", gap: "10px", marginTop: 6 }}>
      <a className="go" href={REPORT_HREF} style={{ width: "100%" }}>See report options</a>
      <a className="go alt" href={whatsapp} target="_blank" rel="noopener" style={{ width: "100%", textAlign: "center" }}>Ask on WhatsApp</a>
    </div>
  );
}

export default function NameResult({ R }) {
  const v = R.verdict, col = TONE[v.tone], g = R.loShu, nc = R.nameCalc, fix = R.fix, rp = R.core.ruling;
  return (
    <div className="nmx">
      <main className="wrap gut">
        <div id="out">
          <Section title="Name vibration score" kicker="The verdict">
            <div className="card verdict">
              <div className="vscore" style={{ color: col }}>{v.score}<small>/100</small></div>
              <div className="vtext"><h3>{v.headline}</h3><p>{v.sub}</p></div>
            </div>
            <div className="meter"><i style={{ width: v.score + "%", background: col }} /></div>
            <div className="mscale"><span>Conflict</span><span>Weak</span><span>Workable</span><span>Supportive</span></div>
            <div style={{ marginTop: 22 }}>
              <div className="tblwrap">
                <table className="ntbl">
                  <thead><tr><th>How the score is made</th><th>Reading</th><th>Points</th></tr></thead>
                  <tbody>
                    {v.breakdown.map((b) => (
                      <tr key={b.label}>
                        <td>{b.label}</td>
                        <td><span className={"tag " + b.detail}>{b.detail}</span></td>
                        <td className="w" style={{ textAlign: "right" }}>{b.points} / {b.max}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {v.compoundNote ? <p className="cnote"><b>Compound {v.compound}.</b> {v.compoundNote}</p> : null}
          </Section>

          <Section title="Core numbers" kicker={R.core.kicker}>
            <NumberTable rows={R.core.rows} />
            <p style={{ margin: "16px 2px 0", color: "var(--ink-2)" }}>
              <b>Ruling planet:</b> {rp.planet} ({rp.sanskrit}) · {rp.day} · {rp.colors.join(", ")} · {rp.gemstone}
            </p>
          </Section>

          <Section title="Lo Shu grid" kicker="From the full birth date">
            <div className="twocol">
              <div>
                <div className="loshu">
                  {g.layout.map((row) => row.map((n) => {
                    const c = g.counts[n];
                    const cls = c === 0 ? "empty" : c >= 3 ? "rep" : "";
                    const txt = c === 0 ? String(n) : String(n).repeat(Math.min(c, 4));
                    const fs = c <= 1 ? 21 : c === 2 ? 17.5 : c === 3 ? 14.5 : 12;
                    return <div key={n} className={"cell " + cls} style={{ fontSize: fs }}>{txt}</div>;
                  }))}
                </div>
              </div>
              <div className="art">
                {g.complete ? <p>A complete grid. Every number from 1 to 9 appears at least once, which is uncommon.</p> : (
                  <><h3>Missing numbers</h3><ul>{g.missing.map((x) => <li key={x.n}><b>{x.n}.</b> {x.text}</li>)}</ul></>
                )}
                {g.repeated.length ? <><h3>Repeated numbers</h3><ul>{g.repeated.map((x) => <li key={x.n}><b>{x.n} repeats.</b> {x.text}</li>)}</ul></> : null}
                {g.planes.length ? <><h3>Planes and yogs present</h3><ul>{g.planes.map((x) => <li key={x.label}><b>{x.label}.</b> {x.on}</li>)}</ul></> : null}
              </div>
            </div>
          </Section>

          <Section title="How the name adds up" kicker="Chaldean letter values">
            <div className="letters">
              {nc.parts.map((p, i) => (
                <div className="lword" key={i}>
                  <div className="lbox">{p.letters.map((l, j) => <div className="let" key={j}><b>{l.ch}</b><i>{l.value}</i></div>)}</div>
                  <span className="lsum">= {p.total}</span>
                </div>
              ))}
            </div>
            <NumberTable rows={nc.rows} />
            <div className="cols2" style={{ marginTop: 36 }}>
              <div className="art"><h3>Strengths</h3><ul>{nc.strengths.map((s) => <li key={s}>{s}</li>)}</ul></div>
              <div className="art"><h3>Challenges</h3><ul>{nc.challenges.map((s) => <li key={s}>{s}</li>)}</ul></div>
            </div>
            <p className="cnote"><b>Suited to:</b> {nc.careers}</p>
          </Section>

          {fix.possible ? (
            <Section title="Corrected spellings" kicker="Locked">
              <div className="locked">
                <div className="blurred" aria-hidden="true">
                  <p className="cnote" style={{ margin: "0 0 14px" }}>
                    Searched {fix.searched} natural spellings of your {fix.scope}. These land on a total your chart accepts ({fix.allowed}) and avoid every warned compound.
                  </p>
                  <div className="tblwrap">
                    <table className="ntbl opts">
                      <thead><tr><th>Corrected spelling</th><th>Total</th><th>Score</th></tr></thead>
                      <tbody>
                        {fix.rows.map((o, i) => (
                          <tr key={i}>
                            <td className="nm">{o.mask}<s>was {fix.was}</s></td>
                            <td className="w">{o.compound} → {o.nameNumber}</td>
                            <td className="sc">{o.score}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="gate"><b>{fix.count} corrected spellings found</b><p>Your corrected names are sent on WhatsApp after you order.</p><Buttons whatsapp={R.offer.whatsapp} /></div>
              </div>
            </Section>
          ) : (
            <Section title="Name correction" kicker="Spelling options">
              <div className="art"><p>{fix.reason}</p><p>Name totals that suit your chart: {fix.allowed}</p></div>
            </Section>
          )}

          <Section title="Your report" kicker="Full name correction">
            <div className="card offer">
              <div>
                <h3>Full Name Correction Report</h3>
                <div className="btnrow">
                  <a className="go" href={REPORT_HREF}>See report options</a>
                  <a className="go alt" href={R.offer.whatsapp} target="_blank" rel="noopener">Ask on WhatsApp</a>
                </div>
              </div>
              <ul>{R.offer.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            </div>
          </Section>
          <Section title={R.offer.remediesTitle} kicker="Ruling planet of your Moolank">
            <div className="art"><ul>{R.offer.remedies.map((s) => <li key={s}>{s}</li>)}</ul></div>
          </Section>
        </div>
      </main>
    </div>
  );
}
