import { anchorPoints } from "@hig/flyout";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import NotificationsFlyout from "./NotificationsFlyout";

describe("notifications-flyout/NotificationsFlyout", () => {
  takeSnapshotsOf(NotificationsFlyout, [
    {
      desc: "renders without props",
      props: {}
    },
    {
      desc: "renders with all props",
      props: {
        anchorPoint: anchorPoints.RIGHT_BOTTOM,
        heading: "Hello",
        indicatorTitle: "World",
        loading: true,
        notifications: [],
        onClickOutside: function handleClickOutside() {},
        onScroll: function handleScroll() {},
        open: true,
        unreadCount: 44
      }
    }
  ]);
});
