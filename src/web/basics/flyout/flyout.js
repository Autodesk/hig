import './flyout.scss';

var Template = require('./flyout.html');
var Interface = require('../../../interface/interface.json');
var Core = require('../../helpers/js/_core.js');

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
        this.el.classList.add("hig__flyout--open");
    }

    close() {
        this.el.classList.remove("hig__flyout--open");
    }

    // onClickOutside() {}

    addSlot(slotElement){
        this.mountPartialToComment('SLOT', slotElement);
    }
}

Flyout._interface = Interface['basics']['Flyout'];
Flyout._defaults = {
    title: "link",
    link: "#"
};

module.exports = Flyout;