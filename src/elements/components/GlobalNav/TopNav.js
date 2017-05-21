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
import createComponent from '../../../adapters/createComponent';
import HIGElement from '../../HIGElement';

export class TopNav extends HIGElement {
  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'logo':
          this.hig.setLogo(propValue);
          break;
        case 'logoLink':
          this.hig.setLogoLink(propValue);
          break;
        case 'onHamburgerClick': {
          const dispose = this._disposeFunctions.get('onHamburgerClickDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onHamburgerClickDispose',
            this.hig.onHamburgerClick(propValue)
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

const TopNavComponent = createComponent(TopNav);

TopNavComponent.propTypes = {
  logo: PropTypes.string,
  logoLink: PropTypes.string,
  onHamburgerClick: PropTypes.func
};

TopNavComponent.__docgenInfo = {
  props: {
    logo: {
      description: 'sets the logo'
    },

    logoLink: {
      description: 'sets the link of the logo'
    },

    onHamburgerClick: {
      description: 'trigged when hamburger icon is clicked'
    }
  }
};

export default TopNavComponent;
