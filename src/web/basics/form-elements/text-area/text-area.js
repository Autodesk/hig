import './text-area.scss';

var Template = require('./text-area.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates a TextArea
 *
 * @class
 */

class TextArea extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    setInstructions(instructions) {
        if (instructions) {
            const instructionsEl = this._findOrAddElement('INSTRUCTIONS', 'p', '.hig__text-area__instructions');
            instructionsEl.textContent = instructions;
        } else {
            this._removeElementIfFound('.hig__text-area__instructions');
        }
    }

    setLabel(label) {
        if (label) {
            const labelEl = this._findOrAddElement('LABEL', 'label', '.hig__text-area__label');
            const labelPlaceholderEl = this._findOrAddElement('LABEL-PLACEHOLDER', 'div', '.hig__text-area__label-placeholder');
            labelEl.textContent = label;
            labelPlaceholderEl.textContent = label;
        } else {
            this._removeElementIfFound('.hig__text-area__label');
            this._removeElementIfFound('.hig__text-area__label-placeholder');
        }
    }

    setPlaceholder(placeholder) {
        this._findDOMEl('.hig__text-area__field', this.el).setAttribute('placeholder', placeholder);
    }

    setValue(value) {
        this._findDOMEl('.hig__text-area__field', this.el).textContent = value;
    }

    _findOrAddElement(searchComment, tagname, selector) {
        const existingEl = this.el.querySelector(selector, this.el);
        if (existingEl) {
            return existingEl;
        }

        const newEl = document.createElement(tagname);
        newEl.classList.add(selector.replace('.', ''));
        return this.mountPartialToComment(searchComment, newEl);
    }

    _removeElementIfFound(selector) {
        const existingEl = this.el.querySelector(selector, this.el);
        if (existingEl) {
            return existingEl.remove();
        }
    }

    onBlur(fn){
        return this._attachListener("focusout", '.hig__text-area__field', this.el, fn);
    }

    onChange(fn){
        return this._attachListener("change", '.hig__text-area__field', this.el, fn);
    }

    onFocus(fn){
        return this._attachListener("focusin", '.hig__text-area__field', this.el, fn);
    }

    onInput(fn){
        return this._attachListener("input", '.hig__text-area__field', this.el, fn);
    }

}

TextArea._interface = Interface['basics']['FormElements']['partials']['TextArea'];
TextArea._defaults = {
    label: '',
    instructions: '',
    placeholder: '',
    value: ''
};
TextArea._partials = {};

module.exports = TextArea;