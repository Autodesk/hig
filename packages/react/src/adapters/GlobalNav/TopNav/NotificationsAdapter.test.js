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
          unreadCount={2}
          open
          loading
        >
          <NotificationAdapter />
        </NotificationsAdapter>
      );
      mockInstance.close();
      mockInstance.setNotLoading();
    }).toImplementHIGInterfaceOf(VanillaNotifications);
  });
});
