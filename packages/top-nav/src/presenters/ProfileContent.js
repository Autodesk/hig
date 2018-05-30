import React from "react";
import PropTypes from "prop-types";

export default function ProfileContent(props) {
  const { profileName, profileEmail, children } = props;
  return (
    <div className="hig__top-nav__profile-flyout-content">
      <div className="hig__top-nav__profile-flyout-content__name">
        {profileName}
      </div>
      <div className="hig__top-nav__profile-flyout-content__email">
        {profileEmail}
      </div>
      {children}
    </div>
  );
}

ProfileContent.propTypes = {
  /** The displayed name */
  profileName: PropTypes.string,
  /** The displayed email */
  profileEmail: PropTypes.string,
  /** Profile actions */
  children: PropTypes.node
};
