import './text-area.scss';

const Template = require('./text-area.html');
const Interface = require('interface.json');
const Core = require('_core.js');

/**
 * Creates a TextArea
 *
 * @class
 */

class TextArea extends Core {
  constructor(options = {}) {
    options.id = Math.floor(Math.random() * 100000, 5).toString();
    super(options);
    this.labelSelector = '.hig__text-area__label';
    this.inputSelector = '.hig__text-area__field';
    this.initialOptions = options;

    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._render(Template, options);
  }

  _componentDidMount() {
    if (this.initialOptions) {
      this._detectPresenceOfValue(this.initialOptions.value);
    }
    this.field = this.el.querySelector(this.inputSelector);
    this.field.addEventListener('input', this._handleKeyDown);
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
      labelEl.classList.add('hig__text-area__label--visible');
    } else {
      labelEl.classList.remove('hig__text-area__label--visible');
    }
  }

  setPlaceholder(placeholder) {
    this.field.setAttribute('placeholder', placeholder);
  }

  setName(name) {
    this.field.setAttribute('name', name);
  }

  setValue(value) {
    const { selectionStart, selectionEnd } = this.field;
    this.field.value = value;
    this.field.selectionStart = selectionStart;
    this.field.selectionEnd = selectionEnd;

    this._detectPresenceOfValue(value);
  }

  required(requiredLabelText) {
    this.el.classList.add('hig__text-area--required');
    const requiredNoticeEl = this._findOrAddElement('REQUIRED-NOTICE', 'p', '.hig__text-area__required-notice');
    requiredNoticeEl.textContent = requiredLabelText;
  }

  noLongerRequired() {
    this.el.classList.remove('hig__text-area--required');
    this._removeElementIfFound('.hig__text-area__required-notice');
  }

  enable() {
    this.field.removeAttribute('disabled');
    this.el.classList.remove('hig__text-area--disabled');
  }

  disable() {
    this.field.setAttribute('disabled', 'true');
    this.el.classList.add('hig__text-area--disabled');
  }

  onBlur(fn) {
    return this._attachListener('focusout', this.inputSelector, this.el, fn);
  }

  onChange(fn) {
    return this._attachListener('change', this.inputSelector, this.el, fn);
  }

  onFocus(fn) {
    return this._attachListener('focusin', this.inputSelector, this.el, fn);
  }

  onInput(fn) {
    return this._attachListener('input', this.inputSelector, this.el, fn);
  }

  _handleKeyDown(event) {
    console.log('handling keydown');
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

TextArea._interface = Interface.basics.FormElements.partials.TextArea;
TextArea._defaults = {
  label: '',
  instructions: '',
  placeholder: '',
  value: '',
  required: '',
  name: ''
};
TextArea._partials = {};

module.exports = TextArea;
