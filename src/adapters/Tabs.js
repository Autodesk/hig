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
import createComponent from './createComponent';
import HIGElement from '../elements/HIGElement';
import HIGNodeList from '../elements/HIGNodeList';
import HIGChildValidator from '../elements/HIGChildValidator';

import TabComponent, { Tab } from './Tab';

export class Tabs extends HIGElement {
  constructor(HigConstructor, initialProps) {
    super(HigConstructor, initialProps);

    this.tabs = new HIGNodeList({
      type: Tab,
      HIGConstructor: this.hig.partials.Tab,
      onAdd: (instance, beforeInstance) => {
        this.hig.addTab(instance, beforeInstance);
      }
    });
  }

  componentDidMount() {
    this.tabs.componentDidMount();
  }

  createElement(ElementConstructor, props) {
    return this.tabs.createElement(ElementConstructor, props);
  }

  insertBefore(instance, insertBeforeIndex) {
    this.tabs.insertBefore(instance, insertBeforeIndex);
  }

  removeChild(instance) {
    this.tabs.removeChild(instance);
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