import React, { Component } from "react";
import PropTypes from "prop-types";

import NotificationsAdapter from "../../../../adapters/GlobalNav/TopNav/NotificationsAdapter";
import Notification from "./Notification";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open
    };
  }

  componentDidMount = () => {
    const showNotificationsCount =
      this.props.children && this.props.children.length > 0;
    this.setState({ showNotificationsCount });
  };

  componentWillReceiveProps = nextProps => {
    if (
      nextProps.children &&
      this.props.children &&
      nextProps.children.length > this.props.children.length
    ) {
      this.setState({ showNotificationsCount: true });
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

  _showNotificationsCount = () =>
    this.state.showNotificationsCount && this.props.unreadCount > 0;

  render() {
    return (
      <NotificationsAdapter
        {...this.props}
        onClick={this.onClick}
        onClickOutside={this.onClickOutside}
        open={this.state.open}
        unreadCount={this.props.unreadCount}
        showUnreadBadge={false}
        showNotificationsCount={this._showNotificationsCount()}
      >
        {this.props.featuredNotification ? (
          <Notification
            featured
            onClick={() => {}}
            {...this.props.featuredNotification}
            unread={false}
          >
            {this.props.featuredNotification.children instanceof Function
              ? this.props.featuredNotification.children()
              : this.props.featuredNotification.children}
          </Notification>
        ) : null}
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
  onClickOutside: PropTypes.func,
  onScroll: PropTypes.func,
  title: PropTypes.string
};

Notifications.defaultProps = {
  onClick: () => {},
  onClickOutside: () => {},
  onScroll: () => {},
  title: "Notifications"
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
    },
    title: {
      description: "The title text that renders above the notifications list"
    }
  }
};

export default Notifications;
