import './sidebar-group-item.scss';

var Template = require('./sidebar-group-item.html');
var Interface = require('../../../../../../interface/interface.json');
var Core = require('../../../../../shared/js/_core.js');


/**
 * Creates an SidebarGroupItem
 *
 * @class
 */

class SidebarGroupItem extends Core {

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

}

SidebarGroupItem._interface = Interface['Components']['Menu']['partials']['Sidebar']['partials']['Group']['partials']['Item'];
SidebarGroupItem._defaults = {
    "title": "title",
    "link": "#"
};

module.exports = SidebarGroupItem;