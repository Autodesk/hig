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
import * as HIG from 'hig-vanilla';
import HIGElement from '../../../../elements/HIGElement';
import HIGNodeList from '../../../../elements/HIGNodeList';
import HIGChildValidator from "../../../../elements/HIGChildValidator";
import createComponent from '../../../createComponent';
import GroupComponent, { GroupAdapter } from './GroupAdapter';

export class HelpAdapter extends HIGElement {

  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.props = { ...initialProps };

    this.groups = new HIGNodeList({
      GroupAdapter: {
        type: GroupAdapter,
        HIGConstructor: this.hig.partials.Group,
        onAdd: (instance, beforeInstance) => {
          this.hig.addOption(instance, beforeInstance);
        }
      }
    });
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'title': {
          this.hig.setTitle(propValue);
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case GroupAdapter:
        return this.groups.createElement(ElementConstructor, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  insertBefore(instance, beforeChild = {}) {
    if (instance instanceof GroupAdapter) {
      this.groups.insertBefore(instance);
    } else {
      throw new Error(
        `${this.constructor.name} cannot have a child of type ${instance
          .constructor.name}`
      );
    }
  }

  removeChild(instance) {
    if (instance instanceof GroupAdapter) {
      this.groups.removeChild(instance)
    }
    instance.unmount();
  }
}

const HelpAdapterComponent = createComponent(HelpAdapter);

HelpAdapterComponent.propTypes = {
  title: PropTypes.string
  //children: HIGChildValidator([GroupComponent, Group])
};

HelpAdapterComponent.__docgenInfo = {
  props: {
    title: {
      description: 'sets the title of a Help shortcut'
    }
  }
};

export default HelpAdapterComponent;
