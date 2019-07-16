import { types, widths } from "../constants";

function getButtonDefaultButtonRules(themeData) {
  return {
    borderWidth: themeData["button.borderWidth"],
    borderStyle: "solid",
    borderColor: "transparent",
    borderRadius: themeData["button.borderRadius"],
    boxSizing: "border-box",
    color: themeData["colorScheme.textColor"],
    cursor: "pointer",
    display: "inline-block",
    fontFamily: themeData["button.fontFamily"],
    fontSize: themeData["button.fontSize"],
    fontWeight: themeData["button.fontWeight"],
    lineHeight: themeData["button.lineHeight"],
    margin: "0",
    overflow: "hidden",
    padding: `${themeData["button.verticalPadding"]}
      ${themeData["button.horizontalPadding"]}`,
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
    WebkitFontSmoothing: "antialiased"
  };
}

function getButtonRulesByType(type, themeData) {
  switch (type) {
    case types.SOLID:
    case types.PRIMARY: {
      return {
        background: themeData["button.solid.backgroundColor"],
        color: themeData["button.solid.textColor"],
        "&:visited": {
          color: themeData["button.solid.textColor"]
        },
        "svg *": {
          fill: themeData["button.solid.icon.color"]
        }
      };
    }
    case types.OUTLINE:
    case types.SECONDARY: {
      return {
        background: "none",
        borderColor: themeData["button.outline.borderColor"],
        color: themeData["button.outline.textColor"],
        "&:visited": {
          color: themeData["button.outline.textColor"]
        },
        "svg *": {
          fill: themeData["button.outline.icon.color"]
        }
      };
    }
    case types.FLAT: {
      return {
        background: "none",
        borderColor: themeData["button.flat.borderColor"],
        color: themeData["button.flat.textColor"],
        "&:visited": {
          color: themeData["button.flat.textColor"]
        },
        "svg *": {
          fill: themeData["button.flat.icon.color"]
        }
      };
    }
    default:
      return {};
  }
}

function getButtonRulesByDisabled(type, themeData) {
  return {
    opacity: themeData["component.disabled.opacity"],
    cursor: "default"
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
        boxShadow: `0 0 0 ${themeData["button.halo.width"]} ${
          themeData["button.solid.hover.halo.color"]
        }`
      };
    case types.OUTLINE:
    case types.SECONDARY:
      return {
        borderColor: themeData["button.outline.hover.borderColor"],
        boxShadow: `0 0 0 ${themeData["button.halo.width"]} ${
          themeData["button.outline.hover.halo.color"]
        }`
      };
    case types.FLAT:
      return {
        borderColor: themeData["button.flat.hover.borderColor"],
        boxShadow: `0 0 0 ${themeData["button.halo.width"]} ${
          themeData["button.flat.hover.halo.color"]
        }`
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
        boxShadow: `0 0 0 ${themeData["button.halo.width"]} ${
          themeData["button.solid.focus.halo.color"]
        }`,
        outline: `none`
      };
    case types.OUTLINE:
    case types.SECONDARY:
      return {
        background: themeData["button.outline.focus.backgroundColor"],
        borderColor: themeData["button.outline.focus.borderColor"],
        boxShadow: `0 0 0 ${themeData["button.halo.width"]} ${
          themeData["button.outline.focus.halo.color"]
        }`,
        color: themeData["button.outline.focus.textColor"],
        outline: `none`,
        "svg *": {
          fill: themeData["button.outline.focus.icon.color"]
        }
      };
    case types.FLAT:
      return {
        background: themeData["button.flat.focus.backgroundColor"],
        borderColor: themeData["button.flat.focus.borderColor"],
        boxShadow: `0 0 0 ${themeData["button.halo.width"]} ${
          themeData["button.flat.focus.halo.color"]
        }`,
        color: themeData["button.flat.focus.textColor"],
        outline: `none`,
        "svg *": {
          fill: themeData["button.flat.focus.icon.color"]
        }
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
        boxShadow: `0 0 0 ${themeData["button.solid.pressed.haloWidth"]} ${
          themeData["button.solid.pressed.halo.color"]
        }`
      };
    case types.OUTLINE:
    case types.SECONDARY:
      return {
        borderColor: themeData["button.outline.pressed.borderColor"],
        boxShadow: `0 0 0 ${themeData["button.outline.pressed.haloWidth"]} ${
          themeData["button.outline.pressed.halo.color"]
        }`
      };
    case types.FLAT:
      return {
        boxShadow: `0 0 0 ${themeData["button.flat.pressed.haloWidth"]} ${
          themeData["button.flat.pressed.halo.color"]
        }`
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
            ...(isPressed ? getButtonPressedRulesByType(type, themeData) : {})
          }),
      ...getButtonRulesByWidth(width)
    },
    icon: {
      display: "inline-block",
      position: "absolute",
      height: iconSize,
      marginRight: themeData["button.gutter"],
      top: "50%",
      transform: "translateY(-50%)"
    },
    iconText: {
      marginLeft: `calc(${iconSize} + ${themeData["button.gutter"]})`
    }
  };
}
