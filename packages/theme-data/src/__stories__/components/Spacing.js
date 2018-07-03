import React from "react";

export default function Swatch({ length, theme }) {
  return (
    <div
      style={{
        height: length,
        width: length,
        backgroundColor: theme["COLOR_SCHEME.ACCENT_COLOR_500"]
      }}
    />
  );
}
