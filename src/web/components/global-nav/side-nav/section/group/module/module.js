import './module.scss';

var Template = require('./module.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var Submodule = require('./submodule/submodule.js');

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
        return this._attachListener("click", ".hig__global-nav__side-nav__section__group__module--link", this.el, fn);
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

    addSubmodule(SubmoduleInstance, referenceSubmodule){
        if(SubmoduleInstance instanceof Submodule){
            this.mountPartialToComment('SUBMODULE', SubmoduleInstance, referenceSubmodule);
        }
    }

    showSubmodules(){
        this._findDOMEl(".hig__global-nav__side-nav__section__group__module__submodules", this.el).classList.add("hig__global-nav__side-nav__section__group__module__submodules--show");
    }

    hideSubmodules(){
        this._findDOMEl(".hig__global-nav__side-nav__section__group__module__submodules", this.el).classList.remove("hig__global-nav__side-nav__section__group__module__submodules--show");
    }

    show(){
        this.el.classList.remove("hig__global-nav__side-nav__section__group__module--hide");
    }

    hide(){
        this.el.classList.add("hig__global-nav__side-nav__section__group__module--hide");
    }

}

Module._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Section']['partials']['Group']['partials']['Module'];
Module._defaults = {
    "icon": "",
    "title": "title",
    "link": "#"
};
Module._partials = {
    Submodule: Submodule
}

module.exports = Module;