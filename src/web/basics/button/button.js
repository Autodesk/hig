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
        this._clearAllClassTypes();
        this.el.classList.add('hig__button--'+type);
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
        return this._attachListener("focusin", this.el, this.el, fn);
    }

    _clearAllClassTypes(){
        this.el.classList.remove("hig__button--primary");
        this.el.classList.remove("hig__button--secondary");
        this.el.classList.remove("hig__button--flat");
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