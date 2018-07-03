import React from "react";

export default function Swatch({ color }) {
  return (
    <div
      style={{
        width: "64px",
        height: "32px",
        backgroundColor: color
      }}
    />
  );
}
