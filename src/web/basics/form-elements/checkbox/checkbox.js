import './checkbox.scss';

var Template = require('./checkbox.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an Checkbox
 *
 * @class
 */

class Checkbox extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    

}

Checkbox._interface = Interface['']['partials']['Basics']['partials']['FormElements']['partials']['Checkbox'];
Checkbox._defaults = {};
Checkbox._partials = {};

module.exports = Checkbox;