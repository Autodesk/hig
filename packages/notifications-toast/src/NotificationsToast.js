import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import IconButton from "@hig/icon-button";
import { CloseNotification24 } from "@hig/icons";
import RichText from "@hig/rich-text";
import "@hig/icon/build/index.css";
import "@hig/icon-button/build/index.css";
import "@hig/rich-text/build/index.css";

import { STATUS_ICONS, AVAILABLE_STATUSES } from "./statuses";

import "./notificationsToast.scss";

export default class NotificationsToast extends Component {
  static propTypes = {
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
    status: PropTypes.oneOf(AVAILABLE_STATUSES)
  };

  static defaultProps = {
    showStatusIcon: true,
    status: "primary"
  };

  _renderImage = () => {
    const { showStatusIcon, image, status } = this.props;
    if (image) {
      return <div className="hig__toast__image-container">{image}</div>;
    }

    if (showStatusIcon && STATUS_ICONS[status]) {
      const Icon = STATUS_ICONS[status];
      return (
        <div className="hig__toast__image-container">
          <Icon />
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
                icon={<CloseNotification24 />}
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
