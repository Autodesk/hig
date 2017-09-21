import "./dropdown.scss";

const Template = require("./dropdown.html");
const Interface = require("interface.json");
const Core = require("_core.js");

const TextField = require("../text-field/text-field.js");
const Option = require("./option/option.js");

const OPEN_CLASS = "hig__dropdown--open";

/**
 * Creates a Dropdown
 *
 * @class
 */
class Dropdown extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);

    this.initialOptions = options;
  }

  _componentDidMount() {
    this.menu = document.createElement("div");
    this.menu.classList.add("hig__dropdown__menu");

    this.menuWrapper = document.createElement("div");
    this.menuWrapper.classList.add("hig__dropdown__menu-wrapper");
    this.menuWrapper.appendChild(this.menu);

    this.field = new TextField(this.initialOptions);
    this.mountPartialToComment("FIELD", this.field);
    this.field._setReadonly(true);
    this.field._showDropdownCaret();
    this.field._addSlot(this.menuWrapper);
  }

  addOption(option, referenceOption) {
    if (option instanceof Option) {
      option.mount(this.menu, referenceOption);
    }
  }

  close() {
    this.el.classList.remove(OPEN_CLASS);
  }

  disable() {
    this.field.disable();
  }

  enable() {
    this.field.enable();
  }

  noLongerRequired() {
    this.field.noLongerRequired();
  }

  onBlur(fn) {
    return this.field.onBlur(fn);
  }

  onClickOutside(fn) {
    return this._attachListener(
      "click",
      window.document.body,
      window.document.body,
      this._callbackIfClickOutside.bind(this, fn)
    );
  }

  onKeypress(fn) {
    return this.field._attachListener("keypress", this.el, this.el, fn);
  }

  onFocus(fn) {
    return this.field.onFocus(fn);
  }

  onTargetClick(fn) {
    return this.field._onClick(fn);
  }

  open() {
    this.el.classList.add(OPEN_CLASS);
  }

  required(requiredLabelText) {
    this.field.required(requiredLabelText);
  }

  setSelectedOptionLabel(label) {
    this.field.setValue(label);
  }

  setPlaceholder(placeholderText) {
    this.field.setPlaceholder(placeholderText);
  }

  setInstructions(instructions) {
    this.field.setInstructions(instructions);
  }

  setLabel(label) {
    this.field.setLabel(label);
  }

  _callbackIfClickOutside(callback, event) {
    if (this.menu.contains(event.target) || this.menu === event.target) {
      return;
    }
    if (
      this.field.el.contains(event.target) ||
      this.field.el === event.target
    ) {
      return;
    }
    if (this.el.classList.contains(OPEN_CLASS)) {
      callback();
    }
  }
}

Dropdown._interface =
  Interface["basics"]["FormElements"]["partials"]["Dropdown"];
Dropdown._defaults = {
  label: "",
  placeholder: "",
  instructions: ""
};
Dropdown._partials = {
  Option: Option
};

module.exports = Dropdown;
