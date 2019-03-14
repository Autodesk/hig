import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { polyfill } from "react-lifecycles-compat";
import { ThemeContext } from "@hig/theme-context";
import { sizes, AVAILABLE_SIZES } from "./sizes";
import stylesheet from "./Avatar.stylesheet";

const COLOR_VARIANT_COUNT = 7;

/**
 * @param {number} value
 * @param {number[]} range1
 * @param {number[]} range2
 * @returns {string}
 */
function convertRanges(value, range1, range2) {
  return Number(
    ((value - range1[0]) * (range2[1] - range2[0])) / (range1[1] - range1[0]) +
      range2[0]
  ).toFixed();
}

/**
 * @param {string} name
 * @returns {string}
 */
function backgroundIdFromName(name) {
  return convertRanges(
    name.charCodeAt(0) - 65,
    [0, 26],
    [1, COLOR_VARIANT_COUNT]
  );
}

/**
 * @param {string} name
 * @returns {string}
 */
function initialsFromName(name) {
  const initials = name.match(/\b\w/g) || [];

  return ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
}

/**
 * @param {Object} props
 * @param {string} props.image
 * @param {string} props.name
 * @returns {JSX.Element}
 */
// eslint-disable-next-line react/prop-types
function Image({ image, name, size, onError, resolvedRoles }) {
  const alt = `Avatar image of ${name}`;
  const styles = stylesheet({ size }, resolvedRoles);

  return (
    <span className={css(styles.avatar.imageWrapper)}>
      <img
        className={css(styles.avatar.image)}
        src={image}
        alt={alt}
        onError={onError}
      />
    </span>
  );
}

/**
 * @param {Object} props
 * @param {Object} props.name
 * @returns {JSX.Element}
 */
// eslint-disable-next-line react/prop-types
function Initials({ size, name, resolvedRoles }) {
  const styles = stylesheet({ size, name }, resolvedRoles);
  const initials = initialsFromName(name);

  return (
    <span className={css(styles.avatar.initials)} aria-hidden="true">
      {size === sizes.SMALL_16 ? initials[0] : initials}
    </span>
  );
}

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

class Avatar extends Component {
  static propTypes = {
    /** The name for the avatar */
    name: PropTypes.string,
    /** Set the size of the avatar */
    size: PropTypes.oneOf(AVAILABLE_SIZES),
    /** URL to a profile image */
    // eslint-disable-next-line react/no-unused-prop-types
    image: PropTypes.string,
    /** Called when an error occurs on the image  */
    onImageError: PropTypes.func
  };

  static defaultProps = {
    name: "Anonymous User",
    size: sizes.MEDIUM_32
  };

  /** @type {AvatarState} */
  state = {
    hasImageError: false,
    imageUrl: undefined
  };

  /**
   * @param {AvatarProps} nextProps
   * @param {AvatarState} prevState
   * @returns {AvatarState | null}
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    const { image } = nextProps;
    const { imageUrl } = prevState;

    if (image === imageUrl) return null;

    return {
      hasImageError: false,
      imageUrl: image
    };
  }

  /**
   * @param {Event} errorEvent
   */
  handleImageError = errorEvent => {
    const { onImageError } = this.props;

    if (onImageError) {
      onImageError(errorEvent);
      return;
    }

    this.setState({ hasImageError: true });
  };

  render() {
    const { size, name } = this.props;
    const { imageUrl, hasImageError } = this.state;
    const { handleImageError } = this;
    const backgroundId = backgroundIdFromName(name) <= COLOR_VARIANT_COUNT ? backgroundIdFromName(name) : COLOR_VARIANT_COUNT;
    const label = `Avatar for ${name}`;
    const showImage = imageUrl && !hasImageError;
    const styles = roles => stylesheet({ size, backgroundId }, roles);

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => (
          <span
            aria-label={label}
            className={css(styles(resolvedRoles).avatar.container)}
            role="img"
          >
            {!showImage ? null : (
              <Image
                resolvedRoles={resolvedRoles}
                size={size}
                image={imageUrl}
                name={name}
                onError={handleImageError}
              />
            )}
            <Initials name={name} size={size} resolvedRoles={resolvedRoles} />
          </span>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default polyfill(Avatar);
