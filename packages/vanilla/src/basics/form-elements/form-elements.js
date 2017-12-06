import Interface from 'interface.json';
import Core from '_core.js';

import Checkbox from 'basics/form-elements/checkbox/checkbox';
import Dropdown from 'basics/form-elements/dropdown/dropdown';
import PasswordField from 'basics/form-elements/password-field/password-field';
import TextField from 'basics/form-elements/text-field/text-field';
import TextArea from 'basics/form-elements/text-area/text-area';
import Range from 'basics/form-elements/range/range';
import RadioButton from 'basics/form-elements/radio-button/radio-button';

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
