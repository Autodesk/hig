import React from "react";
import PropTypes from "prop-types";
import { Modal as VanillaModal } from "hig-vanilla";
import ModalAdapter from "../../adapters/ModalAdapter";
import { Button } from "../../hig-react";

export default class Modal extends React.Component {
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
  /**
   * Text or html string content of the modal
   */
  body: PropTypes.string,
  /**
   * An array of props supported by the Button component
   */
  buttons: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)),
  /**
   * Ssupports adding any dom content to the body of the modal
   */
  children: PropTypes.node,
  /**
   * Triggers when the modal closes
   */
  onClose: PropTypes.func,
  /**
   * Modal is visible when true
   */
  open: PropTypes.bool,
  /**
   * Style of the modal shell
   */
  style: PropTypes.oneOf(VanillaModal.AvailableStyles),
  /**
   * Title of the modal
   */
  title: PropTypes.string
};

Modal.defaultProps = {
  onClose: () => {}
};
