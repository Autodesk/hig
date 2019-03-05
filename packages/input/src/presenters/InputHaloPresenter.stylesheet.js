import { variants } from "../constants";

function borderStyles({ variant }, themeData) {
  const defaults = {
    borderStyle: "solid",
    borderColor: "transparent",
    borderWidth: themeData["input.borderWidth"],
    borderBottomColor: themeData["input.borderBottomColor"]
  };

  return variant === variants.BOX
    ? {
        ...defaults,
        borderColor: themeData["input.borderColor"],
        borderBottomColor: themeData["input.box.borderBottomColor"]
      }
    : defaults;
}

function borderBottomStyles({ isDisabled, hasFocus, hasHover }, themeData) {
  const defaults = {
    borderBottomStyle: "solid",
    borderBottomWidth: themeData["input.borderBottomWidth"]
  };

  if (isDisabled) {
    return {
      ...defaults,
      opacity: themeData["input.disabled.opacity"]
    };
  }
  if (hasHover) {
    return {
      ...defaults,
      borderBottomColor: themeData["input.hover.borderBottomColor"]
    };
  }
  if (hasFocus) {
    return {
      ...defaults,
      borderBottomColor: themeData["input.focus.borderBottomColor"]
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
      left: "-1px",
      right: 0,
      width: "calc(100% + 2px)",
      ...haloStyles(props, themeData)
    }
  };
}
