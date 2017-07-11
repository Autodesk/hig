import './dropdown.scss';

const Template = require('./dropdown.html');
const Interface = require('interface.json');
const Core = require('_core.js');

const Button = require('../../button/button.js');
const Option = require('./option/option.js');

const OPEN_CLASS = 'hig__dropdown--open';

/**
 * Creates a Dropdown
 *
 * @class
 */

class Dropdown extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    _componentDidMount() {
        this.button = new Button({
            type: "secondary",
        });
        this.mountPartialToComment('BUTTON', this.button);
    }

    addOption(option, referenceOption) {
        if (option instanceof Option) {
            this.mountPartialToComment('OPTIONS', option, referenceOption);
        }
    }

    close() {
        this.el.classList.remove(OPEN_CLASS);
    }

    disable() {
        this.button.disable();
    }

    enable() {
        this.button.enable();
    }

    onBlur(fn) {
        return this.button._attachListener("focusout", this.el, this.el, fn);
    }

    onClickOutside(fn) {
        return this._attachListener("click", window.document.body, window.document.body, this._callbackIfClickOutside.bind(this, fn));
    }

    onTargetClick(fn) {
        this.button.onClick(fn);
    }

    open() {
        this.el.classList.add(OPEN_CLASS);
    }

    setSelectedOptionLabel(label) {
        this.button.setTitle(label);
    }

    setInstructions(instructions) {
        if (instructions) {
            const instructionsEl = this._findOrAddElement('INSTRUCTIONS', 'p', '.hig__dropdown__instructions');
            instructionsEl.textContent = instructions;
        } else {
            this._removeElementIfFound('.hig__dropdown__instructions');
        }
    }

    setLabel(label) {
        if (label) {
            const labelEl = this._findOrAddElement('LABEL', 'label', '.hig__dropdown__label');
            const labelPlaceholderEl = this._findOrAddElement('LABEL-PLACEHOLDER', 'div', '.hig__dropdown__label-placeholder');
            labelEl.textContent = label;
            labelPlaceholderEl.textContent = label;
        } else {
            this._removeElementIfFound('.hig__dropdown__label');
            this._removeElementIfFound('.hig__dropdown__label-placeholder');
        }
    }

    _callbackIfClickOutside(callback, event) {
        const menuEl = this._findDOMEl('.hig__dropdown__menu');

        if (menuEl.contains(event.target) || menuEl === event.target) { return }
        if (this.button.el.contains(event.target) || this.button.el === event.target) { return }
        if (this.el.classList.contains(OPEN_CLASS)) {
            callback();
        }
    }

    // setPlaceholder(placeholder) {
    //     this._findDOMEl('.hig__dropdown__field', this.el).setAttribute('placeholder', placeholder);
    // }

    // setValue(value) {
    //     this._findDOMEl('.hig__dropdown__field', this.el).textContent = value;
    // }

    // onBlur(fn){
    //     return this._attachListener("focusout", '.hig__dropdown__field', this.el, fn);
    // }

    // onFocus(fn){
    //     return this._attachListener("focusin", '.hig__dropdown__field', this.el, fn);
    // }

    // onInput(fn){
    //     return this._attachListener("input", '.hig__dropdown__field', this.el, fn);
    // }

}

Dropdown._interface = Interface['basics']['FormElements']['partials']['Dropdown'];
Dropdown._defaults = {
    instructions: '',
    label: '',
};
Dropdown._partials = {
    Option: Option
};

module.exports = Dropdown;