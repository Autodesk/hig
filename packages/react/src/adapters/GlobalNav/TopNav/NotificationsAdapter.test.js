import { mount } from "enzyme";
import React from "react";
import { Notifications as VanillaNotifications } from "hig-vanilla";
import NotificationAdapter from "./NotificationAdapter";
import NotificationsAdapter from "./NotificationsAdapter";

describe("NotificationsAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <NotificationsAdapter
          higInstance={mockInstance}
          onClick={() => {}}
          onClickOutside={() => {}}
          unreadCount={2}
          open
        >
          <NotificationAdapter />
        </NotificationsAdapter>
      );
      mockInstance.close();
    }).toImplementHIGInterfaceOf(VanillaNotifications);
  });
});
