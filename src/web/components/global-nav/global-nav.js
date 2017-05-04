import './global-nav.scss';

var Template = require('./global-nav.html');
var Interface = require('../../../interface/interface.json');
var Core = require('../../shared/js/_core.js');

var SideNav = require('./side-nav/side-nav.js');
// var Container = require('./Container/Container.js');

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

    addContainer(containerInstance){}

    // addContainer(containerInstance){
    //     if(containerInstance instanceof Container){
    //         this.mountPartialToComment('CONTAINER', containerInstance);
    //     }
    // }

}

GlobalNav._interface = Interface['components']['GlobalNav'];
GlobalNav._defaults = {};
GlobalNav._partials = {
    SideNav: SideNav
}

module.exports = GlobalNav;