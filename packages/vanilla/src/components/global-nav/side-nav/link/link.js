import Interface from 'interface.json';
import Core from '_core.js';
import Icon from 'basics/icon/icon';
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

  _componentDidMount() {
    this.themedElements = [this.el];
    this._setExternalLinkIcon();
  }

  onClick(fn) {
    return this._attachListener('click', this.el, this.el, fn);
  }

  onHover(fn) {
    return this._attachListener('hover', this.el, this.el, fn);
  }

  setTitle(title) {
    const titleEl = this._findDOMEl(
      '.hig__global-nav__sidenav__links__link__title',
      this.el
    );
    titleEl.textContent = title;
  }

  setLink(link) {
    this.el.setAttribute('href', link);
  }

  setTarget(target) {
    this.el.setAttribute('target', target);
  }

  _setExternalLinkIcon() {
    if (this.el.getAttribute('target') === '_blank') {
      const mountEl = this._findDOMEl(
        '.hig__global-nav__sidenav__links__link__external-link-icon',
        this.el
      );
      const iconComponent = this._findOrCreateIconComponent(mountEl);
      iconComponent.setSize('16');
      iconComponent.setNameOrSVG('external-link');
    }
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

Link._interface =
  Interface.components.GlobalNav.partials.SideNav.partials.SideNavFull.partials.Link;
Link._defaults = {
  title: 'link',
  link: '#'
};

export default Link;
