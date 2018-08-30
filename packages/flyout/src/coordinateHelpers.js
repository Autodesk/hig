/** @typedef {import("./getCoordinates").Coordinates} Coordinates */

/**
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
