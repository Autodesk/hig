import React from "react";
import { mount } from "enzyme";
import { anchorPoints } from "@hig/flyout";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import Notification from "./Notification";
import NotificationsFlyout from "./NotificationsFlyout";

describe("notifications-flyout/NotificationsFlyout", () => {
  takeSnapshotsOf(NotificationsFlyout, [
    {
      desc: "renders without props",
      props: {},
    },
    {
      desc: "renders a notification with the `notifications` prop",
      props: {
        notifications: [{}],
      },
    },
    {
      desc: "renders a notification with the `children` prop",
      props: {
        children: <Notification />,
      },
    },
    {
      desc: "renders with all props",
      props: {
        anchorPoint: anchorPoints.RIGHT_BOTTOM,
        alterCoordinates: (coordinates) => coordinates,
        fallbackAnchorPoints: [anchorPoints.LEFT_TOP],
        heading: "Hello",
        indicatorTitle: "World",
        loading: true,
        notifications: [{ id: "1" }, <Notification />],
        onClick: function handleClick() {},
        onClickOutside: function handleClickOutside() {},
        onScroll: function handleScroll() {},
        open: true,
        unreadCount: 44,
      },
    },
  ]);

  describe("notification rendering props", () => {
    describe("handleDismiss", () => {
      const onDismiss = jest.fn();
      const clickCallback = jest.fn();
      let wrapper;

      beforeEach(() => {
        wrapper = mount(
          <NotificationsFlyout>
            <Notification
              onDismiss={onDismiss}
              onNotificationClick={clickCallback}
            />
          </NotificationsFlyout>
        );

        jest.clearAllMocks();
      });

      it.skip("removes the notification from the list", () => {
        expect(wrapper.find(Notification)).toHaveLength(1);
        wrapper.find(Notification).props().onDismiss();

        expect(wrapper.find(Notification)).toHaveLength(0);
      });

      it("calls the notification `onDismiss` event handler", () => {
        expect(onDismiss).not.toHaveBeenCalled();

        wrapper.find(Notification).props().onDismiss();

        expect(onDismiss).toHaveBeenCalledTimes(1);
      });

      it("calls the passed in function when clicked", () => {
        expect(clickCallback).not.toHaveBeenCalled();

        wrapper.find(Notification).simulate("click");

        expect(clickCallback).toHaveBeenCalledTimes(1);
      });
    });
  });
});
