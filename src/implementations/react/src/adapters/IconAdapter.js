/*
 Copyright 2016 Autodesk,Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 */
import * as HIG from "hig-vanilla";

import HIGElement from "../elements/HIGElement";
import * as PropTypes from "prop-types";
import createComponent from "./createComponent";

export class IconAdapter extends HIGElement {
  constructor(initialProps) {
    super(HIG.Icon, initialProps);
  }

  componentDidMount() {
    if (this.props.nameOrSVG || this.props.size) {
      this.commitUpdate([
        "nameOrSVG",
        this.props.nameOrSVG,
        "size",
        this.props.size
      ]);
    }
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    let nextSize;
    let nextNameOrSVG;

    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case "nameOrSVG": {
          nextNameOrSVG = propValue;
          break;
        }
        case "size": {
          nextSize = propValue;
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }

    if (nextNameOrSVG && nextSize) {
      this.hig.setNameOrSVG(nextNameOrSVG, nextSize);
    } else if (nextNameOrSVG) {
      this.hig.setNameOrSVG(nextNameOrSVG, this.props.size);
    } else if (nextSize) {
      this.hig.setNameOrSVG(this.props.nameOrSVG, nextSize);
    }
  }
}

const IconComponent = createComponent(IconAdapter);

IconComponent.propTypes = {
  nameOrSVG: PropTypes.string.isRequired,
  size: PropTypes.oneOf(HIG.Icon.AvailableSizes)
};

IconComponent.defaultProps = {
  size: undefined
};

IconComponent.__docgenInfo = {
  props: {
    nameOrSVG: {
      description: "provides name of icon or actual svg for icon"
    }
  }
};

export default IconComponent;
