import React from "react";
import { mount } from "enzyme";

import Notification from "../Notification";
import NotificationFlyoutBehavior from "./NotificationFlyoutBehavior";

describe("notification-flyout/behaviors/NotificationFlyoutBehavior", () => {
  const children = jest.fn();

  function mountBehavior() {
    return mount(
      <NotificationFlyoutBehavior
        notifications={[
          <Notification id="1" key="0" featured>
            Featured
          </Notification>,
          <Notification id="2" key="1">
            Foo
          </Notification>,
          <Notification id="3" key="2">
            Bar
          </Notification>,
        ]}
      >
        {children}
      </NotificationFlyoutBehavior>
    );
  }

  beforeEach(() => {
    children.mockReturnValue(<div />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders", () => {
    mountBehavior();
  });

  describe("render prop payload", () => {
    let payload;
    let wrapper;

    beforeEach(() => {
      wrapper = mountBehavior();
      [[payload]] = children.mock.calls;
    });

    it("provides a payload to the `children` render prop", () => {
      expect(payload).toMatchObject({
        dismissNotification: expect.any(Function),
        handleClose: expect.any(Function),
        notifications: expect.any(Array),
        showUnreadCount: true,
        unreadCount: 3,
      });
      expect(payload.notifications).toMatchSnapshot();
    });

    it("normalizes notifications", () => {
      expect(payload.notifications).toMatchSnapshot();
    });

    describe("dismissNotification", () => {
      function expectToHaveNotificationTimes(length) {
        const { notifications } = children.mock.calls.slice(-1)[0][0];

        expect(notifications).toHaveLength(length);
      }

      it("dismisses the notification of the given ID", () => {
        const { dismissNotification } = payload;

        expectToHaveNotificationTimes(3);
        dismissNotification("1");
        expectToHaveNotificationTimes(2);
        dismissNotification("1");
        expectToHaveNotificationTimes(2);
      });
    });

    describe("handleClose", () => {
      function expectToHaveUnreadNotificationTimes(length) {
        const { notifications } = children.mock.calls.slice(-1)[0][0];
        const unreadNotifications = notifications.filter(
          ({ unread }) => unread
        );

        expect(unreadNotifications).toHaveLength(length);
      }

      it("marks all notifications as read", () => {
        const { handleClose } = payload;

        expectToHaveUnreadNotificationTimes(3);
        handleClose();
        expectToHaveUnreadNotificationTimes(0);
      });

      it("updates the unread count", () => {
        const { handleClose } = payload;

        expect(children).toHaveBeenLastCalledWith(
          expect.objectContaining({ unreadCount: 3 })
        );

        handleClose();

        expect(children).toHaveBeenLastCalledWith(
          expect.objectContaining({ unreadCount: 0 })
        );
      });
    });

    describe("unreadCount", () => {
      it("is derived from the given notifications", () => {
        expect(payload.unreadCount).toEqual(3);
      });

      describe("when controlled", () => {
        it("it references the `unreadCount` prop", () => {
          const unreadCount = 3;

          wrapper.setProps({ unreadCount });

          expect(children).toHaveBeenLastCalledWith(
            expect.objectContaining({ unreadCount })
          );
        });
      });
    });
  });
});
