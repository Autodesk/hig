import './module.scss';

const Template = require('./module.html');
const Core = require('_core.js');

const Submodule = require('./submodule/submodule.js');
const Collapse = require('./collapse/collapse.js');
const Icon = require('../../../../../basics/icon/icon.js');

/**
 * Creates an Module
 *
 * @class
 */

class Module extends Core {
  constructor(options) {
    super(options);
    if (!options.icon) {
      options['no-icon-class'] = 'hig__global-nav__side-nav__section__group__module__submodules--no-icon';
    }
    this._render(Template, options);
    this.initialOptions = options;
  }

  _componentDidMount() {
    if (this.initialOptions.icon) {
      this.setIcon(this.initialOptions.icon);
    }
  }

  onClick(fn) {
    return this._attachListener('click', '.hig__global-nav__side-nav__section__group__module__link', this.el, fn);
  }

  onHover(fn) {
    return this._attachListener('hover', this.el, this.el, fn);
  }

  setIcon(icon) {
    const mountEl = this._findDOMEl('.hig__global-nav__side-nav__section__group__module__link__icon', this.el);
    this._findOrCreateIconComponent(mountEl).setNameOrSVG(icon);
  }

  setTitle(title) {
    this._findDOMEl('.hig__global-nav__side-nav__section__group__module__link__title', this.el).textContent = title;
  }

  setLink(link) {
    this._findDOMEl('a', this.el).setAttribute('href', link);
  }

  addSubmodule(SubmoduleInstance, referenceSubmodule) {
    if (SubmoduleInstance instanceof Submodule) {
      this.mountPartialToComment('SUBMODULE', SubmoduleInstance, referenceSubmodule);
    }
  }

  addCollapse(CollapseInstance, referenceInstance) {
    if (CollapseInstance instanceof Collapse) {
      this.mountPartialToComment('MODULE-COLLAPSE', CollapseInstance, referenceInstance);
    }
  }

  show() {
    this.el.classList.remove('hig__global-nav__side-nav__section__group__module--hide');
  }

  hide() {
    this.el.classList.add('hig__global-nav__side-nav__section__group__module--hide');
  }

  activate() {
    this._findDOMEl('.hig__global-nav__side-nav__section__group__module__link', this.el).classList.add('hig__global-nav__side-nav__section__group__module__link--active');
  }

  deactivate() {
    this._findDOMEl('.hig__global-nav__side-nav__section__group__module__link', this.el).classList.remove('hig__global-nav__side-nav__section__group__module__link--active');
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

Module._defaults = {
  icon: '',
  title: 'title',
  link: '#'
};
Module._partials = {
  Submodule,
  Collapse
};

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  Module._interface = Interface.components.GlobalNav.partials.SideNav.partials.Group.partials.Module;
}

module.exports = Module;
