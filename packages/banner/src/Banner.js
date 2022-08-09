import React, { Component } from "react";
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
export default class Banner extends Component {
  static AVAILABLE_PLACEMENTS = AVAILABLE_PLACEMENTS;

  static AVAILABLE_TYPES = AVAILABLE_TYPES;

  static placements = placements;

  static types = types;

  static Action = BannerAction;

  static Interactions = BannerInteractions;

  static Presenter = BannerPresenter;

  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    /** Indicates the style of banner */
    type: PropTypes.oneOf(AVAILABLE_TYPES),
    /** Determines the intended placement of banner */
    placement: PropTypes.oneOf(AVAILABLE_PLACEMENTS),
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

  /** @type {BannerProps | any} */
  props;

  /**
   * @param {import("./BannerContainer").PresenterBag} presenterBag
   */
  renderPresenter = (presenterBag) => {
    const presenterProps = { ...this.props, ...presenterBag };
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
  renderContainer = ({ handleReady }) => {
    const { actions } = this.props;
    const { renderPresenter } = this;

    return (
      <BannerContainer actions={actions} onReady={handleReady}>
        {renderPresenter}
      </BannerContainer>
    );
  };

  render() {
    const { isVisible, placement } = this.props;
    const { renderContainer } = this;

    return (
      <BannerAnimator
        isVisible={isVisible}
        {...animatorPropsByPlacement[placement]}
      >
        {renderContainer}
      </BannerAnimator>
    );
  }
}
