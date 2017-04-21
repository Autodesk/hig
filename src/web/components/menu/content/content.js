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
        if(itemInstance instanceof Item){
            itemInstance.mount(this.el);
        }
    }

    addSlot(slotElement){

    }
    
}

Content._interface = Interface['Components']['Menu']['partials']['Content'];
Content._defaults = {};
Content._parials = {
    Top: Top
}

module.exports = Content;