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
        this.el = super._render(target, options, Template);
    }

    addHigEventListener(event, fn){
        if(event == 'click'){
            this._attachListener("click", this.el, this.el, fn);
        }else if(event == 'hover'){
            this._attachListener("hover", this.el, this.el, fn);
        }
    }

    setTitle(title){
        this.el.textContent = title;
    }

    setLink(link){
        this.el.setAttribute("href", link);
    }

}

Button._interface = Interface['basics']['button'];
Button._defaults = {
    title: "link",
    link: "#"
};

module.exports = Button;