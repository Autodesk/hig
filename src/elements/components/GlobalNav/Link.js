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

export class Link extends HIGElement {
  commitUpdate(updatePayload, oldProps, newProp) {
    const mapping = { title: 'setTitle', link: 'setLink' };
    this.commitUpdateWithMapping(updatePayload, mapping);
  }
}

const LinkComponent = createComponent(Link);


LinkComponent.propTypes = {
  addTitle: PropTypes.func,
  addLink: PropTypes.func,
  onClick: PropTypes.func,
  onHover: PropTypes.func
};

LinkComponent.__docgenInfo = {
  props: {
    title: {
      description: "Title {string} for the Link component"
    },
    link: {
      description: "URL {string} for the Link component"
    },
    onClick: {
      description: "{function} Triggered when user clicks on the link"
    },
    onHover: {
      description: "{function} Triggered when user hovers over the link"
    }
  }
};

export default LinkComponent;
