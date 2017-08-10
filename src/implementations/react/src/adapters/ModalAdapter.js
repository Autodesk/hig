// import React from 'react';
import * as HIG from 'hig-vanilla';
import * as PropTypes from 'prop-types';
import createComponent from './createComponent';
import HIGElement from '../elements/HIGElement';

class ModalAdapter extends HIGElement {
  constructor(initialProps) {
    super(HIG.Modal, initialProps);

    this.buttons = [];
    this.initialProps = initialProps;
  }

  componentDidMount() {
    if (this.initialProps.open) {
      this.commitUpdate(['open', this.initialProps.open]);
    }
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
          this.addButtons(propValue);
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

  addButtons(nextButtons) {
    // this.buttons.forEach(button => {
    //   button.unmount();
    // });

    // this.buttons = nextButtons.map(buttonProps => <HIG.Button {...buttonProps} />);
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
  title: PropTypes.string
}

ModalAdapterComponent.defaultProps = {
  buttons: []
}

export default ModalAdapterComponent;
