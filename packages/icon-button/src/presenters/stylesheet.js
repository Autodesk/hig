function getDefaultIconTransitionProperties() {
  return {
    transitionDuration: `0.3s`,
    transitionProperty: `fill`
  };
}

function getStylesByHover(themeData, surface, on, variant) {
  const surfaceLevel = Number(surface);
  const isDynamic = variant === `dynamic`;
  const dynamicHoverIconColor = on
    ? themeData["iconButton.hover.on.iconColor"]
    : themeData["iconButton.hover.iconColor"];
  const hoverIconColor = isDynamic
    ? dynamicHoverIconColor
    : themeData["iconButton.static.iconColor"];
  const staticSurfaceLevelBackgroundColor =
    surfaceLevel <= 250
      ? themeData["iconButton.static.hover.level100To250.backgroundColor"]
      : themeData["iconButton.static.hover.level300To350.backgroundColor"];
  const staticHoverBackgroundColor = on
    ? themeData["iconButton.static.on.hover.level100To250.backgroundColor"]
    : staticSurfaceLevelBackgroundColor;
  const backgroundColor = !isDynamic
    ? staticHoverBackgroundColor
    : `transparent`;
  const staticBorderColor = on
    ? themeData["iconButton.static.on.hover.borderColor"]
    : `transparent`;
  const borderColor = !isDynamic ? staticBorderColor : `transparent`;

  return {
    backgroundColor,
    borderColor,
    boxShadow: `none`,
    "& svg *": {
      ...getDefaultIconTransitionProperties(),
      fill: hoverIconColor
    }
  };
}

function getStylesByFocus(themeData, on, variant) {
  const isDynamic = variant === `dynamic`;
  const dynamicFocusIconColor = on
    ? themeData["iconButton.focus.on.iconColor"]
    : themeData["iconButton.focus.iconColor"];
  const focusIconColor = isDynamic
    ? dynamicFocusIconColor
    : themeData["iconButton.static.iconColor"];
  const staticBorderColor = on
    ? themeData["iconButton.static.on.focus.borderColor"]
    : `transparent`;
  const borderColor = !isDynamic ? staticBorderColor : `transparent`;

  return {
    borderColor,
    boxShadow: `0 0 0 ${themeData["iconButton.focus.halo.width"]} ${
      themeData["iconButton.focus.halo.color"]
    }`,
    transitionDuration: `0.3s, 0.3s`,
    "& svg *": {
      ...getDefaultIconTransitionProperties(),
      fill: focusIconColor
    }
  };
}

function getStylesByPressed(themeData, surface, on, variant) {
  const surfaceLevel = Number(surface);
  const dynamicPressedIconColor = on
    ? themeData["iconButton.pressed.on.iconColor"]
    : themeData["iconButton.pressed.iconColor"];
  const pressedIconColor =
    variant === "dynamic"
      ? dynamicPressedIconColor
      : themeData["iconButton.static.iconColor"];
  return {
    backgroundColor:
      surfaceLevel <= 250
        ? themeData["iconButton.pressed.level100To250.backgroundColor"]
        : themeData["iconButton.pressed.level300To350.backgroundColor"],
    borderColor: `transparent`,
    transitionDuration: `0.3s, 0.3s`,
    "& svg *": {
      ...getDefaultIconTransitionProperties(),
      fill: pressedIconColor
    }
  };
}

function getStylesByDisabled(themeData) {
  return {
    opacity: themeData["component.disabled.opacity"],
    pointerEvents: `none`
  };
}

export default function stylesheet(props, themeData, density) {
  const {
    disabled,
    hasFocus,
    hasHover,
    isPressed,
    on,
    surface,
    variant
  } = props;
  const contentHeight = density === `medium-density` ? `20px` : `16px`;
  const isDynamic = variant === `dynamic`;
  const dynamicIconColor = on
    ? themeData["iconButton.on.iconColor"]
    : themeData["iconButton.iconColor"];
  const iconColor = isDynamic ? dynamicIconColor : `initial`;

  return {
    iconButton: {
      backgroundColor:
        !isDynamic && on
          ? themeData["iconButton.static.on.backgroundColor"]
          : `transparent`,
      borderColor:
        !isDynamic && on
          ? themeData["iconButton.static.on.borderColor"]
          : `transparent`,
      borderStyle: `solid`,
      borderWidth: `1px`,
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
        fill: iconColor,
        transitionDuration: `0.3s`,
        transitionProperty: `fill`
      },
      ...(hasFocus ? getStylesByFocus(themeData, on, variant) : {}),
      ...(hasHover ? getStylesByHover(themeData, surface, on, variant) : {}),
      ...(isPressed ? getStylesByPressed(themeData, surface, on, variant) : {}),
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
