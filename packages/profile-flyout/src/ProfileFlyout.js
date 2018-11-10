import React, { Component } from "react";
import PropTypes from "prop-types";
import Flyout, { AVAILABLE_ANCHOR_POINTS } from "@hig/flyout";
import { combineEventHandlers } from "@hig/utils";

import ProfileButtonPresenter from "./presenters/ProfileButtonPresenter";

export default class ProfileFlyout extends Component {
  static propTypes = {
    /** Manipulate flyout coordinates before each render */
    alterCoordinates: PropTypes.func,
    /** Where the flyout will be anchored relative to target */
    anchorPoint: PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS),
    /** Url pointing to signed in user's avatar image */
    avatarImage: PropTypes.string,
    /** Signed-in user's name */
    avatarName: PropTypes.string,
    /** Content to be rendered inside the flyout */
    children: PropTypes.node,
    /**
     * When the flyout overflows the viewport, it'll attempt to
     * use the given anchor points in order to keep the flyout
     * within the viewport.
     */
    fallbackAnchorPoints: PropTypes.arrayOf(
      PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS)
    ),
    /** Called when user clicks away from the profile flyout */
    onProfileClickOutside: PropTypes.func,
    /** Called when user clicks the profile image */
    onProfileImageClick: PropTypes.func,
    /** Shows or hides the flyout */
    open: PropTypes.bool,
    /** Renders a custom flyout panel. Can be either a node or a render function */
    panel: PropTypes.func
  };

  static defaultProps = {
    panel: ({ content, innerRef }) => (
      <Flyout.Panel innerRef={innerRef}>{content}</Flyout.Panel>
    )
  };

  render() {
    const {
      alterCoordinates,
      anchorPoint,
      avatarImage,
      avatarName,
      children,
      fallbackAnchorPoints,
      onProfileClickOutside,
      onProfileImageClick,
      open,
      panel
    } = this.props;

    return (
      <Flyout
        alterCoordinates={alterCoordinates}
        anchorPoint={anchorPoint}
        content={children}
        fallbackAnchorPoints={fallbackAnchorPoints}
        onClickOutside={onProfileClickOutside}
        open={open}
        panel={panel}
      >
        {({ handleClick }) => (
          <ProfileButtonPresenter
            avatarImage={avatarImage}
            avatarName={avatarName}
            onClick={combineEventHandlers(handleClick, onProfileImageClick)}
          />
        )}
      </Flyout>
    );
  }
}
