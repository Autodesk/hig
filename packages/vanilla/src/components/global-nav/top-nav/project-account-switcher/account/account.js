import Interface from 'interface.json';
import Item from '../_item/item';

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

export default Account;
