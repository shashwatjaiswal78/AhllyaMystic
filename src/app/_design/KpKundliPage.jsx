"use client";
/* eslint-disable */
// Generated from the design file KpKundli.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { sx, hole } from "./sx";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState, maskDate, maskTime, maskTimeHM, maskPart } from "./wire";

class KpKundliPage extends React.Component {
  renderVals() { return {}; }
}

KpKundliPage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="KpKundli" style={{ display: "contents" }}>
      <iframe className={"kp-frame"} src={"/kp-kundli.html"} title={"KP Kundli Calculator"} />
    </div>
  );
};

export default KpKundliPage;
