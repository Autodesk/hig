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
    borderColor: `${themeData["checkbox.disabled.borderColor"]}`,
    boxShadow: `none`,
    pointerEvents: `none`
  };
}

function getCheckboxRulesByChecked(themeData, disabled) {
  if (disabled) {
    return {
      backgroundColor: `${
        themeData["checkbox.disabled.checked.backgroundColor"]
      }`,
      borderColor: `${themeData["checkbox.disabled.checked.borderColor"]}`
    };
  }

  return {
    backgroundColor: `${themeData["checkbox.checked.backgroundColor"]}`
  };
}

function getCheckboxRulesByIndeterminate(themeData, disabled) {
  if (disabled) {
    return {
      backgroundColor: `${
        themeData["checkbox.disabled.indeterminate.backgroundColor"]
      }`,
      borderColor: `${themeData["checkbox.disabled.indeterminate.borderColor"]}`
    };
  }

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
          borderColor: `${themeData["checkbox.disabled.borderColor"]}`
        }
      : {}),
    ...(disabled && checked && !indeterminate
      ? {
          backgroundColor: `${themeData["checkbox.backgroundColor"]}`,
          "svg *": {
            fill: `${themeData["checkbox.disabled.checked.iconColor"]}`
          }
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
      position: `relative`,
      display: `flex`,
      flexDirection: `row`,
      alignItems: `center`,
      padding: `0 10px`
    },
    checkboxCheckWrapper: {
      position: `relative`,
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
        "*": {
          fill: `${themeData["checkbox.iconColor"]}`
        }
      },
      ...(hasHover ? getCheckboxRulesByHover(themeData) : {}),
      ...(hasFocus ? getCheckboxRulesByFocus(themeData, checked) : {}),
      ...(isPressed ? getCheckboxRulesByPressed(themeData) : {}),
      ...(disabled ? getCheckboxRulesByDisabled(themeData) : {}),
      ...(checked ? getCheckboxRulesByChecked(themeData, disabled) : {}),
      ...(indeterminate
        ? getCheckboxRulesByIndeterminate(themeData, disabled)
        : {}),
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
      zIndex: 1
    },
    checkboxCheck: {
      display: checked && !indeterminate ? `block` : `none`
    },
    checkboxIndeterminate: {
      display: indeterminate ? `block` : `none`
    }
  };
}
