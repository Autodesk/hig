import React, { Component } from "react";
import PropTypes from "prop-types";

import ProfileFlyoutPresenter from "./presenters/ProfileFlyoutPresenter";
import ProfileFlyoutBehavior from "./behaviors/ProfileFlyoutBehavior";

export default class ProfileFlyout extends Component {
  static propTypes = {
    /** Url pointing to signed in user's avatar image */
    avatarImage: PropTypes.string,
    /** Signed-in user's name */
    avatarName: PropTypes.string,
    /** Content to be rendered inside the flyout */
    children: PropTypes.node,
    /** Called when user clicks away from the profile flyout */
    onProfileClickOutside: PropTypes.func,
    /** Called when user clicks the profile image */
    onProfileImageClick: PropTypes.func,
    /** Shows or hides the flyout */
    open: PropTypes.bool
  };

  render() {
    const {
      avatarImage,
      avatarName,
      children,
      onProfileClickOutside,
      onProfileImageClick,
      open
    } = this.props;

    return (
      <ProfileFlyoutBehavior
        onProfileClickOutside={onProfileClickOutside}
        onProfileImageClick={onProfileImageClick}
        open={open}
      >
        {({ handleProfileClickOutside, handleProfileImageClick }) => (
          <ProfileFlyoutPresenter
            image={avatarImage}
            name={avatarName}
            onProfileClickOutside={handleProfileClickOutside}
            onProfileImageClick={handleProfileImageClick}
            open={open}
          >
            {children}
          </ProfileFlyoutPresenter>
        )}
      </ProfileFlyoutBehavior>
    );
  }
}
