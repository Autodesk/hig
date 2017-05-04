import './container.scss';

var Template = require('./container.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var TopNav = require('./top-nav/top-nav.js');
// var SubNav = require('./sub-nav/sub-nav.js');

/**
 * Creates the Container
 *
 * @class
 */

class Container extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    addTopNav(topNavInstance){
        if(topNavInstance instanceof TopNav){
            this.mountPartialToComment('TOPNAV', topNavInstance);
        }
    }

    // addSubNav(subNavInstance){
    //     if(subNavInstance instanceof SubNav){
    //         this.mountPartialToComment('SUBNAV', subNavInstance);
    //     }
    // }

    addSlot(slotElement){
        this.mountPartialToComment('SLOT', slotElement);
    }
    
}

Container._interface = Interface['components']['GlobalNav']['partials']['Container'];
Container._defaults = {};
Container._partials = {
    TopNav: TopNav
}

module.exports = Container;