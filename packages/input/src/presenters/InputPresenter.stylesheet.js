function inputStyles({ isDisabled, hasFocus, hasHover }, themeData) {
  const defaults = {
    color: themeData["INPUT.FONT_COLOR"],
    transitionProperty: "color",
    transitionDuration: "0.3s"
  };

  if (isDisabled) {
    return {
      ...defaults,
      color: themeData["INPUT.DISABLED.FONT_COLOR"]
    };
  }
  if (hasFocus) {
    return {
      ...defaults,
      transitionDuration: "0.1s"
    };
  }
  if (hasHover) {
    return {
      ...defaults,
      transitionDuration: "0.1s"
    };
  }
  return defaults;
}

export default function stylesheet(props, themeData) {
  return {
    input: {
      backgroundColor: "transparent",
      boxSizing: "border-box",
      border: "none",
      appearance: "none",
      minHeight: themeData["INPUT.MIN_HEIGHT"],
      paddingLeft: themeData["DENSITY.INPUT.HORIZONTAL_PADDING"],
      paddingRight: themeData["DENSITY.INPUT.HORIZONTAL_PADDING"],
      outline: "none",
      fontSize: themeData["DENSITY.FONT_SIZES.M"],
      fontFamily: themeData["INPUT.FONT_FAMILY"],
      fontWeight: themeData["INPUT.FONT_WEIGHT"],
      lineHeight: themeData["INPUT.LINE_HEIGHT"],
      width: "100%",
      ...inputStyles(props, themeData)
    }
  };
}
