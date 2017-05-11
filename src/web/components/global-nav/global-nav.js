import './global-nav.scss';

var Template = require('./global-nav.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var SideNav = require('./side-nav/side-nav.js');
var Container = require('./container/container.js');

/**
 * Creates an GlobalNav
 *
 * @class
 */

class GlobalNav extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    addSideNav(sideNavInstance){
        if(sideNavInstance instanceof SideNav){
            this.mountPartialToComment('SIDENAV', sideNavInstance)
        }
    }

    addContainer(containerInstance){
        if(containerInstance instanceof Container){
            this.mountPartialToComment('CONTAINER', containerInstance);
        }
    }

    showSideNav(){
        this.el.className += " hig__global-nav--open";
    }

    hideSideNav(){
        var sidebar = this.el;
        if(sidebar.className.indexOf(' hig__global-nav--open') > -1){
            sidebar.className = sidebar.className.replace(' hig__global-nav--open', '');
        }
    }

}

GlobalNav._interface = Interface['components']['GlobalNav'];
GlobalNav._defaults = {};
GlobalNav._partials = {
    SideNav: SideNav,
    Container: Container
}

module.exports = GlobalNav;