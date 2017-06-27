import './heading.scss';

var Template = require('./heading.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an Heading
 *
 * @class
 */

class Heading extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    setText(text){
        this.el.textContent = text;
    }

    setSize(size){
        this.el.classList = [];
        this.el.classList.add("hig__typo__h"+size);
    }

}

Heading._interface = Interface['basics']['Typography']['partials']['Heading'];
Heading._defaults = {
    "text": "text",
    "size": 1
};
Heading._partials = {};

module.exports = Heading;