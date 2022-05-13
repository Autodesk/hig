import { variants } from "../constants";

function inputStyles({ isDisabled, hasFocus, hasHover }, themeData) {
  const defaults = {
    color: themeData["input.value.fontColor"],
    height: `calc(${themeData["input.minHeight"]} - 2px)`,
    transitionProperty: "color",
    transitionDuration: "0.3s",
  };

  if (isDisabled) {
    return {
      ...defaults,
    };
  }
  if (hasFocus) {
    return {
      ...defaults,
      transitionDuration: "0.1s",
    };
  }
  if (hasHover) {
    return {
      ...defaults,
      transitionDuration: "0.1s",
    };
  }
  return defaults;
}

export default function stylesheet(props, themeData) {
  return {
    input: {
      backgroundColor:
        props.variant === variants.BOX
          ? themeData["input.box.default.backgroundColor"]
          : "transparent",
      boxSizing: "border-box",
      border: "none",
      appearance: "none",
      paddingTop: themeData["input.paddingVertical"],
      paddingRight:
        props.variant === variants.BOX
          ? themeData["input.box.paddingHorizontal"]
          : themeData["input.line.paddingHorizontal"],
      paddingBottom: themeData["input.paddingVertical"],
      paddingLeft:
        props.variant === variants.BOX
          ? themeData["input.box.paddingHorizontal"]
          : themeData["input.line.paddingHorizontal"],
      outline: "none",
      fontSize: themeData["input.value.fontSize"],
      fontFamily: themeData["input.value.fontFamily"],
      fontWeight: themeData["input.value.fontWeight"],
      lineHeight: themeData["input.value.lineHeight"],
      width: "100%",
      "&::placeholder": {
        color: themeData["input.value.placeholderFontColor"],
      },
      "&::-ms-input-placeholder": {
        color: themeData["input.value.placeholderFontColor"],
      },
      "::selection": {
        backgroundColor: themeData["input.value.highlightColor"],
      },
      ...inputStyles(props, themeData),
    },
  };
}
