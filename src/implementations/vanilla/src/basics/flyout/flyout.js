import './flyout.scss';

var Template = require('./flyout.html');
var Interface = require('interface.json');
var Core = require('../../helpers/js/_core.js');

const OPEN_CLASS = 'hig__flyout--open';

/**
 * Creates a flyout
 *
 * @class
 */

class Flyout extends Core {
    constructor(options){
        super(options);
        this._render(Template, options);
    }

    open() {
        this.el.classList.add(OPEN_CLASS);
    }

    close() {
        this.el.classList.remove(OPEN_CLASS);
    }

    onClickOutside(fn) {
        return this._attachListener("click", window.document.body, window.document.body, this._callbackIfClickOutside.bind(this, fn));
    }

    addSlot(slotElement){
        this.mountPartialToComment('SLOT', slotElement);
    }

    addTarget(targetElement){
        this.mountPartialToComment('TARGET', targetElement);
    }

    _callbackIfClickOutside(callback, event) {
        if (this.el.contains(event.target) || this.el === event.target) { return }
        if (this.el.classList.contains(OPEN_CLASS)) {
            callback();
        }
    }
}

Flyout._interface = Interface['basics']['Flyout'];
Flyout._defaults = {
    title: "link",
    link: "#"
};

module.exports = Flyout;