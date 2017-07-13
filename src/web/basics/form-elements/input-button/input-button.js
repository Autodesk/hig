import './input-button.scss';

var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an Checkbox
 *
 * @class
 */

class InputButton extends Core {


  constructor(options){
    super(options);
    this.inputClass = 'hig__form-elements__input-button__input';
    this.labelClass = 'hig__form-elements__input-button__label';
    this.wrapperClass = 'hig__form-elements__input-button';
    this.commentLabel = '';
  }
  
  setLabel(newValue) {
    if (newValue) {
      this._findOrAddElement(this.commentLabel, 'label', this.labelClass)
        .textContent = newValue;
    } else {
      this.removeElementIfFound('.'+ this.labelClass);
    }
  }

  setName(newName){
    this.nameClass = newName;
    this.el.setAttribute('class', '${this.wrapperClass}--${newValue}');
    this._setLabelAttribute('for', newValue);
    this._setInputAttribute('name', newValue);
    this._setInputAttribute('id', newValue);
  }

  setValue(newValue){
    this._setInputAttribute('value', newValue);
    this._detectPresenceOfValue(value);
  }

  check() {
    this._addClass(this._checkedClass());
    this._setInputAttribute('checked','');
  }

  uncheck() {
    this._removeClass(this._checkedClass());
    this._removeInputAttribute('checked');
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
    this._findOrAddElement(this.commentLabel, 'label', this.labelClass)
      .setAttribute = newValue;
  }

  _setInputAttribute(attribute, value) {
    this._buttonEl().setAttribute(attribute, value);
  }
  _removeInputAttribute(attribute) {
    this._buttonEl().removeAttribute(attribute);
  }

  _buttonEl() { return this._findDOMEl("." + this.inputClass, this.el) }

  _checkedClass() { return `${this.wrapperClass}--checked`; }
  _requiredClass() { return `${this.wrapperClass}--required`; }
  _disabledClass() { return `${this.wrapperClass}--disabled`; }
}

module.exports = InputButton;