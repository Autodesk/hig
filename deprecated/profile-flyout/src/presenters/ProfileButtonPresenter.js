import React from "react";
import PropTypes from "prop-types";
import Avatar, { sizes } from "@hig/avatar";
import { createCustomClassNames } from "@hig/utils";
import { css, cx } from "emotion";
import stylesheet from "./stylesheet";

export default function ProfileButtonPresenter({
  avatarImage,
  avatarName,
  onClick,
  stylesheet: customStylesheet,
  ...otherProps
}) {
  const { className } = otherProps;
  const profileFlyoutButtonClassName = createCustomClassNames(
    className,
    "profile-flyout-button"
  );
  const profileFlyoutAvatarClassName = createCustomClassNames(
    className,
    "profile-flyout-avatar"
  );
  const styles = stylesheet({ stylesheet: customStylesheet });

  return (
    <button
      type="button"
      className={cx(
        profileFlyoutButtonClassName,
        css(styles.profileFlyoutButton)
      )}
      onClick={onClick}
    >
      <Avatar
        className={profileFlyoutAvatarClassName}
        image={avatarImage}
        name={avatarName}
        size={sizes.MEDIUM_32}
      />
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
  stylesheet: PropTypes.func,
};
