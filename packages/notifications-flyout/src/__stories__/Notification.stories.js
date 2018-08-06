import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import TextLink from "@hig/text-link";

import { Notification } from "../index";
import infoOptions from "./infoOptions";

const sampleNotification = (
  <div>
    <p>
      <b>Your subscription expires May 5</b>
    </p>
    <p>
      Maya
      <br />
      Media & Entertainment Collection
      <br />
      Product Design Collection
      <br />2 more
    </p>
    <p>
      <TextLink
        link="https://github.com/Autodesk/hig"
        onClick={action("notifications id 1")}
      >
        Manage renewal
      </TextLink>
    </p>
  </div>
);

storiesOf("Notifications|Flyout/Notification", module)
  .add(
    "default",
    withInfo(infoOptions)(() => (
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
    withInfo(infoOptions)(() => (
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
