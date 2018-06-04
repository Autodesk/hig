import React from "react";
import { storiesOf } from "@storybook/react";

import NotificationsToast from "../index";

storiesOf("NotificationsToast", module).add("default", () => (
  <NotificationsToast status="primary" showStatusIcon>
    <strong>Object Name</strong> has new info about it.
  </NotificationsToast>
));
