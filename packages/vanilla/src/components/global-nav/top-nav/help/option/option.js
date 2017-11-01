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

  onClick(fn) {
    return this._attachListener('click', this.el, this.el, fn);
  }

  setLink(link) {
    link === undefined
    ? this.el.removeAttribte('href')
    : this.el.setAttribute('href', link);
  }

  setName(name) {
    this.el.setAttribute('title', name);
    this.el.textContent = name;
  }
}

Option._interface = Interface.components.GlobalNav.partials.TopNav.partials.Help.partials.Option;
Option._defaults = {
  name: "",
  link: null
};
Option._partials = {};

module.exports = Option;
