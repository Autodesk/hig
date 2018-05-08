import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import { TextLink } from "hig-react";

import { Notification } from "../index";

const sampleNotification = (
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
);

storiesOf("NotificationsFlyout/Notification", module)
  .add(
    "default",
    withInfo()(() => (
      <Notification
        id={1}
        unread={boolean("Unread", false)}
        onLinkClick={action("link clicked")}
        status={text("Status")}
      >
        {sampleNotification}
      </Notification>
    ))
  )
  .add(
    "Featured Notification",
    withInfo()(() => (
      <Notification
        id={1}
        onLinkClick={action("link clicked")}
        featured={boolean("Featured", true)}
        onDismiss={action("dimiss featured notification")}
      >
        {sampleNotification}
      </Notification>
    ))
  );
