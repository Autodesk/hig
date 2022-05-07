import { anchorPoints } from "./anchorPoints";

/** @typedef {import("./getCoordinates").Coordinates} Coordinates */

const offsetProperties = {
  TOP: "top",
  LEFT: "left",
};

/**
 * Offsets the container
 * @param {string} offsetProperty
 * @param {Coordinates} coordinates
 * @param {number} diff
 * @returns {Coordinates}
 */
function offsetContainerProperty(offsetProperty, coordinates, diff) {
  return {
    ...coordinates,
    containerPosition: {
      ...coordinates.containerPosition,
      [offsetProperty]: coordinates.containerPosition[offsetProperty] + diff,
    },
  };
}

/**
 * Vertically offsets the container
 * @param {Coordinates} coordinates
 * @param {number} diff
 * @returns {Coordinates}
 */
export function offsetContainerVertical(coordinates, diff) {
  return offsetContainerProperty(offsetProperties.TOP, coordinates, diff);
}

/**
 * Horizontally offsets the container
 * @param {Coordinates} coordinates
 * @param {number} diff
 * @returns {Coordinates}
 */
export function offsetContainerHorizontal(coordinates, diff) {
  return offsetContainerProperty(offsetProperties.LEFT, coordinates, diff);
}

/**
 * Horizontally offsets the panel while maintaining the equivalent pointer position
 * @param {Coordinates} coordinates
 * @param {number} diff
 * @returns {Coordinates}
 */
export function offsetPanelHorizontal(coordinates, diff) {
  return {
    ...coordinates,
    pointerPosition: {
      ...coordinates.pointerPosition,
      left: coordinates.pointerPosition.left - diff,
    },
    containerPosition: {
      ...coordinates.containerPosition,
      left: coordinates.containerPosition.left + diff,
    },
  };
}

/**
 * Moves the container away from the target relative the given the anchor point
 * @param {Coordinates} coordinates
 * @param {number} diff
 * @returns {Coordinates}
 */
export function dislocateContainer(coordinates, diff) {
  const { anchorPoint } = coordinates;

  switch (anchorPoint) {
    case anchorPoints.TOP_CENTER:
    case anchorPoints.TOP_LEFT:
    case anchorPoints.TOP_RIGHT:
      return offsetContainerVertical(coordinates, diff);
    case anchorPoints.BOTTOM_CENTER:
    case anchorPoints.BOTTOM_LEFT:
    case anchorPoints.BOTTOM_RIGHT:
      return offsetContainerVertical(coordinates, -1 * diff);
    case anchorPoints.LEFT_BOTTOM:
    case anchorPoints.LEFT_CENTER:
    case anchorPoints.LEFT_TOP:
      return offsetContainerHorizontal(coordinates, diff);
    case anchorPoints.RIGHT_BOTTOM:
    case anchorPoints.RIGHT_CENTER:
    case anchorPoints.RIGHT_TOP:
      return offsetContainerHorizontal(coordinates, -1 * diff);
    default:
      return coordinates;
  }
}
