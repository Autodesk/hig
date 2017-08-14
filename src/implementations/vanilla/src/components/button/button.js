import './button.scss';

const Template = require('./button.html');
const Interface = require('interface.json');
const Core = require('../../helpers/js/_core.js');

const AvailableTypes = ['primary', 'secondary', 'flat'];
const AvailableSizes = ['small', 'standard', 'large'];

/**
 * Creates a button
 *
 * @class
 */

class Button extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
    this.initialOptions = options;
  }

  _componentDidMount() {
    if (this.initialOptions.icon) {
      this.setIcon(this.initialOptions.icon);
    }
  }

  setTitle(title) {
    this.el.setAttribute('title', title);
    this._findDOMEl('.hig__button__title', this.el).textContent = title;
  }

  setLink(link) {
    this.el.setAttribute('href', link);
  }

  setType(type) {
    if (AvailableTypes.indexOf(type) > -1) {
      this._clearAllTypes();
      this.el.classList.add(`hig__button--${type}`);
    } else {
      console.error(
        `Button type "${type}" not found, only these types are allowed: `,
        AvailableTypes,
      );
    }
  }

  setSize(size) {
    if (AvailableSizes.indexOf(size) > -1) {
      this._clearAllSizes();
      this.el.classList.add(`hig__button--${size}`);
    } else {
      console.error(
        `Button size "${size}" not found, only these sizes are allowed: `,
        AvailableSizes,
      );
    }
  }

  setIcon(icon) {
    if (icon && icon.length > 0) {
      const iconString = this._getIconString(icon);

      this._findOrAddElement(
        'ICON',
        'span',
        '.hig__button__icon',
      ).innerHTML = iconString;
    } else {
      this._removeElementIfFound('.hig__button__icon');
    }
  }

  disable() {
    this.el.classList.add('hig__button--disabled');
    this.el.setAttribute('tabindex', '-1');
  }

  enable() {
    this.el.classList.remove('hig__button--disabled');
    this.el.setAttribute('tabindex', '0');
  }

  onBlur(fn) {
    return this._attachListener('focusout', this.el, this.el, fn);
  }

  onClick(fn) {
    return this._attachListener('click', this.el, this.el, fn);
  }

  onHover(fn) {
    return this._attachListener('hover', this.el, this.el, fn);
  }

  onFocus(fn) {
    return this._attachListener('focusin', this.el, this.el, fn);
  }

  _clearAllTypes() {
    AvailableTypes.forEach((type) => {
      this.el.classList.remove(`hig__button--${type}`);
    });
  }

  _clearAllSizes() {
    AvailableSizes.forEach((size) => {
      this.el.classList.remove(`hig__button--${size}`);
    });
  }
}

Button._interface = Interface.basics.Button;
Button._defaults = {
  title: 'link',
  link: '#',
  type: 'primary',
  size: 'standard',
  icon: false,
};

Button.AvailableTypes = AvailableTypes;
Button.AvailableSizes = AvailableSizes;

module.exports = Button;
