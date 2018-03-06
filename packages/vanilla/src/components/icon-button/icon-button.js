import Interface from 'interface.json';
import Core from '_core.js';
import Icon from 'basics/icon/icon';
import Template from './icon-button.html';
import './icon-button.scss';

const AvailableTypes = ['primary', 'flat'];

/**
 * Creates an icon button
 *
 * @class
 */

class IconButton extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
    this.initialOptions = options;
  }

  _componentDidMount() {
    if (this.initialOptions.icon) {
      this.setIcon(this.initialOptions.icon);
    }

    if (this.initialOptions.size) {
      this.setSize(this.initialOptions.size);
    }

    if (this.initialOptions.title) {
      this.setTitle(this.initialOptions.title);
    }

    if (this.initialOptions.link) {
      this.setLink(this.initialOptions.link);
    }

    if (this.initialOptions.type) {
      this.setType(this.initialOptions.type);
    }
  }

  setTitle(title) {
    this.el.setAttribute('title', title);
  }

  setLink(link) {
    !link || link === ''
      ? this.el.removeAttribute('href')
      : this.el.setAttribute('href', link);
  }

  setIcon(icon) {
    const mountEl = this._findDOMEl('.hig__icon-button__icon', this.el);
    this._findOrCreateIconComponent(mountEl).setNameOrSVG(icon);
  }

  setType(type) {
    if (AvailableTypes.indexOf(type) > -1) {
      this._clearAllTypes();
      this.el.classList.add(`hig__icon-button--${type}`);
    } else {
      console.error(
        `Button type "${type}" not found, only these types are allowed: `,
        AvailableTypes
      );
    }
  }

  disable() {
    this.el.classList.add('hig__icon-button--disabled');
    this.el.setAttribute('tabindex', '-1');
  }

  enable() {
    this.el.classList.remove('hig__icon-button--disabled');
    this.el.setAttribute('tabindex', '0');
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

  onBlur(fn) {
    return this._attachListener('focusout', this.el, this.el, fn);
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
      this.el.classList.remove(`hig__icon-button--${type}`);
    });
  }
}

IconButton._interface = Interface.components.IconButton;
IconButton._defaults = {
  icon: false,
  link: null,
  title: 'button',
  type: AvailableTypes[0]
};
IconButton.AvailableTypes = AvailableTypes;

export default IconButton;
