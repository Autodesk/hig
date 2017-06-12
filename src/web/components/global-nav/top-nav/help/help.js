//var Interface = require('interface.json');
//var Template = require('../shortcut/shortcut.html');
var Shortcut = require('../shortcut/shortcut.js')
/**
 * Creates an Help
 *
 * @class
 */

class Help extends Shortcut {
    constructor(options){
        options.icon = 'help'
        super(options);
    }
    setIcon(unused) { console.error("Help icon cannot be changed.")}
    setLink(link) { super.setLink(link); }
    setTitle(title) { super.setTitle(title); }
    onClick(action) { super.onClick(action); }
}
module.exports = Help;