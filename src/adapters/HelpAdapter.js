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
import HIGElement from '../elements/HIGElement';
import * as PropTypes from 'prop-types';
import createComponent from './createComponent';

export class HelpAdapter extends HIGElement {
  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'title': {
          this.hig.setTitle(propValue);
          break;
        }
        case 'link': {
          this.hig.setLink(propValue);
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const HelpComponent = createComponent(HelpAdapter);

HelpComponent.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string
};

HelpComponent.__docgenInfo = {
  props: {
    title: {
      description: 'sets the title of a Help shortcut'
    },

    link: {
      description: 'sets the link of a Help shortcut'
    }
  }
};

export default HelpComponent;
