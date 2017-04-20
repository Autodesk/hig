import './menu.scss';

var Template = require('./menu.html');
var Interface = require('../../../interface/interface.json');
var Core = require('../../shared/js/_core.js');

var SidebarGroup = require('./sidebar-group/sidebar-group.js');

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

    showSidebar(){
        this._findDOMEl('.js-hig__menu__sidebar').className += " hig__menu__sidebar--open";
    }

    hideSidebar(){
        var sidebar = this._findDOMEl('.js-hig__menu__sidebar');
        if(sidebar.className.indexOf(' hig__menu__sidebar--open') > -1){
            sidebar.className = sidebar.className.replace(' hig__menu__sidebar--open', '');
        }
    }

    onHamburgerClick(fn){
        return this._attachListener("click", '.js-hig__menu__content__top__hamburger', this.el, fn);
    }

    addSidebarGroup(){
        var sidebarGroup = new SidebarGroup();
        sidebarGroup.mount('.js-hig__menu__sidebar');
        return sidebarGroup;
    }

}

Menu._interface = Interface['components']['menu'];
Menu._defaults = {
    logo: "link",
    logo_link: "#"
};

module.exports = Menu;