
import * as HIG from 'hig-vanilla';

import HIGElement from '../elements/HIGElement';
import * as PropTypes from 'prop-types';
import createComponent from './createComponent';

export class ButtonAdapter extends HIGElement {
  constructor(initialProps) {
    super(HIG.Button, initialProps);
  }

  componentDidMount() {
    this.commitUpdate(['disabled', this.props.disabled]);
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'disabled': {
          propValue ? this.hig.disable() : this.hig.enable();
          break;
        }
        case 'icon': {
          this.hig.setIcon(propValue);
          break;
        }
        case 'link': {
          this.hig.setLink(propValue);
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
        case 'title': {
          this.hig.setTitle(propValue);
          break;
        }
        case 'type': {
          this.hig.setType(propValue);
          break;
        }
        case 'size': {
          this.hig.setSize(propValue);
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const ButtonComponent = createComponent(ButtonAdapter);

ButtonComponent.propTypes = {
  disabled: PropTypes.bool,
  link: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onHover: PropTypes.func,
  title: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string
};

ButtonComponent.__docgenInfo = {
  props: {
    title: {
      description: 'sets the title of a button'
    },

    link: {
      description: 'sets the link of a button'
    },

    size: {
      description: 'specifies size of button'
    },

    type: {
      description: 'specifies type of button'
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
      description: 'triggers focus is moved to button'
    },

    onBlur: {
      description: 'triggers blur when focuss is moved away from icon'
    }
  }
};

export default ButtonComponent;
