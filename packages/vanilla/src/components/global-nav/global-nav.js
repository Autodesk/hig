import './global-nav.scss';

const Template = require('./global-nav.html');
const Core = require('_core.js');

const SideNav = require('./side-nav/side-nav.js');
const TopNav = require('./top-nav/top-nav.js');
const SubNav = require('./sub-nav/sub-nav.js');

/**
 * Creates an GlobalNav
 *
 * @class
 */

class GlobalNav extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  addSideNav(sideNavInstance) {
    if (sideNavInstance instanceof SideNav) {
      this.mountPartialToComment('SIDENAV', sideNavInstance);
    }
  }

  addTopNav(topNavInstance) {
    if (topNavInstance instanceof TopNav) {
      this.mountPartialToComment('TOPNAV', topNavInstance);
    }
  }

  addSubNav(subNavInstance) {
    if (subNavInstance instanceof SubNav) {
      this.mountPartialToComment('SUBNAV', subNavInstance);
    }
  }

  addSlot(slotElement) {
    this.mountPartialToComment('SLOT', slotElement);
  }

  showSideNav() {
    this.el.classList.add('hig__global-nav--open');
  }

  hideSideNav() {
    this.el.classList.remove('hig__global-nav--open');
  }

  onHoverOutside(fn) {
    return this._attachListener('hover', '.hig__global-nav__container', this.el, fn);
  }
}

GlobalNav._defaults = {};
GlobalNav._partials = {
  SideNav,
  TopNav,
  SubNav
};

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  GlobalNav._interface = Interface.components.GlobalNav;
}

module.exports = GlobalNav;
