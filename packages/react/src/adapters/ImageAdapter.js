import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image as VanillaImage } from "hig-vanilla";

export default class ImageAdapter extends Component {
  render() {
    return (
      <img
        className={VanillaImage.className}
        src={this.props.src}
        alt={this.props.alt}
        {...this.props}
      />
    );
  }
}

ImageAdapter.propTypes = {
  /**
   * Path to image
   */
  src: PropTypes.string
};
