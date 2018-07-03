import React from "react";

export default function Swatch({
  color,
  theme,
  borderWidth,
  borderRadius,
  boxShadow
}) {
  const renderedBackgroundColor =
    color || theme["COLOR_SCHEME.SURFACE_LEVEL_1_COLOR"];
  const renderedBorderWidth = borderWidth || theme["BASICS.BORDER_WIDTHS.S"];
  const renderedBorderRadius = borderRadius || theme["BASICS.BORDER_RADII.M"];
  const renderedBoxShadow = boxShadow || "0 0 0 rgba(0, 0, 0, 0)";
  return (
    <div
      style={{
        height: "32px",
        backgroundColor: renderedBackgroundColor,
        borderRadius: renderedBorderRadius,
        border: `${theme["BASICS.BORDER_WIDTHS.S"]} solid ${
          theme["COLOR_SCHEME.SURFACE_LEVEL_1_COLOR"]
        }`,
        boxShadow: `0 0 0 ${renderedBorderWidth} ${
          theme["COLOR_SCHEME.SURFACE_LEVEL_4_COLOR"]
        }, ${renderedBoxShadow}`,
        marginBottom: theme["BASICS.SPACINGS.XS"]
      }}
    />
  );
}
