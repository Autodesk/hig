import './shortcut.scss';

var Template = require('./shortcut.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an Shortcut
 *
 * @class
 */

class Shortcut extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }


}

Shortcut._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['Shortcut'];
Shortcut._defaults = {};
Shortcut._partials = {};

module.exports = Shortcut;