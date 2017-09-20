import React from 'react';
import * as PropTypes from 'prop-types';
import ModalAdapter from '../../adapters/ModalAdapter';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  close = (event) => {
    if(this.props.onClose) {
      this.props.onClose(event);
    }
    if(this.props.openUncontrolled && !this.props.openControlled){
      this.setState({ isOpen: false });
    }
  }

  open = (event) => {
    if(this.props.onOpen) {
      this.props.onOpen(event);
    }
  }

  setSlotEl = (el) => {
    this.setState({ slotEl: el });
  };

  componentWillReceiveProps(nextProps){
    if(nextProps.openUncontrolled && !this.props.openControlled){
      this.setState({ isOpen: nextProps.openUncontrolled });
    }
  }

  checkOpenState = () => {
    if(this.props.openControlled){
      return this.props.openControlled;
    }else{
      return this.state.isOpen;
    }
  }

  render() {
    return (
      <ModalAdapter
        body={this.props.body}
        buttons={this.props.buttons}
        style={this.props.style}
        open={this.checkOpenState()}
        onCloseClick={this.close}
        onOverlayClick={this.close}
        title={this.props.title}
        slotEl={this.state.slotEl}
      >
        <div ref={this.setSlotEl}>{this.props.children}</div>
      </ModalAdapter>
    );
  }
}

Modal.propTypes = {
  openControlled: PropTypes.bool,
  openUncontrolled: PropTypes.bool,
  body: PropTypes.string,
  buttons: PropTypes.array,
  style: PropTypes.string,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node
};

Modal.__docgenInfo = {
  props: {
    openControlled: {
      description: 'modal is controlled by parent, passing in true will open and passing in false will close modal (note: openControlled overrides openUncontrolled)'
    },
    openUncontrolled: {
      description: 'modal is controlled by internal state, passing in true will open modal, passing in false will not do anything'
    },
    body: {
      description: 'text or html string content of the modal'
    },
    buttons: {
      description: 'an array of props supported by the Button component'
    },
    style: {
      description: 'style of the modal shell'
    },
    onClose: {
      description: 'triggers when modal is closed'
    },
    title: {
      description: 'title of the modal'
    },
    children: {
      description: 'supports add any dom content to the body of the modal'
    }
  }
}

export default Modal;
