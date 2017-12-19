import { mount } from "enzyme";
import React from "react";
import { Notifications as VanillaNotifications } from "hig-vanilla";
import NotificationAdapter from "./NotificationAdapter";
import NotificationsAdapter from "./NotificationsAdapter";

describe("NotificationsAdapter", () => {
  it("implements the hig interface", () => {
    window.requestAnimationFrame = jest.fn();
    window.cancelAnimationFrame = jest.fn();
    window.performance = {
      now: jest.fn()
    };

    expect(mockInstance => {
      mount(
        <NotificationsAdapter
          higInstance={mockInstance}
          onClick={() => {}}
          onClickOutside={() => {}}
          onScroll={() => {}}
          unreadCount={2}
          maxHeight={123}
          showNotificationsCount
          loading
          open
          title="notifications"
        >
          <NotificationAdapter />
        </NotificationsAdapter>
      );

      mockInstance.hideNotificationsCount();
      mockInstance.close();
      mockInstance.setNotLoading();
    }).toImplementHIGInterfaceOf(VanillaNotifications);
  });
});
