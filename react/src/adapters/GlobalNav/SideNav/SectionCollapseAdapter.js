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
import * as PropTypes from 'prop-types';
import createComponent from '../../createComponent';
import HIGElement from '../../../elements/HIGElement';
import * as HIG from 'hig.web';

const HIGSectionCollapse = HIG.GlobalNav._partials.SideNav._partials.Section._partials.Collapse;

export class SectionCollapseAdapter extends HIGElement {
  constructor(props) {
    super(HIGSectionCollapse, props);
  }

  componentDidMount() {
    this.commitUpdate(['minimized', this.initialProps.minimized]);
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'minimized':
          propValue ? this.hig.minimize() : this.hig.maximize();
          break;
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

const SectionCollapseComponent = createComponent(SectionCollapseAdapter);

SectionCollapseComponent.propTypes = {
  minimized: PropTypes.bool,
  onClick: PropTypes.func
};

SectionCollapseComponent.__docgenInfo = {
  props: {
    minimized: {
      description: 'designate that collapse is in the minimized state'
    },

    onClick: {
      description: 'triggered when icon is clicked on'
    }
  }
};

export default SectionCollapseComponent;
