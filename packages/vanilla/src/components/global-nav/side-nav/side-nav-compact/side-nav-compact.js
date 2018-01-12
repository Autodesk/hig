import Interface from 'interface.json';
import Core from '_core.js';
import Group from 'components/global-nav/side-nav/group/group';
import Template from './side-nav-compact.html';
import './side-nav-compact.scss';

/**
 * Creates a compact SideNav
 *
 * @class
 */

export default class SideNavCompact extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options);
  }

  _componentDidMount() {
    this.themedElements = [this.el];
  }

  addGroup(groupInstance, referenceInstance) {
    if (groupInstance instanceof Group) {
      this.mountPartialToComment('GROUP', groupInstance, referenceInstance);
    }
  }
}

SideNavCompact._interface = Interface.components.GlobalNav.partials.SideNav.partials.SideNavCompact;
SideNavCompact._defaults = {};
SideNavCompact._partials = {
  Group
};
