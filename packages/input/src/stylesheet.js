function inputStyles({ isDisabled, hasFocus, hasHover }, themeData) {
  const defaults = {
    borderBottomColor: themeData.INPUT_BORDER_BOTTOM_COLOR,
    color: themeData.INPUT_FONT_COLOR,
    transitionProperty: "color",
    transitionDuration: "0.3s"
  };

  if (isDisabled) {
    return {
      ...defaults,
      borderBottomColor: themeData.INPUT_BORDER_BOTTOM_DISABLED_COLOR,
      color: themeData.INPUT_DISABLED_FONT_COLOR
    };
  }
  if (hasFocus) {
    return {
      ...defaults,
      borderBottomColor: themeData.INPUT_BORDER_BOTTOM_FOCUS_COLOR,
      transitionDuration: "0"
    };
  }
  if (hasHover) {
    return {
      ...defaults,
      borderBottomColor: themeData.INPUT_BORDER_BOTTOM_HOVER_COLOR,
      transitionDuration: "0"
    };
  }
  return defaults;
}

function haloStyles({ isDisabled, hasFocus, hasHover }, themeData) {
  const defaults = {
    height: 0,
    backgroundColor: themeData.INPUT_HALO_COLOR,
    transitionProperty: "height, color",
    transitionDuration: "0.3s, 0.3s"
  };

  if (isDisabled) {
    return {};
  }
  if (hasFocus) {
    return {
      height: themeData.INPUT_HALO_FOCUS_WIDTH,
      backgroundColor: themeData.INPUT_HALO_FOCUS_COLOR,
      transitionDuration: "0, 0"
    };
  }
  if (hasHover) {
    return {
      ...defaults,
      height: themeData.INPUT_HALO_HOVER_WIDTH,
      transitionDuration: "0, 0"
    };
  }
  return defaults;
}

export default function stylesheet(props, themeData) {
  return {
    inputWrapper: {
      position: "relative",
      width: "300px"
    },
    input: {
      boxSizing: "border-box",
      appearance: "none",
      minHeight: themeData.INPUT_MIN_HEIGHT,
      paddingTop: themeData["DENSITY.INPUT_VERTICAL_PADDING"],
      paddingBottom: themeData["DENSITY.INPUT_VERTICAL_PADDING"],
      borderTop: "none",
      borderRight: "none",
      borderBottomWidth: themeData.INPUT_BORDER_BOTTOM_WIDTH,
      borderLeft: "none",
      outline: "none",
      fontSize: themeData["DENSITY.FONT_SIZES.M"],
      width: "100%",
      ...inputStyles(props, themeData)
    },
    halo: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      ...haloStyles(props, themeData)
    }
  };
}
