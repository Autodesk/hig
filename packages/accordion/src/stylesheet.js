import { indicators, indicatorPositions } from "./constants";

export default function stylesheet(props = {}, themeData = {}, themeMeta = {}) {
  const {
    hasHover,
    indicator,
    indicatorPosition,
    collapsed,
    disabled,
    stylesheet: customStylesheet,
  } = props;

  const transitionDuration = "0.3s";

  const styles = {
    wrapper: {
      height: "auto",
      width: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
    },
    contentTransitionWrapper: {
      transitionProperty: "height",
      transitionDuration: ".3s",
      transitionTimingFunction: "ease-in-out",
    },
    header: {
      display: "flex",
      alignItems: "center",
      backgroundColor: themeData["accordion.header.backgroundColor"],
      border: 0,
      outline: 0,
      padding: `${themeData["accordion.header.paddingVertical"]} ${themeData["accordion.header.paddingHorizontal"]}`,
      ...(indicatorPosition === indicatorPositions.RIGHT && {
        paddingLeft: themeData["accordion.header.indicatorRight.paddingLeft"],
        paddingRight: themeData["accordion.header.indicatorRight.paddingRight"],
      }),
      fontFamily: themeData["accordion.header.fontFamily"],
      fontSize: themeData["accordion.header.fontSize"],
      fontWeight: themeData["accordion.header.fontWeight"],
      lineHeight: themeData["accordion.header.lineHeight"],
      color: themeData["accordion.header.fontColor"],
      width: "100%",
      opacity: disabled ? themeData["colorScheme.opacity.disabled"] : "1",
    },
    indicatorWrapper: {
      order: indicatorPosition === indicatorPositions.LEFT ? -1 : 1,
      flexGrow: 0,
      flexShrink: 0,
      marginRight:
        indicatorPosition === indicatorPositions.LEFT
          ? themeData["accordion.header.indicatorGutter"]
          : 0,
      marginLeft:
        indicatorPosition === indicatorPositions.LEFT
          ? 0
          : themeData["accordion.header.indicatorGutter"],
      position: "relative",
      textAlign: "center",
      width: "16px",
      minHeight: "16px",
    },
    indicator: {
      "> path": {
        fill:
          !disabled && hasHover
            ? themeData["accordion.header.hover.indicatorColor"]
            : themeData["accordion.header.default.indicatorColor"],
      },
      transitionDuration,
      transform:
        indicator === indicators.CARET && !collapsed
          ? "translateY(-50%) rotate(90deg)"
          : "translateY(-50%)",
      position: "absolute",
      top: "50%",
      left: 0,
      right: 0,
      margin: "0 auto",
    },
    label: {
      order: 0,
      flexGrow: 1,
      textAlign: "left",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
  };

  if (customStylesheet) {
    return customStylesheet(styles, props, themeData, themeMeta);
  }
  return styles;
}
