import Interface from 'interface.json';
import Core from '_core.js';
import './range.scss';
import Template from './range.html';

/**
 * Creates a Range
 *
 * @class
*/

class Range extends Core {
  constructor(options = {}) {
    options.id = Math.floor(Math.random() * 100000, 5).toString();
    super(options);
    this._render(Template, options);

    this._findCurrentRangeValue = this._findCurrentRangeValue.bind(this);
  }

  _componentDidMount() {
    this._attachListener('change', '.hig__range__field', this.el, this._findCurrentRangeValue); // for IE11
    this._attachListener('input', '.hig__range__field', this.el, this._findCurrentRangeValue); //  for everyone else :/
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
    const field = this._findDOMEl('.hig__range__field', this.el);
    field.setAttribute('value', value);
    field.value = value;
    this._findDOMEl('.hig__range__field__current-value', this.el).textContent = value;
    this._findCurrentRangeValue();
  }

  setMax(maxValue) {
    this._findDOMEl('.hig__range__field', this.el).setAttribute('max', maxValue);
    const dataset = this._findDOMEl('.hig__range__field__range-values', this.el).dataset;
    if (dataset) {
      dataset.rangeMax = maxValue;
    }
  }

  setMin(minValue) {
    this._findDOMEl('.hig__range__field', this.el).setAttribute('min', minValue);
    const dataset = this._findDOMEl('.hig__range__field__range-values', this.el).dataset;
    if (dataset) {
      dataset.rangeMin = minValue;
    }
  }

  setStep(value) {
    this._findDOMEl('.hig__range__field', this.el).setAttribute('step', value);
  }

  onBlur(fn) {
    return this._attachListener('focusout', '.hig__range__field', this.el, fn);
  }

  onChange(fn) {
    return this._attachListener('change', '.hig__range__field', this.el, fn);
  }

  onFocus(fn) {
    return this._attachListener('focusin', '.hig__range__field', this.el, fn);
  }

  onInput(fn) {
    return this._attachListener('input', '.hig__range__field', this.el, fn);
  }

  disable() {
    this._findDOMEl('.hig__range__field', this.el).setAttribute('disabled', true);
    this.el.classList.add('hig__range--disabled');
  }

  enable() {
    this._findDOMEl('.hig__range__field', this.el).removeAttribute('disabled');
    this.el.classList.remove('hig__range--disabled');
  }

  required(requiredLabelText) {
    this.el.classList.add('hig__range--required');
    const requiredNoticeEl = this._findOrAddElement('REQUIRED-NOTICE', 'p', '.hig__range__required-notice');
    requiredNoticeEl.textContent = requiredLabelText;
  }

  noLongerRequired() {
    this.el.classList.remove('hig__range--required');
    this._removeElementIfFound('.hig__range__required-notice');
  }

  _findCurrentRangeValue() {
    const currentValue = this._findDOMEl('.hig__range__field', this.el).value;
    this._findDOMEl('.hig__range__field__current-value', this.el).textContent = currentValue;
  }
}

Range._interface = Interface.basics.FormElements.partials.Range;
Range._defaults = {
  instructions: '',
  label: '',
  minValue: 0,
  maxValue: null,
  step: 1,
  value: null
};

Range._partials = {};

export default Range;
