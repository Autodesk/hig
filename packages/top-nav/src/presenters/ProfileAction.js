import React from "react";
import PropTypes from "prop-types";
import Avatar from "@hig/avatar";
import { combineEventHandlers } from "@hig/utils";
/** @todo Move flyout into its own package */
import Flyout from "hig-react/lib/elements/components/Flyout";

import "@hig/avatar/build/index.css";

import Action from "./Action";

export default function ProfileAction({
  avatarName,
  avatarImage,
  onClick,
  children
}) {
  return (
    <Action>
      <Flyout anchorPoint="top-right" content={children}>
        {({ handleClick }) => (
          <button
            type="button"
            className="hig__top-nav__profile-action"
            onClick={combineEventHandlers(onClick, handleClick)}
          >
            <Avatar name={avatarName} image={avatarImage} size="medium-32" />
          </button>
        )}
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
  children: PropTypes.node,
  /** Callback when the flyout is opened */
  onClick: PropTypes.func
};
