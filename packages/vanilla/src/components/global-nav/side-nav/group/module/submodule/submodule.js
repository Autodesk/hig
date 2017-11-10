import './submodule.scss';

const Template = require('./submodule.html');
const Core = require('_core.js');

/**
 * Creates an Submodule
 *
 * @class
 */

class Submodule extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  onClick(fn) {
    return this._attachListener('click', this.el, this.el, fn);
  }

  onHover(fn) {
    return this._attachListener('hover', this.el, this.el, fn);
  }

  setTitle(title) {
    this.el.textContent = title;
  }

  setLink(link) {
    this.el.setAttribute('href', link);
  }

  show() {
    this.el.classList.remove('hig__global-nav__side-nav__section__group__module__submodule--hide');
  }

  hide() {
    this.el.classList.add('hig__global-nav__side-nav__section__group__module__submodule--hide');
  }

  activate() {
    this.el.classList.add('hig__global-nav__side-nav__section__group__module__submodule--active');
  }

  deactivate() {
    this.el.classList.remove('hig__global-nav__side-nav__section__group__module__submodule--active');
  }
}

Submodule._defaults = {
  title: '',
  link: ''
};
Submodule._partials = {};

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  Submodule._interface = Interface.components.GlobalNav.partials.SideNav.partials.Group.partials.Module.partials.Submodule;
}

module.exports = Submodule;
