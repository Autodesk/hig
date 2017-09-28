import * as PropTypes from 'prop-types';
import HIGElement from '../../../../elements/HIGElement';
import createComponent from '../../../createComponent';

export class OptionAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.props = { ...initialProps };
  }

  componentDidMount() {
    if (this.props.link) {
      this.commitUpdate(['link', this.props.link])
    }
    if (this.props.name) {
      this.commitUpdate(['name', this.props.name])
    }
    if (this.props.onClick) {
      this.commitUpdate(['onClick', this.props.onClick])
    }
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'name': {
          this.hig.setName(propValue);
          break;
        }
        case 'link': {
          this.hig.setLink(propValue);
          break;
        }
        case 'onClick': {
          const dispose = this._disposeFunctions.get('onClick');

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
          // No-op
        }
      }
    }
  }
}

const OptionComponent = createComponent(OptionAdapter);

OptionComponent.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
};

OptionComponent.__docgenInfo = {
  props: {
    name: {
      description: 'sets {String} the name of the Option'
    },
    link: {
      description: 'sets {String} an optional link for the Option'
    },
    onClick: {
      description:
        '{func} calls the provided callback when user clicks on the Option'
    },
  }
};

export default OptionComponent;
