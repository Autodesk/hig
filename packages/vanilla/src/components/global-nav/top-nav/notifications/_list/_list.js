/* globals window */
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
    this.titleElement = this._findDOMEl('.hig__notification__title', this.el);
    this.listContent = this._findDOMEl('.hig__notifications__list-content', this.el);
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

    const listContent = this._findDOMEl(
      '.hig__notifications__list-content',
      this.el
    );
    listContent.classList.remove('hig__notifications__list-content--loaded');
  }

  setTitle(title) {
    this.titleElement.innerText = title;
  }

  setNotLoading() {
    if (!this.loading) {
      return;
    }
    this.loading.unmount();
    this.loading = undefined;

    const listContent = this._findDOMEl(
      '.hig__notifications__list-content',
      this.el
    );
    listContent.classList.add('hig__notifications__list-content--loaded');
  }

  setContentMaxHeight(maxHeight) {
    if (maxHeight) {
      this.listContent.style.maxHeight = `${maxHeight}px`;
    }
  }

  onScroll(fn) {
    return this._attachListener(
      'scroll',
      this.listContent,
      this.el,
      this._optimizedOnScroll(fn)
    );
  }

  _optimizedOnScroll = fn => () => {
    let ticking = false;
    if (!ticking) {
      const lastKnownScrollPosition = this.listContent.scrollTop;
      const { scrollHeight, clientHeight } = this.listContent;

      const scrollableHeight = scrollHeight - clientHeight;
      const percentageScrolled = lastKnownScrollPosition / scrollableHeight;

      window.requestAnimationFrame(() => {
        fn({ percentageScrolled });
        ticking = false;
      });

      ticking = true;
    }
  }
}

List._interface = {
  methods: {
    addItem: {},
    onScroll: {},
    setLoading: {},
    setNotLoading: {},
    setTitle: {},
    setContentMaxHeight: {}
  }
};
List._defaults = {};
List._partials = {};

export default List;
