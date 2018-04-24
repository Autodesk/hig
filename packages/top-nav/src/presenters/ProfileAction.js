import React from "react";
import PropTypes from "prop-types";
import Avatar from "@hig/avatar";
/** @todo Move flyout into its own package */
import Flyout from "hig-react/lib/elements/components/Flyout";

import Action from "./Action";

export default function ProfileAction({ avatarName, avatarImage, children }) {
  return (
    <Action>
      <Flyout anchorPoint="top-right" content={children}>
        <button type="button" className="hig__top-nav__profile-action">
          <Avatar name={avatarName} image={avatarImage} size="medium-32" />
        </button>
      </Flyout>
    </Action>
  );
}

ProfileAction.propTypes = {
  /** The name that will converted into initials, and displayed when an image isn't available */
  avatarName: PropTypes.string.isRequired,
  /** Url to a profile image */
  avatarImage: PropTypes.string,
  /** Content to render in the profile flyout */
  children: PropTypes.node
};
