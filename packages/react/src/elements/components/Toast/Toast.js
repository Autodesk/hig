import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import IconButton from "../IconButton/IconButton";
import RichText from "../RichText";
import "./toast.scss";

export default class Toast extends Component {
  render() {
    const toastClasses = cx("hig__toast", {
      [`hig__toast--${this.props.status}`]: this.props.status
    });

    return (
      <div className={toastClasses}>
        <div className="hig__toast__body">
          <div className="hig__toast__message">
            <RichText>{this.props.children}</RichText>
          </div>
          <div className="hig__toast__dismiss-container">
            <IconButton
              title="Dismiss"
              icon="close-notification"
              type="flat"
              onClick={this.props.onDismiss}
            />
          </div>
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
  onDismiss: PropTypes.func,
  /**
   * Indicates the style of toast notification
   */
  status: PropTypes.oneOf(["primary", "success", "danger", "warning"])
};
