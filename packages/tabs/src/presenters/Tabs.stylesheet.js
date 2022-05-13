import { alignments, orientations, variants } from "../constants";

function getBackgroundColor(variant, themeData) {
  if (variant === variants.BOX) {
    return themeData["tabs.box.wrapper.backgroundColor"];
  }
  if (variant === variants.CANVAS) {
    return themeData["tabs.canvas.wrapper.backgroundColor"];
  }
  return "transparent";
}

export default function stylesheet(props, themeData) {
  const { align, orientation, stylesheet: customStylesheet, variant } = props;

  const justifyContent = {
    [alignments.LEFT]: "flex-start",
    [alignments.CENTER]: "center",
    [alignments.RIGHT]: "flex-end",
  };

  const styles = {
    wrapper: {
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexDirection: orientation === orientations.HORIZONTAL ? "column" : "row",
    },
    tabsWrapper: {
      boxSizing: "border-box",
      flexGrow: 0,
      flexShrink: 0,
      display: "flex",
      padding: 0,
      margin: 0,
      justifyContent: justifyContent[align],
      borderBottom:
        variant === variants.UNDERLINE
          ? `${themeData["tabs.underline.wrapper.borderBottomWidth"]} solid ${themeData["tabs.underline.wrapper.borderBottomColor"]}`
          : 0,
      backgroundColor: getBackgroundColor(variant, themeData),

      ...(orientation === orientations.VERTICAL && {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
      }),
    },
  };

  if (customStylesheet) {
    return customStylesheet(styles, props, themeData);
  }

  return styles;
}
