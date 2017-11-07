const Template = require('./checkbox.html');
const Interface = require('interface.json');
const Core = require('_core.js');
const InputButton = require('../input-button/input-button.js');
const Icon = require('../../icon/icon.js');

/**
 * Creates an Checkbox
 *
 * @class
 */

// List all the fn you don't want to override so they can be defined in this prototype
const inputButtonMethods = [
  'setLabel',
  'setValue',
  'setName',
  'required',
  'noLongerRequired',
  'enable',
  'disable',
  'check',
  'uncheck',
  'onChange',
  'onFocus',
  'onHover'
];

class Checkbox extends InputButton {
  constructor(options) {
    super(options);
    this.commentLabel = 'CHECKBOX_LABEL';
    this._render(Template, options);
  }
  _componentDidMount() {
  }

  // _setIcon() {
  //   const mountEl = this._findDOMEl('.hig__input-button__input-wrapper', this.el);
  //   this._findOrCreateIconComponent(mountEl).setNameOrSVG('check-white');
  // }

  // _findOrCreateIconComponent(mountElOrSelector, name = 'icon') {
  //   if (this[name]) {
  //     return this[name];
  //   }
  //   this[name] = new Icon({});
  //   this[name].mount(mountElOrSelector);
  //   return this[name];
  // }
} 

inputButtonMethods.forEach((fn) => {
  Object.defineProperty(Checkbox.prototype, fn, {
    configurable: false,
    enumerable: false,
    writable: true,
    value: InputButton.prototype[fn]
  });
});

Checkbox._interface =
  Interface.basics.FormElements.partials.Checkbox;
Checkbox._defaults = {
  label: '',
  name: '',
  value: ''
};
Checkbox._partials = {};

module.exports = Checkbox;
