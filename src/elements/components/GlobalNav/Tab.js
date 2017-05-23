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

export class Tab extends HIGElement {
  componentDidMount() {
    if (this.initialProps.active) {
      this.hig.activate();
    } else {
      this.hig.deactivate();
    }
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'label':
          this.hig.setLabel(propValue);
          break;
        case 'active':
          if (propValue) {
            this.hig.activate();
          } else {
            this.hig.deactivate();
          }
          break;
        default: {
          this.commitPropChange(propKey, propValue);
        }
      }
    }
  }
}

const TabComponent = createComponent(Tab);

export default TabComponent;
