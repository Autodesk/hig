import Interface from 'interface.json';
import Template from './checkbox.html';
import InputButton from 'basics/form-elements/input-button/input-button';

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

Checkbox._interface =
  Interface.basics.FormElements.partials.Checkbox;
Checkbox._defaults = {
  label: '',
  name: '',
  value: ''
};
Checkbox._partials = {};

export default Checkbox;
