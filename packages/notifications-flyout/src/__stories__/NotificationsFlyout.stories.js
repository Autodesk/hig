import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import { Notifications, TextLink } from "hig-react";

import { Notification } from "../index";
import sampleNotifications from "./notificationFixtures";
import NotificationsFlyoutInteraction from "./NotificationsFlyoutInteraction";

function featuredNotification() {
  return (
    <Notification id={2} onDismiss={action("Featured Notification Dismissed")}>
      <div>
        <p>
          <b>New enhancements to subscription management lorum ipsom gas</b>
        </p>
        <p>
          Lorum reduce seats on your subscriptions and upcoming payments in your
          account
        </p>
        <p>
          <TextLink text="Primary link" />
          {" or "}
          <TextLink text="Secondary link" />
        </p>
      </div>
    </Notification>
  );
}

storiesOf("NotificationsFlyout", module)
  .add(
    "V1",
    withInfo()(() => (
      <Notifications
        title="Notifications"
        onClick={action("Notifications on click")}
        onClickOutside={action("Notifications onClickOutside")}
        onScroll={action("Notifications onScroll")}
        unreadCount={text("Unread count", 3)}
        featuredNotification={featuredNotification()}
        loading={boolean("Loading Indicator", false)}
        open
      >
        {sampleNotifications.map(notification => (
          <Notification
            unread={notification.unread}
            key={notification.id}
            onLinkClick={action("Notification Link Clicked")}
            id={notification.id}
            title={notification.title}
            type={notification.type}
            timestamp={notification.timestamp}
          >
            {notification.children}
          </Notification>
        ))}
      </Notifications>
    ))
  )
  .add("interactive V1", withInfo()(() => <NotificationsFlyoutInteraction />));
