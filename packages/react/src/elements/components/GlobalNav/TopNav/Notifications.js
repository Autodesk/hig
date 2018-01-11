import React, { Component } from "react";
import PropTypes from "prop-types";

import NotificationsAdapter from "../../../../adapters/GlobalNav/TopNav/NotificationsAdapter";
import Notification from "./Notification";

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      seenNotificationIds: this.readIds()
    };
  }

  onScroll = event => this.props.onScroll && this.props.onScroll(event);

  onClick = event => {
    if (this.props.onClick) {
      this.props.onClick({
        event
      });
    }

    this.setState({
      open: true
    });
  };

  onClickOutside = event => {
    this.setState({
      open: false,
      seenNotificationIds: this.notificationIds(),
      featuredNotificationSeen: true
    });

    if (this.props.onClickOutside) {
      this.props.onClickOutside(event);
    }
  };

  readIds() {
    return React.Children.toArray(this.props.children)
      .filter(c => !c.props.unread)
      .map(c => c.props.id);
  }

  unseenCount = () => {
    let count =
      this.props.featuredNotification && !this.state.featuredNotificationSeen
        ? 1
        : 0;

    if (!this.props.children) {
      return count;
    }

    count += this.notificationIds().filter(
      id => this.state.seenNotificationIds.indexOf(id) === -1
    ).length;

    return Math.min(count, 99);
  };

  notificationIds() {
    return React.Children.map(this.props.children, child => child.props.id);
  }

  render() {
    const unseenCount = this.unseenCount();
    return (
      <NotificationsAdapter
        {...this.props}
        onClick={this.onClick}
        onClickOutside={this.onClickOutside}
        onScroll={this.onScroll}
        open={this.state.open}
        unseenCount={unseenCount}
        showNotificationsCount={unseenCount > 0}
      >
        {this.props.featuredNotification ? (
          <Notification
            featured
            {...this.props.featuredNotification}
            unread={false}
          >
            {this.props.featuredNotification.children}
          </Notification>
        ) : null}
        {this.props.children}
      </NotificationsAdapter>
    );
  }
}

Notifications.propTypes = {
  /**
   * Opens the notifications flyout
   */
  open: PropTypes.bool,
  /**
   * Show the loading indicator
   */
  loading: PropTypes.bool,
  /**
   * Calls the provided callback when user clicks on the notifications icon in the top nav
   */
  onClick: PropTypes.func,
  /**
   * Calls the provided callback when user clicks outside the dropdown
   */
  onClickOutside: PropTypes.func,
  /**
   * Calls the provided callback when the notifications content is scrolled
   */
  onScroll: PropTypes.func,
  /**
   * The title text that renders above the notifications list
   */
  title: PropTypes.string,
  /**
   * An object containing props for a Notification, to be styled as a featured notification
   */
  featuredNotification: PropTypes.shape(Notification.propTypes)
};

Notifications.defaultProps = {
  onClick: () => {},
  onClickOutside: () => {},
  onScroll: () => {},
  title: "Notifications",
  children: []
};
