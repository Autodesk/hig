import './submodule.scss';

var Template = require('./submodule.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an Submodule
 *
 * @class
 */

class Submodule extends Core {

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

    setTitle(title){
        this._findDOMEl(".hig__global-nav__side-nav__section__group__module__title", this.el).textContent = title;
    }

    setLink(link){
        this._findDOMEl("a", this.el).setAttribute("href", link);
    }

    show(){
        this.el.classList.remove("hig__global-nav__side-nav__section__group__module__submodule--hide");
    }

    hide(){
        this.el.classList.add("hig__global-nav__side-nav__section__group__module__submodule--hide");
    }

    activate() {
        this._findDOMEl(".hig__global-nav__side-nav__section__group__module__submodule__link", this.el).classList.add("hig__global-nav__side-nav__section__group__module__submodule__link--active");
    }

    deactivate() {
        this._findDOMEl(".hig__global-nav__side-nav__section__group__module__submodule__link", this.el).classList.remove("hig__global-nav__side-nav__section__group__module__submodule__link--active");
    }

}

Submodule._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Section']['partials']['Group']['partials']['Module']['partials']['Submodule'];
Submodule._defaults = {
    "title": "Submodule",
    "link": "#"
};
Submodule._partials = {};

module.exports = Submodule;