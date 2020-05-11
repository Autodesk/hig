import { variants } from "../constants";

function borderStyles({ variant }, themeData) {
  const defaults = {
    borderStyle: "solid",
    borderColor: "transparent",
    borderWidth: themeData["input.borderWidth"],
    borderBottomColor: themeData["input.line.default.borderBottomColor"]
  };

  return variant === variants.BOX
    ? {
        ...defaults,
        borderColor: themeData["input.box.default.borderColor"],
        borderBottomColor: themeData["input.box.default.borderColor"]
      }
    : defaults;
}

function borderBottomStyles(
  { isDisabled, hasFocus, hasHover, error },
  themeData
) {
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
  if (hasFocus) {
    return {
      ...defaults,
      borderBottomColor: themeData["input.line.focus.borderBottomColor"]
    };
  }
  if (hasHover) {
    return {
      ...defaults,
      borderBottomColor: themeData["input.box.hover.borderBottomColor"]
    };
  }
  if (error) {
    return {
      ...defaults,
      borderBottomColor: themeData["input.error.borderBottomColor"]
    };
  }
  return defaults;
}

function haloStyles({ isDisabled, hasFocus, hasHover }, themeData) {
  const defaults = {
    height: 0,
    backgroundColor: themeData["input.hover.haloColor"],
    transitionProperty: "height, color",
    transitionDuration: "0.3s, 0.3s"
  };

  if (isDisabled) {
    return {};
  }
  if (hasFocus) {
    return {
      height: themeData["input.haloWidth"],
      backgroundColor: themeData["input.focus.haloColor"],
      transitionDuration: "0.1s, 0.1s"
    };
  }
  if (hasHover) {
    return {
      ...defaults,
      height: themeData["input.haloWidth"],
      transitionDuration: "0.1s, 0.1s"
    };
  }
  return defaults;
}

export default function(props, themeData) {
  return {
    wrapper: {
      flexGrow: 2,
      position: "relative",
      ...borderStyles(props, themeData),
      ...borderBottomStyles(props, themeData)
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
