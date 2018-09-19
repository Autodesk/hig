import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { polyfill } from "react-lifecycles-compat";

import { sizes, AVAILABLE_SIZES } from "./sizes";
import "./Avatar.scss";

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
    <span className="hig__avatarV2__image-wrapper">
      <img
        className="hig__avatarV2__image"
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
function Initials({ name }) {
  return (
    <span className="hig__avatarV2__initials" aria-hidden="true">
      {initialsFromName(name)}
    </span>
  );
}

const modifiersBySize = {
  [sizes.SMALL_16]: "hig__avatarV2--size--small",
  [sizes.MEDIUM_24]: "hig__avatarV2--size--medium",
  [sizes.MEDIUM_32]: "hig__avatarV2--size--medium-32",
  [sizes.LARGE_36]: "hig__avatarV2--size--large",
  [sizes.LARGE_48]: "hig__avatarV2--size--large-48",
  [sizes.XLARGE_64]: "hig__avatarV2--size--extralarge"
};

const modifiersByBackgroundId = {
  "1": "hig__avatarV2__background--turquoise",
  "2": "hig__avatarV2__background--purple",
  "3": "hig__avatarV2__background--pink",
  "4": "hig__avatarV2__background--salmon",
  "5": "hig__avatarV2__background--blue",
  "6": "hig__avatarV2__background--green",
  "7": "hig__avatarV2__background--turquoise",
  "8": "hig__avatarV2__background--indigo",
  "9": "hig__avatarV2__background--gold"
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
    const backgroundId = backgroundIdFromName(name);
    const label = `Avatar for ${name}`;
    const showImage = imageUrl && !hasImageError;
    const classes = cx(
      "hig__avatarV2",
      modifiersBySize[size],
      modifiersByBackgroundId[backgroundId]
    );

    return (
      <span aria-label={label} className={classes} role="img">
        {!showImage ? null : (
          <Image image={imageUrl} name={name} onError={handleImageError} />
        )}
        <Initials name={name} />
      </span>
    );
  }
}

export default polyfill(Avatar);
