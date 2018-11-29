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
  return disabled ? { pointerEvents: "none", opacity: "0.2" } : {};
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
        boxShadow: `0 0 0 ${themeData["button.halo.width"]} ${
          themeData["button.solid.hover.halo.color"]
        }`
      };
    case types.OUTLINE:
    case types.SECONDARY:
      return {
        boxShadow: `0 0 0 ${themeData["button.halo.width"]} ${
          themeData["button.outline.hover.halo.color"]
        }`
      };
    case types.FLAT:
      return {
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
        boxShadow: `0 0 0 ${themeData["button.halo.width"]} ${
          themeData["button.solid.focus.halo.color"]
        }`,
        outline: `none`
      };
    case types.OUTLINE:
    case types.SECONDARY:
      return {
        borderColor: themeData["button.outline.focus.borderColor"],
        boxShadow: `0 0 0 ${themeData["button.halo.width"]} ${
          themeData["button.outline.focus.halo.color"]
        }`,
        outline: `none`
      };
    case types.FLAT:
      return {
        boxShadow: `0 0 0 ${themeData["button.halo.width"]} ${
          themeData["button.flat.focus.halo.color"]
        }`,
        outline: `none`
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

export default function stylesheet(props, themeData) {
  const { disabled, hasFocus, hasHover, isPressed, size, type, width } = props;

  return {
    button: {
      ...getButtonDefaultButtonRules(themeData),
      ...getButtonRulesByType(type, themeData),
      ...getButtonRulesByDisabled(disabled),
      ...(hasHover ? getButtonHoverRulesByType(type, themeData) : {}),
      ...(hasFocus ? getButtonFocusRulesByType(type, themeData) : {}),
      ...(isPressed ? getButtonPressedRulesByType(type, themeData) : {}),
      ...getButtonRulesBySize(size, themeData),
      ...getButtonRulesByWidth(width)
    },
    icon: {
      display: "inline-block",
      position: "relative",
      top: "-4px",
      height: "24px",
      verticalAlign: "middle",
      marginRight: "5px",
      marginBottom: "1px"
    }
  };
}
