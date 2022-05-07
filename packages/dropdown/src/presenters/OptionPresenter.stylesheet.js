export default function stylesheet(props, themeData) {
  const { stylesheet: customStylesheet } = props;
  const styles = {
    option: {
      margin: 0,
      display: "flex",
      position: "relative",
      boxSizing: "border-box",
      minHeight: themeData[`menu.item.minHeight`],
      alignItems: "center",
      padding: `${themeData["menu.item.paddingVertical"]}
        ${themeData["menu.item.paddingHorizontal"]}`,
      cursor: "pointer",
      color: themeData[`typography.body.color`],
      fontFamily: themeData[`typography.body.fontFamily`],
      fontWeight: themeData[`typography.body.fontWeight`],
      fontSize: themeData[`typography.body.fontSize`],
      lineHeight: themeData[`typography.body.lineHeight`],
      backgroundColor: "transparent",
      transition: `background-color 0.3s cubic-bezier(0.4,0,0.2,1)`,
      ...(props.highlighted && !props.disabled
        ? { backgroundColor: themeData["menu.item.hover.backgroundColor"] }
        : null),
      ...(props.disabled
        ? { opacity: themeData["colorScheme.opacity.disabled"] }
        : null),
      "&:active": {
        backgroundColor: themeData[`menu.item.pressed.backgroundColor`],
      },
    },
    optionCheckWrapper: {
      height: themeData[`menu.item.minHeight`],
      marginRight: themeData[`menu.item.paddingHorizontal`],
      display: `flex`,
      order: -1,
      alignItems: `center`,
      "& > svg *": {
        transition: `opacity 0.3s cubic-bezier(0.4,0,0.2,1)`,
        opacity: 0,
        ...(props.highlighted && !props.disabled
          ? {
              opacity: 1,
              fill: themeData[`menu.item.checkmark.hover.iconColor`],
              transition: `opacity 0.3s cubic-bezier(0.4,0,0.2,1)`,
            }
          : {}),
        ...(props.selected
          ? {
              opacity: 1,
              fill: themeData[`menu.item.checkmark.active.iconColor`],
              transition: `opacity 0.3s cubic-bezier(0.4,0,0.2,1)`,
            }
          : {}),
      },
    },
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
