import "@hig/styles/build/fonts.css";

import NotificationsFlyout from "./NotificationsFlyout";
import Notification from "./Notification";

NotificationsFlyout.Notification = Notification;

export { NotificationsFlyout as default, Notification };
export { types, AVAILABLE_TYPES } from "./types";
export { anchorPoints, AVAILABLE_ANCHOR_POINTS } from "@hig/flyout";
