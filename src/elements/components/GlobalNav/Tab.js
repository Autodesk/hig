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
import PropTypes from 'prop-types';

export class Tab extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    ['onActiveTab', 'callOnActiveTab'].forEach(fn => {
      this[fn] = this[fn].bind(this);
    });

  }

  componentDidMount() {
    this.hig.onClick(this.callOnActiveTab)
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    this.processUpdateProps(updatePayload)
      .mapToHIGEventListeners(['onClick'])
      .mapToHIGFunctions({
        label: 'setLabel'
      })
      .handle('active', value => {
        if (value) {
          this.callOnActiveTab();
        }
      })
  }

  callOnActiveTab(){
    if (!this._onActiveTab) {
      return;
    }

    this._onActiveTab(this);
  }

  onActiveTab(callback){
    this._onActiveTab = callback; 
  }
}

const TabComponent = createComponent(Tab);

TabComponent.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string
};

TabComponent.__docgenInfo = {
  props: {
    active: {
      description: 'activates or deactivates the tab'
    },
    label: {
      description: 'sets the text of a tab'
    }
  }
};

export default TabComponent;
