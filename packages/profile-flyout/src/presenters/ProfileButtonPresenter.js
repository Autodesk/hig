import React from "react";
import PropTypes from "prop-types";
import Avatar, { sizes } from "@hig/avatar";
import { css } from "emotion";
import stylesheet from "./stylesheet";

export default function ProfileButtonPresenter({
  avatarImage,
  avatarName,
  onClick,
  stylesheet: customStylesheet
}) {
  const styles = stylesheet({ stylesheet: customStylesheet });

  return (
    <button
      type="button"
      className={css(styles.flyoutButton)}
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
  avatarName: PropTypes.string,
  /** Callback when the flyout is opened */
  onClick: PropTypes.func,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func
};
