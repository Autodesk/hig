var Interface = require('interface.json');
var Item = require('../_item/item.js');

/**
 * Creates an Project
 *
 * @class
 */

class Project {

    constructor(options){
        options._type = 'project';
        return new Item(options);
    }

}

Project._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['ProjectAccountSwitcher']['partials']['Project'];
Project._defaults = {
    "image": "",
    "label": "",
};


module.exports = Project;