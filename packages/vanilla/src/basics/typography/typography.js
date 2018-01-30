import Interface from 'interface.json';
import Core from '_core.js';
import './typography.scss';
import Template from './typography.html';

/**
 * Creates Typography Class
 *
 * @class
 */

const VALID_TYPES = [
  'h1',
  'h2',
  'h3',
  'text',
  // Deprecated types start below
  'sub1',
  'sub2',
  'body',
  'bold',
  'disabled',
  'caption'
];
const VALID_SIZES = ['small', 'medium', 'large'];
const VALID_COLORS = [
  'hig-white',
  'hig-cool-gray-70',
  'hig-blue-50',
  'hig-green-good',
  'hig-yellow-warning',
  'hig-red-alert'
];

export default class Typography extends Core {
  constructor(options) {
    super(options);
    this._checkOptionsForCompliance(options);
    this._render(Template, options);
  }

  applyTypographyToElement(el) {
    const e = this._findDOMEl(el);
    e.classList.add('hig__typography');
  }

  setText(text) {
    this.el.textContent = text;
  }

  setBold() {
    this.el.classList.add('hig__typography--bold');
  }

  setColor(color) {
    VALID_COLORS.forEach(validColor => this._unsetColor(validColor));
    this.el.classList.add(`hig__typography--${color}`);
  }

  setDisabled() {
    this.el.classList.add('hig__typography--disabled');
  }

  setOpacity(opacity) {
    /**
     * N.B.: The intent is to apply opacity to the color. Typography components currently only render text, so
     * applying opacity should have no side effects. If this component ever wraps styled content, we should reconsider
     * this mechanism, because opacity in children nodes can be magnified by this parent node.
     */
    this.el.style.opacity = opacity;
  }

  setType(type) {
    VALID_TYPES.forEach(validType => this._unsetType(validType));
    this.el.classList.add(`hig__typography__${type}`);
  }

  setSize(size) {
    VALID_SIZES.forEach(validSize => this._unsetSize(validSize));
    this.el.classList.add(`hig__typography--${size}`);
  }

  unsetBold() {
    this.el.classList.remove('hig__typography--bold');
  }

  unsetDisabled() {
    this.el.classList.remove('hig__typography--disabled');
  }

  _unsetType(type) {
    this.el.classList.remove(`hig__typography__${type}`);
  }

  _unsetSize(size) {
    this.el.classList.remove(`hig__typography--${size}`);
  }

  _unsetColor(color) {
    this.el.classList.remove(`hig__typography--${color}`);
  }

  _checkOptionsForCompliance(options) {
    if (options && VALID_TYPES.indexOf(options.type) === -1) {
      console.error('Not a supported typography type!');
    }

    if (options && VALID_SIZES.indexOf(options.size) === -1) {
      console.error('Not a supported size!');
    }

    if (options && VALID_COLORS.indexOf(options.color) === -1) {
      console.error('Not a supported color!');
    }
  }
}

Typography._interface = Interface.basics.Typography;
Typography._defaults = {
  color: 'hig-cool-gray-70',
  size: 'medium',
  opacity: 1.0,
  text: 'text',
  type: 'text'
};
