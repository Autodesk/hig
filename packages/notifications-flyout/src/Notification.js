import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import PropTypes from "prop-types";
import cx from "classnames";
import IconButton from "@hig/icon-button";
import RichText from "@hig/rich-text";
import "./notification.scss";

const COMPONENT_CLASS = "hig__notification";
const FEATURED_COMPONENT_CLASS = "hig__notification--featured";
const CONTENT_CLASS = "hig__notification__content";

export default class Notification extends Component {
  static propTypes = {
    /**
     * A callback called when user clicks on a link in the notification
     */
    onLinkClick: PropTypes.func,
    /**
     * A callback called when user dismisses a featured notification
     */
    onDismiss: PropTypes.func,
    /**
     * {Boolean} to show specify whether notificaiton is read
     */
    unread: PropTypes.bool,
    /**
     * Indicates whether this is a featured notification
     */
    featured: PropTypes.bool,
    /**
     * specifies type of notification
     */
    type: PropTypes.string,
    /**
     * id for notification
     */
    id: PropTypes.number,
    /**
     * Content for notification
     */
    children: PropTypes.node,
    /**
     * Timestamp component
     */
    timestamp: PropTypes.node
  };

  constructor(props) {
    super(props);
    this.state = {
      in: true
    };
  }

  onClickCapture = event => {
    if (event.target.tagName === "A" && this.props.onLinkClick) {
      this.props.onLinkClick(this.props.id);
    }
  };

  dismissFeaturedNotification = () => {
    this.props.onDismiss();
    this.setState({ in: false });
  };

  render() {
    const notificationClasses = cx(
      `${COMPONENT_CLASS}`,
      { [`hig__notification--${this.props.type}`]: this.props.type },
      {
        [`hig__notification--unread`]: this.props.unread
      }
    );

    const notification = this.props.featured ? (
      <Transition in={this.state.in} timeout={300}>
        {state => (
          <div
            className={`${notificationClasses} hig__notification--${state} ${FEATURED_COMPONENT_CLASS}`}
            onClickCapture={this.onClickCapture}
          >
            <div className={`${CONTENT_CLASS}`}>
              <RichText size="small">{this.props.children}</RichText>
              <IconButton
                onClick={this.dismissFeaturedNotification}
                icon="close-notification"
                type="transparent"
              />
            </div>
            {this.props.timestamp}
          </div>
        )}
      </Transition>
    ) : (
      <div className={notificationClasses} onClickCapture={this.onClickCapture}>
        <div className={`${CONTENT_CLASS}`}>
          <RichText size="small">{this.props.children}</RichText>
        </div>

        {this.props.timestamp}
      </div>
    );

    return notification;
  }
}
