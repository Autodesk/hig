import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import IconButton from "../IconButton/IconButton";
import RichText from "../RichText";
import "./toast.scss";

export const _AVAILABLE_STATUSES = ["primary", "success", "danger", "warning"];

export default class ToastPresenter extends Component {
  render() {
    const toastClasses = cx("hig__toast", {
      [`hig__toast--${this.props.status}`]: this.props.status
    });

    return (
      <div className={toastClasses}>
        {this.props.image && (
          <div className="hig__toast__image-container">{this.props.image}</div>
        )}
        <div className="hig__toast__body">
          <div className="hig__toast__message">
            <RichText>{this.props.children}</RichText>
            <div className="hig__toast__dismiss">
              <IconButton
                title="Dismiss"
                icon="close-notification"
                type="transparent"
                onClick={this.props.onDismiss}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ToastPresenter.defaultProps = {
  status: "primary"
};

ToastPresenter.propTypes = {
  /**
   * Message content for the Toast
   */
  children: PropTypes.node,
  /**
   * An Avatar or Thumbnail to precede the notification content.
   * If not provided, the matching status icon will be rendered.
   */
  image: PropTypes.node,
  /**
   * Function to call when Toast is dismissed
   */
  onDismiss: PropTypes.func,
  /**
   * Indicates the style of toast notification
   */
  status: PropTypes.oneOf(_AVAILABLE_STATUSES)
};
