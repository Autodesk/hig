export default function stylesheet(props, themeData, theme) {
  const { stylesheet: customStylesheet } = props;
  const styles = {
    timestamp: {
      color:
        theme === "hig-light"
          ? "#4b6b8f"
          : themeData["colorScheme.textColorDim"],
      fontFamily: themeData["basics.fontFamilies.main"],
      fontSize: "12px",
      fontWeight: themeData["basics.fontWeights.regular"],
      lineHeight: "18px",
      margin: 0
    }
  };

  return customStylesheet
    ? customStylesheet(styles, props, themeData, theme)
    : styles;
}
