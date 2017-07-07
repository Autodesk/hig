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
import createComponent from '../../../adapters/createComponent';
import HIGElement from '../../HIGElement';
import HIGNodeList from '../../HIGNodeList';
import HIGChildValidator from '../../HIGChildValidator';
import ModuleComponent, { Module } from './Module';

export class Group extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);
    this.modules = new HIGNodeList({
      type: Module,
      HIGConstructor: this.hig.partials.Module,
      onAdd: (instance, beforeInstance) => {
        this.hig.addModule(instance, beforeInstance);
      }
    });

    this.state = {};
    this._render = this._render.bind(this);
  }

  componentDidMount() {
    this.modules.componentDidMount();
    this._render();
  }

  createElement(ElementConstructor, props) {
    return this.modules.createElement(ElementConstructor, props);
  }

  insertBefore(instance, insertBeforeIndex) {
    this.modules.insertBefore(instance, insertBeforeIndex);
    if (this.mounted) {
      this._render();
    }
  }

  removeChild(instance) {
    this.modules.removeChild(instance);
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    this.processUpdateProps(updatePayload).then(this._render);
  }

  isVisible() {
    return this.state.isVisible;
  }

  expandModules() {
    this.modules.forEach(module => {
      module.commitUpdate({query: undefined})
      module.expandAll();
    });
    this._render();
  }

  collapseModules() {
    this.modules.forEach(module => {
      this.commitUpdate({query: undefined})
      module.collapseAll();
    });
    this._render();
  }

  _render() {
    const matches = this.modules.map(module => {
      module.commitUpdate({
        query: this.props.query,
        activeModule: this.props.activeModule,
        activeSubmodule: this.props.activeSubmodule
      });

      return module.isVisible();
    });

    if (matches.some(m => m)) {
      this.hig.show();
      this.state.isVisible = true;
    } else {
      this.hig.hide();
      this.state.isVisible = false;
    }
  }
}

const GroupComponent = createComponent(Group);

GroupComponent.propTypes = {
  children: HIGChildValidator([ModuleComponent])
};

GroupComponent.__docgenInfo = {
  props: {
    children: {
      description: 'support adding Module'
    }
  }
};

GroupComponent.Module = ModuleComponent;

export default GroupComponent;
