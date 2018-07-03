import React from "react";
import basics from "../basics";

export default function Swatch({ color }) {
  return (
    <div
      style={{
        width: basics.SPACINGS.XL,
        height: basics.SPACINGS.L,
        backgroundColor: color
      }}
    />
  );
}
