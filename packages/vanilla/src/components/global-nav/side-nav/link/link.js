import Interface from 'interface.json';
import Core from '_core.js';
import './link.scss';
import Template from './link.html';

/**
 * Creates an Link
 *
 * @class
 */

class Link extends Core {
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
}

Link._interface = Interface.components.GlobalNav.partials.SideNav.partials.Link;
Link._defaults = {
  title: 'link',
  link: '#'
};

export default Link;
