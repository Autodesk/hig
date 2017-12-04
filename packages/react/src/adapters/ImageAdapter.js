import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image as VanillaImage } from "hig-vanilla";

class ImageAdapter extends Component {
  render() {
    return (
      <img
        className={VanillaImage.className}
        src={this.props.src}
        {...this.props}
      />
    );
  }
}

ImageAdapter.propTypes = {
  src: PropTypes.string
};

ImageAdapter.__docgenInfo = {
  props: {
    src: {
      description: "path to image"
    }
  }
};
export default ImageAdapter;
