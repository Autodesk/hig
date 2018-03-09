import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "../../../adapters/IconButtonAdapter";
import "./toast.css";

export default class Toast extends Component {
  render() {
    return (
      <div className="hig__toast">
        <div className="hig__toast__body">
          <div className="hig__toast__message">{this.props.children}</div>
          <IconButton
            title="Dismiss"
            icon="close-notification"
            type="flat"
            onClick={this.props.onDismiss}
          />
        </div>
      </div>
    );
  }
}

Toast.propTypes = {
  /**
   * Message content for the Toast
   */
  children: PropTypes.node,
  /**
   * Function to call when Toast is dismissed
   */
  onDismiss: PropTypes.func
};
