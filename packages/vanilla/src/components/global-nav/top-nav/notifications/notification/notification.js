import Interface from 'interface.json';
import Core from '_core.js';
import CSSTransition from 'helpers/js/css-transition';
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
    this.iconButton = new IconButton({
      title: 'Dismiss',
      icon: 'close-notification',
      type: 'flat'
    });
    this.mountPartialToComment('BUTTON', this.iconButton, this.el);
    this.content = this._findDOMEl('.hig__notification__content', this.el);
    this.content.classList.add(RichText.className, RichText.smallClassName);
    this.featuredNotificationAnimation = new CSSTransition({
      el: this.el,
      class: 'hig__notification',
      enteringDuration: 300,
      exitingDuration: 300
    });
    this.featuredNotificationAnimation.enter();
  }

  setContent(notification) {
    this.content.appendChild(notification);
  }

  setCreatedAt(timestampString) {
    this.timestamp.setTimestamp(timestampString);
  }

  setFeatured() {
    this.el.classList.add('hig__notification--featured');
  }

  removeFeatured() {
    this.el.classList.remove('hig__notification--featured');
  }

  onClick(fn) {
    return this._attachListener('click', this.el, this.el, fn);
  }

  markUnread() {
    this.el.classList.add('hig__notification--unread');
  }

  markRead() {
    this.el.classList.remove('hig__notification--unread');
  }

  onFeaturedClick(fn) {
    this.iconButton.onClick(() => {
      this.featuredNotificationAnimation.exit();
      fn();
    });
  }
}

Notification._interface =
  Interface.components.GlobalNav.partials.TopNav.partials.Notifications.partials.Notification;
Notification._defaults = {};
Notification._partials = {};

export default Notification;
