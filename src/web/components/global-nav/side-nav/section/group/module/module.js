import './module.scss';

var Template = require('./module.html');
var Interface = require('interface.json');
var Core = require('_core.js');


/**
 * Creates an Module
 *
 * @class
 */

class Module extends Core {

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
        this._findDOMEl(".hig__global-nav__side-nav__section__group__module__icon", this.el).innerHTML = this._getIconString(icon);
    }

    setTitle(title){
        this._findDOMEl(".hig__global-nav__side-nav__section__group__module__title", this.el).textContent = title;
    }

    setLink(link){
        this._findDOMEl("a", this.el).setAttribute("href", link);
    }

}

Module._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Section']['partials']['Group']['partials']['Module'];
Module._defaults = {
    "icon": "",
    "title": "title",
    "link": "#"
};

module.exports = Module;