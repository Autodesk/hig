import './sidebar.scss';

var Template = require('./sidebar.html');
var Interface = require('../../../../interface/interface.json');
var Core = require('../../../shared/js/_core.js');

var Group = require('./sidebar-group/sidebar-group.js');

/**
 * Creates an Sidebar
 *
 * @class
 */

class Sidebar extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    showSidebar(){
        this.el.className += " hig__menu__sidebar--open";
    }

    hideSidebar(){
        var sidebar = this.el;
        if(sidebar.className.indexOf(' hig__menu__sidebar--open') > -1){
            sidebar.className = sidebar.className.replace(' hig__menu__sidebar--open', '');
        }
    }

    addGroup(groupInstance){
        if(groupInstance instanceof Group){
            groupInstance.mount('.js-hig__menu__sidebar__group--mount');
        }
    }

}

Sidebar._interface = Interface['Components']['Menu']['partials']['Sidebar'];
Sidebar._defaults = {};
Sidebar._partials = {
    Group: Group
}

module.exports = Sidebar;