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
    if (this.props.nameOrSVG) {
      this.commitUpdate(["nameOrSVG", this.props.nameOrSVG]);
    }
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case "nameOrSVG": {
          this.hig.setNameOrSVG(propValue);
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const IconComponent = createComponent(IconAdapter);

IconComponent.propTypes = {
  nameOrSVG: PropTypes.string
};

IconComponent.__docgenInfo = {
  props: {
    nameOrSVG: {
      description: "provides name of icon or actual svg for icon"
    }
  }
};

export default IconComponent;
