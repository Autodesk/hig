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

    setModuleIndicatorName(name){
        this._findDOMEl('.hig__global-nav__container__sub-nav__left', this.el).textContent = name;
    }

    setModuleIndicatorIcon(icon){
        this._findDOMEl('.hig__global-nav__container__sub-nav__left__icon', this.el).innerHTML = this._getIconString(icon);
    }

}

SubNav._interface = Interface['components']['GlobalNav']['partials']['Container']['partials']['SubNav'];
SubNav._defaults = {
    "moduleIndicatorName": "Module Name",
    "moduleIndicatorIcon": "#"
};
SubNav._partials = {};

module.exports = SubNav;