import React from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";

import Avatar, { sizes, AVAILABLE_SIZES } from "@hig/avatar";
import { ThemeContext } from "@hig/theme-context";

import ClipPaths from "./clip-paths";
import stylesheet from "./AvatarBundle.stylesheet";
import { spacings, AVAILABLE_SPACING } from "./spacings";

const AvatarBundle = (props) => {
  const {
    size,
    spacing,
    borderColor,
    showOverflowCount,
    avatars,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;

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
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          { size, spacing, borderColor, stylesheet: customStylesheet },
          resolvedRoles
        );
        return (
          <span className={cx(css(styles.avatarBundleContainer), className)}>
            <span
              className={cx(
                css(styles.avatarWrapper),
                css(styles.avatarWrapperFirstItem)
              )}
            >
              <Avatar size={size} {...avatars[0]} />
            </span>
            {avatars.length > 1 && (
              <span
                className={cx(
                  css(styles.avatarWrapper),
                  css(styles.avatarWrapperSecondItem)
                )}
              >
                <Avatar size={size} {...avatars[1]} />
              </span>
            )}
            {avatars.length > 2 && overflow === 0 && (
              <span
                className={cx(
                  css(styles.avatarWrapper),
                  css(styles.avatarWrapperThirdItem)
                )}
              >
                <Avatar size={size} {...avatars[2]} />
              </span>
            )}
            {overflow > 0 && (
              <span
                className={cx(
                  css(styles.avatarWrapper),
                  css(styles.avatarOverflowCount)
                )}
              >
                {`+${overflow}`}
              </span>
            )}
            <ClipPaths />
          </span>
        );
      }}
    </ThemeContext.Consumer>
  );
};

AvatarBundle.displayName = "AvatarBundle";

AvatarBundle.propTypes = {
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
      stylesheet: PropTypes.func,
    })
  ),
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func,
};

AvatarBundle.defaultProps = {
  size: sizes.MEDIUM_32,
  spacing: spacings.DEFAULT,
  avatars: [],
};

export default AvatarBundle;
