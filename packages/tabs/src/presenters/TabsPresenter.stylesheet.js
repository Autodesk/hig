import { alignments, variants, orientations } from "../constants";

function getBackgroundColor(variant, themeData) {
  if (variant === variants.BOX) {
    return themeData["tabs.box.wrapper.backgroundColor"];
  }
  if (variant === variants.CANVAS) {
    return themeData["tabs.canvas.wrapper.backgroundColor"];
  }
  return "transparent";
}

export default function stylesheet({ align, variant, orientation }, themeData) {
  const justifyContent = {
    [alignments.LEFT]: "flex-start",
    [alignments.CENTER]: "center",
    [alignments.RIGHT]: "flex-end"
  };

  return {
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
        alignItems: "stretch"
      })
    }
  };
}
