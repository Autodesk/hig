import './modal.scss';

var Template = require('./modal.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates a Modal
 *
 * @class
 */

class Modal extends Core {
  constructor() {
    super({});
    this._render(Template, {});
  }

  mount() {
    this.el = document.body.appendChild(this._rendered);
    this._componentDidMount();
  }

  addSlot(slotElement) {
    this.mountPartialToComment('SLOT', slotElement);
  }

  onOverlayClick(fn) {
    return this._attachListener('click', '.hig__modal__overlay', this.el, fn);
  }

  open() {
    this.el.classList.add('hig__modal--open');
  }

  close() {
    this.el.classList.remove('hig__modal--open');
  }
}

Modal._interface = Interface['components']['Modal'];
Modal._defaults = {};
Modal._partials = {};

module.exports = Modal;
