import './modal.scss';

const Template = require('./modal.html');
const Interface = require('interface.json');
const Core = require('_core.js');
const Button = require('../button/button');

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
    this._attachListener('scroll', scrollingElement, scrollingElement, (event) => this._handleScroll(event.target));
  }

  _handleScroll(scrollingElement) {
    const windowElement = this._findDOMEl('.hig__modal__window', this.el);
    if (scrollingElement.scrollTop > 0) {
        windowElement.classList.add(`hig__modal__window--scrolling`);
    } else {
        windowElement.classList.remove(`hig__modal__window--scrolling`);
    }
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
    this.el.classList.add('hig__modal--open');
  }

  setBody(body) {
    this._findDOMEl('.hig__modal__slot', this.el).textContent = body;
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
}

Modal._interface = Interface.components.Modal;
Modal._defaults = {
  body: '',
  style: 'standard',
  title: ''
};
Modal._partials = {};

module.exports = Modal;
