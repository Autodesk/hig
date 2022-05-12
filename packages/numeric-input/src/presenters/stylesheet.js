function getWrapperRulesByVariant(variant, density) {
  switch (variant) {
    case "line":
      return {
        right: "0px",
      };
    case "box":
      return {
        width: density === "medium-density" ? "35px" : "24px",
        right: "0px",
        height: "100%",
      };
    default:
      return {};
  }
}

function getBoxRules(themeData) {
  return {
    zIndex: -2,
    borderLeftStyle: "solid",
    borderLeftColor: themeData["colorScheme.divider.lightweight"],
    borderLeftWidth: themeData["input.borderWidth"],
    marginTop: "1px",
    marginBottom: "1px",
    marginRight: "1px",
    height: themeData["input.minHeight"],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transform: "translateY(-1px)",
  };
}

function getDisabledBoxRules(themeData) {
  return {
    opacity: themeData["input.disabled.opacity"],
  };
}

export default function stylesheet(props, themeData, density) {
  const { disabled, variant } = props;
  const { stylesheet: customStylesheet } = props;
  const styles = {
    numericInputWrapper: {
      position: "relative",
    },
    spinnerWrapper: {
      boxSizing: "border-box",
      position: "absolute",
      zIndex: 1,
      lineHeight: density === "medium-density" ? "10px" : "4px",
      cursor: disabled ? "default" : "pointer",
      ...getWrapperRulesByVariant(variant, density),
    },
    boxWrapper: {
      height: `calc(${themeData["input.minHeight"]} - 2px)`,
      ...(variant === "box" ? getBoxRules(themeData) : {}),
      ...(disabled ? getDisabledBoxRules(themeData) : {}),
    },
    spinner: {
      display: "flex",
      height: `calc((${themeData["input.minHeight"]} - 2px) / 2)`,
      outline: "none",
      boxSizing: "border-box",
      justifyContent: "center",
      width: "100%",
      "&:first-of-type": {
        alignItems: "flex-end",
      },
      "svg *": {
        fill: themeData["input.indicator.default"],
      },
      "&:hover svg *": {
        fill: disabled
          ? themeData["input.indicator.default"]
          : themeData["input.indicator.hover"],
      },
      "&:active svg *": {
        fill: disabled
          ? themeData["input.indicator.default"]
          : themeData["input.indicator.pressed"],
      },
    },
    iconUp: {
      display: "flex",
      paddingBottom: density === "high-density" ? "3px" : {},
    },
    iconDown: {
      display: "flex",
      paddingTop: density === "high-density" ? "3px" : {},
    },
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
