import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon, { sizes as iconSizes } from "@hig/icon";
import IconButton from "@hig/icon-button";
import RichText from "../RichText";
import "./toast.scss";

const _STATUS_ICONS = {
  primary: "info",
  success: "complete",
  error: "error",
  warning: "issue"
};

export const _AVAILABLE_STATUSES = Object.freeze(Object.keys(_STATUS_ICONS));

export default class Toast extends Component {
  _renderImage = () => {
    const { showStatusIcon, image, status } = this.props;
    if (image) {
      return <div className="hig__toast__image-container">{image}</div>;
    }

    if (showStatusIcon && _STATUS_ICONS[status]) {
      return (
        <div className="hig__toast__image-container">
          {<Icon name={_STATUS_ICONS[status]} size={iconSizes.PX_24} />}
        </div>
      );
    }

    return null;
  };

  render() {
    const toastClasses = cx("hig__toast", {
      [`hig__toast--${this.props.status}`]: this.props.status
    });

    return (
      <div className={toastClasses}>
        {this._renderImage()}
        <div className="hig__toast__body">
          <div className="hig__toast__message">
            <RichText size="small">{this.props.children}</RichText>
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

Toast.defaultProps = {
  showStatusIcon: true,
  status: "primary"
};

Toast.propTypes = {
  /**
   * Message content for the Toast. It's recommended to keep the content to no more than 20 words.
   */
  children: PropTypes.node,
  /**
   * An Avatar or Thumbnail to precede the notification content.
   * If an image is provided and showStatusIcon is true, the image will take priority.
   */
  image: PropTypes.node,
  /**
   * Function to call when Toast is dismissed
   */
  onDismiss: PropTypes.func,
  /**
   * Indicate whether to show the icon associated with the provided status.
   * An icon will not be shown for a null status.
   */
  showStatusIcon: PropTypes.bool,
  /**
   * Indicates the style of toast notification
   */
  status: PropTypes.oneOf(_AVAILABLE_STATUSES)
};
