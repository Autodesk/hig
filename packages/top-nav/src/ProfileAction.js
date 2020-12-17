import React, { Component } from "react";
import PropTypes from "prop-types";
import { offsetPanelHorizontal, offsetContainerVertical } from "@hig/flyout";
import ProfileFlyout, {
  anchorPoints,
  AVAILABLE_ANCHOR_POINTS
} from "@hig/profile-flyout";
import { createCustomClassNames } from "@hig/utils";

import { renderActionFlyoutPanel } from "./presenters/ActionFlyoutPanelPresenter";
import ProfileActionPresenter from "./presenters/ProfileActionPresenter";

/** @typedef {import("@hig/flyout").Coordinates} Coordinates */

export default class ProfileAction extends Component {
  static propTypes = {
    /** Manipulate flyout coordinates before each render */
    alterCoordinates: PropTypes.func,
    /** Where the flyout will be anchored relative to target */
    anchorPoint: PropTypes.string,
    /** The name that will converted into initials, and displayed when an image isn't available */
    avatarName: PropTypes.string.isRequired,
    /** Url to a profile image */
    avatarImage: PropTypes.string,
    /**
     * When the flyout overflows the viewport, it'll attempt to
     * use the given anchor points in order to keep the flyout
     * within the viewport.
     */
    fallbackAnchorPoints: PropTypes.arrayOf(
      PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS)
    ),
    /** Content to render in the profile flyout */
    children: PropTypes.node,
    /** Callback when the flyout is opened */
    onClick: PropTypes.func,
    /** Function to modify the component's styles */
    stylesheet: PropTypes.func
  };

  static defaultProps = {
    /**
     * @param {Coordinates} coordinates
     * @returns {Coordinates}
     */
    alterCoordinates(coordinates) {
      return offsetPanelHorizontal(offsetContainerVertical(coordinates, 10), 6);
    },
    anchorPoint: anchorPoints.TOP_RIGHT,
    fallbackAnchorPoints: []
  };

  render() {
    const {
      alterCoordinates,
      anchorPoint,
      avatarImage,
      avatarName,
      children,
      fallbackAnchorPoints,
      onClick,
      stylesheet,
      ...otherProps
    } = this.props;
    const { className } = otherProps;
    const topNavProfileFlyoutClassName = createCustomClassNames(
      className,
      "top-nav__profile-flyout"
    );

    return (
      <ProfileActionPresenter className={className}>
        <ProfileFlyout
          alterCoordinates={alterCoordinates}
          anchorPoint={anchorPoint}
          avatarImage={avatarImage}
          avatarName={avatarName}
          className={topNavProfileFlyoutClassName}
          fallbackAnchorPoints={fallbackAnchorPoints}
          onProfileImageClick={onClick}
          panel={renderActionFlyoutPanel}
          stylesheet={stylesheet}
        >
          {children}
        </ProfileFlyout>
      </ProfileActionPresenter>
    );
  }
}
