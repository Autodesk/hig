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

class Typography extends Core {
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

  setType(type) {
    VALID_TYPES.forEach(validType => this._unsetType(validType));
    this.el.classList.add(`hig__typography__${type}`);
  }

  _unsetType(type) {
    this.el.classList.remove(`hig__typography__${type}`);
  }

  applyTypographyToElement(el) {
    const e = this._findDOMEl(el);
    e.classList.add('hig__typography');
  }
}

Typography._interface = Interface.basics.Typography;
Typography._defaults = {
  text: 'text',
  type: 'body'
};

export default Typography;
