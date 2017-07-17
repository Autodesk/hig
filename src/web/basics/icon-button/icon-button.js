import './icon-button.scss';

var Template = require('./icon-button.html');
var Interface = require('../../../interface/interface.json');
var Core = require('../../helpers/js/_core.js');

/**
 * Creates an icon button
 *
 * @class
 */

class IconButton extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    setTitle(title){
        this.el.setAttribute("title", title);
    }

    setLink(link){
        this.el.setAttribute("href", link);
    }

    setIcon(icon){
        const iconString = this._renderIcon(icon);

        this._findDOMEl('.hig__icon-button__icon', this.el).innerHTML = iconString;
    }

    disable(){
        this.el.classList.add('hig__icon-button--disabled');
        this.el.setAttribute('tabindex', '-1');
    }

    enable(){
        this.el.classList.remove('hig__icon-button--disabled');
        this.el.setAttribute('tabindex', '0');
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

    onBlur(fn){
        return this._attachListener("focusout", this.el, this.el, fn);
    }

}

IconButton._interface = Interface['basics']['IconButton'];
IconButton._defaults = {
    title: "link",
    link: "#",
    icon: false
};

module.exports = IconButton;