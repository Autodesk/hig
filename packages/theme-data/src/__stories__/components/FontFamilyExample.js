import React from "react";
import Value from "./Value";
import FontSample from "./FontSample";

export default function FontFamilyExample({ role, theme }) {
  const value = theme[role];
  return (
    <div>
      <FontSample fontFamily={value} theme={theme} />
      <Value>{value}</Value>
    </div>
  );
}
