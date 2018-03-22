import React from "react";

import BannerAction from "./BannerAction";
import BannerAnimator from "./BannerAnimator";
import BannerInteractions from "./BannerInteractions";
import BannerPresenter from "./BannerPresenter";
import placements from "./placements";
import types from "./types";

/** @typedef {import("BannerAnimator").BannerAnimatorProps} BannerAnimatorProps */
/** @typedef {import("BannerPresenter").BannerPresenterProps} BannerPresenterProps */
/** @typedef {BannerAnimatorProps & BannerPresenterProps} BannerProps */

/**
 * @param {BannerProps} props
 * @returns {JSX.Element}
 */
// eslint-disable-next-line react/prop-types
export default function Banner({ isVisible, ...presenterProps }) {
  return (
    <BannerAnimator isVisible={isVisible}>
      <BannerPresenter {...presenterProps} />
    </BannerAnimator>
  );
}

const propTypes = {
  ...BannerAnimator.propTypes,
  ...BannerPresenter.propTypes
};

Object.assign(Banner, {
  placements,
  propTypes,
  types,
  Action: BannerAction,
  Animator: BannerAnimator,
  Interactions: BannerInteractions,
  Presenter: BannerPresenter
});
