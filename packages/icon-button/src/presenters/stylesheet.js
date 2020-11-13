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
    ? themeData["iconButton.dynamic.on.hover.iconColor"]
    : themeData["iconButton.dynamic.hover.iconColor"];
  const hoverIconColor = isDynamic ? dynamicHoverIconColor : "";
  const staticSurfaceLevelBackgroundColor =
    surfaceLevel <= 250
      ? themeData["iconButton.static.hover.100To250BackgroundColor"]
      : themeData["iconButton.static.hover.300To350BackgroundColor"];
  const staticHoverBackgroundColor = on
    ? themeData["iconButton.static.on.hover.100To250BackgroundColor"]
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
    ? themeData["iconButton.dynamic.on.focus.iconColor"]
    : themeData["iconButton.dynamic.focus.iconColor"];
  const focusIconColor = isDynamic ? dynamicFocusIconColor : "";
  const staticBorderColor = on
    ? themeData["iconButton.static.on.focus.borderColor"]
    : `transparent`;
  const borderColor = !isDynamic ? staticBorderColor : `transparent`;

  return {
    borderColor,
    boxShadow: `0 0 0 ${themeData["iconButton.focus.haloWidth"]} ${
      themeData["iconButton.focus.haloColor"]
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
    ? themeData["iconButton.dynamic.on.pressed.iconColor"]
    : themeData["iconButton.dynamic.pressed.iconColor"];
  const pressedIconColor = variant === "dynamic" ? dynamicPressedIconColor : "";

  const dynamicPressedBackgroundColor = surfaceLevel <= 250 ? themeData["iconButton.dynamic.pressed.100To250BackgroundColor"] : themeData["iconButton.dynamic.pressed.300To350BackgroundColor"];
  const staticPressedBackgroundColor = themeData["iconButton.static.on.pressed.backgroundColor"];
  return {
    backgroundColor:
      variant === `dynamic` ? dynamicPressedBackgroundColor : staticPressedBackgroundColor,
    borderColor:
      variant === `dynamic` ? `transparent` : themeData["iconButton.static.on.pressed.borderColor"],
    transitionDuration: `0.3s, 0.3s`,
    "& svg *": {
      ...getDefaultIconTransitionProperties(),
      fill: pressedIconColor
    }
  };
}

function getStylesByDisabled(themeData) {
  return {
    opacity: themeData["colorScheme.opacity.disabled"],
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
    ? themeData["iconButton.dynamic.on.default.iconColor"]
    : themeData["iconButton.dynamic.default.iconColor"];
  const iconColor = isDynamic ? dynamicIconColor : ``;

  return {
    iconButton: {
      backgroundColor:
        !isDynamic && on
          ? themeData["iconButton.static.on.default.backgroundColor"]
          : `transparent`,
      borderColor:
        !isDynamic && on
          ? themeData["iconButton.static.on.default.borderColor"]
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
