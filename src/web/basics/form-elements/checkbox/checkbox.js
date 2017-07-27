import './checkbox.scss';

var Template = require('./checkbox.html');
var Interface = require('interface.json');
var Core = require('_core.js');
var InputButton = require('../input-button/input-button.js');

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

    constructor(options){
        super(options);
        this.commentLabel = "CHECKBOX_LABEL";
        this._render(Template, options);
    }
    _componentDidMount() {
        this._findDOMEl('.hig__input-button__input-wrapper',this.el).innerHTML = this._getIconString('check-white');
    }
}

inputButtonMethods.forEach(fn => {
    Object.defineProperty(Checkbox.prototype, fn, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: InputButton.prototype[fn]
    });
});

Checkbox._interface = Interface['basics']['FormElements']['partials']['Checkbox'];
Checkbox._defaults = {
    "label": "",
    "name": "",
    "value": ""
};
Checkbox._partials = {};

module.exports = Checkbox;