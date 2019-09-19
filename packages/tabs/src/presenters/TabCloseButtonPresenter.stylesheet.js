function getIconColor({ hasHover, isPressed }, themeData) {
  if (isPressed) return themeData["tabs.general.closeButton.pressed.color"];
  if (hasHover) return themeData["tabs.general.closeButton.hover.color"];
  return themeData["tabs.general.closeButton.color"];
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
      width: themeData["tabs.general.closeButton.size"],
      height: themeData["tabs.general.closeButton.size"],
      cursor: "pointer",

      "& svg *": {
        fill: getIconColor({ hasHover, isPressed }, themeData),
        transitionDuration: `0.3s`,
        transitionProperty: `fill`
      }
    }
  };
}
