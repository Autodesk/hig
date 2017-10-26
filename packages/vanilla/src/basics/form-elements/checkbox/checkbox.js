const Template = require('./checkbox.html');
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
} 

inputButtonMethods.forEach((fn) => {
  Object.defineProperty(Checkbox.prototype, fn, {
    configurable: false,
    enumerable: false,
    writable: true,
    value: InputButton.prototype[fn]
  });
});

Checkbox._defaults = {
  label: '',
  name: '',
  value: ''
};
Checkbox._partials = {};

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  Checkbox._interface = Interface.basics.FormElements.partials.Checkbox;
}

module.exports = Checkbox;
