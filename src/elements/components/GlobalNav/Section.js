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
    this.groups = new HIGNodeList();
  }

  componentDidMount() {
    for (let instance of this.groups) {
      this.hig.addGroup(instance.hig);
      instance.mount();
    }
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'headerLabel':
          this.hig.setHeaderLabel(propValue);
          break;
        case 'headerName':
          this.hig.setHeaderName(propValue);
          break;
        case 'children':
          /* no-op */
          break;
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case Group:
        return new Group(this.hig.partials.Group, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  appendChild(instance) {
    if (instance instanceof Group) {
      this.groups.appendChild(instance);

      if (this.mounted) {
        this.hig.addGroup(instance.hig);
        instance.mount();
      }
    } else {
      throw new Error(`unknown type ${instance}`);
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    const beforeChild = this.groups.item(insertBeforeIndex);
    this.groups.insertBefore(instance, beforeChild);
    this.hig.addGroup(instance.hig, beforeChild.hig);
    instance.mount();
  }

  removeChild(instance) {
    this.groups.removeChild(instance);
    instance.unmount();
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
