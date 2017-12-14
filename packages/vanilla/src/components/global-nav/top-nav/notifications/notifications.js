import Interface from 'interface.json';
import Core from '_core.js';
import Shortcut from 'components/global-nav/top-nav/shortcut/shortcut';
import Flyout from 'basics/flyout/flyout';
import './notifications.scss';
import Template from './notifications.html';
import Notification from './notification/notification';

/**
 * Creates notifications
 *
 * @class
 * 
 * 
 */

class Notifications extends Core {
  constructor(options) {
    super(options);

    this.flyout = new Flyout();
    this._render(Template, options);
    this.initialOptions = options;
  }

  _componentDidMount() {
    this.mountPartialToComment('FLYOUT', this.flyout, this.el);
    this.flyout.setAnchorPoint('top-left');
    this.shortcut = new Shortcut({
      icon: 'notification',
      title: this.initialOptions.title
    });

    // this.shortcut.mount(this.el);
    this.flyout.addTarget(this.shortcut);
  }

  setUnreadCount(unreadCount) {
    this._findDOMEl(
      '.hig__notifications__unread-messages-count',
      this.el
    ).textContent = unreadCount;
  }

  open() {
    this.flyout.open();
  }

  close() {
    this.flyout.close();
  }

  addNotification(notification) {
    if (notification instanceof Notification) {
      this.flyout.addSlot(notification);
    }
  }

  onClickOutside(fn) {
    return this.flyout.onClickOutside(fn);
  }

  onClick(fn) {
    return this.shortcut.onClick(fn);
  }
}

Notifications._interface =
  Interface.components.GlobalNav.partials.TopNav.partials.Notifications;
Notifications._defaults = {};
Notifications._partials = { Notification };

export default Notifications;
