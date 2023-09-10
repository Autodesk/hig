export default function iconOnlyStylesheet(
  styles,
  props,
  themeData,
  themeMeta
) {
  const iconSize = themeMeta.densityId === "medium-density" ? "18px" : "14px";

  return {
    ...styles,
    button: {
      ...styles.button,
      padding: `${themeData["button.paddingVertical"]}`,
    },
    icon: {
      ...styles.icon,
      left: 0,

      marginRight: 0,
      right: 0,
    },
    iconText: {
      marginLeft: iconSize,
    },
  };
}
