import { Children } from "react";
import Notification from "../Notification";
import NotificationsFacade from "../facades/NotificationsFacade";

/** @typedef {import("./facades/NotificationsFacade").Element} NotificationsElement */
/** @typedef {null|undefined|NotificationElements|NotificationsElement} Input */

/**
 * @typedef {Object} ParsedNotification
 * @property {string} id
 * @property {string} key
 * @property {NotificationContent} [content]
 * @property {boolean} [featured]
 * @property {function(): void} [onDismiss]
 * @property {boolean} [showDismissButton]
 * @property {import("react").ReactElement} [timestamp]
 * @property {string} [type]
 * @property {boolean} unread
 */

/**
 * Converts the given notifications input into an array
 * @param {Input} input
 * @returns {Object[]}
 */
function normalizeInput(input) {
  if (input == null) {
    return [];
  }

  if (Array.isArray(input)) {
    return input;
  }

  const element = Children.only(input);

  if (element.type === Notification) {
    return [element];
  }

  if (element.type === NotificationsFacade) {
    return Children.toArray(element.props.children);
  }

  throw new Error(
    /* eslint-disable-next-line max-len */
    "Notifications must be provided as either an array, children, or as children of a <Notifications /> component."
  );
}

/**
 * @param {Object} value
 * @param {number} index
 * @returns {ParsedNotification}
 */
function parseNotification(value, index) {
  const { key = `notification-${index}`, ...otherValues } = value;
  const {
    children,
    content = children,
    id = index.toString(),
    unread = true,
    ...props
  } = otherValues.props || otherValues;

  return {
    id,
    key,
    content,
    unread,
    ...props
  };
}

/**
 * @param {Input} input
 * @returns {ParsedNotification[]}
 */
export default function parseNotifications(input) {
  return normalizeInput(input).map(parseNotification);
}
