import React, { Component } from "react";
import PropTypes from "prop-types";

import NotificationsAdapter from "../../../../adapters/GlobalNav/TopNav/NotificationsAdapter";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open
    };
  }

  onClick = event => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
    this.setState({ open: true });
  };

  onClickOutside = event => {
    if (this.props.onClickOutside) {
      this.props.onClickOutside(event);
    }
    this.setState({ open: false });
  };

  render() {
    return (
      <NotificationsAdapter
        {...this.props}
        onClick={this.onClick}
        onClickOutside={this.onClickOutside}
        open={this.state.open}
        unreadCount={this.props.unreadCount}
        showUnreadBadge={false}
      >
        {this.props.children}
      </NotificationsAdapter>
    );
  }
}

Notifications.propTypes = {
  open: PropTypes.bool,
  loading: PropTypes.bool,
  showUnreadBadge: PropTypes.bool,
  unreadCount: PropTypes.number,
  onClick: PropTypes.func,
  onClickOutside: PropTypes.func
};

Notifications.defaultProps = {
  onClick: () => {},
  onClickOutside: () => {}
};

Notifications.__docgenInfo = {
  props: {
    open: {
      description: "opens the notifications flyout"
    },
    addNotification: {
      description: "Pass in an instance of a Notification"
    },
    setUnreadCount: {
      description: "Pass a value for number of notificatiosn that are unread"
    },
    onClickOutside: {
      description:
        "Calls the provided callback when user clicks outside the dropdown"
    },
    onClick: {
      description:
        "Calls the provided callback when user clicks on the noticatiosn icon in the top nav"
    },
    showUnreadBadge: {
      description: "Boolean on whether to show number of notifications or not"
    },
    unreadCount: {
      description: "number of unreadmessages"
    },
    loading: {
      description: "show the loading indicator"
    }
  }
};

export default Notifications;
