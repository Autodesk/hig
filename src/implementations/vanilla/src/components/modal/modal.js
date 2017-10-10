import './modal.scss';

const Template = require('./modal.html');
const Interface = require('interface.json');
const Core = require('_core.js');
const Button = require('../button/button');
const Icon = require('../../basics/icon/icon.js');

const AvailableStyles = ['standard', 'alternate'];

/**
 * Creates a Modal
 *
 * @class
 */

class Modal extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  _componentDidMount() {
    const scrollingElement = this._findDOMEl('.hig__modal__slot', this.el);
    this._attachListener('scroll', scrollingElement, scrollingElement, event =>
      this._handleIsScrolling(event.target)
    );
    this._setIcon();
  }

  _handleIsScrolling(scrollingElement) {
    const windowElement = this._findDOMEl('.hig__modal__window', this.el);
    if (scrollingElement.scrollTop > 0) {
      windowElement.classList.add('hig__modal__window--is-scrolling');
    } else {
      windowElement.classList.remove('hig__modal__window--is-scrolling');
    }
  }

  _handleHasScrolling() {
    const windowElement = this._findDOMEl('.hig__modal__window', this.el);
    if (this._hasScrolling()) {
      windowElement.classList.add('hig__modal__window--has-scrolling');
    } else {
      windowElement.classList.remove('hig__modal__window--has-scrolling');
    }
  }

  _hasScrolling() {
    const scrollingElement = this._findDOMEl('.hig__modal__slot', this.el);
    return scrollingElement.scrollHeight > scrollingElement.clientHeight;
  }

  _setScrollTop(scrollTop) {
    const scrollingElement = this._findDOMEl('.hig__modal__slot', this.el);
    scrollingElement.scrollTop = scrollTop;
    this._handleIsScrolling(scrollingElement);
  }

  addButton(instance) {
    if (instance instanceof Button) {
      this.mountPartialToComment('ACTIONS', instance);
    }
  }

  addSlot(slotElement) {
    this._findDOMEl('.hig__modal__slot', this.el).appendChild(slotElement);
  }

  close() {
    this.el.classList.remove('hig__modal--open');
    this.el.classList.add('hig__modal--close');
  }

  mount(mountNode) {
    const parentNode = mountNode ? this._findDOMEl(mountNode) : document.body;
    this.el = parentNode.appendChild(this._rendered);
    this._componentDidMount();
  }

  onCloseClick(fn) {
    return this._attachListener(
      'click',
      '.hig__modal__close-button',
      this.el,
      fn
    );
  }

  onOverlayClick(fn) {
    return this._attachListener(
      'click',
      '.hig__modal__overlay',
      this.el,
      this._callbackIfOverlayClicked.bind(this, fn)
    );
  }

  open() {
    this.el.classList.remove('hig__modal--close');
    this.el.classList.add('hig__modal--open');
    this._handleHasScrolling();
  }

  setBody(body) {
    this._findDOMEl('.hig__modal__slot', this.el).textContent = body;
    this._handleHasScrolling();
  }

  setStyle(style) {
    if (!AvailableStyles.includes(style)) {
      console.error(
        `Modal cannot have style "${style}". Only these styles are allowed: `,
        AvailableStyles
      );
      return;
    }
    const windowEl = this._findDOMEl('.hig__modal__window', this.el);
    windowEl.classList.remove(
      ...AvailableStyles.map(s => `hig__modal__window--${s}`)
    );
    windowEl.classList.add(`hig__modal__window--${style}`);
  }

  setTitle(title) {
    this._findDOMEl('.hig__modal__header-title', this.el).textContent = title;
  }

  _callbackIfOverlayClicked(callback, event) {
    if (event.target.classList.contains('hig__modal__overlay')) {
      callback(event);
    }
  }

  _setIcon() {
    const mountedEl = this._findDOMEl('.hig__modal__close-button', this.el);
    this._findOrCreateIconComponent(mountedEl).setNameOrSVG('x-close-gray');
  }

  _findOrCreateIconComponent(mountElOrSelector, name = 'icon') {
    if (this[name]) {
      return this[name];
    }
    this[name] = new Icon({});
    this[name].mount(mountElOrSelector);
    return this[name];
  }
}

Modal._interface = Interface.components.Modal;
Modal._defaults = {
  body: '',
  style: 'standard',
  title: ''
};
Modal._partials = {};

Modal.AvailableStyles = AvailableStyles;

module.exports = Modal;
