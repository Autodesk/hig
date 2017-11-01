const Template = require('./_list-title.html');
const Core = require('_core.js');

/**
 * Creates an List Title
 *
 * @class
 */

class Lists extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  setTitle(title) {
    this.el.textContent = title;
  }
}

Lists._interface = {
  methods: {
    setTitle: {}
  }
};
Lists._defaults = {
  title: ''
};
Lists._partials = {};

module.exports = Lists;
