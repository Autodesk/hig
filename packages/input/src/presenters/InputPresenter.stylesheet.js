import { variants } from "../constants";

function inputStyles({ isDisabled, hasFocus, hasHover }, themeData) {
  const defaults = {
    color: themeData["input.fontColor"],
    transitionProperty: "color",
    transitionDuration: "0.3s"
  };

  if (isDisabled) {
    return {
      ...defaults,
      color: themeData["input.disabled.fontColor"]
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
      minHeight: themeData["input.minHeight"],
      paddingTop: themeData["input.verticalPadding"],
      paddingRight:
        props.variant === variants.BOX
          ? themeData["input.boxType.horizontalPadding"]
          : themeData["input.horizontalPadding"],
      paddingBottom: themeData["input.verticalPadding"],
      paddingLeft:
        props.variant === variants.BOX
          ? themeData["input.boxType.horizontalPadding"]
          : themeData["input.horizontalPadding"],
      outline: "none",
      fontSize: themeData["density.fontSizes.medium"],
      fontFamily: themeData["input.fontFamily"],
      fontWeight: themeData["input.fontWeight"],
      lineHeight: themeData["input.lineHeight"],
      width: "100%",
      ...inputStyles(props, themeData)
    }
  };
}
