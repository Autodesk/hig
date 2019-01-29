import { variants } from "../constants";

function inputStyles({ isDisabled, hasFocus, hasHover }, themeData) {
  const defaults = {
    color: themeData["input.fontColor"],
    height: themeData["input.height"],
    transitionProperty: "color",
    transitionDuration: "0.3s"
  };

  if (isDisabled) {
    return {
      ...defaults
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
      backgroundColor:
        props.variant === variants.BOX
          ? themeData["input.box.backgroundColor"]
          : "transparent",
      boxSizing: "border-box",
      border: "none",
      appearance: "none",
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
      "&::placeholder": {
        color: themeData["input.placeholder.fontColor"]
      },
      "&::-ms-input-placeholder": {
        color: themeData["input.placeholder.fontColor"]
      },
      "::selection": {
        backgroundColor: themeData["input.highlightColor"]
      },
      ...inputStyles(props, themeData)
    }
  };
}
