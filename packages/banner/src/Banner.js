import React from "react";
import PropTypes from "prop-types";

import { placements, AVAILABLE_PLACEMENTS } from "./placements";
import { types, AVAILABLE_TYPES } from "./types";
import animatorPropsByPlacement from "./animatorPropsByPlacement";
import BannerAction from "./BannerAction";
import BannerAnimator from "./BannerAnimator";
import BannerContainer from "./BannerContainer";
import BannerInteractions from "./BannerInteractions";
import BannerPresenter from "./BannerPresenter";

/**
 * @typedef {Object} BannerProps
 * @property {string} [type]
 * @property {string} [placement]
 * @property {string} [label]
 * @property {string} [labelledBy]
 * @property {any} [actions]
 * @property {string} [dismissButtonTitle]
 * @property {Function} [onDismiss]
 * @property {boolean} [isVisible]
 * @property {any} [children]
 * @property {Function} [stylesheet]
 */

/** @type {Component<BannerProps>} */
const Banner = (props) => {
  /**
   * @param {import("./BannerContainer").PresenterBag} presenterBag
   */
  const renderPresenter = (presenterBag) => {
    const presenterProps = { ...props, ...presenterBag };
    const {
      children,
      stylesheet: customStylesheet,
      ...otherProps
    } = presenterProps;

    return (
      <BannerPresenter {...otherProps} stylesheet={customStylesheet}>
        {children}
      </BannerPresenter>
    );
  };

  /**
   * @param {import("./BannerAnimator").ContainerBag} containerBag
   */
  // eslint-disable-next-line react/prop-types
  const renderContainer = ({ handleReady }) => {
    const { actions } = props;

    return (
      <BannerContainer actions={actions} onReady={handleReady}>
        {renderPresenter}
      </BannerContainer>
    );
  };

  const { isVisible, placement } = props;

  return (
    <BannerAnimator
      isVisible={isVisible}
      {...animatorPropsByPlacement[placement]}
    >
      {renderContainer}
    </BannerAnimator>
  );
};

Banner.displayName = "Banner";

Banner.AVAILABLE_PLACEMENTS = AVAILABLE_PLACEMENTS;
Banner.AVAILABLE_TYPES = AVAILABLE_TYPES;
Banner.placements = placements;
Banner.types = types;

Banner.Action = BannerAction;
Banner.Interactions = BannerInteractions;
Banner.Presenter = BannerPresenter;

Banner.propTypes = {
  /** Indicates the style of banner */
  type: PropTypes.oneOf(AVAILABLE_TYPES),
  /** Determines the intended placement of banner */
  placement: PropTypes.oneOf(AVAILABLE_PLACEMENTS),
  /** The label of the message displayed */
  label: PropTypes.string,
  /** The ID used for ARIA labeling */
  labelledBy: PropTypes.string,
  /** Banner actions; Any JSX, or a render prop function */
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** Accessibility text for the dismiss button */
  dismissButtonTitle: PropTypes.string,
  /** Called when the banner is dismissed
   *  If this is not supplied the close button will not appear
   */
  onDismiss: PropTypes.func,
  /** Animation; Determines the visibility of the banner */
  isVisible: PropTypes.bool,
  /** The displayed message */
  children: PropTypes.node,
  /* Adds custom/overriding style */
  stylesheet: PropTypes.func,
};

export default Banner;
