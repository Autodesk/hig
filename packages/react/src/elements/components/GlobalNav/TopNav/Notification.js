import React, { Component } from "react";
import PropTypes from "prop-types";

import NotificationAdapter from "../../../../adapters/GlobalNav/TopNav/NotificationAdapter";

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unread: this.props.unread
    };
    this.initialProps = props;
  }

  onClick = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    return (
      <NotificationAdapter
        {...this.props}
        onClick={this.onClick}
        id={this.props.id}
        unread={this.props.unread}
      >
        {this.props.children}
      </NotificationAdapter>
    );
  }
}

Notification.propTypes = {
  /**
   * {Boolean} to show specify whether notification is read
   */
  unread: PropTypes.bool,
  /**
   * Content for notification
   */
  children: PropTypes.node,
  /**
   * Timestamp for notification (ISO date string or date instance)
   */
  timestamp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]),
  /**
   * Calls the provided callback when user clicks on the noticatiosn icon in the top nav
   */
  onClick: PropTypes.func,
  /**
   * Id for the notification
   */
  id: PropTypes.number.isRequired,
  /**
   * {Boolean} specifies a featured notification
   */
  featured: PropTypes.bool
};
