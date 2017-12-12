import Core from '_core.js';
import Template from './_list-title.html';

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
    setTitle: {},
  },
};
Lists._defaults = {
  title: '',
};
Lists._partials = {};

export default Lists;
