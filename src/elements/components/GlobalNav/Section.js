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
import CollapseComponent, { Collapse } from './Collapse';

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
    this.state = {};
  }

  componentDidMount() {
    this.groups.componentDidMount();
    if (this.collapse) {
      this.hig.addCollapse(this.collapse.hig);
      this.collapse.mount();
    }
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    const mapping = {
      headerLabel: 'setHeaderLabel',
      headerName: 'setHeaderName'
    };

    this.commitUpdateWithMapping(updatePayload, mapping);

    if (Object.keys(updatePayload).includes('query')) {
      this.state.query = updatePayload.query;
      this._render();
    }

    if (Object.keys(updatePayload).includes('expand')) {
      this.state.expand = updatePayload.expand;
      this._render();
    }
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case Group:
        return this.groups.createElement(ElementConstructor, props);
      case Collapse:
        return new Collapse(this.hig.partials.Collapse, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    this.appendChild(instance);
  }

  appendChild(instance) {
    if (instance instanceof Group) {
      this.groups.insertBefore(instance); // calls internal _appendChild if no "before" component
    } else if (instance instanceof Collapse) {
      if (this.collapse) {
        throw new Error('only one Collapse is allowed');
      } else {
        this.collapse = instance;
        if (this.mounted) {
          this.hig.addCollapse(instance.hig);
          instance.mount();
        }
      }
    }
  }

  removeChild(instance) {
    this.groups.removeChild(instance);
  }

  _render() {
    const childVisibility = this.groups.map(group => {
      group.commitUpdate({
        query: this.state.query,
        expanded: this.state.expanded
      });

      return group.isVisible();
    });

    if (childVisibility.some(v => v)) {
      this.hig.show();
    } else {
      this.hig.hide();
    }
  }
}

const SectionComponent = createComponent(Section);

SectionComponent.propTypes = {
  headerLabel: PropTypes.string,
  headerName: PropTypes.string,
  children: HIGChildValidator([GroupComponent, CollapseComponent])
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
SectionComponent.Collapse = CollapseComponent;

export default SectionComponent;
