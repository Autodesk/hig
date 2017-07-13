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

        this._findCurrentRangeValue = this._findCurrentRangeValue.bind(this);
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
            labelEl.textContent = label;
        } else {
            this._removeElementIfFound('.hig__range__label');
        }
    }

    setValue(value) {
        this._findDOMEl('.hig__range__field', this.el).setAttribute("value", value);
        this._findDOMEl('.hig__range__field__current-value', this.el).textContent = value;
    }

    setMax(maxValue){
        this._findDOMEl('.hig__range__field', this.el).setAttribute("max", maxValue);
        this._findDOMEl('.hig__range__field__range-values', this.el).dataset.rangeMax = maxValue;
    }

    setMin(minValue){
        this._findDOMEl('.hig__range__field', this.el).setAttribute("min", minValue);
        this._findDOMEl('.hig__range__field__range-values', this.el).dataset.rangeMin = minValue;
    }

    setStep(value) {
        this._findDOMEl('.hig__range__field', this.el).setAttribute("step", value);
    }

    onBlur(fn){
        return this._attachListener("focusout", '.hig__range__field', this.el, fn);
    }

    onChange(fn){
        this._attachListener("change", '.hig__range__field', this.el, fn);
        return this._attachListener("input", '.hig__range__field', this.el, this._findCurrentRangeValue);
    }

    onFocus(fn){
        return this._attachListener("focusin", '.hig__range__field', this.el, fn);
    }

    disable(){
        this._findDOMEl('.hig__range__field', this.el).setAttribute('disabled', true);
    }

    enable(){
        this._findDOMEl('.hig__range__field', this.el).removeAttribute('disabled');
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

    _findCurrentRangeValue(){
        const currentValue = this._findDOMEl('.hig__range__field', this.el).value;
        this._findDOMEl('.hig__range__field__current-value', this.el).textContent = currentValue;
    }
}

Range._interface = Interface['basics']['FormElements']['partials']['Range'];
Range._defaults = {
    value: null,
    minValue: null,
    maxValue: null,
    instructions: '',
    label: '',
    step: 1
};

Range._partials = {};

module.exports = Range;
