import React from "react";
import { mount } from "enzyme";

import Notifications from "./Notifications";
import Notification from "./Notification";
import NotificationsAdapter from "../../../../adapters/GlobalNav/TopNav/NotificationsAdapter";

describe("<Notifications", () => {
  let wrapper;

  describe("the notifications badge count", () => {
    describe("on initial mount", () => {
      beforeEach(() => {
        wrapper = mount(
          <Notifications>
            <Notification unread id={1} />
            <Notification unread={false} id={2} />
          </Notifications>
        );
      });
      it("shows unseen count of incoming notifications", () => {
        expect(wrapper.find(NotificationsAdapter)).toHaveProp("unseenCount", 1);
        expect(wrapper.find(NotificationsAdapter)).toHaveProp(
          "showNotificationsCount",
          true
        );
      });
    });

    describe("given a featured notification", () => {
      beforeEach(() => {
        wrapper = mount(
          <Notifications featuredNotification={{ id: 3 }}>
            <Notification unread id={1} />
            <Notification unread={false} id={2} />
          </Notifications>
        );
      });
      it("includes featured notification in the count", () => {
        expect(wrapper.find(NotificationsAdapter)).toHaveProp("unseenCount", 2);
        expect(wrapper.find(NotificationsAdapter)).toHaveProp(
          "showNotificationsCount",
          true
        );
      });
    });

    describe("on closing the notifications", () => {
      beforeEach(() => {
        wrapper = mount(
          <Notifications>
            <Notification unread id={1} />
            <Notification unread={false} id={2} />
          </Notifications>
        );
      });
      it("resets unseen count of notifications", () => {
        wrapper.instance().onClick();
        expect(wrapper.find(NotificationsAdapter)).toHaveProp("unseenCount", 1);
        expect(wrapper.find(NotificationsAdapter)).toHaveProp(
          "showNotificationsCount",
          true
        );

        wrapper.instance().onClickOutside();
        expect(wrapper.find(NotificationsAdapter)).toHaveProp("unseenCount", 0);
        expect(wrapper.find(NotificationsAdapter)).toHaveProp(
          "showNotificationsCount",
          false
        );
      });
    });
  });

  describe("with no children", () => {
    describe("onClickOutside", () => {
      beforeEach(() => {
        wrapper = mount(<Notifications />);
      });

      it("does not throw an error", () => {
        expect(wrapper.instance().onClickOutside).not.toThrow();
      });
    });
  });
});
