import * as HIG from 'hig-vanilla';
import * as PropTypes from 'prop-types';
import createComponent from './createComponent';
import HIGElement from '../elements/HIGElement';
import { ButtonAdapter } from './ButtonAdapter';

class ModalAdapter extends HIGElement {
  constructor(initialProps) {
    super(HIG.Modal, initialProps);

    this.buttons = [];
  }

  componentDidMount() {
    if (this.props.open) {
      this.commitUpdate(['open', this.props.open]);
    }

    if (this.props.buttons) {
      this.commitUpdate(['buttons', this.props.buttons]);
    }

    if (this.props.onOverlayClick) {
      this.commitUpdate(['onOverlayClick', this.props.onOverlayClick]);
    }

    if (this.props.onCloseClick) {
      this.commitUpdate(['onCloseClick', this.props.onCloseClick]);
    }

    this.buttons.forEach(button => {
      this.hig.addButton(button.hig);
      button.componentDidMount();
    });
  }

  commitUpdate(updatePayload) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'body': {
          this.hig.setBody(propValue);
          break;
        }
        case 'buttons': {
          this._addButtons(propValue);
          break;
        }
        case 'children': {
          // no-op
          break;
        }
        case 'headerColor': {
          this.hig.setHeaderColor(propValue);
          break;
        }
        case 'onOverlayClick': {
          const dispose = this._disposeFunctions.get('onOverlayClickDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onOverlayClickDispose',
            this.hig.onOverlayClick(propValue)
          );
          break;
        }
        case 'onCloseClick': {
          const dispose = this._disposeFunctions.get('onCloseClick');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onCloseClick',
            this.hig.onCloseClick(propValue)
          );
          break;
        }
        case 'open': {
          propValue ? this.hig.open() : this.hig.close();
          break;
        }
        case 'title': {
          this.hig.setTitle(propValue);
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }

  _addButtons(nextButtons) {
    this.buttons.forEach(button => {
      button.unmount();
    });

    this.buttons = nextButtons.map(buttonProps => {
      const button = new ButtonAdapter(buttonProps);

      if (this.mounted) {
        this.hig.addButton(button.hig);
        button.componentDidMount();
      }

      return button;
    });
  }
}

const ModalAdapterComponent = createComponent(ModalAdapter);

ModalAdapterComponent.propTypes = {
  body: PropTypes.string,
  buttons: PropTypes.array,
  headerColor: PropTypes.string,
  onCloseClick: PropTypes.func,
  onOverlayClick: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node
}

ModalAdapterComponent.defaultProps = {
  buttons: []
}

export default ModalAdapterComponent;
