import React from "react";
import Swatch from "./Swatch";
import Value from "./Value";

export default function ShadowExample({ role, theme }) {
  const value = theme[role];
  return (
    <div>
      <Swatch theme={theme} boxShadow={value} />
      <Value>{value}</Value>
    </div>
  );
}
