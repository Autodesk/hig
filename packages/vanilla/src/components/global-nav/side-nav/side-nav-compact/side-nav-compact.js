import Interface from 'interface.json';
import Core from '_core.js';
import IconButton from 'components/icon-button/icon-button';
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
    this.themedElements = [
      this.el,
      this._findDOMEl('.hig__global-nav__sidenav-compact__collapse', this.el)
    ];

    this._setExpandButton();
  }

  addGroup(groupInstance, referenceInstance) {
    if (groupInstance instanceof Group) {
      this.mountPartialToComment('GROUP', groupInstance, referenceInstance);
    }
  }

  showVariantToggleButton() {
    this._findDOMEl(
      '.hig__global-nav__sidenav-compact__collapse',
      this.el
    ).classList.add(
      'hig__global-nav__sidenav-compact__collapse--active'
    );
  }

  hideVariantToggleButton() {
    this._findDOMEl(
      '.hig__global-nav__sidenav-compact__collapse',
      this.el
    ).classList.remove(
      'hig__global-nav__sidenav-compact__collapse--active'
    );
  }

  onVariantToggleClick(fn) {
    return this._attachListener(
      'click',
      this.iconButton.el,
      this.el,
      fn
    );
  }

  _setExpandButton() {
    this.iconButton = new IconButton({
      title: 'Expand',
      icon: 'forward',
      type: 'flat'
    });
    this.mountPartialToComment('COLLAPSE', this.iconButton, this.el);
  }
}

SideNavCompact._interface = Interface.components.GlobalNav.partials.SideNav.partials.SideNavCompact;
SideNavCompact._defaults = {};
SideNavCompact._partials = {
  Group
};
