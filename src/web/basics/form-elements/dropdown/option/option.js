import './Option.scss';

const Template = require('./Option.html');
const Interface = require('interface.json');
const Core = require('_core.js');

/**
 * Creates a Option
 *
 * @class
 */

class Option extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    deselect() {
        this.el.classList.remove('hig__dropdown__option--selected');
    }

    onClick(fn) {
        return this._attachListener("click", this.el, this.el, fn);
    }

    onHover(fn) {
        return this._attachListener("hover", this.el, this.el, fn);
    }

    select() {
        this.el.classList.add('hig__dropdown__option--selected');
    }

    setLabel(label) {
        this.el.textContent = label;
    }

    setValue(value) {
        this.el.setAttribute('data-value', value);
    }

}

Option._interface = Interface['basics']['FormElements']['partials']['Dropdown']['partials']['Option'];
Option._defaults = {
    label: '',
    value: '',
};
Option._partials = {};

module.exports = Option;