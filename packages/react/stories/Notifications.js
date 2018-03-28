import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs/react";
import { Notifications, NotificationV1, TextLink } from "../src/hig-react";

function featuredNotification() {
  return (
    <NotificationV1
      id={2}
      onDismiss={action("Featured Notification Dismissed")}
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
          <TextLink text="Primary link" />
          {" or "}
          <TextLink text="Secondary link" />
        </p>
      </div>
    </NotificationV1>
  );
}

const sampleNotifications = [
  {
    id: 0,
    unread: true,
    children: (
      <div>
        <p>
          <b>Your subscription expires May 5</b>
        </p>
        <p>
          Maya<br />
          Media & Entertainment Collection<br />
          Product Design Collection<br />
          2 more
        </p>
      </div>
    )
  },
  {
    id: 1,
    unread: true,
    children: (
      <div>
        <p>
          <b>Your subscription expires April 20</b>
        </p>
        <p>
          AutoCAD<br />
          Architecture Construction Engineering Collection<br />
          Product Design Collection<br />
        </p>
      </div>
    )
  }
];

storiesOf("Notifications", module).add("V1", () => (
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
      <NotificationV1
        unread={notification.unread}
        key={notification.id}
        onLinkClick={action("Notification Link Clicked")}
        id={notification.id}
        title={notification.title}
      >
        {notification.children}
      </NotificationV1>
    ))}
  </Notifications>
));
