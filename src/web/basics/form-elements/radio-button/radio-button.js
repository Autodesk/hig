import './radio-button.scss';

var Template = require('./radio-button.html');
var Interface = require('interface.json');
var InputButton = require('../input-button/input-button.js')


// List all the fn you don't want to override so they can be defined in this prototype
const inputButtonMethods = [
    'setLabel',
    'setValue',
    'setName',
    'required',
    'noLongerRequired',
    'enable',
    'disable',
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
        this.nameClass = `hig__form-elements__input-button--${options.name}`;
        this._render(Template, options);
        this._toggleCheck = this._toggleCheck.bind(this);

    }

    _componentDidMount() {
        this.el.addEventListener('click', this._toggleCheck);
    }

    check() {
        this._uncheckAll();
        super.check();
    }

    _uncheckAll() {
        const allRadioButtons = document.getElementsByClassName(this.nameClass)
        for (var i = 0; i < allRadioButtons.length; i++) {
            allRadioButtons[i].removeAttribute('checked')
        }
    };

    _toggleCheck(evt) {
        if (this._buttonEl().hasAttribute('checked')) {
            this.uncheck();
        } else {
            this.check();
        }
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
    "value": "",
    "checked": false,
    "disabled": false,
    "required": false
};
RadioButton._partials = {};

module.exports = RadioButton;