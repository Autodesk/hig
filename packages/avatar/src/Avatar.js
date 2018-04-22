import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./avatar.scss";
import _AVAILABLE_SIZES from "./sizes";

export default class Avatar extends Component {
  _initialsFromName = name => {
    const initials = name.match(/\b\w/g) || [];
    return ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
  };

  _backgroundIdFromName = name =>
    this._convertRanges(name.charCodeAt(0) - 65, [0, 26], [1, 9]);

  _convertRanges = (value, range1, range2) =>
    Number(
      (value - range1[0]) * (range2[1] - range2[0]) / (range1[1] - range1[0]) +
        range2[0]
    ).toFixed();

  render() {
    const avatarClasses = cx(
      "hig__avatar",
      `hig__avatar--size--${this.props.size}`,
      `hig__avatar__background--${this._backgroundIdFromName(this.props.name)}`
    );

    return (
      <div className={avatarClasses}>
        {this.props.image && (
          <div className="hig__avatar__image-wrapper">
            <img
              className="hig__avatar__image"
              src={this.props.image}
              alt={`Avatar for ${this.props.name}`}
            />
          </div>
        )}
        <div className="hig__avatar__initials">
          {this._initialsFromName(this.props.name)}
        </div>
      </div>
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
  size: PropTypes.oneOf(_AVAILABLE_SIZES).isRequired,
  /**
   * Url to a profile image
   */
  image: PropTypes.string
};
