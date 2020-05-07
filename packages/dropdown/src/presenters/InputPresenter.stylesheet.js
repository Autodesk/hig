function getActiveStyles(isOpen) {
  if (isOpen) {
    return {
      transform: "translateY(-50%) rotate(180deg)"
    };
  }
  return {
    transform: "translateY(-50%)"
  };
}

export default function stylesheet(props, themeData) {
  const padding =
    props.variant === "box"
      ? themeData["input.box.paddingHorizontal"]
      : themeData["input.line.paddingHorizontal"];
  const { isOpen } = props;

  return {
    wrapper: {
      position: "relative"
    },
    caret: {
      position: "absolute",
      top: "50%",
      right: padding,
      opacity: props.disabled ? themeData["colorScheme.opacity.disabled"] : 1,
      pointerEvents: "none",
      transition: "transform 0.3s, color 0.3s",
      ...getActiveStyles(isOpen)
    }
  };
}
