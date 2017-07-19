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
import * as HIG from 'hig.web';

import HIGElement from '../HIGElement';
import * as PropTypes from 'prop-types';
import createComponent from '../../adapters/createComponent';

class IconButton extends HIGElement {
  constructor(initialProps) {
    super(HIG.IconButton, initialProps);

  }

  componentDidMount() {
    if(this.initialProps.disabled) {
      this.hig.disable()
    } else {
      this.hig.enable();
    }
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'disabled': {
          if (propValue) {
            this.hig.disable();
          } else {
            this.hig.enable();
          }
          break;
        }
        case 'title': {
          this.hig.setTitle(propValue);
          break;
        }
        case 'link': {
          this.hig.setLink(propValue);
          break;
        }
        case 'icon': {
          this.hig.setIcon(propValue);
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
        case 'onHover': {
          const dispose = this._disposeFunctions.get('onHoverDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onHoverDispose',
            this.hig.onHover(propValue)
          );
          break;
        }
        case 'onFocus': {
          const dispose = this._disposeFunctions.get('onFocusDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onFocusDispose',
            this.hig.onFocus(propValue)
          );
          break;
        }
        case 'onBlur': {
          const dispose = this._disposeFunctions.get('onBlurDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onBlurDispose',
            this.hig.onBlur(propValue)
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


const IconButtonComponent = createComponent(IconButton);

IconButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  link: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onHover: PropTypes.func
};

IconButtonComponent.__docgenInfo = {
  props: {
    title: {
      description: 'sets the title of a button'
    },

    link: {
      description: 'sets the link of a button'
    },

    icon: {
      description: 'specifies icon for button'
    },

    onClick: {
      description: 'triggers when you click the button'
    },

    onHover: {
      description: 'triggers when you hover over the button'
    },

    onFocus: {
      description: 'triggers focus is moved to the icon button'
    },

    onBlur: {
      description: 'triggers blur when focus is moved away from the icon button'
    }
  }
};

export default IconButtonComponent;
