import Interface from 'interface.json';
import Core from '_core.js';
import Timestamp from 'basics/timestamp/timestamp';
import RichText from 'basics/rich-text/rich-text';
import IconButton from 'components/icon-button/icon-button';
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
    this.content = this._findDOMEl('.hig__notification__content', this.el);
    this.content.classList.add(RichText.className, RichText.smallClassName);
  }

  setContent(notification) {
    this.content.appendChild(notification);
  }

  setCreatedAt(timestampString) {
    this.timestamp.setTimestamp(timestampString);
  }

  setFeatured() {
    this.el.classList.add('hig__notification--featured');

    /*
      on hover, dismiss icon
    */
  }

  removeFeatured() {
    this.el.classList.remove('hig__notification--featured');
  }

  onClick(fn) {
    return this._attachListener('click', this.el, this.el, fn);
  }

  onDismissed(fn) {
    // return this._attachListener('click', , this.el, fn);
  }

  markUnread() {
    this.el.classList.add('hig__notification--unread');
  }

  markRead() {
    this.el.classList.remove('hig__notification--unread');
  }
}

Notification._interface =
  Interface.components.GlobalNav.partials.TopNav.partials.Notifications.partials.Notification;
Notification._defaults = {};
Notification._partials = {};

export default Notification;
