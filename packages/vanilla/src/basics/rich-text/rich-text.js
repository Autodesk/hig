import './rich-text.scss';

const Template = require('./rich-text.html');
const Core = require('../../helpers/js/_core.js');

/**
 * Creates a RichText
 *
 * @class
 */

class RichText extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options);
    this.initialOptions = options;
  }

  _componentDidMount() {
    if (this.initialOptions.html) {
      this.setHtml(this.initialOptions.html);
    }
  }

  setHtml(html) {
    this.el.innerHTML = html;
  }
}

RichText._defaults = {
  html: ''
};

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  RichText._interface = Interface.basics.RichText;
}

module.exports = RichText;
