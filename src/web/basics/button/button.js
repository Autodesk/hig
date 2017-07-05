import './button.scss';

var Template = require('./button.html');
var Interface = require('../../../interface/interface.json');
var Core = require('../../helpers/js/_core.js');

var AvailableTypes = ['primary', 'secondary', 'flat'];
var AvailableSizes = ['small', 'standard', 'large'];

/**
 * Creates a button
 *
 * @class
 */

class Button extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    setTitle(title){
        this.el.setAttribute('title', title);
        this._findDOMEl('.hig__button__title', this.el).textContent = title;
    }

    setLink(link){
        this.el.setAttribute("href", link);
    }

    setType(type){
        if(AvailableTypes.indexOf(type) > -1){
            this._clearAllTypes();
            this.el.classList.add('hig__button--'+type);
        }else{
            console.error(`Button type "${type}" not found, only these types are allowed: `, AvailableTypes);
        }
    }

    setSize(size){
        if(AvailableSizes.indexOf(size) > -1){
            this._clearAllSizes();
            this.el.classList.add('hig__button--'+size);
        }else{
            console.error(`Button size "${size}" not found, only these sizes are allowed: `, AvailableSizes);
        }
    }

    setIcon(icon){
        // TODO
    }

    disable(){
        this.el.classList.add('hig__button--disabled');
        this.el.setAttribute('tabindex', "-1");
    }

    enable(){
        this.el.classList.remove('hig__button--disabled');
        this.el.setAttribute('tabindex', "0");
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

    _clearAllTypes(){
        for(var type in AvailableTypes){
            this.el.classList.remove("hig__button--"+type);
        }
    }

    _clearAllSizes(){
        for(var size in AvailableSizes){
            this.el.classList.remove("hig__button--"+size);
        }
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