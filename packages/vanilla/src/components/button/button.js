import Interface from 'interface.json';
import Core from '_core.js';
import './button.scss';
import Template from './button.html';
import Icon from '../../basics/icon/icon';

const AvailableTypes = ['primary', 'secondary', 'flat'];
const AvailableSizes = ['small', 'standard', 'large'];
const AvailableWidths = ['shrink', 'grow'];

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

  setWidth(width) {
    if (AvailableWidths.indexOf(width) > -1) {
      this._clearAllWidths();
      this.el.classList.add(`hig__button--${width}`);
    } else {
      console.error(
        `Button type "${width}" not found, only these types are allowed: `,
        AvailableWidths,
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
      const mountEl = this._findOrAddElement(
        'ICON',
        'span',
        '.hig__button__icon'
      );
      this._findOrCreateIconComponent(mountEl).setNameOrSVG(icon);
    } else {
      this._removeElementIfFound('.hig__button__icon');
    }
  }

  setTarget(target) {
    this.el.setAttribute('target', target);
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

  _findOrCreateIconComponent(mountElOrSelector, name = 'icon') {
    if (this[name]) {
      return this[name];
    }
    this[name] = new Icon({});
    this[name].mount(mountElOrSelector);
    return this[name];
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

  _clearAllWidths() {
    AvailableWidths.forEach((width) => {
      this.el.classList.remove(`hig__button--${width}`);
    });
  }
}

Button._interface = Interface.components.Button;
Button._defaults = {
  icon: false,
  link: false,
  size: 'standard',
  target: '_self',
  title: 'link',
  type: 'primary',
  width: 'shrink'
};

Button.AvailableSizes = AvailableSizes;
Button.AvailableTypes = AvailableTypes;
Button.AvailableWidths = AvailableWidths;

export default Button;
