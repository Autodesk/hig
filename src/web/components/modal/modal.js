import './modal.scss';

const Template = require('./modal.html');
const Interface = require('interface.json');
const Core = require('_core.js');
const Button = require('../../basics/button/button');

const AvailableHeaderColors = ['white', 'slate', 'grey'];

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
        if(instance instanceof Button){
            this.mountPartialToComment('ACTIONS', instance);
        }
    }

    addSlot(slotElement) {
        this.mountPartialToComment('SLOT', slotElement);
    }

    close() {
        this.el.classList.remove('hig__modal--open');
    }

    mount() {
        this.el = document.body.appendChild(this._rendered);
        this._componentDidMount();
    }

    onOverlayClick(fn) {
        return this._attachListener('click', '.hig__modal__overlay', this.el, fn);
    }

    open() {
        this.el.classList.add('hig__modal--open');
    }

    setTitle(title) {
        this._findDOMEl('.hig__modal__header', this.el).textContent = title;
    }

    setHeaderColor(headerColor) {
        if (!AvailableHeaderColors.includes(headerColor)) {
            console.error(`Modal cannot have header color "${headerColor}". Only these colors are allowed: `, AvailableHeaderColors);
            return;
        }
        this.el.classList.remove(AvailableHeaderColors.map(c => `hig__button--${c}`));
        this.el.classList.add('hig__button--'+headerColor);
    }
}

Modal._interface = Interface['components']['Modal'];
Modal._defaults = {};
Modal._partials = {};

module.exports = Modal;
