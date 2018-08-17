import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import TextLink from "@hig/text-link";
import { Notifications } from "hig-react";

import { Notification } from "../index";
import sampleNotifications from "./notificationFixtures";
import NotificationsFlyoutInteraction from "./NotificationsFlyoutInteraction";
import infoOptions from "./infoOptions";

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
}

storiesOf("Notifications|Flyout", module)
  .add(
    "V1",
    withInfo({
      ...infoOptions,
      inline: false
    })(() => (
      <div style={{ fontFamily: "ArtifaktElement" }}>
        {/* @TODO: Remove wrapper when Notifications is ported */}
        <Notifications
          title="Notifications"
          onClick={action("Notifications on click")}
          onClickOutside={action("Notifications onClickOutside")}
          onScroll={action("Notifications onScroll")}
          unreadCount={number("Unread count", 3)}
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
      </div>
    ))
  )
  .add(
    "interactive V1",
    withInfo(infoOptions)(() => (
      <div style={{ fontFamily: "ArtifaktElement" }}>
        {/* @TODO: Remove wrapper when Notifications is ported */}
        <NotificationsFlyoutInteraction />
      </div>
    ))
  );
