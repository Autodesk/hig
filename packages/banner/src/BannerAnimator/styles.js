import { positions } from "./positions";

/** Transition ease for bounce effect */
const BOUNCE_EASING = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
/** Pixels; height added to the wrapper to show the bounce animation on the inner wrapper */
const OVERLAY_HEIGHT_BUFFER = 20;
/** Milliseconds; time for the banner to expand and collapse */
const TRANSITION_DURATION = 300;
/** Milliseconds; wait time for the inner wrapper to expand after the wrapper expands */
const PUSH_DELAY = 300;
/** Pixels; default banner height used when the component isn't mounted */
const DEFAULT_HEIGHT = 50;

/**
 * @typedef {Object} StyleUpdaterParams
 * @property {HTMLDivElement} [innerWrapper]
 * @property {boolean} hasPush
 * @property {boolean} hasBounce
 * @property {string} position
 */

/**
 * @typedef {function(StyleUpdaterParams): string} StyleUpdater
 */

/**
 * @param {HTMLDivElement} [innerWrapper]
 * @returns {number}
 */
function getInnerWrapperheight(innerWrapper) {
  return innerWrapper ? innerWrapper.offsetHeight : DEFAULT_HEIGHT;
}

/** @returns {Object.<string, string>} */
export function getWrapperReset() {
  return {
    transition: "",
    overflow: "",
    height: "",
  };
}

/** @returns {Object.<string, string>} */
export function getInnerWrapperReset() {
  return {
    transition: "",
    transform: "",
  };
}

/** @type {StyleUpdater} */
export function getWrapperTransition({ hasPush }) {
  return hasPush ? `${TRANSITION_DURATION}ms height ease` : "";
}

/** @type {StyleUpdater} */
export function getInnerWrapperExpandingTransition({ hasBounce, hasPush }) {
  const duration = `${TRANSITION_DURATION}ms`;
  const property = "transform";
  const easing = hasBounce ? BOUNCE_EASING : "ease";
  const transition = [duration, property, easing];

  if (hasPush && hasBounce) {
    transition.push(`${PUSH_DELAY}ms`);
  }

  return transition.join(" ");
}

/** @type {StyleUpdater} */
export function getInnerWrapperCollapsingTransition() {
  return `${TRANSITION_DURATION}ms transform ease`;
}

/** @type {StyleUpdater} */
export function getWrapperExpandedHeight({ hasBounce, innerWrapper }) {
  const innerWrapperHeight = getInnerWrapperheight(innerWrapper);
  const offset = hasBounce ? OVERLAY_HEIGHT_BUFFER : 0;
  const result = innerWrapperHeight + offset;

  return `${result}px`;
}

/** @type {StyleUpdater} */
export function getWrapperCollapsedHeight({ hasPush, innerWrapper }) {
  if (hasPush) return "0";

  const innerWrapperHeight = getInnerWrapperheight(innerWrapper);
  const result = innerWrapperHeight + OVERLAY_HEIGHT_BUFFER;

  return `${result}px`;
}

/** @type {StyleUpdater} */
export function getInnerWrapperCollapsedTransform({ innerWrapper, position }) {
  const isBottomPlacement = position === positions.BOTTOM;
  const modifier = isBottomPlacement ? 1 : -1;
  const offset = isBottomPlacement ? OVERLAY_HEIGHT_BUFFER : 0;
  const innerWrapperHeight = getInnerWrapperheight(innerWrapper);
  const result = innerWrapperHeight * modifier + offset;

  return `translateY(${result}px)`;
}

/** @type {StyleUpdater} */
export function getInnerWrapperExpandingTransform({ hasBounce, position }) {
  if (hasBounce && position === positions.BOTTOM) {
    return `translateY(${OVERLAY_HEIGHT_BUFFER}px)`;
  }

  return "";
}
