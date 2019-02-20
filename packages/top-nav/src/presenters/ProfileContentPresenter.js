import React from "react";
import PropTypes from "prop-types";

export default function ProfileContent(props) {
  const { profileName, profileEmail, children } = props;
  return (
    <div>
      <div>{profileName}</div>
      <div>{profileEmail}</div>
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
