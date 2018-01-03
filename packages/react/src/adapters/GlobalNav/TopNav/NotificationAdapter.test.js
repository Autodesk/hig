import { mount } from "enzyme";
import React from "react";
import { Notification as VanillaNotification } from "hig-vanilla";
import NotificationAdapter from "./NotificationAdapter";

describe("NotificationAdapter", () => {
  it("implements the hig interface", () => {
    const timestamp = new Date();
    expect(mockInstance => {
      mount(
        <NotificationAdapter
          higInstance={mockInstance}
          onLinkClick={() => {}}
          unreadCount={2}
          timestamp={timestamp}
          title="foo"
          unread
          featured
          onDismiss={() => {}}
        >
          <h1>This is our first notification</h1>
        </NotificationAdapter>
      );
      mockInstance.markRead();
      mockInstance.removeFeatured();
    }).toImplementHIGInterfaceOf(VanillaNotification);
  });
});
