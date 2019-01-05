export default function stylesheet(props, themeData) {
  return {
    label: {
      fontSize: themeData["label.fontSize"],
      fontFamily: themeData["label.fontFamily"],
      fontWeight: themeData["label.fontWeight"],
      lineHeight: themeData["label.lineHeight"],
      color: themeData["label.fontColor"],
      opacity: props.disabled ? themeData["component.disabled.opacity"] : "1.0"
    }
  };
}
