/** @type {Object.<string, string>} */
export const placements = Object.freeze({
  ABOVE: "above",
  ABOVE_OVERLAY: "above-overlay",
  BETWEEN: "between",
  BELOW_OVERLAY: "below-overlay",
});

/** @type {string[]} */
export const AVAILABLE_PLACEMENTS = Object.freeze(Object.values(placements));
