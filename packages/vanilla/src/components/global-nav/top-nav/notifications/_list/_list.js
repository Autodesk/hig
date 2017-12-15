import Core from '_core.js';
import Template from './_list.html';
import './_list.scss';
import Loading from '../_loading/_loading';

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

  _componentDidMount() {
    this.loadingContainer = this._findDOMEl(
      '.hig__notifications__loading-container',
      this.el
    );
  }

  addItem(newInstance, referenceInstance) {
    this.mountPartialToComment('NOTIFICATIONS', newInstance, referenceInstance);
  }

  setLoading() {
    if (this.loading) {
      return;
    }
    this.loading = new Loading();
    this.loading.mount(this.loadingContainer);
  }

  setNotLoading() {
    this.loading.unmount();
    this.loading = undefined;
  }
}

List._interface = {
  methods: {
    addItem: {},
    setLoading: {},
    setNotLoading: {}
  }
};
List._defaults = {};
List._partials = {};

export default List;
