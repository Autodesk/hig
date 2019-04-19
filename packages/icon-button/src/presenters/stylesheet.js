function getStylesByHover(themeData, hasHover) {
  if (hasHover) {
    return {
      boxShadow: `none`,
      "& svg *": {
        fill: themeData["iconButton.hover.iconColor"],
        transitionDuration: `0.3s`,
        transitionProperty: `fill`
      }
    };
  }
  return {};
}

function getStylesByFocus(themeData, hasFocus) {
  if (hasFocus) {
    return {
      boxShadow: `0 0 0 ${themeData["iconButton.focus.halo.width"]} ${
        themeData["iconButton.focus.halo.color"]
      }`,
      transitionDuration: `0.1s, 0.1s`,
      "& svg *": {
        fill: themeData["iconButton.focus.iconColor"],
        transitionDuration: `0.3s`,
        transitionProperty: `fill`
      }
    };
  }
  return {
    boxShadow: `none`
  };
}

function getStylesByDisabled(themeData, disabled) {
  if (disabled) {
    return {
      opacity: themeData["component.disabled.opacity"],
      pointerEvents: `none`
    };
  }
  return {};
}

function getStylesByPressed(themeData, isPressed) {
  if (isPressed) {
    return {
      backgroundColor: themeData["iconButton.pressed.backgroundColor"],
      transitionDuration: `0.1s, 0.1s`,
      "& svg *": {
        fill: themeData["iconButton.pressed.iconColor"],
        transitionDuration: `0.3s`,
        transitionProperty: `fill`
      }
    };
  }
  return {
    backgroundColor: `transparent`
  };
}

export default function stylesheet(props, themeData, density) {
  const { disabled, hasFocus, hasHover, isPressed } = props;
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
      "& svg *": {
        fill: themeData["iconButton.iconColor"],
        transitionDuration: `0.3s`,
        transitionProperty: `fill`
      },
      ...getStylesByFocus(themeData, hasFocus),
      ...getStylesByHover(themeData, hasHover),
      ...getStylesByPressed(themeData, isPressed),
      ...getStylesByDisabled(themeData, disabled)
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
