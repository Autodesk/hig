import './top-nav.scss';

const Template = require('./top-nav.html');
const Interface = require('interface.json');
const Core = require('_core.js');

const Profile = require('./profile/profile.js');
const Shortcut = require('./shortcut/shortcut.js');
const Help = require('./help/help.js');
const ProjectAccountSwitcher = require('./project-account-switcher/project-account-switcher.js');
const Search = require('./search/search.js');

/**
 * Creates an TopNav
 *
 * @class
 */

class TopNav extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  onHamburgerClick(fn) {
    return this._attachListener('click', '.hig__global-nav__top-nav__hamburger', this.el, fn);
  }

  onLogoClick(fn) {
    return this._attachListener('click', '.hig__global-nav__top-nav__logo > a', this.el, fn);
  }

  setLogo(logo) {
    this._setLogoAttributeForTag('img', 'src', logo);
  }

  setLogoLink(link) {
    this._setLogoAttributeForTag('a', 'href', link);
  }

  addProfile(profileInstance) {
    if (profileInstance instanceof Profile) {
      this.mountPartialToComment('PROFILE', profileInstance);
    }
  }

  addProjectAccountSwitcher(instance) {
    if (instance instanceof ProjectAccountSwitcher) {
      this.mountPartialToComment('PROJECT_ACCOUNT_SWITCHER', instance);
    }
  }

  addSearch(searchInstance, referenceInstance) {
    if (searchInstance instanceof Search) {
      this.mountPartialToComment('SEARCH', searchInstance, referenceInstance);
    }
  }

  addShortcut(instance, referenceInstance) {
    if (instance instanceof Shortcut) {
      this.mountPartialToComment('SHORTCUT', instance, referenceInstance);
    }
  }

  addHelp(instance, referenceInstance) {
    if (instance instanceof Help) {
      this.mountPartialToComment('SHORTCUT', instance, referenceInstance);
    }
  }

  sidenavOpen() {
    this._findDOMEl('.hig__global-nav__top-nav__hamburger', this.el).classList.add('hig__global-nav__top-nav__hamburger--menuopen');
  }

  sidenavClosed() {
    this._findDOMEl('.hig__global-nav__top-nav__hamburger', this.el).classList.remove('hig__global-nav__top-nav__hamburger--menuopen');
  }

  _setLogoAttributeForTag(tag, attr, val) {
    const scope = this._findDOMEl('.hig__global-nav__top-nav__logo', this.el);
    this._findDOMEl(tag, scope).setAttribute(attr, val);
  }
}

TopNav._interface = Interface.components.GlobalNav.partials.TopNav;
TopNav._defaults = {
  logo: null,
  logoLink: null
};

TopNav._partials = {
  Profile,
  ProjectAccountSwitcher,
  Shortcut,
  Help,
  Search
};

module.exports = TopNav;
