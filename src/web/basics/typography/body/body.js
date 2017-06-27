import './body.scss';

var Template = require('./body.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an Body
 *
 * @class
 */

class Body extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    setText(text){
        this.el.textContent = text;
    }

    makeBold(){
        this.el.classList.add("hig__typo__bold");
    }

}

Body._interface = Interface['basics']['Typography']['partials']['Body'];
Body._defaults = {
    "text": "text"
};

module.exports = Body;