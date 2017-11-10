import './shortcut.scss';

const Template = require('./shortcut.html');
const Core = require('_core.js');
const Icon = require('../../../../basics/icon/icon.js');

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
    this.el.setAttribute('href', link);
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

Shortcut._defaults = {
  icon: '',
  title: '',
  link: '#'
};

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  Shortcut._interface = Interface.components.GlobalNav.partials.TopNav.partials.Shortcut;
}

module.exports = Shortcut;
