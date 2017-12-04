import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";

import { Image } from "../../hig-react";
import defaultImage from "../images/table-image.png";

class ImageSection extends PureComponent {
  render() {
    return (
      <PlaygroundSection title="Image">
        <Image src={defaultImage} />
      </PlaygroundSection>
    );
  }
}

export default ImageSection;
