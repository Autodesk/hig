import React from 'react';
import  ModalAdapter  from '../../adapters/ModalAdapter'
import PropTypes from 'prop-types';

class Modal extends React.Component {
  close = (event) => {
    this.props.onClose(event);
  };

  render() {
    return (
      <ModalAdapter
        body={this.props.body}
        buttons={this.props.buttons}
        headerColor={this.props.headerColor}
        open={this.props.isOpen}
        onCloseClick={this.close}
        onOverlayClick={this.close}
        title={this.props.title}
      >
        {this.props.children}
      </ModalAdapter>
    );
  }
}

Modal.propTypes= {
  body: PropTypes.string,
  buttons: PropTypes.array,
  headerColor: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Modal;

