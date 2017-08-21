import './modal.scss';

const Template = require('./modal.html');
const Interface = require('interface.json');
const Core = require('_core.js');
const Button = require('../button/button');

const AvailableHeaderColors = ['white', 'slate', 'gray'];

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

  setHeaderColor(headerColor) {
    if (!AvailableHeaderColors.includes(headerColor)) {
      console.error(
        `Modal cannot have header color "${headerColor}". Only these colors are allowed: `,
        AvailableHeaderColors
      );
      return;
    }
    const headerEl = this._findDOMEl('.hig__modal__header', this.el);
    headerEl.classList.remove(
      ...AvailableHeaderColors.map(c => `hig__modal__header--${c}`)
    );
    headerEl.classList.add(`hig__modal__header--${headerColor}`);
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
  headerColor: 'white',
  title: ''
};
Modal._partials = {};

module.exports = Modal;
