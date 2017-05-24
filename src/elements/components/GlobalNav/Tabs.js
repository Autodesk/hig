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

import TabComponent, { Tab } from './Tab';

// Does not extend HIGElement because it's not a real HIG component
export class Tabs extends HIGElement {
  constructor(HigContructor, initialProps) {
    super(HigContructor, initialProps);
    this.tabs = new HIGNodeList();
  }

  componentDidMount() {
    for (let instance of this.tabs) {
      this.hig.addTab(instance.hig);
      instance.mount();
    }
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case Tab:
        return new Tab(this.hig.partials.Tab, props);
      case 'children':
        /* no-op */
        break;
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  appendChild(instance) {
    if (instance instanceof Tab) {
      this.tabs.appendChild(instance);

      if (this.mounted) {
        this.hig.addTab(instance.hig);
        instance.mount();
      }
    } else {
      throw new Error(`unknown type ${instance}`);
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    const beforeChild = this.tabs.item(insertBeforeIndex);
    this.tabs.insertBefore(instance, beforeChild);
    this.hig.addTab(instance.hig, beforeChild.hig);
    instance.mount();
  }

  removeChild(instance) {
    this.tabs.removeChild(instance);
    instance.unmount();
  }
}

const TabsComponent = createComponent(Tabs);

TabsComponent.propTypes = {
  children: HIGChildValidator([TabComponent])
};

TabsComponent.__docgenInfo = {
  props: {
    children: {
      description: 'support adding Tab components'
    }
  }
};

TabsComponent.Tab = TabComponent;

export default TabsComponent;
