function getCheckboxRulesByFocus(themeData) {
  return {
    borderColor: `${themeData["checkbox.focus.borderColor"]}`,
    boxShadow: `0 0 0 ${themeData["checkbox.focus.halo.width"]}
      ${themeData["checkbox.focus.halo.color"]}`
  };
}

function getCheckboxRulesByHover(themeData) {
  return {
    boxShadow: `0 0 0 ${themeData["checkbox.hover.halo.width"]} ${
      themeData["checkbox.hover.halo.color"]
    }`
  };
}

function getCheckboxRulesByPressed(themeData) {
  return {
    boxShadow: `0 0 0 ${themeData["checkbox.pressed.halo.width"]} ${
      themeData["checkbox.pressed.halo.color"]
    }`
  };
}

function getCheckboxRulesByDisabled(themeData) {
  return {
    opacity: themeData["component.disabled.opacity"],
    boxShadow: `none`,
    pointerEvents: `none`
  };
}

function getCheckboxRulesByChecked(themeData) {
  return {
    backgroundColor: `${themeData["checkbox.checked.backgroundColor"]}`
  };
}

function getCheckboxRulesByIndeterminate(themeData) {
  return {
    backgroundColor: `${themeData["checkbox.indeterminate.backgroundColor"]}`
  };
}

function getCheckboxRulesByLegacyTheme(themeData, props) {
  const { checked, disabled, hasFocus, indeterminate } = props;

  return {
    ...(!checked && !hasFocus && !indeterminate
      ? {
          backgroundColor: `${themeData["checkbox.backgroundColor"]}`
        }
      : {}),
    ...(hasFocus
      ? {
          backgroundColor: `${themeData["checkbox.backgroundColor"]}`
        }
      : {}),
    ...(checked
      ? {
          backgroundColor: `${themeData["checkbox.checked.backgroundColor"]}`,
          borderColor: `${themeData["checkbox.checked.borderColor"]}`
        }
      : {}),
    ...(checked && hasFocus
      ? {
          backgroundColor: `${
            themeData["checkbox.focus.checked.backgroundColor"]
          }`,
          borderColor: `${themeData["checkbox.focus.checked.borderColor"]}`
        }
      : {}),
    ...(indeterminate
      ? {
          backgroundColor: `${
            themeData["checkbox.indeterminate.backgroundColor"]
          }`,
          borderColor: `${themeData["checkbox.indeterminate.borderColor"]}`
        }
      : {}),
    ...(indeterminate && hasFocus
      ? {
          borderColor: `${
            themeData["checkbox.focus.indeterminate.borderColor"]
          }`
        }
      : {}),
    ...(disabled
      ? {
          borderStyle: `dotted`,
          opacity: themeData["component.disabled.opacity"]
        }
      : {}),
    ...(disabled && indeterminate
      ? {
          opacity: themeData["component.disabled.opacity"]
        }
      : {}),
    ...(disabled && checked && !indeterminate
      ? {
          backgroundColor: `${themeData["checkbox.backgroundColor"]}`,
          opacity: themeData["component.disabled.opacity"]
        }
      : {})
  };
}

export default function stylesheet(props, themeData, theme) {
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
      height: `${themeData["checkbox.height"]}`,
      width: `${themeData["checkbox.width"]}`
    },
    checkboxCheckWrapper: {
      position: `relative`,
      display: `block`,
      boxSizing: `border-box`,
      color: `transparent`,
      border: `${themeData["checkbox.borderWidth"]} solid
        ${themeData["checkbox.borderColor"]}`,
      backgroundColor: `transparent`,
      textAlign: `center`,
      fontSize: `25px`,
      lineHeight: `14px`,
      height: `${themeData["checkbox.height"]}`,
      width: `${themeData["checkbox.width"]}`,
      borderRadius: `${themeData["checkbox.borderRadius"]}`,
      cursor: hasHover ? `pointer` : `default`,
      // eslint-disable-next-line prettier/prettier
      "svg": {
        position: `absolute`,
        left: `50%`,
        top: `50%`,
        transform: `translateX(-50%) translateY(-50%)`,
        pointerEvents: `none`,
        "*": {
          fill: `${themeData["checkbox.iconColor"]}`
        }
      },
      ...(hasFocus ? getCheckboxRulesByFocus(themeData) : {}),
      ...(hasHover ? getCheckboxRulesByHover(themeData) : {}),
      ...(isPressed ? getCheckboxRulesByPressed(themeData) : {}),
      ...(disabled ? getCheckboxRulesByDisabled(themeData) : {}),
      ...(checked ? getCheckboxRulesByChecked(themeData) : {}),
      ...(indeterminate ? getCheckboxRulesByIndeterminate(themeData) : {}),
      ...(theme === `hig-light`
        ? getCheckboxRulesByLegacyTheme(themeData, props)
        : {})
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
