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
      title: initialProps.title
    };
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
  }

  componentDidMount() {
    this.submodules.componentDidMount();
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
    return this.state.title.toLowerCase().match(query.toLowerCase());
  }

  filter(query) {
    const childMatches = this.submodules.map(submodule => {
      return submodule.filter(query);
    });

    if (childMatches.some(m => m) || this.matches(query)) {
      this.hig.show();
      return true;
    } else {
      this.hig.hide();
      return false;
    }
  }
}

const ModuleComponent = createComponent(Module);

ModuleComponent.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  show: PropTypes.func,
  hide: PropTypes.func,
  activate: PropTypes.func,
  deactivate: PropTypes.func,
  showSubmodules: PropTypes.func,
  hideSubmodules: PropTypes.func,
  submodulesClosed: PropTypes.bool,
  addSubmodule: PropTypes.func,
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

    activate: {
      description: 'activates the module'
    },

    deactivate: {
      description: 'deactivates the module'
    },

    showSubmodules: {
      description: 'show the submodules'
    },

    hideSubmodules: {
      description: 'hide the submodules'
    },

    addSubmodule: {
      description: 'add submodule'
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
