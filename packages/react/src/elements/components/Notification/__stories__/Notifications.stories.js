import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Notification from "../index";
import Notifications from "../../GlobalNav/TopNav/Notifications"; // TODO: Swap out for Notifications
import TextLink from "../../../../adapters/TextLinkAdapter"; // TODO: Swap out for TextLink

import NotificationsInteraction from "./NotificationsInteraction";

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

const minutesDate1 = new Date();
const minutesDate2 = new Date();
const minutesDate3 = new Date();
const minutesDate4 = new Date();

const updatedDate1 = minutesDate1.setMinutes(minutesDate1.getMinutes() - 3);
const updatedDate2 = minutesDate2.setHours(minutesDate2.getHours() - 2);
const updatedDate3 = minutesDate2.setHours(minutesDate3.getHours() - 24);
const updatedDate4 = minutesDate4.setMinutes(minutesDate4.getMinutes() - 20);

const sampleNotifications = [
  {
    id: 1,
    unread: true,
    type: "primary",
    timestamp: new Date(updatedDate1),
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
        <p>
          <TextLink
            href="https://github.com/Autodesk/hig"
            text="Manage renewal"
            onClick={action("notifications id 1")}
          />
        </p>
      </div>
    )
  },
  {
    id: 2,
    unread: true,
    type: "success",
    timestamp: new Date(updatedDate2),
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
        <p>
          <TextLink
            href="https://github.com/Autodesk/hig"
            text="Manage renewal"
            onClick={action("notifications id 2")}
          />
        </p>
      </div>
    )
  },
  {
    id: 3,
    unread: true,
    timestamp: new Date(updatedDate3),
    type: "error",
    children: (
      <div>
        <p>
          <b>Your subscription expires June 15</b>
        </p>
        <p>
          AutoCAD<br />
          Architecture Construction Engineering Collection<br />
          HIG<br />
        </p>
        <p>
          <TextLink
            href="https://github.com/Autodesk/hig"
            text="Manage renewal"
            onClick={action("notifications id 3")}
          />
        </p>
      </div>
    )
  },
  {
    id: 4,
    unread: true,
    timestamp: new Date(updatedDate4),
    type: "warning",
    children: (
      <div>
        <p>
          <b>Your subscription expires June 15</b>
        </p>
        <p>A new version of Autodesk Revit is available for download.</p>
        <p>
          <TextLink
            href="https://github.com/Autodesk/hig"
            text="Manage renewal"
            onClick={action("notifications id 4")}
          />
        </p>
      </div>
    )
  }
];

storiesOf("Notifications", module)
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
  .add("interactive V1", withInfo()(() => <NotificationsInteraction />));
