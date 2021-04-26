import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { polyfill } from "react-lifecycles-compat";

import Avatar, { sizes, AVAILABLE_SIZES } from "@hig/avatar";
import { ThemeContext } from "@hig/theme-context";

import ClipPaths from "./clip-paths";
import stylesheet from "./AvatarBundle.stylesheet";
import { spacings, AVAILABLE_SPACING } from "./spacings";

class AvatarBundle extends Component {
  static propTypes = {
    /** Set the size of the avatar */
    size: PropTypes.oneOf(AVAILABLE_SIZES),
    /** Set the spacing between the avatars */
    spacing: PropTypes.oneOf(AVAILABLE_SPACING),
    /** Optional Hex code border color, in case the clipPath feature cannot be used */
    borderColor: PropTypes.string,
    /** Shows the third avatar as a number of remaining avatars */
    showOverflowCount: PropTypes.bool,
    /** Array of Avatar info */
    avatars: PropTypes.arrayOf(
      PropTypes.shape({
        /** The first name for the avatar */
        firstName: PropTypes.string,
        /** The last name for the avatar */
        lastName: PropTypes.string,
        /** URL to a profile image */
        image: PropTypes.string,
        /** Called when an error occurs on the image  */
        onImageError: PropTypes.func,
        /** Optional label message override for Avatar  */
        label: PropTypes.string,
        /** Optional alt message override for Avatar Image  */
        imageAlt: PropTypes.string,
        /** Function to modify the individual Avatar component's styles */
        stylesheet: PropTypes.func
      })
    ),
    /** Function to modify the component's styles */
    stylesheet: PropTypes.func
  };

  static defaultProps = {
    size: sizes.MEDIUM_32,
    spacing: spacings.DEFAULT,
    avatars: []
  };

  render() {
    const {
      size,
      spacing,
      borderColor,
      showOverflowCount,
      avatars,
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;
    const { className } = otherProps;

    const styles = roles =>
      stylesheet(
        { size, spacing, borderColor, stylesheet: customStylesheet },
        roles
      );

    let overflow = 0;
    if (showOverflowCount && avatars.length > 3) {
      const overflowAmt = avatars.length - 2;
      if (overflowAmt <= 99) {
        overflow = overflowAmt;
      } else {
        overflow = 99;
      }
    }

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => (
          <span
            className={cx(
              css(styles(resolvedRoles).avatarBundleContainer),
              className
            )}
          >
            <span
              className={cx(
                css(styles(resolvedRoles).avatarWrapper),
                css(styles(resolvedRoles).avatarWrapperFirstItem)
              )}
            >
              <Avatar size={size} {...avatars[0]} />
            </span>
            {avatars.length > 1 && (
              <span
                className={cx(
                  css(styles(resolvedRoles).avatarWrapper),
                  css(styles(resolvedRoles).avatarWrapperSecondItem)
                )}
              >
                <Avatar size={size} {...avatars[1]} />
              </span>
            )}
            {avatars.length > 2 &&
              overflow === 0 && (
                <span
                  className={cx(
                    css(styles(resolvedRoles).avatarWrapper),
                    css(styles(resolvedRoles).avatarWrapperThirdItem)
                  )}
                >
                  <Avatar size={size} {...avatars[2]} />
                </span>
              )}
            {overflow > 0 && (
              <span
                className={cx(
                  css(styles(resolvedRoles).avatarWrapper),
                  css(styles(resolvedRoles).avatarOverflowCount)
                )}
              >
                {`+${overflow}`}
              </span>
            )}
            <ClipPaths />
          </span>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default polyfill(AvatarBundle);
