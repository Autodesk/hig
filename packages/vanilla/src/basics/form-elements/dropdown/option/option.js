import "./option.scss";

const Template = require("./option.html");
const Interface = require("interface.json");
const Core = require("_core.js");
const Icon = require("../../../../basics/icon/icon.js");

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

  _componentDidMount(){
    this._setIcon()
  }

  deselect() {
    this.el.classList.remove("hig__dropdown__option--selected");
  }

  onClick(fn) {
    return this._attachListener("click", this.el, this.el, fn);
  }

  onHover(fn) {
    return this._attachListener("hover", this.el, this.el, fn);
  }

  select() {
    this.el.classList.add("hig__dropdown__option--selected");
  }

  setLabel(label) {
    this._findDOMEl(".hig__option__label", this.el).textContent = label;
  }

  setValue(value) {
    this.el.setAttribute("data-value", value);
  }

  _setIcon(){
    const mountEl = this._findDOMEl(".hig__dropdown__option__checkmark", this.el);
    this._findOrCreateIconComponent(mountEl).setNameOrSVG('checkmark-blue-dark');
  }

  _findOrCreateIconComponent(mountElOrSelector, name = "icon") {
    if (this[name]) {
      return this[name];
    } else {
      this[name] = new Icon({});
      this[name].mount(mountElOrSelector);
      return this[name];
    }
  }
}

Option._interface =
  Interface["basics"]["FormElements"]["partials"]["Dropdown"]["partials"][
    "Option"
  ];
Option._defaults = {
  label: "",
  value: ""
};
Option._partials = {};

module.exports = Option;
