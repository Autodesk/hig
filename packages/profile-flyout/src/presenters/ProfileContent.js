import React from "react";
import PropTypes from "prop-types";

import "./ProfileContent.scss";

export default function ProfileContent(props) {
  const { profileName, profileEmail, children } = props;
  return (
    <div className="hig__profile-flyout__content">
      <div className="hig__profile-flyout__content__name">{profileName}</div>
      <div className="hig__profile-flyout__content__email">{profileEmail}</div>
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
