import './sidebar-group.scss';

var Template = require('./sidebar-group.html');
var Interface = require('../../../../interface/interface.json');
var Core = require('../../../shared/js/_core.js');


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

    

}

SidebarGroup._interface = Interface['components']['menu']['methods']['addSidebarGroup']['returns']['sidebarGroup'];
SidebarGroup._defaults = {};

module.exports = SidebarGroup;