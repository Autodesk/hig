function getIconColor({ hasHover, isPressed }, themeData) {
  if (isPressed) return themeData["tabs.closeButton.pressed.iconColor"];
  if (hasHover) return themeData["tabs.closeButton.hover.iconColor"];
  return themeData["tabs.closeButton.default.iconColor"];
}

export default function stylesheet({ hasHover, isPressed }, themeData) {
  return {
    button: {
      boxShadow: "none",
      backgroundColor: "transparent",
      outline: "none",
      border: "none",
      padding: "0",
      margin: "0",
      width: themeData["tabs.closeButton.minSize"],
      height: themeData["tabs.closeButton.minSize"],
      cursor: "pointer",

      "& svg *": {
        fill: getIconColor({ hasHover, isPressed }, themeData),
        transitionDuration: `0.3s`,
        transitionProperty: `fill`
      }
    }
  };
}
