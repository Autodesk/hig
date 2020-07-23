function getWrapperRulesByVariant(variant, props, themeData) {
  switch (variant) {
    case "line":
      return {
        width: "10px",
        right: "0px",
        bottom: "22%"
      };
    case "box":
      return {
        width: "36px",
        right: "0px",
        backgroundColor: themeData["input.box.default.backgroundColor"],
        borderStyle: "solid",
        borderColor: themeData["input.borderColor"],
        borderWidth: themeData["basics.borderWidths.small"],
        // height: "100%",
        borderBottomColor: "transparent",
        top: "0px",
        bottom: "1px",
        textAlign: "-webkit-center"
      };
    default:
      return {};
  }
}
function getSpinnerRulesByVariant(variant, themeData) {
  switch (variant) {
    case "line":
      return {};
    case "box":
      return {};
    default:
      return {};
  }
}

export default function stylesheet(props, themeData) {
  const { disabled, hasFocus, hasHover, isPressed, variant } = props;

  return {
    spinnerWrapper: {
      boxSizing: `border-box`,
      position: `absolute`,
      zIndex: 1,
      ...getWrapperRulesByVariant(variant, props, themeData)
    },
    spinner: {
      display: "block",
      "svg *": {
        fill: themeData["input.indicator.default"]
      },

      "&:active svg *": {
        fill: themeData["colorScheme.indicator.pressed"]
      }
    },
    iconUp: {
      display: "flex",
      paddingTop: variant === "box" ? "7px" : {}
    },
    iconDown: {
      display: "flex",
      paddingBottom: variant === "box" ? "8px" : {}
    }
  };
}
