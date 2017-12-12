import Interface from 'interface.json';
import Core from '_core.js';
import './notification.scss';
import Timestamp from "basics/timestamp/timestamp";
import Template from './notification.html';

/**
 * Creates a notification
 *
 * @class
 * 
 * 
 */

class Notification extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
    this.intialOptions = options;
  }

  setContent(notification) {
    this._findDOMEl('.hig__notification__content').appendChild(notification);
  }

  setCreatedAt(timestampString) {
    const timestamp = new Timestamp({});
    timestamp.setTimestamp(timestampString);
    this.mountPartialToComment('TIMESTAMP', timestamp);
  }

  markUnread() {
    this.el.classList.add('hig__notification__unread');
  }

  markRead() {
    this.el.classList.remove('hig__notification__unread');
  }
}

Notification._interface =
  Interface.components.GlobalNav.partials.TopNav.partials.Notifications.partials.Notification;
Notification._defaults = {};
Notification._partials = {};

export default Notification;
