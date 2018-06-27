import { anchorPoints, availableAnchorPoints } from "./anchorPoints";

/**
 * @typedef {Object} GetFlyoutPositionPayload
 * @param {string} anchorPoint
 * @param {DOMRect} actionRect
 * @param {DOMRect} panelRect
 * @param {DOMRect} viewportRect
 */

/**
 * @typedef {Object} FlyoutPosition
 * @param {string} anchorPoint
 * @param {number} topOffset
 * @param {number} leftOffset
 */

const CARET_SPACING = 7;
const {
  TOP_LEFT,
  TOP_CENTER,
  TOP_RIGHT,
  RIGHT_TOP,
  RIGHT_CENTER,
  RIGHT_BOTTOM,
  BOTTOM_LEFT,
  BOTTOM_CENTER,
  BOTTOM_RIGHT,
  LEFT_TOP,
  LEFT_CENTER,
  LEFT_BOTTOM
} = anchorPoints;

/**
 * @param {payload} GetFlyoutPositionPayload
 * @returns {number}
 */
function calculateTopOffset({ anchorPoint, actionRect, panelRect }) {
  switch (anchorPoint) {
    case TOP_LEFT:
    case TOP_CENTER:
    case TOP_RIGHT:
      return actionRect.height + CARET_SPACING;
    case BOTTOM_LEFT:
    case BOTTOM_CENTER:
    case BOTTOM_RIGHT:
      return -1 * panelRect.height - CARET_SPACING;
    case LEFT_TOP:
    case RIGHT_TOP:
      return 0;
    case LEFT_CENTER:
    case RIGHT_CENTER:
      return (panelRect.height - actionRect.height) / -2;
    case LEFT_BOTTOM:
    case RIGHT_BOTTOM:
      return -1 * (panelRect.height - actionRect.height);
    default:
      return 0;
  }
}

/**
 * @param {payload} GetFlyoutPositionPayload
 * @returns {number}
 */
function calculateLeftOffset({ anchorPoint, actionRect, panelRect }) {
  switch (anchorPoint) {
    case LEFT_TOP:
    case LEFT_CENTER:
    case LEFT_BOTTOM:
      return actionRect.width + CARET_SPACING;
    case RIGHT_TOP:
    case RIGHT_CENTER:
    case RIGHT_BOTTOM:
      return -1 * panelRect.width - CARET_SPACING;
    case TOP_LEFT:
    case BOTTOM_LEFT:
      return 0;
    case TOP_CENTER:
    case BOTTOM_CENTER:
      return (panelRect.width - actionRect.width) / -2;
    case TOP_RIGHT:
    case BOTTOM_RIGHT:
      return -1 * (panelRect.width - actionRect.width);
    default:
      return 0;
  }
}

/**
 * @param {payload} GetFlyoutPositionPayload
 * @returns {FlyoutPosition}
 */
function calculatePosition(props) {
  return {
    anchorPoint: props.anchorPoint,
    topOffset: calculateTopOffset(props),
    leftOffset: calculateLeftOffset(props)
  };
}

/**
 * Determines whether the given position is entirely within the viewport
 * @param {payload} GetFlyoutPositionPayload
 * @returns {function(FlyoutPosition): boolean}
 */
function isInViewport(props) {
  const { viewportRect, panelRect, actionRect } = props;

  return ({ topOffset, leftOffset }) => {
    const containerTop = actionRect.top + topOffset;
    const containerLeft = actionRect.left + leftOffset;
    const containerRight = containerLeft + panelRect.width;
    const containerBottom = containerTop + panelRect.height;
    const result =
      containerLeft >= viewportRect.left &&
      containerTop >= viewportRect.top &&
      containerRight <= viewportRect.right &&
      containerBottom <= viewportRect.bottom;

    return result;
  };
}

/**
 * @param {payload} GetFlyoutPositionPayload
 * @returns {FlyoutPosition}
 */
function getFallbackPosition(props) {
  return availableAnchorPoints
    .map(anchorPoint => calculatePosition({ ...props, anchorPoint }))
    .find(isInViewport(props));
}

/**
 * @param {payload} GetFlyoutPositionPayload
 * @returns {FlyoutPosition}
 */
export default function getFlyoutPosition(props) {
  const declaredOffsets = calculatePosition(props);

  if (isInViewport(props)(declaredOffsets)) {
    return declaredOffsets;
  }

  const fallbackOffsets = getFallbackPosition(props);

  return fallbackOffsets || declaredOffsets;
}
