import Interface from 'interface.json';
import Core from '_core.js';
import './tabs.scss';
import Template from './tabs.html';
import Tab from 'components/tabs/tab/tab';

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

Tabs._interface = Interface.components.Tabs;
Tabs._defaults = {};
Tabs._partials = {
  Tab,
};

export default Tabs;
