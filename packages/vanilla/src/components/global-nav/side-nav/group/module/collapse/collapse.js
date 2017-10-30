import './collapse.scss';

const Template = require('./collapse.html');
const Interface = require('interface.json');
const Core = require('_core.js');
const Icon = require("../../../../../../basics/icon/icon.js");


/**
 * Creates an Collapse
 *
 * @class
 */

class Collapse extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  _componentDidMount(){
    this._setIcon()
  }

  minimize() {
    this.el.classList.add('hig__global-nav__side-nav__section__group__module__collapse--collapsed');
  }

  maximize() {
    this.el.classList.remove('hig__global-nav__side-nav__section__group__module__collapse--collapsed');
  }

  onClick(fn) {
    return this._attachListener('click', this.el, this.el, fn);
  }

  show() {
    this.el.classList.remove('hig__global-nav__side-nav__section__group__module__collapse--hide');
  }

  hide() {
    this.el.classList.add('hig__global-nav__side-nav__section__group__module__collapse--hide');
  }

  _setIcon(){
    this._findOrCreateIconComponent(this.el).setNameOrSVG('caret');
  }

  _findOrCreateIconComponent(mountElOrSelector, name = "icon") {
    if (this[name]) {
      return this[name];
    } else {
      this[name] = new Icon({});
      this[name].mount(mountElOrSelector);
      return this[name];
    }
  }
}

Collapse._interface = Interface.components.GlobalNav.partials.SideNav.partials.Group.partials.Module.partials.Collapse;
Collapse._defaults = {};
Collapse._partials = {};

module.exports = Collapse;
