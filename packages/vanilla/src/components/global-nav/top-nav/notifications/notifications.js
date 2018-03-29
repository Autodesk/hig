/* globals window */
import Interface from 'interface.json';
import Core from '_core.js';
import Shortcut from 'components/global-nav/top-nav/shortcut/shortcut';
import Flyout from 'basics/flyout/flyout';
import './notifications.scss';
import Template from './notifications.html';
import Notification from './notification/notification';
import List from './_list/_list';

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
    this.list = new List();
    this.flyout.addTarget(this.shortcut);
    this.flyout.addSlot(this.list);
    this.flyout.setAnchorPoint('top-left');
    window.addEventListener('resize', this._adjustFlyoutMaxHeight.bind(this));

    this.unreadCount = this._findDOMEl(
      '.hig__notifications__unread-messages-count',
      this.el
    );
  }

  setUnseenCount(unreadCount) {
    this._findDOMEl(
      '.hig__notifications__unread-messages-count',
      this.el
    ).textContent = unreadCount;
  }

  open() {
    this.flyout.open();
    this._adjustFlyoutMaxHeight();
  }

  close() {
    this.flyout.close();
  }

  addNotification(notification) {
    this.list.addItem(notification);
  }

  onClickOutside(fn) {
    return this.flyout.onClickOutside(fn);
  }

  onClick(fn) {
    return this.shortcut.onClick(fn);
  }

  onScroll(fn) {
    return this.list.onScroll(fn);
  }

  setLoading() {
    this.list.setLoading();
  }

  setNotLoading() {
    this.list.setNotLoading();
  }

  setTitle(title) {
    if (this.list) {
      this.list.setTitle(title);
    }
  }

  _adjustFlyoutMaxHeight() {
    const bufferFromBottom = 80;
    const { bottom } = this.list.titleElement.getBoundingClientRect();

    // Distance between the bottom of the notifications title and 80px from the bottom of the screen
    const calculatedMaxHeight = window.innerHeight - bufferFromBottom - bottom;

    this.flyout.flyoutContent.style.maxHeight = 'inherit'; // Override flyout's default max height
    this.list.setContentMaxHeight(calculatedMaxHeight);
  }

  hideNotificationsCount() {
    this.unreadCount.classList.add(
      'hig__notifications__unread-messages-count--hide'
    );
  }

  showNotificationsCount() {
    this.unreadCount.classList.remove(
      'hig__notifications__unread-messages-count--hide'
    );
  }
}

Notifications._interface =
  Interface.components.GlobalNav.partials.TopNav.partials.Notifications;
Notifications._defaults = {};
Notifications._partials = { Notification };

export default Notifications;
