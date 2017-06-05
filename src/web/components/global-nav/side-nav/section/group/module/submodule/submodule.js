import './submodule.scss';

var Template = require('./submodule.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an Submodule
 *
 * @class
 */

class Submodule extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    

}

Submodule._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Section']['partials']['Group']['partials']['Module']['partials']['Submodule'];
Submodule._defaults = {};
Submodule._partials = {};

module.exports = Submodule;