import Interface from 'interface.json';
import Core from '_core.js';
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

  setContent(content) {
    this._findDOMEL('.hig__notification__content', this.el).innerHTML = content;
  }

  setTimestamp(timestamp) {
    this.mountPartialToComment('TIMESTAMP', timestamp);
  }

  unread() {
    this.el.classList.add('.hig__notification__unread');
  }

  read() {
    this.el.classList.remove('.hig__notification__unread');
  }
}

Notification._interface =
  Interface.components.GlobalNav.partials.TopNav.partials.Notifications.partials.Notification;
Notification._defaults = {};
Notification._partials = {};

export default Notification;
