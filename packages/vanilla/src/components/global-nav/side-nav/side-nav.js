import Interface from 'interface.json';
import Core from '_core.js';
import SideNavFull from './side-nav-full/side-nav-full';
import Template from './side-nav.html';
import './side-nav.scss';

/**
 * Creates a SideNav
 *
 * @class
 */

class SideNav extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options);
  }

  _componentDidMount() {
    this.themedElements = [this.el];
  }

  addContent(instance) {
    if (instance instanceof SideNavFull) {
      instance.mount(this.el);
    }
  }
}

SideNav._interface = Interface.components.GlobalNav.partials.SideNav;
SideNav._defaults = {};
SideNav._partials = {
  SideNavFull
};

export default SideNav;
