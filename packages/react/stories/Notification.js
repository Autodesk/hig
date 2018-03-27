import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs/react";
import { NotificationV1, TextLink } from "../src/hig-react";

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
        <p>
          <TextLink
            href="https://github.com/Autodesk/hig"
            text="Manage renewal"
            onClick={() => {
              console.log("notifications id 1");
            }}
          />
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
        <p>
          <TextLink
            href="https://github.com/Autodesk/hig"
            text="Manage renewal"
            onClick={() => {
              console.log("notifications id 2");
            }}
          />
        </p>
      </div>
    )
  }
];

storiesOf("Notification", module)
  .add("default", () => (
    <NotificationV1
      id={1}
      unread={boolean("Unread", false)}
      onLinkClick={action("link clicked")}
      status={text("Status")}
    >
      {sampleNotifications[0].children}
    </NotificationV1>
  ))
  .add("Featured Notification", () => (
    <NotificationV1
      id={1}
      onLinkClick={action("link clicked")}
      featured={boolean("Featured", true)}
      onDismiss={action("dimiss featured notification")}
    >
      {sampleNotifications[0].children}
    </NotificationV1>
  ));
