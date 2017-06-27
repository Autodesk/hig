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
    this.tabs = new HIGNodeList({
      type: Tab,
      HIGConstructor: this.hig.partials.Tab,
      onAdd: (instance, beforeInstance) => {
        this.hig.addTab(instance, beforeInstance);
      }
    });
    this.props = initialProps;
    this.state = {};

    ['setActiveTab'].forEach(fn => {
      this[fn] = this[fn].bind(this)
    });
  }

  componentDidMount() {
    this.tabs.componentDidMount();
    this._render();
  }

  createElement(ElementConstructor, props) {
    return this.tabs.createElement(ElementConstructor, props);
  }

  insertBefore(instance, insertBeforeIndex) {
    this.tabs.insertBefore(instance, insertBeforeIndex);
    instance.onActiveTab(this.setActiveTab);
    if (this.state.activeTab === undefined){
      this.state.activeTab = instance
    }
  }

  removeChild(instance) {
    this.tabs.removeChild(instance);
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    this.props = { ...this.props, ...updatePayload };
  }
  
  setActiveTab(tab){
    this.state.activeTab = tab;
    if (this.props.onTabChange) {
      this.props.onTabChange(tab);
    }
    this._render();
  };

  _render(){
    this.tabs.forEach(tab => {
      this.state.activeTab === tab ? tab.hig.activate() : tab.hig.deactivate();
    })
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
