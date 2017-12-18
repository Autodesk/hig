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

  componentDidMount = () => {
    const showNotificationsCount = this.props.children.length > 0;
    this.setState({ showNotificationsCount });
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.children.length > this.props.children.length) {
      this.props.onClick({
        event: {},
        seenNotificationIds: this._findSeenNotificationIds(nextProps.children)
      });
      this.setState({ showNotificationsCount: true });
    } else {
      this.setState({ showNotificationsCount: false });
    }
  };

  onClick = event => {
    if (this.props.onClick) {
      this.props.onClick({
        event,
        seenNotificationIds: this._findSeenNotificationIds(this.props.children)
      });
    }
    this.setState({ open: true, showNotificationsCount: true });
  };

  onClickOutside = event => {
    if (this.props.onClickOutside) {
      this.props.onClickOutside({
        event
      });
    }
    this.setState({ open: false, showNotificationsCount: false });
  };

  _findSeenNotificationIds(props) {
    return React.Children.map(props, child => child.props.id);
  }

  render() {
    return (
      <NotificationsAdapter
        {...this.props}
        onClick={this.onClick}
        onClickOutside={this.onClickOutside}
        open={this.state.open}
        unreadCount={this.props.unreadCount}
        showUnreadBadge={false}
        showNotificationsCount={this.state.showNotificationsCount}
      >
        {this.props.children}
      </NotificationsAdapter>
    );
  }
}

Notifications.propTypes = {
  open: PropTypes.bool,
  loading: PropTypes.bool,
  maxHeight: PropTypes.number,
  showUnreadBadge: PropTypes.bool,
  unreadCount: PropTypes.number,
  onClick: PropTypes.func,
  onClickOutside: PropTypes.func,
  onScroll: PropTypes.func
};

Notifications.defaultProps = {
  onClick: () => {},
  onClickOutside: () => {},
  onScroll: () => {}
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
      description: "Pass a value for number of notifications that are unread"
    },
    onClickOutside: {
      description:
        "Calls the provided callback when user clicks outside the dropdown"
    },
    onClick: {
      description:
        "Calls the provided callback when user clicks on the notifications icon in the top nav"
    },
    onScroll: {
      description:
        "Calls the provided callback when the notifications content is scrolled"
    },
    showUnreadBadge: {
      description: "Boolean on whether to show number of notifications or not"
    },
    unreadCount: {
      description: "number of unreadmessages"
    },
    loading: {
      description: "show the loading indicator"
    },
    maxHeight: {
      description: "the max height of the flyout content, in pixels"
    }
  }
};

export default Notifications;
