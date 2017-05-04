import './item.scss';

var Template = require('./item.html');
var Interface = require('interface.json');
var Core = require('_core.js');


/**
 * Creates an Item
 *
 * @class
 */

class Item extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    onClick(fn){
        return this._attachListener("click", this.el, this.el, fn);
    }

    onHover(fn){
        return this._attachListener("hover", this.el, this.el, fn);
    }

    setIcon(icon){
        this._findDOMEl(".hig__global-nav__side-nav__section__group__item__icon", this.el).innerHTML = this._getIconString(icon);
    }

    setTitle(title){
        this._findDOMEl(".hig__global-nav__side-nav__section__group__item__title", this.el).textContent = title;
    }

    setLink(link){
        this._findDOMEl("a", this.el).setAttribute("href", link);
    }

}

Item._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Section']['partials']['Group']['partials']['Item'];
Item._defaults = {
    "icon": "hamburger",
    "title": "title",
    "link": "#"
};

module.exports = Item;