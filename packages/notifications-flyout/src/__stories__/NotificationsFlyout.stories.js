import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import { createNotificationsFlyoutInfoOptions } from "./infoOptions";
import notificationsFlyoutDefault from "./notificationsFlyoutDefault";
import notificationsFlyoutInteractive from "./notificationsFlyoutInteractive";

const infoOptions = createNotificationsFlyoutInfoOptions();

storiesOf("Notifications|Flyout", module)
  .add(
    "default",
    withInfo({
      ...infoOptions,
      propTablesExclude: [KnobbedThemeProvider],
    })(notificationsFlyoutDefault())
  )
  .add(
    "interactive",
    withInfo({
      ...infoOptions,
      propTablesExclude: [KnobbedThemeProvider],
    })(notificationsFlyoutInteractive())
  );
