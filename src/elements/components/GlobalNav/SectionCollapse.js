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
import createComponent from '../../../adapters/createComponent';
import HIGElement from '../../HIGElement';

export class SectionCollapse extends HIGElement {
  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'isCollapsed':
          if (propValue) {
            this.hig.maximize();
          } else {
            this.hig.minimize();
          }
          break;
        default: {
          this.commitPropChange(propKey, propValue);
        }
      }
    }
  }

  componentDidMount() {
    if (this.initialProps.isCollapsed === true) {
      this.hig.maximize();
    } else {
      this.hig.minimize();
    }
  }
}

const SectionCollapseComponent = createComponent(SectionCollapse);

SectionCollapseComponent.propTypes = {
  minimize: PropTypes.func,
  maximize: PropTypes.func,
  show: PropTypes.func,
  hide: PropTypes.func,
  onClick: PropTypes.func
};

SectionCollapseComponent.__docgenInfo = {
  props: {
    minimize: {
      description: 'show [-] icon'
    },

    maximize: {
      description: 'show [ + ] icon'
    },

    show: {
      description: 'show (used for filtering)'
    },

    hide: {
      description: 'hide (used for filtering)'
    },

    onClick: {
      description: 'triggered when icon is clicked on'
    }
  }
};

export default SectionCollapseComponent;
