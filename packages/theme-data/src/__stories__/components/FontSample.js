import React from "react";
import BASICS from "../../basics";

export default function FontSample({
  fontWeight,
  fontSize,
  fontFamily,
  theme
}) {
  const style = {
    fontWeight: fontWeight || BASICS.FONT_WEIGHTS.NORMAL,
    fontSize: fontSize || BASICS.FONT_SIZES.M,
    fontFamily: fontFamily || BASICS.FONT_FAMILIES.MAIN,
    marginBottom: theme["BASICS.SPACINGS.XS"]
  };
  return (
    <div style={style}>The quick, brown fox jumped over the lazy dog.</div>
  );
}
