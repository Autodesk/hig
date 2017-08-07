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
import createComponent from '../../createComponent';
import HIGElement from '../../../elements/HIGElement';
import HIGNodeList from '../../../elements/HIGNodeList';
import HIGChildValidator from '../../../elements/HIGChildValidator';
import ModuleComponent, {
  Module
} from '../../../adapters/GlobalNav/SideNav/ModuleAdapter';

export class GroupAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.modules = new HIGNodeList({
      type: Module,
      HIGConstructor: this.hig.partials.Module,
      onAdd: (instance, beforeInstance) => {
        this.hig.addModule(instance, beforeInstance);
      }
    });
  }

  componentDidMount() {
    this.modules.componentDidMount();
  }

  createElement(ElementConstructor, props) {
    return this.modules.createElement(ElementConstructor, props);
  }

  insertBefore(instance, insertBeforeIndex) {
    this.modules.insertBefore(instance, insertBeforeIndex);
  }

  removeChild(instance) {
    this.modules.removeChild(instance);
  }
}

const GroupComponent = createComponent(GroupAdapter);

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
