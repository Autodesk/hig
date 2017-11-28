import React from "react";
import * as PropTypes from "prop-types";
import { Modal as VanillaModal } from "hig-vanilla";
import ModalAdapter from "../../adapters/ModalAdapter";
import { Button } from "../../hig-react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    return (
      <ModalAdapter
        body={this.props.body}
        buttons={this.props.buttons}
        style={this.props.style}
        open={this.props.open}
        onCloseClick={this.props.onClose}
        onOverlayClick={this.props.onClose}
        title={this.props.title}
        slotEl={this.state.slotEl}
      >
        {this.props.children}
      </ModalAdapter>
    );
  }
}

Modal.propTypes = {
  body: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)),
  children: PropTypes.node,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  style: PropTypes.oneOf(VanillaModal.AvailableStyles),
  title: PropTypes.string
};

Modal.__docgenInfo = {
  props: {
    body: {
      description: "text or html string content of the modal"
    },
    buttons: {
      description: "an array of props supported by the Button component"
    },
    style: {
      description: "style of the modal shell"
    },
    onClose: {
      description: "triggers when the modal will close"
    },
    open: {
      description: "modal is visible when true"
    },
    title: {
      description: "title of the modal"
    },
    children: {
      description: "supports add any dom content to the body of the modal"
    }
  }
};

Modal.defaultProps = {
  onClose: () => {}
};

export default Modal;
