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
import HIGElement from '../../../HIGElement';
import * as PropTypes from 'prop-types';
import createComponent from '../../../../adapters/createComponent';

export class Help extends HIGElement {
  commitUpdate(updatePayload, oldProps, newProps) {
    const mapping = {
      title: 'setTitle',
      link: 'setLink'
    };

    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      if (mapping[propKey]) {
        this.hig[mapping[propKey]](propValue);
      } else {
        this.commitPropChange(propKey, propValue);
      }
    }
  }
}

const HelpComponent = createComponent(Help);

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
