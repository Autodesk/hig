import React, { Component } from "react";
import PropTypes from "prop-types";

import { placements, AVAILABLE_PLACEMENTS } from "./placements";
import { types, AVAILABLE_TYPES } from "./types";
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

  static propTypes = {
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
    /** Called when the banner is dismissed */
    onDismiss: PropTypes.func,
    /** Animation; Determines the visibility of the banner */
    isVisible: PropTypes.bool,
    /** The displayed message */
    children: PropTypes.string
  };

  /** @type {BannerProps | any} */
  props;

  /**
   * @param {import("./BannerContainer").PresenterBag} presenterBag
   */
  renderPresenter = presenterBag => {
    const presenterProps = { ...this.props, ...presenterBag };
    const { children, ...otherProps } = presenterProps;

    return <BannerPresenter {...otherProps}>{children}</BannerPresenter>;
  };

  render() {
    const { isVisible, actions } = this.props;
    const { renderPresenter } = this;

    return (
      <BannerAnimator isVisible={isVisible}>
        <BannerContainer actions={actions}>{renderPresenter}</BannerContainer>
      </BannerAnimator>
    );
  }
}
