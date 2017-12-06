import Interface from 'interface.json';
import Core from '_core.js';
import './option.scss';
import Template from './option.html';
import Icon from 'basics/icon/icon';

/**
 * Creates a Option
 *
 * @class
 */

class Option extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  _componentDidMount() {
    this._setIcon();
  }

  deselect() {
    this.el.classList.remove('hig__dropdown__option--selected');
  }

  onClick(fn) {
    return this._attachListener('click', this.el, this.el, fn);
  }

  onHover(fn) {
    return this._attachListener('hover', this.el, this.el, fn);
  }

  select() {
    this.el.classList.add('hig__dropdown__option--selected');
  }

  check() {
    this._findDOMEl('.hig__dropdown__option__checkmark', this.el).classList.add(
      'hig__dropdown__option--checked'
    );
  }

  uncheck() {
    this._findDOMEl(
      '.hig__dropdown__option__checkmark',
      this.el
    ).classList.remove('hig__dropdown__option--checked');
  }

  focus() {
    this.el.classList.add('hig__dropdown__option--focused');
  }

  unfocus() {
    this.el.classList.remove('hig__dropdown__option--focused');
  }

  setLabel(label) {
    this._findDOMEl('.hig__option__label', this.el).textContent = label;
  }

  setValue(value) {
    this.el.setAttribute('data-value', value);
  }

  _setIcon() {
    const mountEl = this._findDOMEl(
      '.hig__dropdown__option__checkmark',
      this.el
    );
    this._findOrCreateIconComponent(mountEl).setNameOrSVG(
      'checkmark-blue-dark'
    );
  }

  _findOrCreateIconComponent(mountElOrSelector, name = 'icon') {
    if (this[name]) {
      return this[name];
    }
    this[name] = new Icon({});
    this[name].mount(mountElOrSelector);
    return this[name];
  }
}

Option._interface = Interface.basics.FormElements.partials.Option;
Option._defaults = {
  label: '',
  value: ''
};
Option._partials = {};

export default Option;
