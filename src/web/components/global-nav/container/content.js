import './content.scss';

var Template = require('./content.html');
var Interface = require('../../../../interface/interface.json');
var Core = require('../../../shared/js/_core.js');

var Top = require('./top/top.js');

/**
 * Creates the Content
 *
 * @class
 */

class Content extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    addTop(topInstance){
        if(topInstance instanceof Top){
            this.mountPartialToComment('TOP', topInstance);
        }
    }

    addSlot(slotElement){
        this.mountPartialToComment('SLOT', slotElement);
    }
    
}

Content._interface = Interface['Components']['Menu']['partials']['Content'];
Content._defaults = {};
Content._partials = {
    Top: Top
}

module.exports = Content;