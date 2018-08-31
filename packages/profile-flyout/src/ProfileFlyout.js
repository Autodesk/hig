import React, { Component } from "react";
import PropTypes from "prop-types";

import ProfileFlyoutPresenter from "./presenters/ProfileFlyoutPresenter";
import ProfileFlyoutBehavior from "./behaviors/ProfileFlyoutBehavior";

export default class ProfileFlyout extends Component {
  static propTypes = {
    /** Content to be rendered inside the flyout, other than name and email */
    children: PropTypes.node,
    /** Signed-in user's email address */
    email: PropTypes.string,
    /** Url pointing to signed in user's avatar image */
    image: PropTypes.string,
    /** Signed-in user's name */
    name: PropTypes.string,
    /** Called when user clicks away from the profile flyout */
    onProfileClickOutside: PropTypes.func,
    /** Called when user clicks the profile image */
    onProfileImageClick: PropTypes.func,
    /** Shows or hides the flyout */
    open: PropTypes.bool
  };

  render() {
    const {
      children,
      email,
      image,
      name,
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
            email={email}
            image={image}
            name={name}
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
