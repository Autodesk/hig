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

    constructor(options = {}){
        if (!options.name) {
            // Ensure each text field component has a name so the label can be associated to the input
            const randomName = Math.floor(Math.random() * 100000, 5).toString()
            options.name = randomName;
        }
        super(options);

        this._render(Template, options);
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this.initialOptions = options;
    }

    _componentDidMount() {
        this.el.querySelector('.hig__text-field__input').addEventListener('input', this._handleKeyDown);
        if (this.initialOptions.icon) {
            this.setIcon(this.initialOptions.icon);
        }
    }

    setLabel(label){
        if (label) {
            const labelEl = this._findOrAddElement('LABEL', 'label', '.hig__text-field__label');
            const labelPlaceholderEl = this._findOrAddElement('LABEL-PLACEHOLDER', 'div', '.hig__text-field__label-placeholder');
            labelEl.textContent = label;
            labelPlaceholderEl.textContent = label;
        } else {
            this._removeElementIfFound('.hig__text-field__label');
            this._removeElementIfFound('.hig__text-field__label-placeholder');
        }
    }

    setPlaceholder(placeholder){
        this._findDOMEl('.hig__text-field__input', this.el).setAttribute('placeholder', placeholder);
    }

    setValue(value){
        this._findDOMEl('.hig__text-field__input', this.el).setAttribute('value', value);
        this._detectPresenceOfValue(value);
    }

    setName(name){
        this._findDOMEl('.hig__text-field__label', this.el).setAttribute('for', name);
        this._findDOMEl('.hig__text-field__input', this.el).setAttribute('id', name);
        this._findDOMEl('.hig__text-field__input', this.el).setAttribute('name', name);
    }

    setIcon(icon) {
        const iconEl = this._findDOMEl('.hig__text-field__icon', this.el);

        if (icon && icon.length > 0) {
            const iconString = this._getIconString(icon);

            iconEl.innerHTML = iconString;
            iconEl.classList.add('hig__text-field__icon--visible');
            this._findOrAddElement('ICON-SPACER', 'div', '.hig__text-field__icon-spacer');
        } else {
            iconEl.classList.remove('hig__text-field__icon--visible');
            this._removeElementIfFound('.hig__text-field__icon-spacer');
        }

    }

    setInstructions(instructions){
        if (instructions) {
            const instructionsEl = this._findOrAddElement('INSTRUCTIONS', 'p', '.hig__text-field__instructions');
            instructionsEl.textContent = instructions;
        } else {
            this._removeElementIfFound('.hig__text-field__instructions');
        }
    }

    required(requiredLabelText){
        this.el.classList.add('hig__text-field--required');
        const requiredNoticeEl = this._findOrAddElement('REQUIRED-NOTICE', 'p', '.hig__text-field__required-notice');
        requiredNoticeEl.textContent = requiredLabelText;
    }

    noLongerRequired(){
        this.el.classList.remove('hig__text-field--required');
        this._removeElementIfFound('.hig__text-field__required-notice');
    }

    onBlur(fn){
        return this._attachListener("focusout", '.hig__text-field__input', this.el, fn);
    }

    onChange(fn){
        return this._attachListener("change", '.hig__text-field__input', this.el, fn);
    }

    onFocus(fn){
        return this._attachListener("focusin", '.hig__text-field__input', this.el, fn);
    }

    onInput(fn){
        return this._attachListener("input", '.hig__text-field__input', this.el, fn);
    }

    enable() {
        this._findDOMEl('.hig__text-field__input', this.el).setAttribute('disabled', null);
    }

    disable() {
        this._findDOMEl('.hig__text-field__input', this.el).setAttribute('disabled', 'true');
    }

    _handleKeyDown(event) {
        this._detectPresenceOfValue(event.target.value);
    }

    _detectPresenceOfValue(value) {
        if (value.length === 0) {
            this.el.querySelector('.hig__text-field__input').classList.add('hig__text-field__input--no-value');
        } else {
            this.el.querySelector('.hig__text-field__input').classList.remove('hig__text-field__input--no-value');
        }
    }

    _setType(type) {
        this.el.querySelector('.hig__text-field__input').setAttribute('type', type);
    }

    _showPasswordRevealButton() {
        const iconString = this._getIconString('eye-blocked');
        const passwordButton = this.el.querySelector('.hig__text-field__password-reveal-button');
        passwordButton.innerHTML = iconString;
        passwordButton.classList.add('hig__text-field__button--show');
    }

    _hidePasswordRevealButton() {
        const passwordButton = this.el.querySelector('.hig__text-field__password-reveal-button');
        passwordButton.classList.remove('hig__text-field__button--show');
    }

    _onPasswordRevealButtonClick(fn) {
        return this._attachListener("mousedown", '.hig__text-field__password-reveal-button', this.el, fn);
    }

    _showPasswordHideButton() {
        const iconString = this._getIconString('eye');
        const passwordButton = this.el.querySelector('.hig__text-field__password-hide-button');
        passwordButton.innerHTML = iconString;
        passwordButton.classList.add('hig__text-field__button--show');
    }

    _hidePasswordHideButton() {
        const passwordButton = this.el.querySelector('.hig__text-field__password-hide-button');
        passwordButton.classList.remove('hig__text-field__button--show');
    }

    _onPasswordHideButtonClick(fn) {
        return this._attachListener("mousedown", '.hig__text-field__password-hide-button', this.el, fn);
    }

}

TextField._interface = Interface['basics']['FormElements']['partials']['TextField'];
TextField._defaults = {
    "label": "",
    "name": "",
    "icon": null,
    "placeholder": "",
    "value": "",
    "instructions": ""
};
TextField._partials = {};

module.exports = TextField;
