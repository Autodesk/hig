import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

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
    (value - range1[0]) * (range2[1] - range2[0]) / (range1[1] - range1[0]) +
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
function Image({ image, name }) {
  const alt = `Avatar image of ${name}`;

  return (
    <div className="hig__avatarV2__image-wrapper">
      <img className="hig__avatarV2__image" src={image} alt={alt} />
    </div>
  );
}

/**
 * @param {Object} props
 * @param {Object} props.name
 * @returns {JSX.Element}
 */
function Initials({ name }) {
  return (
    <div className="hig__avatarV2__initials" aria-hidden="true">
      {initialsFromName(name)}
    </div>
  );
}

export default class Avatar extends Component {
  render() {
    const { size, name, image } = this.props;
    const label = `Avatar for ${name}`;
    const classes = cx(
      "hig__avatarV2",
      `hig__avatarV2--size--${size}`,
      `hig__avatarV2__background--${backgroundIdFromName(name)}`
    );

    return (
      <figure className={classes} aria-label={label}>
        {image ? <Image image={image} name={name} /> : <Initials name={name} />}
      </figure>
    );
  }
}

Avatar.propTypes = {
  /**
   * The name for the avatar
   */
  name: PropTypes.string.isRequired,
  /**
   * Set the size of the avatar
   */
  size: PropTypes.oneOf(AVAILABLE_SIZES).isRequired,
  /**
   * Url to a profile image
   */
  image: PropTypes.string
};
