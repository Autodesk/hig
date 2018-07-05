export default function stylesheet(props, themeData) {
  return {
    label: {
      fontSize: themeData.LABEL_FONT_SIZE,
      fontFamily: themeData.LABEL_FONT_FAMILY,
      fontWeight: themeData.LABEL_FONT_WEIGHT,
      lineHeight: themeData.LABEL_LINE_HEIGHT,
      color: props.disabled
        ? themeData.LABEL_DISABLED_FONT_COLOR
        : themeData.LABEL_FONT_COLOR
    }
  };
}
