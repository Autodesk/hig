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

module.exports = Account;