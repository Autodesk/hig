import React from "react";
import RichText from "@hig/rich-text";

import Notification from "../Notification";
import NotificationsFlyout from "../NotificationsFlyout";
import NotificationsFlyoutLayout from "./NotificationsFlyoutLayout";
import readme from "../../README.md";

export function createNotificationInfoOptions() {
  return {
    propTables: [Notification],
    source: true,
    text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />
  };
}

export function createNotificationsFlyoutInfoOptions() {
  return {
    propTables: [NotificationsFlyout],
    propTablesExclude: [NotificationsFlyoutLayout],
    source: true,
    text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />
  };
}
