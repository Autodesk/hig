export default function stylesheet(props, themeData) {
  const { disabled, stylesheet: customStylesheet, variant } = props;
  const styles = {
    label: {
      fontSize:
        variant === "side"
          ? themeData["label.fontSize"]
          : themeData["label.top.fontSize"],
      fontFamily: themeData["label.fontFamily"],
      fontWeight: themeData["label.fontWeight"],
      lineHeight: themeData["label.lineHeight"],
      color: themeData["label.fontColor"],
      opacity: disabled ? themeData["colorScheme.opacity.disabled"] : "1.0",
    },
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
