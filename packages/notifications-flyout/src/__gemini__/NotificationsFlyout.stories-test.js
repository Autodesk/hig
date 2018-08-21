import React from "react";
import { storiesOf } from "@storybook/react";
import { anchorPoints } from "@hig/flyout";

import createSampleNotifications from "../__fixtures__/createSampleNotifications";
import NotificationsFlyout from "../NotificationsFlyout";

const captureStyle = {
  display: "flex",
  width: "400px",
  height: "1200px",
  alignItems: "center",
  flexDirection: "column"
};

storiesOf("NotificationsFlyout", module).add("default", () => (
  <div data-capture="NotificationsFlyout" style={captureStyle}>
    <NotificationsFlyout
      open
      anchorPoint={anchorPoints.TOP_CENTER}
      notifications={createSampleNotifications()}
      unreadCount={3}
    />
  </div>
));
