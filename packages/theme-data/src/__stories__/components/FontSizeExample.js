import React from "react";
import Value from "./Value";
import FontSample from "./FontSample";

export default function FontSizeExample({ role, theme }) {
  const value = theme[role];
  return (
    <div>
      <FontSample fontSize={value} theme={theme} />
      <Value>{value}</Value>
    </div>
  );
}
