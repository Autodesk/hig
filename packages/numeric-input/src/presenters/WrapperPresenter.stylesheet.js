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

export default function(props, themeData) {
  return {
    wrapper: {
      flexGrow: 2,
      position: "relative",
      ...borderStyles(props, themeData),
      ...borderBottomStyles(props, themeData)
    }
  };
}
