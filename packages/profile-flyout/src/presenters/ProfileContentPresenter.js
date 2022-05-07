import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import ThemeContext from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";
import stylesheet from "./stylesheet";

export default function ProfileContentPresenter(props) {
  const {
    children,
    profileEmail,
    profileName,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;
  const profileNameClassName = createCustomClassNames(
    className,
    "profile-name"
  );
  const profileEmailClassName = createCustomClassNames(
    className,
    "profile-email"
  );

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          { stylesheet: customStylesheet },
          resolvedRoles
        );

        return (
          <div className={cx(className, css(styles.profileContent))}>
            {profileName ? (
              <span
                className={cx(profileNameClassName, css(styles.profileName))}
              >
                {profileName}
              </span>
            ) : null}
            {profileEmail ? (
              <span
                className={cx(profileEmailClassName, css(styles.profileEmail))}
              >
                {profileEmail}
              </span>
            ) : null}
            {children}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

ProfileContentPresenter.propTypes = {
  /** Profile actions */
  children: PropTypes.node,
  /** The displayed email */
  profileEmail: PropTypes.string,
  /** The displayed name */
  profileName: PropTypes.string,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func,
};
