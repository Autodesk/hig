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

    if (this.props.slotEl) {
      this.commitUpdate(['slotEl', this.props.slotEl]);
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
        case 'style': {
          this.hig.setStyle(propValue);
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
        case 'slotEl': {
          this.hig.addSlot(propValue);
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
  style: PropTypes.string,
  onCloseClick: PropTypes.func,
  onOverlayClick: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node
};

ModalAdapterComponent.__docgenInfo = {
  props: {
    body: {
      description: 'text or html string content of the modal'
    },
    buttons: {
      description: 'an array of props supported by the Button component'
    },
    style: {
      description: 'style of the modal shell'
    },
    onCloseClick: {
      description: 'triggers when you click the close button'
    },
    onOverlayClick: {
      description: 'triggers when you click the overlay behind the modal'
    },
    open: {
      description: 'modal is visible when true'
    },
    title: {
      description: 'title of the modal'
    },
    children: {
      description: 'supports add any dom content to the body of the modal'
    }
  }
}

ModalAdapterComponent.defaultProps = {
  buttons: []
}

export default ModalAdapterComponent;
