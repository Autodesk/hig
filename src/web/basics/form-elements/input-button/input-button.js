import './input-button.scss';

var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Base class for InputButton (radio or checkbox)
 *
 * @class
 */

class InputButton extends Core {

  constructor(options){
    super(options);
    this.inputClass = 'hig__input-button__input';
    this.labelClass = 'hig__input-button__label';
    this.wrapperClass = 'hig__input-button';
    this.commentLabel = '';
  }

  setLabel(newValue) {
    this._removeElementIfFound('.'+ this.labelClass);
    if (newValue && newValue !== "") {
      this._findOrAddElement(this.commentLabel, 'label', "." + this.labelClass)
        .textContent = newValue;
    }
  }

  setName(newName){
    const currentValue = this._buttonEl().getAttribute('value');
    this._setLabelAttribute('for', newName);
    this._setInputAttribute('name', newName);
    this._setInputAttribute('id', `${newName}[${currentValue}]`);
  }

  setValue(newValue){
    this._setInputAttribute('value', newValue);
  }

  check() {
    this._addClass(this._checkedClass());
    this._buttonEl().checked = true;
  }

  uncheck() {
    this._removeClass(this._checkedClass());
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

  onChange(fn){
    return this._attachListener("change", "." + this.inputClass, this.el, fn);
  }

  onHover(fn){
    return this._attachListener("hover", this.el, this.el, fn);
  }

  onFocus(fn){
    return this._attachListener("focusin", this.el, this.el, fn);
  }

  _addClass(klass) { this.el.classList.add(klass) }
  _removeClass(klass) { this.el.classList.remove(klass) }

  _setLabelAttribute(attribute, newValue) {
    this.el.querySelector("." + this.labelClass).setAttribute = newValue;
  }

  _setInputAttribute(attribute, value) { this._buttonEl().setAttribute(attribute, value); }

  _removeInputAttribute(attribute) { this._buttonEl().removeAttribute(attribute); }

  _buttonEl() { return this._findDOMEl("." + this.inputClass, this.el) }

  _checkedClass() { return `${this.wrapperClass}--checked`; }
  _requiredClass() { return `${this.wrapperClass}--required`; }
  _disabledClass() { return `${this.wrapperClass}--disabled`; }
}

module.exports = InputButton;