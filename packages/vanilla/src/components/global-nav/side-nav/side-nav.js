import Interface from 'interface.json';
import Core from '_core.js';
import SideNavSkeleton
  from 'components/global-nav/side-nav/side-nav-skeleton/side-nav-skeleton';
import SideNavCompact from './side-nav-compact/side-nav-compact';
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
    if (instance instanceof SideNavFull || instance instanceof SideNavCompact || instance instanceof SideNavSkeleton) {
      instance.mount(this.el);
    }
  }
}

SideNav._interface = Interface.components.GlobalNav.partials.SideNav;
SideNav._defaults = {};
SideNav._partials = {
  SideNavFull,
  SideNavCompact,
  SideNavSkeleton
};

export default SideNav;
