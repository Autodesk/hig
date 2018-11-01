import { types, widths, sizes } from "../constants";

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
    textAlign: "center",
    textDecoration: "none",
    textOverflow: "ellipsis",
    userSelect: "none",
    whiteSpace: "nowrap",
    "-moz-osx-font-smoothing": "grayscale",
    "-webkit-font-smoothing": "antialiased"
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

function getButtonRulesByDisabled(disabled) {
  return disabled ? { pointerEvents: "none" } : {};
}

function getButtonRulesBySize(size, themeData) {
  switch (size) {
    case sizes.SMALL:
      return {
        fontSize: "12px", // Is this covered by density now?
        fontWeight: themeData["button.fontWeight"],
        height: "28px", // line-height + (borderWidth * 2)
        lineHeight: "26px",
        minWidth: "66px",
        padding: "0 16px"
      };
    case sizes.STANDARD:
      return {
        fontSize: themeData["button.fontSize"],
        fontWeight: themeData["button.fontWeight"],
        height: "36px", // line-height + (borderWidth * 2)
        lineHeight: "34px",
        minWidth: "68px",
        padding: "0 16px"
      };
    case sizes.LARGE:
      return {
        fontSize: "16px", // Is this covered by density now?
        fontWeight: themeData["button.fontWeight"],
        height: "42px", // line-height + (borderWidth * 2)
        lineHeight: "40px",
        minWidth: "90px",
        padding: "0 24px"
      };
    default:
      return {};
  }
}

function getButtonRulesByWidth(width) {
  return width === widths.GROW ? { width: "100%" } : {};
}

function getButtonHoverRulesByType(type, themeData) {
  switch (type) {
    case types.SOLID:
    case types.PRIMARY:
      return {
        color: themeData["button.solid.hover.textColor"],
        backgroundColor: themeData["button.solid.hover.backgroundColor"],
        borderColor: themeData["button.solid.hover.borderColor"],
        "svg *": {
          fill: themeData["button.solid.hover.icon.color"]
        }
      };
    case types.OUTLINE:
    case types.SECONDARY:
      return {
        color: themeData["button.outline.hover.textColor"],
        backgroundColor: themeData["button.outline.hover.backgroundColor"],
        borderColor: themeData["button.outline.hover.borderColor"],
        "svg *": {
          fill: themeData["button.outline.hover.icon.color"]
        }
      };
    case types.FLAT:
      return {
        color: themeData["button.flat.hover.textColor"],
        backgroundColor: themeData["button.flat.hover.backgroundColor"],
        borderColor: themeData["button.flat.hover.borderColor"],
        "svg *": {
          fill: themeData["button.flat.hover.icon.color"]
        }
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
        color: themeData["button.solid.focus.textColor"],
        backgroundColor: themeData["button.solid.focus.backgroundColor"],
        borderColor: themeData["button.solid.focus.borderColor"],
        "svg *": {
          fill: themeData["button.solid.focus.icon.color"]
        }
      };
    case types.OUTLINE:
    case types.SECONDARY:
      return {
        color: themeData["button.outline.focus.textColor"],
        backgroundColor: themeData["button.outline.focus.backgroundColor"],
        borderColor: themeData["button.outline.focus.borderColor"],
        "svg *": {
          fill: themeData["button.outline.focus.icon.color"]
        }
      };
    case types.FLAT:
      return {
        color: themeData["button.flat.focus.textColor"],
        backgroundColor: themeData["button.flat.focus.backgroundColor"],
        borderColor: themeData["button.flat.focus.borderColor"],
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
        color: themeData["button.solid.pressed.textColor"],
        backgroundColor: themeData["button.solid.pressed.backgroundColor"],
        borderColor: themeData["button.solid.pressed.borderColor"],
        "svg *": {
          fill: themeData["button.solid.pressed.icon.color"]
        }
      };
    case types.OUTLINE:
    case types.SECONDARY:
      return {
        color: themeData["button.outline.pressed.textColor"],
        backgroundColor: themeData["button.outline.pressed.backgroundColor"],
        borderColor: themeData["button.outline.pressed.borderColor"],
        "svg *": {
          fill: themeData["button.outline.pressed.icon.color"]
        }
      };
    case types.FLAT:
      return {
        color: themeData["button.flat.pressed.textColor"],
        backgroundColor: themeData["button.flat.pressed.backgroundColor"],
        borderColor: themeData["button.flat.pressed.borderColor"],
        "svg *": {
          fill: themeData["button.flat.pressed.icon.color"]
        }
      };
    default:
      return {};
  }
}

function getButtonDisabledRulesByType(type, themeData) {
  switch (type) {
    case types.SOLID:
    case types.PRIMARY:
      return {
        color: themeData["button.solid.disabled.textColor"],
        backgroundColor: themeData["button.solid.disabled.backgroundColor"],
        borderColor: themeData["button.solid.disabled.borderColor"],
        "svg *": {
          fill: themeData["button.solid.disabled.icon.color"]
        }
      };
    case types.OUTLINE:
    case types.SECONDARY:
      return {
        color: themeData["button.outline.disabled.textColor"],
        backgroundColor: themeData["button.outline.disabled.backgroundColor"],
        borderColor: themeData["button.outline.disabled.borderColor"],
        "svg *": {
          fill: themeData["button.outline.disabled.icon.color"]
        }
      };
    case types.FLAT:
      return {
        color: themeData["button.flat.disabled.textColor"],
        backgroundColor: themeData["button.flat.disabled.backgroundColor"],
        borderColor: themeData["button.flat.disabled.borderColor"],
        "svg *": {
          fill: themeData["button.flat.disabled.icon.color"]
        }
      };
    default:
      return {};
  }
}

export default function stylesheet(props, themeData) {
  const { disabled, hasFocus, hasHover, pressed, size, type, width } = props;

  return {
    button: {
      ...getButtonDefaultButtonRules(themeData),
      ...getButtonRulesByType(type, themeData),
      ...(hasFocus || pressed ? { outline: "none", boxShadow: "none" } : {}),
      ...getButtonRulesByDisabled(disabled),
      ...(hasHover ? getButtonHoverRulesByType(type, themeData) : {}),
      ...(hasFocus ? getButtonFocusRulesByType(type, themeData) : {}),
      ...(pressed ? getButtonPressedRulesByType(type, themeData) : {}),
      ...(disabled ? getButtonDisabledRulesByType(type, themeData) : {}),
      ...getButtonRulesBySize(size, themeData),
      ...getButtonRulesByWidth(width)
    },
    icon: {
      display: "inline-block",
      position: "relative",
      top: "-1px",
      height: "24px",
      verticalAlign: "middle",
      marginRight: "5px",
      marginBottom: "1px"
    }
  };
}
