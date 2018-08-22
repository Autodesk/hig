import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { createNotificationsFlyoutInfoOptions } from "./infoOptions";
import notificationsFlyoutDefault from "./notificationsFlyoutDefault";
import notificationsFlyoutInteractive from "./notificationsFlyoutInteractive";

const infoOptions = createNotificationsFlyoutInfoOptions();

storiesOf("Notifications|Flyout", module)
  .add("default", withInfo(infoOptions)(notificationsFlyoutDefault()))
  .add("interactive", withInfo(infoOptions)(notificationsFlyoutInteractive()));
