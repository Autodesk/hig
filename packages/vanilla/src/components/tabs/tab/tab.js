import './tab.scss';

const Template = require('./tab.html');
const Core = require('_core.js');

/**
 * Creates a Tab
 *
 * @class
 */

class Tab extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  onClick(fn) {
    return this._attachListener('click', this.el, this.el, fn);
  }

  setLabel(label) {
    this.el.setAttribute('title', label);
    this._findDOMEl('.hig__tabs__label', this.el).textContent = label;
    this._findDOMEl('.hig__tabs__active-label', this.el).textContent = label;
  }

  activate() {
    this.el.classList.add('hig__tabs__tab--active');
  }

  deactivate() {
    this.el.classList.remove('hig__tabs__tab--active');
  }
}

Tab._defaults = {
  label: 'Tab'
};
Tab._partials = {};

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  Tab._interface = Interface.components.Tabs.partials.Tab;
}

module.exports = Tab;
