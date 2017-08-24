import * as PropTypes from 'prop-types';
import createComponent from '../../createComponent';
import HIGElement from '../../../elements/HIGElement';

export class AccountAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.props = { ...initialProps };
  }

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
        case 'active': {
          if (propValue) {
            this.hig.activate();
          } else {
            this.hig.deactivate();
          }
          break;
        }
        case 'image': {
          this.hig.setImage(propValue);
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

const AccountComponent = createComponent(AccountAdapter);

AccountComponent.propTypes = {
  image: PropTypes.string,
  label: PropTypes.string,
  activate: PropTypes.func,
  deactivate: PropTypes.func,
  onClick: PropTypes.func
};

AccountComponent.__docgenInfo = {
  props: {
    label: {
      description: 'sets {String} the label displayed for an account in Account/account switcher'
    },
    image: {
      description: 'sets {String} the image displayed for an account in Account/account switcher'
    },
    activate: {
      description: '{func} activates the Account'
    },
    deactivate: {
      description: '{func} deactivates the Account'
    },
    onClick: {
      description: '{func} calls the provided callback when user clicks on the Account'
    }
  }
};

export default AccountComponent;
