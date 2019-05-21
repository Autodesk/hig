import { variants } from "../constants";

export default function stylesheet(props, themeData) {
  const padding =
    props.variant === variants.BOX
      ? themeData["input.boxType.horizontalPadding"]
      : themeData["input.horizontalPadding"];

  const caret = {
    position: "absolute",
    width: 10,
    height: 10,
    right: padding,
    opacity: props.disabled ? themeData["component.disabled.opacity"] : 1,
    pointerEvents: "none",
    transition: "transform 0.3s, color 0.3s"
  };

  return {
    caretUp: {
      ...caret,
      top: "40%",
      transform: "translateY(-60%)"
    },

    caretDown: {
      ...caret,
      top: "60%",
      transform: "translateY(-40%)"
    }
  };
}
