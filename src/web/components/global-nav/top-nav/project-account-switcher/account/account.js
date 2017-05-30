import './account.scss';

var Template = require('./account.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an Account
 *
 * @class
 */

class Account extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    

}

Account._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['ProjectAccountSwitcher']['partials']['']['partials']['Account'];
Account._defaults = {};
Account._partials = {};

module.exports = Account;