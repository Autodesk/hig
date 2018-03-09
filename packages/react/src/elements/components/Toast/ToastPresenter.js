import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "../../../adapters/IconButtonAdapter";
import "./toast.css";

export default class ToastPresenter extends Component {
  render() {
    return (
      this.props.visible && (
        <div className="hig__toast">
          <div className="hig__toast__contents">{this.props.children}</div>
          <IconButton
            title="Dismiss"
            icon="close-notification"
            type="flat"
            onClick={this.props.onDismiss}
          />
        </div>
      )
    );
  }
}

ToastPresenter.propTypes = {
  /**
   * Content for the Toast
   */
  children: PropTypes.node,
  /**
   * Function to call when Toast is dismissed
   */
  onDismiss: PropTypes.func,
  /**
   * Whether Toast is rendered or not
   */
  visible: PropTypes.bool
};
