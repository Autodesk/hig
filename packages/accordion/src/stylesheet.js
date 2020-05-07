import { indicators, indicatorPositions } from "./constants";

export default function stylesheet(props = {}, themeData = {}, themeMeta = {}) {
  const {
    hasHover,
    indicator,
    indicatorPosition,
    collapsed,
    disabled,
    stylesheet: customStylesheet
  } = props;

  const transitionDuration = "0.3s";

  const styles = {
    wrapper: {
      height: "auto",
      width: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch"
    },
    contentTransitionWrapper: {
      transitionProperty: "height",
      transitionDuration: ".3s",
      transitionTimingFunction: "ease-in-out"
    },
    header: {
      display: "flex",
      alignItems: "center",
      backgroundColor: themeData["accordion.header.backgroundColor"],
      border: 0,
      outline: 0,
      padding: `${themeData["accordion.header.paddingVertical"]} ${
        themeData["accordion.header.paddingHorizontal"]
      }`,
      ...(indicatorPosition === indicatorPositions.RIGHT && {
        paddingLeft: themeData["accordion.header.indicatorRight.paddingLeft"],
        paddingRight: themeData["accordion.header.indicatorRight.paddingRight"]
      }),
      fontFamily: themeData["accordion.header.fontFamily"],
      fontSize: themeData["accordion.header.fontSize"],
      fontWeight: themeData["accordion.header.fontWeight"],
      lineHeight: themeData["accordion.header.lineHeight"],
      color: themeData["accordion.header.fontColor"],
      width: "100%",
      opacity: disabled ? themeData["component.disabled.opacity"] : "1"
    },
    indicator: {
      order: indicatorPosition === indicatorPositions.LEFT ? -1 : 1,
      flexGrow: 0,
      flexShrink: 0,
      width: themeData["accordion.header.indicatorSize"],
      textAlign: "center",
      "> path": {
        fill:
          !disabled && hasHover
            ? themeData["accordion.header.hover.indicatorColor"]
            : themeData["accordion.header.default.indicatorColor"]
      },
      marginRight:
        indicatorPosition === indicatorPositions.LEFT
          ? themeData["accordion.header.indicatorGutter"]
          : 0,
      marginLeft:
        indicatorPosition === indicatorPositions.LEFT
          ? 0
          : themeData["accordion.header.indicatorGutter"],
      transitionDuration,
      transform:
        indicator === indicators.CARET && !collapsed ? "rotate(90deg)" : "none"
    },
    label: {
      order: 0,
      flexGrow: 1,
      textAlign: "left",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden"
    }
  };

  if (customStylesheet) {
    return customStylesheet(styles, props, themeData, themeMeta);
  }
  return styles;
}
