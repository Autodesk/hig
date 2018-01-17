import Interface from 'interface.json';
import Core from '_core.js';
import IconButton from 'components/icon-button/icon-button';
import Link from 'components/global-nav/side-nav/link/link';
import Search from 'components/global-nav/side-nav/search/search';
import Group from 'components/global-nav/side-nav/group/group';
import Template from './side-nav-full.html';
import './side-nav-full.scss';

/**
 * Creates a SideNav
 *
 * @class
 */

class SideNavFull extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options);
  }

  _componentDidMount() {
    this.themedElements = [
      this._findDOMEl('.hig__global-nav__sidenav__scroll', this.el),
      this._findDOMEl('.hig__global-nav__sidenav__super-header-link', this.el),
      this._findDOMEl('.hig__global-nav__sidenav__header-link', this.el),
      this._findDOMEl('.hig__global-nav__sidenav__super-header', this.el),
      this._findDOMEl('.hig__global-nav__sidenav__header', this.el),
      this._findDOMEl('.hig__global-nav__sidenav__copyright', this.el),
      this._findDOMEl('.hig__global-nav__side-nav__collapse', this.el)
    ];

    this._setCollapseButton();
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
      this.el
        .querySelector('.hig__global-nav__sidenav__scroll')
        .classList.add('hig__global-nav__sidenav__scroll--search');
    }
  }

  addSlot(slotElement) {
    this._findOrAddElement('SLOT', 'div', '.hig__side-nav__slot').appendChild(
      slotElement
    );
  }

  onHeaderClick(fn) {
    return this._attachListener(
      'click',
      '.hig__global-nav__sidenav__header-link',
      this.el,
      fn
    );
  }

  onSuperHeaderClick(fn) {
    return this._attachListener(
      'click',
      '.hig__global-nav__sidenav__super-header-link',
      this.el,
      fn
    );
  }

  setCopyright(copyright) {
    this.el.querySelector(
      '.hig__global-nav__sidenav__copyright'
    ).innerText = copyright;
  }

  setHeaderLabel(label) {
    this._findDOMEl(
      '.hig__global-nav__sidenav__header-link',
      this.el
    ).textContent = label;
  }

  setHeaderLink(link) {
    if (link) {
      this._findDOMEl(
        '.hig__global-nav__sidenav__header-link',
        this.el
      ).setAttribute('href', link);
    } else {
      this._findDOMEl(
        '.hig__global-nav__sidenav__header-link',
        this.el
      ).removeAttribute('href');
    }
  }

  setSuperHeaderLabel(label) {
    this._findDOMEl(
      '.hig__global-nav__sidenav__super-header-link',
      this.el
    ).textContent = label;
  }

  setSuperHeaderLink(link) {
    if (link) {
      this._findDOMEl(
        '.hig__global-nav__sidenav__super-header-link',
        this.el
      ).setAttribute('href', link);
    } else {
      this._findDOMEl(
        '.hig__global-nav__sidenav__super-header-link',
        this.el
      ).removeAttribute('href');
    }
  }

  showVariantToggleButton() {
    this._findDOMEl(
      '.hig__global-nav__side-nav__collapse',
      this.el
    ).classList.add(
      'hig__global-nav__side-nav__collapse--active'
    );
  }

  hideVariantToggleButton() {
    this._findDOMEl(
      '.hig__global-nav__side-nav__collapse',
      this.el
    ).classList.remove(
      'hig__global-nav__side-nav__collapse--active'
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

  _setCollapseButton() {
    this.iconButton = new IconButton({
      title: 'Collapse',
      icon: 'back',
      type: 'flat'
    });
    this.mountPartialToComment('COLLAPSE', this.iconButton, this.el);
  }
}

SideNavFull._interface =
  Interface.components.GlobalNav.partials.SideNav.partials.SideNavFull;
SideNavFull._defaults = {
  headerLabel: null,
  headerLink: null,
  superHeaderLabel: null,
  superHeaderLink: null,
  copyright: `${String.fromCharCode(169)} 2017 Autodesk, Inc.`
};
SideNavFull._partials = {
  Group,
  Link,
  Search
};

export default SideNavFull;
