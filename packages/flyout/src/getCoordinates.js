import { anchorPoints } from "./anchorPoints";

/**
 * @typedef {Object} Payload
 * @property {string} anchorPoint
 * @property {DOMRect} actionRect
 * @property {DOMRect} panelRect
 * @property {DOMRect} pointerRect
 * @property {DOMRect} viewportRect
 */

/**
 * @typedef {Object} Position
 * @property {number} top
 * @property {number} left
 */

/**
 * @typedef {Object} Coordinates
 * @property {string} anchorPoint
 * @property {Position} containerPosition
 * @property {Position} pointerPosition
 */

const ACTION_OVERLAP = 0;
const POINTER_OVERLAP = 1;
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
  LEFT_BOTTOM,
} = anchorPoints;

/**
 * @type {Position}
 */
export const DEFAULT_POSITION = Object.freeze({
  top: 0,
  left: 0,
});

/**
 * @type {Coordinates}
 */
export const DEFAULT_COORDINATES = Object.freeze({
  anchorPoint: anchorPoints.TOP_LEFT,
  containerPosition: DEFAULT_POSITION,
  pointerPosition: DEFAULT_POSITION,
});

/**
 * @param {Payload} payload
 * @returns {number}
 */
function calculatePointerTopOffset({
  anchorPoint,
  actionRect,
  panelRect,
  pointerRect,
}) {
  switch (anchorPoint) {
    case TOP_CENTER:
    case TOP_LEFT:
    case TOP_RIGHT:
      return (
        -1 * (pointerRect.height - (pointerRect.height / 2 + POINTER_OVERLAP))
      );
    case BOTTOM_CENTER:
    case BOTTOM_LEFT:
    case BOTTOM_RIGHT:
      return panelRect.height - (pointerRect.height / 2 + POINTER_OVERLAP);
    case LEFT_BOTTOM:
    case RIGHT_BOTTOM:
      return panelRect.height - actionRect.height / 2 - pointerRect.height / 2;
    case LEFT_CENTER:
    case RIGHT_CENTER:
      return panelRect.height / 2 - pointerRect.height / 2;
    case LEFT_TOP:
    case RIGHT_TOP:
      return actionRect.height / 2 - pointerRect.height / 2;
    default:
      return DEFAULT_COORDINATES.pointerPosition.top;
  }
}

/**
 * @param {Payload} payload
 * @returns {number}
 */
function calculatePointerLeftOffset({
  anchorPoint,
  actionRect,
  panelRect,
  pointerRect,
}) {
  switch (anchorPoint) {
    case LEFT_BOTTOM:
    case LEFT_CENTER:
    case LEFT_TOP:
      return (
        -1 * (pointerRect.width - (pointerRect.width / 2 + POINTER_OVERLAP))
      );
    case RIGHT_BOTTOM:
    case RIGHT_CENTER:
    case RIGHT_TOP:
      return panelRect.width - (pointerRect.width / 2 + POINTER_OVERLAP);
    case TOP_CENTER:
    case BOTTOM_CENTER:
      return panelRect.width / 2 - pointerRect.width / 2;
    case TOP_LEFT:
    case BOTTOM_LEFT:
      return actionRect.width / 2 - pointerRect.width / 2;
    case TOP_RIGHT:
    case BOTTOM_RIGHT:
      return panelRect.width - (actionRect.width / 2 + pointerRect.width / 2);
    default:
      return DEFAULT_COORDINATES.pointerPosition.left;
  }
}

/**
 * @param {Payload} payload
 * @returns {number}
 */
function calculatePanelContainerTopOffset({
  anchorPoint,
  actionRect,
  panelRect,
  pointerRect,
}) {
  switch (anchorPoint) {
    case TOP_LEFT:
    case TOP_CENTER:
    case TOP_RIGHT:
      return actionRect.height + pointerRect.height / 2 - ACTION_OVERLAP;
    case BOTTOM_LEFT:
    case BOTTOM_CENTER:
    case BOTTOM_RIGHT:
      return -1 * panelRect.height - pointerRect.height / 2 + ACTION_OVERLAP;
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
      return DEFAULT_COORDINATES.containerPosition.top;
  }
}

/**
 * @param {Payload} payload
 * @returns {number}
 */
function calculatePanelContainerLeftOffset({
  anchorPoint,
  actionRect,
  panelRect,
  pointerRect,
}) {
  switch (anchorPoint) {
    case LEFT_TOP:
    case LEFT_CENTER:
    case LEFT_BOTTOM:
      return actionRect.width + pointerRect.width / 2 - ACTION_OVERLAP;
    case RIGHT_TOP:
    case RIGHT_CENTER:
    case RIGHT_BOTTOM:
      return -1 * panelRect.width - pointerRect.width / 2 + ACTION_OVERLAP;
    case TOP_LEFT:
    case BOTTOM_LEFT:
      return 0;
    case TOP_CENTER:
    case BOTTOM_CENTER:
      return -1 * ((panelRect.width - actionRect.width) / 2);
    case TOP_RIGHT:
    case BOTTOM_RIGHT:
      return -1 * (panelRect.width - actionRect.width);
    default:
      return DEFAULT_COORDINATES.containerPosition.top;
  }
}

/**
 * @param {Payload} payload
 * @returns {Coordinates}
 */
function calculatePointerPosition(props) {
  return {
    top: calculatePointerTopOffset(props),
    left: calculatePointerLeftOffset(props),
  };
}

/**
 * @param {Payload} payload
 * @returns {Coordinates}
 */
function calculatePanelContainerPosition(props) {
  return {
    top: calculatePanelContainerTopOffset(props),
    left: calculatePanelContainerLeftOffset(props),
  };
}

/**
 * @param {Payload} payload
 * @returns {Coordinates}
 */
function calculateCoordinates(props) {
  return {
    anchorPoint: props.anchorPoint,
    containerPosition: calculatePanelContainerPosition(props),
    pointerPosition: calculatePointerPosition(props),
  };
}

/**
 * Determines whether the given position is entirely within the viewport
 * @param {Payload} payload
 * @returns {function(Coordinates): boolean}
 */
function createViewportDeterminer(props) {
  const { viewportRect, panelRect, actionRect } = props;

  return function isInViewport({ containerPosition }) {
    const containerTop = actionRect.top + containerPosition.top;
    const containerLeft = actionRect.left + containerPosition.left;
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
function getFallbackCoordinates(payload) {
  const isInViewport = createViewportDeterminer(payload);

  return payload.fallbackAnchorPoints
    .map((anchorPoint) => calculateCoordinates({ ...payload, anchorPoint }))
    .find(isInViewport);
}

/**
 * @param {Payload} payload
 * @returns {Coordinates}
 */
export default function getCoordinates(payload) {
  const coordinates = calculateCoordinates(payload);
  const isInViewport = createViewportDeterminer(payload);

  if (isInViewport(coordinates)) {
    return coordinates;
  }

  const fallbackCoordinates = getFallbackCoordinates(payload);

  return fallbackCoordinates || coordinates;
}
