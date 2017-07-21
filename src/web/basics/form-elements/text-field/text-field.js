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
        // Ensure each text field component has an id so the label can be associated to the input
        let name = options.name;
        if (!name) {
            const randomName = Math.floor(Math.random() * 100000, 5).toString()
            name = randomName;
        }
        options.id = `text-field-${name}`;

        super(options);

        this._render(Template, options);
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this.initialOptions = options;
    }

    _componentDidMount() {
        this._detectPresenceOfValue(this.initialOptions.value);
        this.el
            .querySelector('.hig__text-field__input')
            .addEventListener('input', this._handleKeyDown);
        if (this.initialOptions.icon) {
            this.setIcon(this.initialOptions.icon);
        }
    }

    setLabel(label){
        const labelEl = this._findDOMEl('.hig__text-field__label', this.el);
        labelEl.textContent = label;
        label
            ? labelEl.classList.add('hig__text-field__label--visible')
            : labelEl.classList.remove('hig__text-field__label--visible');
    }

    setPlaceholder(placeholder){
        this._findDOMEl('.hig__text-field__input', this.el).setAttribute('placeholder', placeholder);
    }

    setValue(value){
        const inputEl = this._findDOMEl('.hig__text-field__input', this.el);
        inputEl.setAttribute('value', value);
        inputEl.value = value;
        this._detectPresenceOfValue(value);
    }

    setName(name){
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
        this._findDOMEl('.hig__text-field__input', this.el).removeAttribute('disabled');
        this.el.classList.remove('hig__text-field--disabled');
    }

    disable() {
        this._findDOMEl('.hig__text-field__input', this.el).setAttribute('disabled', 'true');
        this.el.classList.add('hig__text-field--disabled');
    }

    _addSlot(element) {
        this.mountPartialToComment('SLOT', element);
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
        passwordButton.classList.add('hig__text-field__extra--show');
    }

    _hidePasswordRevealButton() {
        const passwordButton = this.el.querySelector('.hig__text-field__password-reveal-button');
        passwordButton.classList.remove('hig__text-field__extra--show');
    }

    _onClick(fn){
        return this._attachListener("click", '.hig__text-field__input', this.el, fn);
    }

    _onPasswordRevealButtonClick(fn) {
        return this._attachListener("mousedown", '.hig__text-field__password-reveal-button', this.el, fn);
    }

    _showPasswordHideButton() {
        const iconString = this._getIconString('eye');
        const passwordButton = this.el.querySelector('.hig__text-field__password-hide-button');
        passwordButton.innerHTML = iconString;
        passwordButton.classList.add('hig__text-field__extra--show');
    }

    _hidePasswordHideButton() {
        const passwordButton = this.el.querySelector('.hig__text-field__password-hide-button');
        passwordButton.classList.remove('hig__text-field__extra--show');
    }

    _onPasswordHideButtonClick(fn) {
        return this._attachListener("mousedown", '.hig__text-field__password-hide-button', this.el, fn);
    }

    _showDropdownCaret() {
        const iconString = this._getIconString('caret');
        const caretEl = this._findOrAddElement('EXTRA', 'span', '.hig__text-field__extra.hig__text-field__extra--dropdown-caret');
        caretEl.innerHTML = iconString;
        caretEl.classList.add('hig__text-field__extra--show');
    }

    _hideDropdownCaret() {
        this._removeElementIfFound('.hig__text-field__extra.hig__text-field__extra--dropdown-caret');
    }

    _setReadonly(value) {
        const field = this._findDOMEl('.hig__text-field__input', this.el);
        value ? field.setAttribute('readonly', true) : field.removeAttribute('readonly');
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
