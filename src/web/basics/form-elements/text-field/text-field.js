import './text-field.scss';

var Template = require('./text-field.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an TextField
 *
 * @class
 */

class TextField extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    

}

TextField._interface = Interface['Basics']['FormElements']['partials']['TextField'];
TextField._defaults = {};
TextField._partials = {};

module.exports = TextField;