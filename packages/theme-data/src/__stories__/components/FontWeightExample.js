import React from "react";
import Value from "./Value";
import FontSample from "./FontSample";

export default function FontWeightExample({ role, theme }) {
  const value = theme[role];
  return (
    <div>
      <FontSample fontWeight={value} theme={theme} />
      <Value>{value}</Value>
    </div>
  );
}
