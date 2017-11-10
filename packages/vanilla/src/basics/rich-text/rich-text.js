import Interface from 'interface.json';
import Core from '_core.js';
import './rich-text.scss';
import Template from './rich-text.html';

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

RichText._interface = Interface.basics.RichText;
RichText._defaults = {
  html: ''
};

export default RichText;
