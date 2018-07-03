import React from "react";
import Spacing from "./Spacing";
import Value from "./Value";

export default function SpacingExample({ role, theme }) {
  const value = theme[role];
  return (
    <div>
      <Spacing length={value} theme={theme} />
      <Value>{value}</Value>
    </div>
  );
}
