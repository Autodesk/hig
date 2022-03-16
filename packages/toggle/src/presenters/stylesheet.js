function getToggleFocusRules(themeData) {
  return {
    borderColor: themeData["toggle.off.focus.borderColor"],
    boxShadow: `0 0 0 ${themeData["toggle.focus.haloWidth"]} ${themeData["toggle.focus.haloColor"]}`
  };
}

function getToggleHoverRules(themeData, on) {
  return {
    borderColor: on
      ? themeData[`toggle.on.default.borderColor`]
      : themeData["toggle.off.hover.borderColor"],
    boxShadow: `0 0 0 ${themeData["toggle.hover.haloWidth"]} ${themeData["toggle.hover.haloColor"]}`
  };
}

function getTogglePressedRules(themeData, on) {
  return {
    borderColor: on
      ? themeData[`toggle.on.default.borderColor`]
      : themeData["toggle.off.pressed.borderColor"],
    boxShadow: `0 0 0 ${themeData["toggle.pressed.haloWidth"]} ${themeData["toggle.pressed.haloColor"]}`
  };
}

export default function stylesheet(props, themeData) {
  const { checked: on, disabled, hasFocus, hasHover, isPressed } = props;
  const minWidth = Number(themeData[`toggle.minWidth`].replace(`px`, ``));
  const padding = Number(themeData[`toggle.padding`].replace(`px`, ``)) * 2;
  const borderWidth =
    Number(themeData[`toggle.borderWidth`].replace(`px`, ``)) * 2;
  const minKnobDiameter = Number(
    themeData[`toggle.thumb.minDiameter`].replace(`px`, ``)
  );
  const slidePx = minWidth - borderWidth - padding - minKnobDiameter;

  return {
    toggleWrapper: {
      alignItems: `center`,
      backgroundColor: on
        ? themeData[`toggle.on.default.backgroundColor`]
        : themeData[`toggle.off.default.backgroundColor`],
      borderColor: on
        ? themeData[`toggle.on.default.borderColor`]
        : themeData[`toggle.off.default.borderColor`],
      borderRadius: themeData[`toggle.borderRadii`],
      borderStyle: `solid`,
      borderWidth: themeData["toggle.borderWidth"],
      boxSizing: `border-box`,
      display: `inline-flex`,
      height: themeData[`toggle.minHeight`],
      opacity: disabled ? themeData[`colorScheme.opacity.disabled`] : 1,
      pointerEvents: disabled ? `none` : `auto`,
      position: `relative`,
      transition: `background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,
      width: themeData[`toggle.minWidth`],
      ...(hasFocus ? getToggleFocusRules(themeData) : {}),
      ...(hasHover ? getToggleHoverRules(themeData, on) : {}),
      ...(isPressed ? getTogglePressedRules(themeData, on) : {})
    },
    toggleInput: {
      opacity: 0,
      width: `100%`,
      height: `100%`
    },
    toggleKnob: {
      backgroundColor: on
        ? themeData["toggle.thumb.on.backgroundColor"]
        : themeData["toggle.thumb.off.backgroundColor"],
      borderRadius: themeData[`toggle.thumb.borderRadii`],
      boxSizing: `border-box`,
      display: `inline-block`,
      height: themeData[`toggle.thumb.minDiameter`],
      position: `absolute`,
      left: themeData["toggle.padding"],
      pointerEvents: `none`,
      transform: on ? `translateX(${slidePx}px)` : `translateX(0)`,
      transition: `transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,
      width: themeData[`toggle.thumb.minDiameter`]
    }
  };
}
