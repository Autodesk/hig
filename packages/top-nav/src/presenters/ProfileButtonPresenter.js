import React from "react";
import PropTypes from "prop-types";
import Avatar, { sizes } from "@hig/avatar";

import "./ProfileButtonPresenter.scss";

/**
 * @todo Remove the wrapping <div /> and move <SeparatorPresenter /> outside the component
 */
export default function ProfileButtonPresenter({
  avatarImage,
  avatarName,
  onClick
}) {
  return (
    <button
      type="button"
      className="hig__top-nav__profile-action__button"
      onClick={onClick}
    >
      <Avatar name={avatarName} image={avatarImage} size={sizes.MEDIUM_32} />
    </button>
  );
}

ProfileButtonPresenter.propTypes = {
  /** Url to a profile image */
  avatarImage: PropTypes.string,
  /** The name that will converted into initials, and displayed when an image isn't available */
  avatarName: PropTypes.string.isRequired,
  /** Callback when the flyout is opened */
  onClick: PropTypes.func
};
