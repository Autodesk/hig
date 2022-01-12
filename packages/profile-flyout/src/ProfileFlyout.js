import React from "react";
import PropTypes from "prop-types";
import Flyout, { AVAILABLE_ANCHOR_POINTS } from "@hig/flyout";
import { combineEventHandlers } from "@hig/utils";

import ProfileButtonPresenter from "./presenters/ProfileButtonPresenter";

const ProfileFlyout = props => {
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
    panel,
    stylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;

  return (
    <Flyout
      alterCoordinates={alterCoordinates}
      anchorPoint={anchorPoint}
      className={className}
      content={children}
      fallbackAnchorPoints={fallbackAnchorPoints}
      onClickOutside={onProfileClickOutside}
      open={open}
      panel={panel}
      stylesheet={stylesheet}
    >
      {({ handleClick }) => (
        <ProfileButtonPresenter
          avatarImage={avatarImage}
          avatarName={avatarName}
          className={className}
          onClick={combineEventHandlers(handleClick, onProfileImageClick)}
          stylesheet={stylesheet}
        />
      )}
    </Flyout>
  );
};

ProfileFlyout.displayName = "ProfileFlyout";

ProfileFlyout.propTypes = {
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
  panel: PropTypes.func,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func
};

ProfileFlyout.defaultProps = {
  // eslint-disable-next-line react/prop-types
  panel: ({ content, innerRef }) => (
    <Flyout.Panel innerRef={innerRef}>{content}</Flyout.Panel>
  )
};

export default ProfileFlyout;
