import './caption.scss';

var Template = require('./caption.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an Caption
 *
 * @class
 */

class Caption extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    setText(text){
        this.el.textContent = text;
    }

}

Caption._interface = Interface['basics']['Typography']['partials']['Caption'];
Caption._defaults = {
    "text": "text"
};

module.exports = Caption;