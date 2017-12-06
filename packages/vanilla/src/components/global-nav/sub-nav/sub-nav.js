import Interface from 'interface.json';
import Core from '_core.js';
import './sub-nav.scss';
import Template from './sub-nav.html';
import Tabs from 'components/global-nav/sub-nav/tabs/tabs';
import Icon from 'basics/icon/icon';

/**
 * Creates an SubNav
 *
 * @class
 */

class SubNav extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
    this.initialOptions = options;
  }

  _componentDidMount() {
    if (this.initialOptions.moduleIndicatorIcon) {
      this.setModuleIndicatorIcon(this.initialOptions.moduleIndicatorIcon);
    }
  }

  setModuleIndicatorName(name) {
    this._findDOMEl(
      '.hig__global-nav__sub-nav__module-indicator__name',
      this.el
    ).textContent = name;
    this._findDOMEl(
      '.hig__global-nav__sub-nav__module-indicator__name.hig__global-nav__sub-nav__spacer',
      this.el
    ).textContent = name;
  }

  setModuleIndicatorIcon(icon) {
    const mountIndicatorIcon = this._findDOMEl(
      '.hig__global-nav__sub-nav__module-indicator__icon',
      this.el
    );
    this._findOrCreateIconComponent(
      mountIndicatorIcon,
      'indicator-icon'
    ).setNameOrSVG(icon);

    const mountIndicatorIconSpacer = this._findDOMEl(
      '.hig__global-nav__sub-nav__module-indicator__icon.hig__global-nav__sub-nav__spacer',
      this.el
    );
    this._findOrCreateIconComponent(
      mountIndicatorIconSpacer,
      'indicator-icon-spacer'
    ).setNameOrSVG(icon);
  }

  addTabs(tabsInstance) {
    if (tabsInstance instanceof Tabs) {
      this.mountPartialToComment('TABS', tabsInstance);
    }
  }

  onModuleIndicatorClick(fn) {
    return this._attachListener(
      'click',
      '.hig__global-nav__sub-nav__module-indicator',
      this.el,
      fn
    );
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

SubNav._interface = Interface.components.GlobalNav.partials.SubNav;
SubNav._defaults = {
  moduleIndicatorName: 'Module Name',
  moduleIndicatorIcon: ''
};
SubNav._partials = {
  Tabs
};

export default SubNav;
