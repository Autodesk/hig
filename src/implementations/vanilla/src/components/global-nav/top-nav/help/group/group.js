import "./group.scss";

const Template = require("./group.html");
const Core = require("_core.js");
const Interface = require("interface.json");
const Option = require('../option/option.js');

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

module.exports = Group;
