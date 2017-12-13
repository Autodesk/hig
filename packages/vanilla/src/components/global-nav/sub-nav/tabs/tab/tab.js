import Interface from 'interface.json';
import Core from '_core.js';
import './tab.scss';
import Template from './tab.html';

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
    this.el.textContent = label;
    this.el.setAttribute('title', label);
  }

  activate() {
    this.el.classList.add('hig__global-nav__sub-nav__tabs__tab--active');
  }

  deactivate() {
    this.el.classList.remove('hig__global-nav__sub-nav__tabs__tab--active');
  }
}

Tab._interface = Interface.components.GlobalNav.partials.SubNav.partials.Tabs.partials.Tab;
Tab._defaults = {
  label: 'Tab',
};
Tab._partials = {};

export default Tab;
