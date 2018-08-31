import React, { Component } from "react";
import PropTypes from "prop-types";
import { combineEventHandlers } from "@hig/utils";
import Flyout, {
  anchorPoints,
  AVAILABLE_ANCHOR_POINTS,
  offsetContainerVertical
} from "@hig/flyout";
import "@hig/flyout/build/index.css";

import { renderActionFlyoutPanel } from "./presenters/ActionFlyoutPanelPresenter";
import ActionPresenter from "./presenters/ActionPresenter";
import ProfileActionPresenter from "./presenters/ProfileActionPresenter";
import ProfileButtonPresenter from "./presenters/ProfileButtonPresenter";
import SeparatorPresenter from "./presenters/SeparatorPresenter";

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
    ).isRequired,
    /** Content to render in the profile flyout */
    children: PropTypes.node,
    /** Callback when the flyout is opened */
    onClick: PropTypes.func
  };

  static defaultProps = {
    /**
     * @param {Coordinates} coordinates
     * @returns {Coordinates}
     */
    alterCoordinates(coordinates) {
      return offsetContainerVertical(coordinates, 4);
    },
    anchorPoint: anchorPoints.TOP_RIGHT,
    fallbackAnchorPoints: []
  };

  /**
   * @todo Remove the <ProfileActionPresenter />
   * @todo Remove <SeparatorPresenter /> the component
   */
  render() {
    const {
      alterCoordinates,
      anchorPoint,
      avatarImage,
      avatarName,
      children,
      fallbackAnchorPoints,
      onClick
    } = this.props;

    return (
      <ProfileActionPresenter>
        <SeparatorPresenter />
        <ActionPresenter>
          <Flyout
            alterCoordinates={alterCoordinates}
            anchorPoint={anchorPoint}
            content={children}
            fallbackAnchorPoints={fallbackAnchorPoints}
            panel={renderActionFlyoutPanel}
          >
            {({ handleClick }) => (
              <ProfileButtonPresenter
                avatarImage={avatarImage}
                avatarName={avatarName}
                onClick={combineEventHandlers(onClick, handleClick)}
              />
            )}
          </Flyout>
        </ActionPresenter>
      </ProfileActionPresenter>
    );
  }
}
