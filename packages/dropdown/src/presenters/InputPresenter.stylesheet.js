export default function stylesheet(props, themeData) {
  const padding = props.variant === "box" ? themeData["input.boxType.horizontalPadding"] : themeData["input.horizontalPadding"];
  
  return {
    wrapper: {
      position: "relative"
    },

    input: styles => Object.assign(styles, { fontWeight: 600 }),

    caret: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: padding,
      opacity: props.disabled ? themeData["component.disabled.opacity"] : 1,
      pointerEvents: "none"
    }
  };
}
