import constants from "./constants";

export default function stylesheet(props, themeData) {
  return {
    display: props.isOpen ? "block" : "none",
    position: "absolute",
    minWidth: "240px",
    maxHeight: constants.menuMaxHeight,
    top: constants.menuTopOffset,
    overflow: "auto",
    zIndex: constants.dropdownLayer,

    border: `1px solid ${themeData["menu.backgroundColor"]}`,
    borderTop: "none",
    borderTopLeftRadius: themeData["menu.topFlushBorderTopRadius"],
    borderTopRightRadius: themeData["menu.topFlushBorderTopRadius"],
    borderBottomLeftRadius: themeData["menu.borderRadius"],
    borderBottomRightRadius: themeData["menu.borderRadius"],
    backgroundColor: themeData["menu.backgroundColor"],
    boxShadow: `0 1px ${themeData["basics.shadows.lowBlur"]} ${
      themeData["colorScheme.lowShadowColor"]
    }`
  };
}
