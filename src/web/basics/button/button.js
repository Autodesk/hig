import './button.scss';

var Template = require('./button.html');
var Interface = require('../../../interface/interface.json');
var Core = require('../../shared/js/_core.js');

/**
 * Creates an button
 *
 * @class
 */

class Button extends Core {

    constructor(target, options){
        super(options);
        this._render(target, options);
    }

    _render(target, options){
        // RENDER TO DOM
        this.el = super.render(target, options, Template);

        // ATTACH EVENTS
        this._attachListener("click", this.el, this.el, 'click');
        this._attachListener("mouseenter", this.el, this.el, 'hover');
    }

    setTitle(title){
        this.el.querySelectorAll("a")[0].textContent = title;
    }

    setLink(link){
        this.el.querySelectorAll("a")[0].setAttribute("href", link);
    }

}

Button._interface = Interface['basics']['button'];
Button._defaults = {
    title: "link",
    link: "#"
};

module.exports = Button;