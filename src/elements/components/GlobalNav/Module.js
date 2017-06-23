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
import SubmoduleComponent, { Submodule } from './Submodule';
import ModuleCollapseComponent, { ModuleCollapse } from './ModuleCollapse'

export class Module extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);
    this.submodules = new HIGNodeList({
      type: Submodule,
      HIGConstructor: this.hig.partials.Submodule,
      onAdd: (instance, beforeInstance) => {
        this.hig.addSubmodule(instance, beforeInstance);
      }
    });
    this.state = {
      title: initialProps.title,
      query: initialProps.query,
      expanded: false
    };

    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    const mapping = {
      icon: 'setIcon',
      title: 'setTitle',
      link: 'setLink'
    };

    this.commitUpdateWithMapping(updatePayload, mapping);

    if (Object.keys(updatePayload).includes('title')) {
      this.state.title = updatePayload.title;
    }

    if (Object.keys(updatePayload).includes('query')) {
      this.state.query = updatePayload.query;
      this._render();
    }

    if (Object.keys(updatePayload).includes('expanded')) {
      this.state.expanded = updatePayload.expanded;
      this._render();
    }
  }

  toggleCollapsed() {
    this.state.expanded = !this.state.expanded;
    this._render();
  }

  componentDidMount() {
    this.submodules.componentDidMount();
    if (this.submodules.length > 0) {
      this.collapse = new ModuleCollapse(this.hig.partials.Collapse, { isCollapsed: !this.state.expanded});
      this.hig.addCollapse(this.collapse.hig);
      this.collapse.mount();
      this.collapse.hig.onClick(this.toggleCollapsed);
    }
    this._render();
  }

  createElement(ElementConstructor, props) {
    return this.submodules.createElement(ElementConstructor, props);
  }

  insertBefore(instance, insertBeforeIndex) {
    this.submodules.insertBefore(instance, insertBeforeIndex);
  }

  removeChild(instance) {
    this.submodules.removeChild(instance);
  }

  matches(query) {
    if (!query) { return true }
    return this.state.title.toLowerCase().match(query.toLowerCase());
  }

  isVisible() {
    return this.state.isVisible;
  }

  _render() {
    if (this.collapse) {
      this.collapse.commitUpdate(['isCollapsed', !this.state.expanded]);
    };
    
    const childMatches = this.submodules.map(submodule => {
      submodule.commitUpdate({
        query: this.state.query,
        expanded: this.state.expanded
      });

      return submodule.isVisible();
    });

    if (
      childMatches.some(m => m) ||
      this.matches(this.state.query) ||
      !this.state.query
    ) {
      this.hig.show();
      this.state.isVisible = true;
    } else {
      this.hig.hide();
      this.state.isVisible = false;
    }
  }
}

const ModuleComponent = createComponent(Module);

ModuleComponent.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.bool,
  query: PropTypes.string,
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  children: HIGChildValidator([SubmoduleComponent])
};

ModuleComponent.__docgenInfo = {
  props: {
    icon: {
      description: 'sets the icon of an Module'
    },

    title: {
      description: 'sets the title of an Module'
    },

    link: {
      description: 'sets the link of an Module'
    },

    show: {
      description: 'show (used for filtering)'
    },

    hide: {
      description: 'hide (used for filtering)'
    },

    active: {
      description: '[Boolean] Designates that the module is active'
    },

    expanded: {
      description: '[Boolean] When true shows submodules, when false hides them'
    },

    onClick: {
      description: 'triggered when a link is clicked on'
    },

    onHover: {
      description: 'triggered when a link is hovered over'
    },

    children: {
      description: 'support adding SubModule'
    }
  }
};

ModuleComponent.Submodule = SubmoduleComponent;

export default ModuleComponent;
