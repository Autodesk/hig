import './collapse.scss';

var Template = require('./collapse.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an Collapse
 *
 * @class
 */

class Collapse extends Core {
    constructor(options){
        super(options);
        this._render(Template, options);
    }

    minimize(){
        this.el.classList.add("hig__global-nav__side-nav__section__collapse--collapsed");
    }

    maximize(){
        this.el.classList.remove("hig__global-nav__side-nav__section__collapse--collapsed");
    }

    onClick(fn){
        return this._attachListener("click", this.el, this.el, fn);
    }

    show(){
        this.el.classList.remove("hig__global-nav__side-nav__section__collapse--hide");
    }

    hide(){
        this.el.classList.add("hig__global-nav__side-nav__section__collapse--hide");
    }

}

Collapse._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Section']['partials']['Collapse'];
Collapse._defaults = {};
Collapse._partials = {};

module.exports = Collapse;