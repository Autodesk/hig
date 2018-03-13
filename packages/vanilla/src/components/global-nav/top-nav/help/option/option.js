import Core from '_core.js';
import Interface from 'interface.json';
import './option.scss';
import Template from './option.html';

/**
 * Creates a Option
 *
 * @class
 */
class Option extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  onClick(fn) {
    return this._attachListener('click', this.el, this.el, fn);
  }

  setLink(link) {
    !link || link === ''
      ? this.el.removeAttribute('href')
      : this.el.setAttribute('href', link);
  }

  setName(name) {
    this.el.setAttribute('title', name);
    this.el.textContent = name;
  }
}

Option._interface =
  Interface.components.GlobalNav.partials.TopNav.partials.Help.partials.Option;
Option._defaults = {
  name: '',
  link: null
};
Option._partials = {};

export default Option;
