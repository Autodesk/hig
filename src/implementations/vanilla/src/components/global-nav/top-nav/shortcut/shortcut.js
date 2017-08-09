import './shortcut.scss';

var Template = require('./shortcut.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an Shortcut
 *
 * @class
 */

class Shortcut extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    onClick(fn){
        return this._attachListener("click", this.el, this.el, fn);
    }

    setIcon(icon){
        this._findDOMEl(".hig__global-nav__top-nav__shortcut__link__icon", this.el).innerHTML = this._getIconString(icon);
    }

    setTitle(title){
        this.el.textContent = title;
        this.el.setAttribute("title", title);
    }

    setLink(link){
        this.el.setAttribute("href", link);
    }

}

Shortcut._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['Shortcut'];
Shortcut._defaults = {
    icon: "",
    title: "",
    link: "#"
};

module.exports = Shortcut;