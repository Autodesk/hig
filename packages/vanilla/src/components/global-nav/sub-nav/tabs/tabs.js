import Interface from 'interface.json';
import Core from '_core.js';
import Tab from 'components/global-nav/sub-nav/tabs/tab/tab';
import Template from './tabs.html';
import './tabs.scss';

/**
 * Creates a Tabs
 *
 * @class
 */

class Tabs extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  addTab(tabInstance, referenceTab) {
    if (tabInstance instanceof Tab) {
      this.mountPartialToComment('TAB', tabInstance, referenceTab);
    }
  }
}

Tabs._interface = Interface.components.GlobalNav.partials.SubNav.partials.Tabs;
Tabs._defaults = {};
Tabs._partials = {
  Tab
};

export default Tabs;
