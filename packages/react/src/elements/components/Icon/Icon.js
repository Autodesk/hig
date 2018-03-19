/* eslint consistent-return: 0 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./icon.scss";

import Icons from "../Icons/icons";

const AvailableSizes = ["24", "16"];

export default class Icon extends Component {
  // componentDidMount() {
  //   this.setSizedIcon(this.props.nameOrSvg, (this.props.size = "24"));
  // }

  setSizedIcon(icon, size) {
    if (!(icon && size)) {
      return; // Silently return until name and size are set
    }

    return AvailableSizes.indexOf(size) > -1
      ? this._confirmNameOrSVG(icon, size)
      : console.error(
          `Icon named "${icon} size "${size}" not found, only these size are allowed: `,
          AvailableSizes
        );
  }

  setIconClass(icon, size) {
    return AvailableSizes.includes(size)
      ? `hig__icon--${size}-size`
      : console.error(
          `Icon named "${icon} size "${size}" not found, only these size are allowed: `,
          AvailableSizes
        );
  }

  _confirmNameOrSVG(icon, size) {
    const isNamedIcon = Icons[`${icon}-${size}`];
    const isSVG = /^<svg/.test(icon);

    if (isNamedIcon) {
      return isNamedIcon;
    } else if (isSVG) {
      return icon;
    }
    console.warn(`NO HIG ICON: ${icon}`);
  }

  render() {
    const iconClasses = cx(
      "hig__icon",
      this.setIconClass(this.props.nameOrSvg, this.props.size)
    );

    const iconString = this.setSizedIcon(this.props.nameOrSVG, this.props.size);
    return (
      <div
        className={iconClasses}
        dangerouslySetInnerHTML={{ __html: iconString }}
      />
    );
  }
}

Icon.defaultProps = {
  size: "24"
};

Icon.propTypes = {
  /**
   * String that identifies icon
   */
  nameOrSVG: PropTypes.string,
  /**
   * Function to call when Toast is dismissed
   */
  size: PropTypes.string
};
