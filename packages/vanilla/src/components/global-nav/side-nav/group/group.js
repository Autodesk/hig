import './group.scss';

const Template = require('./group.html');
const Interface = require('interface.json');
const Core = require('_core.js');

const Module = require('./module/module.js');

/**
 * Creates an Group in a section of the sidenav
 *
 * @class
 */

class Group extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  addModule(ModuleInstance, referenceModule) {
    if (ModuleInstance instanceof Module) {
      this.mountPartialToComment('MODULE', ModuleInstance, referenceModule);
    }
  }

  show() {
    this.el.classList.remove('hig__global-nav__side-nav__section__group--hide');
  }

  hide() {
    this.el.classList.add('hig__global-nav__side-nav__section__group--hide');
  }
}

Group._interface = Interface.components.GlobalNav.partials.SideNav.partials.Group;
Group._defaults = {};
Group._partials = {
  Module
};

module.exports = Group;
