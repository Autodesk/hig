import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";
import stylesheet from "./stylesheet";

export default function ProfileContentPresenter(props) {
  const { profileName, profileEmail, children } = props;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(resolvedRoles, metadata.colorSchemeId);

        return (
          <div className={css(styles.profileContent)}>
            {profileName ? (
              <span className={css(styles.profileName)}>{profileName}</span>
            ) : null}
            {profileEmail ? (
              <span className={css(styles.profileEmail)}>{profileEmail}</span>
            ) : null}
            {children}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

ProfileContentPresenter.propTypes = {
  /** The displayed name */
  profileName: PropTypes.string,
  /** The displayed email */
  profileEmail: PropTypes.string,
  /** Profile actions */
  children: PropTypes.node
};
