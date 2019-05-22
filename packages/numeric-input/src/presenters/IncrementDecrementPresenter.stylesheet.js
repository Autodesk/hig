export default function stylesheet(props, themeData) {
  return {
    scrollers: {
      display: "flex",
      flexDirection: "column",
      justifySelf: "flex-end"
    },

    button: {
      backgroundColor: "transparent",
      zIndex: 1,
      border: "none",
      height: 10,
      width: 10,
      position: "relative"
    },

    caret: {
      position: "absolute",
      zIndex: 0,
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      opacity: props.disabled ? themeData["component.disabled.opacity"] : 1
    }
  };
}
