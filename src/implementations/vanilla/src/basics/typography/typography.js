import './typography.scss';

const Template = require('./typography.html');
const Interface = require('interface.json');
const Core = require('_core.js');

/**
 * Creates Typography Class
 *
 * @class
 */

class Typography extends Core {
  constructor(options) {
    super(options);

    // Check for compliance
    if (options && ['h1', 'h2', 'h3', 'sub1', 'sub2', 'body', 'bold', 'disabled', 'caption'].indexOf(options.type) === -1) {
      console.error('Not a valid typography type!');
    }

    this._render(Template, options);
  }

  setText(text) {
    this.el.textContent = text;
  }

  setType(type) {
    // Note this assumes the type class is last in the list!
    this._removeElLastClass();
    this.el.classList.add(`hig__typography__${type}`);
  }

  _removeElLastClass() {
    this.el.classList.remove(this.el.classList.item(this.el.classList.length - 1));
  }

  applyTypographyToElement(el) {
    const e = this._findDOMEl(el);
    e.classList.add('hig__typography');
  }
}

Typography._interface = Interface.basics.Typography;
Typography._defaults = {
  text: 'text', type: 'body'
};

module.exports = Typography;
