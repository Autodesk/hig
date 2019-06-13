function legacyStylesheet(props, themeData) {
  const { isPressed, hasFocus, hasHover, disabled } = props;
  const opacity = disabled ? themeData["component.disabled.opacity"] : "1.0";

  let borderStyle = `solid ${themeData["checkbox.borderWidth"]} ${
    themeData["checkbox.borderColor"]
  }`;

  if (disabled) {
    // do nothing
  } else if (isPressed) {
    borderStyle = `solid ${themeData["checkbox.borderWidth"]} ${
      themeData["checkbox.focus.borderColor"]
    }`;
  } else if (hasFocus) {
    borderStyle = `solid ${themeData["checkbox.borderWidth"]} ${
      themeData["checkbox.focus.borderColor"]
    }`;
  } else if (hasHover) {
    // checkbox doesn't have an equivalent for this color
    borderStyle = `solid ${themeData["checkbox.borderWidth"]} ${
      themeData["button.solid.hover.backgroundColor"]
    }`;
  }

  return {
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
      border: borderStyle,
      backgroundColor: "transparent",
      textAlign: "center",
      fontSize: "25px",
      lineHeight: "14px",
      height: themeData["checkbox.height"],
      width: themeData["checkbox.width"],
      borderRadius: "50%"
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

      // todo: remove once checked behavior has been
      // integrated into react
      "&:checked + span": {
        backgroundColor: themeData["checkbox.checked.borderColor"],
        boxShadow: `inset 0 0 0 ${themeData["checkbox.borderRadius"]} ${
          themeData["checkbox.backgroundColor"]
        }`
      }
    }
  };
}

export default function stylesheet(props, themeData, theme) {
  if (theme === "hig-light") {
    return legacyStylesheet(props, themeData);
  }

  const { isPressed, hasFocus, hasHover, disabled } = props;
  const opacity = disabled ? themeData["component.disabled.opacity"] : "1.0";
  // because we don't have access to the checked status in react, we need to
  // write css rules to handle both cases
  const borderColor =
    hasFocus && !hasHover
      ? themeData["checkbox.focus.borderColor"]
      : themeData["checkbox.borderColor"];
  const checkedInnerShadow = `inset 0 0 0 ${
    themeData["checkbox.pressed.halo.width"]
  } ${themeData["checkbox.checked.backgroundColor"]}`;
  const uncheckedInnerShadow = `inset 0 0 0 ${
    themeData["checkbox.borderWidth"]
  } 
    ${borderColor}
  `;
  let outerShadow = "0 0 0 0px transparent";

  if (disabled) {
    // do nothing
  } else if (isPressed) {
    outerShadow = `0 0 0 ${themeData["checkbox.pressed.halo.width"]} ${
      themeData["checkbox.pressed.halo.color"]
    }`;
  } else if (hasHover) {
    outerShadow = `0 0 0 ${themeData["checkbox.hover.halo.width"]} ${
      themeData["checkbox.hover.halo.color"]
    }`;
  } else if (hasFocus) {
    outerShadow = `0 0 0 ${themeData["checkbox.focus.halo.width"]} ${
      themeData["checkbox.focus.halo.color"]
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
      height: themeData["checkbox.height"],
      width: themeData["checkbox.width"],
      borderRadius: "50%",
      boxShadow: `${uncheckedInnerShadow},${outerShadow}`
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

  return styles;
}
