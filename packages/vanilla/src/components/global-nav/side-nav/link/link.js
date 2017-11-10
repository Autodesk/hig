import './link.scss';

const Template = require('./link.html');
const Core = require('../../../../helpers/js/_core.js');

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

Link._defaults = {
  title: 'link',
  link: '#'
};

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  Link._interface = Interface.components.GlobalNav.partials.SideNav.partials.Link;
}

module.exports = Link;
