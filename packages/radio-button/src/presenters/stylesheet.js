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
    radioButton: {
      display: "inline-block",
      padding: "0 10px"
    },

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
      },

      "&:checked:focus + span": {
        backgroundColor: themeData["checkbox.focus.checked.backgroundColor"],
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
  let wrapperBoxShadowStyle = `inset 0 0 0 ${
    themeData["checkbox.borderWidth"]
  } ${themeData["checkbox.borderColor"]}`;

  if (disabled) {
    // do nothing
  } else if (isPressed) {
    wrapperBoxShadowStyle = `inset 0 0 0 ${themeData["checkbox.borderWidth"]} ${
      themeData["checkbox.checked.backgroundColor"]
    }, 0 0 0 ${themeData["checkbox.pressed.halo.width"]} ${
      themeData["checkbox.focus.halo.color"]
    }`;
  } else if (hasFocus) {
    wrapperBoxShadowStyle = `inset 0 0 0 ${themeData["checkbox.borderWidth"]} ${
      themeData["checkbox.borderColor"]
    }, 0 0 0 ${themeData["checkbox.focus.halo.width"]} ${
      themeData["checkbox.focus.halo.color"]
    }`;
  } else if (hasHover) {
    wrapperBoxShadowStyle = `inset 0 0 0 ${themeData["checkbox.borderWidth"]} ${
      themeData["checkbox.borderColor"]
    }, 0 0 0 ${themeData["checkbox.hover.halo.width"]} ${
      themeData["checkbox.hover.halo.color"]
    }`;
  }

  return {
    radioButton: {
      display: "inline-block",
      padding: "0 10px"
    },

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
      boxShadow: wrapperBoxShadowStyle
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
        boxShadow: `inset 0 0 0 ${themeData["checkbox.pressed.halo.width"]} ${
          themeData["checkbox.checked.backgroundColor"]
        }`
      },

      "&:checked:focus + span": {
        boxShadow: `inset 0 0 0 ${themeData["checkbox.pressed.halo.width"]} ${
          themeData["checkbox.checked.backgroundColor"]
        }, 0 0 0 ${themeData["checkbox.focus.halo.width"]} ${
          themeData["checkbox.focus.halo.color"]
        }`
      }
    }
  };
}
