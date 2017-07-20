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
import PropTypes from 'prop-types';

export class Tab extends HIGElement {
  componentDidMount() {
    if (this.initialProps.active) {
      this.hig.activate();
    } else {
      this.hig.deactivate();
    }
  }
  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'active': {
          if (propValue) {
            this.hig.activate();
          } else {
            this.hig.deactivate();
          }
          break;
        }
        case 'label': {
          this.hig.setLabel(propValue);
          break;
        }
        case 'onClick': {
          const dispose = this._disposeFunctions.get('onClickDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onClickDispose',
            this.hig.onClick(propValue)
          );
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const TabComponent = createComponent(Tab);

TabComponent.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

TabComponent.__docgenInfo = {
  props: {
    label: {
      description: 'sets the text of a tab'
    },

    active: {
      description: 'activates or deactivates the tab'
    },

    onClick: {
      description: 'calls provided handler when tab recieves a click'
    }
  }
};

export default TabComponent;
