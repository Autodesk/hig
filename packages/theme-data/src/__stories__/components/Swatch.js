import React from "react";

export default function Swatch({ color, theme, borderWidth, borderRadius }) {
  const renderedBorderWidth = borderWidth || theme["BASICS.BORDER_WIDTHS.S"];
  const renderedBorderRadius = borderRadius || theme["BASICS.BORDER_RADII.M"];
  return (
    <div
      style={{
        height: "32px",
        backgroundColor: color,
        borderRadius: renderedBorderRadius,
        border: `${theme["BASICS.BORDER_WIDTHS.S"]} solid ${
          theme["BASICS.COLORS.WHITE"]
        }`,
        boxShadow: `0 0 0 ${renderedBorderWidth} ${
          theme["BASICS.COLORS.CHARCOAL_300"]
        }`,
        marginBottom: theme["BASICS.SPACINGS.XS"]
      }}
    />
  );
}
