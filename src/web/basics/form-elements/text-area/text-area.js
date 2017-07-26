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

  constructor(options) {
    super(options);
    this.labelSelector = '.hig__text-area__label';
    this.inputSelector = 'textarea';
    this.initialOptions = options;

    this._handleKeyDown = this._handleKeyDown.bind(this);
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
    const labelEl = this._findDOMEl('.hig__text-area__label', this.el);
    labelEl.textContent = label;
    if (label) {
      labelEl.classList.add('hig__text-area__label--visible')
    } else {
      labelEl.classList.remove('hig__text-area__label--visible');
    }
  }

  setPlaceholder(placeholder) {
    this._findDOMEl(this.inputSelector, this.el).setAttribute('placeholder', placeholder);
  }

  setValue(value) {
    this._findDOMEl(this.inputSelector, this.el).textContent = value;
    this._detectPresenceOfValue(value)
  }

  required(requiredLabelText){
    this.el.classList.add('hig__text-area--required');
    const requiredNoticeEl = this._findOrAddElement('REQUIRED-NOTICE', 'p', '.hig__text-area__required-notice');
    requiredNoticeEl.textContent = requiredLabelText;
  }

  noLongerRequired(){
    this.el.classList.remove('hig__text-area--required');
    this._removeElementIfFound('.hig__text-area__required-notice');
  }

  enable() {
    this._findDOMEl(this.inputSelector, this.el).removeAttribute('disabled');
    this.el.classList.remove('hig__text-area--disabled');
  }

  disable() {
    this._findDOMEl(this.inputSelector, this.el).setAttribute('disabled', 'true');
    this.el.classList.add('hig__text-area--disabled');
  }

  onBlur(fn) {
    return this._attachListener("focusout", this.inputSelector, this.el, fn);
  }

  onChange(fn) {
    return this._attachListener("change", this.inputSelector, this.el, fn);
  }

  onFocus(fn) {
    return this._attachListener("focusin", this.inputSelector, this.el, fn);
  }

  onInput(fn) {
    return this._attachListener("input", this.inputSelector, this.el, fn);
  }


  _componentDidMount() {
    if (this.initialOptions) {
      this._detectPresenceOfValue(this.initialOptions.value);
    }
    this.el
        .querySelector(this.inputSelector)
        .addEventListener('input', this._handleKeyDown);
  }

  _handleKeyDown(event) {
    this._detectPresenceOfValue(event.target.value);
  }

  _detectPresenceOfValue(value) {
    if (value.length === 0) {
      this.el.querySelector(this.inputSelector).classList.add('hig__text-area__field--no-value');
      this.el.querySelector(this.inputSelector).classList.remove('hig__text-area__field--has-value');
    } else {
      this.el.querySelector(this.inputSelector).classList.remove('hig__text-area__field--no-value');
      this.el.querySelector(this.inputSelector).classList.add('hig__text-area__field--has-value');
    }
  }

}

TextArea._interface = Interface['basics']['FormElements']['partials']['TextArea'];
TextArea._defaults = {
  label: '', instructions: '', placeholder: '', value: ''
};
TextArea._partials = {};

module.exports = TextArea;