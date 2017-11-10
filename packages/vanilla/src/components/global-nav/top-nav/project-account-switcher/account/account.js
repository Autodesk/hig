const Item = require('../_item/item.js');

/**
 * Creates an Account
 *
 * @class
 */

class Account {
  constructor(options) {
    options._type = 'account';
    return new Item(options);
  }
}

Account._defaults = {
  image: '',
  label: '',
};

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  Account._interface = Interface.components.GlobalNav.partials.TopNav.partials.ProjectAccountSwitcher.partials.Account;
}

module.exports = Account;
