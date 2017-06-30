import './button.scss';

var Template = require('./button.html');
var Interface = require('../../../interface/interface.json');
var Core = require('../../helpers/js/_core.js');

var AvailableTypes = ['primary', 'secondary', 'flat'];
var AvailableSizes = ['small', 'standard', 'large'];

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
        const enabledTitle = this._findDOMEl('.hig__button--enabled-button__title', this.el);
        const disabledTitle = this._findDOMEl('.hig__button--disabled-button__title', this.el);

        enabledTitle.textContent = title;
        enabledTitle.setAttribute("title", title);
        disabledTitle.textContent = title;
        disabledTitle.setAttribute("title", title);
    }

    setLink(link){
        const enabledButton = this._findDOMEl('.hig__button--enabled-button', this.el);

        enabledButton.setAttribute("href", link);
    }

    setType(type){
        if(AvailableTypes.indexOf(type) > -1){
            const enabledButton = this._findDOMEl('.hig__button--enabled-button', this.el);
            const disabledButton = this._findDOMEl('.hig__button--disabled-button', this.el);

            this._clearAllTypes();
            enabledButton.classList.add('hig__button--'+type);
            disabledButton.classList.add('hig__button--'+type);
        }else{
            console.error(`Button type "${type}" not found, only these types are allowed: `, AvailableTypes);
        }
    }

    setSize(size){
        if(AvailableSizes.indexOf(size) > -1){
            const enabledButton = this._findDOMEl('.hig__button--enabled-button', this.el);
            const disabledButton = this._findDOMEl('.hig__button--disabled-button', this.el);

            this._clearAllSizes();
            enabledButton.classList.add('hig__button--'+size);
            disabledButton.classList.add('hig__button--'+size);
        }else{
            console.error(`Button size "${size}" not found, only these sizes are allowed: `, AvailableSizes);
        }
    }

    setIcon(icon){
        // TODO
    }

    disable(){
        this.el.classList.add('hig__button__wrapper--disabled');
    }

    enable(){
        this.el.classList.remove('hig__button__wrapper--disabled');
    }

    onClick(fn){
        return this._attachListener("click", '.hig__button--enabled-button', this.el, fn);
    }

    onHover(fn){
        return this._attachListener("hover", '.hig__button--enabled-button', this.el, fn);
    }

    onFocus(fn){
        return this._attachListener("focusin", '.hig__button--enabled-button', this.el, fn);
    }

    _clearAllTypes(){
        const enabledButton = this._findDOMEl('.hig__button--enabled-button', this.el);
        const disabledButton = this._findDOMEl('.hig__button--disabled-button', this.el);

        for(var type in AvailableTypes){
            enabledButton.classList.remove("hig__button--"+type);
            disabledButton.classList.remove("hig__button--"+type);
        }
    }

    _clearAllSizes(){
        const enabledButton = this._findDOMEl('.hig__button--enabled-button', this.el);
        const disabledButton = this._findDOMEl('.hig__button--disabled-button', this.el);

        for(var size in AvailableSizes){
            enabledButton.classList.remove("hig__button--"+size);
            disabledButton.classList.remove("hig__button--"+size);
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