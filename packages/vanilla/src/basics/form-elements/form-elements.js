const Core = require('_core.js');

const Checkbox = require('./checkbox/checkbox.js');
const Dropdown = require('./dropdown/dropdown.js');
const PasswordField = require('./password-field/password-field.js');
const TextField = require('./text-field/text-field.js');
const TextArea = require('./text-area/text-area.js');
const Range = require('./range/range.js');
const RadioButton = require('./radio-button/radio-button.js');

/**
 * Holder for FormElements
 *
 * @class
 */

class FormElements extends Core {
  constructor(options) { super(options); }
}

FormElements._defaults = {};
FormElements._partials = {
  Checkbox,
  Dropdown,
  PasswordField,
  TextField,
  TextArea,
  Range,
  RadioButton
};

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  FormElements._interface = Interface.basics.FormElements;
}

module.exports = FormElements;
