import React, { Component } from "react";
import { Image as VanillaImage } from "hig-vanilla";

class ImageAdapter extends Component {
  render() {
    return <img className={VanillaImage.className} {...this.props} />;
  }
}

export default ImageAdapter;
