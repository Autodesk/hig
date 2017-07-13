import './checkbox.scss';

var Template = require('./checkbox.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an Checkbox
 *
 * @class
 */

class Checkbox extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
        this._toggleCheck = this._toggleCheck.bind(this);
    }

    _componentDidMount() {
        this.el.addEventListener('click', this._toggleCheck);
    }

    setLabel(newValue) {
        const labelClass = 'hig__form-elements__checkbox__label';
        if (newValue) {
            const labelEl = this._findOrAddElement('CHECKBOX_LABEL', 'label', labelClass);
            labelEl.textContent = newValue;
        } else {
            this.removeElementIfFound('.'+ labelClass);
        }
    }

    setName(newName){
        this._setLabelAttribute('for', newValue);
        this._setInputAttribute('name', newValue);
        this._setInputAttribute('id', newValue);
    }

    setValue(newValue){
        this._setInputAttribute('value', newValue);
        this._detectPresenceOfValue(value);
    }

    check() {
        this._addClass('hig__form-elements__checkbox--checked')
        this._setInputAttribute('checked','');
    }

    uncheck() {
        this._removeClass('hig__form-elements__checkbox--checked')
        this._removeInputAttribute('checked');
    }

    required() {
        this._addClass('hig__form-elements__checkbox--required');
        this._setInputAttribute('required', '');
    }

    noLongerRequired() {
        this._removeClass('hig__form-elements__checkbox--required');
        this._removeInputAttribute('required');
    }

    disable() {
        this._addClass('hig__form-elements__checkbox--disabled');
        this._setInputAttribute('disabled', 'true');
    }

    enable() {
        this._removeClass('hig__form-elements__checkbox--disabled');
        this._removeInputAttribute('disabled');
    }

    onChange(fn){
        return this._attachListener("change", '.hig__form-elements__checkbox__input', this.el, fn);
    }


    onHover(fn){
        return this._attachListener("hover", this.el, this.el, fn);
    }

    onFocus(fn){
        return this._attachListener("focusin", this.el, this.el, fn);
    }

    _addClass(klass) { this.el.classList.add(klass) }
    _removeClass(klass) { this.el.classList.remove(klass) }

    _setLabelAttribute(attribute, newValue) {
        const labelClass = 'hig__form-elements__checkbox__label'
        const labelEl = this._findOrAddElement('CHECKBOX_LABEL', 'label', labelClass);
        labelEl.setAttribute = newValue;
    }

    _setInputAttribute(attribute, value) {
        this._findDOMEl('.hig__form-elements__checkbox__input',this.el).setAttribute(attribute, value);
    }
    _removeInputAttribute(attribute) {
        console.log(this.el.outerHTML);
        this._findDOMEl('.hig__form-elements__checkbox__input', this.el).removeAttribute(attribute);
    }

    _toggleCheck(evt) {
        if (this._findDOMEl('.hig__form-elements__checkbox__input', this.el).hasAttribute('checked')) {
            this.uncheck();
        } else {
            this.check();
        }
    }
}

Checkbox._interface = Interface['basics']['FormElements']['partials']['Checkbox'];
Checkbox._defaults = {
    "label": "",
    "name": "",
    "value": "",
    "checked": false,
    "disabled": false,
    "required": false
};
Checkbox._partials = {};

module.exports = Checkbox;