import React from "react";
import { H1, H2 } from "@hig/typography";
import BASICS from "../../basics";

export default function Header({ title }) {
  return (
    <div>
      <H1>{title}</H1>
      <div style={{ height: BASICS.SPACINGS.MEDIUM_M }} />
      <div style={{ display: "flex", marginBottom: BASICS.SPACINGS.MEDIUM_M }}>
        <div style={{ flex: "1 1 0" }}>
          <H2>Role</H2>
        </div>
        <div style={{ flex: "1 1 0" }}>
          <H2>Example</H2>
        </div>
      </div>
    </div>
  );
}
