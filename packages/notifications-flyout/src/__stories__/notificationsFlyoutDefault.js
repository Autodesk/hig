import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs/react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import { anchorPoints } from "@hig/flyout";
import { controlledBool, controlledNumber } from "@hig/storybook/utils";

import createSampleNotifications from "../__fixtures__/createSampleNotifications";
import NotificationsFlyout from "../NotificationsFlyout";
import NotificationsFlyoutLayout from "./NotificationsFlyoutLayout";

const groups = {
  animation: "Animation",
  basic: "Basic",
  i18n: "i18n"
};

const labels = {
  heading: "Heading",
  indicatorTitle: "Indicator title",
  loading: "Loading",
  notifications: "Notifications",
  onClickOutside: "Outside clicked",
  onScroll: "List scrolled",
  open: "Flyout open",
  unreadCount: "Unread count"
};

const defaults = {
  heading: "Notifications",
  indicatorTitle: "View notifications",
  loading: false,
  open: undefined,
  unreadCount: undefined
};

export default function notificationsFlyoutDefault() {
  return () => (
    <KnobbedThemeProvider>
      <NotificationsFlyoutLayout>
        <NotificationsFlyout
          anchorPoint={anchorPoints.TOP_CENTER}
          notifications={createSampleNotifications()}
          heading={text(labels.heading, defaults.heading, groups.i18n)}
          indicatorTitle={text(
            labels.indicatorTitle,
            defaults.indicatorTitle,
            groups.i18n
          )}
          loading={boolean(labels.loading, defaults.loading, groups.animation)}
          onClickOutside={action(labels.onClickOutside)}
          onScroll={action(labels.onScroll)}
          open={controlledBool(labels.open, defaults.open, groups.basic)}
          unreadCount={controlledNumber(
            labels.unreadCount,
            defaults.unreadCount,
            groups.basic
          )}
        />
      </NotificationsFlyoutLayout>
    </KnobbedThemeProvider>
  );
}
