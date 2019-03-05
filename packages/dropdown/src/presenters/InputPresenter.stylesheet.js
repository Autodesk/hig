export default function stylesheet(props, themeData) {
  return {
    wrapper: {
      position: "relative"
    },

    input: styles => Object.assign(styles, { fontWeight: 600 }),

    caret: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: "7px",
      padding: "0 10px",
      opacity: props.disabled ? themeData["component.disabled.opacity"] : 1,
      pointerEvents: "none"
    }
  };
}
