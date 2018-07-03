import React from "react";
import Swatch from "./Swatch";
import Value from "./Value";

export default function ColorExample({ role, theme, basics }) {
  const value = theme[role];
  const colorName = Object.keys(basics.COLORS).find(
    key => basics.COLORS[key] === value
  );
  return (
    <div>
      <Swatch color={value} theme={theme} />
      <Value>{value}</Value>
      {colorName ? <Value>{colorName}</Value> : null}
    </div>
  );
}
