import constants from "./constants";

export default function stylesheet(props, themeData) {
  return {
    margin: 0,
    display: "flex",
    position: "relative",
    boxSizing: "border-box",
    minHeight: constants.optionHeight,
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8px",
    cursor: "pointer",
    color: themeData[`typography.body.color`],
    fontFamily: themeData[`typography.body.fontFamily`],
    fontWeight: themeData[`typography.body.fontWeight`],
    fontSize: themeData[`typography.body.fontSize`],
    lineHeight: themeData[`typography.body.lineHeight`],
    backgroundColor: "transparent",
    ...(props.highlighted && !props.disabled
      ? { backgroundColor: themeData["menu.item.hover.backgroundColor"] }
      : null),
    ...(props.selected
      ? { backgroundColor: themeData["menu.item.focus.backgroundColor"] }
      : null),
    ...(props.disabled
      ? { opacity: themeData["component.disabled.opacity"] }
      : null)
  };
}
