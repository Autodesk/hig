import Interface from 'interface.json';
import Core from '_core.js';
import Icon from 'basics/icon/icon';
import './submodule.scss';
import Template from './submodule.html';

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

  _componentDidMount() {
    this.themedElements = [this.el];
  }

  onClick(fn) {
    return this._attachListener('click', this.el, this.el, fn);
  }

  onHover(fn) {
    return this._attachListener('hover', this.el, this.el, fn);
  }

  setTitle(title) {
    this._findDOMEl('.hig__global-nav__side-nav__section__group__module__submodule__title', this.el).textContent = title;
  }

  setLink(link) {
    this.el.setAttribute('href', link);
  }

  setTarget(target) {
    this.el.setAttribute('target', target);
    this._setExternalLinkIcon();
  }

  show() {
    this.el.classList.remove(
      'hig__global-nav__side-nav__section__group__module__submodule--hide'
    );
  }

  hide() {
    this.el.classList.add(
      'hig__global-nav__side-nav__section__group__module__submodule--hide'
    );
  }

  activate() {
    this.el.classList.add(
      'hig__global-nav__side-nav__section__group__module__submodule--active'
    );
  }

  deactivate() {
    this.el.classList.remove(
      'hig__global-nav__side-nav__section__group__module__submodule--active'
    );
  }

  _setExternalLinkIcon() {
    if (this.el.getAttribute('target') === '_blank') {
      const mountEl = this._findDOMEl(
        '.hig__global-nav__side-nav__section__group__module__submodule__external-link-icon',
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

Submodule._interface =
  Interface.components.GlobalNav.partials.SideNav.partials.Group.partials.Module.partials.Submodule;
Submodule._defaults = {
  title: ''
};
Submodule._partials = {};

export default Submodule;
