import Interface from 'interface.json';
import Core from '_core.js';
import Icon from 'basics/icon/icon';
import Template from './module.html';
import Submodule from './submodule/submodule';
import Collapse from './collapse/collapse';
import './module.scss';

/**
 * Creates an Module
 *
 * @class
 */

class Module extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
    this.initialOptions = options;
  }

  _componentDidMount() {
    this.themedElements = [
      this._findDOMEl(
        '.hig__global-nav__side-nav__section__group__module__link',
        this.el
      )
    ];
    if (this.initialOptions.icon) {
      this.setIcon(this.initialOptions.icon);
    }
  }

  onClick(fn) {
    return this._attachListener(
      'click',
      '.hig__global-nav__side-nav__section__group__module__link',
      this.el,
      fn
    );
  }

  onHover(fn) {
    return this._attachListener('hover', this.el, this.el, fn);
  }

  setIcon(icon) {
    const mountEl = this._findDOMEl(
      '.hig__global-nav__side-nav__section__group__module__link__icon',
      this.el
    );
    this._findOrCreateIconComponent(mountEl).setNameOrSVG(icon);

    const submodules = this._findDOMEl(
      '.hig__global-nav__side-nav__section__group__module__submodules',
      this.el
    );
    submodules.classList.remove(
      'hig__global-nav__side-nav__section__group__module__submodules--no-icon'
    );
  }

  setTitle(title) {
    this._findDOMEl(
      '.hig__global-nav__side-nav__section__group__module__link__title',
      this.el
    ).textContent = title;
  }

  setLink(link) {
    const anchorEl = this._findDOMEl('a', this.el);
    link === undefined || link === ''
      ? anchorEl.removeAttribte('href')
      : anchorEl.setAttribute('href', link);
  }

  setTarget(target) {
    this._findDOMEl('a', this.el).setAttribute('target', target);
    this._setExternalLinkIcon();
  }

  addSubmodule(SubmoduleInstance, referenceSubmodule) {
    if (SubmoduleInstance instanceof Submodule) {
      this.mountPartialToComment(
        'SUBMODULE',
        SubmoduleInstance,
        referenceSubmodule
      );
    }
  }

  addCollapse(CollapseInstance, referenceInstance) {
    if (CollapseInstance instanceof Collapse) {
      this.mountPartialToComment(
        'MODULE-COLLAPSE',
        CollapseInstance,
        referenceInstance
      );
    }
  }

  show() {
    this.el.classList.remove(
      'hig__global-nav__side-nav__section__group__module--hide'
    );
  }

  hide() {
    this.el.classList.add(
      'hig__global-nav__side-nav__section__group__module--hide'
    );
  }

  activate() {
    this._findDOMEl(
      '.hig__global-nav__side-nav__section__group__module__link',
      this.el
    ).classList.add(
      'hig__global-nav__side-nav__section__group__module__link--active'
    );
  }

  deactivate() {
    this._findDOMEl(
      '.hig__global-nav__side-nav__section__group__module__link',
      this.el
    ).classList.remove(
      'hig__global-nav__side-nav__section__group__module__link--active'
    );
  }

  _setExternalLinkIcon() {
    if (this._findDOMEl('a', this.el).getAttribute('target') === '_blank') {
      const mountEl = this._findDOMEl(
        '.hig__global-nav__side-nav__section__group__module__link__external-link-icon',
        this.el
      );
      this._findOrCreateIconComponent(
        mountEl,
        'external-link-icon'
      ).setNameOrSVG('external-link');
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

Module._interface =
  Interface.components.GlobalNav.partials.SideNav.partials.SideNavFull.partials.Group.partials.Module;
Module._defaults = {
  icon: '',
  title: 'title'
};
Module._partials = {
  Submodule,
  Collapse
};

export default Module;
