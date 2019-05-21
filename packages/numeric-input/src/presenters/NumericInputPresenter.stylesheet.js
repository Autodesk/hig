import { variants } from "../constants";

function inputStyles({ isDisabled, hasFocus, hasHover }, themeData) {
  const defaults = {
    color: themeData["input.fontColor"],
    height: `calc(${themeData["input.height"]} - 2px)`,
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

function haloStyles({ isDisabled, hasFocus, hasHover }, themeData) {
  const defaults = {
    height: 0,
    backgroundColor: themeData["input.halo.color"],
    transitionProperty: "height, color",
    transitionDuration: "0.3s, 0.3s"
  };

  if (isDisabled) {
    return {};
  }
  if (hasHover) {
    return {
      ...defaults,
      height: themeData["input.hover.halo.width"],
      transitionDuration: "0.1s, 0.1s"
    };
  }
  if (hasFocus) {
    return {
      height: themeData["input.focus.halo.width"],
      backgroundColor: themeData["input.focus.halo.color"],
      transitionDuration: "0.1s, 0.1s"
    };
  }
  return defaults;
}

export default function stylesheet(props, themeData) {
  const padding =
    props.variant === variants.BOX
      ? themeData["input.boxType.horizontalPadding"]
      : themeData["input.horizontalPadding"];

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
      paddingRight: padding,
      paddingBottom: themeData["input.verticalPadding"],
      paddingLeft: padding,
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
    },

    halo: {
      position: "absolute",
      top: "calc(100% + 1px)",
      left: "-1px",
      right: 0,
      width: "calc(100% + 2px)",
      ...haloStyles(props, themeData)
    }
  };
}
