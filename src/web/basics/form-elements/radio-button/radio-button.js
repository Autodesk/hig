var Template = require('./radio-button.html');
var Interface = require('interface.json');
var InputButton = require('../input-button/input-button.js');


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

/**
 * Creates a RadioButton
 *
 * @class
 */

class RadioButton extends InputButton {

    constructor(options) {
        super(options);
        this.commentLabel = 'RADIOBUTTON_LABEL';
        this._render(Template, options);
    }
}

inputButtonMethods.forEach(fn => {
    Object.defineProperty(RadioButton.prototype, fn, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: InputButton.prototype[fn]
    });
});

RadioButton._interface = Interface['basics']['FormElements']['partials']['RadioButton'];
RadioButton._defaults = {
    "label": "",
    "name": "",
    "value": ""
};
RadioButton._partials = {};

module.exports = RadioButton;