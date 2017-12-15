import React, { Component } from "react";
import PropTypes from "prop-types";

import NotificationAdapter from "../../../../adapters/GlobalNav/TopNav/NotificationAdapter";

class Notification extends Component {
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
  unread: PropTypes.bool,
  children: PropTypes.node,
  timestamp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]), // ISO date string
  onClick: PropTypes.func,
  id: PropTypes.string
};

Notification.defaultProps = {};

Notification.__docgenInfo = {
  props: {
    unread: {
      description: "{Boolean} to show specify whether notificaiton is read"
    },
    children: {
      description: "content for notification"
    },
    timestamp: {
      description: "timstamp for notification"
    },
    onClick: {
      description:
        "Calls the provided callback when user clicks on the noticatiosn icon in the top nav"
    }
  }
};

export default Notification;
