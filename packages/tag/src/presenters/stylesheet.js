const getDefaultStyles = (themeData, selected) => {
  if (selected) {
    return {
      background: themeData["tag.on.default.backgroundColor"],
      border: `${themeData["tag.borderWidth"]} solid ${themeData["tag.on.default.borderColor"]}`,
    };
  }

  return {
    background: themeData["tag.default.backgroundColor"],
    border: `${themeData["tag.borderWidth"]} solid ${themeData["tag.default.borderColor"]}`,
  };
};

const getStylesByFocus = (themeData, selected, onClose) => {
  if (selected && onClose) {
    return {};
  }

  if (selected) {
    return {
      background: themeData["tag.on.focus.backgroundColor"],
      borderColor: themeData["tag.on.focus.borderColor"],
      boxShadow: `0 0 0 ${themeData["tag.focus.haloWidth"]} ${themeData["tag.on.focus.haloColor"]}`,
    };
  }

  return {
    background: themeData["tag.focus.backgroundColor"],
    borderColor: themeData["tag.focus.borderColor"],
    boxShadow: `0 0 0 ${themeData["tag.focus.haloWidth"]} ${themeData["tag.focus.haloColor"]}`,
  };
};

const getStylesByHover = (themeData, selected, onClose) => {
  const sharedHoverStyles = {
    boxShadow: `0 0 0 ${themeData["tag.hover.haloWidth"]} transparent`,
    cursor: "pointer",
  };

  if (selected && onClose) {
    return {};
  }

  if (selected) {
    return {
      background: themeData["tag.on.hover.backgroundColor"],
      borderColor: themeData["tag.on.hover.borderColor"],
      ...sharedHoverStyles,
    };
  }

  return {
    background: themeData["tag.hover.backgroundColor"],
    borderColor: themeData["tag.hover.borderColor"],
    ...sharedHoverStyles,
  };
};

const getStylesByPressed = (themeData, selected, onClose) => {
  const sharedPressedStyles = {
    boxShadow: `0 0 0 ${themeData["tag.hover.haloWidth"]} transparent`,
  };

  if (selected && onClose) {
    return {};
  }

  if (selected) {
    return {
      background: themeData["tag.on.pressed.backgroundColor"],
      borderColor: themeData["tag.on.pressed.borderColor"],
      ...sharedPressedStyles,
    };
  }

  return {
    background: themeData["tag.pressed.backgroundColor"],
    borderColor: themeData["tag.pressed.borderColor"],
    ...sharedPressedStyles,
  };
};

const getStylesByDisabled = (themeData) => ({
  opacity: themeData["colorScheme.opacity.disabled"],
  pointerEvents: "none",
});

export default function stylesheet(props, themeData, themeMeta) {
  const {
    disabled,
    hasFocus,
    hasHover,
    isPressed,
    onClose,
    selected,
    stylesheet: customStylsheet,
  } = props;

  const styles = {
    tag: {
      wrapper: {
        borderRadius: themeData["tag.borderRadii"],
        boxShadow: `0 0 0 0 transparent`,
        color: themeData["tag.label.fontColor"],
        display: "inline-flex",
        fontFamily: themeData["tag.label.fontFamily"],
        fontSize: themeData["tag.label.fontSize"],
        fontWeight: themeData["tag.label.fontWeight"],
        outline: 0,
        padding: `${themeData["tag.paddingVertical"]} 
          ${themeData["tag.paddingRight"]}
          ${themeData["tag.paddingVertical"]}
          ${themeData["tag.paddingLeft"]}`,
        transitionDuration: "0.3s, 0.3s",
        transitionProperty: "box-shadow, background-color",
        transitionTimingFunction:
          "cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1)",
        ...getDefaultStyles(themeData, selected),
        ...(hasFocus ? getStylesByFocus(themeData, selected, onClose) : {}),
        ...(hasHover ? getStylesByHover(themeData, selected, onClose) : {}),
        ...(isPressed ? getStylesByPressed(themeData, selected, onClose) : {}),
        ...(disabled ? getStylesByDisabled(themeData) : {}),
      },
      labelWrapper: {
        display: "inline-flex",
        marginRight: themeData["tag.label.marginRight"],
      },
      closeWrapper: {
        alignItems: "center",
        display: "inline-flex",
        "& > svg > *": {
          fill: themeData["tag.closeButton.iconColor"],
        },
      },
    },
  };

  return customStylsheet
    ? customStylsheet(styles, props, themeData, themeMeta)
    : styles;
}
