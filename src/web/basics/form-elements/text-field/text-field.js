import './text-field.scss';

var Template = require('./text-field.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an TextField
 *
 * @class
 */

class TextField extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    setLabel(label){

    }

    setPlaceholder(placeholder){

    }

    setValue(value){

    }

    setInstructions(instructions){

    }

    required(requiredLabelText){

    }

    noLongerRequired(){

    }

    onClick(fn){
        return this._attachListener("click", this.el, this.el, fn);
    }

    onHover(fn){
        return this._attachListener("hover", this.el, this.el, fn);
    }

    onFocus(fn){
        return this._attachListener("focusin", this.el, this.el, fn);
    }

    onBlur(fn){
        return this._attachListener("blur", this.el, this.el, fn);
    }

}

TextField._interface = Interface['basics']['FormElements']['partials']['TextField'];
TextField._defaults = {
    "label": "label",
    "placeholder": "placeholder",
    "value": "",
    "instructions": "",
    "required": false,
    "requiredLabel": ""
};
TextField._partials = {};

module.exports = TextField;