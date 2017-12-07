import Interface from 'interface.json';
import Core from '_core.js';
import './group.scss';
import Template from './group.html';
import Option from 'components/global-nav/top-nav/help/option/option';

/**
 * Creates a Group
 *
 * @class
 */
class Group extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  addOption(option, referenceOption) {
    if (option instanceof Option) {
      option.mount(this.el, referenceOption);
    }
  }
}

Group._interface = Interface.components.GlobalNav.partials.TopNav.partials.Help.partials.Group;
Group._defaults = {};
Group._partials = {
  Option,
};
export default Group;
