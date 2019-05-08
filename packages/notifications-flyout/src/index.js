import Image from "./presenters/ImagePresenter";
import NotificationsFlyout from "./NotificationsFlyout";
import Notification from "./Notification";

NotificationsFlyout.Image = Image;
NotificationsFlyout.Notification = Notification;

export { NotificationsFlyout as default, Image, Notification };
export { types, AVAILABLE_TYPES } from "./types";
export { anchorPoints, AVAILABLE_ANCHOR_POINTS } from "@hig/flyout";
