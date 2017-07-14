//var Interface = require('interface.json');
//var Template = require('../shortcut/shortcut.html');
var Shortcut = require('../shortcut/shortcut.js');
var Interface = require('interface.json');

/**
 * Creates an Help
 *
 * @class
 */

class Help extends Shortcut {
    constructor(options){
        options.icon = 'help';
        super(options);
    }
    setLink(link) { super.setLink(link); }
    setTitle(title) { super.setTitle(title); }
    onClick(action) { super.onClick(action); }
}

Help._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['Help'];

module.exports = Help;