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
import HIGNodeList from '../../HIGNodeList';
import HIGChildValidator from '../../HIGChildValidator';
import GroupComponent, { Group } from './Group';

export class Section extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);
    this.groups = new HIGNodeList({
      type: Group,
      HIGConstructor: this.hig.partials.Group,
      onAdd: (instance, beforeInstance) => {
        this.hig.addGroup(instance, beforeInstance);
      }
    });
  }

  componentDidMount() {
    this.groups.componentDidMount();
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    const mapping = { headerLabel: 'setHeaderLabel', headerName: 'setHeaderName' };
    this.commitUpdateWithMapping(updatePayload, mapping);
  }

  createElement(ElementConstructor, props) {
    return this.groups.createElement(ElementConstructor, props);
  }

  insertBefore(instance, insertBeforeIndex) {
    this.groups.insertBefore(instance, insertBeforeIndex);
  }

  removeChild(instance) {
    this.groups.removeChild(instance);
  }
}

const SectionComponent = createComponent(Section);

SectionComponent.propTypes = {
  headerLabel: PropTypes.string,
  headerName: PropTypes.string,
  children: HIGChildValidator([GroupComponent])
};

SectionComponent.__docgenInfo = {
  props: {
    headerLabel: {
      description: 'sets the label'
    },

    headerName: {
      description: 'sets the name'
    },

    children: {
      description: 'support adding Group'
    }
  }
};

SectionComponent.Group = GroupComponent;

export default SectionComponent;
