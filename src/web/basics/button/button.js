import './button.scss';

var Template = require('./button.html');
var Interface = require('../../../interface/interface.json');
var Core = require('../../helpers/js/_core.js');

/**
 * Creates an button
 *
 * @class
 */

class Button extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    

    setTitle(title){
        this.el.textContent = title;
        this.el.setAttribute("title", title);
    }

    setLink(link){
        this.el.setAttribute("href", link);
    }

    setType(type){
        this.el.classList = [];
        this.el.classList = ['hig__button', `hig__button--${type}`]
        this.el.setAttribute("href", link);
    }

    setSize(size){

    }

    setIcon(icon){

    }

    disable(){

    }

    enable(){

    }

    onClick(fn){
        return this._attachListener("click", this.el, this.el, fn);
    }

    onHover(fn){
        return this._attachListener("hover", this.el, this.el, fn);
    }

    onFocus(fn){
        return this._attachListener("focus", this.el, this.el, fn);
    }

}

Button._interface = Interface['basics']['Button'];
Button._defaults = {
    title: "link",
    link: "#",
    type: "primary",
    size: "standard",
    icon: false
};

module.exports = Button;