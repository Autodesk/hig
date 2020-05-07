function getCheckboxRulesByFocus(themeData) {
  return {
    borderColor: themeData["checkbox.unchecked.focus.borderColor"],
    boxShadow: `0 0 0 ${themeData["checkbox.focus.haloWidth"]}
      ${themeData["checkbox.focus.haloColor"]}`
  };
}

function getCheckboxRulesByHover(themeData) {
  return {
    borderColor: themeData["checkbox.unchecked.default.borderColor"],
    boxShadow: `0 0 0 ${themeData["checkbox.hover.haloWidth"]} ${
      themeData["checkbox.hover.haloColor"]
    }`
  };
}

function getCheckboxRulesByPressed(themeData) {
  return {
    borderColor: themeData["checkbox.unchecked.default.borderColor"],
    boxShadow: `0 0 0 ${themeData["checkbox.pressed.haloWidth"]} ${
      themeData["checkbox.pressed.haloColor"]
    }`
  };
}

function getCheckboxRulesByDisabled(themeData) {
  return {
    opacity: themeData["colorScheme.opacity.disabled"],
    boxShadow: `none`,
    pointerEvents: `none`
  };
}

function getCheckboxRulesByChecked(themeData) {
  return {
    border: `none`,
    backgroundColor: themeData["checkbox.checked.default.backgroundColor"]
  };
}

function getCheckboxRulesByIndeterminate(themeData) {
  return {
    border: `none`,
    backgroundColor: themeData["checkbox.checked.default.backgroundColor"]
  };
}

export default function stylesheet(props, themeData) {
  const {
    checked,
    disabled,
    hasFocus,
    hasHover,
    indeterminate,
    isPressed
  } = props;

  return {
    checkboxWrapper: {
      boxSizing: `border-box`,
      display: `inline-block`,
      position: `relative`,
      height: themeData["checkbox.minHeight"],
      width: themeData["checkbox.minWidth"]
    },
    checkboxCheckWrapper: {
      position: `relative`,
      display: `block`,
      boxSizing: `border-box`,
      color: `transparent`,
      border: `${themeData["checkbox.borderWidth"]} solid
        ${themeData["checkbox.unchecked.default.borderColor"]}`,
      backgroundColor: `transparent`,
      textAlign: `center`,
      fontSize: `25px`,
      lineHeight: `14px`,
      height: themeData["checkbox.minHeight"],
      width: themeData["checkbox.minWidth"],
      borderRadius: themeData["checkbox.borderRadius"],
      cursor: hasHover ? `pointer` : `default`,
      transitionDuration: "0.3s, 0.3s",
      transitionProperty: "box-shadow, border",
      transitionTimingFunction:
        "cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1)",
      // eslint-disable-next-line prettier/prettier
      "svg": {
        position: `absolute`,
        left: `50%`,
        top: `50%`,
        transform: `translateX(-50%) translateY(-50%)`,
        pointerEvents: `none`,
        "*": {
          fill: themeData["checkbox.indicatorColor"]
        }
      },
      ...(hasFocus ? getCheckboxRulesByFocus(themeData) : {}),
      ...(hasHover ? getCheckboxRulesByHover(themeData) : {}),
      ...(isPressed ? getCheckboxRulesByPressed(themeData) : {}),
      ...(disabled ? getCheckboxRulesByDisabled(themeData) : {}),
      ...(checked ? getCheckboxRulesByChecked(themeData) : {}),
      ...(indeterminate ? getCheckboxRulesByIndeterminate(themeData) : {})
    },
    checkboxInput: {
      opacity: 0,
      position: `absolute`,
      width: `100%`,
      height: `100%`,
      top: 0,
      left: 0,
      zIndex: 1,
      padding: 0,
      margin: 0
    },
    checkboxCheck: {
      display: checked && !indeterminate ? `block` : `none`
    },
    checkboxIndeterminate: {
      display: indeterminate ? `block` : `none`
    }
  };
}
