import './range.scss';

var Template = require('./range.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates a Range
 *
 * @class
*/

class Range extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    setInstructions(instructions) {
        if (instructions) {
            const instructionsEl = this._findOrAddElement('INSTRUCTIONS', 'p', '.hig__range__instructions');
            instructionsEl.textContent = instructions;
        } else {
            this._removeElementIfFound('.hig__range__instructions');
        }
    }


   setLabel(label) {
        if (label) {
            const labelEl = this._findOrAddElement('LABEL', 'label', '.hig__range__label');
            const labelPlaceholderEl = this._findOrAddElement('LABEL-PLACEHOLDER', 'div', '.hig__range__label-placeholder');
            labelEl.textContent = label;
            labelPlaceholderEl.textContent = label;
        } else {
            this._removeElementIfFound('.hig__range__label');
            this._removeElementIfFound('.hig__range__label-placeholder');
        }
    }

    setValue(value) {
        this._findDOMEl('.hig__range__field', this.el).setAttribute("value", value);
    }

    setMaxValue(maxValue){
        this._findDOMEl('.hig__range__field', this.el).setAttribute("max", maxValue);
    }

    setMinValue(minValue){
        this._findDOMEl('.hig__range__field', this.el).setAttribute("min", minValue);
    }

    onBlur(fn){
        return this._attachListener("focusout", '.hig__range__field', this.el, fn);
    }

    onChange(fn){
        return this._attachListener("change", '.hig__range__field', this.el, fn);
    }

    onFocus(fn){
        return this._attachListener("focusin", '.hig__range__field', this.el, fn);
    }

    disable(){
        this._findDOMEl('.hig__range__field', this.el).
        this.el.classList.add('hig__range--disabled');
        this.el.setAttribute('tabindex', "-1");
    }

    enable(){
        this.el.classList.remove('hig__range--disabled');
        this.el.setAttribute('tabindex', "0");
    }

    required(requiredLabelText){
        this.el.classList.add('hig__range--required');
        const requiredNoticeEl = this._findOrAddElement('REQUIRED-NOTICE', 'p', '.hig__range__required-notice');
        requiredNoticeEl.textContent = requiredLabelText;
    }

    noLongerRequired(){
        this.el.classList.remove('hig__range--required');
        this._removeElementIfFound('.hig__range__required-notice');
    }
}

Range._interface = Interface['basics']['FormElements']['partials']['Range'];
Range._defaults = {
    value: null,
    minValue: null,
    maxValue: null,
    instructions: '',
    label: '',
};

Range._partials = {};

module.exports = Range;
