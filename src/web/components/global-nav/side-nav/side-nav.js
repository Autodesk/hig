import './side-nav.scss';

var Template = require('./side-nav.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var Section = require('./section/section.js');
var Link = require('./link/link.js');

/**
 * Creates an SideNav
 *
 * @class
 */

class SideNav extends Core {

    constructor(options = {}){
        super(options);
        this._render(Template, options);
    }

    addSection(sectionInstance, referenceInstance){
        if(sectionInstance instanceof Section){
            this.mountPartialToComment('SECTION', sectionInstance, referenceInstance);
        }
    }

    addLink(linkInstance, referenceInstance){
        if(linkInstance instanceof Section){
            this.mountPartialToComment('LINK', linkInstance, referenceInstance);
        }
    }

    setCopyright(copyright) {
        this.el.querySelector('.hig__global-nav__sidenav__copyright').innerText = copyright;
    }

}

SideNav._interface = Interface['components']['GlobalNav']['partials']['SideNav'];
SideNav._defaults = {
    copyright: String.fromCharCode(169) + " 2017 Autodesk, Inc."
};
SideNav._partials = {
    Section: Section,
    Link: Link
};

module.exports = SideNav;