import React from "react";
import BASICS from "../../basics";

export default function InlineCode({ children }) {
  return (
    <code style={{ fontFamily: BASICS.FONT_FAMILIES.MONOSPACE }}>
      {children}
    </code>
  );
}
