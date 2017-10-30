import './input-button.scss';

var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Base class for InputButton (radio or checkbox)
 *
 * @class
 */

class InputButton extends Core {
  constructor(options = {}) {
    options.id = Math.floor(Math.random() * 100000, 5).toString();
    super(options);
    this.inputClass = 'hig__input-button__input';
    this.labelClass = 'hig__input-button__label';
    this.wrapperClass = 'hig__input-button';
    this.commentLabel = '';
  }

  setLabel(newLabelText) {
    const selector = '.' + this.labelClass;
    const labelEl = this._findDOMEl(selector, this.el);
    if (newLabelText) {
      // update the label text and unhide the label
      labelEl.textContent = newLabelText;
      labelEl.classList.remove('hig--hidden');
    } else {
      // empty label text and hide the label
      labelEl.classList.add('hig--hidden');
      labelEl.textContent = '';
    }
  }

  setName(newName) {
    this._setInputAttribute('name', newName);
  }

  setValue(newValue) {
    this._setInputAttribute('value', newValue);
  }

  check() {
    this._addClass(this._checkedClass());
    this._setInputAttribute('checked', '');
    this._buttonEl().checked = true;
  }

  uncheck() {
    this._removeClass(this._checkedClass());
    this._removeInputAttribute('checked');
    this._buttonEl().checked = false;
  }

  required() {
    this._addClass(this._requiredClass());
    this._setInputAttribute('required', '');
  }

  noLongerRequired() {
    this._removeClass(this._requiredClass());
    this._removeInputAttribute('required');
  }

  disable() {
    this._addClass(this._disabledClass());
    this._setInputAttribute('disabled', 'true');
  }

  enable() {
    this._removeClass(this._disabledClass());
    this._removeInputAttribute('disabled');
  }

  onChange(fn) {
    return this._attachListener('change', '.' + this.inputClass, this.el, fn);
  }

  onHover(fn) {
    return this._attachListener('hover', this.el, this.el, fn);
  }

  onFocus(fn) {
    return this._attachListener('focusin', this.el, this.el, fn);
  }

  _addClass(klass) {
    this.el.classList.add(klass);
  }
  _removeClass(klass) {
    this.el.classList.remove(klass);
  }

  _setInputAttribute(attribute, value) {
    this._buttonEl().setAttribute(attribute, value);
    return this;
  }

  _removeInputAttribute(attribute) {
    this._buttonEl().removeAttribute(attribute);
    return this;
  }

  _buttonEl() {
    return this._findDOMEl('.' + this.inputClass, this.el);
  }

  _checkedClass() {
    return `${this.wrapperClass}--checked`;
  }
  _requiredClass() {
    return `${this.wrapperClass}--required`;
  }
  _disabledClass() {
    return `${this.wrapperClass}--disabled`;
  }
}

module.exports = InputButton;
