import './text-area.scss';

var Template = require('./text-area.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates a TextArea
 *
 * @class
 */

class TextArea extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

}

TextArea._interface = Interface['basics']['FormElements']['partials']['TextArea'];
TextArea._defaults = {
};
TextArea._partials = {};

module.exports = TextArea;