export default function stylesheet(props, themeData) {
  const {
    isPressed,
    hasFocus,
    hasHover,
    disabled,
    stylesheet: customStylesheet
  } = props;
  const opacity = disabled ? themeData["colorScheme.opacity.disabled"] : "1.0";
  // because we don't have access to the checked status in react, we need to
  // write css rules to handle both cases
  const borderColor =
    hasFocus && !hasHover
      ? themeData["checkbox.unchecked.focus.borderColor"]
      : themeData["checkbox.unchecked.default.borderColor"];
  const checkedInnerShadow = `inset 0 0 0 ${
    themeData["checkbox.pressed.haloWidth"]
  } ${themeData["checkbox.checked.default.backgroundColor"]}`;
  const uncheckedInnerShadow = `inset 0 0 0 ${
    themeData["checkbox.borderWidth"]
  } 
    ${borderColor}
  `;
  let outerShadow = "0 0 0 0px transparent";

  if (disabled) {
    // do nothing
  } else if (isPressed) {
    outerShadow = `0 0 0 ${themeData["checkbox.pressed.haloWidth"]} ${
      themeData["checkbox.pressed.haloColor"]
    }`;
  } else if (hasHover) {
    outerShadow = `0 0 0 ${themeData["checkbox.hover.haloWidth"]} ${
      themeData["checkbox.hover.haloColor"]
    }`;
  } else if (hasFocus) {
    outerShadow = `0 0 0 ${themeData["checkbox.focus.haloWidth"]} ${
      themeData["checkbox.focus.haloColor"]
    }`;
  }

  const styles = {
    radioButtonContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },

    radioButtonWrapper: {
      opacity,
      position: "relative",
      color: "transparent",
      border: "none",
      backgroundColor: "transparent",
      textAlign: "center",
      fontSize: "25px",
      lineHeight: "14px",
      height: themeData["checkbox.minHeight"],
      width: themeData["checkbox.minWidth"],
      borderRadius: "50%",
      boxShadow: `${uncheckedInnerShadow},${outerShadow}`,
      transitionDuration: "0.3s, 0.3s",
      transitionProperty: "box-shadow, background-color",
      transitionTimingFunction:
        "cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1)"
    },

    // this maps to .radio-button__input
    radioButtonInput: {
      display: "inline-block",
      opacity: "0",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      margin: "0",
      padding: "0",
      zIndex: "1",

      "&:checked + span": {
        boxShadow: `${checkedInnerShadow},${outerShadow}`
      }
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
