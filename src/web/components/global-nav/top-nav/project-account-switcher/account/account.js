var Interface = require('interface.json');
var Item = require('../_item/item.js');

/**
 * Creates an Account
 *
 * @class
 */

class Account {

    constructor(options){
        options._type = 'account';
        return new Item(options);
    }

}

Account._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['ProjectAccountSwitcher']['partials']['Account'];
Account._defaults = {
    "image": "",
    "label": "",
};


module.exports = Account;