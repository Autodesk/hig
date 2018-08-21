import "@hig/styles/build/fonts.css";

import NotificationsFlyout from "./NotificationsFlyout";
import Notification from "./Notification";
import Notifications from "./facades/NotificationsFacade";

NotificationsFlyout.Notification = Notification;
NotificationsFlyout.Notifications = Notifications;

export { NotificationsFlyout as default, Notification, Notifications };
export { types, AVAILABLE_TYPES } from "./types";
export { anchorPoints, AVAILABLE_ANCHOR_POINTS } from "@hig/flyout";
