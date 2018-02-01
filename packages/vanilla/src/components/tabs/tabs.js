import Interface from 'interface.json';
import Core from '_core.js';
import Tab from 'components/tabs/tab/tab';
import Template from './tabs.html';
import './tabs.scss';

/**
 * Creates a Tabs
 *
 * @class
 */

const AvailableAlignments = ['left', 'center', 'right'];

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

  setAlignment(alignment) {
    if (AvailableAlignments.indexOf(alignment) > -1) {
      this._clearAlignments();
      this.el.classList.add(`hig__tabs--align-${alignment}`);
    }
  }

  _clearAlignments() {
    AvailableAlignments.forEach((alignment) => {
      this.el.classList.remove(`hig__tabs--align-${alignment}`);
    });
  }
}

Tabs.AvailableAlignments = AvailableAlignments;

Tabs._interface = Interface.components.Tabs;
Tabs._defaults = {
  align: 'center'
};
Tabs._partials = {
  Tab
};

export default Tabs;
