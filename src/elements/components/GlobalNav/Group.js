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
import ItemComponent, { Item } from './Item';

export class Group extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);
    this.items = new HIGNodeList({
      type: Item,
      HIGConstructor: this.hig.partials.Item,
      onAdd: (instance, beforeInstance) => {
        this.hig.addItem(instance, beforeInstance);
      }
    });
  }

  componentDidMount() {
    this.items.componentDidMount();
  }

  createElement(ElementConstructor, props) {
    return this.items.createElement(ElementConstructor, props);
  }

  insertBefore(instance, insertBeforeIndex) {
    this.items.insertBefore(instance, insertBeforeIndex);
  }

  removeChild(instance) {
    this.items.removeChild(instance);
  }
}

const GroupComponent = createComponent(Group);

GroupComponent.propTypes = {
  children: HIGChildValidator([ItemComponent])
};

GroupComponent.__docgenInfo = {
  props: {
    children: {
      description: 'support adding Item'
    }
  }
};

GroupComponent.Item = ItemComponent;

export default GroupComponent;
