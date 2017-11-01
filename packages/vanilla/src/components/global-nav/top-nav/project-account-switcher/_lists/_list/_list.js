const Template = require('./_list.html');
const Core = require('_core.js');

const Title = require('./_list-title/_list-title.js');

import './_list.scss';

/**
 * Creates an List
 *
 * @class
 */

class List extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  addTitle(title) {
    const t = new Title({
      title
    });

    this.mountPartialToComment('TITLE', t);
    return t;
  }

  addItem(newInstance, referenceInstance) {
    this.mountPartialToComment('ITEMS', newInstance, referenceInstance);
  }
}

List._interface = {
  methods: {
    addTitle: {},
    addItem: {}
  }
};
List._defaults = {};
List._partials = {};

module.exports = List;
