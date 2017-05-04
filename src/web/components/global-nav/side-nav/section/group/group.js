import './group.scss';

var Template = require('./group.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var Item = require('./item/item.js');

/**
 * Creates an Group in a section of the sidenav
 *
 * @class
 */

class Group extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    addItem(itemInstance, referenceItem){
        if(itemInstance instanceof Item){
            this.mountPartialToComment('ITEM', itemInstance, referenceItem);
        }
    }

}

Group._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Section']['partials']['Group'];
Group._defaults = {};
Group._partials = {
    Item: Item
}

module.exports = Group;