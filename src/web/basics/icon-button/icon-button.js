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
        this._findDOMEl('.hig__icon-button--enabled-button', this.el).setAttribute("title", title);
        this._findDOMEl('.hig__icon-button--disabled-button', this.el).setAttribute("title", title);
    }

    setLink(link){
        this._findDOMEl('.hig__icon-button--enabled-button', this.el).setAttribute("href", link);
    }

    setIcon(icon){
        const enabledButton = this._findDOMEl('.hig__icon-button--enabled-button', this.el);
        const disabledButton = this._findDOMEl('.hig__icon-button--disabled-button', this.el);
        const iconString = this._getIconString(icon);

        this._findDOMEl('.hig__icon-button__icon', enabledButton).innerHTML = iconString;
        this._findDOMEl('.hig__icon-button__icon', disabledButton).innerHTML = iconString;
    }

    disable(){
        this.el.classList.add('hig__icon-button__wrapper--is-disabled');
    }

    enable(){
        this.el.classList.remove('hig__icon-button__wrapper--is-disabled');
    }

    onClick(fn){
        return this._attachListener("click", '.hig__icon-button--enabled-button', this.el, fn);
    }

    onHover(fn){
        return this._attachListener("hover", '.hig__icon-button--enabled-button', this.el, fn);
    }

    onFocus(fn){
        return this._attachListener("focusin", '.hig__icon-button--enabled-button', this.el, fn);
    }

}

IconButton._interface = Interface['basics']['IconButton'];
IconButton._defaults = {
    title: "link",
    link: "#",
    icon: false
};

module.exports = IconButton;