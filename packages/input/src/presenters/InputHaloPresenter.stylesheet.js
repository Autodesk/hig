import { variants } from "../constants";

function borderStyles({ variant }, themeData) {
  const defaults = {
    borderStyle: "solid",
    borderColor: "transparent",
    borderWidth: themeData["input.borderWidth"]
  };

  return variant === variants.BOX
    ? {
        ...defaults,
        borderColor: themeData["input.borderColor"]
      }
    : defaults;
}

function borderBottomStyles({ isDisabled, hasFocus, hasHover }, themeData) {
  const defaults = {
    borderBottomStyle: "solid",
    borderBottomColor: themeData["input.borderBottomColor"],
    borderBottomWidth: themeData["input.borderBottomWidth"]
  };

  if (isDisabled) {
    return {
      ...defaults,
      borderBottomColor: themeData["INPUT.DISABLED.BORDER_BOTTOM_COLOR"],
      color: themeData["input.disabled.fontColor"]
    };
  }
  if (hasFocus) {
    return {
      ...defaults,
      borderBottomColor: themeData["input.focus.borderBottomColor"]
    };
  }
  if (hasHover) {
    return {
      ...defaults,
      borderBottomColor: themeData["input.hover.borderBottomColor"]
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
  if (hasFocus) {
    return {
      height: themeData["input.focus.halo.width"],
      backgroundColor: themeData["input.focus.halo.color"],
      transitionDuration: "0.1s, 0.1s"
    };
  }
  if (hasHover) {
    return {
      ...defaults,
      height: themeData["input.hover.halo.width"],
      transitionDuration: "0.1s, 0.1s"
    };
  }
  return defaults;
}

export default function(props, themeData) {
  return {
    wrapper: {
      position: "relative",
      ...borderStyles(props, themeData),
      ...borderBottomStyles(props, themeData)
    },
    halo: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      ...haloStyles(props, themeData)
    }
  };
}
