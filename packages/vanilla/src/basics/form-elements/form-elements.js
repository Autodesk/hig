import Interface from 'interface.json';
import Core from '_core.js';

import Checkbox from './checkbox/checkbox';
import Dropdown from './dropdown/dropdown';
import PasswordField from './password-field/password-field';
import TextField from './text-field/text-field';
import TextArea from './text-area/text-area';
import Range from './range/range';
import RadioButton from './radio-button/radio-button';

/**
 * Holder for FormElements
 *
 * @class
 */

class FormElements extends Core {
  constructor(options) { super(options); }
}

FormElements._interface = Interface.basics.FormElements;
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

export default FormElements;
