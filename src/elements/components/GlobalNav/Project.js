/**
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

import * as PropTypes from 'prop-types';
import HIGElement from '../../HIGElement';
import createComponent from '../../../adapters/createComponent';

export class Project extends HIGElement {
  commitUpdate(updatePayload, oldProps, newProp) {
    const mapping = {
      image: 'setImage',
      label: 'setLabel'
    };

    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

     switch (propKey) {
        case mapping[propKey]:
          this.hig[mapping[propKey]](propValue);
          break;
        case 'active':
          if (propValue) {
            this.hig.activate();
          } else {
            this.hig.deactivate();
          }
          break;          
        default:
          this.commitPropChange(propKey, propValue);
      }
    }
  }
}

const ProjectComponent = createComponent(Project);

ProjectComponent.propTypes = {
  image: PropTypes.string,
  label: PropTypes.string,
  activate: PropTypes.func,
  deactivate: PropTypes.func,
  onClick: PropTypes.func
};

ProjectComponent.__docgenInfo = {
  props: {
    label: {
      description: 'sets {String} the label displayed for a project in project/account switcher'
    },
    image: {
      description: 'sets {String} the image displayed for a project in project/account switcher'
    },
    activate: {
      description: '{func} activates the project'
    },
    deactivate: {
      description: '{func} deactivates the project'
    },
    onclick: {
      description: '{func} calls the provided callback when user clicks on the project'
    }
  }
};

export default ProjectComponent;
