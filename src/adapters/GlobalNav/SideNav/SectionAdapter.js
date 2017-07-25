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

import createComponent from '../../createComponent';
import HIGElement from '../../../elements/HIGElement';
import HIGNodeList from '../../../elements/HIGNodeList';
import HIGChildValidator from '../../../elements/HIGChildValidator';
import GroupComponent, { GroupAdapter } from './GroupAdapter';
import SectionCollapseComponent, {
  SectionCollapseAdapter
} from './SectionCollapseAdapter';

export class Section extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.groups = new HIGNodeList({
      type: GroupAdapter,
      HIGConstructor: this.hig.partials.Group,
      onAdd: (instance, beforeInstance) => {
        this.hig.addGroup(instance, beforeInstance);
      }
    });
  }

  componentDidMount() {
    this.groups.componentDidMount();

    if (this.collapse) {
      this.hig.addCollapse(this.collapse.hig);
      this.collapse.mount();
    }
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'headerLabel': {
          this.hig.setHeaderLabel(propValue);
          break;
        }
        case 'headerName': {
          this.hig.setHeaderName(propValue);
          break;
        }
        case 'children': {
          // No-op
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
      case SectionCollapseAdapter:
        return new SectionCollapseAdapter(props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    this.appendChild(instance);
  }

  appendChild(instance) {
    if (instance instanceof GroupAdapter) {
      this.groups.insertBefore(instance); // calls internal _appendChild if no "before" component
    } else if (instance instanceof SectionCollapseAdapter) {
      if (this.collapse) {
        throw new Error('only one SectionCollapse is allowed');
      } else {
        this.collapse = instance;

        if (this.mounted) {
          instance.componentDidMount();
        }
      }
    } else {
      throw new Error('unknown type');
    }
  }

  removeChild(instance) {
    if (instance instanceof GroupAdapter) {
      this.groups.removeChild(instance);
    }

    if (instance instanceof SectionCollapseAdapter) {
      this.collpase = null;
      instance.unmount();
    }
  }
}

const SectionComponent = createComponent(Section);

SectionComponent.propTypes = {
  headerLabel: PropTypes.string,
  headerName: PropTypes.string,
  children: HIGChildValidator([GroupComponent, SectionCollapseComponent])
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
      description: 'support adding Group and Collapse'
    }
  }
};

SectionComponent.Group = GroupComponent;
SectionComponent.SectionCollapse = SectionCollapseComponent;

export default SectionComponent;
