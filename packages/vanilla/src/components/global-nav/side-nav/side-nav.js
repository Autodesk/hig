import Interface from 'interface.json';
import Core from '_core.js';
import Link from 'components/global-nav/side-nav/link/link';
import Search from 'components/global-nav/side-nav/search/search';
import Group from 'components/global-nav/side-nav/group/group';
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

  addGroup(groupInstance, referenceInstance) {
    if (groupInstance instanceof Group) {
      this.mountPartialToComment('GROUP', groupInstance, referenceInstance);
    }
  }

  addLink(linkInstance, referenceInstance) {
    if (linkInstance instanceof Link) {
      this.mountPartialToComment('LINK', linkInstance, referenceInstance);
    }
  }

  addSearch(searchInstance, referenceInstance) {
    if (searchInstance instanceof Search) {
      this.mountPartialToComment('SEARCH', searchInstance, referenceInstance);
      this.el.querySelector('.hig__global-nav__sidenav__scroll').classList.add('hig__global-nav__sidenav__scroll--search');
    }
  }

  addSlot(slotElement) {
    this._findOrAddElement(
      'SLOT',
      'div',
      '.hig__side-nav__slot',
    ).appendChild(slotElement);
  }

  onHeaderClick(fn) {
    return this._attachListener('click', '.hig__global-nav__sidenav__header-link', this.el, fn);
  }

  onSuperHeaderClick(fn) {
    return this._attachListener('click', '.hig__global-nav__sidenav__super-header-link', this.el, fn);
  }

  setCopyright(copyright) {
    this.el.querySelector('.hig__global-nav__sidenav__copyright').innerText = copyright;
  }

  setHeaderLabel(label) {
    this._findDOMEl('.hig__global-nav__sidenav__header-link', this.el).textContent = label;
  }

  setHeaderLink(link) {
    if (link) {
      this._findDOMEl('.hig__global-nav__sidenav__header-link', this.el).setAttribute('href', link);
    } else {
      this._findDOMEl('.hig__global-nav__sidenav__header-link', this.el).removeAttribute('href');
    }
  }

  setSuperHeaderLabel(label) {
    this._findDOMEl('.hig__global-nav__sidenav__super-header-link', this.el).textContent = label;
  }

  setSuperHeaderLink(link) {
    if (link) {
      this._findDOMEl('.hig__global-nav__sidenav__super-header-link', this.el).setAttribute('href', link);
    } else {
      this._findDOMEl('.hig__global-nav__sidenav__super-header-link', this.el).removeAttribute('href');
    }
  }
}

SideNav._interface = Interface.components.GlobalNav.partials.SideNav;
SideNav._defaults = {
  headerLabel: null,
  headerLink: null,
  superHeaderLabel: null,
  superHeaderLink: null,
  copyright: `${String.fromCharCode(169)} 2017 Autodesk, Inc.`,
};
SideNav._partials = {
  Group,
  Link,
  Search,
};

export default SideNav;
