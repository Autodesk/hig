import statuses from "./statuses";

import {
  getInnerWrapperCollapsedTransform,
  getInnerWrapperCollapsingTransition,
  getInnerWrapperExpandingTransform,
  getInnerWrapperExpandingTransition,
  getInnerWrapperReset,
  getWrapperCollapsedHeight,
  getWrapperExpandedHeight,
  getWrapperReset,
  getWrapperTransition
} from "./styles";

/** @typedef {import("./BannerAnimator").BannerAnimatorState} BannerAnimatorState */
/** @typedef {import("./BannerAnimator").BannerAnimatorProps} BannerAnimatorProps */
// eslint-disable-next-line max-len
/** @typedef {function(BannerAnimatorState, BannerAnimatorProps): BannerAnimatorState} BannerAnimatorUpdater */

/**
 * @param {BannerAnimatorState} [prevState]
 * @param {BannerAnimatorProps} [props]
 * @returns {import("./styles").StyleUpdaterParams}
 */
function getParams(prevState = {}, props = {}) {
  const { innerWrapper } = prevState;
  const { hasPush, hasBounce, position } = props;

  return {
    innerWrapper,
    hasBounce,
    hasPush,
    position
  };
}

/** @type {BannerAnimatorUpdater} */
export function startExpand(setState) {
  const { setStatus } = setState;

  setStatus(statuses.EXPANDING);
}

/** @type {BannerAnimatorUpdater} */
export function startCollapse(setState) {
  const { setStatus } = setState;

  setStatus(statuses.COLLAPSING);
}

/** @type {BannerAnimatorUpdater} */
export function endExpand(setState) {
  const { setStatus, setWrapperStyle, setInnerWrapperStyle } = setState;
  setStatus(statuses.EXPANDED);
  setWrapperStyle(getWrapperReset());
  setInnerWrapperStyle(getInnerWrapperReset());
}

/** @type {BannerAnimatorUpdater} */
export function endCollapse(prevState, setState, props) {
  const params = getParams(prevState, props);
  const { setStatus, setWrapperStyle, setInnerWrapperStyle } = setState;

  setStatus(statuses.COLLAPSED);
  setWrapperStyle({
    transition: "",
    overflow: "hidden",
    height: "0"
  });
  setInnerWrapperStyle({
    transition: "",
    transform: getInnerWrapperCollapsedTransform(params)
  });
}

/** @type {BannerAnimatorUpdater} */
export function prepareCollapse(prevState, setState, props) {
  const params = getParams(prevState, props);
  const { setWrapperStyle, setInnerWrapperStyle } = setState;

  setWrapperStyle({
    transition: "",
    overflow: "hidden",
    height: getWrapperExpandedHeight(params)
  });
  setInnerWrapperStyle(getInnerWrapperReset());
}

/** @type {BannerAnimatorUpdater} */
export function animateCollapse(prevState, setState, props) {
  const params = getParams(prevState, props);
  const { setWrapperStyle, setInnerWrapperStyle } = setState;

  setWrapperStyle({
    transition: getWrapperTransition(params),
    overflow: "hidden",
    height: getWrapperCollapsedHeight(params)
  });
  setInnerWrapperStyle({
    transition: getInnerWrapperCollapsingTransition(params),
    transform: getInnerWrapperCollapsedTransform(params)
  });
}

/** @type {BannerAnimatorUpdater} */
export function animateExpand(prevState, setState, props) {
  const params = getParams(prevState, props);
  const { setWrapperStyle, setInnerWrapperStyle } = setState;

  setWrapperStyle({
    transition: getWrapperTransition(params),
    overflow: "hidden",
    height: getWrapperExpandedHeight(params)
  });
  setInnerWrapperStyle({
    transition: getInnerWrapperExpandingTransition(params),
    transform: getInnerWrapperExpandingTransform(params)
  });
}
