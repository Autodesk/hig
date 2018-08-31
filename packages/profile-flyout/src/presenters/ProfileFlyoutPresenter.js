import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@hig/avatar";
import Flyout, { anchorPoints } from "@hig/flyout";
import "@hig/flyout/build/index.css";

import ProfileContent from "./ProfileContentPresenter";
import "./ProfileFlyoutPresenter.scss";

export default class ProfileFlyoutPresenter extends Component {
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

  static defaultProps = {
    name: ""
  };

  render() {
    const { children, image, name, open } = this.props;

    return (
      <div
        role="button"
        tabIndex="0"
        className="hig__profile-flyout"
        onClick={this.props.onProfileImageClick}
      >
        <Flyout
          anchorPoint={anchorPoints.TOP_LEFT}
          onClickOutside={this.props.onProfileClickOutside}
          open={open}
          panel={({ innerRef }) => (
            <Flyout.Panel innerRef={innerRef}>
              <ProfileContent
                profileName={this.props.name}
                profileEmail={this.props.email}
              >
                {children}
              </ProfileContent>
            </Flyout.Panel>
          )}
        >
          <div className="hig__profile-flyout__profile-image">
            <Avatar
              image={image}
              name={name}
              size={"medium-32"}
              onClick={this.props.onProfileImageClick}
            />
          </div>
        </Flyout>
      </div>
    );
  }
}
