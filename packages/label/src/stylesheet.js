export default function stylesheet(props, themeData) {
  const { variant } = props;
  return {
    label: {
      fontSize:
        variant === "side"
          ? themeData["label.fontSize"]
          : themeData["label.top.fontSize"],
      fontFamily: themeData["label.fontFamily"],
      fontWeight: themeData["label.fontWeight"],
      lineHeight: themeData["label.lineHeight"],
      color: themeData["label.fontColor"],
      opacity: props.disabled ? themeData["component.disabled.opacity"] : "1.0"
    }
  };
}
