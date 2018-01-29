import Interface from 'interface.json';
import Core from '_core.js';
import './typography.scss';
import Template from './typography.html';

/**
 * Creates Typography Class
 *
 * @class
 */

const VALID_TYPES = ['h1', 'h2', 'h3', 'sub1', 'sub2', 'body', 'bold', 'disabled', 'caption'];
const VALID_SIZES = ['small', 'medium', 'large'];

export default class Typography extends Core {
  constructor(options) {
    super(options);

    // Check for compliance
    if (options && VALID_TYPES.indexOf(options.type) === -1) {
      console.error('Not a valid typography type!');
    }

    this._render(Template, options);
  }

  setText(text) {
    this.el.textContent = text;
  }

  setBold() {
    this.el.classList.add('hig__typography--bold');
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

  _unsetType(type) {
    this.el.classList.remove(`hig__typography__${type}`);
  }

  _unsetSize(size) {
    this.el.classList.remove(`hig__typography--${size}`);
  }

  applyTypographyToElement(el) {
    const e = this._findDOMEl(el);
    e.classList.add('hig__typography');
  }
}

Typography._interface = Interface.basics.Typography;
Typography._defaults = {
  text: 'text',
  type: 'body',
  size: 'medium'
};
