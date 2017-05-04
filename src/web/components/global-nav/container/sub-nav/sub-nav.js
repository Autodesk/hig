import './sub-nav.scss';

var Template = require('./sub-nav.html');
var Interface = require('interface.json');
var Core = require('_core.js');


/**
 * Creates an SubNav
 *
 * @class
 */

class SubNav extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    

}

SubNav._interface = Interface['components']['GlobalNav']['partials']['Container']['partials']['SubNav'];
SubNav._defaults = {
    logo: "link",
    logoLink: "#"
};


module.exports = SubNav;