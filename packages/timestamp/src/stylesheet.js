export default function stylesheet(themeData, theme) {
  return {
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
}
