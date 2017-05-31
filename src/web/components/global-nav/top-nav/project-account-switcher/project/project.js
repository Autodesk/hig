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

module.exports = Project;