import React, { useState } from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";

import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./Avatar.stylesheet";
import { sizes, AVAILABLE_SIZES } from "./sizes";
import { StyleItems } from "./constants";

export const COLOR_VARIANT_COUNT = 15;

/**
 * @param {Object} name
 * @param {string} name.firstName - first name
 * @param {string} name.lastName - last name
 * @returns {number}
 */
function generateUniqueNumberFromName(name) {
  const { firstName, lastName } = name;
  let firstNum = 0;
  if (firstName) {
    const firstArray = firstName.split("");
    firstArray.forEach(char => {
      firstNum += char.charCodeAt(0);
    });
  }

  let lastNum = 0;
  if (lastName) {
    const lastArray = lastName.split("");
    lastArray.forEach(char => {
      lastNum += char.charCodeAt(0);
    });
  }

  return firstNum + lastNum;
}

/**
 * @param {Object} name
 * @param {string} name.firstName - first name
 * @param {string} name.lastName - last name
 * @returns {number} - whole number between 1 and COLOR_VARIANT_COUNT
 */
export function backgroundIdFromName(name) {
  const uniqueNum = generateUniqueNumberFromName(name);
  // Return whole number between 1 and COLOR_VARIANT_COUNT
  return (Math.round(uniqueNum) % COLOR_VARIANT_COUNT) + 1;
}

/**
 * @param {Object} name
 * @param {string} name.firstName - first name
 * @param {string} name.lastName - last name
 * @returns {string}
 */
function initialsFromName(name) {
  const firstInitial = name.firstName ? name.firstName.slice(0, 1) : "";
  const lastInitial = name.lastName ? name.lastName.slice(0, 1) : "";
  return `${firstInitial}${lastInitial}`.toUpperCase();
}

/**
 * @param {string} name
 * @returns {Object} name
 * @returns {string} name.firstName - first name
 * @returns {string} name.lastName - last name
 */
function buildFirstAndLastName(name) {
  if (typeof name === "string") {
    const spaceIndex = name.lastIndexOf(" ");

    // No spaces - there is only a single name, return it as the firstName
    if (spaceIndex === -1) {
      return {
        firstName: name
      };
    }

    // Grab first name
    const firstName = name.slice(0, spaceIndex);
    // Grab last name, skipping the space
    const lastName = name.slice(spaceIndex + 1);

    // Return new name structure, split into firstName and last
    return {
      firstName,
      lastName
    };
  }

  return name;
}

/**
 * @param {Object} props
 * @param {string} props.image
 * @param {string} props.alt
 * @param {string} props.size
 * @returns {JSX.Element}
 */
function Image({
  image,
  alt,
  size,
  onError,
  className,
  resolvedRoles,
  stylesheet: customStylesheet
}) {
  const styles = stylesheet(
    { size, stylesheet: customStylesheet },
    resolvedRoles
  );

  const imageWrapperClassName = createCustomClassNames(
    className,
    "image-wrapper"
  );
  const imageClassName = createCustomClassNames(className, "image");

  return (
    <span
      className={cx(
        css(styles[StyleItems.avatarImageWrapper]),
        imageWrapperClassName
      )}
    >
      <img
        className={cx(css(styles[StyleItems.avatarImage]), imageClassName)}
        src={image}
        alt={alt}
        onError={onError}
      />
    </span>
  );
}
Image.propTypes = {
  /** URL to a profile image */
  image: PropTypes.string,
  /** Optional alt message override for Avatar Image  */
  alt: PropTypes.string,
  /** Set the size of the avatar */
  size: PropTypes.oneOf(AVAILABLE_SIZES),
  /** Called when an error occurs on the image  */
  onError: PropTypes.func,
  /** Optional className */
  className: PropTypes.string,
  /** Theme context */
  // eslint-disable-next-line react/forbid-prop-types
  resolvedRoles: PropTypes.any,
  /** Optional style override */
  stylesheet: PropTypes.func
};

/**
 * @param {Object} props
 * @param {Object} props.name
 * @param {string} props.name.firstName - first name
 * @param {string} props.name.lastName - last name
 * @param {string} className
 * @returns {JSX.Element}
 */
function Initials({
  size,
  name,
  className,
  resolvedRoles,
  stylesheet: customStylesheet
}) {
  const styles = stylesheet(
    { size, stylesheet: customStylesheet },
    resolvedRoles
  );
  const initials = initialsFromName(name);
  const initialsClassName = createCustomClassNames(className, "initials");

  return (
    <span
      className={cx(css(styles[StyleItems.avatarInitials]), initialsClassName)}
      aria-hidden="true"
    >
      {size === sizes.SMALL_16 ? initials[0] : initials}
    </span>
  );
}
Initials.propTypes = {
  /** Set the size of the avatar */
  size: PropTypes.oneOf(AVAILABLE_SIZES),
  /** First and Last name object */
  name: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }),
  /** Optional className */
  className: PropTypes.string,
  /** Theme context */
  // eslint-disable-next-line react/forbid-prop-types
  resolvedRoles: PropTypes.any,
  /** Optional style override */
  stylesheet: PropTypes.func
};

/**
 * @typedef {Object} AvatarProps
 * @param {string} [name]
 * @param {string} [size]
 * @param {string} [image]
 * @param {Function} [onImageError]

/**
 * @typedef {Object} AvatarState
 * @property {boolean} hasImageError
 * @property {string} [imageUrl]
 */

const Avatar = props => {
  const [imageUrl, setImageUrl] = useState(undefined);
  const [hasImageError, setHasImageError] = useState(false);
  const {
    size,
    name,
    firstName,
    lastName,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;

  const nameObj =
    !firstName && !lastName
      ? buildFirstAndLastName(name)
      : {
          firstName,
          lastName
        };

  const backgroundId = backgroundIdFromName(nameObj);
  const nameStringWithLeadingSpace = `${
    nameObj.firstName ? ` ${nameObj.firstName}` : ""
  }${nameObj.lastName ? ` ${nameObj.lastName}` : ""}`;
  const label = props.label
    ? props.label
    : `Avatar for${nameStringWithLeadingSpace}`;
  const imageAlt = props.imageAlt
    ? props.imageAlt
    : `Avatar image of${nameStringWithLeadingSpace}`;
  const showImage = imageUrl && !hasImageError;
  const styles = roles =>
    stylesheet({ size, backgroundId, stylesheet: customStylesheet }, roles);

  /**
   * @param {Event} errorEvent
   */
  const handleImageError = errorEvent => {
    const { onImageError } = props;

    if (onImageError) {
      onImageError(errorEvent);
      return;
    }
    setHasImageError(true);
  };

  if (imageUrl !== props.image) {
    setImageUrl(props.image);
    setHasImageError(false);
  }

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <span
          aria-label={label}
          className={cx(
            css(styles(resolvedRoles)[StyleItems.avatarContainer]),
            className
          )}
          role="img"
        >
          {!showImage ? null : (
            <Image
              resolvedRoles={resolvedRoles}
              size={size}
              image={imageUrl}
              className={className}
              onError={handleImageError}
              alt={imageAlt}
              stylesheet={customStylesheet}
            />
          )}
          <Initials
            name={nameObj}
            size={size}
            resolvedRoles={resolvedRoles}
            className={className}
            stylesheet={customStylesheet}
          />
        </span>
      )}
    </ThemeContext.Consumer>
  );
};

Avatar.displayName = "Avatar";

Avatar.propTypes = {
  /** The name for the avatar, in one string
   * If firstName/lastName used then those
   * take precedent over this prop
   */
  name: PropTypes.string,
  /** The first name for the avatar */
  firstName: PropTypes.string,
  /** The last name for the avatar */
  lastName: PropTypes.string,
  /** Set the size of the avatar */
  size: PropTypes.oneOf(AVAILABLE_SIZES),
  /** URL to a profile image */
  image: PropTypes.string,
  /** Called when an error occurs on the image  */
  onImageError: PropTypes.func,
  /** Optional label message override for Avatar  */
  label: PropTypes.string,
  /** Optional alt message override for Avatar Image  */
  imageAlt: PropTypes.string,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func
};

Avatar.defaultProps = {
  name: "Anonymous User",
  size: sizes.MEDIUM_32
};

export default Avatar;
