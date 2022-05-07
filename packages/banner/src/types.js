/**
 * @todo Move into shared package to consolidate component types
 */

/** @type {Object.<string, string>} */
export const types = Object.freeze({
  PRIMARY: "primary",
  COMPLETE: "complete",
  WARNING: "warning",
  URGENT: "urgent",
});

/** @type {string[]} */
export const AVAILABLE_TYPES = Object.freeze(Object.values(types));
