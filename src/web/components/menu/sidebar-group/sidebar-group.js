import './sidebar-group.scss';

var Template = require('./sidebar-group.html');
var Interface = require('../../../../interface/interface.json');
var Core = require('../../../shared/js/_core.js');

var SidebarGroupItem = require('./sidebar-group-item/sidebar-group-item.js');

/**
 * Creates an SidebarGroup
 *
 * @class
 */

class SidebarGroup extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    addSidebarGroupItem(options){
        var sidebarGroupItem = new SidebarGroupItem(options);
        sidebarGroupItem.mount(this.el);
        return sidebarGroupItem;
    }

}

SidebarGroup._interface = Interface['components']['menu']['methods']['addSidebarGroup']['returns']['sidebarGroup'];
SidebarGroup._defaults = {};

module.exports = SidebarGroup;