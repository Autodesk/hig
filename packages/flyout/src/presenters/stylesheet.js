function getStyle(themeData, role) {
  return themeData[role];
}

function getAnchorPointTransformTranslate(anchorPoint) {
  switch (anchorPoint) {
    case `top-left`:
    case `top-center`:
    case `top-right`:
      return `translateY(-4px)`;
    case `right-top`:
    case `right-center`:
    case `right-bottom`:
      return `translateX(4px)`;
    case `bottom-left`:
    case `bottom-center`:
    case `bottom-right`:
      return `translateY(4px)`;
    case `left-top`:
    case `left-center`:
    case `left-bottom`:
      return `translateX(-4px)`;
    default:
      return `none`;
  }
}

function getAnchorPointTransformRotate(anchorPoint) {
  switch (anchorPoint) {
    case `right-top`:
    case `right-center`:
    case `right-bottom`:
      return `rotate(90deg)`;
    case `bottom-left`:
    case `bottom-center`:
    case `bottom-right`:
      return `rotate(180deg)`;
    case `left-top`:
    case `left-center`:
    case `left-bottom`:
      return `rotate(-90deg)`;
    default:
      return `rotate(0deg)`;
  }
}

export default function(props, themeData) {
  const { transitionStatus, anchorPoint } = props;
  const isExiting = transitionStatus === `exiting`;
  const isExited = transitionStatus === `exited`;
  const isHidden = transitionStatus === `hidden`;
  const backgroundColor = themeData
    ? getStyle(themeData, `flyout.backgroundColor`)
    : `transparent`;
  const borderColor = themeData
    ? getStyle(themeData, `flyout.borderColor`)
    : `none`;
  const borderRadius = themeData
    ? getStyle(themeData, `flyout.borderRadius`)
    : `none`;
  const shadowBlur = themeData ? getStyle(themeData, `flyout.shadowBlur`) : 0;
  const shadowColor = themeData
    ? getStyle(themeData, `flyout.shadowColor`)
    : `transparent`;
  const densitySmall = themeData
    ? getStyle(themeData, `density.spacings.small`)
    : 0;

  return {
    flyoutWrapper: {
      position: `relative`,
      display: `inline-block`
    },
    flyoutAction: {
      display: `flex`
    },
    flyoutContainer: {
      position: `absolute`,
      // Resolves issues with negative positions and container overflow
      display: isHidden ? `none` : `table`,
      width: `100%`,
      zIndex: 9999,
      transitionProperty: `opacity, transform`,
      transitionDuration: `250ms`,
      // Bounce effect
      transitionTimingFunction: `cubic-bezier(0.77, 0, 0.265, 2)`,
      touchAction: isExiting || isExited ? `none` : `auto`,
      pointerEvents: isExiting || isExited ? `none` : `auto`,
      opacity: isExiting || isExited ? 0 : 1,
      transform:
        isExiting || isExited
          ? getAnchorPointTransformTranslate(anchorPoint)
          : `none`
    },
    panelContainer: {
      backgroundColor,
      borderRadius,
      border: `1px solid ${borderColor}`,
      boxShadow: `0 0 ${shadowBlur} ${shadowColor}`
    },
    panelContainerInner: {
      position: `relative`
    },
    panel: {
      minWidth: `200px`,
      maxWidth: `400px`,
      maxHeight: `360px`,
      padding: densitySmall,
      overflowY: `auto`,
      "-ms-overflow-style": `-ms-autohiding-scrollbar`
    },
    pointerWrapper: {
      display: `flex`,
      position: `absolute`,
      transform: getAnchorPointTransformRotate(anchorPoint)
    },
    pointer: { // eslint-disable-line prettier/prettier
      // Pointer border
      ".hig__flyout-v1__pointer-border": {
        fill: borderColor
      },
      // Pointer body
      ".hig__flyout-v1__pointer-background": {
        fill: backgroundColor
      }
    }
  };
}
