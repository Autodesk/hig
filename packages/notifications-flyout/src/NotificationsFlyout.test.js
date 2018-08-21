import React from "react";

import { anchorPoints } from "@hig/flyout";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import Notification from "./Notification";
import NotificationsFlyout from "./NotificationsFlyout";

describe("notifications-flyout/NotificationsFlyout", () => {
  takeSnapshotsOf(NotificationsFlyout, [
    {
      desc: "renders without props",
      props: {}
    },
    {
      desc: "renders a notification with the `notifications` prop",
      props: {
        notifications: [{}]
      }
    },
    {
      desc: "renders a notification with the `children` prop",
      props: {
        children: <Notification />
      }
    },
    {
      desc: "renders with all props",
      props: {
        anchorPoint: anchorPoints.RIGHT_BOTTOM,
        heading: "Hello",
        indicatorTitle: "World",
        loading: true,
        notifications: [{ id: "1" }, <Notification />],
        onClickOutside: function handleClickOutside() {},
        onScroll: function handleScroll() {},
        open: true,
        unreadCount: 44
      }
    }
  ]);
});
