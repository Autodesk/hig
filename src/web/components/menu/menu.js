import './menu.scss';

var Template = require('./menu.html');
var Interface = require('../../../interface/interface.json');
var Core = require('../../shared/js/_core.js');

var Sidebar = require('./sidebar/sidebar.js');
var Content = require('./content/content.js');

/**
 * Creates an Menu
 *
 * @class
 */

class Menu extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    addSidebar(sidebarInstance){
        if(sidebarInstance instanceof Sidebar){
            this.mountToComment('SIDEBAR', sidebarInstance)
        }
    }

    addContent(contentInstance){
        if(contentInstance instanceof Content){
            this.mountToComment('CONTENT', contentInstance);
        }
    }

}

Menu._interface = Interface['Components']['Menu'];
Menu._defaults = {};
Menu._partials = {
    Sidebar: Sidebar,
    Content: Content
}

module.exports = Menu;