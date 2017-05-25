import './global-nav.scss';

var Template = require('./global-nav.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var SideNav = require('./side-nav/side-nav.js');
var TopNav = require('./top-nav/top-nav.js');
var SubNav = require('./sub-nav/sub-nav.js');

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

    addTopNav(topNavInstance){
        if(topNavInstance instanceof TopNav){
            this.mountPartialToComment('TOPNAV', topNavInstance);
        }
    }

    addSubNav(subNavInstance){
        if(subNavInstance instanceof SubNav){
            this.mountPartialToComment('SUBNAV', subNavInstance);
        }
    }

    addSlot(slotElement){
        this.mountPartialToComment('SLOT', slotElement);
    }

    showSideNav(){
        this.el.classList.add("hig__global-nav--open");
    }

    hideSideNav(){
        this.el.classList.remove("hig__global-nav--open");
    }

}

GlobalNav._interface = Interface['components']['GlobalNav'];
GlobalNav._defaults = {};
GlobalNav._partials = {
    SideNav: SideNav,
    TopNav: TopNav,
    SubNav: SubNav
}

module.exports = GlobalNav;