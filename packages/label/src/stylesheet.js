export default function stylesheet(props, themeData) {
  return {
    label: {
      fontSize: themeData["LABEL.FONT_SIZE"],
      fontFamily: themeData["LABEL.FONT_FAMILY"],
      fontWeight: themeData["LABEL.FONT_WEIGHT"],
      lineHeight: themeData["LABEL.LINE_HEIGHT"],
      color: props.disabled
        ? themeData["LABEL.DISABLED.FONT_COLOR"]
        : themeData["LABEL.FONT_COLOR"]
    }
  };
}
