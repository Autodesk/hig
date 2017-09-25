import "./option.scss";

const Template = require("./option.html");
const Core = require("_core.js");
const Interface = require("interface.json");

/**
 * Creates a Option
 *
 * @class
 */
class Option extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }
}

Option._interface = Interface.components.GlobalNav.partials.TopNav.partials.Help.partials.Option;
Option._defaults = {
  name: "",
  href: ""
};

module.exports = Option;
