import constants from "./constants";

export default function stylesheet(props, themeData) {
  return {
    wrapper: {
      display: "relative"
    },

    input: styles => Object.assign(styles, { fontWeight: 600 }),

    caret: {
      position: "absolute",
      top: `calc(${constants.menuTopOffset} / 2 - 4px)`,
      right: "7px",
      padding: "0 10px",
      opacity: props.disabled ? themeData["component.disabled.opacity"] : 1
    }
  };
}
