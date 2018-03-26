import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import PropTypes from "prop-types";
import cx from "classnames";
import IconButton from "../IconButton/IconButton";
import RichText from "../RichText";
// import Timestamp from "../Timestamp";

const COMPONENT_CLASS = "hig__icon";
const FEATURED_COMPONENT_CLASS = "hig__notification--featured";
const UNREAD_MARKER_CLASS = "hig__notification__unread-marker";
const CONTENT_CLASS = "hig__notification__content";

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      in: true
    };
  }
  componentDidMount() {}

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
    const notificationClasses = cx(`${COMPONENT_CLASS}`, {
      [`hig__notification--unread`]: this.props.unread
    });

    return (
      <div>
        {this.props.featuredNotification ? (
          <Transition in={this.state.in} timeout={300}>
            {state => (
              <div
                className={`${notificationClasses} hig__notification--${state} ${FEATURED_COMPONENT_CLASS}`}
                onClickCapture={this.onClickCapture}
              >
                <div className={`${UNREAD_MARKER_CLASS}`} />
                <div className={`${CONTENT_CLASS}`}>
                  <RichText>{this.props.children}</RichText>
                  <IconButton
                    onClick={this.dismissFeaturedNotification}
                    icon="close-notification"
                    type="flat"
                  />
                </div>

                {/* <Timestamp timestamp="" /> */}
              </div>
            )}
          </Transition>
        ) : (
          <div
            className={notificationClasses}
            onClickCapture={this.onClickCapture}
          >
            <div className={`${UNREAD_MARKER_CLASS}`} />
            <div className={`${CONTENT_CLASS}`}>
              <RichText>{this.props.children}</RichText>
            </div>

            {/* <Timestamp /> */}
          </div>
        )}
      </div>
    );
  }
}

Notification.propTypes = {
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
  featuredNotification: PropTypes.bool,
  /**
   * Content for notification
   */
  children: PropTypes.node
  /**
   * Timestamp for notification
   */
  // timestamp: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]) // ISO date string
};
