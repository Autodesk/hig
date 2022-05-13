import constants from "./constants";

export default function stylesheet(props, themeData) {
  const { stylesheet: customStylesheet } = props;
  const styles = {
    menu: {
      display: props.isOpen ? "block" : "none",
      position: "absolute",
      width: "100%",
      maxHeight: constants.menuMaxHeight,
      top: themeData["input.minHeight"],
      overflow: "auto",
      zIndex: constants.dropdownLayer,
      boxSizing: "border-box",
      borderTop: "none",
      borderTopLeftRadius: themeData["menu.topFlushBorderTopRadius"],
      borderTopRightRadius: themeData["menu.topFlushBorderTopRadius"],
      borderBottomLeftRadius: themeData["menu.borderRadius"],
      borderBottomRightRadius: themeData["menu.borderRadius"],
      backgroundColor: themeData["menu.backgroundColor"],
      boxShadow: `0 1px ${themeData["basics.shadows.lowBlur"]} ${themeData["colorScheme.shadow.low"]}`,
    },
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
