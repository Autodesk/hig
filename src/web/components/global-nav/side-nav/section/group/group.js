import './group.scss';

var Template = require('./group.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var Module = require('./module/module.js');

/**
 * Creates an Group in a section of the sidenav
 *
 * @class
 */

class Group extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    addModule(ModuleInstance, referenceModule){
        if(ModuleInstance instanceof Module){
            this.mountPartialToComment('MODULE', ModuleInstance, referenceModule);
        }
    }

    // For filtering / search
    show(){
        this.el.classList.remove("hig__global-nav__side-nav__section__group--hide");
    }

    hide(){
        this.el.classList.add("hig__global-nav__side-nav__section__group--hide");
    }

}

Group._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Section']['partials']['Group'];
Group._defaults = {};
Group._partials = {
    Module: Module
}

module.exports = Group;