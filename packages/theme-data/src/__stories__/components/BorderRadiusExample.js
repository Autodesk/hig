import React from "react";
import Swatch from "./Swatch";
import Value from "./Value";

export default function BorderRadiusExample({ role, theme }) {
  const value = theme[role];
  return (
    <div>
      <Swatch theme={theme} borderRadius={value} />
      <Value>{value}</Value>
    </div>
  );
}
