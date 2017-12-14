import Interface from 'interface.json';
import Core from '_core.js';
import Timestamp from 'basics/timestamp/timestamp';
import RichText from 'basics/rich-text/rich-text';
import './notification.scss';
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

  _componentDidMount() {
    this.timestamp = new Timestamp({});
    this.mountPartialToComment('TIMESTAMP', this.timestamp, this.el);
  }
  setContent(notification) {
    this.el.classList.add(RichText.className);
    this._findDOMEl('.hig__notification__content', this.el).appendChild(notification);
  }

  setCreatedAt(timestampString) {
    this.timestamp.setTimestamp(timestampString);
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
