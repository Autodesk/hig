import { types, widths } from "../constants";

function getButtonDefaultButtonRules(themeData) {
  return {
    borderWidth: themeData["button.borderWidth"],
    borderStyle: "solid",
    borderColor: "transparent",
    borderRadius: themeData["button.borderRadius"],
    boxSizing: "border-box",
    color: themeData["button.solid.label.fontColor"],
    cursor: "pointer",
    display: "inline-block",
    fontFamily: themeData["button.label.fontFamily"],
    fontSize: themeData["button.label.fontSize"],
    fontWeight: themeData["button.label.fontWeight"],
    lineHeight: themeData["button.label.lineHeight"],
    margin: "0",
    overflow: "hidden",
    padding: `${themeData["button.paddingVertical"]}
      ${themeData["button.paddingHorizontal"]}`,
    position: "relative",
    textAlign: "center",
    textDecoration: "none",
    textOverflow: "ellipsis",
    transitionDuration: "0.3s",
    transitionProperty: "box-shadow",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    userSelect: "none",
    whiteSpace: "nowrap",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
  };
}

function getButtonRulesByType(type, themeData) {
  switch (type) {
    case types.SOLID:
    case types.PRIMARY: {
      return {
        background: themeData["button.solid.default.backgroundColor"],
        color: themeData["button.solid.label.fontColor"],
        "&:visited": {
          color: themeData["button.solid.label.fontColor"],
        },
        "svg *": {
          fill: themeData["button.solid.iconColor"],
        },
      };
    }
    case types.OUTLINE:
    case types.SECONDARY: {
      return {
        background: "none",
        borderColor: themeData["button.outline.default.borderColor"],
        color: themeData["button.outline.label.fontColor"],
        "&:visited": {
          color: themeData["button.outline.label.fontColor"],
        },
        "svg *": {
          fill: themeData["button.outline.iconColor"],
        },
      };
    }
    case types.FLAT: {
      return {
        background: "none",
        borderColor: themeData["button.flat.default.borderColor"],
        color: themeData["button.flat.label.fontColor"],
        "&:visited": {
          color: themeData["button.flat.label.fontColor"],
        },
        "svg *": {
          fill: themeData["button.flat.iconColor"],
        },
      };
    }
    default:
      return {};
  }
}

function getButtonRulesByDisabled(type, themeData) {
  return {
    opacity: themeData["colorScheme.opacity.disabled"],
    cursor: "default",
    pointerEvents: "none",
  };
}

function getButtonRulesByWidth(width) {
  return width === widths.GROW ? { width: "100%" } : {};
}

function getButtonHoverRulesByType(type, themeData) {
  switch (type) {
    case types.SOLID:
    case types.PRIMARY:
      return {
        background: themeData["button.solid.hover.backgroundColor"],
        boxShadow: `0 0 0 ${themeData["button.haloWidth"]} ${themeData["button.hover.haloColor"]}`,
      };
    case types.OUTLINE:
    case types.SECONDARY:
      return {
        borderColor: themeData["button.outline.hover.borderColor"],
        boxShadow: `0 0 0 ${themeData["button.haloWidth"]} ${themeData["button.hover.haloColor"]}`,
      };
    case types.FLAT:
      return {
        borderColor: themeData["button.flat.hover.borderColor"],
        boxShadow: `0 0 0 ${themeData["button.haloWidth"]} ${themeData["button.hover.haloColor"]}`,
      };
    default:
      return {};
  }
}

function getButtonFocusRulesByType(type, themeData) {
  switch (type) {
    case types.SOLID:
    case types.PRIMARY:
      return {
        background: themeData["button.solid.focus.backgroundColor"],
        boxShadow: `0 0 0 ${themeData["button.haloWidth"]} ${themeData["button.focus.haloColor"]}`,
        outline: `none`,
      };
    case types.OUTLINE:
    case types.SECONDARY:
      return {
        background: themeData["button.outline.focus.backgroundColor"],
        borderColor: themeData["button.outline.focus.borderColor"],
        boxShadow: `0 0 0 ${themeData["button.haloWidth"]} ${themeData["button.focus.haloColor"]}`,
        color: themeData["button.outline.label.fontColor"],
        outline: `none`,
        "svg *": {
          fill: themeData["button.outline.iconColor"],
        },
      };
    case types.FLAT:
      return {
        background: themeData["button.flat.focus.backgroundColor"],
        borderColor: themeData["button.flat.focus.borderColor"],
        boxShadow: `0 0 0 ${themeData["button.haloWidth"]} ${themeData["button.focus.haloColor"]}`,
        color: themeData["button.flat.label.fontColor"],
        outline: `none`,
        "svg *": {
          fill: themeData["button.flat.iconColor"],
        },
      };
    default:
      return {};
  }
}

function getButtonPressedRulesByType(type, themeData) {
  switch (type) {
    case types.SOLID:
    case types.PRIMARY:
      return {
        boxShadow: `0 0 0 ${themeData["button.pressed.haloWidth"]} ${themeData["button.pressed.haloColor"]}`,
      };
    case types.OUTLINE:
    case types.SECONDARY:
      return {
        borderColor: themeData["button.outline.pressed.borderColor"],
        boxShadow: `0 0 0 ${themeData["button.pressed.haloWidth"]} ${themeData["button.pressed.haloColor"]}`,
      };
    case types.FLAT:
      return {
        boxShadow: `0 0 0 ${themeData["button.pressed.haloWidth"]} ${themeData["button.pressed.haloColor"]}`,
      };
    default:
      return {};
  }
}

export default function stylesheet(props, themeData, theme) {
  const { disabled, hasFocus, hasHover, isPressed, type, width } = props;
  const iconSize = theme.densityId === "medium-density" ? "24px" : "16px";

  return {
    button: {
      ...getButtonDefaultButtonRules(themeData),
      ...getButtonRulesByType(type, themeData),
      ...(disabled
        ? getButtonRulesByDisabled(type, themeData)
        : {
            ...(hasFocus ? getButtonFocusRulesByType(type, themeData) : {}),
            ...(hasHover ? getButtonHoverRulesByType(type, themeData) : {}),
            ...(isPressed ? getButtonPressedRulesByType(type, themeData) : {}),
          }),
      ...getButtonRulesByWidth(width),
    },
    icon: {
      display: "inline-block",
      position: "absolute",
      height: iconSize,
      marginRight: themeData["button.gutterWidth"],
      top: "50%",
      transform: "translateY(-50%)",
    },
    iconText: {
      marginLeft: `calc(${iconSize} + ${themeData["button.gutterWidth"]})`,
    },
  };
}
