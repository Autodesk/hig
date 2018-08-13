import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { polyfill } from "react-lifecycles-compat";

import "./avatar.scss";
import { AVAILABLE_SIZES } from "./sizes";

/**
 * @param {number} value
 * @param {number[]} range1
 * @param {number[]} range2
 * @returns {number}
 */
function convertRanges(value, range1, range2) {
  return Number(
    ((value - range1[0]) * (range2[1] - range2[0])) / (range1[1] - range1[0]) +
      range2[0]
  ).toFixed();
}

/**
 * @param {string} name
 * @returns {number}
 */
function backgroundIdFromName(name) {
  return convertRanges(name.charCodeAt(0) - 65, [0, 26], [1, 9]);
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
function Image({ image, name, onError }) {
  const alt = `Avatar image of ${name}`;

  return (
    <div className="hig__avatarV2__image-wrapper">
      <img
        className="hig__avatarV2__image"
        src={image}
        alt={alt}
        onError={onError}
      />
    </div>
  );
}

/**
 * @param {Object} props
 * @param {Object} props.name
 * @returns {JSX.Element}
 */
// eslint-disable-next-line react/prop-types
function Initials({ name }) {
  return (
    <div className="hig__avatarV2__initials" aria-hidden="true">
      {initialsFromName(name)}
    </div>
  );
}

/**
 * @typedef {Object} AvatarProps
 * @param {string} name
 * @param {string} size
 * @param {string} [image]
 * @param {Function} [onImageError]

/**
 *
 *
 * @typedef {Object} AvatarState
 * @property {boolean} hasImageError
 * @property {string} [imageUrl]
 */

class Avatar extends Component {
  static propTypes = {
    /** The name for the avatar */
    name: PropTypes.string.isRequired,
    /** Set the size of the avatar */
    size: PropTypes.oneOf(AVAILABLE_SIZES).isRequired,
    /** URL to a profile image */
    // eslint-disable-next-line react/no-unused-prop-types
    image: PropTypes.string,
    /** Called when an error occurs on the image  */
    onImageError: PropTypes.func
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
    const label = `Avatar for ${name}`;
    const showImage = imageUrl && !hasImageError;
    const classes = cx(
      "hig__avatarV2",
      `hig__avatarV2--size--${size}`,
      `hig__avatarV2__background--${backgroundIdFromName(name)}`
    );

    return (
      <figure className={classes} aria-label={label}>
        {!showImage ? null : (
          <Image image={imageUrl} name={name} onError={handleImageError} />
        )}
        <Initials name={name} />
      </figure>
    );
  }
}

export default polyfill(Avatar);
