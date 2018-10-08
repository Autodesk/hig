export default function stylesheet(props, themeData) {
  return {
    label: {
      fontSize: themeData["label.fontSize"],
      fontFamily: themeData["label.fontFamily"],
      fontWeight: themeData["label.fontWeight"],
      lineHeight: themeData["label.lineHeight"],
      color: props.disabled
        ? themeData["label.disabled.fontColor"]
        : themeData["label.fontColor"]
    }
  };
}
