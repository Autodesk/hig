import Interface from 'interface.json';
import Core from '_core.js';
import './notifications.scss';
import Template from './notifications.html';
import Flyout from 'basics/flyout/flyout';
import Notification from './notification/notification';
import Shortcut from 'components/global-nav/top-nav/shortcut/shortcut.js';
import {
  instanceOf
} from '../../../../../../../../../../../Library/Caches/typescript/2.6/node_modules/@types/prop-types';

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
    this.shortcut = new Shortcut({
      icon: 'favorite',
      title: this.initialOptions.title
    });

    // this.shortcut.mount(this.el);
    this.flyout.addTarget(this.shortcut);
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
