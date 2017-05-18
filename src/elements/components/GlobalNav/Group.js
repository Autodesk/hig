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
import ItemComponent, { Item } from './Item';

export class Group extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);
    // items that get appended before mounting
    this.items = new HIGNodeList();
  }

  componentDidMount() {
    for (let instance of this.items) {
      this.hig.addItem(instance.hig);
      instance.mount();
    }
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case Item:
        return new Item(this.hig.partials.Item, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  appendChild(instance) {
    if (instance instanceof Item) {
      this.items.appendChild(instance);

      if (this.mounted) {
        this.hig.addItem(instance.hig);
        instance.mount();
      }
    } else {
      throw new Error('unknown type');
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    const beforeChild = this.items.item(insertBeforeIndex);
    this.items.insertBefore(instance, beforeChild);
    this.hig.addItem(instance.hig, beforeChild.hig);
    instance.mount();
  }

  removeChild(instance) {
    this.items.removeChild(instance);
    instance.unmount();
  }
}

const GroupComponent = createComponent(Group);

GroupComponent.Item = ItemComponent;

export default GroupComponent;
