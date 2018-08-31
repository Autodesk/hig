/** @typedef {import("./getCoordinates").Coordinates} Coordinates */

/**
 * Vertically offsets the container
 * @param {Coordinates} coordinates
 * @param {number} diff
 * @returns {Coordinates}
 */
export function offsetContainerVertical(coordinates, diff) {
  return {
    ...coordinates,
    containerPosition: {
      ...coordinates.containerPosition,
      top: coordinates.containerPosition.top + diff
    }
  };
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
      left: coordinates.pointerPosition.left - diff
    },
    containerPosition: {
      ...coordinates.containerPosition,
      left: coordinates.containerPosition.left + diff
    }
  };
}
