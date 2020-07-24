function getWrapperRulesByVariant(variant, density) {
  switch (variant) {
    case "line":
      return {
        width: "10px",
        right: "0px",
        bottom: "22%"
      };
    case "box":
      return {
        width: density === "medium-density" ? "35px" : "24px",
        right: "0px",
        height: "100%",
        textAlign: "-webkit-center"
      };
    default:
      return {};
  }
}

function getBoxRules(themeData) {
  return {
    zIndex: -2,
    borderLeftStyle: "solid",
    borderLeftColor: themeData["input.borderColor"],
    borderLeftWidth: themeData["basics.borderWidths.small"],
    marginTop: "1px",
    marginBottom: "1px",
    marginRight: "1px",
    height: "-webkit-fill-available",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: themeData["input.box.default.backgroundColor"]
  };
}

function getDisabledBoxRules(themeData) {
  return {
    opacity: themeData["input.disabled.opacity"]
  };
}

export default function stylesheet(props, themeData, density) {
  const { disabled, variant } = props;
  const {stylesheet: customStylesheet} = props;
  const styles = {
    spinnerWrapper: {
      boxSizing: `border-box`,
      position: `absolute`,
      zIndex: 1,
      ...getWrapperRulesByVariant(variant, density)
    },
    boxWrapper: {
      ...(variant === "box" ? getBoxRules(themeData) : {}),
      ...(disabled ? getDisabledBoxRules(themeData) : {})
    },
    spinner: {
      display: "block",
      "svg *": {
        fill: themeData["input.indicator.default"]
      },

      "&:active svg *": {
        fill: disabled
          ? themeData["input.indicator.default"]
          : themeData["colorScheme.indicator.pressed"]
      }
    },
    iconUp: {
      display: "flex",
      paddingBottom: density === "high-density" ? "3px" : {}
    },
    iconDown: {
      display: "flex",
      paddingTop: density === "high-density" ? "3px" : {}
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
