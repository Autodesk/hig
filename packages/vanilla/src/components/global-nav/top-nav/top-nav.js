import './top-nav.scss';

const Template = require('./top-nav.html');
const Core = require('_core.js');

const Profile = require('./profile/profile.js');
const Shortcut = require('./shortcut/shortcut.js');
const Help = require('./help/help.js');
const ProjectAccountSwitcher = require('./project-account-switcher/project-account-switcher.js');
const Search = require('./search/search.js');
const Icon = require('../../../basics/icon/icon.js');

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

  _componentDidMount() {
    this._setIcons();
  }

  onHamburgerClick(fn) {
    return this._attachListener(
      'click',
      '.hig__global-nav__top-nav__hamburger',
      this.el,
      fn
    );
  }

  onLogoClick(fn) {
    return this._attachListener(
      'click',
      '.hig__global-nav__top-nav__logo',
      this.el,
      fn
    );
  }

  setLogo(logo) {
    this._findDOMEl('.hig__global-nav__top-nav__logo img', this.el).setAttribute('src', logo);
  }

  setLogoLink(link) {
    this._findDOMEl('.hig__global-nav__top-nav__logo', this.el).setAttribute('href', link);
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
      const shortcutContainer = this._findOrAddElement(
        'SHORTCUT',
        'div',
        '.hig__global-nav__top-nav__item.hig__global-nav__top-nav__spacer-container'
      );
      instance.mount(shortcutContainer, referenceInstance);
    }
  }

  addHelp(instance, referenceInstance) {
    if (instance instanceof Help) {
      const helpContainer = this._findOrAddElement(
        'SHORTCUT',
        'div',
        '.hig__global-nav__top-nav__item.hig__global-nav__top-nav__spacer-container'
      );
      instance.mount(helpContainer, referenceInstance);
    }
  }

  _setIcons() {
    const mountHamburgerIcon = this._findDOMEl('.hig__global-nav__top-nav__hamburger__hamburgericon', this.el);
    this._findOrCreateIconComponent(mountHamburgerIcon, 'hamburger').setNameOrSVG('hamburger');

    const mountCloseIcon = this._findDOMEl('.hig__global-nav__top-nav__hamburger__closeicon', this.el);
    this._findOrCreateIconComponent(mountCloseIcon, 'close-hamburger').setNameOrSVG('close-hamburger');
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

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  TopNav._interface = Interface.components.GlobalNav.partials.TopNav;
}

module.exports = TopNav;
