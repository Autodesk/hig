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

import Tab2Component, { Tab2 } from './Tab2';

export class Tabs2 extends HIGElement {
  constructor(HigConstructor, initialProps) {
    super(HigConstructor, initialProps);

    this.tabs = new HIGNodeList({
      type: Tab2,
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

const Tabs2Component = createComponent(Tabs2);

Tabs2Component.propTypes = {
  children: HIGChildValidator([Tab2Component])
};

Tabs2Component.__docgenInfo = {
  props: {
    children: {
      description: 'support adding Tab2 components'
    }
  }
};

Tabs2Component.Tab2 = Tab2Component;

export default Tabs2Component;
