import './tabs.scss';

const Template = require('./tabs.html');
const Core = require('_core.js');

const Tab = require('./tab/tab.js');

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

Tabs._defaults = {};
Tabs._partials = {
  Tab
};

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  Tabs._interface = Interface.components.Tabs;
}

module.exports = Tabs;
