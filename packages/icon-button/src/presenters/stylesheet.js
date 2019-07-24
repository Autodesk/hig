function getStylesByHover(themeData, on) {
  return {
    boxShadow: `none`,
    "& svg *": {
      fill: on
        ? themeData["iconButton.hover.on.iconColor"]
        : themeData["iconButton.hover.iconColor"],
      transitionDuration: `0.3s`,
      transitionProperty: `fill`
    }
  };
}

function getStylesByFocus(themeData, on) {
  return {
    boxShadow: `0 0 0 ${themeData["iconButton.focus.halo.width"]} ${
      themeData["iconButton.focus.halo.color"]
    }`,
    transitionDuration: `0.3s, 0.3s`,
    "& svg *": {
      fill: on
        ? themeData["iconButton.focus.on.iconColor"]
        : themeData["iconButton.focus.iconColor"],
      transitionDuration: `0.3s`,
      transitionProperty: `fill`
    }
  };
}

function getStylesByDisabled(themeData) {
  return {
    opacity: themeData["component.disabled.opacity"],
    pointerEvents: `none`
  };
}

function getStylesByPressed(themeData, surface, on) {
  const surfaceLevel = Number(surface);

  return {
    backgroundColor:
      surfaceLevel <= 250
        ? themeData["iconButton.pressed.level100To250.backgroundColor"]
        : themeData["iconButton.pressed.level300To350.backgroundColor"],
    transitionDuration: `0.3s, 0.3s`,
    "& svg *": {
      fill: on
        ? themeData["iconButton.pressed.on.iconColor"]
        : themeData["iconButton.pressed.iconColor"],
      transitionDuration: `0.3s`,
      transitionProperty: `fill`
    }
  };
}

export default function stylesheet(props, themeData, density) {
  const { disabled, hasFocus, hasHover, isPressed, on, surface } = props;
  const contentHeight = density === `medium-density` ? `20px` : `16px`;

  return {
    iconButton: {
      border: `2px solid transparent`,
      display: `inline-block`,
      position: `relative`,
      cursor: `pointer`,
      boxSizing: `border-box`,
      borderRadius: themeData["iconButton.borderRadius"],
      padding: `0`,
      height: `calc(${contentHeight} + (${
        themeData["density.spacings.extraSmall"]
      } * 2))`,
      lineHeight: `calc(${contentHeight} + (${
        themeData["density.spacings.extraSmall"]
      } * 2))`,
      width: `calc(${contentHeight} + (${
        themeData["density.spacings.extraSmall"]
      } * 2))`,
      outline: 0,
      transitionProperty: `box-shadow, background-color`,
      transitionDuration: `0.3s, 0.3s`,
      transitionTimingFunction: `cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1)`,
      "& svg *": {
        fill: on
          ? themeData["iconButton.on.iconColor"]
          : themeData["iconButton.iconColor"],
        transitionDuration: `0.3s`,
        transitionProperty: `fill`
      },
      ...(hasFocus ? getStylesByFocus(themeData, on) : { boxShadow: `none` }),
      ...(hasHover ? getStylesByHover(themeData, on) : {}),
      ...(isPressed
        ? getStylesByPressed(themeData, surface, on)
        : { backgroundColor: `transparent` }),
      ...(disabled ? getStylesByDisabled(themeData) : {})
    },
    iconSpacer: {
      width: `24px`
    },
    iconButtonIcon: {
      position: `absolute`,
      left: 0,
      right: 0,
      margin: `0 auto`,
      top: `50%`,
      transform: `translateY(-50%)`,
      pointerEvents: `none`
    }
  };
}
