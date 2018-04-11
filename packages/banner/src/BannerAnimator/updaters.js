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
export function startExpand() {
  return {
    status: statuses.EXPANDING
  };
}

/** @type {BannerAnimatorUpdater} */
export function startCollapse() {
  return {
    status: statuses.COLLAPSING
  };
}

/** @type {BannerAnimatorUpdater} */
export function endExpand() {
  return {
    status: statuses.EXPANDED,
    wrapperStyle: getWrapperReset(),
    innerWrapperStyle: getInnerWrapperReset()
  };
}

/** @type {BannerAnimatorUpdater} */
export function endCollapse(prevState, props) {
  const params = getParams(prevState, props);

  return {
    status: statuses.COLLAPSED,
    wrapperStyle: {
      transition: "",
      overflow: "hidden",
      height: "0"
    },
    innerWrapperStyle: {
      transition: "",
      transform: getInnerWrapperCollapsedTransform(params)
    }
  };
}

/** @type {BannerAnimatorUpdater} */
export function prepareCollapse(prevState, props) {
  const params = getParams(prevState, props);

  return {
    wrapperStyle: {
      transition: "",
      overflow: "hidden",
      height: getWrapperExpandedHeight(params)
    },
    innerWrapperStyle: getInnerWrapperReset()
  };
}

/** @type {BannerAnimatorUpdater} */
export function animateCollapse(prevState, props) {
  const params = getParams(prevState, props);

  return {
    wrapperStyle: {
      transition: getWrapperTransition(params),
      overflow: "hidden",
      height: getWrapperCollapsedHeight(params)
    },
    innerWrapperStyle: {
      transition: getInnerWrapperCollapsingTransition(params),
      transform: getInnerWrapperCollapsedTransform(params)
    }
  };
}

/** @type {BannerAnimatorUpdater} */
export function animateExpand(prevState, props) {
  const params = getParams(prevState, props);

  return {
    wrapperStyle: {
      transition: getWrapperTransition(params),
      overflow: "hidden",
      height: getWrapperExpandedHeight(params)
    },
    innerWrapperStyle: {
      transition: getInnerWrapperExpandingTransition(params),
      transform: getInnerWrapperExpandingTransform(params)
    }
  };
}
