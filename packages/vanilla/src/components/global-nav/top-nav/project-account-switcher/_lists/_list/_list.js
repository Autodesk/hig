import Template from './_list.html';
import Core from '_core.js';
import Title from 'components/global-nav/top-nav/project-account-switcher/_lists/_list/_list-title/_list-title';

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
      title,
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
    addItem: {},
  },
};
List._defaults = {};
List._partials = {};

export default List;
