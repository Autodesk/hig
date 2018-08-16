import React, { PureComponent } from "react";
import Button from "@hig/button";
import TextLink from "@hig/text-link";
import { Notifications } from "hig-react";

import { Notification } from "../index";
import sampleNotifications from "./notificationFixtures";

export default class NotificationsInteraction extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      seenNotificationIds: [],
      notifications: sampleNotifications,
      readIds: this._initialReadNotifications(sampleNotifications),
      notificationsLoading: false
    };
  }

  onNotificationsClick = eventInfo => {
    console.log("on notifications click", eventInfo);
  };

  onNotificationsScroll = eventInfo => {
    if (eventInfo.percentageScrolled > 0.5) {
      this.setState({ notificationsLoading: true }, () =>
        setTimeout(() => this.setState({ notificationsLoading: false }), 3000)
      );
    }
  };

  onNotificationLinkClick = notificationId => {
    this.setState({
      readIds: [...new Set([...this.state.readIds, notificationId])]
    });
  };

  addNotification = () => {
    const newNotification = {
      id: this.state.notifications.length,
      unread: true,
      onLinkClick: this.onNotificationLinkClick,
      children: (
        <div>
          <p>
            You have 4 new seats of <b>Product Design Collection</b>{" "}
            subscription, switched from <b>Building Design Suite Premium</b>
            subscription.
          </p>
          <p>
            <TextLink>Learn how to switch</TextLink>
            {" or "}
            <TextLink>Assign users</TextLink>
          </p>
        </div>
      )
    };

    this.setState({
      notifications: [...this.state.notifications, newNotification]
    });
  };

  transformedNotifications = notifications =>
    notifications.map(notification =>
      Object.assign({}, notification, {
        onLinkClick: this.onNotificationLinkClick,
        unread: !this.state.readIds.includes(notification.id)
      })
    );

  featuredNotification = () => (
    <Notification
      id={2}
      onDismiss={this.featuredNotificationDismissed}
      onLinkClick={this.onNotificationLinkClick}
    >
      <div>
        <p>
          <b>New enhancements to subscription management lorum ipsom gas</b>
        </p>
        <p>
          Lorum reduce seats on your subscriptions and upcoming payments in your
          account
        </p>
        <p>
          <TextLink link="https://github.com/Autodesk/hig">
            Primary link
          </TextLink>
          {" or "}
          <TextLink link="https://github.com/Autodesk/hig">
            Secondary link
          </TextLink>
        </p>
      </div>
    </Notification>
  );

  featuredNotificationDismissed = () => {
    console.log("Feature notification dismissed");
  };

  _initialReadNotifications = notifications =>
    notifications
      .filter(notification => !notification.unread)
      .map(notification => notification.id);

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          size="standard"
          title="Add notification"
          onClick={this.addNotification}
        />

        <Notifications
          title="Notifications"
          onClick={this.onNotificationsClick}
          onClickOutside={event => {
            console.log("notifications on click outside", event);
          }}
          onScroll={this.onNotificationsScroll}
          featuredNotification={this.featuredNotification()}
          loading={this.state.notificationsLoading}
        >
          {this.state.notifications.map(notification => (
            <Notification
              unread={!this.state.readIds.includes(notification.id)}
              key={notification.id}
              onLinkClick={this.onNotificationLinkClick}
              id={notification.id}
              title={notification.title}
              type={notification.type}
              timestamp={notification.timestamp}
            >
              {notification.children}
            </Notification>
          ))}
        </Notifications>
      </div>
    );
  }
}
