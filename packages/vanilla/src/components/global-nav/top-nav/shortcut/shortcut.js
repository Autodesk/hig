import Interface from 'interface.json';
import Core from '_core.js';
import Icon from 'basics/icon/icon';
import Template from './shortcut.html';
import './shortcut.scss';

/**
 * Creates an Shortcut
 *
 * @class
 */

class Shortcut extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
    this.initialOptions = options;
  }

  _componentDidMount() {
    if (this.initialOptions.icon) {
      this.setIcon(this.initialOptions.icon);
    }
  }

  onClick(fn) {
    return this._attachListener('click', this.el, this.el, fn);
  }

  setIcon(icon) {
    this._findOrCreateIconComponent(this.el).setNameOrSVG(icon);
  }

  setTitle(title) {
    this.el.setAttribute('title', title);
  }

  setLink(link) {
    link === undefined || link === ''
      ? this.el.removeAttribte('href')
      : this.el.setAttribute('href', link);
  }

  _findOrCreateIconComponent(mountElOrSelector, name = 'icon') {
    if (this[name]) {
      return this[name];
    }
    this[name] = new Icon({});
    this[name].mount(mountElOrSelector);
    return this[name];
  }
}

Shortcut._interface =
  Interface.components.GlobalNav.partials.TopNav.partials.Shortcut;
Shortcut._defaults = {
  icon: '',
  title: ''
};

export default Shortcut;
